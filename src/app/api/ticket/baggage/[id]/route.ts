import { blockUserRole, checkAuth } from "@/lib/auth-helpers";
import { validateIdParam, parseError } from "@/lib/utils";
import {
  getBaggageTicketById,
  updateFullBaggageTicket,
} from "@features/ticket/services/crud";
import { NextResponse, NextRequest } from "next/server";

/**
 * GET /api/ticket/baggage/[id]
 *
 * Fetches a baggage ticket by baggage_ticket ID.
 */
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  // Check authentication
  const { error: authError, session } = await checkAuth();
  if (authError) return authError;

  // Block users with "user" role
  const roleError = blockUserRole(session);
  if (roleError) return roleError;

  const { id } = await params;

  if (!validateIdParam(id)) {
    return NextResponse.json(
      { message: "Invalid [id] Parameter" },
      { status: 400 }
    );
  }

  try {
    const baggageTicket = await getBaggageTicketById(Number(id));

    if (!baggageTicket) {
      return NextResponse.json(
        { message: `Cannot find baggage_ticket with id ${id}` },
        { status: 404 }
      );
    }

    return NextResponse.json(baggageTicket, { status: 200 });
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}

/**
 * PUT /api/ticket/baggage/[id]
 *
 * Updates a baggage ticket by ticket ID.
 */
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  // Check authentication
  const { error: authError, session } = await checkAuth();
  if (authError) return authError;

  // Block users with "user" role
  const roleError = blockUserRole(session);
  if (roleError) return roleError;

  const { id } = await params;

  if (!validateIdParam(id)) {
    return NextResponse.json({ message: "Invalid ticket ID" }, { status: 400 });
  }

  try {
    const payload = await req.json();
    const {
      price,
      trip_id,
      cashier_id,
      ticket_type,
      sender_no,
      dispatcher_no,
      sender_name,
      receiver_name,
      item,
    } = payload;

    if (!price && !trip_id && !cashier_id && !ticket_type) {
      return NextResponse.json(
        { message: "Missing or invalid general ticket fields" },
        { status: 400 }
      );
    }

    if (ticket_type !== "baggage") {
      return NextResponse.json(
        { message: "Ticket type mismatch" },
        { status: 400 }
      );
    }

    if (
      sender_no == null &&
      dispatcher_no == null &&
      !sender_name &&
      !receiver_name &&
      !item
    ) {
      return NextResponse.json(
        { message: "Missing baggage-specific fields" },
        { status: 400 }
      );
    }

    const updated = await updateFullBaggageTicket(
      Number(id),
      price,
      trip_id,
      cashier_id,
      ticket_type,
      sender_no,
      dispatcher_no,
      sender_name,
      receiver_name,
      item
    );

    return NextResponse.json(
      { message: `Updated baggage ticket with id ${id}`, result: updated },
      { status: 200 }
    );
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}
