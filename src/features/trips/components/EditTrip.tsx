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
import { BusType } from "@/features/bus/types/types";
import { DriverType } from "@/features/driver/types/types";
import { StationType } from "@/features/station/types/types";
import { SquarePen } from "lucide-react";
import React, { useState, useEffect } from "react";
import { AggregatedTripType } from "../types/types";
import TimePicker from "./timePicker";

interface EditTripModalProps {
  trip: AggregatedTripType;
  onSuccess?: () => void;
}

export default function EditTripModal({ trip, onSuccess }: EditTripModalProps) {
  const [stations, setStations] = useState<StationType[]>([]);
  const [drivers, setDrivers] = useState<DriverType[]>([]);
  const [buses, setBuses] = useState<BusType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  // trip is now passed as a prop, do not keep in state
  const [driverId, setDriverId] = useState("");
  const [busId, setBusId] = useState("");
  const [srcStationId, setSrcStationId] = useState("");
  const [destStationId, setDestStationId] = useState("");
  const [startTime, setStartTime] = useState<Date>(new Date());
  const [endTime, setEndTime] = useState<Date>(new Date());

  useEffect(() => {
    setIsLoading(true);
    // Set form fields from trip prop
    setDriverId(trip.driver?.id ? String(trip.driver.id) : "");
    setBusId(trip.bus?.id ? String(trip.bus.id) : "");
    setSrcStationId(trip.src_station?.id ? String(trip.src_station.id) : "");
    setDestStationId(trip.dest_station?.id ? String(trip.dest_station.id) : "");
    setStartTime(trip.start_time ? new Date(trip.start_time) : new Date());
    setEndTime(trip.end_time ? new Date(trip.end_time) : new Date());

    // Fetch stations, drivers, buses
    const fetchData = async () => {
      try {
        const stationsRes = await fetch("/api/station");
        if (!stationsRes.ok) throw new Error("Failed to fetch stations");
        const stationsData = await stationsRes.json();
        console.log(stationsData + "dahjbwfdhjbawhjf");
        setStations(stationsData.data || stationsData.stations || []);

        const driversRes = await fetch("/api/driver");
        if (!driversRes.ok) throw new Error("Failed to fetch drivers");
        const driversData = await driversRes.json();
        setDrivers(driversData.data || driversData.drivers || []);

        const busesRes = await fetch("/api/bus");
        if (!busesRes.ok) throw new Error("Failed to fetch buses");
        const busesData = await busesRes.json();
        setBuses(busesData.data || busesData.buses || []);
      } catch (error) {
        console.error("Error fetching data:", error);
        alert("Failed to load required data");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [trip]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!driverId && !busId && !srcStationId && !destStationId) {
      alert("Please fill in at least one field");
      return;
    }
    if (!startTime || !endTime) {
      alert("Please select start and end time");
      return;
    }
    if (endTime <= startTime) {
      alert("End time must be after start time");
      return;
    }
    try {
      const res = await fetch(`/api/trip/${trip.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          driver_id: driverId ? parseInt(driverId) : undefined,
          bus_id: busId ? parseInt(busId) : undefined,
          src_station_id: srcStationId ? parseInt(srcStationId) : undefined,
          dest_station_id: destStationId ? parseInt(destStationId) : undefined,
          start_time: startTime.toISOString(),
          end_time: endTime.toISOString(),
        }),
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to update trip");
      }
      alert("Trip updated successfully!");
      if (onSuccess) onSuccess();
    } catch (err) {
      console.error("Error updating trip:", err);
      alert(err instanceof Error ? err.message : "Failed to update trip");
    }
  };

  return (
    <Drawer>
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

        {isLoading ? (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            Loading...
          </div>
        ) : (
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

            <div className="flex justify-around">
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
            >
              Update Trip
            </Button>
          </form>
        )}
      </DrawerContent>
    </Drawer>
  );
}
