import { prisma } from "@/lib/prisma";
/**
 * Get a single cashier by ID
 */
export async function getCashier(id: number) {
  try {
    const cashier = await prisma.cashier.findUnique({ where: { id } });
    if (!cashier) {
      return null
    }
    return cashier;
  } catch (error) {
    throw error
  }
}

/**
 * Delete a cashier by ID
 */
export async function deleteCashier(id: number) {
  try {
    const deleted = await prisma.cashier.delete({ where: { id } });
    return deleted
  } catch (error) {
    throw error
  }
}

/**
 * Edit a cashier by ID (partial update)
 */
export async function editCashier(
  id: number,
  data: {
    first_name?: string;
    last_name?: string;
    user_id?: number;
    station_id?: number;
  }
) {
  try {
    const updated = await prisma.cashier.update({
      where: { id },
      data,
    });
    return updated
  } catch (error) {
    throw error
  }
}

/**
 * Get all cashiers
 */
export async function getAllCashiers() {
  try {
    const cashiers = await prisma.cashier.findMany();
    if (!cashiers.length) {
      return null
    }
    return cashiers
  } catch (error) {
    throw error
  }
}

/**
 * Add a new cashier
 */
export async function addCashier(
  first_name: string,
  last_name: string,
  user_id: number,
  station_id: number
) {
  try {
    const created = await prisma.cashier.create({
      data: {
        first_name,
        last_name,
        user_id,
        station_id,
      },
    });
    return created
  } catch (error) {
    throw error
  }
}
