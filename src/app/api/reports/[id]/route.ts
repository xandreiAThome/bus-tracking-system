import { NextRequest, NextResponse } from "next/server";
import { getTicketsByTrip } from "@/features/reports/services/reports.services";
import { validateIdParam } from "@/lib/utils";

export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const tripId = validateIdParam((await params).id);
  if (tripId instanceof Response) return tripId;

  const tickets = await getTicketsByTrip(tripId);
  return NextResponse.json({ tickets });
}
