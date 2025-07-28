import { NextRequest, NextResponse } from "next/server";
import { getTicketsByTrip } from "@/features/reports/services/reports.services";

export async function GET(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  const tripId = parseInt(params.id);
  if (isNaN(tripId))
    return NextResponse.json({ error: "Invalid trip ID" }, { status: 400 });

  const tickets = await getTicketsByTrip(tripId);
  return NextResponse.json({ tickets });
}
