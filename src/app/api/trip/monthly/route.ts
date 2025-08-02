import { NextRequest, NextResponse } from "next/server";
import { getTripsForMonth } from "@/features/trips/services/crud";
import { parseError } from "@/lib/utils";
import { blockUserRole, checkAuth } from "@/lib/auth-helpers";

export async function GET(req: NextRequest) {
  // Check authentication
  const { error: authError, session } = await checkAuth();
  if (authError) return authError;

  // Block users with "user" role
  const roleError = blockUserRole(session);
  if (roleError) return roleError;

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
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}
