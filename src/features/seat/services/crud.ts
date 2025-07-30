import { prisma } from "@/lib/prisma";
import { catchDBError } from "@/lib/utils";

export async function getAllSeats() {
  try {
    const seats = await prisma.seat.findMany();
    if (!seats.length) {
      return Response.json({ message: "No available seats" }, { status: 404 });
    }
    return Response.json({ seats }, { status: 200 });
  } catch (err) {
    console.error("Prisma Error:", err);
    return catchDBError(err);
  }
}

export async function getSeat(id: number) {
  try {
    const seat = await prisma.seat.findUnique({ where: { id } });
    if (!seat) {
      return Response.json(
        { message: `Seat with id: ${id} not found` },
        { status: 404 }
      );
    }
    return Response.json({ seat }, { status: 200 });
  } catch (err) {
    console.error("Prisma Error:", err);
    return catchDBError(err);
  }
}

export async function addSeat(seat_number: string, bus_id: number) {
  try {
    const created = await prisma.seat.create({
      data: {
        seat_number,
        bus_id,
      },
    });
    return Response.json(
      { message: "Seat created successfully", created },
      { status: 201 }
    );
  } catch (err: any) {
    console.error("Prisma Error:", err);
    return catchDBError(err);
  }
}

export async function deleteSeat(id: number) {
  try {
    const deleted = await prisma.seat.delete({ where: { id } });
    return Response.json(
      { message: `Seat deleted successfully`, id: deleted.id },
      { status: 200 }
    );
  } catch (err: any) {
    if (err.code === "P2025") {
      return Response.json(
        { message: `Seat with id: ${id} not found` },
        { status: 404 }
      );
    }
    console.error("Prisma Error:", err);
    return catchDBError(err);
  }
}

export async function getSeatCountByBus(bus_id: number) {
  try {
    const seatCount = await prisma.seat.count({ where: { bus_id } });
    return Response.json(
      { bus_id, seat_count: `${seatCount}` },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("Prisma Error:", err);
    return catchDBError(err);
  }
}

export async function getSeatsByBus(bus_id: number, order: "asc" | "desc") {
  try {
    const seats = await prisma.seat.findMany({
      where: { bus_id },
      orderBy: { seat_number: order },
    });
    return Response.json({ bus_id, seats }, { status: 200 });
  } catch (err: any) {
    console.error("Prisma Error:", err);
    return catchDBError(err);
  }
}

/**
 * Updates a seat in the database
 *
 * @param {number} id - The ID of the seat to update
 * @param {object} updateData - The fields to update
 * @param {string} [updateData.seat_number] - The new seat number (optional)
 * @param {number} [updateData.bus_id] - The new bus ID (optional)
 * @param {string} [updateData.status] - The new status (optional)
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
      return Response.json(
        { message: "No valid fields to update" },
        { status: 400 }
      );
    }

    const updatedSeat = await prisma.seat.update({
      where: { id },
      data: updateData,
    });

    return Response.json(
      { message: "Seat updated successfully", seat: updatedSeat },
      { status: 200 }
    );
  } catch (err: any) {
    if (err.code === "P2025") {
      return Response.json(
        { message: `Seat with id ${id} not found` },
        { status: 404 }
      );
    }
    console.error("DB Error:", err);
    return catchDBError(err);
  }
}
