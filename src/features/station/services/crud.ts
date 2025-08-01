import { prisma } from "@/lib/prisma";

/**
 * Get all stations from the database.
 */
export async function getAllStations() {
  const stations = await prisma.station.findMany();
  if (!stations || stations.length === 0) {
    return null;
  }
  return stations;
}

/**
 * Get a station by its ID.
 * @param id - Station ID
 */
export async function getStation(id: number) {
  const station = await prisma.station.findUnique({
    where: { id },
  });

  return station;
}

/**
 * Get a station by its name.
 * @param name - Station name
 */
export async function getStationByName(name: string) {
  const station = await prisma.station.findFirst({
    where: { name },
  });

  return station;
}

/**
 * Create a new station.
 * @param name - Station name
 */
export async function addStation(name: string) {
  const created = await prisma.station.create({
    data: { name },
  });
  return created;
}

/**
 * Edit a station's name by ID.
 * @param id - Station ID
 * @param data - Object with new station data (currently only `name`)
 */
export async function editStation(id: number, data: { name: string }) {
  const updated = await prisma.station.update({
    where: { id },
    data: { name: data.name },
  });
  return updated;
}

/**
 * Delete a station by ID.
 * @param id - Station ID
 */
export async function deleteStation(id: number) {
  const deleted = await prisma.station.delete({
    where: { id },
  });
  return deleted;
}
