import { NextRequest, NextResponse } from "next/server";
import { validateIdParam, parseError } from "@/lib/utils";
import {
  deleteUser,
  updateUserRole,
  getUser,
} from "@/features/user/services/crud";
import { checkAuthAndRole } from "@/lib/auth-helpers";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { error: authError } = await checkAuthAndRole(["admin"]);
  if (authError) return authError;

  const { id } = await params;
  if (!validateIdParam(id)) {
    return NextResponse.json(
      { message: "Invalid [id] parameter" },
      { status: 400 }
    );
  }
  const userId = Number(id);

  try {
    const user = await getUser(userId);
    if (!user) {
      return NextResponse.json(
        { message: `Cannot find user with id ${userId}` },
        { status: 404 }
      );
    }
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { error: authError } = await checkAuthAndRole(["admin"]);
  if (authError) return authError;

  const { id } = await params;
  if (!validateIdParam(id)) {
    return NextResponse.json(
      { message: "Invalid [id] parameter" },
      { status: 400 }
    );
  }
  const userId = Number(id);

  try {
    const deleted = await deleteUser(userId);
    return NextResponse.json(
      {
        message: `User with id ${userId} deleted successfully`,
        result: deleted,
      },
      { status: 200 }
    );
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { error: authError } = await checkAuthAndRole(["admin"]);
  if (authError) return authError;

  const { id } = await params;
  if (!validateIdParam(id)) {
    return NextResponse.json(
      { message: "Invalid [id] parameter" },
      { status: 400 }
    );
  }
  const userId = Number(id);

  try {
    const body = await req.json();
    const { role } = body;

    if (!role) {
      return NextResponse.json(
        { message: "No fields to update" },
        { status: 400 }
      );
    }

    const updated = await updateUserRole(userId, role);
    return NextResponse.json(
      { message: `Updated cashier with id ${userId}`, result: updated },
      { status: 200 }
    );
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}
