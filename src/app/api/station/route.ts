import { getAllStations, addStation } from "@features/station/services/crud";

/**
 * GET /api/station
 *
 * Gets all stations from the database.
 *
 * Example request:
 * GET /api/station
 */
export async function GET() {
  return getAllStations();
}

/**
 * POST /api/station
 *
 * Creates a new station in the database.
 *
 * Request body:
 * - name (string): The name of the station
 *
 * Example request:
 * POST /api/station
 * {
 *   "name": "Terminal A"
 * }
 */
export async function POST(req: Request) {
  const { name } = await req.json();

  if (!name) {
    return Response.json({ message: "Missing 'name' field" }, { status: 400 });
  }

  return addStation(name);
}
