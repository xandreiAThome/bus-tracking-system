import { validateIdParam, parseError } from "@/lib/utils";
import { deleteTrip, editTrip, getTrip } from "@/features/trips/services/crud";
import { NextRequest, NextResponse } from "next/server";

/**
 * GET /api/trip/[id]
 */
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (!validateIdParam(id)) {
    return NextResponse.json({ message: "Invalid [id] Parameter" }, { status: 400 });
  }

  try {
    const trip = await getTrip(Number(id));
    if (!trip) {
      return NextResponse.json({ message: "Trip not found" }, { status: 404 });
    }
    return NextResponse.json(trip, { status: 200 });
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}

/**
 * DELETE /api/trip/[id]
 */
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (!validateIdParam(id)) {
    return NextResponse.json({ message: "Invalid [id] Parameter" }, { status: 400 });
  }

  try {
    const result = await deleteTrip(Number(id));
    return NextResponse.json({ message: `Trip with id ${id} deleted successfully.`, result }, { status: 200 });
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}

/**
 * PATCH /api/trip/[id]
 */
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (!validateIdParam(id)) {
    return NextResponse.json({ message: "Invalid [id] Parameter" }, { status: 400 });
  }

  try {
    const body = await req.json();
    const { start_time, end_time, bus_id, src_station_id, dest_station_id, driver_id } = body;

    if (
      start_time === undefined &&
      end_time === undefined &&
      bus_id === undefined &&
      src_station_id === undefined &&
      dest_station_id === undefined &&
      driver_id === undefined
    ) {
      return NextResponse.json(
        { message: "At least one field must be provided" },
        { status: 400 }
      );
    }

    const result = await editTrip(
      Number(id),
      start_time,
      end_time,
      bus_id,
      src_station_id,
      dest_station_id,
      driver_id,
    );

    return NextResponse.json(
      { message: `Trip with id ${id} updated successfully.`, result },
      { status: 200 }
    );
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}
