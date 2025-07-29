import pool from "@/lib/db";
import { catchDBError } from "@/lib/utils";
import { RowDataPacket, ResultSetHeader } from "mysql2";
import { prisma } from "@/lib/prisma"

/**
 * Get all buses from the database.
 */
export async function getAllBuses() {
  try {
    const buses = await prisma.bus.findMany();
    if (!buses || buses.length === 0) {
      throw new Error("Failed to create bus")
    }
    return buses
  } catch (error) {
    throw error;
  }
}

/**
 * Get a specific bus by ID.
 * @param id - Bus ID
 */
export async function getBusByID(id: number) {
  try {
    const conn = await pool.getConnection();
    try {
      const [buses] = await conn.query<RowDataPacket[]>(
        "SELECT * FROM bus WHERE id = ?",
        [id]
      );
      const bus = buses[0];

      if (!bus) {
        return Response.json(
          { message: `Bus with id ${id} not found` },
          { status: 404 }
        );
      }

      return Response.json({ bus }, { status: 200 });
    } finally {
      conn.release();
    }
  } catch (err) {
    console.error("DB Error:", err);
    return catchDBError(err);
  }
}

/**
 * Create a new bus and populate its seats based on capacity.
 * @param plate_number - Plate number
 * @param station_id - Station ID
 * @param capacity - Seating capacity
 */
export async function addBus(
  plate_number: string,
  station_id: number,
  capacity: number
) {
  try {
    const result = await prisma.$transaction(async (tx) => {
      // Create bus
      const bus = await tx.bus.create({
        data: {
          plate_number,
          station_id,
          capacity,
        },
      });

      // Prepare seat data
      const seatsData = [];
      for (let i = 1; i <= capacity; i++) {
        seatsData.push({
          seat_number: `S${i.toString().padStart(2, "0")}`,
          bus_id: bus.id,
        });
      }

      // Bulk create seats
      const seats = await tx.seat.createMany({
        data: seatsData,
      });

      // seats.count is the number of rows created
      if (seats.count !== capacity) {
        throw new Error("Failed to create all seats");
      }

      return { busId: bus.id, seatsCreated: seats.count, seats: seatsData};
    });
    return { busId: result.busId, seatsCreated: result.seatsCreated, seats: result.seats };
  } catch (error) {
    throw error
  }
}
/**
 * Update an existing bus.
 * @param id - Bus ID
 * @param plate_number - Plate number
 * @param station_id - Station ID
 * @param capacity - Seating capacity
 */
export async function editBus(
  id: number,
  fields: { plate_number?: string; station_id?: number; capacity?: number }
) {
  try {
    const conn = await pool.getConnection();
    try {
      // Build dynamic SQL and values
      const updates = [];
      const values = [];
      if (fields.plate_number !== undefined) {
        updates.push("plate_number = ?");
        values.push(fields.plate_number);
      }
      if (fields.station_id !== undefined) {
        updates.push("station_id = ?");
        values.push(fields.station_id);
      }
      if (fields.capacity !== undefined) {
        updates.push("capacity = ?");
        values.push(fields.capacity);
      }
      if (updates.length === 0) {
        return Response.json(
          { message: "No fields to update" },
          { status: 400 }
        );
      }
      values.push(id);
      const [result] = await conn.execute<ResultSetHeader>(
        `UPDATE bus SET ${updates.join(", ")} WHERE id = ?`,
        values
      );

      if (result.affectedRows === 0) {
        return Response.json(
          { message: `Bus with id ${id} not found or no changes made` },
          { status: 404 }
        );
      }

      return Response.json(
        { message: `Bus with id ${id} updated successfully` },
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
 * Delete a bus and its associated seats and trips by ID.
 * @param id - Bus ID
 */
export async function deleteBus(id: number) {
  try {
    const conn = await pool.getConnection();
    try {
      await conn.beginTransaction();

      // Set bus_id to NULL in related seats
      await conn.execute("UPDATE seat SET bus_id = NULL WHERE bus_id = ?", [
        id,
      ]);

      // Set bus_id to NULL in related trips
      await conn.execute("UPDATE trip SET bus_id = NULL WHERE bus_id = ?", [
        id,
      ]);

      // Delete related seats
      //await conn.execute('DELETE FROM seat WHERE bus_id = ?', [id])

      // Delete related trips
      //await conn.execute('DELETE FROM trip WHERE bus_id = ?', [id])

      // Delete the bus itself
      const [result] = await conn.execute<ResultSetHeader>(
        "DELETE FROM bus WHERE id = ?",
        [id]
      );

      if (result.affectedRows === 0) {
        await conn.rollback();
        return Response.json(
          { message: `Bus with id ${id} not found` },
          { status: 404 }
        );
      }

      await conn.commit();
      return Response.json(
        {
          message: `Bus with id ${id} and related records deleted successfully`,
        },
        { status: 200 }
      );
    } catch (innerErr) {
      await conn.rollback();
      console.error("DB Transaction Error:", innerErr);
      return Response.json(
        { message: "Failed to delete bus and related data" },
        { status: 500 }
      );
    } finally {
      conn.release();
    }
  } catch (err: any) {
    console.error("DB Connection Error:", err);
    return catchDBError(err);
  }
}
