import { getStationByName } from "@features/station/services/crud";

/**
 * GET /api/station/name/[name]
 *
 * Retrieves a station's information by its `name` field.
 *
 * Route param:
 * - name (string): Station name (URL encoded if it contains spaces or symbols)
 *
 * Example request:
 * GET /api/station/name/Terminal%20A
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
