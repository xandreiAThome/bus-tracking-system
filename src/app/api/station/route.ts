import { getAllStations, addStation } from "@/features/station/services/crud";
import { parseError } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";
import { checkAuth, checkAuthAndRole, blockUserRole } from "@/lib/auth-helpers";

/**
 * GET /api/station
 *
 * Retrieves all stations from the database.
 * Requires authentication. Users with "user" role are blocked.
 *
 * @returns {Response} 200 - Returns array of stations
 * @returns {Response} 401 - Unauthorized (not signed in)
 * @returns {Response} 403 - Forbidden (user role blocked)
 * @returns {Response} 500 - Internal server error
 */
export async function GET() {
  // Check authentication
  const { error: authError, session } = await checkAuth();
  if (authError) return authError;

  // Block users with "user" role
  const roleError = blockUserRole(session);
  if (roleError) return roleError;

  try {
    const stations = await getAllStations();
    return NextResponse.json({ stations: stations }, { status: 200 });
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}

/**
 * POST /api/station
 *
 * Creates a new station.
 * Only admin users can create stations.
 *
 * @returns {Response} 201 - Station created successfully
 * @returns {Response} 401 - Unauthorized (not signed in)
 * @returns {Response} 403 - Forbidden (not admin)
 * @returns {Response} 400 - Invalid input data
 * @returns {Response} 500 - Internal server error
 */
export async function POST(req: NextRequest) {
  // Only admins can create stations
  const { error: authError } = await checkAuthAndRole(["admin"]);
  if (authError) return authError;

  try {
    const { name } = await req.json();

    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { message: "Invalid or missing 'name' field" },
        { status: 400 }
      );
    }

    const created = await addStation(name);
    return NextResponse.json(
      { message: "Station created successfully", result: created },
      { status: 201 }
    );
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}
