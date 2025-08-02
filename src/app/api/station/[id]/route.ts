import { validateIdParam, parseError } from "@/lib/utils";
import {
  getStation,
  deleteStation,
  editStation,
} from "@/features/station/services/crud";
import { NextRequest, NextResponse } from "next/server";
import { checkAuth, blockUserRole, checkAuthAndRole } from "@/lib/auth-helpers";

/**
 * GET /api/station/[id]
 */
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  // Check authentication
  const { error: authError, session } = await checkAuth();
  if (authError) return authError;

  // Block users with "user" role
  const roleError = blockUserRole(session);
  if (roleError) return roleError;

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
  const { error: authError } = await checkAuthAndRole(["admin"]);
  if (authError) return authError;

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

    const updated = await editStation(Number(id), { name });
    return NextResponse.json(
      { message: `Updated station with id ${id}`, result: updated },
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
  const { error: authError } = await checkAuthAndRole(["admin"]);
  if (authError) return authError;

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
