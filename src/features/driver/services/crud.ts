import { prisma } from "@/lib/prisma"; // import your prisma client
import { catchDBError } from "@/lib/utils";
import { validateDecimal6_2 } from "@/lib/utils";
import { passenger_ticket_discount, ticket_ticket_type } from "@prisma/client";

export async function getAllTickets() {
  try {
    const tickets = await prisma.ticket.findMany();

    if (!tickets || tickets.length === 0) {
      return Response.json(
        { message: "No available tickets" },
        { status: 404 }
      );
    }

    return Response.json({ tickets }, { status: 200 });
  } catch (err) {
    console.error("DB Error:", err);
    return catchDBError(err);
  }
}

export async function getAllTicketsFromTrip(tripID: number) {
  try {
    const tickets = await prisma.ticket.findMany({
      where: {
        trip_id: tripID,
      },
    });

    if (!tickets || tickets.length === 0) {
      return Response.json(
        { message: "No available tickets" },
        { status: 404 }
      );
    }

    return Response.json({ tickets }, { status: 200 });
  } catch (err) {
    console.error("DB Error:", err);
    return catchDBError(err);
  }
}

export async function getTicket(id: number) {
  try {
    const ticket = await prisma.ticket.findUnique({
      where: { id },
    });

    if (!ticket) {
      return Response.json({ message: "ticket not found" }, { status: 404 });
    }

    return Response.json({ ticket }, { status: 200 });
  } catch (err) {
    console.error("DB Error:", err);
    return catchDBError(err);
  }
}

/**
 * Adds a ticket to the database
 *
 * @param {string} price The price of the ticket
 * @param {number} trip_id The id of the bus associated with the ticket
 * @param {number} cashier_id The id of the bus associated with the ticket
 */
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

    const ticketType = ticket_ticket_type[ticket_type as keyof typeof ticket_ticket_type];
    if (!ticketType) {
      return Response.json({ message: "Invalid ticket_type" }, { status: 400 });
    }

    const ticket = await prisma.ticket.create({
      data: {
        price,
        trip_id,
        cashier_id,
        ticket_type: ticketType
      },
    });

    return Response.json(
      { message: "Ticket created successfully", id: ticket.id },
      { status: 201 }
    );
  } catch (err: any) {
    console.error("DB Error:", err);
    return catchDBError(err);
  }
}

/**
 * Deletes a ticket from the database
 *
 * @param {number} id The ID of the `ticket` to be deleted
 */






/**
 * Adds a passenger ticket from the database
 *
 */
export async function addPassengerTicket(
  ticket_id: number,
  passenger_name: string,
  discount: string | null
) {
  try {
    const discountType = passenger_ticket_discount[discount as keyof typeof passenger_ticket_discount];
    if (!discountType) {
      return Response.json({ message: "Invalid ticket_type" }, { status: 400 });
    }

    const passengerTicket = await prisma.passenger_ticket.create({
      data: {
        ticket_id,
        passenger_name,
        discount: discountType
      }
    });

    return Response.json(
      { message: "Passenger ticket created successfully" },
      { status: 201 }
    );
  } catch (err) {
    console.error("DB Error:", err);
    return catchDBError(err);
  }
}

/**
 * Get Passenger Ticket using a ticket Id
 *
 */
export async function getPassengerTicketByTicketId(ticket_id: number) {
  try {
    const passengerTicket = await prisma.passenger_ticket.findFirst({
      where: { ticket_id }
    });

    if (!passengerTicket) {
      return null;
    }

    return passengerTicket;
  } catch (err) {
    console.error("DB Error:", err);
    return catchDBError(err);
  }
}

/**
 * Creates Passenger Tickets
 *
 */
export async function createPassengerTicket(
  price: string,
  trip_id: number,
  cashier_id: number,
  ticket_type: string,
  passenger_name: string,
  discount: string | null
) {
  try {
    const ticketResponse = await addTicket(price, trip_id, cashier_id, ticket_type);

    if ('status' in ticketResponse && ticketResponse.status !== 201) {
      return ticketResponse;
    }

    const data = await ticketResponse.json();
    const newTicketId = data.id;

    return await addPassengerTicket(newTicketId, passenger_name, discount);
  } catch (err) {
    console.error("DB Error:", err);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}


/**
 * Creates Baggage Tickets
 *
 */
export async function addBaggageTicket(
  ticket_id: number,
  sender_no: string,
  dispatcher_no: string,
  sender_name: string,
  receiver_name: string,
  item: string
) {
  try {
    const baggageTicket = await prisma.baggage_ticket.create({
      data: {
        ticket_id,
        sender_no,
        dispatcher_no,
        sender_name,
        receiver_name,
        item
      }
    });

    return {
      status: 201,
      message: "Baggage ticket created successfully",
      id: baggageTicket.id // if you want to return the new baggage_ticket id
    };
  } catch (err) {
    console.error("DB Error:", err);
    return {
      status: 500,
      message: "Internal Server Error"
    };
  }
}

/**
 * Get Baggage Ticket by using Ticket Id
 *
 */

