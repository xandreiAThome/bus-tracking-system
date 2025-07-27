import { getAllSeats } from "@features/seat/services/crud";
import { addSeat } from "@features/seat/services/crud";

/**
 * GET /api/seats
 *
 * Retrieves all existing seats from the database.
 *
 * @returns {Response}
 * 200 OK — Returns a JSON object:
 * {
 *   "seats": [
 *     {
 *       "id": number,
 *       "seat_number": string,
 *       "bus_id": number
 *     },
 *     ...
 *   ]
 * }
 *
 * @returns {Response} 404 Not Found If no seats exist.
 * @returns {Response} 500 Internalerver Error — For unexpected database or server errors.
 */
export async function GET() {
  return getAllSeats();
}

/**
 * POST /api/seat
 *
 * Creates a new seat for a specific bus.
 *
 * @param {Request} req - The incoming request with a JSON body:
 * {
 *   seat_number: string, // The seat number or label (e.g. "A1", "12")
 *   bus_id: number       // The ID of the associated bus
 * }
 *
 * @returns {Response} 201 - Seat created successfully:
 * {
 *   message: "Seat created successfully",
 *   created: {
 *     id: number,
 *     seat_number: string,
 *     bus_id: number
 *   }
 * }
 *
 * @returns {Response} 400 - Invalid or missing input data.
 * @returns {Response} 409 - Seat already exists for the bus.
 * @returns {Response} 500 - Internal server/database error.
 */
export async function POST(req: Request) {
  const { seat_number, bus_id } = await req.json();

  if (!seat_number || !bus_id) {
    return Response.json(
      { message: "Invalid input: Payload field/s missing" },
      { status: 400 }
    );
  }
  return addSeat(seat_number, bus_id);
}
