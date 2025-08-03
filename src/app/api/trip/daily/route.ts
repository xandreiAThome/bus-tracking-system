import { NextRequest, NextResponse } from "next/server";
import { getTripsForDay } from "@/features/trips/services/crud";
import { parseError } from "@/lib/utils";
import { blockUserRole, checkAuth } from "@/lib/auth-helpers";

export async function GET(req: NextRequest) {
  // Check authentication
  const { error: authError, session } = await checkAuth();
  if (authError) return authError;

  // Block users with "user" role
  const roleError = blockUserRole(session);
  if (roleError) return roleError;

  const dateParam = req.nextUrl.searchParams.get("date");
  // When no date is provided, use Manila local time for "today"
  const date = dateParam ? new Date(dateParam) : new Date();

  try {
    if (isNaN(date.getTime())) {
      return NextResponse.json({ error: "Invalid date" }, { status: 400 });
    }

    console.log("Querying trips for date:", date);

    const trips = await getTripsForDay(date);

    return NextResponse.json({ trips }, { status: 200 });
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}
