import { prisma } from "@/lib/prisma";
import { catchDBError } from "@/lib/utils";

/**
 * Get all stations
 */
export async function getAllStations() {
  try {
    const stations = await prisma.station.findMany();
    if (!stations.length) {
      return Response.json({ message: "No stations found" }, { status: 404 });
    }
    return Response.json({ stations }, { status: 200 });
  } catch (err) {
    console.error("Prisma Error:", err);
    return catchDBError(err);
  }
}

/**
 * Get a station by ID
 */
export async function getStation(id: number) {
  try {
    const station = await prisma.station.findUnique({ where: { id } });
    if (!station) {
      return Response.json({ message: "Station not found" }, { status: 404 });
    }
    return Response.json({ station }, { status: 200 });
  } catch (err) {
    console.error("Prisma Error:", err);
    return catchDBError(err);
  }
}

/**
 * Get a station by name
 */
export async function getStationByName(name: string) {
  try {
    const station = await prisma.station.findFirst({
      where: { name },
    });
    if (!station) {
      return Response.json({ message: "Station not found" }, { status: 404 });
    }
    return Response.json({ station }, { status: 200 });
  } catch (err) {
    console.error("Prisma Error:", err);
    return catchDBError(err);
  }
}

/**
 * Create a new station
 */
export async function addStation(name: string) {
  try {
    const created = await prisma.station.create({
      data: { name },
    });
    return Response.json(
      { message: "Station created successfully",
        created
      },
      { status: 201 }
    );
  } catch (err: any) {
    console.error("Prisma Error:", err);
    return catchDBError(err);
  }
}

/**
 * Delete a station by ID
 */
export async function deleteStation(id: number) {
  try {
    const deleted = await prisma.station.delete({ where: { id } });
    return Response.json(
      { message: `Station deleted successfully`,
        id: deleted.id
      },
      { status: 200 }
    );
  } catch (err: any) {
    if (err.code === "P2025") {
      return Response.json(
        { message: `Station with id: ${id} not found` },
        { status: 404 }
      );
    }
    console.error("Prisma Error:", err);
    return catchDBError(err);
  }
}
