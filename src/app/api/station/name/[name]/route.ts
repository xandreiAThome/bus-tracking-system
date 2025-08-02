import { getStationByName } from "@features/station/services/crud";
import { NextResponse, NextRequest } from "next/server";
import { parseError } from "@/lib/utils";
import { blockUserRole, checkAuth } from "@/lib/auth-helpers";

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
 */
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ name: string }> }
) {
  // Check authentication
  const { error: authError, session } = await checkAuth();
  if (authError) return authError;

  // Block users with "user" role
  const roleError = blockUserRole(session);
  if (roleError) return roleError;

  const { name } = await params;
  const decodedName = decodeURIComponent(name);

  if (!decodedName) {
    return NextResponse.json(
      { message: "Missing station name parameter" },
      { status: 400 }
    );
  }
  try {
    const result = await getStationByName(decodedName);
    if (result === null) {
      return NextResponse.json(
        { message: `Cannot find station with name ${decodedName}` },
        { status: 404 }
      );
    }
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}
