import {
  getAllBuses,
  getBusByID,
  createBus,
  updateBus,
  deleteBus,
} from '@/features/bus/bus'
import { NextRequest } from 'next/server'

export async function GET() {
  const buses = await getAllBuses()
  return Response.json(buses, { status: 200 })
}

export async function POST(request: Request) {
  const { plate_number, station_id, capacity, driver_id } = await request.json()
  await createBus(plate_number, station_id, capacity, driver_id)
  return Response.json(
    { message: 'Bus created successfully' },
    { status: 201 }
  )
}

export async function PUT(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const busID = Number(searchParams.get('id'))

  if (!busID) {
    return Response.json(
      { error: 'Missing bus ID in query parameters' },
      { status: 400 }
    );
  }

  const { plate_number, station_id, capacity, driver_id } =
    await request.json()
  await updateBus(busID, plate_number, station_id, capacity, driver_id)
  return Response.json(
    { message: 'Bus updated successfully' },
    { status: 200 }
  )
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const busID = Number(searchParams.get('id'))

  if (!busID) {
    return Response.json(
      { error: 'Missing bus ID in query parameters' },
      { status: 400 }
    )
  }

  await deleteBus(busID);
  return Response.json(
    { message: 'Bus deleted successfully' },
    { status: 200 }
  )
}

export async function GET_BY_ID(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const busID = Number(searchParams.get('id'))

  if (!busID) {
    return Response.json(
      { error: 'Missing bus ID in query parameters' },
      { status: 400 }
    )
  }

  const bus = await getBusByID(busID);
  return Response.json(bus, { status: 200 })
}
