import { validateIdParam, validateSortOrder } from "@/lib/utils";
import { getSeatsByBus } from "@features/seat/services/crud";

/**
 * GET /api/bus/[id]/seats
 *
 * Gets the seats associated with a bus based on the dynamic `id` parameter.
 * If no sortOrder parameter is given, or if sortOrder is malformed, will default to `asc`
 *
 * Example request: GET /api/bus/123/seats?sortOrder=desc
 *
 * Route params:
 * - id (string): The bus ID passed as part of the URL path (e.g., `/api/bus/123/seats`)
 *
 * Query params:
 * - sortOrder (string, optional): The sort order for seat numbers. Accepted values are `"asc"` or `"desc"`. Defaults to `"asc"`.
 *
 * @returns {Response} 200 - JSON response containing an array of seats sorted according to the specified order.
 * @returns {Response} 400 - If the bus ID is invalid.
 * @returns {Response} 500 - For internal server errors.
 *
 * @returns
 * 200 OK — JSON response containing an array of seats sorted according to the specified order.:
 * {
 *   "bus_id": number,
 *   "seats": [
 *     {
 *       "id": number,
 *       "seat_number": string,
 *       "bus_id": number
 *     },
 *     ...
 *   ]
 * }
 *
 * @returns — 404 Not Found — If no seats exist.
 * @returns — 500 Internal Server Error — For unexpected database or server errors.
 */
export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = validateIdParam((await params).id);
  const url = new URL(req.url);
  const rawSortOrder = url.searchParams.get("sortOrder");

  const validatedSortOrder = validateSortOrder(rawSortOrder);

  if (id instanceof Response) {
    return id;
  } else {
    return getSeatsByBus(id, validatedSortOrder);
  }
}
