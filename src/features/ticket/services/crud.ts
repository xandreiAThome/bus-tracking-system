import { prisma } from "@/lib/prisma";
import { validateDecimal6_2 } from "@/lib/utils";

/* ========== TICKET BASE CRUD ========== */

export async function getAllTickets() {
  return await prisma.ticket.findMany({
    include: {
      baggage_ticket: true,
      passenger_ticket: true,
      cashier: true,
      seat: true,
    },
  });
}

export async function getTicketById(id: number) {
  return await prisma.ticket.findUnique({
    where: { id },
    include: {
      baggage_ticket: true,
      passenger_ticket: true,
      cashier: true,
      seat: true,
    },
  });
}

export async function createTicket(
  price: string,
  trip_id: number,
  cashier_id: number,
  ticket_type: string,
  seat_id?: number
) {
  if (!validateDecimal6_2(price)) {
    throw new Error("Price must be a valid DECIMAL(6,2)");
  }

  const ticket = await prisma.ticket.create({
    data: {
      price,
      trip_id,
      cashier_id,
      ticket_type: ticket_type as any,
      seat_id: seat_id || null,
    },
  });

  return ticket;
}

export async function updateTicket(
  id: number,
  price: string,
  trip_id: number,
  cashier_id: number,
  ticket_type: string
) {
  if (!validateDecimal6_2(price)) {
    throw new Error("Price must be a valid DECIMAL(6,2)");
  }

  return await prisma.ticket.update({
    where: { id },
    data: {
      price,
      trip_id,
      cashier_id,
      ticket_type: ticket_type as any,
    },
  });
}

export async function deleteTicket(id: number) {
  console.log(`Attempting to delete ticket with id: ${id}`);
  return await prisma.$transaction(async tx => {
    // First, get the ticket to check if it has a seat_id
    const ticket = await tx.ticket.findUnique({
      where: { id },
      select: { seat_id: true, ticket_type: true },
    });

    if (!ticket) {
      throw new Error(`Ticket with id ${id} not found`);
    }

    console.log(`Found ticket: ${JSON.stringify(ticket)}`);

    // Delete related records
    console.log("Deleting passenger tickets...");
    await tx.passenger_ticket.deleteMany({ where: { ticket_id: id } });

    console.log("Deleting baggage tickets...");
    await tx.baggage_ticket.deleteMany({ where: { ticket_id: id } });

    // Delete the ticket
    console.log("Deleting main ticket...");
    const deleted = await tx.ticket.delete({ where: { id } });

    // If it's a passenger ticket with a seat, free up the seat
    if (ticket.ticket_type === "passenger" && ticket.seat_id) {
      console.log(`Freeing up seat with id: ${ticket.seat_id}`);
      await tx.seat.update({
        where: { id: ticket.seat_id },
        data: { status: "available" },
      });
    }

    console.log("Ticket deletion completed successfully");
    return deleted;
  });
}

/* ========== PASSENGER TICKET ========== */

export async function createPassengerTicket(
  ticket_id: number,
  passenger_name: string,
  discount: string | null
) {
  return await prisma.passenger_ticket.create({
    data: {
      ticket_id,
      passenger_name,
      discount: discount as any,
    },
  });
}

export async function getPassengerTicketById(ticket_id: number) {
  return await prisma.ticket.findUnique({
    where: { id: ticket_id },
    include: {
      passenger_ticket: true,
      cashier: true,
      seat: true,
    },
  });
}

export async function updatePassengerTicket(
  id: number,
  passenger_name: string,
  discount: string | null
) {
  return await prisma.passenger_ticket.update({
    where: { id },
    data: { passenger_name, discount: discount as any },
  });
}

/* ========== BAGGAGE TICKET ========== */

export async function createBaggageTicket(
  ticket_id: number,
  sender_no: number,
  dispatcher_no: number,
  sender_name: string,
  receiver_name: string,
  item: string
) {
  return await prisma.baggage_ticket.create({
    data: {
      ticket_id,
      sender_no: String(sender_no),
      dispatcher_no: String(dispatcher_no),
      sender_name,
      receiver_name,
      item,
    },
  });
}

export async function getBaggageTicketById(ticket_id: number) {
  return await prisma.ticket.findUnique({
    where: { id: ticket_id },
    include: {
      baggage_ticket: true,
      cashier: true,
    },
  });
}

