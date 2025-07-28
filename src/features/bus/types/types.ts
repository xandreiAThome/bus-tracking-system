import { StationType } from "@/features/station/types/types";

interface BusType {
  id: number;
  plate_number: string;
  capacity: number;
  station_id: number;
}

interface AggregatedBusType {
  id: number;
  plate_number: string;
  capacity: number;
  station: StationType;
}

export type { BusType, AggregatedBusType };
