import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * Gets all trips
 */
export async function getAllTrips() {
  try {
    const trips = await prisma.trip.findMany();
    if (trips.length === 0) {
      return Response.json({ message: "No available trips" }, { status: 404 });
    }
    return Response.json({ trips }, { status: 200 });
  } catch (err) {
    console.error("DB Error:", err);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

/**
 * Gets a specific trip by ID
 */
export async function getTrip(id: number) {
  try {
    const trip = await prisma.trip.findUnique({
      where: { id },
    });

    if (!trip) {
      return Response.json({ message: "Trip not found" }, { status: 404 });
    }

    return Response.json({ trip }, { status: 200 });
  } catch (err) {
    console.error("DB Error:", err);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

/**
 * Adds a new trip
 */
export async function addTrip(
  start_time: string,
  end_time: string,
  bus_id: number,
  src_station: number,
  dest_station: number
) {
  try {
    const newTrip = await prisma.trip.create({
      data: {
        start_time: new Date(start_time),
        end_time: new Date(end_time),
        bus_id,
        src_station_id: src_station,
        dest_station_id: dest_station,
      },
    });

    return Response.json(
      { message: "Trip created successfully", trip: newTrip },
      { status: 201 }
    );
  } catch (err: any) {
    console.error("DB Error:", err);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

/**
 * Deletes a trip by ID
 */
export async function deleteTrip(id: number) {
  try {
    const deleted = await prisma.trip.delete({
      where: { id },
    });

    return Response.json(
      { message: `Trip with id ${id} deleted successfully`, trip: deleted },
      { status: 200 }
    );
  } catch (err: any) {
    if (err.code === "P2025") {
      // Prisma "Record not found" error
      return Response.json(
        { message: `Trip with id ${id} not found` },
        { status: 404 }
      );
    }

    console.error("DB Error:", err);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
