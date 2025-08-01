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
