import { getAllTrips } from "@features/trip/services/crud";
import { addTrip } from "@features/trip/services/crud";

/**
 * GET api/trip
 *
 * Gets all the existing trips
 */
export async function GET() {
  return getAllTrips();
}

/**
 * POST api/trip
 *
 * Adds a trip with fields matching `req`'s payload
 * @param {Request} req Incoming request containing the following:
 * - `start_time` start time in ISO format "YYYY-MM-DDTHH:MM:SSZ"
 * - `end_time` end time in ISO format "YYYY-MM-DDTHH:MM:SSZ"
 * - `bus_id` The id of the bus associated with the trip
 * - `src_station` The id of the destination station
 * - `dest_station` The id of the destination station
 * - ` driver_id` The id of the driver
 */
export async function POST(req: Request) {
  const { start_time, end_time, bus_id, src_station, dest_station, driver_id } =
    await req.json();

  if (!start_time || !end_time || !bus_id || !src_station || !dest_station || !driver_id) {
    return Response.json(
      { message: "Invalid input: Payload field/s missing" },
      { status: 400 }
    );
  }
  return addTrip(start_time, end_time, bus_id, src_station, dest_station, driver_id);
}
