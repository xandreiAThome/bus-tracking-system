interface SeatType {
  id: number;
  seat_number: string;
  bus_id: number;
  status: "available" | "occupied";
}

export type { SeatType };
