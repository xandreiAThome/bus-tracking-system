import { prisma } from "@/lib/prisma";

export const getTicketsByTrip = async (tripId: number) => {
  return prisma.ticket.findMany({
    where: { trip_id: tripId },
    include: {
      passenger_ticket: true,
      baggage_ticket: true,
    },
  });
};

export const getDailySummary = async (date: Date) => {
  // Convert Manila date to UTC range for database query using UTC methods
  const manilaOffset = 8 * 60 * 60 * 1000; // 8 hours in milliseconds

  // Create Manila day boundaries using UTC to avoid server timezone issues
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const manilaStart = new Date(Date.UTC(year, month, day, 0, 0, 0, 0));
  const manilaEnd = new Date(Date.UTC(year, month, day, 23, 59, 59, 999));

  // Convert to UTC for database query
  const start = new Date(manilaStart.getTime() - manilaOffset);
  const end = new Date(manilaEnd.getTime() - manilaOffset);

  return prisma.ticket.aggregate({
    _count: true,
    _sum: { price: true },
    where: {
      createdAt: {
        gte: start,
        lt: end,
      },
    },
  });
};

export const getMonthlySummary = async (month: number, year: number) => {
  // Convert Manila month range to UTC for database query using UTC methods
  const manilaOffset = 8 * 60 * 60 * 1000; // 8 hours in milliseconds

  // Create Manila month boundaries using UTC to avoid server timezone issues
  const manilaStart = new Date(Date.UTC(year, month - 1, 1, 0, 0, 0, 0));
  const manilaEnd = new Date(Date.UTC(year, month, 1, 0, 0, 0, 0));

  // Convert to UTC for database query
  const start = new Date(manilaStart.getTime() - manilaOffset);
  const end = new Date(manilaEnd.getTime() - manilaOffset);

  return prisma.ticket.aggregate({
    _count: true,
    _sum: { price: true },
    where: {
      createdAt: {
        gte: start,
        lt: end,
      },
    },
  });
};
