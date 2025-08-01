import { prisma } from "@/lib/prisma";
import { UserType } from "../types/types";

/**
 * Delete user by ID
 */
export async function deleteUser(id: number) {
  const deleted = await prisma.user.delete({
    where: { id },
  });
  return deleted;
}

/**
 * Update user's role
 */
export async function updateUserRole(id: number, role: string) {
  const updatedUser = await prisma.user.update({
    where: { id },
    data: { role: role as UserType["role"] },
  });
  return updatedUser;
}

/**
 * Get user by ID
 */
export async function getUser(id: number) {
  const user = await prisma.user.findUnique({
    where: { id },
  });
  return user;
}

/**
 * Get all users
 */
export async function getAllUsers() {
  return await prisma.user.findMany();
}
