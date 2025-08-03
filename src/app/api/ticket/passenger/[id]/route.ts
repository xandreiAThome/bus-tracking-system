import { blockUserRole, checkAuth } from "@/lib/auth-helpers";
import { validateIdParam, parseError } from "@/lib/utils";
import {
  getPassengerTicketById,
  updateFullPassengerTicket,
} from "@features/ticket/services/crud";
import { NextRequest, NextResponse } from "next/server";

/**
 * GET /api/ticket/passenger/[id]
 *
 * Retrieve passenger ticket by ticket ID.
 */
export async function GET(
  _: NextRequest,
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
      { message: "Invalid [id] parameter" },
      { status: 400 }
    );
  }

  try {
    const ticket = await getPassengerTicketById(Number(id));

    if (!ticket) {
      return NextResponse.json(
        { message: `Cannot find passenger_ticket with id ${id}` },
        { status: 404 }
      );
    }

    return NextResponse.json({ passenger_ticket: ticket }, { status: 200 });
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}

/**
 * PUT /api/ticket/passenger/[id]
 *
 * Update ticket and associated passenger_ticket by ticket ID.
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
    return NextResponse.json(
      { message: "Invalid [id] parameter" },
      { status: 400 }
    );
  }

  try {
    const {
      price,
      trip_id,
      cashier_id,
      ticket_type,
      // passenger_name,
      discount,
    } = await req.json();

    if (!price || !trip_id || !cashier_id || !ticket_type) {
      return NextResponse.json(
        { message: "Missing required ticket fields" },
        { status: 400 }
      );
    }

    if (ticket_type !== "passenger") {
      return NextResponse.json(
        { message: "Invalid ticket_type; expected 'passenger'" },
        { status: 400 }
      );
    }

    {
      /*if (!passenger_name) {
      return NextResponse.json(
        { message: "Missing required passenger_name for passenger ticket" },
        { status: 400 }
      );
    }*/
    }

    const updated = await updateFullPassengerTicket(
      Number(id),
      price,
      trip_id,
      cashier_id,
      ticket_type,
      //  passenger_name,
      discount ?? null
    );

    return NextResponse.json(
      { message: `Updated passenger ticket with id ${id}`, result: updated },
      { status: 200 }
    );
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}
