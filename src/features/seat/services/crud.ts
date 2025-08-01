import { prisma } from "@/lib/prisma";

/**
 * Get all seats.
 */
export async function getAllSeats() {
  const seats = await prisma.seat.findMany();
  return seats.length > 0 ? seats : null;
}

/**
 * Get a single seat by ID.
 */
export async function getSeat(id: number) {
  const seat = await prisma.seat.findUnique({ where: { id } });

  return seat;
}

/**
 * Create a new seat.
 */
export async function addSeat(seat_number: string, bus_id: number) {
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
}

/**
 * Delete a seat by ID.
 */
export async function deleteSeat(id: number) {
  const deleted = await prisma.seat.delete({ where: { id } });
  return deleted;
}

/**
 * Get the number of seats for a specific bus.
 */
export async function getSeatCountByBus(bus_id: number) {
  const count = await prisma.seat.count({ where: { bus_id } });
  return { bus_id, seat_count: count };
}

/**
 * Get all seats for a specific bus, ordered.
 */
export async function getSeatsByBus(bus_id: number, order: "asc" | "desc") {
  const seats = await prisma.seat.findMany({
    where: { bus_id },
    orderBy: { seat_number: order },
  });
  return { bus_id, seats };
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
}
