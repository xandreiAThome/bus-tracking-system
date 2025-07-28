interface CashierType {
  id: number;
  shift_start: Date | null;
  shift_end: Date | null;
  station_id: number;
  user_id: number;
  last_name: string;
  first_name: string;
}

export type { CashierType };
