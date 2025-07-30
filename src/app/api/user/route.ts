import { NextResponse, NextRequest } from "next/server";
import { getAllUsers } from "@/features/user/services/crud";
import { parseError } from "@/lib/utils";

export async function GET(req: NextRequest) {
  try {
    const users = await getAllUsers();
    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    const { status, message } = parseError(error);
    return NextResponse.json({ message }, { status });
  }
}
