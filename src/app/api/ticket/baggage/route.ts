import { getAllBaggageTickets } from "@features/ticket/services/crud";
import { NextResponse } from "next/server";

/**
 * GET /api/ticket/baggage
 *
 * Retrieves all baggage tickets.
 *
 * @returns {Response} 200 OK - Returns JSON array of baggage tickets.
 * @returns {Response} 404 Not Found - If no baggage tickets found.
 * @returns {Response} 500 Internal Server Error - On unexpected errors.
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
    return NextResponse.json(tickets, { status: 200 });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
}
