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
import React, { useEffect, useState } from "react";

interface Driver {
  id: string;
  name: string;
}

interface Bus {
  id: string;
  plate_number: string;
}

interface Station {
  id: number;
  name: string;
}

interface TripPayload {
  start_time: string;
  end_time: string;
  bus_id: number;
  src_station_id: number;
  dest_station_id: number;
  driver_id: number;
}

export default function CreateTripModal() {
  const [stations, setStations] = useState<Station[]>([]);
  const [buses, setBuses] = useState<Bus[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    driver: "",
    source: "",
    destination: "",
    bus: "",
    hour: "12",
    minute: "00",
    meridiem: "a.m." as "a.m." | "p.m."
  });

  const drivers: Driver[] = [
    { id: "1", name: "Mark Reyes" },
    { id: "2", name: "Anthony Cruz" },
    { id: "3", name: "Jared Thompson" },
    { id: "4", name: "Samuel Diaz" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [stationsRes, busesRes] = await Promise.all([
          fetch('/api/station'),
          fetch('/api/bus')
        ]);

        if (!stationsRes.ok || !busesRes.ok) {
          throw new Error('Failed to fetch data');
        }

        const [stationsData, busesData] = await Promise.all([
          stationsRes.json(),
          busesRes.json()
        ]);

        setStations(stationsData.stations || stationsData);
        setBuses(busesData.buses || busesData);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleTimeChange = (type: 'hour' | 'minute', operation: 'increment' | 'decrement') => {
    setFormData(prev => {
      const current = parseInt(prev[type]);
      let newValue: number;

      if (type === 'hour') {
        newValue = operation === 'increment' 
          ? (current % 12) + 1 
          : (current - 2 + 12) % 12 + 1;
      } else {
        newValue = operation === 'increment' 
          ? (current + 1) % 60 
          : (current - 1 + 60) % 60;
      }

      return {
        ...prev,
        [type]: newValue.toString().padStart(2, "0")
      };
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (/^\d{0,2}$/.test(value)) {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleInputBlur = (type: 'hour' | 'minute') => {
    setFormData(prev => {
      const num = parseInt(prev[type]);
      const min = type === 'hour' ? 1 : 0;
      const max = type === 'hour' ? 12 : 59;
      
      const clamped = Math.max(min, Math.min(max, isNaN(num) ? min : num));
      return {
        ...prev,
        [type]: clamped.toString().padStart(2, "0")
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { driver, bus, source, destination, hour, minute, meridiem } = formData;

    if (!driver || !bus || !source || !destination) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      // Convert to 24-hour format
      let hours24 = parseInt(hour);
      if (meridiem === "p.m." && hours24 < 12) hours24 += 12;
      if (meridiem === "a.m." && hours24 === 12) hours24 = 0;

      const now = new Date();
      const startTime = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        hours24,
        parseInt(minute)
      );

      const endTime = new Date(startTime.getTime() + 60 * 60 * 1000); // +1 hour

      const payload: TripPayload = {
        start_time: startTime.toISOString(),
        end_time: endTime.toISOString(),
        bus_id: parseInt(bus),
        src_station_id: parseInt(source),
        dest_station_id: parseInt(destination),
        driver_id: parseInt(driver)
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

      alert("Trip created successfully!");
      // Reset form
      setFormData({
        driver: "",
        source: "",
        destination: "",
        bus: "",
        hour: "12",
        minute: "00",
        meridiem: "a.m."
      });
    } catch (err) {
      console.error("Error:", err);
      alert(err instanceof Error ? err.message : "An error occurred");
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-4">
        Loading data...
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
          className="flex flex-col gap-4 px-4 pb-6 overflow-y-auto flex-1 w-full"
        >
          {/* Driver Selection */}
          <div >
            <Label>Driver</Label>
            <Select 
              value={formData.driver} 
              onValueChange={value => setFormData(prev => ({ ...prev, driver: value }))}
            >
              <SelectTrigger className="w-full">
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
            <Label>Source Station</Label>
            <Select 
              value={formData.source} 
              onValueChange={value => setFormData(prev => ({ ...prev, source: value }))}
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
              onValueChange={value => setFormData(prev => ({ ...prev, destination: value }))}
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
              onValueChange={value => setFormData(prev => ({ ...prev, bus: value }))}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose Bus" />
              </SelectTrigger>
              <SelectContent>
                {buses.map(bus => (
                  <SelectItem key={bus.id} value={bus.id}>
                    {bus.plate_number}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Time Picker */}
          <div>
            <Label>Time</Label>
            <div className="flex items-center gap-2">
              {/* Hour */}
              <div className="flex items-center border rounded">
                <button 
                  type="button" 
                  onClick={() => handleTimeChange('hour', 'decrement')} 
                  className="px-2 py-1"
                >
                  -
                </button>
                <input
                  name="hour"
                  value={formData.hour}
                  onChange={handleInputChange}
                  onBlur={() => handleInputBlur('hour')}
                  className="w-10 text-center outline-none"
                  aria-label="Hour"
                />
                <button 
                  type="button" 
                  onClick={() => handleTimeChange('hour', 'increment')} 
                  className="px-2 py-1"
                >
                  +
                </button>
              </div>

              <span>:</span>

              {/* Minute */}
              <div className="flex items-center border rounded">
                <button 
                  type="button" 
                  onClick={() => handleTimeChange('minute', 'decrement')} 
                  className="px-2 py-1"
                >
                  -
                </button>
                <input
                  name="minute"
                  value={formData.minute}
                  onChange={handleInputChange}
                  onBlur={() => handleInputBlur('minute')}
                  className="w-10 text-center outline-none"
                  aria-label="Minute"
                />
                <button 
                  type="button" 
                  onClick={() => handleTimeChange('minute', 'increment')} 
                  className="px-2 py-1"
                >
                  +
                </button>
              </div>

              {/* AM/PM */}
              <select
                value={formData.meridiem}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  meridiem: e.target.value as "a.m." | "p.m."
                }))}
                className="border rounded px-2 py-1"
              >
                <option value="a.m.">a.m.</option>
                <option value="p.m.">p.m.</option>
              </select>
            </div>
          </div>

          <Button 
            type="submit" 
            className="bg-[#71AC61] hover:bg-[#456A3B] mt-4"
          >
            Create New Trip
          </Button>
        </form>
      </DrawerContent>
    </Drawer>
  );
}