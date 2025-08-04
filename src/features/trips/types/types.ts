import { AggregatedBusType } from "@/features/bus/types/types";
import { DriverType } from "@/features/driver/types/types";
import { StationType } from "@/features/station/types/types";

interface TripType {
  id: number;
  start_time: Date | null;
  end_time: Date | null;
  dest_station_id: number;
  src_station_id: number;
  bus_id: number;
  driver_id: number;
  status: "boarding" | "transit" | "complete" | null; // Replace with your actual enum values
}

interface AggregatedTripType {
  id: number;
  start_time: Date | null;
  end_time: Date | null;
  dest_station: StationType;
  src_station: StationType;
  bus: AggregatedBusType;
  driver: DriverType;
  status: "boarding" | "transit" | "complete" | null; // Replace with your actual enum values
}

export type { TripType, AggregatedTripType };
