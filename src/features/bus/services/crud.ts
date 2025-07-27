import pool from '@/lib/db'
import { catchDBError } from '@/lib/utils'
import { RowDataPacket, ResultSetHeader } from 'mysql2'

/**
 * Get all buses from the database.
 */
export async function getAllBuses() {
  try {
    const conn = await pool.getConnection()
    try {
      const [buses] = await conn.query<RowDataPacket[]>('SELECT * FROM bus')

      if (!buses || buses.length === 0) {
        return Response.json({ message: 'No buses found' }, { status: 404 })
      }

      return Response.json({ buses }, { status: 200 })
    } finally {
      conn.release()
    }
  } catch (err) {
    console.error('DB Error:', err)
    return Response.json({ message: 'Internal Server Error' }, { status: 500 })
  }
}

/**
 * Get a specific bus by ID.
 * @param id - Bus ID
 */
export async function getBusByID(id: number) {
  try {
    const conn = await pool.getConnection()
    try {
      const [buses] = await conn.query<RowDataPacket[]>(
        'SELECT * FROM bus WHERE id = ?',
        [id]
      )
      const bus = buses[0]

      if (!bus) {
        return Response.json({ message: `Bus with id ${id} not found` }, { status: 404 })
      }

      return Response.json({ bus }, { status: 200 })
    } finally {
      conn.release()
    }
  } catch (err) {
    console.error('DB Error:', err)
    return catchDBError(err)
  }
}

/**
 * Create a new bus.
 * @param plate_number - Plate number
 * @param station_id - Station ID
 * @param capacity - Seating capacity
 * @param driver_id - Driver ID
 */
export async function addBus(
  plate_number: string,
  station_id: number,
  capacity: number,
  driver_id: number
) {
  try {
    const conn = await pool.getConnection()
    try {
      const [result] = await conn.execute<ResultSetHeader>(
        'INSERT INTO bus (plate_number, station_id, capacity, driver_id) VALUES (?, ?, ?, ?)',
        [plate_number, station_id, capacity, driver_id]
      )

      if (result.affectedRows === 0) {
        return Response.json({ message: 'Failed to create bus' }, { status: 500 })
      }

      return Response.json({ message: 'Bus created successfully' }, { status: 201 })
    } finally {
      conn.release()
    }
  } catch (err: any) {
    console.error('DB Error:', err)
    return catchDBError(err)
  }
}

/**
 * Update an existing bus.
 * @param id - Bus ID
 * @param plate_number - Plate number
 * @param station_id - Station ID
 * @param capacity - Seating capacity
 * @param driver_id - Driver ID
 */
export async function editBus(
  id: number,
  plate_number: string,
  station_id: number,
  capacity: number,
  driver_id: number
) {
  try {
    const conn = await pool.getConnection()
    try {
      const [result] = await conn.execute<ResultSetHeader>(
        `UPDATE bus SET plate_number = ?, station_id = ?, capacity = ?, driver_id = ? WHERE id = ?`,
        [plate_number, station_id, capacity, driver_id, id]
      )

      if (result.affectedRows === 0) {
        return Response.json(
          { message: `Bus with id ${id} not found or no changes made` },
          { status: 404 }
        )
      }

      return Response.json(
        { message: `Bus with id ${id} updated successfully` },
        { status: 200 }
      )
    } finally {
      conn.release()
    }
  } catch (err: any) {
    console.error('DB Error:', err)
    return catchDBError(err)
  }
}

/**
 * Delete a bus by ID.
 * @param id - Bus ID
 */
export async function deleteBus(id: number) {
  try {
    const conn = await pool.getConnection()
    try {
      const [result] = await conn.execute<ResultSetHeader>(
        'DELETE FROM bus WHERE id = ?',
        [id]
      )

      if (result.affectedRows === 0) {
        return Response.json({ message: `Bus with id ${id} not found` }, { status: 404 })
      }

      return Response.json({ message: `Bus with id ${id} deleted successfully` }, { status: 200 })
    } finally {
      conn.release()
    }
  } catch (err: any) {
    console.error('DB Error:', err)
    return catchDBError(err)
  }
}
