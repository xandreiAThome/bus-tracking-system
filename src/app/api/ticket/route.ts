import {
  getAllTickets,
  createPassengerTicket,
  createBaggageTicket,
} from "@features/ticket/services/crud";
import { NextResponse } from "next/server";

/**
 * GET /api/ticket
 *
 * Retrieves all existing tickets.
 *
 * Example request:
 * GET /api/ticket
 *
 * @returns {Response} 200 OK - Returns JSON with an array of tickets or
 * 404 Not Found if no tickets exist.
 * @returns {Response} 500 Internal Server Error - For unexpected errors.
 */
export async function GET() {
  try {
    const tickets = await getAllTickets();
    if (!tickets || tickets.length === 0) {
      return NextResponse.json(
        { message: "No passenger tickets found." },
        { status: 404 }
      );
    }
    return NextResponse.json(tickets, { status: 200 });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
}

/**
 * POST /api/ticket
 *
 * Creates a new ticket of type "passenger" or "baggage" based on the request payload.
 *
 * Expected JSON payload fields:
 * - price (string): Ticket price (required)
 * - trip_id (number): Associated trip ID (required)
 * - cashier_id (number): Cashier ID (required)
 * - ticket_type (string): "passenger" or "baggage" (required)
 *
 * Additional fields for passenger tickets:
 * - passenger_name (string): Name of passenger (required; empty string allowed)
 * - discount (string|null): Discount type ("senior", "pwd", "student", or null)
 *
 * Additional fields for baggage tickets:
 * - sender_no (number): Sender contact number (required)
 * - dispatcher_no (number): Dispatcher contact number (required)
 * - sender_name (string): Sender's name (required)
 * - receiver_name (string): Receiver's name (required)
 * - item (string): Description of the baggage item (required)
 *
 * Example payload for passenger ticket:
 * {
 *   "price": "100.00",
 *   "trip_id": 1,
 *   "cashier_id": 2,
 *   "ticket_type": "passenger",
 *   "passenger_name": "John Doe",
 *   "discount": "student"
 * }
 *
 * Example payload for baggage ticket:
 * {
 *   "price": "50.00",
 *   "trip_id": 1,
 *   "cashier_id": 2,
 *   "ticket_type": "baggage",
 *   "sender_no": 1234567890,
 *   "dispatcher_no": 9876543210,
 *   "sender_name": "Alice",
 *   "receiver_name": "Bob",
 *   "item": "Suitcase"
 * }
 *
 * @param {Request} req - Incoming request containing ticket data in JSON format.
 *
 * @returns {Response} 201 Created - Returns confirmation with the created ticket ID.
 * @returns {Response} 400 Bad Request - If required fields are missing or invalid.
 * @returns {Response} 500 Internal Server Error - For unexpected errors.
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
