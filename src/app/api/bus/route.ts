// bus-tracking-system-main/src/app/api/bus/route.ts

import { getAllBuses } from "@/features/bus/services/crud";
import { addBus } from "@/features/bus/services/crud";

/**
 * GET /api/bus
 *
 * Returns all buses in the system.
 */
export async function GET() {
  return getAllBuses();
}

/**
 * POST /api/bus
 *
 * Creates a new bus.
 * Expected JSON body:
 * {
 *   plate_number: string,
 *   station_id: number,
 *   capacity: number
 * }
 */
export async function POST(req: Request) {
  try {
    const { plate_number, station_id, capacity } = await req.json();

    if (!plate_number || station_id == null || capacity == null) {
      return Response.json(
        { message: "Invalid input: one or more fields are missing" },
        { status: 400 }
      );
    }

    if (
      typeof capacity !== "number" ||
      !Number.isInteger(capacity) ||
      capacity <= 0
    ) {
      return Response.json(
        { message: "Capacity must be a positive integer" },
        { status: 400 }
      );
    }

    const response = await addBus(
      plate_number,
      Number(station_id),
      Number(capacity)
    );

    return response;
  } catch (error) {
    console.error("API Route Error:", error);
    return Response.json({ message: "Internal server error" }, { status: 500 });
  }
}
