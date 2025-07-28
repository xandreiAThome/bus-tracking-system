import { prisma } from "@/lib/prisma";
import { catchDBError } from "@/lib/utils";
import { validateDecimal6_2 } from "@/lib/utils";

export async function getAllTickets() {
  try {
    const tickets = await prisma.ticket.findMany({
      include: {
        baggage_ticket: true,
        passenger_ticket: true,
        cashier: true,
      },
    });

    return tickets;
  } catch (error) {
    console.error("Error fetching baggage tickets:", error);
    throw new Error("Failed to retrieve baggage tickets.");
  }
}

export async function getALlTicketsFromTrip(trip_id: number) {
  try {
    const tickets = await prisma.ticket.findMany({ where: { trip_id } });
    if (!tickets || tickets.length === 0) {
      return Response.json(
        { message: `No tickets found for trip_id ${trip_id}` },
        { status: 404 }
      );
    }
    return Response.json({ tickets }, { status: 200 });
  } catch (err) {
    return catchDBError(err);
  }
}

export async function getTicket(id: number) {
  try {
    const tickets = await prisma.ticket.findUnique({
      where: {
        id: id,
      },
      include: {
        baggage_ticket: true,
        passenger_ticket: true,
        cashier: true,
      },
    });

    return tickets;
  } catch (error) {
    console.error("Error fetching baggage tickets:", error);
    throw new Error("Failed to retrieve baggage tickets.");
  }
}

export async function addTicket(
  price: string,
  trip_id: number,
  cashier_id: number,
  ticket_type: string
) {
  try {
    if (!validateDecimal6_2(price)) {
      return Response.json({ message: "Price is invalid" }, { status: 400 });
    }

    const ticket = await prisma.ticket.create({
      data: {
        price: price,
        trip_id,
        cashier_id,
        ticket_type: ticket_type as any,
      },
    });

    return Response.json(
      { message: "Ticket created successfully", id: ticket.id },
      { status: 201 }
    );
  } catch (err) {
    return catchDBError(err);
  }
}

export async function deleteTicket(id: number) {
  try {
    await prisma.passenger_ticket.deleteMany({ where: { ticket_id: id } });
    await prisma.baggage_ticket.deleteMany({ where: { ticket_id: id } });

    const deleted = await prisma.ticket.delete({ where: { id } });

    return Response.json(
      { message: `Ticket deleted successfully`, id: deleted.id },
      { status: 200 }
    );
  } catch (err) {
    return catchDBError(err);
  }
}
export async function addPassengerTicket(
  ticket_id: number,
  passenger_name: string,
  discount: string | null
) {
  try {
    const created = await prisma.passenger_ticket.create({
      data: {
        ticket_id,
        passenger_name,
        discount: discount as any,
      },
    });

    return Response.json(
      { message: "Passenger ticket created successfully", created },
      { status: 201 }
    );
  } catch (err) {
    return catchDBError(err);
  }
}

export async function getPassengerTicketByTicketId(id: number) {
  try {
    const tickets = await prisma.ticket.findUnique({
      where: {
        id: id,
        NOT: {
          passenger_ticket: null, // Ensures only tickets with baggage_ticket are included
        },
      },
      include: {
        passenger_ticket: true,
        cashier: true,
      },
    });

    return tickets;
  } catch (error) {
    console.error("Error fetching passenger tickets:", error);
    throw new Error("Failed to retrieve passenger tickets.");
  }
}

export async function createPassengerTicket(
  price: string,
  trip_id: number,
  cashier_id: number,
  ticket_type: string,
  passenger_name: string,
  discount: string | null
) {
  const ticketRes = await addTicket(price, trip_id, cashier_id, ticket_type);
  if (ticketRes.status !== 201) return ticketRes;

  const { id } = await ticketRes.json();
  return addPassengerTicket(id, passenger_name, discount);
}

export async function updatePassengerTicket(
  id: number,
  passenger_name: string,
  discount: string | null
) {
  try {
    const updated = await prisma.passenger_ticket.update({
      where: { id },
      data: { passenger_name, discount: discount as any },
    });

    return Response.json(
      { message: "Passenger ticket updated successfully" },
      { status: 200 }
    );
  } catch (err) {
    return catchDBError(err);
  }
}
export async function addBaggageTicket(
  ticket_id: number,
  sender_no: number,
  dispatcher_no: number,
  sender_name: string,
  receiver_name: string,
  item: string
) {
  try {
    const created = await prisma.baggage_ticket.create({
      data: {
        ticket_id,
        sender_no: String(sender_no),
        dispatcher_no: String(dispatcher_no),
        sender_name,
        receiver_name,
        item,
      },
    });

    return Response.json(
      { message: "Baggage ticket created successfully", created },
      { status: 201 }
    );
  } catch (err) {
    return catchDBError(err);
  }
}

