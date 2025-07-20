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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import React, { useState } from "react";

export default function CreateTripModal() {

  const stations = [
    "Manila",
    "Quezon City",
    "Makati",
    "Taguig",
    "Mandaluyong",
    "Pasig"
  ];

  const drivers = [
    "Mark Reyes",
    "Anthony Cruz",
    "Jared Thompson",
    "Samuel Diaz",
    "Robert Castillo",
    "Luis Santiago",
    "Joseph Kim",
    "JJ Rivera"
  ]

  const [hour, setHour] = useState("00");
  const [minute, setMinute] = useState("00");
  const [meridiem, setMeridiem] = useState("a.m.");

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

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="h-max bg-[#71AC61] hover:bg-[#456A3B] font-bold text-xl rounded-lg">
          Create Trip
        </Button>
      </DrawerTrigger>

      {/* bg-[#B1B1B1] */}
      <DrawerContent className="p-6 max-h-[90vh] flex flex-col">
        <DrawerHeader>
          <DrawerTitle className="text-center text-[#71AC61]">
            Create Trip
          </DrawerTitle>
          <hr className="border-t-2 mt-2 mb-4" />
        </DrawerHeader>

        <form className="flex flex-col gap-4 px-4 pb-6 overflow-y-auto flex-1">
        <div>
            <Label className="block text-sm font-medium text-gray-700 mb-1">
              Driver
            </Label>

            <Select>
            <SelectTrigger className="w-full justify-start px-0">
              <SelectValue placeholder="Choose Driver" />
            </SelectTrigger>
              <SelectContent>
                {drivers.map((driver) => (
                  <SelectItem key={driver} value={driver}>{driver}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-1">
              Source Station
            </Label>

            <Select>
            <SelectTrigger className="w-full justify-start px-0">
              <SelectValue placeholder="Choose Source" />
            </SelectTrigger>
              <SelectContent>
                {stations.map((station) => (
                  <SelectItem key={station} value={station}>{station}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-1">
              Destination Station
            </Label>

            <Select>
              <SelectTrigger className="w-full justify-start px-0">
                <SelectValue placeholder="Choose Destination"/>
              </SelectTrigger>
              <SelectContent>
                {stations.map((station) => (
                  <SelectItem key={station} value={station}>{station}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-1">
              Bus
            </Label>
            <Select>
              <SelectTrigger className="w-full justify-start px-0">
                <SelectValue placeholder="Choose Bus"/>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="station">Bus1</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Time
            </label>
            <div className="flex items-center gap-2">
              {/* Hour */}
              <div className="flex items-center border px-2 rounded">
                <button
                  type="button"
                  onClick={decrementHour}
                  className="text-lg px-2"
                >
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
                />
                <button
                  type="button"
                  onClick={incrementHour}
                  className="text-lg px-2"
                >
                  +
                </button>
              </div>

              <span className="text-xl">:</span>

              {/* Minute */}
              <div className="flex items-center border px-2 rounded">
                <button
                  type="button"
                  onClick={decrementMinute}
                  className="text-lg px-2"
                >
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
                />
                <button
                  type="button"
                  onClick={incrementMinute}
                  className="text-lg px-2"
                >
                  +
                </button>
              </div>

              {/* Meridiem */}
              <select
                value={meridiem}
                onChange={e => setMeridiem(e.target.value)}
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
            Create New Trip
          </button>
        </form>
      </DrawerContent>
    </Drawer>
  );
}
