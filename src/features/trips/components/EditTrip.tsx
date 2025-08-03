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
import { SquarePen } from "lucide-react";
import React, { useState, useEffect } from "react";
import { AggregatedTripType } from "../types/types";
import TimePicker from "./timePicker";
import { toast } from "sonner";

interface EditTripModalProps {
  trip: AggregatedTripType;
  onSuccess?: () => void;
  stations: StationType[];
  drivers: DriverType[];
  buses: AggregatedBusType[];
}

export default function EditTripModal({
  trip,
  onSuccess,
  stations,
  drivers,
  buses,
}: EditTripModalProps) {
  const [driverId, setDriverId] = useState("");
  const [busId, setBusId] = useState("");
  const [srcStationId, setSrcStationId] = useState("");
  const [destStationId, setDestStationId] = useState("");
  const [startTime, setStartTime] = useState<Date>(new Date());
  const [endTime, setEndTime] = useState<Date>(new Date());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    // Set form fields from trip prop
    setDriverId(trip.driver?.id ? String(trip.driver.id) : "");
    setBusId(trip.bus?.id ? String(trip.bus.id) : "");
    setSrcStationId(trip.src_station?.id ? String(trip.src_station.id) : "");
    setDestStationId(trip.dest_station?.id ? String(trip.dest_station.id) : "");
    setStartTime(trip.start_time ? new Date(trip.start_time) : new Date());
    setEndTime(trip.end_time ? new Date(trip.end_time) : new Date());
  }, [trip]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (!driverId && !busId && !srcStationId && !destStationId) {
      toast.error("Please fill in at least one field");
      setIsSubmitting(false);
      return;
    }
    if (!startTime || !endTime) {
      toast.error("Please select start and end time");
      setIsSubmitting(false);
      return;
    }
    if (endTime <= startTime) {
      toast.error("End time must be after start time");
      setIsSubmitting(false);
      return;
    }
    try {
      const res = await fetch(`/api/trip/${trip.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          driver_id: driverId
            ? parseInt(driverId)
            : (trip.driver?.id ?? undefined),
          bus_id: busId ? parseInt(busId) : (trip.bus?.id ?? undefined),
          src_station_id: srcStationId
            ? parseInt(srcStationId)
            : (trip.src_station?.id ?? undefined),
          dest_station_id: destStationId
            ? parseInt(destStationId)
            : (trip.dest_station?.id ?? undefined),
          start_time: startTime.toISOString(),
          end_time: endTime.toISOString(),
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to update trip");
      }
      toast.success("Trip updated successfully");
      setDrawerOpen(false);
      if (onSuccess) onSuccess();
    } catch (err) {
      console.error("Error updating trip:", err);
      toast.error(err instanceof Error ? err.message : "Failed to update trip");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Edit trip">
          <SquarePen className="h-5 w-5" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="p-2 max-w-4xl mx-auto flex flex-col">
        <DrawerHeader>
          <DrawerTitle className="text-center text-[#71AC61]">
            Edit Trip
          </DrawerTitle>
          <hr className="border-t-2 mt-2 mb-4" />
        </DrawerHeader>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 px-4 pb-6 overflow-y-auto flex-1"
        >
          {/* Driver */}
          <div>
            <Label>Driver</Label>
            <Select value={driverId} onValueChange={setDriverId}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose Driver" />
              </SelectTrigger>
              <SelectContent>
                {drivers.map(driver => (
                  <SelectItem key={driver.id} value={driver.id.toString()}>
                    {`${driver.first_name} ${driver.last_name}`}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Source Station */}
          <div>
            <Label>Source Station</Label>
            <Select value={srcStationId} onValueChange={setSrcStationId}>
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
            <Select value={destStationId} onValueChange={setDestStationId}>
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

          {/* Bus */}
          <div>
            <Label>Bus</Label>
            <Select value={busId} onValueChange={setBusId}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose Bus" />
              </SelectTrigger>
              <SelectContent>
                {buses.map(bus => (
                  <SelectItem key={bus.id} value={bus.id.toString()}>
                    {bus.plate_number}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-around flex-wrap gap-2">
            <TimePicker
              time={startTime}
              setTime={setStartTime}
              label="Start Time"
            ></TimePicker>

            <TimePicker
              time={endTime}
              setTime={setEndTime}
              label="End Time"
            ></TimePicker>
          </div>

          <Button
            type="submit"
            className="bg-[#71AC61] hover:bg-[#456A3B] mt-4"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Updating..." : "Update Trip"}
          </Button>
        </form>
      </DrawerContent>
    </Drawer>
  );
}
