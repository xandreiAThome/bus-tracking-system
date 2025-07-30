import { prisma } from "@/lib/prisma";

/**
 * Get all drivers.
 */
export async function getAllDrivers() {
  try {
    const drivers = await prisma.driver.findMany();
    return drivers.length > 0 ? drivers : null;
  } catch (error) {
    console.error("Error fetching all drivers:", error);
    throw error;
  }
}

/**
 * Get a driver by ID.
 */
export async function getDriver(id: number) {
  try {
    const driver = await prisma.driver.findUnique({
      where: { id },
    });
    return driver || null;
  } catch (error) {
    console.error(`Error fetching driver with ID ${id}:`, error);
    throw error;
  }
}

/**
 * Add a new driver.
 */
export async function addDriver(
  first_name: string,
  last_name: string,
  user_id: number
) {
  try {
    const created = await prisma.driver.create({
      data: {
        first_name,
        last_name,
        user_id,
      },
    });
    return created;
  } catch (error) {
    console.error("Error creating driver:", error);
    throw error;
  }
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
  try {
    const updated = await prisma.driver.update({
      where: { id },
      data: fields,
    });
    return updated;
  } catch (error) {
    console.error(`Error updating driver with ID ${id}:`, error);
    throw error;
  }
}

/**
 * Delete a driver by ID.
 */
export async function deleteDriver(id: number) {
  try {
    const deleted = await prisma.driver.delete({
      where: { id },
    });
    return deleted;
  } catch (error) {
    console.error(`Error deleting driver with ID ${id}:`, error);
    throw error;
  }
}

/**
 * Get a driver by associated user ID.
 */
export async function getDriverByUserId(userId: number) {
  try {
    const driver = await prisma.driver.findFirst({
      where: { user_id: userId },
      include: {
        user: true, // include user info if needed
      },
    });
    return driver || null;
  } catch (error) {
    console.error(`Error fetching driver with user ID ${userId}:`, error);
    throw error;
  }
}
