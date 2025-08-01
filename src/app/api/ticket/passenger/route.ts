import { getAllPassengerTickets } from "@features/ticket/services/crud";
import { parseError } from "@/lib/utils";
import { NextResponse } from "next/server";

/**
 * GET /api/ticket/passenger
 *
 * Retrieves all passenger tickets.
 */
export async function GET() {
  try {
    const tickets = await getAllPassengerTickets();

    return NextResponse.json({ passenger_tickets: tickets }, { status: 200 });
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}
