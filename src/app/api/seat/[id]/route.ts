import { validateIdParam } from "@/lib/utils";
import { deleteSeat, getSeat, updateSeat } from "@features/seat/services/crud";

/**
 * GET /api/seat/[id]
 *
 * Retrieves a specific seat's information by its ID.
 *
 * Example request:
 *  GET /api/seat/123
 *
 * @param req - The incoming HTTP request object.
 * @param params - Route parameters containing:
 * @property {string} id - The ID of the seat, passed as part of the URL.
 *
 * @returns
 * 200 OK — Returns:
 * {
 *  seat: {
 *    id: number,
 *    seat_number: string,
 *    bus_id: number
 *  }
 * }
 *
 * @returns 400 Bad Request — If the seat ID is invalid.
 * @returns 404 Not Found — If no seat is found with the given ID.
 * @returns 500 Internal Server Error — For unexpected server or database errors.
 */
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = validateIdParam((await params).id);
  if (id instanceof Response) {
    return id;
  } else {
    return getSeat(id);
  }
}

/**
 * DELETE /api/seat/[id]
 *
 * Deletes a seat based on the dynamic `id` parameter in the URL path.
 * Example request:
 *  DELETE /api/seat/123
 *
 * @param req - The incoming HTTP request object.
 * @param params - Route parameters containing:
 * @property {string} id - The ID of the seat, passed as part of the URL.
 *
 * @returns
 * 200 OK — Returns:
 * {
 *  seat: {
 *    id: number,
 *    seat_number: string,
 *    bus_id: number
 *  }
 * }
 *
 * @returns 400 Bad Request — If the seat ID is invalid.
 * @returns 404 Not Found — If no seat is found with the given ID.
 * @returns 500 Internal Server Error — For unexpected server or database errors.
 */
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = validateIdParam((await params).id);
  if (id instanceof Response) {
    return id;
  } else {
    return deleteSeat(id);
  }
}

/**
 * PATCH /api/seat/[id]
 * Updates a seat's data
 */
export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = validateIdParam(params.id);
  if (id instanceof Response) return id;

  try {
    const body = await req.json();

    // Validate at least one valid field is present
    const validFields = ["seat_number", "bus_id", "status"];
    if (!Object.keys(body).some(key => validFields.includes(key))) {
      return Response.json(
        { message: "No valid fields to update" },
        { status: 400 }
      );
    }

    return updateSeat(id, body); // Pass the entire body (filtered if needed)
  } catch (error) {
    return Response.json({ message: "Invalid request body" }, { status: 400 });
  }
}
