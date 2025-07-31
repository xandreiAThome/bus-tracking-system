// src/app/api/ticket/route.ts

import {
  getAllTickets,
  createFullPassengerTicket,
  createFullBaggageTicket,
} from "@/features/ticket/services/crud";
import { parseError } from "@/lib/utils";
import { NextResponse, NextRequest } from "next/server";

/**
 * GET /api/ticket
 *
 * Retrieves all tickets.
 */
export async function GET() {
  try {
    const tickets = await getAllTickets();
    if (!tickets || tickets.length === 0) {
      return NextResponse.json(
        { message: "No tickets found." },
        { status: 404 }
      );
    }
    return NextResponse.json({ tickets }, { status: 200 });
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}

/**
 * POST /api/ticket
 *
 * Creates a passenger or baggage ticket.
 */
export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();
    const { price, trip_id, cashier_id, ticket_type } = payload;

    // Validate common fields
    if (
      !price ||
      trip_id == null ||
      cashier_id == null ||
      !["passenger", "baggage"].includes(ticket_type)
    ) {
      return NextResponse.json(
        { message: "Invalid or missing required fields" },
        { status: 400 }
      );
    }

    // Passenger ticket validation
    if (ticket_type === "passenger") {
      const { passenger_name, discount } = payload;

      if (passenger_name === undefined) {
        return NextResponse.json(
          { message: "Missing passenger_name for passenger ticket" },
          { status: 400 }
        );
      }

      const result = await createFullPassengerTicket(
        price,
        Number(trip_id),
        Number(cashier_id),
        ticket_type,
        passenger_name,
        discount ?? null
      );

      return NextResponse.json(result, { status: 201 });
    }

    // Baggage ticket validation
    if (ticket_type === "baggage") {
      const {
        sender_no,
        dispatcher_no,
        sender_name,
        receiver_name,
        item,
      } = payload;

      if (
        !sender_no ||
        !dispatcher_no ||
        !sender_name ||
        !receiver_name ||
        !item
      ) {
        return NextResponse.json(
          { message: "Missing baggage ticket fields" },
          { status: 400 }
        );
      }

      const result = await createFullBaggageTicket(
        price,
        Number(trip_id),
        Number(cashier_id),
        ticket_type,
        sender_no,
        dispatcher_no,
        sender_name,
        receiver_name,
        item
      );

      return NextResponse.json(result, { status: 201 });
    }

    // Fallback for unexpected ticket_type
    return NextResponse.json(
      { message: "Invalid ticket_type provided" },
      { status: 400 }
    );
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}
