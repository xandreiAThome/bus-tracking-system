import pool from "@/lib/db";
import { catchDBError } from "@/lib/utils";
import { RowDataPacket, ResultSetHeader } from "mysql2";

/**
 * Get all drivers from the database.
 */
export async function getAllDrivers() {
  try {
    const conn = await pool.getConnection();
    try {
      const [drivers] = await conn.query<RowDataPacket[]>(
        "SELECT * FROM driver"
      );

      if (!drivers || drivers.length === 0) {
        return Response.json({ message: "No drivers found" }, { status: 404 });
      }

      return Response.json({ drivers }, { status: 200 });
    } finally {
      conn.release();
    }
  } catch (err) {
    console.error("DB Error:", err);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

/**
 * Get a specific driver by ID.
 * @param id - Driver ID
 */
export async function getDriver(id: number): Promise<Response> {
  try {
    const conn = await pool.getConnection();
    try {
      const [drivers] = await conn.query<RowDataPacket[]>(
        "SELECT * FROM driver WHERE id = ?",
        [id]
      );
      
      if (!drivers || drivers.length === 0) {
        return Response.json(
          { message: `Driver with id ${id} not found` },
          { status: 404 }
        );
      }

      return Response.json({ driver: drivers[0] });
    } finally {
      conn.release();
    }
  } catch (err) {
    console.error("DB Error:", err);
    return Response.json(
      { error: 'Database error' },
      { status: 500 }
    );
  }
}

/**
 * Create a new driver.
 * @param first_name - First name
 * @param last_name - Last name
 * @param user_id - Related user ID
 */
export async function addDriver(
  first_name: string,
  last_name: string,
  user_id: number
) {
  try {
    const conn = await pool.getConnection();
    try {
      const [result] = await conn.execute<ResultSetHeader>(
        "INSERT INTO driver (first_name, last_name, user_id) VALUES (?, ?, ?)",
        [first_name, last_name, user_id]
      );

      if (result.affectedRows === 0) {
        return Response.json(
          { message: "Failed to create driver" },
          { status: 500 }
        );
      }

      return Response.json(
        { message: "Driver created successfully" },
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
 * Update an existing driver.
 * @param id - Driver ID
 * @param first_name - First name
 * @param last_name - Last name
 * @param user_id - Related user ID
 */
export async function editDriver(
  id: number,
  fields: { first_name?: string; last_name?: string; user_id?: number }
) {
  try {
    const conn = await pool.getConnection();
    try {
      // Build dynamic SQL and values
      const updates = [];
      const values = [];
      if (fields.first_name !== undefined) {
        updates.push("first_name = ?");
        values.push(fields.first_name);
      }
      if (fields.last_name !== undefined) {
        updates.push("last_name = ?");
        values.push(fields.last_name);
      }
      if (fields.user_id !== undefined) {
        updates.push("user_id = ?");
        values.push(fields.user_id);
      }
      if (updates.length === 0) {
        return Response.json(
          { message: "No fields to update" },
          { status: 400 }
        );
      }
      values.push(id);
      const [result] = await conn.execute<ResultSetHeader>(
        `UPDATE driver SET ${updates.join(", ")} WHERE id = ?`,
        values
      );

      if (result.affectedRows === 0) {
        return Response.json(
          { message: `Driver with id ${id} not found or no changes made` },
          { status: 404 }
        );
      }

      return Response.json(
        { message: `Driver with id ${id} updated successfully` },
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
 * Delete a driver by ID.
 * @param id - Driver ID
 */
export async function deleteDriver(id: number) {
  try {
    const conn = await pool.getConnection();
    try {
      const [result] = await conn.execute<ResultSetHeader>(
        "DELETE FROM driver WHERE id = ?",
        [id]
      );

      if (result.affectedRows === 0) {
        return Response.json(
          { message: `Driver with id ${id} not found` },
          { status: 404 }
        );
      }

      return Response.json(
        { message: `Driver with id ${id} deleted successfully` },
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
