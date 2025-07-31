"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AggregatedBusType } from "@/features/bus/types/types";
import { DriverType } from "@/features/driver/types/types";
import { StationType } from "@/features/station/types/types";

import { TripType } from "../types/types";
import { useState } from "react";
import { toast } from "sonner";
import TimePicker from "./timePicker";

type CreateTripPayload = Omit<
  TripType,
  "status" | "id" | "start_time" | "end_time"
> & {
  start_time: string;
  end_time: string;
};

export interface CreateTripModalProps {
  onTripCreated?: () => void;
  stations: StationType[];
  buses: AggregatedBusType[];
  drivers: DriverType[];
}

export function CreateTripModal({
  onTripCreated,
  stations,
  buses,
  drivers,
}: CreateTripModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [formData, setFormData] = useState({
    driver: "",
    source: "",
    destination: "",
    bus: "",
  });

  const [startTime, setStartTime] = useState<Date>(new Date());
  const [endTime, setEndTime] = useState<Date>(new Date());

  // All data is passed as props from OverviewCard. No fetching here.
  // TimePicker logic is now handled in the TimePicker component

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { driver, bus, source, destination } = formData;

    if (!driver || !bus || !source || !destination) {
      alert("Please fill in all required fields.");
      setIsSubmitting(false);
      return;
    }
    try {
      const payload: CreateTripPayload = {
        start_time: startTime.toISOString(),
        end_time: endTime.toISOString(),
        bus_id: parseInt(bus),
        src_station_id: parseInt(source),
        dest_station_id: parseInt(destination),
        driver_id: parseInt(driver),
      };

      const res = await fetch("/api/trip", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to create trip");
      }

      // Reset form
      setFormData({
        driver: "",
        source: "",
        destination: "",
        bus: "",
      });
      setStartTime(new Date());
      setEndTime(new Date());
      setDrawerOpen(false);
      toast.success("Trip created successfully!");
      if (onTripCreated) {
        onTripCreated();
      }
    } catch (err) {
      console.error("Error:", err);
      alert(
        err instanceof Error
          ? err.message + " diaubfiawbfuhawb" + err
          : "An error occurred"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // No loading state here; handled by OverviewCard

  return (
    <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
      <DrawerTrigger asChild>
        <Button className="h-max bg-[#71AC61] hover:bg-[#456A3B] font-bold text-xl rounded-lg">
          Create Trip
        </Button>
      </DrawerTrigger>

      <DrawerContent className="p-6 max-w-4xl mx-auto flex flex-col">
        <DrawerHeader>
          <DrawerTitle className="text-center text-[#71AC61]">
            Create Trip
          </DrawerTitle>
          <hr className="border-t-2 mt-2 mb-4" />
        </DrawerHeader>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 px-4 pb-6 overflow-y-auto flex-1 w-full"
        >
          {/* Driver Selection */}
          <div>
            <Label>Driver</Label>
            <Select
              value={formData.driver}
              onValueChange={value =>
                setFormData(prev => ({ ...prev, driver: value }))
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose Driver" />
              </SelectTrigger>
              <SelectContent>
                {drivers.map(driver => (
                  <SelectItem key={driver.id} value={driver.id.toString()}>
                    {driver.first_name} {driver.last_name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Source Station */}
          <div>
            <Label>Source Station</Label>
            <Select
              value={formData.source}
              onValueChange={value =>
                setFormData(prev => ({ ...prev, source: value }))
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose Source" />
              </SelectTrigger>
              <SelectContent>
                {stations.map(station => (
                  <SelectItem key={station.id} value={station.id.toString()}>
                    {station.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Destination Station */}
          <div>
            <Label>Destination Station</Label>
            <Select
              value={formData.destination}
              onValueChange={value =>
                setFormData(prev => ({ ...prev, destination: value }))
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose Destination" />
              </SelectTrigger>
              <SelectContent>
                {stations.map(station => (
                  <SelectItem key={station.id} value={station.id.toString()}>
                    {station.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Bus Selection */}
          <div>
            <Label>Bus</Label>
            <Select
              value={formData.bus}
              onValueChange={value =>
                setFormData(prev => ({ ...prev, bus: value }))
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose Bus" />
              </SelectTrigger>
              <SelectContent>
                {buses.map(bus => (
                  <SelectItem key={bus.id} value={String(bus.id)}>
                    {bus.plate_number}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Time Picker */}
          <TimePicker
            label="Start Time"
            time={startTime}
            setTime={setStartTime}
          />
          <TimePicker label="End Time" time={endTime} setTime={setEndTime} />

          <Button
            type="submit"
            className="bg-[#71AC61] hover:bg-[#456A3B] mt-4"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating..." : "Create New Trip"}
          </Button>
        </form>
      </DrawerContent>
    </Drawer>
  );
}
