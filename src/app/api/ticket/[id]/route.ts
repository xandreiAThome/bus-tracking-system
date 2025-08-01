// src/app/api/ticket/[id]/route.ts

import { validateIdParam, parseError } from "@/lib/utils";
import { getTicketById, deleteTicket, updateTicket } from "@/features/ticket/services/crud";
import { NextResponse, NextRequest } from "next/server";

/**
 * GET /api/ticket/[id]
 *
 * Retrieves a ticket by ID.
 */
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (!validateIdParam(id)) {
    return NextResponse.json(
      { message: "Invalid [id] Parameter" },
      { status: 400 }
    );
  }

  try {
    const ticket = await getTicketById(Number(id));
    if (!ticket) {
      return NextResponse.json(
        { message: `Cannot find ticket with id ${id}` },
        { status: 404 }
      );
    }

    return NextResponse.json({ ticket }, { status: 200 });
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}

/**
 * DELETE /api/ticket/[id]
 *
 * Deletes a ticket by ID.
 */
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (!validateIdParam(id)) {
    return NextResponse.json(
      { message: "Invalid [id] Parameter" },
      { status: 400 }
    );
  }

  try {
    const deleted = await deleteTicket(Number(id));
    return NextResponse.json(
      { message: `Ticket with id ${id} deleted successfully.`, result: deleted },
      { status: 200 }
    );
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}
