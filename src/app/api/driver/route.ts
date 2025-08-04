import { getAllDrivers, addDriver } from "@/features/driver/services/crud";
import { checkAuth, blockUserRole, checkAuthAndRole } from "@/lib/auth-helpers";
import { parseError } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

/**
 * GET /api/driver
 *
 * Returns all drivers in the system.
 */
export async function GET() {
  // Check authentication
  const { error: authError, session } = await checkAuth();
  if (authError) return authError;

  // Block users with "user" role
  const roleError = blockUserRole(session);
  if (roleError) return roleError;

  try {
    const result = await getAllDrivers();
    return NextResponse.json({ drivers: result }, { status: 200 });
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}

/**
 * POST /api/driver
 *
 * Creates a new driver.
 */
export async function POST(req: NextRequest) {
  const { error: authError } = await checkAuthAndRole(["admin"]);
  if (authError) return authError;

  try {
    const { first_name, last_name, user_id } = await req.json();

    if (!first_name || !last_name || user_id == null) {
      return NextResponse.json(
        { message: "Invalid input: one or more fields are missing" },
        { status: 400 }
      );
    }

    const created = await addDriver(first_name, last_name, user_id);
    return NextResponse.json(
      { message: "Driver created successfully", result: created },
      { status: 201 }
    );
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}
