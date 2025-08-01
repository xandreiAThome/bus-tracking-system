import { getAllSeats, addSeat } from "@features/seat/services/crud";
import { NextRequest, NextResponse } from "next/server";
import { parseError } from "@/lib/utils";

/**
 * GET /api/seat
 */
export async function GET() {
  try {
    const result = await getAllSeats();
    if (!result) {
      return NextResponse.json(
        { message: "No available seats" },
        { status: 404 }
      );
    }
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}

/**
 * POST /api/seat
 */
export async function POST(req: NextRequest) {
  try {
    const { seat_number, bus_id } = await req.json();

    if (!seat_number || !bus_id) {
      return NextResponse.json(
        { message: "Invalid input: Payload field/s missing" },
        { status: 400 }
      );
    }

    const created = await addSeat(seat_number, bus_id);
    return NextResponse.json(
      { message: "Seat created successfully", result: created },
      { status: 201 }
    );
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}
