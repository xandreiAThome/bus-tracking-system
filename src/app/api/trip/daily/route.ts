import { NextRequest, NextResponse } from "next/server";
import { getTripsForDay } from "@/features/trips/services/crud";
import { parseError } from "@/lib/utils";

export async function GET(req: NextRequest) {
  const dateParam = req.nextUrl.searchParams.get("date");
  const date = dateParam ? new Date(dateParam) : new Date();

  try {
    if (isNaN(date.getTime())) {
      return NextResponse.json({ error: "Invalid date" }, { status: 400 });
    }

    console.log(date);

    const trips = await getTripsForDay(date);
    if (trips === null) {
      return NextResponse.json(
        { message: "Cannot find trips" },
        { status: 404 }
      );
    }
    return NextResponse.json({ trips });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}
