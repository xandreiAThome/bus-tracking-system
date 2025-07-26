import {
  getAllTickets,
  createPassengerTicket,
  createBaggageTicket,
} from "@features/ticket/services/crud";

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
 * - `ticket_type` The type of ticket; can be "passenger" or "baggage"
 * 
 * extra fields for passenger
 * - `passenger_name` set empty string if none
 * - `discount` senior | pwd | student | NULL
 * 
 * extra fields for baggage
 * - `sender_no`
 * - `dispatcher_no`
 * - `sender_name`
 * - `receiver_name`
 * - `item`

 */
export async function POST(req: Request) {
  const payload = await req.json();
  const { price, trip_id, cashier_id, ticket_type } = payload;

  if (!price || !trip_id || !cashier_id) {
    return Response.json(
      { message: "Invalid input: Payload field/s missing" },
      { status: 400 }
    );
  }

  if (!["passenger", "baggage"].includes(ticket_type)) {
    return Response.json({ message: "Invalid ticket_type" }, { status: 400 });
  }
  if (ticket_type === "passenger") {
    const { passenger_name, discount } = payload;
    if (!passenger_name) {
      return Response.json(
        { message: "Missing passenger_name for passenger ticket" },
        { status: 400 }
      );
    }
    return createPassengerTicket(
      price,
      trip_id,
      cashier_id,
      ticket_type,
      passenger_name,
      discount ?? null
    );
  } else if (ticket_type === "baggage") {
    const { sender_no, dispatcher_no, sender_name, receiver_name, item } =
      payload;
    if (
      !sender_no ||
      !dispatcher_no ||
      !sender_name ||
      !receiver_name ||
      !item
    ) {
      return Response.json(
        { message: "Missing baggage ticket fields" },
        { status: 400 }
      );
    }
    return createBaggageTicket(
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
}
