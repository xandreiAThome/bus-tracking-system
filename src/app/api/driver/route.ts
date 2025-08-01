import { getAllDrivers, addDriver } from "@/features/driver/services/crud";
import { parseError } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

/**
 * GET /api/driver
 *
 * Returns all drivers in the system.
 */
export async function GET() {
  try {
    const result = await getAllDrivers();
    if (!result) {
      return NextResponse.json(
        { message: "No drivers found" },
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
 * POST /api/driver
 *
 * Creates a new driver.
 */
export async function POST(req: NextRequest) {
  try {
    const { first_name, last_name, user_id } = await req.json();

    if (!first_name || !last_name || user_id == null) {
      return NextResponse.json(
        { message: "Invalid input: one or more fields are missing" },
        { status: 400 }
      );
    }

    const created = await addDriver(first_name, last_name, user_id);
    return NextResponse.json(
      { message: "Driver created successfully", result: created },
      { status: 201 }
    );
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}
