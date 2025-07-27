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

import React, { useState, useEffect } from "react";

interface EditTripModalProps {
  tripId: number;
  onSuccess?: () => void;
}

interface Driver {
  id: string;
  name: string;
}

interface Bus {
  id: string;
  plate_number: string;
}

interface Trip {
  id: number;
  driver_id: number;
  bus_id: number;
  src_station_id: number;
  dest_station_id: number;
  start_time: string;
}

interface Station {
  id: number;
  name: string;
}

export default function EditTripModal({ tripId, onSuccess }: EditTripModalProps) {
  
  const [stations, setStations] = useState([]);
  const [isLoadingStations, setIsLoadingStations] = useState(true);

  useEffect(() => {
    const fetchStations = async () => {
      try {
        const response = await fetch('/api/station');
        if (!response.ok) {
          throw new Error('Failed to fetch stations');
        }
        const data = await response.json();
        setStations(data.stations || data); // Handle both formats
      } catch (error) {
        console.error("Error fetching stations:", error);
        alert("Failed to load stations");
      } finally {
        setIsLoadingStations(false);
      }
    };

    fetchStations();
  }, []);

  const drivers = [
    { id: "1", name: "Mark Reyes" },
    { id: "2", name: "Anthony Cruz" },
    { id: "3", name: "Jared Thompson" },
    { id: "4", name: "Samuel Diaz" },
  ];

  const buses = [
    { id: "1", name: "Bus1" },
    { id: "2", name: "Bus2" },
    { id: "3", name: "Bus3" },
  ];

  const [driver, setDriver] = useState("");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [bus, setBus] = useState("");
  const [hour, setHour] = useState("00");
  const [minute, setMinute] = useState("00");
  const [meridiem, setMeridiem] = useState("a.m.");
  const [isLoading, setIsLoading] = useState(true);

  // Fetch trip data when component mounts
  useEffect(() => {
    const fetchTripData = async () => {
      try {
        const response = await fetch(`/api/trip/${tripId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch trip data');
        }
        const trip = await response.json();
        
        // Set form fields with trip data
        setDriver(trip.driver_id.toString());
        setBus(trip.bus_id.toString());
        setSource(trip.src_station.toString());
        setDestination(trip.dest_station.toString());

        // Parse the start_time
        if (trip.start_time) {
          const date = new Date(trip.start_time);
          let hours = date.getHours();
          const minutes = date.getMinutes();
          
          // Convert to 12-hour format
          const isPM = hours >= 12;
          if (isPM && hours > 12) hours -= 12;
          if (!isPM && hours === 0) hours = 12;

          setHour(hours.toString().padStart(2, "0"));
          setMinute(minutes.toString().padStart(2, "0"));
          setMeridiem(isPM ? "p.m." : "a.m.");
        }
      } catch (error) {
        console.error("Error fetching trip data:", error);
        alert("Failed to load trip data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchTripData();
  }, [tripId]);

  const incrementHour = () => {
    const newHour = (parseInt(hour) + 1) % 12 || 12;
    setHour(newHour.toString().padStart(2, "0"));
  };

  const decrementHour = () => {
    const newHour = (parseInt(hour) - 1 + 12) % 12 || 12;
    setHour(newHour.toString().padStart(2, "0"));
  };

  const incrementMinute = () => {
    const newMinute = (parseInt(minute) + 1) % 60;
    setMinute(newMinute.toString().padStart(2, "0"));
  };

  const decrementMinute = () => {
    const newMinute = (parseInt(minute) - 1 + 60) % 60;
    setMinute(newMinute.toString().padStart(2, "0"));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!driver || !bus || !source || !destination) {
      alert("Please fill in all fields.");
      return;
    }

    const today = new Date();
    const [year, month, day] = [
      today.getFullYear(),
      (today.getMonth() + 1).toString().padStart(2, "0"),
      today.getDate().toString().padStart(2, "0"),
    ];

    let h = parseInt(hour);
    if (meridiem === "p.m." && h < 12) h += 12;
    if (meridiem === "a.m." && h === 12) h = 0;

    const date = new Date(
      `${year}-${month}-${day}T${h.toString().padStart(2, "0")}:${minute.padStart(
        2,
        "0"
      )}:00Z`
    );

    const start_time = date.toISOString();
    const end_time = new Date(date.getTime() + 60 * 60 * 1000).toISOString(); // +1 hour

    const payload = {
      start_time,
      end_time,
      bus_id: parseInt(bus),
      src_station: parseInt(source),
      dest_station: parseInt(destination),
      driver_id: parseInt(driver)
    };

    try {
      const res = await fetch(`/api/trip/${tripId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error("Failed to update trip:", errorData);
        alert(`Error: ${errorData.message || "Failed to update trip"}`);
      } else {
        alert("Trip updated successfully!");
        if (onSuccess) onSuccess();
      }
    } catch (err) {
      console.error("Network error:", err);
      alert("Network error occurred.");
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-32">
        <p>Loading trip data...</p>
      </div>
    );
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="h-max bg-[#71AC61] hover:bg-[#456A3B] font-bold text-xl rounded-lg">
          Edit Trip
        </Button>
      </DrawerTrigger>

      <DrawerContent className="p-6 max-h-[90vh] flex flex-col">
        <DrawerHeader>
          <DrawerTitle className="text-center text-[#71AC61]">Edit Trip</DrawerTitle>
          <hr className="border-t-2 mt-2 mb-4" />
        </DrawerHeader>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 px-4 pb-6 overflow-y-auto flex-1"
        >
          {/* Driver */}
          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-1">Driver</Label>
            <Select value={driver} onValueChange={setDriver}>
              <SelectTrigger className="w-full justify-start px-0">
                <SelectValue placeholder="Choose Driver" />
              </SelectTrigger>
              <SelectContent>
                {drivers.map((driver) => (
                  <SelectItem key={driver.id} value={driver.id}>
                    {driver.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Source Station */}
          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-1">Source Station</Label>
            <Select value={source} onValueChange={setSource}>
              <SelectTrigger className="w-full justify-start px-0">
                <SelectValue placeholder="Choose Source" />
              </SelectTrigger>
              <SelectContent>
                {stations.map((station: Station) => (
                  <SelectItem key={station.id} value={station.id.toString()}>
                    {station.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Destination Station */}
          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-1">
              Destination Station
            </Label>
            <Select value={destination} onValueChange={setDestination}>
              <SelectTrigger className="w-full justify-start px-0">
                <SelectValue placeholder="Choose Destination" />
              </SelectTrigger>
              <SelectContent>
                {stations.map((station: Station) => (
                  <SelectItem key={station.id} value={station.id.toString()}>
                    {station.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Bus */}
          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-1">Bus</Label>
            <Select value={bus} onValueChange={setBus}>
              <SelectTrigger className="w-full justify-start px-0">
                <SelectValue placeholder="Choose Bus" />
              </SelectTrigger>
              <SelectContent>
                {buses.map((bus) => (
                  <SelectItem key={bus.id} value={bus.id}>
                    {bus.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Time Picker */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
            <div className="flex items-center gap-2">
              <div className="flex items-center border px-2 rounded">
                <button type="button" onClick={decrementHour} className="text-lg px-2">
                  -
                </button>
                <input
                  value={hour}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (/^\d{0,2}$/.test(val)) setHour(val);
                  }}
                  onBlur={() => {
                    const n = parseInt(hour);
                    setHour(
                      (isNaN(n) ? 0 : Math.max(1, Math.min(12, n)))
                        .toString()
                        .padStart(2, "0")
                    );
                  }}
                  className="w-10 text-center outline-none"
                />
                <button type="button" onClick={incrementHour} className="text-lg px-2">
                  +
                </button>
              </div>

              <span className="text-xl">:</span>

              <div className="flex items-center border px-2 rounded">
                <button type="button" onClick={decrementMinute} className="text-lg px-2">
                  -
                </button>
                <input
                  value={minute}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (/^\d{0,2}$/.test(val)) setMinute(val);
                  }}
                  onBlur={() => {
                    const n = parseInt(minute);
                    setMinute(
                      (isNaN(n) ? 0 : Math.min(59, Math.max(0, n)))
                        .toString()
                        .padStart(2, "0")
                    );
                  }}
                  className="w-10 text-center outline-none"
                />
                <button type="button" onClick={incrementMinute} className="text-lg px-2">
                  +
                </button>
              </div>

              <select
                value={meridiem}
                onChange={(e) => setMeridiem(e.target.value)}
                className="ml-2 border border-gray-300 rounded px-2 py-1 text-sm"
              >
                <option value="a.m.">a.m.</option>
                <option value="p.m.">p.m.</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#71AC61] text-white py-2 rounded mt-4 hover:brightness-110 transition"
          >
            Update Trip
          </button>
        </form>
      </DrawerContent>
    </Drawer>
  );
}