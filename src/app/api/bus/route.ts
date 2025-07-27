// bus-tracking-system-main/src/app/api/bus/route.ts

import {getAllBuses} from "@/features/bus/services/crud";
import {addBus} from "@/features/bus/services/crud";

/**
 * GET /api/bus
 *
 * Returns all buses in the system.
 */
export async function GET() {
  return getAllBuses()
}

/**
 * POST /api/bus
 *
 * Creates a new bus.
 * Expected JSON body:
 * {
 *   plate_number: string,
 *   station_id: number,
 *   capacity: number,
 *   driver_id: number
 * }
 */
export async function POST(req: Request) {
  const { plate_number, station_id, capacity, driver_id } = await req.json()

  // basic validation
  if (
    !plate_number ||
    station_id == null ||
    capacity == null ||
    driver_id == null
  ) {
    return Response.json(
      { message: "Invalid input: one or more fields are missing" },
      { status: 400 }
    )
  }

  return addBus(plate_number, station_id, capacity, driver_id)
}
