import { NextRequest, NextResponse } from "next/server";
import { getTripsForDay } from "@/features/trips/services/crud";

export async function GET(req: NextRequest) {
  const dateParam = req.nextUrl.searchParams.get("date");
  const date = dateParam ? new Date(dateParam) : new Date();

  try {
    if (isNaN(date.getTime())) {
      return NextResponse.json({ error: "Invalid date" }, { status: 400 });
    }

    const trips = await getTripsForDay(date);
    return NextResponse.json({ trips });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.error("Error fetching trips:", err);
    const message = err.message || "Internal Server Error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
