import { NextRequest, NextResponse } from "next/server";
import { getTripsForMonth } from "@/features/trips/services/crud";

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  const month = parseInt(params.get("month") || "");
  const year = parseInt(params.get("year") || "");

  try {
    if (isNaN(month) || isNaN(year) || month < 1 || month > 12) {
      return NextResponse.json(
        { error: "Invalid month or year" },
        { status: 400 }
      );
    }

    const trips = await getTripsForMonth(month, year);
    return NextResponse.json({ trips });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.error("Error fetching trips:", err);
    const message = err.message || "Internal Server Error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
