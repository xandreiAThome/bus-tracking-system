import { NextResponse, NextRequest } from "next/server"
import { getTicketsByTrip } from "@/features/ticket/services/crud"

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }>}
) {
  try {
    const { id } = await params;

    const idNum = Number(id)
    if (!Number.isInteger(idNum) || idNum <= 0) {
      return NextResponse.json({ message: "Invalid [id] Parameter"}, { status: 400 })
    }
    const tickets = await getTicketsByTrip(idNum);
    if (!tickets) {
      return NextResponse.json({ message: "No tickets found" }, { status: 404 });
    }
    return NextResponse.json({ tickets }, { status: 200 });
  } catch (error) {
    return NextResponse.json({message: "Internal server error"}, {status: 500});
  }
}