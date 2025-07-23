import { validateIdParam } from "@/lib/utils";
import { deleteTrip, editTrip, getTrip } from "@features/trip/services/crud";

/**
 * GET /api/trip/[id]
 *
 * Gets a trip's information based on the dynamic `id` parameter in the URL path.
 * Example request: GET /api/trip/123
 *
 * Route param:
 * - id (string): trip ID passed as part of the URL (e.g., /api/trip/123)
 */
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = validateIdParam((await params).id);
  if (id instanceof Response) {
    return id;
  } else {
    return getTrip(id);
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


/**
 * PATCH /api/trip/[id]
 *
 * Edits an existing trip.
 * Expected JSON body: {
 *   start_time: string (ISO),
 *   end_time: string (ISO),
 *   bus_id: number,
 *   src_station: number,
 *   dest_station: number
 * }
 */
export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = validateIdParam((await params).id);
  if (id instanceof Response) {
    return id;
  }

  try {
    const body = await req.json();
    const { start_time, end_time, bus_id, src_station, dest_station } = body;

    // Basic validation
    if (
      !start_time ||
      !end_time ||
      !bus_id ||
      !src_station ||
      !dest_station
    ) {
      return Response.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    return await editTrip(
      id,
      start_time,
      end_time,
      bus_id,
      src_station,
      dest_station
    );
  } catch (err) {
    console.error("PATCH /api/trip/[id] error:", err);
    return Response.json(
      { message: "Invalid request body or internal error" },
      { status: 500 }
    );
  }
}
