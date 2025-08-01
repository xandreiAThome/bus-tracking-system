import { NextRequest, NextResponse } from "next/server";
import { getBaggageTicketsByTripId } from "@/features/ticket/services/crud";

/**
 * GET /api/ticket/baggage/trip/[tripId]
 *
 * Fetches all baggage tickets for a given trip ID.
 *
 * @param {NextRequest} _ - The incoming request (unused).
 * @param {Object} params - Path parameters.
 * @param {string} params.tripId - The trip ID to fetch baggage tickets for.
 *
 * @returns {Response} 200 OK - JSON array of baggage tickets.
 * @returns {Response} 400 Bad Request - If tripId is invalid.
 * @returns {Response} 404 Not Found - If no tickets are found.
 * @returns {Response} 500 Internal Server Error - On unexpected errors.
 */
export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ tripId: string }> }
) {
  try {
    const { tripId } = await params;
    const parsedId = parseInt(tripId, 10);

    if (isNaN(parsedId)) {
      return NextResponse.json({ error: "Invalid trip ID" }, { status: 400 });
    }

    const tickets = await getBaggageTicketsByTripId(parsedId);
    return NextResponse.json({ baggage_tickets: tickets }, { status: 200 });
  } catch (error) {
    console.error("Error fetching baggage tickets by tripId:", error);
    return NextResponse.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
}
