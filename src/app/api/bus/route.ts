// bus-tracking-system-main/src/app/api/bus/route.ts

import { getAllBuses } from "@/features/bus/services/crud";
import { addBus } from "@/features/bus/services/crud";
import { parseError } from "@/lib/utils";
import { NextResponse, NextRequest } from "next/server";

/**
 * GET /api/bus
 *
 * Returns all buses in the system.
 */
export async function GET() {
  try {
    const buses = await getAllBuses();
    return NextResponse.json({ buses: buses }, { status: 200 });
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
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
export async function POST(req: NextRequest) {
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

    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}
