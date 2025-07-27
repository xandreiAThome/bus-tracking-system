import { getAllTrips } from "@features/trip/services/crud";
import { addTrip } from "@features/trip/services/crud";

/**
 * GET /api/trip
 *
 * Retrieves all existing trips from the database.
 *
 * @returns {Response} 200 - Returns a JSON object with an array of trips:
 * {
 *   trips: [
 *     {
 *       id: number,
 *       start_time: string,  // ISO date-time string
 *       end_time: string,    // ISO date-time string
 *       bus_id: number,
 *       src_station: number,
 *       dest_station: number,
 *       driver_id: number,
 *       // ... any other trip fields
 *     },
 *     ...
 *   ]
 * }
 * @returns {Response} 404 - No trips found.
 * @returns {Response} 500 - Internal server/database error.
 */
export async function GET() {
  return getAllTrips();
}

/**
 * POST /api/trip
 *
 * Adds a new trip with the specified details.
 *
 * @param {Request} req Incoming request containing JSON payload:
 * {
 *   start_time: string,  // ISO date-time string "YYYY-MM-DDTHH:MM:SSZ"
 *   end_time: string,    // ISO date-time string "YYYY-MM-DDTHH:MM:SSZ"
 *   bus_id: number,      // ID of the bus associated with the trip
 *   src_station: number, // ID of the source station
 *   dest_station: number,// ID of the destination station
 *   driver_id: number    // ID of the driver
 * }
 *
 * @returns {Response} 201 - Trip created successfully, returns created trip data.
 * @returns {Response} 400 - Invalid or missing input data.
 * @returns {Response} 500 - Internal server/database error.
 */
export async function POST(req: Request) {
  const { start_time, end_time, bus_id, src_station, dest_station, driver_id } =
    await req.json();

  if (
    !start_time ||
    !end_time ||
    !bus_id ||
    !src_station ||
    !dest_station ||
    !driver_id
  ) {
    return Response.json(
      { message: "Invalid input: Payload field/s missing" },
      { status: 400 }
    );
  }
  return addTrip(
    start_time,
    end_time,
    bus_id,
    src_station,
    dest_station,
    driver_id
  );
}
