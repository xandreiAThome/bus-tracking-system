import pool from "@/lib/db";
import { catchDBError } from "@/lib/utils";
import { RowDataPacket } from "mysql2";
import { ResultSetHeader } from "mysql2";

export async function getAllSeats(){
  try{
    const conn = await pool.getConnection();
    try{
      const [seats] = await conn.query<RowDataPacket[]>(
        "SELECT * FROM seat"
      );
      if(!seats){
        return Response.json({message: "No available seats"}, {status: 404});
      }
      return Response.json({seats}, {status: 200});
    } finally{
      conn.release();
    }

  } catch(err){
    console.error("DB Error:", err);
    return Response.json({message: "Internal Server Error"}, {status: 500});
  }
}

/**
 * Gets the data of a seat
 *
 * @param {number} id The ID of the `seat`
 */
export async function getSeat(id: number) {
  try {
    const conn = await pool.getConnection();
    try {
      // Check if seat exists
      const [seats] = await conn.query<RowDataPacket[]>(
        "SELECT * FROM seat WHERE id = ?",
        [id]
      );
      const seat = seats[0];
      if (!seat) {
        return Response.json( { message: "seat not found" }, { status: 404 });
      }
      return Response.json({seat}, { status: 200 });
    } finally {
      conn.release();
    }
  } catch (err) {
    console.error("DB Error:", err);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

/**
 * Adds a seat to the database
 *
 * @param {string} order The order of the seat
 * @param {number} bus_id The id of the bus associated with the seat
 */
export async function addSeat(order: string, bus_id: number) {
  try {
    const conn = await pool.getConnection();
    try {
      const [result] = await conn.execute<ResultSetHeader>(
        "INSERT INTO seat (`order`, bus_id) VALUES (?, ?)",
        [order, bus_id]
      );
      if (result.affectedRows === 0) {
        return Response.json({ message: "Internal Server Error" }, { status: 500 });
      }
      return Response.json({message: "Seat created successfully" }, { status: 201 });
    } finally {
      conn.release();
    }
  } catch (err: any) {
    console.error("DB Error:", err);
    return catchDBError(err);
  }
}

/**
 * Deletes a seat from the database
 *
 * @param {number} id The ID of the `seat` to be deleted
 */
export async function deleteSeat(id: number) {
  try {
    const conn = await pool.getConnection();
    try {
      const [result] = await conn.execute<ResultSetHeader>(
        "DELETE FROM seat WHERE id = ?",
        [id]
      );
      if (result.affectedRows === 0) {
        return Response.json(
          { message: `Seat with id ${id} not found` },
          { status: 404 }
        );
      }
      return Response.json(
        { message: `Seat with id ${id} deleted successfully` },
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

/**
 * Gets the number of seats that are associated with a bus
 *
 * @param {number} bus_id The ID of the `bus`
 */
export async function getSeatCountByBus(bus_id: number) {
  try {
    const conn = await pool.getConnection();
    try {
      const [rows] = await conn.query<RowDataPacket[]>(
        "SELECT COUNT(*) AS seatCount FROM seat WHERE bus_id = ?",
        [bus_id]
      );
      const seatCount = rows[0]?.seatCount ?? 0;
      return Response.json({ bus_id, seatCount }, { status: 200 });
    } finally {
      conn.release();
    }
  } catch (err: any) {
    console.error("DB Error:", err);
    return catchDBError(err);
  }
}

/**
 * Gets all the seats associated with a bus
 *
 * @param {number} bus_id The ID of the `bus`
 */
export async function getSeatsByBus(bus_id: number, order: string) {
  try {
    const conn = await pool.getConnection();
    try {
      const [rows] = await conn.query<RowDataPacket[]>(
        "SELECT * FROM seat WHERE bus_id = ?",
        [bus_id]
      );
      return Response.json({ bus_id, seats: rows }, { status: 200 });
    } finally {
      conn.release();
    }
  } catch (err: any) {
    console.error("DB Error:", err);
    return catchDBError(err);
  }
}