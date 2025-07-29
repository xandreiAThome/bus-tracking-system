import { prisma } from "@/lib/prisma";
import { catchDBError } from "@/lib/utils";
import { UserType } from "../types/types";

export async function deleteUser(id: number) {
  try {
    await prisma.user.delete({ where: { id } });
    return Response.json(
      { message: "User deleted successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Prisma Error:", err);
    return catchDBError(err);
  }
}

export async function updateUserRole(id: number, role: string) {
  try {
    const updated = await prisma.user.update({
      where: { id },
      data: { role: role as UserType["role"] }, // cast to enum
    });
    return Response.json(
      { message: "User updated successfully", updated },
      { status: 200 }
    );
  } catch (err) {
    console.error("Prisma Error:", err);
    return catchDBError(err);
  }
}

export async function getUser(id: number) {
  try {
    const user = await prisma.user.findUnique({ where: { id } });
    if (!user) {
      return Response.json({ message: "User not found" }, { status: 404 });
    }
    return Response.json({ user }, { status: 200 });
  } catch (err) {
    console.error("Prisma Error:", err);
    return catchDBError(err);
  }
}
