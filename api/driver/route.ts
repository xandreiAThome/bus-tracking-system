import {
  getAllDrivers,
  getDriverByID,
  createDriver,
  updateDriver,
  deleteDriver,
} from '@/features/driver/driver'
import { NextRequest } from 'next/server'

export async function GET() {
  const drivers = await getAllDrivers()
  return Response.json(drivers, { status: 200 })
}

export async function POST(request: Request) {
  const { first_name, last_name, user_id } = await request.json()
  await createDriver(first_name, last_name, user_id)
  return Response.json(
    { message: 'Driver created successfully' },
    { status: 201 }
  );
}

export async function PUT(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const driverID = Number(searchParams.get('id'))

  if (!driverID) {
    return Response.json(
      { error: 'Missing driver ID in query parameters' },
      { status: 400 }
    )
  }

  const { first_name, last_name, user_id } = await request.json()
  await updateDriver(driverID, first_name, last_name, user_id)
  return Response.json(
    { message: 'Driver updated successfully' },
    { status: 200 }
  )
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const driverID = Number(searchParams.get('id'))

  if (!driverID) {
    return Response.json(
      { error: 'Missing driver ID in query parameters' },
      { status: 400 }
    )
  }

  await deleteDriver(driverID);
  return Response.json(
    { message: 'Driver deleted successfully' },
    { status: 200 }
  )
}

export async function GET_BY_ID(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const driverID = Number(searchParams.get('id'))
  if (!driverID)
    return Response.json({ error: 'Missing driver ID' }, { status: 400 })
  const driver = await getDriverByID(driverID)
  return Response.json(driver, { status: 200 })
}
