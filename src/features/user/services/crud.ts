import { prisma } from "@/lib/prisma";
import { UserType } from "../types/types";

/**
 * Delete user by ID
 */
export async function deleteUser(id: number) {
  try {
    const deleted = await prisma.user.delete({
      where: { id },
    });
    if (!deleted) {
      throw new Error(`User with id ${id} not found`);
    }
  } catch (error) {
    throw error;
  }
}

/**
 * Update user's role
 */
export async function updateUserRole(id: number, role: string) {
  try {
    const updatedUser = await prisma.user.update({
      where: { id },
      data: { role: role as UserType["role"] },
    });
    return updatedUser;
  } catch (error) {
    throw error;
  }
}

/**
 * Get user by ID
 */
export async function getUser(id: number) {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    return user;
  } catch (error) {
    throw error;
  }
}

/**
 * Get all users
 */
export async function getAllUsers() {
  try {
    return await prisma.user.findMany();
  } catch (error) {
    throw error;
  }
}
