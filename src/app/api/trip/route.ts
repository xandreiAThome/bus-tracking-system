import { getAllTrips } from "@/features/trips/services/crud";
import { addTrip } from "@/features/trips/services/crud";
import { NextResponse } from "next/server";
import { parseError } from "@/lib/utils";
import { blockUserRole, checkAuth } from "@/lib/auth-helpers";

/**
 * GET /api/trip
 *
 * Retrieves all existing trips from the database.
 * Requires authentication. Users with "user" role are blocked.
 *
 * @returns {Response} 200 - Returns a JSON object with an array of trips
 * @returns {Response} 401 - Unauthorized (not signed in)
 * @returns {Response} 403 - Forbidden (user role blocked)
 * @returns {Response} 500 - Internal server/database error
 */
export async function GET() {
  // Check authentication
  const { error: authError, session } = await checkAuth();
  if (authError) return authError;

  // Block users with "user" role
  const roleError = blockUserRole(session);
  if (roleError) return roleError;

  try {
    const trips = await getAllTrips();
    return NextResponse.json({ trips: trips }, { status: 200 });
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}

/**
 * POST /api/trip
 *
 * Creates a new trip in the database.
 * Only admin users can create trips.
 *
 * @param {Request} req Incoming request containing JSON payload:
 * {
 *   start_time: string,  // ISO date-time string "YYYY-MM-DDTHH:MM:SSZ"
 *   end_time: string,    // ISO date-time string "YYYY-MM-DDTHH:MM:SSZ"
 *   bus_id: number,      // ID of the bus associated with the trip
 *   src_station_id: number, // ID of the source station
 *   dest_station_id: number,// ID of the destination station
 *   driver_id: number    // ID of the driver
 * }
 *
 * @returns {Response} 201 - Trip created successfully
 * @returns {Response} 401 - Unauthorized (not signed in)
 * @returns {Response} 403 - Forbidden (insufficient permissions)
 * @returns {Response} 400 - Bad request (validation error)
 * @returns {Response} 500 - Internal server/database error
 */
export async function POST(req: Request) {
  // Check authentication
  const { error: authError, session } = await checkAuth();
  if (authError) return authError;

  // Block users with "user" role
  const roleError = blockUserRole(session);
  if (roleError) return roleError;

  try {
    const {
      start_time,
      end_time,
      bus_id,
      src_station_id,
      dest_station_id,
      driver_id,
    } = await req.json();

    // Validate required fields
    if (
      !start_time ||
      !end_time ||
      !bus_id ||
      !src_station_id ||
      !dest_station_id ||
      !driver_id
    ) {
      return Response.json(
        { message: "Invalid input: Payload field/s missing" },
        { status: 400 }
      );
    }

    const created = await addTrip(
      start_time,
      end_time,
      bus_id,
      src_station_id,
      dest_station_id,
      driver_id
    );

    return NextResponse.json(
      { message: "Trip successfully created", result: created },
      { status: 201 }
    );
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}
