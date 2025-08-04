import { NextResponse } from "next/server";
import { getAllUsers } from "@/features/user/services/crud";
import { parseError } from "@/lib/utils";
import { checkAuthAndRole } from "@/lib/auth-helpers";

/**
 * GET /api/user
 *
 * Retrieves all users from the database.
 * Only admin users can access this endpoint.
 *
 * @returns {Response} 200 - Returns array of users
 * @returns {Response} 401 - Unauthorized (not signed in)
 * @returns {Response} 403 - Forbidden (not admin)
 * @returns {Response} 500 - Internal server error
 */
export async function GET() {
  // Only admins can view all users
  const { error: authError } = await checkAuthAndRole(["admin"]);
  if (authError) return authError;

  try {
    const users = await getAllUsers();
    return NextResponse.json({ users: users }, { status: 200 });
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}
