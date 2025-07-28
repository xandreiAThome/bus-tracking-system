/**
 * GET /api/cashier
 *
 * Returns all cashiers in the system.
 */
import { getAllCashiers, addCashier } from "@features/cashier/services/crud";

export async function GET() {
  return getAllCashiers();
}

/**
 * POST /api/cashier
 *
 * Creates a new cashier.
 * Expected JSON body:
 * {
 *   first_name: string,
 *   last_name: string,
 *   user_id: number,
 *   station_id: number
 * }
 */
export async function POST(req: Request) {
  const { first_name, last_name, user_id, station_id } = await req.json();

  if (!first_name || !last_name || user_id == null || station_id == null) {
    return Response.json(
      { message: "Invalid input: one or more fields are missing" },
      { status: 400 }
    );
  }

  return addCashier(first_name, last_name, user_id, station_id);
}