export async function updateBaggageTicket(
  ticket_id: number,
  sender_no: number,
  dispatcher_no: number,
  sender_name: string,
  receiver_name: string,
  item: string
) {
  return await prisma.baggage_ticket.update({
    where: { ticket_id },
    data: {
      sender_no: String(sender_no),
      dispatcher_no: String(dispatcher_no),
      sender_name,
      receiver_name,
      item,
    },
  });
}

/* ========== COMBINED CREATION ========== */

export async function createFullPassengerTicket(
  price: string,
  trip_id: number,
  cashier_id: number,
  ticket_type: string,
  passenger_name: string,
  discount: string | null,
  seat_id?: number
) {
  const ticket = await createTicket(
    price,
    trip_id,
    cashier_id,
    ticket_type,
    seat_id
  );
  const passenger = await createPassengerTicket(
    ticket.id,
    passenger_name,
    discount
  );
  return { ticket, passenger };
}

export async function createFullBaggageTicket(
  price: string,
  trip_id: number,
  cashier_id: number,
  ticket_type: string,
  sender_no: number,
  dispatcher_no: number,
  sender_name: string,
  receiver_name: string,
  item: string
) {
  const ticket = await createTicket(price, trip_id, cashier_id, ticket_type);
  const baggage = await createBaggageTicket(
    ticket.id,
    sender_no,
    dispatcher_no,
    sender_name,
    receiver_name,
    item
  );
  return { ticket, baggage };
}

/* ========== COMBINED UPDATES ========== */

export async function updateFullPassengerTicket(
  id: number,
  price: string,
  trip_id: number,
  cashier_id: number,
  ticket_type: string,
  //passenger_name: string,
  discount: string | null
) {
  // First get the existing ticket to get the passenger_ticket ID
  const existingTicket = await prisma.ticket.findUnique({
    where: { id },
    include: { passenger_ticket: true },
  });

  if (!existingTicket || !existingTicket.passenger_ticket) {
    throw new Error("Passenger ticket not found");
  }

  const ticket = await updateTicket(
    id,
    price,
    trip_id,
    cashier_id,
    ticket_type
  );

  // Update the passenger_ticket using the correct passenger_ticket ID
  // Note: passenger_name is not used for now, so we only update discount
  const passenger = await prisma.passenger_ticket.update({
    where: { id: existingTicket.passenger_ticket.id },
    data: {
      discount: discount as any,
      // passenger_name is not updated since it's not being used currently
    },
  });

  return { ticket, passenger };
}

export async function updateFullBaggageTicket(
  id: number,
  price: string,
  trip_id: number,
  cashier_id: number,
  ticket_type: string,
  sender_no: number,
  dispatcher_no: number,
  sender_name: string,
  receiver_name: string,
  item: string
) {
  const ticket = await updateTicket(
    id,
    price,
    trip_id,
    cashier_id,
    ticket_type
  );
  const baggage = await updateBaggageTicket(
    id, // Use the main ticket ID as ticket_id for baggage_ticket
    sender_no,
    dispatcher_no,
    sender_name,
    receiver_name,
    item
  );
  return { ticket, baggage };
}

/* ========== FILTERED QUERIES ========== */

export async function getAllPassengerTickets() {
  return await prisma.ticket.findMany({
    where: { NOT: { passenger_ticket: null } },
    include: {
      passenger_ticket: true,
      cashier: true,
      seat: true,
    },
  });
}

export async function getAllBaggageTickets() {
  return await prisma.ticket.findMany({
    where: { NOT: { baggage_ticket: null } },
    include: {
      baggage_ticket: true,
      cashier: true,
    },
  });
}

export async function getPassengerTicketsByTripId(trip_id: number) {
  return await prisma.ticket.findMany({
    where: {
      trip_id,
      NOT: { passenger_ticket: null },
    },
    include: {
      passenger_ticket: true,
      cashier: true,
      seat: true,
    },
  });
}

export async function getBaggageTicketsByTripId(trip_id: number) {
  return await prisma.ticket.findMany({
    where: {
      trip_id,
      NOT: { baggage_ticket: null },
    },
    include: {
      baggage_ticket: true,
      cashier: true,
    },
  });
}
