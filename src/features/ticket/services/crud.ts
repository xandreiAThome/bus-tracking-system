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
  cashier_id: number
) {
  try {
    const conn = await pool.getConnection();
    try {
      if (!validateDecimal6_2(price)) {
        return Response.json({ message: "Price is invalid" }, { status: 400 });
      }
      const [result] = await conn.execute<ResultSetHeader>(
        "INSERT INTO ticket (price, trip_id, cashier_id) VALUES (?, ?, ?)",
        [price, trip_id, cashier_id]
      );
      if (result.affectedRows === 0) {
        return Response.json(
          { message: "Internal Server Error" },
          { status: 500 }
        );
      }
      return Response.json(
        { message: "Ticket created successfully" },
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
  try {
    const conn = await pool.getConnection();
    try {
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
