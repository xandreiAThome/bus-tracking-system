import db from '../../lib/db'
import { Bus } from '../../lib/types/bus'

// GET ALL BUSES
export const getAllBuses = (): Promise<Bus[]> => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM bus', (err, results) => {
      if (err) return reject(err)
      resolve(results as Bus[])
    })
  })
}

// GET BUS BY ID
export const getBusByID = (busID: number): Promise<Bus | null> => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM bus WHERE id = ?', [busID], (err, results) => {
      if (err) return reject(err)
      const result = (results as Bus[])[0]
      resolve(result ?? null)
    })
  })
}

// ADD BUS
export const createBus = (
  plate_number: string,
  capacity: number,
  driver_id: number,
  station_id: number
): Promise<any> => {
  return new Promise((resolve, reject) => {
    const sql = 'INSERT INTO bus (plate_number, station_id, capacity, driver_id) VALUES (?, ?, ?, ?)'
    db.query(sql, [plate_number, station_id, capacity, driver_id], (err, result) => {
        if (err) return reject(err)
        resolve(result)
      }
    )
  })
}

// UPDATE BUS
export const updateBus = (
  busID: number,
  plate_number: string,
  station_id: number,
  capacity: number,
  driver_id: number
): Promise<any> => {
  return new Promise((resolve, reject) => {
    const sql = 'UPDATE bus SET plate_number = ?, station_id = ?, capacity = ?, driver_id = ? WHERE busID = ?'
    db.query(sql, [plate_number, station_id, capacity, driver_id, busID], (err, result) => {
        if (err) return reject(err)
        resolve(result)
      }
    )
  })
}

// DELETE BUS
export const deleteBus = (busID: number): Promise<any> => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM bus WHERE busID = ?', [busID], (err, result) => {
      if (err) return reject(err)
      resolve(result)
    })
  })
}
