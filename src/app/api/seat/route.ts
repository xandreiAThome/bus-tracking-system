import { getAllSeats } from "@features/seat/services/crud";
import { addSeat } from "@features/seat/services/crud";

/**
 * GET api/seats
 * 
 * Gets all the existing seats
 */
export async function GET(){
  return getAllSeats();
}

/**
 * POST api/seat
 * 
 * Adds a product with fields matching `req`'s payload
 * @param {Request} req Incoming request containing the following:
 * `id`: The id of the seat
 * `order`: The order of the seat
 * `bus_id`: The id of the bus associated with the seat
 */
export async function POST(req: Request) {
  const { id, order, bus_id } = await req.json();

  if (!id || !order || !bus_id) {
    return Response.json(
      { message: "Invalid input: Payload field/s missing" },
      { status: 400 }
    );
  }
  return addSeat(id, order, bus_id);
}