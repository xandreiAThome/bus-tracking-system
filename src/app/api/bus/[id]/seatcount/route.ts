import { validateIdParam } from "@/lib/utils";
import { getSeatCountByBus } from "@features/seat/services/crud";

/**
 * GET /api/bus/[id]/seatcount
 *
 * Retrieves the total number of seats associated with a specific bus.
 *
 * Example request: GET /api/bus/123/seatcount
 *
 * Route param:
 * - id (string): The bus ID passed as part of the URL path (e.g., `/api/bus/123/seatcount`)
 *
 * @returns
 * @returns {Response} 200 - JSON object containing the count of seats, e.g.,
 * {
 *    "bus_id": number,
 *    "seat_count": number
 * }
 * @returns {Response} 400 - If the bus ID is invalid.
 * @returns {Response} 500 - For internal server errors.
 */
export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = validateIdParam((await params).id);
  if (id instanceof Response) {
    return id;
  } else {
    return getSeatCountByBus(id);
  }
}
