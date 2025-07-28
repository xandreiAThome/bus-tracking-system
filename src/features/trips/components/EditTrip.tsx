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
import { SquarePen } from "lucide-react";
import React, { useState, useEffect } from "react";

interface EditTripModalProps {
  tripId: number;
  onSuccess?: () => void;
  onClose?: () => void;
}

interface Driver {
  id: number;
  first_name: string;
  last_name: string;
}

interface Bus {
  id: number;
  plate_number: string;
}

interface Station {
  id: number;
  name: string;
}

export default function EditTripModal({ tripId, onSuccess, onClose }: EditTripModalProps) {
  const [stations, setStations] = useState<Station[]>([]);
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [buses, setBuses] = useState<Bus[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    driver_id: "",
    bus_id: "",
    src_station_id: "",
    dest_station_id: ""
  });

  const [startTime, setStartTime] = useState({
    hour: "12",
    minute: "00",
    meridiem: "a.m." as "a.m." | "p.m."
  });

  const [endTime, setEndTime] = useState({
    hour: "1",
    minute: "00",
    meridiem: "a.m." as "a.m." | "p.m."
  });

  // Time handling functions
  const handleTimeChange = (timeType: 'start' | 'end', field: 'hour' | 'minute', operation: 'increment' | 'decrement') => {
    const setTime = timeType === 'start' ? setStartTime : setEndTime;
    const time = timeType === 'start' ? startTime : endTime;

    setTime(prev => {
      const current = parseInt(prev[field]);
      let newValue: number;

      if (field === 'hour') {
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
        [field]: newValue.toString().padStart(2, "0")
      };
    });
  };

  const handleInputChange = (timeType: 'start' | 'end', field: 'hour' | 'minute', value: string) => {
    const setTime = timeType === 'start' ? setStartTime : setEndTime;
    
    if (/^\d{0,2}$/.test(value)) {
      setTime(prev => ({ ...prev, [field]: value }));
    }
  };

  const handleInputBlur = (timeType: 'start' | 'end', field: 'hour' | 'minute') => {
    const setTime = timeType === 'start' ? setStartTime : setEndTime;
    const time = timeType === 'start' ? startTime : endTime;

    setTime(prev => {
      const num = parseInt(prev[field]);
      const min = field === 'hour' ? 1 : 0;
      const max = field === 'hour' ? 12 : 59;
      
      const clamped = Math.max(min, Math.min(max, isNaN(num) ? min : num));
      return {
        ...prev,
        [field]: clamped.toString().padStart(2, "0")
      };
    });
  };

  const handleMeridiemChange = (timeType: 'start' | 'end', value: "a.m." | "p.m.") => {
    const setTime = timeType === 'start' ? setStartTime : setEndTime;
    setTime(prev => ({ ...prev, meridiem: value }));
  };

  useEffect(() => {
    if (!isOpen) return;

    const fetchData = async () => {
      try {
        // Fetch trip data
        const tripRes = await fetch(`/api/trip/${tripId}`);
        if (!tripRes.ok) throw new Error('Failed to fetch trip data');
        const tripData = await tripRes.json();

        // Set form data
        setFormData({
          driver_id: tripData.driver?.id?.toString() || "",
          bus_id: tripData.bus?.id?.toString() || "",
          src_station_id: tripData.src_station?.id?.toString() || "",
          dest_station_id: tripData.dest_station?.id?.toString() || ""
        });

        // Parse and set times
        if (tripData.start_time) {
          const startDate = new Date(tripData.start_time);
          let startHour = startDate.getHours();
          const startMeridiem = startHour >= 12 ? "p.m." : "a.m.";
          startHour = startHour % 12 || 12; // Convert to 12-hour format

          setStartTime({
            hour: startHour.toString().padStart(2, "0"),
            minute: startDate.getMinutes().toString().padStart(2, "0"),
            meridiem: startMeridiem
          });
        }

        if (tripData.end_time) {
          const endDate = new Date(tripData.end_time);
          let endHour = endDate.getHours();
          const endMeridiem = endHour >= 12 ? "p.m." : "a.m.";
          endHour = endHour % 12 || 12; // Convert to 12-hour format

          setEndTime({
            hour: endHour.toString().padStart(2, "0"),
            minute: endDate.getMinutes().toString().padStart(2, "0"),
            meridiem: endMeridiem
          });
        }

        // Fetch stations
        const stationsRes = await fetch('/api/station');
        if (!stationsRes.ok) throw new Error('Failed to fetch stations');
        const stationsData = await stationsRes.json();
        setStations(stationsData.data || stationsData.stations || []);

        // Fetch drivers
        const driversRes = await fetch('/api/driver');
        if (!driversRes.ok) throw new Error('Failed to fetch drivers');
        const driversData = await driversRes.json();
        setDrivers(driversData.data || driversData.drivers || []);

        // Fetch buses
        const busesRes = await fetch('/api/bus');
        if (!busesRes.ok) throw new Error('Failed to fetch buses');
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
  }, [isOpen, tripId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.driver_id && !formData.bus_id && !formData.src_station_id && !formData.dest_station_id) {
      alert("Please fill in at least one field");
      return;
    }

    // Convert times to 24-hour format
    const convertTo24Hour = (time: typeof startTime) => {
      let hours = parseInt(time.hour);
      if (time.meridiem === "p.m." && hours < 12) hours += 12;
      if (time.meridiem === "a.m." && hours === 12) hours = 0;
      return { hours, minutes: parseInt(time.minute) };
    };

    const start = convertTo24Hour(startTime);
    const end = convertTo24Hour(endTime);

    // Create date objects
    const now = new Date();
    const startDate = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      start.hours,
      start.minutes
    );

    const endDate = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      end.hours,
      end.minutes
    );

    // Validate time range
    if (endDate <= startDate) {
      alert("End time must be after start time");
      return;
    }

    try {
      const res = await fetch(`/api/trip/${tripId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          driver_id: formData.driver_id ? parseInt(formData.driver_id) : undefined,
          bus_id: formData.bus_id ? parseInt(formData.bus_id) : undefined,
          src_station_id: formData.src_station_id ? parseInt(formData.src_station_id) : undefined,
          dest_station_id: formData.dest_station_id ? parseInt(formData.dest_station_id) : undefined,
          start_time: startDate.toISOString(),
          end_time: endDate.toISOString()
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to update trip");
      }

      alert("Trip updated successfully!");
      if (onSuccess) onSuccess();
      setIsOpen(false);
      if (onClose) onClose();
    } catch (err) {
      console.error("Error updating trip:", err);
      alert(err instanceof Error ? err.message : "Failed to update trip");
    }
  };

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Edit trip">
          <SquarePen className="h-5 w-5" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="p-6 max-h-[90vh] flex flex-col">
        <DrawerHeader>
          <DrawerTitle className="text-center text-[#71AC61]">Edit Trip</DrawerTitle>
          <hr className="border-t-2 mt-2 mb-4" />
        </DrawerHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 px-4 pb-6 overflow-y-auto flex-1">
          {/* Driver */}
          <div>
            <Label>Driver</Label>
            <Select 
              value={formData.driver_id} 
              onValueChange={(value) => setFormData({...formData, driver_id: value})}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose Driver" />
              </SelectTrigger>
              <SelectContent>
                {drivers.map((driver) => (
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
            <Select 
              value={formData.src_station_id} 
              onValueChange={(value) => setFormData({...formData, src_station_id: value})}
            >
              <SelectTrigger className="w-full">
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
            <Label>Destination Station</Label>
            <Select 
              value={formData.dest_station_id} 
              onValueChange={(value) => setFormData({...formData, dest_station_id: value})}
            >
              <SelectTrigger className="w-full">
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
            <Label>Bus</Label>
            <Select 
              value={formData.bus_id} 
              onValueChange={(value) => setFormData({...formData, bus_id: value})}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose Bus" />
              </SelectTrigger>
              <SelectContent>
                {buses.map((bus) => (
                  <SelectItem key={bus.id} value={bus.id.toString()}>
                    {bus.plate_number}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-around">
            {/* Start Time Picker */}
            <div>
              <Label>Start Time</Label>
              <div className="flex items-center gap-2">
                {/* Hour */}
                <div className="flex items-center border rounded">
                  <button 
                    type="button" 
                    onClick={() => handleTimeChange('start', 'hour', 'decrement')} 
                    className="px-2 py-1"
                  >
                    -
                  </button>
                  <input
                    value={startTime.hour}
                    onChange={(e) => handleInputChange('start', 'hour', e.target.value)}
                    onBlur={() => handleInputBlur('start', 'hour')}
                    className="w-10 text-center outline-none"
                    aria-label="Hour"
                  />
                  <button 
                    type="button" 
                    onClick={() => handleTimeChange('start', 'hour', 'increment')} 
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
                    onClick={() => handleTimeChange('start', 'minute', 'decrement')} 
                    className="px-2 py-1"
                  >
                    -
                  </button>
                  <input
                    value={startTime.minute}
                    onChange={(e) => handleInputChange('start', 'minute', e.target.value)}
                    onBlur={() => handleInputBlur('start', 'minute')}
                    className="w-10 text-center outline-none"
                    aria-label="Minute"
                  />
                  <button 
                    type="button" 
                    onClick={() => handleTimeChange('start', 'minute', 'increment')} 
                    className="px-2 py-1"
                  >
                    +
                  </button>
                </div>

                {/* AM/PM */}
                <select
                  value={startTime.meridiem}
                  onChange={(e) => handleMeridiemChange('start', e.target.value as "a.m." | "p.m.")}
                  className="border rounded px-2 py-1"
                >
                  <option value="a.m.">a.m.</option>
                  <option value="p.m.">p.m.</option>
                </select>
              </div>
            </div>

            {/* End Time Picker */}
            <div>
              <Label>End Time</Label>
              <div className="flex items-center gap-2">
                {/* Hour */}
                <div className="flex items-center border rounded">
                  <button 
                    type="button" 
                    onClick={() => handleTimeChange('end', 'hour', 'decrement')} 
                    className="px-2 py-1"
                  >
                    -
                  </button>
                  <input
                    value={endTime.hour}
                    onChange={(e) => handleInputChange('end', 'hour', e.target.value)}
                    onBlur={() => handleInputBlur('end', 'hour')}
                    className="w-10 text-center outline-none"
                    aria-label="Hour"
                  />
                  <button 
                    type="button" 
                    onClick={() => handleTimeChange('end', 'hour', 'increment')} 
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
                    onClick={() => handleTimeChange('end', 'minute', 'decrement')} 
                    className="px-2 py-1"
                  >
                    -
                  </button>
                  <input
                    value={endTime.minute}
                    onChange={(e) => handleInputChange('end', 'minute', e.target.value)}
                    onBlur={() => handleInputBlur('end', 'minute')}
                    className="w-10 text-center outline-none"
                    aria-label="Minute"
                  />
                  <button 
                    type="button" 
                    onClick={() => handleTimeChange('end', 'minute', 'increment')} 
                    className="px-2 py-1"
                  >
                    +
                  </button>
                </div>

                {/* AM/PM */}
                <select
                  value={endTime.meridiem}
                  onChange={(e) => handleMeridiemChange('end', e.target.value as "a.m." | "p.m.")}
                  className="border rounded px-2 py-1"
                >
                  <option value="a.m.">a.m.</option>
                  <option value="p.m.">p.m.</option>
                </select>
              </div>
            </div>
          </div>

          <Button 
            type="submit" 
            className="bg-[#71AC61] hover:bg-[#456A3B] mt-4"
          >
            Update Trip
          </Button>
        </form>
      </DrawerContent>
    </Drawer>
  );
}