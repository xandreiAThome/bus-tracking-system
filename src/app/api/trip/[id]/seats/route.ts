import { blockUserRole, checkAuth } from "@/lib/auth-helpers";
import { parseError, validateIdParam } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/**
 * GET /api/trip/[id]/seats
 *
 * Get all seats for a specific trip's bus.
 */
export async function GET(
  _: NextRequest,
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
    return NextResponse.json({ message: "Invalid trip ID" }, { status: 400 });
  }

  const numericId = Number(id);

  try {
    // First get the trip to find the bus_id
    const trip = await prisma.trip.findUnique({
      where: { id: numericId },
      select: { bus_id: true },
    });

    if (!trip) {
      return NextResponse.json(
        { message: `Trip with id ${id} not found` },
        { status: 404 }
      );
    }

    // Get all seats for this trip's bus
    const seats = await prisma.seat.findMany({
      where: { bus_id: trip.bus_id },
      orderBy: { seat_number: "asc" },
    });

    return NextResponse.json({ seats }, { status: 200 });
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}
