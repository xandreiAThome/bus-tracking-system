import { NextRequest, NextResponse } from "next/server";
import { getTripsForMonth } from "@/features/trips/services/crud";
import { parseError } from "@/lib/utils";

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
    return NextResponse.json({ trips }, { status: 200 });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}
