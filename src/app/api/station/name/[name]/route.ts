import { getStationByName } from "@features/station/services/crud";

/**
 * GET /api/station/name/[name]
 *
 * Retrieves a station's details by its exact `name`.
 *
 * Route param:
 * - name (string): The station's name, URL-encoded if it contains spaces or special characters.
 *
 * Example request:
 * GET /api/station/name/Terminal%20A
 *
 * @param {Request} req - The incoming request.
 * @param {Object} params - URL parameters object containing:
 *   @param {string} name - The station name to lookup.
 *
 * @returns {Response} 200 OK - Returns the station object:
 * {
 *   "station": {
 *     "id": number,
 *     "name": string
 *   }
 * }
 *
 * @returns {Response} 400 Bad Request - If the `name` param is missing or empty.
 * @returns {Response} 404 Not Found - If no station matches the given name.
 * @returns {Response} 500 Internal Server Error - For unexpected database or server errors.
 */
export async function GET(
  req: Request,
  { params }: { params: { name: string } }
) {
  const name = decodeURIComponent(params.name || "").trim();

  if (!name) {
    return Response.json({ message: "Missing station name" }, { status: 400 });
  }

  return getStationByName(name);
}
