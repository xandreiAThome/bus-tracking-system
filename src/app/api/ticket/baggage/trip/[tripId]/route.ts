import { NextRequest, NextResponse } from "next/server";
import { getBaggageTicketsByTripId } from "@/features/ticket/services/crud";

export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ tripId: string }> }
) {
  try {
    const tripId = parseInt((await params).tripId);

    if (isNaN(tripId)) {
      return NextResponse.json({ error: "Invalid trip ID" }, { status: 400 });
    }

    const tickets = await getBaggageTicketsByTripId(tripId);
    if (!tickets || tickets.length === 0) {
      return NextResponse.json(
        { message: "No baggage tickets found." },
        { status: 404 }
      );
    }
    return NextResponse.json({ tickets });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
}
