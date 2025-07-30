import { validateIdParam } from "@/lib/utils";
import { deleteTrip, editTrip, getTrip } from "@/features/trips/services/crud";
import { NextResponse } from "next/server";

/**
 * GET /api/trip/[id]
 *
 * Gets a trip's information based on the dynamic `id` parameter in the URL path.
 * Example request: GET /api/trip/123
 *
 * Route param:
 * - id (string): trip ID passed as part of the URL (e.g., /api/trip/123)
 *
 * @returns {Response} 200 - Returns JSON with trip data:
 * {
 *   trip: {
 *     id: number,
 *     start_time: string,
 *     end_time: string,
 *     bus_id: number,
 *     driver_id: number,
 *     src_station: number,
 *     dest_station: number,
 *     // other fields
 *   }
 * }
 * @returns {Response} 404 - If trip with given id is not found.
 * @returns {Response} 500 - Internal server/database error.
 */
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = validateIdParam((await params).id);
    if (id instanceof Response) {
      // If validateIdParam returns a Response, wrap it in NextResponse
      return NextResponse.json(await id.json(), { status: id.status });
    }

    const trip = await getTrip(id);
    if (!trip) {
      return NextResponse.json({ message: " trip not found" }, { status: 404 });
    }
    return NextResponse.json({ trip }, { status: 200 });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/trip/[id]
 *
 * Deletes a trip based on the dynamic `id` parameter in the URL path.
 * Example request: DELETE /api/trip/123
 *
 * Route param:
 * - id (string): trip ID passed as part of the URL (e.g., /api/trip/123)
 *
 * @returns {Response} 200 - Trip deleted successfully with message and deleted id:
 * {
 *   message: "Trip deleted successfully",
 *   id: number
 * }
 * @returns {Response} 404 - If trip with given id is not found.
 * @returns {Response} 409 - If trip cannot be deleted due to it being a related record.
 * @returns {Response} 500 - Internal server/database error.
 */
export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = validateIdParam((await params).id);
  if (id instanceof Response) {
    return id;
  } else {
    return deleteTrip(id);
  }
}

/**
 * PATCH /api/trip/[id]
 *
 * Updates an existing trip with the specified details.
 *
 * @param {Request} req Incoming request containing JSON payload:
 * {
 *   start_time?: string,  // Optional ISO date-time string "YYYY-MM-DDTHH:MM:SSZ"
 *   end_time?: string,    // Optional ISO date-time string "YYYY-MM-DDTHH:MM:SSZ"
 *   bus_id?: number,      // Optional ID of the bus
 *   src_station?: number, // Optional ID of source station
 *   dest_station?: number,// Optional ID of destination station
 *   driver_id?: number    // Optional ID of the driver
 *   status?: string    // Optional ID of the driver
 * }
 *
 * @returns {Response} 200 - Trip updated successfully, returns updated trip data
 * @returns {Response} 400 - Invalid input data
 * @returns {Response} 404 - Trip not found
 * @returns {Response} 500 - Internal server/database error
 */
export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = validateIdParam((await params).id);
  if (id instanceof Response) {
    return id;
  }

  const {
    start_time,
    end_time,
    bus_id,
    src_station,
    dest_station,
    driver_id,
    status,
  } = await req.json();

  // At least one field must be provided
  if (
    start_time === undefined &&
    end_time === undefined &&
    bus_id === undefined &&
    src_station === undefined &&
    dest_station === undefined &&
    driver_id === undefined &&
    status === undefined
  ) {
    return Response.json(
      { message: "Invalid input: At least one field must be provided" },
      { status: 400 }
    );
  }

  return editTrip(
    id,
    start_time,
    end_time,
    bus_id,
    src_station,
    dest_station,
    driver_id,
    status
  );
}
