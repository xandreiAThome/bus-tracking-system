import db from '../../lib/db'
import { Driver } from '../../lib/types/driver'

// GET ALL DRIVERS
export const getAllDrivers = (): Promise<Driver[]> => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM driver', (err, results) => {
      if (err) return reject(err)
      resolve(results as Driver[])
    })
  })
}

// GET DRIVER BY ID
export const getDriverByID = (driverID: number): Promise<Driver | null> => {
  return new Promise((resolve, reject) => {
    db.query(
      'SELECT * FROM driver WHERE driverID = ?',
      [driverID],
      (err, results) => {
        if (err) return reject(err)
        const result = (results as Driver[])[0]
        resolve(result ?? null)
      }
    )
  })
}

// CREATE DRIVER
export const createDriver = (first_name: string, last_name: string, user_id: number): Promise<any> => {
  return new Promise((resolve, reject) => {
    const sql = 'INSERT INTO driver (first_name, last_name, user_id) VALUES (?, ?, ?)'
    db.query(sql, [first_name, last_name, user_id], (err, result) => {
      if (err) return reject(err)
      resolve(result)
    })
  })
}

// UPDATE DRIVER
export const updateDriver = (
  driverID: number,
  first_name: string,
  last_name: string,
  user_id: number
): Promise<any> => {
  return new Promise((resolve, reject) => {
    const sql = 'UPDATE driver SET first_name = ?, last_name = ?, user_id = ? WHERE driverID = ?'
      db.query(sql, [first_name, last_name, user_id, driverID], (err, result) => {
      if (err) return reject(err)
      resolve(result)
    })
  })
}

// DELETE DRIVER
export const deleteDriver = (driverID: number): Promise<any> => {
  return new Promise((resolve, reject) => {
    db.query(
      'DELETE FROM driver WHERE driverID = ?', [driverID], (err, result) => {
        if (err) return reject(err)
        resolve(result)
      }
    )
  })
}
