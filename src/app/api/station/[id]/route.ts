import { validateIdParam } from "@/lib/utils";
import { getStation, deleteStation } from "@features/station/services/crud";

/**
 * GET /api/station/[id]
 *
 * Retrieves a station's information based on the `id` parameter in the URL path.
 *
 * Route param:
 * - id (string): Station ID (e.g., /api/station/1)
 *
 * Example request:
 * GET /api/station/1
 *
 * @param {Request} req - Incoming request object.
 * @param {Object} params - URL parameters object containing:
 *   @param {string} id - The station ID to retrieve.
 *
 * @returns {Response} 200 OK - Returns a JSON object with the station data:
 * {
 *   "station": {
 *     "id": number,
 *     "name": string
 *   }
 * }
 *
 * @returns {Response} 400 Bad Request - If `id` is invalid.
 * @returns {Response} 404 Not Found - If no station exists with the given ID.
 * @returns {Response} 500 Internal Server Error - For unexpected errors.
 */
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = validateIdParam((await params).id);
  if (id instanceof Response) return id;
  return getStation(id);
}

/**
 * DELETE /api/station/[id]
 *
 * Deletes a station based on the dynamic `id` parameter in the URL path.
 *
 * Route param:
 * - id (string): Station ID (e.g., /api/station/1)
 *
 * Example request:
 * DELETE /api/station/1
 *
 * @param {Request} req - Incoming request object.
 * @param {Object} params - URL parameters object containing:
 *   @param {string} id - The station ID to delete.
 *
 * @returns {Response} 200 OK - Returns a JSON message confirming deletion:
 * {
 *   "message": "Station deleted successfully",
 *   "id": number
 * }
 *
 * @returns {Response} 400 Bad Request - If `id` is invalid.
 * @returns {Response} 404 Not Found - If no station exists with the given ID.
 * @returns {Response} 500 Internal Server Error - For unexpected errors.
 */
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = validateIdParam((await params).id);
  if (id instanceof Response) return id;
  return deleteStation(id);
}
