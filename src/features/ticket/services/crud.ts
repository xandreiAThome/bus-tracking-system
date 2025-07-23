import pool from "@/lib/db";
import { catchDBError } from "@/lib/utils";
import { validateDecimal6_2 } from "@/lib/utils";
import { RowDataPacket } from "mysql2";
import { ResultSetHeader } from "mysql2";

export async function getAllTickets() {
  try {
    const conn = await pool.getConnection();
    try {
      const [tickets] = await conn.query<RowDataPacket[]>(
        "SELECT * FROM ticket"
      );
      if (!tickets) {
        return Response.json(
          { message: "No available tickets" },
          { status: 404 }
        );
      }
      return Response.json({ tickets }, { status: 200 });
    } finally {
      conn.release();
    }
  } catch (err) {
    console.error("DB Error:", err);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

/**
 * Gets the data of a ticket
 *
 * @param {number} id The ID of the `ticket`
 */
export async function getTicket(id: number) {
  try {
    const conn = await pool.getConnection();
    try {
      // Check if ticket exists
      const [tickets] = await conn.query<RowDataPacket[]>(
        "SELECT * FROM ticket WHERE id = ?",
        [id]
      );
      const ticket = tickets[0];
      if (!ticket) {
        return Response.json({ message: "ticket not found" }, { status: 404 });
      }
      return Response.json({ ticket }, { status: 200 });
    } finally {
      conn.release();
    }
  } catch (err) {
    console.error("DB Error:", err);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

/**
 * Adds a ticket to the database
 *
 * @param {string} price The price of the ticket
 * @param {number} trip_id The id of the bus associated with the ticket
 * @param {number} cashier_id The id of the bus associated with the ticket
 */
export async function addTicket(
  price: string,
  trip_id: number,
  cashier_id: number,
  ticket_type: string
) {
  try {
    const conn = await pool.getConnection();
    try {
      if (!validateDecimal6_2(price)) {
        return Response.json({ message: "Price is invalid" }, { status: 400 });
      }
      const [result] = await conn.execute<ResultSetHeader>(
        "INSERT INTO ticket (price, trip_id, cashier_id, ticket_type) VALUES (?, ?, ?, ?)",
        [price, trip_id, cashier_id, ticket_type]
      );
      if (result.affectedRows === 0) {
        return Response.json(
          { message: "Internal Server Error" },
          { status: 500 }
        );
      }
      return Response.json(
        { message: "Ticket created successfully",
          id: result.insertId,
        },
        { status: 201 }
      );
    } finally {
      conn.release();
    }
  } catch (err: any) {
    console.error("DB Error:", err);
    return catchDBError(err);
  }
}

/**
 * Deletes a ticket from the database
 *
 * @param {number} id The ID of the `ticket` to be deleted
 */
export async function deleteTicket(id: number) {
  /**TODO: Also Delete the associated passenger/baggage ticket */ 
  try {
    const conn = await pool.getConnection();
    try {
      await conn.execute("DELETE FROM passenger_ticket WHERE ticket_id = ?", [id]);
      await conn.execute("DELETE FROM baggage_ticket WHERE ticket_id = ?", [id]);
      const [result] = await conn.execute<ResultSetHeader>(
        "DELETE FROM ticket WHERE id = ?",
        [id]
      );
      if (result.affectedRows === 0) {
        return Response.json(
          { message: `Ticket with id ${id} not found` },
          { status: 404 }
        );
      }
      return Response.json(
        { message: `Ticket with id ${id} deleted successfully` },
        { status: 200 }
      );
    } finally {
      conn.release();
    }
  } catch (err: any) {
    console.error("DB Error:", err);
    return catchDBError(err);
  }
}

export async function addPassengerTicket(
  ticket_id: number,
  passenger_name: string,
  discount: string | null
) {
  try {
    const conn = await pool.getConnection();
    try {
      const [result] = await conn.execute<ResultSetHeader>(
        `INSERT INTO passenger_ticket (ticket_id, passenger_name, discount) VALUES (?, ?, ?)`,
        [ticket_id, passenger_name, discount]
      );
      if (result.affectedRows === 0) {
        return Response.json(
          { message: "Failed to create passenger ticket" },
          { status: 500 }
        );
      }
      return Response.json(
        { message: "Passenger ticket created successfully" },
        { status: 201 }
      );
    } finally {
      conn.release();
    }
  } catch (err) {
    console.error("DB Error:", err);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

export async function getPassengerTicketByTicketId(ticket_id: number) {
  try {
    const conn = await pool.getConnection();
    try {
      const [rows] = await conn.query<RowDataPacket[]>(
        `SELECT * FROM passenger_ticket WHERE ticket_id = ?`,
        [ticket_id]
      );
      const passengerTicket = rows[0];
      if (!passengerTicket) {
        return null;
      }
      return passengerTicket;
    } finally {
      conn.release();
    }
  } catch (err) {
    console.error("DB Error:", err);
    return null;
  }
}

export async function createPassengerTicket(
  price: string,
  trip_id: number,
  cashier_id: number,
  ticket_type: string,
  passenger_name: string,
  discount: string | null
) {
  try {
    const newTicketResponse = await addTicket(price, trip_id, cashier_id, ticket_type)
    if (newTicketResponse.status !== 201) {
      return newTicketResponse;
    }
    const newTicketData = await newTicketResponse.json()
    return addPassengerTicket(newTicketData.id, passenger_name, discount)
  } catch (err) {
    console.error("DB Error:", err);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

export async function addBaggageTicket(
  ticket_id: number,
  sender_no: number,
  dispatcher_no: number,
  sender_name: string,
  receiver_name: string,
  item: string
) {
  try {
    const conn = await pool.getConnection();
    try {
      const [result] = await conn.execute<ResultSetHeader>(
        `INSERT INTO baggage_ticket 
          (ticket_id, sender_no, dispatcher_no, sender_name, receiver_name, item) 
         VALUES (?, ?, ?, ?, ?, ?)`,
        [ticket_id, sender_no, dispatcher_no, sender_name, receiver_name, item]
      );
      if (result.affectedRows === 0) {
        return Response.json(
          { message: "Failed to create baggage ticket" },
          { status: 500 }
        );
      }
      return Response.json(
        { message: "Baggage ticket created successfully" },
        { status: 201 }
      );
    } finally {
      conn.release();
    }
  } catch (err) {
    console.error("DB Error:", err);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

export async function getBaggageTicketByTicketId(ticket_id: number) {
  try {
    const conn = await pool.getConnection();
    try {
      const [rows] = await conn.query<RowDataPacket[]>(
        `SELECT * FROM baggage_ticket WHERE ticket_id = ?`,
        [ticket_id]
      );
      const baggageTicket = rows[0];
      if (!baggageTicket) {
        return null;
      }
      return baggageTicket;
    } finally {
      conn.release();
    }
  } catch (err) {
    console.error("DB Error:", err);
    return null;
  }
}

export async function createBaggageTicket(
  price: string,
  trip_id: number,
  cashier_id: number,
  ticket_type: string,
  sender_no: number,
  dispatcher_no: number,
  sender_name: string,
  receiver_name: string,
  item: string
) {
  try {
    const newTicketResponse = await addTicket(price, trip_id, cashier_id, ticket_type)
    if (newTicketResponse.status !== 201) {
      return newTicketResponse;
    }
    const newTicketData = await newTicketResponse.json()
    return addBaggageTicket(newTicketData.id, sender_no, dispatcher_no, sender_name, receiver_name, item)
  } catch (err) {
    console.error("DB Error:", err);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}