import { getAllStations, addStation } from "@features/station/services/crud";

/**
 * GET /api/station
 *
 * Retrieves all stations from the database.
 *
 * @returns {Response} 200 OK - Returns a JSON object containing all stations:
 * {
 *   "stations": [
 *     {
 *       "id": number,
 *       "name": string
 *     },
 *     ...
 *   ]
 * }
 *
 * @returns {Response} 404 Not Found - If no stations exist.
 * @returns {Response} 500 Internal Server Error - For unexpected server or database errors.
 */
export async function GET() {
  return getAllStations();
}

/**
 * POST /api/station
 *
 * Creates a new station in the database.
 *
 * @param {Request} req - Incoming request with JSON body:
 * {
 *   name: string // The name of the station to create
 * }
 *
 * @returns {Response} 201 Created - Returns a confirmation message and the created station object:
 * {
 *   message: "Station created successfully",
 *   created: {
 *     id: number,
 *     name: string
 *   }
 * }
 *
 * @returns {Response} 400 Bad Request - If the `name` field is missing or invalid.
 * @returns {Response} 409 Conflict - If a station with the same name already exists.
 * @returns {Response} 500 Internal Server Error - For unexpected server or database errors.
 */
export async function POST(req: Request) {
  const { name } = await req.json();

  if (!name) {
    return Response.json({ message: "Missing 'name' field" }, { status: 400 });
  }

  return addStation(name);
}
