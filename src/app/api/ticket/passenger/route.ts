import { getAllPassengerTickets } from "@features/ticket/services/crud";
import { parseError } from "@/lib/utils";
import { NextResponse } from "next/server";
import { blockUserRole, checkAuth } from "@/lib/auth-helpers";

/**
 * GET /api/ticket/passenger
 *
 * Retrieves all passenger tickets.
 */
export async function GET() {
  // Check authentication
  const { error: authError, session } = await checkAuth();
  if (authError) return authError;

  // Block users with "user" role
  const roleError = blockUserRole(session);
  if (roleError) return roleError;

  try {
    const tickets = await getAllPassengerTickets();

    return NextResponse.json({ passenger_tickets: tickets }, { status: 200 });
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}
