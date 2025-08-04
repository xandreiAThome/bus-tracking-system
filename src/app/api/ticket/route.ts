import { getAllTickets } from "@features/ticket/services/crud";
import { addTicket } from "@features/ticket/services/crud";

/**
 * GET api/ticket
 *
 * Gets all the existing tickets
 */
export async function GET() {
  return getAllTickets();
}

/**
 * POST api/ticket
 * 
 * Adds a ticket with fields matching `req`'s payload
 * @param {Request} req Incoming request containing the following:
 * - `price` The price of the ticket
 * - `trip_id` The id of the bus associated with the ticket
 * - `cashier_id` The id of the bus associated with the ticket

 */
export async function POST(req: Request) {
  const { price, trip_id, cashier_id } = await req.json();

  if (!price || !trip_id || !cashier_id) {
    return Response.json(
      { message: "Invalid input: Payload field/s missing" },
      { status: 400 }
    );
  }
  return addTicket(price, trip_id, cashier_id);
}
