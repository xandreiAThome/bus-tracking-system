/**
 * GET /api/cashier
 *
 * Returns all cashiers in the system.
 */
import { getAllCashiers, addCashier } from "@features/cashier/services/crud";
import { parseError } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";
import { checkAuth, blockUserRole, checkAuthAndRole } from "@/lib/auth-helpers";

export async function GET() {
  // Check authentication
  const { error: authError, session } = await checkAuth();
  if (authError) return authError;

  // Block users with "user" role
  const roleError = blockUserRole(session);
  if (roleError) return roleError;

  try {
    const result = await getAllCashiers();
    return NextResponse.json({ cashiers: result }, { status: 201 });
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}

/**
 * POST /api/cashier
 *
 * Creates a new cashier.
 * Expected JSON body:
 * {
 *   first_name: string,
 *   last_name: string,
 *   user_id: number,
 *   station_id: number
 * }
 */
export async function POST(req: NextRequest) {
  const { error: authError } = await checkAuthAndRole(["admin"]);
  if (authError) return authError;

  const { first_name, last_name, user_id, station_id } = await req.json();

  if (!first_name || !last_name || user_id == null || station_id == null) {
    return NextResponse.json(
      { message: "Invalid input: one or more fields are missing" },
      { status: 400 }
    );
  }
  try {
    const created = await addCashier(
      first_name,
      last_name,
      user_id,
      station_id
    );
    return NextResponse.json(
      { message: "Cashier created successfully", result: created },
      { status: 201 }
    );
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}
