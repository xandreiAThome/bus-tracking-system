import { getAllBaggageTickets } from "@features/ticket/services/crud";
import { NextResponse } from "next/server";

/**
 * GET /api/ticket/baggage
 *
 * Retrieves all baggage tickets.
 */
export async function GET() {
  try {
    const tickets = await getAllBaggageTickets();
    return NextResponse.json({ baggage_tickets: tickets }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
}
