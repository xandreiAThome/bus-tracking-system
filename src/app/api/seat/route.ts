import { getAllSeats, addSeat } from "@features/seat/services/crud";
import { NextRequest, NextResponse } from "next/server";
import { parseError } from "@/lib/utils";
import { checkAuth, blockUserRole, checkAuthAndRole } from "@/lib/auth-helpers";

/**
 * GET /api/seat
 */
export async function GET() {
  // Check authentication
  const { error: authError, session } = await checkAuth();
  if (authError) return authError;

  // Block users with "user" role
  const roleError = blockUserRole(session);
  if (roleError) return roleError;

  try {
    const result = await getAllSeats();
    return NextResponse.json({ seats: result }, { status: 200 });
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}

/**
 * POST /api/seat
 */
export async function POST(req: NextRequest) {
  const { error: authError } = await checkAuthAndRole(["admin"]);
  if (authError) return authError;

  try {
    const { seat_number, bus_id } = await req.json();

    if (!seat_number || !bus_id) {
      return NextResponse.json(
        { message: "Invalid input: Payload field/s missing" },
        { status: 400 }
      );
    }

    const created = await addSeat(seat_number, bus_id);
    return NextResponse.json(
      { message: "Seat created successfully", result: created },
      { status: 201 }
    );
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}
