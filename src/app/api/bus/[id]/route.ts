// bus-tracking-system-main/src/app/api/bus/[id]/route.ts

import { validateIdParam, parseError } from "@/lib/utils";
import { getBusById, deleteBus, editBus } from "@/features/bus/services/crud";
import { NextRequest, NextResponse } from "next/server";

/**
 * GET /api/bus/[id]
 *
 * Fetch a single bus by its URL‐segment ID.
 */
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (!validateIdParam(id)) {
    return NextResponse.json(
      { message: "Invalid [id] Parameter" },
      { status: 400 }
    );
  }
  try {
    const result = await getBusById(Number(id));
    if (result === null) {
      return NextResponse.json(
        { message: `Cannot find bus with id ${id}` },
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
 * DELETE /api/bus/[id]
 *
 * Remove a bus by its URL‐segment ID.
 */
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (!validateIdParam(id)) {
    return NextResponse.json(
      { message: "Invalid [id] Parameter" },
      { status: 400 }
    );
  }
  try {
    const result = await deleteBus(Number(id));
    return NextResponse.json(
      { message: `Deleted bus with id ${id} and its associated seats`, result },
      { status: 200 }
    );
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}

/**
 * PATCH /api/bus/[id]
 *
 * Update an existing bus.
 * Expected JSON body:
 * {
 *   plate_number: string,
 *   station_id: number,
 *   capacity: number,
 * }
 */
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (!validateIdParam(id)) {
    return NextResponse.json(
      { message: "Invalid [id] Parameter" },
      { status: 400 }
    );
  }
  try {
    const body = await req.json();
    const { plate_number, station_id, capacity } = body;
    // Only allow update if at least one field is present
    if (
      plate_number === undefined &&
      station_id === undefined &&
      capacity === undefined
    ) {
      return NextResponse.json(
        { message: "At least one field (plate_number, station_id, capacity) must be provided" },
        { status: 400 }
      );
    }

    const updated = await editBus(Number(id), {
      plate_number,
      station_id,
      capacity,
    });
    return NextResponse.json(
      { message: `Updated bus with id ${id}`, result: updated },
      { status: 200 }
    );
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}
