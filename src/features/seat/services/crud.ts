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
      return Response.json({ message: "seat not found" }, { status: 404 });
    }
    return Response.json({ seat }, { status: 200 });
  } catch (err) {
    console.error("Prisma Error:", err);
    return catchDBError(err);
  }
}

export async function addSeat(seat_number: string, bus_id: number) {
  try {
    await prisma.seat.create({
      data: {
        seat_number,
        bus_id,
      },
    });
    return Response.json({ message: "Seat created successfully" }, { status: 201 });
  } catch (err: any) {
    console.error("Prisma Error:", err);
    return catchDBError(err);
  }
}

export async function deleteSeat(id: number) {
  try {
    const deleted = await prisma.seat.delete({ where: { id } });
    return Response.json(
      { message: `Seat with id ${deleted.id} deleted successfully` },
      { status: 200 }
    );
  } catch (err: any) {
    if (err.code === "P2025") {
      return Response.json(
        { message: `Seat with id ${id} not found` },
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
    return Response.json({ bus_id, seatCount }, { status: 200 });
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