export async function getBaggageTicketByTicketId(id: number) {
  try {
    const tickets = await prisma.ticket.findUnique({
      where: {
        id: id,
        NOT: {
          baggage_ticket: null, // Ensures only tickets with baggage_ticket are included
        },
      },
      include: {
        baggage_ticket: true,
        cashier: true,
      },
    });

    return tickets;
  } catch (error) {
    console.error("Error fetching baggage tickets:", error);
    throw new Error("Failed to retrieve baggage tickets.");
  }
}

export async function createBaggageTicket(
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
  const ticketRes = await addTicket(price, trip_id, cashier_id, ticket_type);
  if (ticketRes.status !== 201) return ticketRes;

  const { id } = await ticketRes.json();
  return addBaggageTicket(
    id,
    sender_no,
    dispatcher_no,
    sender_name,
    receiver_name,
    item
  );
}

export async function updateBaggageTicket(
  id: number,
  sender_no: number,
  dispatcher_no: number,
  sender_name: string,
  receiver_name: string,
  item: string
) {
  try {
    await prisma.baggage_ticket.update({
      where: { id },
      data: {
        sender_no: String(sender_no),
        dispatcher_no: String(dispatcher_no),
        sender_name,
        receiver_name,
        item,
      },
    });

    return Response.json(
      { message: "Baggage ticket updated successfully" },
      { status: 200 }
    );
  } catch (err) {
    return catchDBError(err);
  }
}
export async function updateTicket(
  id: number,
  price: string,
  trip_id: number,
  cashier_id: number,
  ticket_type: string
) {
  try {
    if (!validateDecimal6_2(price)) {
      return Response.json({ message: "Price is invalid" }, { status: 400 });
    }

    const ticket = await prisma.ticket.update({
      where: { id },
      data: {
        price,
        trip_id,
        cashier_id,
        ticket_type: ticket_type as any,
      },
    });

    return Response.json(
      { message: `Ticket with id ${ticket.id} updated successfully` },
      { status: 200 }
    );
  } catch (err) {
    return catchDBError(err);
  }
}

export async function putPassengerTicket(
  id: number,
  price: string,
  trip_id: number,
  cashier_id: number,
  ticket_type: string,
  passenger_name: string,
  discount: string | null
) {
  const res = await updateTicket(id, price, trip_id, cashier_id, ticket_type);
  if (res.status !== 200) return res;

  return updatePassengerTicket(id, passenger_name, discount);
}

export async function putBaggageTicket(
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
  const res = await updateTicket(id, price, trip_id, cashier_id, ticket_type);
  if (res.status !== 200) return res;

  return updateBaggageTicket(
    id,
    sender_no,
    dispatcher_no,
    sender_name,
    receiver_name,
    item
  );
}

export async function getAllPassengerTickets() {
  try {
    const tickets = await prisma.ticket.findMany({
      where: {
        NOT: {
          passenger_ticket: null, // Ensures only tickets with baggage_ticket are included
        },
      },
      include: {
        passenger_ticket: true,
        cashier: true,
      },
    });

    return tickets;
  } catch (error) {
    console.error("Error fetching passenger tickets:", error);
    throw new Error("Failed to retrieve passenger tickets.");
  }
}

export async function getAllBaggageTickets() {
  try {
    const tickets = await prisma.ticket.findMany({
      where: {
        NOT: {
          baggage_ticket: null, // Ensures only tickets with baggage_ticket are included
        },
      },
      include: {
        baggage_ticket: true,
        cashier: true,
      },
    });

    return tickets;
  } catch (error) {
    console.error("Error fetching baggage tickets:", error);
    throw new Error("Failed to retrieve baggage tickets.");
  }
}

/**
 * Get passenger tickets by trip ID
 */

export const getPassengerTicketsByTripId = async (tripId: number) => {
  try {
    const tickets = await prisma.ticket.findMany({
      where: {
        trip_id: tripId,
        NOT: {
          passenger_ticket: null, // Ensures only tickets with baggage_ticket are included
        },
      },
      include: {
        passenger_ticket: true,
        cashier: true,
      },
    });

    return tickets;
  } catch (error) {
    console.error("Error fetching passenger tickets:", error);
    throw new Error("Failed to retrieve passenger tickets.");
  }
};

/**
 * Get baggage tickets by trip ID
 */
export const getBaggageTicketsByTripId = async (tripId: number) => {
  try {
    const tickets = await prisma.ticket.findMany({
      where: {
        trip_id: tripId,
        NOT: {
          baggage_ticket: null, // Ensures only tickets with baggage_ticket are included
        },
      },
      include: {
        baggage_ticket: true,
        cashier: true,
      },
    });

    return tickets;
  } catch (error) {
    console.error("Error fetching baggage tickets:", error);
    throw new Error("Failed to retrieve baggage tickets.");
  }
};
