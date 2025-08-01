import { prisma } from "@/lib/prisma";
/**
 * Get a single cashier by ID
 */
export async function getCashier(id: number) {
  const cashier = await prisma.cashier.findUnique({ where: { id } });

  return cashier;
}

/**
 * Delete a cashier by ID
 */
export async function deleteCashier(id: number) {
  const deleted = await prisma.cashier.delete({ where: { id } });
  return deleted;
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
  const updated = await prisma.cashier.update({
    where: { id },
    data,
  });
  return updated;
}

/**
 * Get all cashiers
 */
export async function getAllCashiers() {
  const cashiers = await prisma.cashier.findMany();
  if (!cashiers.length) {
    return null;
  }
  return cashiers;
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
  const created = await prisma.cashier.create({
    data: {
      first_name,
      last_name,
      user_id,
      station_id,
    },
  });
  return created;
}
