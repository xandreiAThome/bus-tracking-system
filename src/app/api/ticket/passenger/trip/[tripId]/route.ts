import { NextRequest, NextResponse } from "next/server";
import { getPassengerTicketsByTripId } from "@/features/ticket/services/crud";
import { validateIdParam, parseError } from "@/lib/utils";

/**
 * GET /api/ticket/passenger/trip/[tripId]
 *
 * Fetches all passenger tickets for a given trip ID.
 */
export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ tripId: string }> }
) {
  const { tripId } = await params;

  if (!validateIdParam(tripId)) {
    return NextResponse.json(
      { message: "Invalid [tripId] parameter" },
      { status: 400 }
    );
  }

  try {
    const tickets = await getPassengerTicketsByTripId(Number(tripId));

    if (!tickets || tickets.length === 0) {
      return NextResponse.json(
        { message: "No passenger tickets found." },
        { status: 404 }
      );
    }

    return NextResponse.json({ passengerTickets: tickets }, { status: 200 });
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}
