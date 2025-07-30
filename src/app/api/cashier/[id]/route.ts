import { validateIdParam, parseError } from "@/lib/utils";
import {
  getCashier,
  deleteCashier,
  editCashier,
} from "@/features/cashier/services/crud";
import { NextResponse, NextRequest } from "next/server"

/**
 * GET /api/cashier/[id]
 *
 * Fetches a single cashier by ID.
 */
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (!validateIdParam(id)) {
    return NextResponse.json({ message: "Invalid [id] Parameter"}, { status: 400 })
  }
  try {
    const result = await getCashier(Number(id));
    if (result === null) {
      return NextResponse.json({ message: "Cannot find cashier" }, { status: 404 });
    }
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({message}, {status});
  }
}

/**
 * DELETE /api/cashier/[id]
 *
 * Removes a cashier by ID.
 */
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (!validateIdParam(id)) {
    return NextResponse.json({ message: "Invalid [id] Parameter"}, { status: 400 })
  }
  try {
    const result = await deleteCashier(Number(id));
    if (result === null) {
      return NextResponse.json({ message: "Cannot find cashier" }, { status: 404 });
    }
    return NextResponse.json({ message: `Deleted cashier with id ${id}`, result }, { status: 200 });
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({message}, {status});
  }
}

/**
 * PATCH /api/cashier/[id]
 *
 * Updates an existing cashier.
 * Expected JSON body:
 * {
 *   first_name: string,
 *   last_name: string,
 *   user_id: number,
 *   station_id: number
 * }
 */
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  
  if (!validateIdParam(id)) {
    return NextResponse.json({ message: "Invalid [id] Parameter"}, { status: 400 });
  }
  try {
    const body = await req.json();
    const { first_name, last_name, user_id, station_id } = body;

    if (!first_name && !last_name && !user_id && !station_id) {
      return NextResponse.json(
        { message: "At least one field (first_name, last_name, user_id, station_id) must be provided" },
        { status: 400 }
      );
    }
    const result = await editCashier(Number(id), body);
    return NextResponse.json({ message: `Successfully updated cashier with id: ${id}`, result }, {status: 200})
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({message}, {status});
  }
}

