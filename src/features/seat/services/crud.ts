import { prisma } from "@/lib/prisma";

/**
 * Get all seats.
 */
export async function getAllSeats() {
  try {
    const seats = await prisma.seat.findMany();
    return seats.length > 0 ? seats : null;
  } catch (error) {
    console.error("Error fetching all seats:", error);
    throw error;
  }
}

/**
 * Get a single seat by ID.
 */
export async function getSeat(id: number) {
  try {
    const seat = await prisma.seat.findUnique({ where: { id } });
    return seat || null;
  } catch (error) {
    console.error(`Error fetching seat with ID ${id}:`, error);
    throw error;
  }
}

/**
 * Create a new seat.
 */
export async function addSeat(seat_number: string, bus_id: number) {
  try {
    // Fetch bus capacity
    const bus = await prisma.bus.findUnique({
      where: { id: bus_id },
      select: { capacity: true },
    });

    if (!bus) {
      // Bus doesn't exist
      throw new Error(`Bus with id ${bus_id} not found`);
    }

    // Count current seats for this bus
    const currentSeatCount = await prisma.seat.count({
      where: { bus_id },
    });

    // Check if capacity is reached
    if (currentSeatCount >= bus.capacity) {
      // Capacity full - don't add seat
      throw new Error(
        `Cannot add seat: bus with id ${bus_id} has reached its capacity of ${bus.capacity}`
      );
    }

    // Create the seat since capacity allows
    const created = await prisma.seat.create({
      data: {
        seat_number,
        bus_id,
      },
    });

    return created;
  } catch (error) {
    console.error("Error creating seat:", error);
    throw error;
  }
}

/**
 * Delete a seat by ID.
 */
export async function deleteSeat(id: number) {
  try {
    const deleted = await prisma.seat.delete({ where: { id } });
    return deleted;
  } catch (error: any) {
    if (error.code === "P2025") {
      // Not found
      return null;
    }
    console.error(`Error deleting seat with ID ${id}:`, error);
    throw error;
  }
}

/**
 * Get the number of seats for a specific bus.
 */
export async function getSeatCountByBus(bus_id: number) {
  try {
    const count = await prisma.seat.count({ where: { bus_id } });
    return { bus_id, seat_count: count };
  } catch (error) {
    console.error(`Error getting seat count for bus ${bus_id}:`, error);
    throw error;
  }
}

/**
 * Get all seats for a specific bus, ordered.
 */
export async function getSeatsByBus(bus_id: number, order: "asc" | "desc") {
  try {
    const seats = await prisma.seat.findMany({
      where: { bus_id },
      orderBy: { seat_number: order },
    });
    return { bus_id, seats };
  } catch (error) {
    console.error(`Error fetching seats for bus ${bus_id}:`, error);
    throw error;
  }
}

/**
 * Update a seat's properties.
 */
export async function updateSeat(
  id: number,
  {
    seat_number,
    bus_id,
    status,
  }: {
    seat_number?: string;
    bus_id?: number;
    status?: string;
  }
) {
  try {
    const updateData: Record<string, any> = {};
    if (seat_number !== undefined) updateData.seat_number = seat_number;
    if (bus_id !== undefined) updateData.bus_id = bus_id;
    if (status !== undefined) updateData.status = status;

    if (Object.keys(updateData).length === 0) {
      return null;
    }

    const updated = await prisma.seat.update({
      where: { id },
      data: updateData,
    });

    return updated;
  } catch (error: any) {
    if (error.code === "P2025") {
      return null;
    }
    console.error(`Error updating seat with ID ${id}:`, error);
    throw error;
  }
}
