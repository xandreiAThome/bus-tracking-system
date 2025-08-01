import { validateIdParam, parseError } from "@/lib/utils";
import {
  getDriver,
  deleteDriver,
  editDriver,
} from "@/features/driver/services/crud";
import { NextResponse, NextRequest } from "next/server";

/**
 * GET /api/driver/[id]
 *
 * Fetches a single driver by ID.
 */
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (!validateIdParam(id)) {
    return NextResponse.json(
      { message: "Invalid [id] Parameter" },
      { status: 400 }
    );
  }

  try {
    const result = await getDriver(Number(id));
    if (!result) {
      return NextResponse.json(
        { message: `Cannot find driver with id ${id}` },
        { status: 404 }
      );
    }

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}

/**
 * DELETE /api/driver/[id]
 *
 * Removes a driver by ID.
 */
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (!validateIdParam(id)) {
    return NextResponse.json(
      { message: "Invalid [id] Parameter" },
      { status: 400 }
    );
  }

  try {
    const deleted = await deleteDriver(Number(id));
    return NextResponse.json(
      { message: `Deleted driver with id ${id}`, result: deleted },
      { status: 200 }
    );
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}

/**
 * PATCH /api/driver/[id]
 *
 * Updates an existing driver.
 */
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (!validateIdParam(id)) {
    return NextResponse.json(
      { message: "Invalid [id] Parameter" },
      { status: 400 }
    );
  }

  try {
    const body = await req.json();
    const { first_name, last_name, user_id } = body;

    if (
      first_name === undefined &&
      last_name === undefined &&
      user_id === undefined
    ) {
      return NextResponse.json(
        {
          message:
            "At least one field (first_name, last_name, user_id) must be provided",
        },
        { status: 400 }
      );
    }

    const updated = await editDriver(Number(id), {
      first_name,
      last_name,
      user_id,
    });
    return NextResponse.json(
      {
        message: `Successfully updated driver with id: ${id}`,
        result: updated,
      },
      { status: 200 }
    );
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}
