import { getAllStations, addStation } from "@/features/station/services/crud";
import { parseError } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

/**
 * GET /api/station
 *
 * Retrieves all stations from the database.
 */
export async function GET() {
  try {
    const stations = await getAllStations();
    if (!stations || stations.length === 0) {
      return NextResponse.json(
        { message: "No stations found" },
        { status: 404 }
      );
    }
    return NextResponse.json(stations, { status: 200 });
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}

/**
 * POST /api/station
 *
 * Creates a new station.
 */
export async function POST(req: NextRequest) {
  try {
    const { name } = await req.json();

    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { message: "Invalid or missing 'name' field" },
        { status: 400 }
      );
    }

    const created = await addStation(name);
    return NextResponse.json(
      { message: "Station created successfully", result: created },
      { status: 201 }
    );
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}
