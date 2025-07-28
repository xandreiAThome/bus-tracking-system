import { prisma } from "@/lib/prisma";
import { catchDBError } from "@/lib/utils";

/**
 * Get a single cashier by ID
 */
export async function getCashier(id: number) {
  try {
    const cashier = await prisma.cashier.findUnique({ where: { id } });
    if (!cashier) {
      return Response.json({ message: "Cashier not found" }, { status: 404 });
    }
    return Response.json({ cashier }, { status: 200 });
  } catch (err) {
    console.error("Prisma Error:", err);
    return catchDBError(err);
  }
}

/**
 * Delete a cashier by ID
 */
export async function deleteCashier(id: number) {
  try {
    await prisma.cashier.delete({ where: { id } });
    return Response.json(
      { message: "Cashier deleted successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Prisma Error:", err);
    return catchDBError(err);
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
    return Response.json(
      { message: "Cashier updated successfully", updated },
      { status: 200 }
    );
  } catch (err) {
    console.error("Prisma Error:", err);
    return catchDBError(err);
  }
}

/**
 * Get all cashiers
 */
export async function getAllCashiers() {
  try {
    const cashiers = await prisma.cashier.findMany();
    if (!cashiers.length) {
      return Response.json({ message: "No cashiers found" }, { status: 404 });
    }
    return Response.json({ cashiers }, { status: 200 });
  } catch (err) {
    console.error("Prisma Error:", err);
    return catchDBError(err);
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
    return Response.json(
      { message: "Cashier created successfully", created },
      { status: 201 }
    );
  } catch (err) {
    console.error("Prisma Error:", err);
    return catchDBError(err);
  }
}
