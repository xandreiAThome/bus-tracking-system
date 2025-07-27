import { prisma } from "@/lib/prisma";
import { catchDBError } from "@/lib/utils";

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
    return catchDBError(err);
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
      return Response.json(
        { message: `Trip with id: ${id} not found` },
        { status: 404 }
      );
    }

    return Response.json({ trip }, { status: 200 });
  } catch (err) {
    console.error("DB Error:", err);
    return catchDBError(err);
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
  dest_station: number,
  driver_id: number
) {
  try {
    const created = await prisma.trip.create({
      data: {
        start_time: start_time ? new Date(start_time) : null,
        end_time: end_time ? new Date(end_time) : null,
        bus: { connect: { id: bus_id } },
        driver: { connect: { id: driver_id } },
        station_trip_dest_station_idTostation: {
          connect: { id: dest_station },
        },
        station_trip_src_station_idTostation: { connect: { id: src_station } },
        // status: ... if you want to set it
      },
    });

    return Response.json(
      { message: "Trip created successfully", created },
      { status: 201 }
    );
  } catch (err: any) {
    console.error("DB Error:", err);
    return catchDBError(err);
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
      { message: `Trip deleted successfully`, id: deleted.id },
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
    return catchDBError(err);
  }
}

/**
 * Updates a trip by ID with provided fields
 */
export async function editTrip(
  id: number,
  data: {
    start_time?: string;
    end_time?: string;
    bus_id?: number;
    src_station?: number;
    dest_station?: number;
    driver_id?: number;
  }
) {
  try {
    const updateData: any = {};
    
    if (data.start_time !== undefined) {
      updateData.start_time = data.start_time ? new Date(data.start_time) : null;
    }
    if (data.end_time !== undefined) {
      updateData.end_time = data.end_time ? new Date(data.end_time) : null;
    }
    if (data.bus_id !== undefined) {
      updateData.bus = { connect: { id: data.bus_id } };
    }
    if (data.driver_id !== undefined) {
      updateData.driver = { connect: { id: data.driver_id } };
    }
    if (data.src_station !== undefined) {
      updateData.station_trip_src_station_idTostation = { connect: { id: data.src_station } };
    }
    if (data.dest_station !== undefined) {
      updateData.station_trip_dest_station_idTostation = { connect: { id: data.dest_station } };
    }

    const updated = await prisma.trip.update({
      where: { id },
      data: updateData,
    });

    return Response.json(
      { message: "Trip updated successfully", updated },
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
    return catchDBError(err);
  }
}