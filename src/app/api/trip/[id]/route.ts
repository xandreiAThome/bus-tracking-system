import { validateIdParam } from "@/lib/utils";
import { deleteTrip, getTrip } from "@/features/trips/services/crud";
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
  context: { params: { id: string } }
) {
  try {
    const id = validateIdParam(context.params.id);
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
  { params }: { params: { id: string } }
) {
  const id = validateIdParam((await params).id);
  if (id instanceof Response) {
    return id;
  } else {
    return deleteTrip(id);
  }
}
