import pool from "@/lib/db";
import { catchDBError, toSQLTimestamp } from "@/lib/utils";
import { RowDataPacket } from "mysql2";
import { ResultSetHeader } from "mysql2";

export async function getAllTrips(){
  try{
    const conn = await pool.getConnection();
    try{
      const [trips] = await conn.query<RowDataPacket[]>(
        "SELECT * FROM trip"
      );
      if(!trips){
        return Response.json({message: "No available trips"}, {status: 404});
      }
      return Response.json({trips}, {status: 200});
    } finally{
      conn.release();
    }

  } catch(err){
    console.error("DB Error:", err);
    return Response.json({message: "Internal Server Error"}, {status: 500});
  }
}

/**
 * Gets the data of a trip
 *
 * @param {number} id The ID of the `trip`
 */
export async function getTrip(id: number) {
  try {
    const conn = await pool.getConnection();
    try {
      // Check if trip exists
      const [trips] = await conn.query<RowDataPacket[]>(
        "SELECT * FROM trip WHERE id = ?",
        [id]
      );
      const trip = trips[0];
      if (!trip) {
        return Response.json( { message: "trip not found" }, { status: 404 });
      }
      return Response.json({trip}, { status: 200 });
    } finally {
      conn.release();
    }
  } catch (err) {
    console.error("DB Error:", err);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

/**
 * Adds a trip to the database
 *
 * @param {string} start_time start time in ISO format "YYYY-MM-DDTHH:MM:SSZ"
 * @param {string} end_time end time in ISO format "YYYY-MM-DDTHH:MM:SSZ"
 * @param {number} bus_id The id of the bus associated with the trip
 * @param {number} src_station The id of the destination station
 * @param {number} dest_station The id of the destination station
 */
export async function addTrip(start_time: string, end_time: string, bus_id: number, src_station: number, dest_station: number) {
  try {
    const conn = await pool.getConnection();
    try {
      start_time = toSQLTimestamp(start_time)
      end_time = toSQLTimestamp(end_time)

      const [result] = await conn.execute<ResultSetHeader>(
        "INSERT INTO trip (start_time, end_time, bus_id, src_station, dest_station) VALUES (?, ?, ?, ?, ?)",
        [start_time, end_time, bus_id, src_station, dest_station]
      );
      if (result.affectedRows === 0) {
        return Response.json({ message: "Internal Server Error" }, { status: 500 });
      }
      return Response.json({message: "Trip created successfully" }, { status: 201 });
    } finally {
      conn.release();
    }
  } catch (err: any) {
    console.error("DB Error:", err);
    return catchDBError(err);
  }
}

/**
 * Deletes a trip from the database
 *
 * @param {number} id The ID of the `trip` to be deleted
 */
export async function deleteTrip(id: number) {
  try {
    const conn = await pool.getConnection();
    try {
      const [result] = await conn.execute<ResultSetHeader>(
        "DELETE FROM trip WHERE id = ?",
        [id]
      );
      if (result.affectedRows === 0) {
        return Response.json(
          { message: `Trip with id ${id} not found` },
          { status: 404 }
        );
      }
      return Response.json(
        { message: `Trip with id ${id} deleted successfully` },
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