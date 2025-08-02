import { checkAuth, blockUserRole } from "@/lib/auth-helpers";
import { validateIdParam, validateSortOrder, parseError } from "@/lib/utils";
import { getSeatsByBus } from "@features/seat/services/crud";
import { NextRequest, NextResponse } from "next/server";
/**
 * GET /api/bus/[id]/seats
 *
 * Gets the seats associated with a bus based on the dynamic `id` parameter.
 * If no sortOrder parameter is given, or if sortOrder is malformed, will default to `asc`
 *
 * Example request: GET /api/bus/123/seats?sortOrder=desc
 *
 * Route params:
 * - id (string): The bus ID passed as part of the URL path (e.g., `/api/bus/123/seats`)
 *
 * Query params:
 * - sortOrder (string, optional): The sort order for seat numbers. Accepted values are `"asc"` or `"desc"`. Defaults to `"asc"`.
 *
 * @returns
 * 200 OK — JSON response containing an array of seats sorted according to the specified order.:
 * {
 *   "bus_id": number,
 *   "seats": [
 *     {
 *       "id": number,
 *       "seat_number": string,
 *       "bus_id": number
 *     },
 *     ...
 *   ]
 * }
 *
 * @returns — 404 Not Found — If no seats exist.
 * @returns — 500 Internal Server Error — For unexpected database or server errors.
 */
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  // Check authentication
  const { error: authError, session } = await checkAuth();
  if (authError) return authError;

  // Block users with "user" role
  const roleError = blockUserRole(session);
  if (roleError) return roleError;

  const { id } = await params;
  const searchParams = req.nextUrl.searchParams;
  const rawSortOrder = searchParams.get("sortOrder");
  const validatedSortOrder = validateSortOrder(rawSortOrder);

  if (!validateIdParam(id)) {
    return NextResponse.json(
      { message: "Invalid [id] Parameter" },
      { status: 400 }
    );
  }
  try {
    const result = await getSeatsByBus(Number(id), validatedSortOrder);
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}
