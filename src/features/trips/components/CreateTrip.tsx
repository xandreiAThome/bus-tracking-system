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

import React, { useState } from "react";

export default function CreateTripModal() {
  const [stations, setStations] = useState<Station[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const [driver, setDriver] = useState("");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [bus, setBus] = useState("");

  const [hour, setHour] = useState("00");
  const [minute, setMinute] = useState("00");
  const [meridiem, setMeridiem] = useState<"a.m." | "p.m.">("a.m.");

  const drivers: Driver[] = [
    { id: "1", name: "Mark Reyes" },
    { id: "2", name: "Anthony Cruz" },
    { id: "3", name: "Jared Thompson" },
    { id: "4", name: "Samuel Diaz" },
  ];

  const buses: Bus[] = [
    { id: "1", name: "Bus1" },
    { id: "2", name: "Bus2" },
    { id: "3", name: "Bus3" },
  ];

  useEffect(() => {
    const fetchStations = async () => {
      setIsLoading(true);

      try {
        const response = await fetch('/api/station', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) {
          throw new Error(`status: ${response.status}`);
        }

        const data = await response.json();
        setStations(data.stations || data);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStations();
  }, []);

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

    console.log("Trip payload to be submitted:", payload);

    try {
      const res = await fetch("/api/trip", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error("Failed to create trip:", errorData);
        alert(`Error: ${errorData.message || "Failed to create trip"}`);
      } else {
        alert("Trip created successfully!");
        // Reset form
        setDriver("");
        setBus("");
        setSource("");
        setDestination("");
        setHour("00");
        setMinute("00");
        setMeridiem("a.m.");
      }
    } catch (err) {
      console.error("Network error:", err);
      alert("Network error occurred.");
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-4">
        Loading stations...
      </div>
    );
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="h-max bg-[#71AC61] hover:bg-[#456A3B] font-bold text-xl rounded-lg">
          Create Trip
        </Button>
      </DrawerTrigger>

      <DrawerContent className="p-6 max-h-[90vh] flex flex-col">
        <DrawerHeader>
          <DrawerTitle className="text-center text-[#71AC61]">
            Create Trip
          </DrawerTitle>
          <hr className="border-t-2 mt-2 mb-4" />
        </DrawerHeader>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 px-4 pb-6 overflow-y-auto flex-1"
        >
          {/* Driver */}
          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-1">
              Driver
            </Label>
            <Select value={driver} onValueChange={setDriver}>
              <SelectTrigger className="w-full justify-start px-0">
                <SelectValue placeholder="Choose Driver" />
              </SelectTrigger>
              <SelectContent>
                {drivers.map(driver => (
                  <SelectItem key={driver.id} value={driver.id}>
                    {driver.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Source Station */}
          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-1">
              Source Station
            </Label>
            <Select value={source} onValueChange={setSource}>
              <SelectTrigger className="w-full justify-start px-0">
                <SelectValue placeholder="Choose Source" />
              </SelectTrigger>
              <SelectContent>
                {stations.map((station) => (
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
                {stations.map((station) => (
                  <SelectItem key={station.id} value={station.id.toString()}>
                    {station.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Bus */}
          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-1">
              Bus
            </Label>
            <Select value={bus} onValueChange={setBus}>
              <SelectTrigger className="w-full justify-start px-0">
                <SelectValue placeholder="Choose Bus" />
              </SelectTrigger>
              <SelectContent>
                {buses.map(bus => (
                  <SelectItem key={bus.id} value={bus.id}>
                    {bus.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Time Picker */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Time
            </label>
            <div className="flex items-center gap-2">
              <div className="flex items-center border px-2 rounded">
                <button type="button" onClick={decrementHour} className="text-lg px-2">
                  -
                </button>
                <input
                  value={hour}
                  onChange={e => {
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
                  aria-label="Hour"
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
                  onChange={e => {
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
                  aria-label="Minute"
                />
                <button type="button" onClick={incrementMinute} className="text-lg px-2">
                  +
                </button>
              </div>

              <select
                value={meridiem}
                onChange={(e) => setMeridiem(e.target.value as "a.m." | "p.m.")}
                className="ml-2 border border-gray-300 rounded px-2 py-1 text-sm"
                aria-label="AM/PM"
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
            Create New Trip
          </button>
        </form>
      </DrawerContent>
    </Drawer>
  );
}