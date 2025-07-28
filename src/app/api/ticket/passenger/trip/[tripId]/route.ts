import { NextRequest, NextResponse } from "next/server";
import { getPassengerTicketsByTripId } from "@/features/ticket/services/crud";
import { validateIdParam } from "@/lib/utils";

export async function GET(
  _: NextRequest,
  context: { params: { tripId: string } }
) {
  try {
    const tripId = validateIdParam(context.params.tripId);
    if (tripId instanceof Response) {
      // If validateIdParam returns a Response, wrap it in NextResponse
      return NextResponse.json(await tripId.json(), { status: tripId.status });
    }

    const tickets = await getPassengerTicketsByTripId(tripId);
    if (!tickets || tickets.length === 0) {
      return NextResponse.json(
        { message: "No passenger tickets found." },
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
