import { validateIdParam } from "@/lib/utils";
import { getPassengerTicketByTicketId } from "@features/ticket/services/crud";
import { putPassengerTicket } from "@features/ticket/services/crud";

/**
 * GET /api/ticket/passenger/[id]
 *
 * Retrieves passenger ticket information based on the dynamic `id` parameter (ticket_id).
 *
 * Route param:
 * - id (string): Ticket ID (e.g., /api/ticket/passenger/123)
 *
 * Example request:
 * GET /api/ticket/passenger/123
 *
 * @param {Request} req - Incoming request object.
 * @param {Object} params - URL parameters object containing:
 *   @param {string} id - The ticket ID to retrieve passenger ticket info for.
 *
 * @returns {Response} 200 OK - Returns a JSON object with passenger ticket data:
 * {
 *   "passengerTicket": {
 *     "id": number,
 *     "passenger_name": string,
 *     "discount": string | null,
 *     "ticket_id": number
 *   }
 * }
 *
 * @returns {Response} 400 Bad Request - If `id` is invalid.
 * @returns {Response} 404 Not Found - If no passenger ticket exists for the given ticket ID.
 * @returns {Response} 500 Internal Server Error - For unexpected errors.
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
 * Updates the base ticket and associated passenger_ticket by `id`.
 *
 * Route param:
 * - id (string): Ticket ID (e.g., /api/ticket/passenger/123)
 *
 * Body payload:
 * - price (string): Ticket price
 * - trip_id (number): Associated trip ID
 * - cashier_id (number): Cashier ID
 * - ticket_type (string): Should be "passenger"
 * - passenger_name (string): Name of the passenger
 * - discount (string | null): Discount applied (optional)
 *
 * Example request body:
 * {
 *   "price": "50.00",
 *   "trip_id": 5,
 *   "cashier_id": 2,
 *   "ticket_type": "passenger",
 *   "passenger_name": "Alice Johnson",
 *   "discount": "student"
 * }
 *
 * @param {Request} req - Incoming request object.
 * @param {Object} params - URL parameters object containing:
 *   @param {string} id - The ticket ID to update.
 *
 * @returns {Response} 200 OK - Returns confirmation message on successful update.
 * @returns {Response} 400 Bad Request - If required fields are missing or invalid.
 * @returns {Response} 404 Not Found - If the passenger ticket with the given ID does not exist.
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
