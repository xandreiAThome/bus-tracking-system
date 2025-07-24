import { validateIdParam } from "@/lib/utils";
import { getPassengerTicketByTicketId } from "@features/ticket/services/crud";
import { putPassengerTicket } from "@features/ticket/services/crud";

/**
 * GET /api/ticket/passenger/[id]
 *
 * Gets passenger ticket information based on the dynamic `id` parameter (ticket_id).
 * Example request: GET /api/ticket/passenger/123
 *
 * Route param:
 * - id (string): ticket ID passed as part of the URL (e.g., /api/ticket/passenger/123)
 */
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = validateIdParam((await params).id);
  if (id instanceof Response) {
    return id;
  }

  const passengerTicket = await getPassengerTicketByTicketId(id);
  if (!passengerTicket) {
    return new Response(
      JSON.stringify({ message: "Passenger ticket not found" }),
      { status: 404, headers: { "Content-Type": "application/json" } }
    );
  }
  return new Response(JSON.stringify({ passengerTicket }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

/**
 * PUT /api/ticket/passenger/[id]
 *
 * Updates the base ticket and associated passenger_ticket
 *
 * Route param:
 * - id: ticket ID (e.g. /api/ticket/passenger/123)
 *
 * Body payload:
 * - price (string)
 * - trip_id (number)
 * - cashier_id (number)
 * - ticket_type (string, should be "passenger")
 * - passenger_name (string)
 * - discount (string | null)
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
  const { price, trip_id, cashier_id, ticket_type, passenger_name, discount } =
    payload;

  if (!price || !trip_id || !cashier_id || !ticket_type) {
    return Response.json(
      { message: "Missing required ticket fields" },
      { status: 400 }
    );
  }

  if (ticket_type !== "passenger") {
    return Response.json(
      { message: "Invalid ticket_type; expected 'passenger'" },
      { status: 400 }
    );
  }

  if (!passenger_name) {
    return Response.json(
      { message: "Missing required passenger_name for passenger ticket" },
      { status: 400 }
    );
  }

  return putPassengerTicket(
    id,
    price,
    trip_id,
    cashier_id,
    ticket_type,
    passenger_name,
    discount ?? null
  );
}
