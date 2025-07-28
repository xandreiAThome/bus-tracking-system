import { validateIdParam } from "@/lib/utils";
import { getBaggageTicketByTicketId } from "@features/ticket/services/crud";
import { putBaggageTicket } from "@features/ticket/services/crud";
import { NextResponse } from "next/server";

/**
 * GET /api/ticket/baggage/[id]
 *
 * Retrieves baggage ticket information based on the dynamic `id` parameter (ticket_id).
 *
 * Route param:
 * - id (string): Ticket ID (e.g., /api/ticket/baggage/123)
 *
 * Example request:
 * GET /api/ticket/baggage/123
 *
 * @param {Request} req - Incoming request object.
 * @param {Object} params - URL parameters object containing:
 *   @param {string} id - The ticket ID to retrieve baggage ticket info for.
 *
 * @returns {Response} 200 OK - Returns a JSON object with baggage ticket data:
 * {
 *   "baggageTicket": {
 *     "id": number,
 *     "sender_no": string,
 *     "dispatcher_no": string,
 *     "sender_name": string,
 *     "receiver_name": string,
 *     "item": string,
 *     "ticket_id": number
 *   }
 * }
 *
 * @returns {Response} 400 Bad Request - If `id` is invalid.
 * @returns {Response} 404 Not Found - If no baggage ticket exists for the given ticket ID.
 * @returns {Response} 500 Internal Server Error - For unexpected errors.
 */
export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  try {
    const id = validateIdParam(context.params.id);
    if (id instanceof Response) {
      // If validateIdParam returns a Response, wrap it in NextResponse
      return NextResponse.json(await id.json(), { status: id.status });
    }

    const baggageTicket = await getBaggageTicketByTicketId(id);
    if (!baggageTicket) {
      return NextResponse.json(
        { message: "Baggage ticket not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ baggageTicket }, { status: 200 });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

/**
 * PUT /api/ticket/baggage/[id]
 *
 * Updates the base ticket and associated baggage ticket by `id`.
 *
 * Route param:
 * - id (string): Ticket ID (e.g., /api/ticket/baggage/123)
 *
 * Body payload:
 * - price (string): Ticket price
 * - trip_id (number): Associated trip ID
 * - cashier_id (number): Cashier ID
 * - ticket_type (string): Should be "baggage"
 * - sender_no (number): Sender's phone number
 * - dispatcher_no (number): Dispatcher’s phone number
 * - sender_name (string): Name of the sender
 * - receiver_name (string): Name of the receiver
 * - item (string): Description of the item
 *
 * Example request body:
 * {
 *   "price": "100.00",
 *   "trip_id": 5,
 *   "cashier_id": 2,
 *   "ticket_type": "baggage",
 *   "sender_no": 1234567890,
 *   "dispatcher_no": 9876543210,
 *   "sender_name": "John Doe",
 *   "receiver_name": "Jane Smith",
 *   "item": "Suitcase"
 * }
 *
 * @param {Request} req - Incoming request object.
 * @param {Object} params - URL parameters object containing:
 *   @param {string} id - The ticket ID to update.
 *
 * @returns {Response} 200 OK - Returns confirmation message on successful update.
 * @returns {Response} 400 Bad Request - If required fields are missing or invalid.
 * @returns {Response} 404 Not Found - If the baggage ticket with the given ID does not exist.
 * @returns {Response} 500 Internal Server Error - For unexpected errors.
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
