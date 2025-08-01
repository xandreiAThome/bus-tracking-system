/**
 * GET /api/cashier
 *
 * Returns all cashiers in the system.
 */
import { getAllCashiers, addCashier } from "@features/cashier/services/crud";
import { parseError } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await getAllCashiers();
    return NextResponse.json({ cashiers: result }, { status: 201 });
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
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
    return NextResponse.json(
      { message: "Invalid input: one or more fields are missing" },
      { status: 400 }
    );
  }
  try {
    const created = await addCashier(first_name, last_name, user_id, station_id);
    return NextResponse.json(
      { message: "Cashier created successfully", result: created},
      { status: 201 }
    );
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}
