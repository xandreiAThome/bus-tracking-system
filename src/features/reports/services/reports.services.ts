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
  const start = new Date(date.setHours(0, 0, 0, 0));
  const end = new Date(date.setHours(24, 0, 0, 0));

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
  const start = new Date(year, month - 1, 1);
  const end = new Date(year, month, 1);

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
