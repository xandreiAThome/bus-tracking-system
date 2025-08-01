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

    if (!tickets || tickets.length === 0) {
      return NextResponse.json(
        { message: "No baggage tickets found." },
        { status: 404 }
      );
    }

    return NextResponse.json({ baggageTickets: tickets }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
}
