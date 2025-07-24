import pool from "@/lib/db";
import { catchDBError } from "@/lib/utils";
import { RowDataPacket, ResultSetHeader } from "mysql2";

/**
 * Get all stations
 */
export async function getAllStations() {
  try {
    const conn = await pool.getConnection();
    try {
      const [stations] = await conn.query<RowDataPacket[]>(
        "SELECT * FROM station"
      );
      if (!stations || stations.length === 0) {
        return Response.json({ message: "No stations found" }, { status: 404 });
      }
      return Response.json({ stations }, { status: 200 });
    } finally {
      conn.release();
    }
  } catch (err) {
    console.error("DB Error:", err);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

/**
 * Get a station by ID
 */
export async function getStation(id: number) {
  try {
    const conn = await pool.getConnection();
    try {
      const [stations] = await conn.query<RowDataPacket[]>(
        "SELECT * FROM station WHERE id = ?",
        [id]
      );
      const station = stations[0];
      if (!station) {
        return Response.json({ message: "Station not found" }, { status: 404 });
      }
      return Response.json({ station }, { status: 200 });
    } finally {
      conn.release();
    }
  } catch (err) {
    console.error("DB Error:", err);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

/**
 * Get a station by name
 */
export async function getStationByName(name: string) {
  try {
    const conn = await pool.getConnection();
    try {
      const [stations] = await conn.query<RowDataPacket[]>(
        "SELECT * FROM station WHERE name = ?",
        [name]
      );
      const station = stations[0];
      if (!station) {
        return Response.json({ message: "Station not found" }, { status: 404 });
      }
      return Response.json({ station }, { status: 200 });
    } finally {
      conn.release();
    }
  } catch (err) {
    console.error("DB Error:", err);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

/**
 * Create a new station
 */
export async function addStation(name: string) {
  try {
    const conn = await pool.getConnection();
    try {
      const [result] = await conn.execute<ResultSetHeader>(
        "INSERT INTO station (name) VALUES (?)",
        [name]
      );
      if (result.affectedRows === 0) {
        return Response.json(
          { message: "Failed to create station" },
          { status: 500 }
        );
      }
      return Response.json(
        { message: "Station created successfully" },
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
 * Delete a station by ID
 */
export async function deleteStation(id: number) {
  try {
    const conn = await pool.getConnection();
    try {
      const [result] = await conn.execute<ResultSetHeader>(
        "DELETE FROM station WHERE id = ?",
        [id]
      );
      if (result.affectedRows === 0) {
        return Response.json(
          { message: `Station with id ${id} not found` },
          { status: 404 }
        );
      }
      return Response.json(
        { message: `Station with id ${id} deleted successfully` },
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
