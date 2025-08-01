import { NextRequest, NextResponse } from "next/server";
import { validateIdParam, parseError } from "@/lib/utils";
import {
  deleteUser,
  updateUserRole,
  getUser,
} from "@/features/user/services/crud";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const idStr = params.id;
  if (!validateIdParam(idStr)) {
    return NextResponse.json(
      { message: "Invalid [id] parameter" },
      { status: 400 }
    );
  }
  const id = Number(idStr);

  try {
    const user = await getUser(id);
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const idStr = params.id;
  if (!validateIdParam(idStr)) {
    return NextResponse.json(
      { message: "Invalid [id] parameter" },
      { status: 400 }
    );
  }
  const id = Number(idStr);

  try {
    const result = await deleteUser(id);
    return NextResponse.json(
      { message: `User with id ${id} deleted successfully`, result },
      { status: 200 }
    );
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const idStr = params.id;
  if (!validateIdParam(idStr)) {
    return NextResponse.json(
      { message: "Invalid [id] parameter" },
      { status: 400 }
    );
  }
  const id = Number(idStr);

  try {
    const body = await req.json();
    const { role } = body;

    if (!role) {
      return NextResponse.json(
        { message: "No fields to update" },
        { status: 400 }
      );
    }

    const updatedUser = await updateUserRole(id, role);
    return NextResponse.json(
      { message: "User updated successfully", updatedUser },
      { status: 200 }
    );
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}
