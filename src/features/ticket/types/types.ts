import { CashierType } from "@/features/cashier/types/types";

interface BaggageTicketType {
  id: number;
  sender_no: string;
  dispatcher_no: string;

  sender_name: string;
  receiver_name: string;
  item: string;
}

interface PassengerTicketType {
  id: number;
  seat: string;
  price: number;
  discount: number | null;
}

interface TicketType {
  id: number;
  price: number;
  trip_id: number;
  cashier_id: number;
  ticket_type: "passenger" | "baggagge";
  created_at: Date;
}

interface AggregatedTicketType {
  id: number;
  price: number;
  trip_id: number;
  ticket_type: "passenger" | "baggagge";
  created_at: Date;
  passenger_ticket: PassengerTicketType;
  baggage_ticket: BaggageTicketType;
  cashier: CashierType;
}

export type {
  PassengerTicketType,
  BaggageTicketType,
  TicketType,
  AggregatedTicketType,
};
