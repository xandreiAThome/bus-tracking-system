import { NextRequest, NextResponse } from "next/server";
import { getPassengerTicketsByTripId } from "@/features/ticket/services/crud";
import { validateIdParam, parseError } from "@/lib/utils";
import { blockUserRole, checkAuth } from "@/lib/auth-helpers";

/**
 * GET /api/ticket/passenger/trip/[tripId]
 *
 * Fetches all passenger tickets for a given trip ID.
 */
export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ tripId: string }> }
) {
  // Check authentication
  const { error: authError, session } = await checkAuth();
  if (authError) return authError;

  // Block users with "user" role
  const roleError = blockUserRole(session);
  if (roleError) return roleError;

  const { tripId } = await params;

  if (!validateIdParam(tripId)) {
    return NextResponse.json(
      { message: "Invalid [tripId] parameter" },
      { status: 400 }
    );
  }

  try {
    const tickets = await getPassengerTicketsByTripId(Number(tripId));

    return NextResponse.json({ passenger_tickets: tickets }, { status: 200 });
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}
