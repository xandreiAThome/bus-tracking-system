import { prisma } from "@/lib/prisma";
import { catchDBError } from "@/lib/utils";
import { AggregatedTripType } from "../types/types";

/**
 * Gets all trips
 * Fields Are Aggregated
 */
export async function getAllTrips() {
  try {
    const trips = await prisma.trip.findMany({
      include: {
        bus: {
          include: {
            station: true,
          },
        },
        driver: true,
        station_trip_dest_station_idTostation: true,
        station_trip_src_station_idTostation: true,
      },
    });
    if (trips.length === 0) {
      return Response.json({ message: "No available trips" }, { status: 404 });
    }
    const mappedTrips: AggregatedTripType[] = trips.map(trip => ({
      id: trip.id,
      start_time: trip.start_time,
      end_time: trip.end_time,
      status: trip.status,
      dest_station: trip.station_trip_dest_station_idTostation,
      src_station: trip.station_trip_src_station_idTostation,
      bus: trip.bus,
      driver: trip.driver,
    }));
    return Response.json({ mappedTrips }, { status: 200 });
  } catch (err) {
    console.error("DB Error:", err);
    return catchDBError(err);
  }
}

/**
 * Gets a specific trip by ID
 */
export async function getTrip(id: number) {
  const trip = await prisma.trip.findUnique({
    where: { id },
    include: {
      bus: {
        include: {
          station: true,
        },
      },
      driver: true,
      station_trip_dest_station_idTostation: true,
      station_trip_src_station_idTostation: true,
    },
  });

  if (!trip) {
    return Response.json(
      { message: `Trip with id: ${id} not found` },
      { status: 404 }
    );
  }
  const mappedTrips: AggregatedTripType = {
    id: trip.id,
    start_time: trip.start_time,
    end_time: trip.end_time,
    status: trip.status,
    dest_station: trip.station_trip_dest_station_idTostation,
    src_station: trip.station_trip_src_station_idTostation,
    bus: trip.bus,
    driver: trip.driver,
  };
  return mappedTrips;
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

export const getTripsForDay = async (date: Date) => {
  const start = new Date(date.setHours(0, 0, 0, 0));
  const end = new Date(date.setHours(24, 0, 0, 0));

  const trips = await prisma.trip.findMany({
    where: {
      start_time: {
        gte: start,
        lt: end,
      },
    },
    include: {
      bus: {
        include: {
          station: true,
        },
      },
      driver: true,
      station_trip_dest_station_idTostation: true,
      station_trip_src_station_idTostation: true,
    },
  });

  if (trips.length === 0) {
    return Response.json({ message: "No available trips" }, { status: 404 });
  }
  const mappedTrips: AggregatedTripType[] = trips.map(trip => ({
    id: trip.id,
    start_time: trip.start_time,
    end_time: trip.end_time,
    status: trip.status,
    dest_station: trip.station_trip_dest_station_idTostation,
    src_station: trip.station_trip_src_station_idTostation,
    bus: trip.bus,
    driver: trip.driver,
  }));
  return mappedTrips;
};

export const getTripsForMonth = async (month: number, year: number) => {
  const start = new Date(year, month - 1, 1);
  const end = new Date(year, month, 1);

  const trips = await prisma.trip.findMany({
    where: {
      start_time: {
        gte: start,
        lt: end,
      },
    },
    include: {
      bus: {
        include: {
          station: true,
        },
      },
      driver: true,
      station_trip_dest_station_idTostation: true,
      station_trip_src_station_idTostation: true,
    },
  });

  if (trips.length === 0) {
    return Response.json({ message: "No available trips" }, { status: 404 });
  }
  const mappedTrips: AggregatedTripType[] = trips.map(trip => ({
    id: trip.id,
    start_time: trip.start_time,
    end_time: trip.end_time,
    status: trip.status,
    dest_station: trip.station_trip_dest_station_idTostation,
    src_station: trip.station_trip_src_station_idTostation,
    bus: trip.bus,
    driver: trip.driver,
  }));
  return mappedTrips;
};

/**
 * Updates a trip by ID with provided fields
 */
export async function editTrip(
  id: number,
  start_time?: string,
  end_time?: string,
  bus_id?: number,
  src_station_id?: number,
  dest_station_id?: number,
  driver_id?: number,
  status?: string | null
) {
  try {
    const updateData: any = {};

    // Direct assignment since frontend handles conversions
    if (start_time !== undefined) updateData.start_time = start_time;
    if (end_time !== undefined) updateData.end_time = end_time;
    if (bus_id !== undefined) updateData.bus = { connect: { id: bus_id } };
    if (driver_id !== undefined)
      updateData.driver = { connect: { id: driver_id } };
    if (src_station_id !== undefined) {
      updateData.station_trip_src_station_idTostation = {
        connect: { id: src_station_id },
      };
    }
    if (dest_station_id !== undefined) {
      updateData.station_trip_dest_station_idTostation = {
        connect: { id: dest_station_id },
      };
    }
    if (status !== undefined) updateData.status = status;

    const updated = await prisma.trip.update({
      where: { id },
      data: updateData,
      include: {
        bus: true,
        driver: true,
        station_trip_src_station_idTostation: true,
        station_trip_dest_station_idTostation: true,
      },
    });

    return Response.json(
      {
        message: "Trip updated successfully",
        trip: {
          id: updated.id,
          start_time: updated.start_time,
          end_time: updated.end_time,
          bus_id: updated.bus?.id,
          driver_id: updated.driver?.id,
          src_station_id: updated.station_trip_src_station_idTostation?.id,
          dest_station_id: updated.station_trip_dest_station_idTostation?.id,
          status: updated.status,
        },
      },
      { status: 200 }
    );
  } catch (err: any) {
    if (err.code === "P2025") {
      return Response.json(
        { message: `Trip with id ${id} not found` },
        { status: 404 }
      );
    }
    if (err.code === "P2003") {
      return Response.json(
        { message: "Invalid reference: One of the provided IDs doesn't exist" },
        { status: 400 }
      );
    }

    console.error("Database error:", err);
    return Response.json({ message: "Internal server error" }, { status: 500 });
  }
}
