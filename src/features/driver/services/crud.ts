import { prisma } from "@/lib/prisma";

/**
 * Get all drivers.
 */
export async function getAllDrivers() {
  const drivers = await prisma.driver.findMany();
  return drivers.length > 0 ? drivers : null;
}

/**
 * Get a driver by ID.
 */
export async function getDriver(id: number) {
  const driver = await prisma.driver.findUnique({
    where: { id },
  });
  return driver;
}

/**
 * Add a new driver.
 */
export async function addDriver(
  first_name: string,
  last_name: string,
  user_id: number
) {
  const created = await prisma.driver.create({
    data: {
      first_name,
      last_name,
      user_id,
    },
  });
  return created;
}

/**
 * Update an existing driver.
 */
export async function editDriver(
  id: number,
  fields: {
    first_name?: string;
    last_name?: string;
    user_id?: number;
  }
) {
  const updated = await prisma.driver.update({
    where: { id },
    data: fields,
  });
  return updated;
}

/**
 * Delete a driver by ID.
 */
export async function deleteDriver(id: number) {
  const deleted = await prisma.driver.delete({
    where: { id },
  });
  return deleted;
}

/**
 * Get a driver by associated user ID.
 */
export async function getDriverByUserId(userId: number) {
  const driver = await prisma.driver.findFirst({
    where: { user_id: userId },
    include: {
      user: true, // include user info if needed
    },
  });
  return driver || null;
}
