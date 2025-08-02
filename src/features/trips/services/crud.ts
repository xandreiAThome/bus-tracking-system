import { prisma } from "@/lib/prisma";
import { AggregatedTripType } from "../types/types";

/**
 * Gets all trips
 * Fields Are Aggregated
 */
export async function getAllTrips() {
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
    return null;
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
  const newStart = new Date(start_time);
  const newEnd = new Date(end_time);

  const result = await prisma.$transaction(async tx => {
    // Check for overlapping trips with same driver or bus, that aren't completed
    const overlappingTrips = await tx.trip.findFirst({
      where: {
        NOT: { status: "complete" },
        OR: [{ driver_id }, { bus_id }],
      },
    });

    if (overlappingTrips) {
      throw new Error(
        `Cannot create trip: driver ${driver_id} or bus ${bus_id} already assigned to a non-complete trip.`
      );
    }

    // Create the trip
    const created = await tx.trip.create({
      data: {
        start_time: newStart,
        end_time: newEnd,
        bus: { connect: { id: bus_id } },
        driver: { connect: { id: driver_id } },
        station_trip_dest_station_idTostation: {
          connect: { id: dest_station },
        },
        station_trip_src_station_idTostation: {
          connect: { id: src_station },
        },
      },
    });

    return created;
  });

  return result;
}

/**
 * Deletes a trip by ID
 */
export async function deleteTrip(id: number) {
  const deleted = await prisma.trip.delete({
    where: { id },
  });

  return deleted;
}

export const getTripsForDay = async (date: Date) => {
  const start = new Date(date);
  start.setUTCHours(0, 0, 0, 0);

  const end = new Date(date);
  end.setUTCHours(24, 0, 0, 0);

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
  const updateData: any = {};

  const existingTrip = await prisma.trip.findUnique({
    where: { id },
    select: {
      start_time: true,
      end_time: true,
      status: true,
      driver_id: true,
      bus_id: true,
    },
  });

  if (!existingTrip) {
    throw new Error(`Trip with id ${id} not found`);
  }

  const newStart = start_time
    ? new Date(start_time)
    : new Date(existingTrip.start_time!);
  const newEnd = end_time
    ? new Date(end_time)
    : new Date(existingTrip.end_time!);

  if (newEnd <= newStart) {
    throw new Error("End time must be after start time.");
  }

  if (start_time !== undefined) updateData.start_time = newStart;
  if (end_time !== undefined) updateData.end_time = newEnd;
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

  const isBecomingActive = status !== "complete";
  const driverToCheck = driver_id ?? existingTrip.driver_id;
  const busToCheck = bus_id ?? existingTrip.bus_id;

  let updated;

  if (isBecomingActive) {
    // Only run this block if trip is active or being reactivated
    updated = await prisma.$transaction(async tx => {
      const overlappingTrips = await tx.trip.findFirst({
        where: {
          id: { not: id }, // exclude current trip
          NOT: { status: "complete" },
          OR: [{ driver_id: driverToCheck }, { bus_id: busToCheck }],
        },
      });

      if (overlappingTrips) {
        throw new Error(
          `Conflict: Driver ${driverToCheck} or Bus ${busToCheck} is already assigned to a non-complete trip.`
        );
      }

      const updatedTrip = await tx.trip.update({
        where: { id },
        data: updateData,
        include: {
          bus: true,
          driver: true,
          station_trip_src_station_idTostation: true,
          station_trip_dest_station_idTostation: true,
        },
      });

      return updatedTrip;
    });
  } else {
    // Just update normally
    updated = await prisma.trip.update({
      where: { id },
      data: updateData,
      include: {
        bus: true,
        driver: true,
        station_trip_src_station_idTostation: true,
        station_trip_dest_station_idTostation: true,
      },
    });
  }

  // Free up seats if trip is marked complete
  if (status === "complete" && updated.bus?.id) {
    await prisma.seat.updateMany({
      where: { bus_id: updated.bus.id },
      data: { status: "available" },
    });
  }

  return updated;
}
