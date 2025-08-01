import { validateIdParam, parseError } from "@/lib/utils";
import {
  getStation,
  deleteStation,
  editStation,
} from "@/features/station/services/crud";
import { NextRequest, NextResponse } from "next/server";

/**
 * GET /api/station/[id]
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
    const station = await getStation(Number(id));
    if (!station) {
      return NextResponse.json(
        { message: `Cannot find station with id ${id}` },
        { status: 404 }
      );
    }
    return NextResponse.json(station, { status: 200 });
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}

/**
 * PATCH /api/station/[id]
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
    const { name } = body;

    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { message: "Invalid station name" },
        { status: 400 }
      );
    }

    const station = await editStation(Number(id), { name });
    return NextResponse.json(
      {
        message: `Successfully updated station with id: ${id}`,
        result: station,
      },
      { status: 200 }
    );
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}

/**
 * DELETE /api/station/[id]
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
    const deleted = await deleteStation(Number(id));
    return NextResponse.json(
      { message: `Deleted station with id ${id}`, result: deleted },
      { status: 200 }
    );
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}
