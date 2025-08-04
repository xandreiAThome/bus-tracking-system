import { blockUserRole, checkAuth } from "@/lib/auth-helpers";
import { getAllBaggageTickets } from "@features/ticket/services/crud";
import { NextResponse } from "next/server";

/**
 * GET /api/ticket/baggage
 *
 * Retrieves all baggage tickets.
 */
export async function GET() {
  // Check authentication
  const { error: authError, session } = await checkAuth();
  if (authError) return authError;

  // Block users with "user" role
  const roleError = blockUserRole(session);
  if (roleError) return roleError;

  try {
    const tickets = await getAllBaggageTickets();
    return NextResponse.json({ baggage_tickets: tickets }, { status: 200 });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
}
