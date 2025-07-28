import { prisma } from "@/lib/prisma";
import { catchDBError } from "@/lib/utils";

// GET /api/user - get all users
export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return Response.json({ users }, { status: 200 });
  } catch (err) {
    console.error("Prisma Error:", err);
    return catchDBError(err);
  }
}
