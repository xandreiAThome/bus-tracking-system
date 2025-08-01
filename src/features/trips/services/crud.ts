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
  return created;
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

  let updated;

  if (status === "complete") {
    // Run in a transaction to ensure both update together
    updated = await prisma.$transaction(async tx => {
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

      // Update seats status associated with the trip's bus
      await tx.seat.updateMany({
        where: { bus_id: updatedTrip.bus.id },
        data: { status: "available" }, // or whatever status fits your logic
      });

      return updatedTrip;
    });
  } else {
    // Just update the trip normally
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

  return updated;
}
