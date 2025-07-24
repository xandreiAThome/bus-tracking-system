import { validateIdParam } from "@/lib/utils";
import { getBaggageTicketByTicketId } from "@features/ticket/services/crud";
import { putBaggageTicket } from "@features/ticket/services/crud";

/**
 * GET /api/ticket/baggage/[id]
 *
 * Gets baggage ticket information based on the dynamic `id` parameter (ticket_id).
 * Example request: GET /api/ticket/baggage/123
 *
 * Route param:
 * - id (string): ticket ID passed as part of the URL (e.g., /api/ticket/baggage/123)
 */
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = validateIdParam((await params).id);
  if (id instanceof Response) {
    return id;
  }

  const baggageTicket = await getBaggageTicketByTicketId(id);
  if (!baggageTicket) {
    return new Response(
      JSON.stringify({ message: "Baggage ticket not found" }),
      { status: 404, headers: { "Content-Type": "application/json" } }
    );
  }
  return new Response(JSON.stringify({ baggageTicket }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

/**
 * PUT /api/ticket/baggage/[id]
 *
 * Updates the base ticket and associated baggage_ticket
 *
 * Route param:
 * - id: ticket ID (e.g. /api/ticket/baggage/123)
 *
 * Body payload:
 * - price (string)
 * - trip_id (number)
 * - cashier_id (number)
 * - ticket_type (string, should be "baggage")
 * - sender_no (number)
 * - dispatcher_no (number)
 * - sender_name (string)
 * - receiver_name (string)
 * - item (string)
 */
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = validateIdParam((await params).id);
  if (id instanceof Response) {
    return id;
  }

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

  if (!price || !trip_id || !cashier_id || !ticket_type) {
    return Response.json(
      { message: "Missing required ticket fields" },
      { status: 400 }
    );
  }

  if (ticket_type !== "baggage") {
    return Response.json(
      { message: "Invalid ticket_type; expected 'baggage'" },
      { status: 400 }
    );
  }

  if (
    sender_no == null ||
    dispatcher_no == null ||
    !sender_name ||
    !receiver_name ||
    !item
  ) {
    return Response.json(
      { message: "Missing required baggage ticket fields" },
      { status: 400 }
    );
  }

  return putBaggageTicket(
    id,
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
}
