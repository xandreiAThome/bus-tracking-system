import { validateIdParam, parseError } from "@/lib/utils";
import { deleteSeat, getSeat, updateSeat } from "@features/seat/services/crud";
import { NextRequest, NextResponse } from "next/server";

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

  const numericId = Number(id);

  try {
    const seat = await getSeat(numericId);
    if (!seat) {
      return NextResponse.json(
        { message: `Seat with id ${id} not found` },
        { status: 404 }
      );
    }
    return NextResponse.json(seat, { status: 200 });
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (!validateIdParam(id)) {
    return NextResponse.json({ message: "Invalid seat ID" }, { status: 400 });
  }

  const numericId = Number(id);

  try {
    const deleted = await deleteSeat(numericId);
    if (!deleted) {
      return NextResponse.json(
        { message: `Seat with id ${id} not found` },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: `Deleted seat with id ${id}`, result: deleted },
      { status: 200 }
    );
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (!validateIdParam(id)) {
    return NextResponse.json({ message: "Invalid seat ID" }, { status: 400 });
  }

  const numericId = Number(id);

  try {
    const body = await req.json();
    const validFields = ["seat_number", "bus_id", "status"];

    if (!Object.keys(body).some(key => validFields.includes(key))) {
      return NextResponse.json(
        { message: "No valid fields to update" },
        { status: 400 }
      );
    }

    const updated = await updateSeat(numericId, body);
    if (!updated) {
      return NextResponse.json(
        { message: `Seat with id ${id} not found or no changes made` },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: `Seat with id ${id} updated successfully`, result: updated },
      { status: 200 }
    );
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}
