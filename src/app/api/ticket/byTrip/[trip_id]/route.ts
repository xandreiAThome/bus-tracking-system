import { validateIdParam } from "@/lib/utils";
import { getALlTicketsFromTrip } from "@features/ticket/services/crud";

/**
 * GET /api/ticket/[trip_id]
 *
 * Retrieves all tickets associated with a specific trip ID.
 *
 * Example request:
 * GET /api/ticket/1
 *
 * @param {Request} req - Incoming request object.
 * @param {Object} params - URL parameters object containing:
 *   @param {string} id - The trip ID to retrieve.
 *
 * @returns {Response} 200 - Returns a JSON object with an array of tickets:
 * {
 *   tickets: [
 *     {
 *       id: number,
 *       trip_id: number,
 *       seat_number: string,
 *       fare: number,
 *       type: string, // e.g., "passenger" or "baggage"
 *       // ... any other ticket fields
 *     },
 *     ...
 *   ]
 * }
 * @returns {Response} 404 - No tickets found for the specified trip.
 * @returns {Response} 400 - Invalid trip_id (not a number).
 * @returns {Response} 500 - Internal server/database error.
 */

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = validateIdParam((await params).id);
  if (id instanceof Response) {
    return id;
  } else {
    return getALlTicketsFromTrip(id);
  }
}
