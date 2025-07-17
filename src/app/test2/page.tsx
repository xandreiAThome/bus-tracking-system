"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const Page = () => {
  const [price, setPrice] = useState("");
  const [selectedType, setSelectedType] = useState("passenger");
  const [selectedSeat, setSelectedSeat] = useState<number | null>(1);
  const [previousSeat, setPreviousSeat] = useState<number | null>(1);
  const [selectedStanding, setSelectedStanding] = useState<string | null>(null);

  const seats = Array.from({ length: 36 }, (_, i) => i + 1);
  const unavailableSeats = [5, 12, 18, 25, 31];

  return (
    <div className="min-h-screen bg-[#71AC61] flex flex-col items-center justify-center p-4">
      <h1 className="text-lg font-semibold text-center mb-3 text-[#FFFFFF]">
        Issue Tickets
      </h1>
      <Tabs
        value={selectedType}
        onValueChange={setSelectedType}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-2 pb-2 p-0 -my-2.5 bg-[#71AC61]">
          <TabsTrigger
            value="passenger"
            className="bg-[#71AC61] text-white data-[state=active]:bg-white data-[state=active]:text-[#71AC61] border rounded-b-none pb-4"
          >
            Passenger
          </TabsTrigger>
          <TabsTrigger
            value="baggage"
            className="bg-[#71AC61] text-white data-[state=active]:bg-white data-[state=active]:text-[#71AC61] border rounded-b-none pb-4"
          >
            Baggage
          </TabsTrigger>
        </TabsList>
        <div className="p-4 bg-white border rounded-sm">
          <TabsContent value="passenger" className="space-y-4 mt-4">
            {/* Trip Selection */}
            <div className="flex gap-4 justify-center items-center border rounded-xl">
              <label className="text-sm font-medium ml-5 mr-10">Trip</label>
              <Select defaultValue="allen-catarman">
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="allen-catarman">
                    ALLEN → CATARMAN
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Assigned Seat */}
            <div className="border rounded-lg p-3 transition-colors bg-white">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Assigned Seat</span>
                <span className="text-sm text-gray-600">
                  {selectedSeat === null ? "Standing" : `Seat #${selectedSeat}`}
                </span>
              </div>

              {/* ⬇️ Make this div relative to allow absolute overlay inside it */}
              <div className="relative">
                <div className="grid grid-cols-6 gap-1 mb-3">
                  {seats.map(seat => (
                    <button
                      key={seat}
                      onClick={() => setSelectedSeat(seat)}
                      disabled={unavailableSeats.includes(seat)}
                      className={`
                          w-8 h-8 text-xs rounded border
                          ${
                            selectedSeat === seat
                              ? "bg-green-500 text-white border-green-500"
                              : unavailableSeats.includes(seat)
                                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                : "bg-white border-gray-300 hover:border-green-400"
                          }
                        `}
                    >
                      {seat}
                    </button>
                  ))}
                </div>

                {/* 🔒 Overlay only over the seat grid */}
                {selectedSeat === null && (
                  <div className="absolute top-0 left-0 w-full h-full bg-gray-300/80 z-50 rounded-md pointer-events-none" />
                )}
              </div>

              <div className="text-center mt-2">
                {/* Standing Button */}
                <button
                  onClick={() => {
                    if (selectedSeat === null) {
                      setSelectedSeat(1); // Or previousSeat if you store it
                    } else {
                      setSelectedSeat(null);
                    }
                  }}
                  className={`w-full border border-solid text-sm font-medium rounded-md p-1
                      ${selectedSeat === null ? "bg-[#71AC61] text-white border-gray-400" : "border-[#456A3B] data-[state=active]:text-white"}
                    `}
                >
                  Standing
                </button>

                <div className="flex justify-center gap-2 mt-2">
                  {["Student", "Senior", "PWD"].map(type => (
                    <button
                      key={type}
                      onClick={() =>
                        setSelectedStanding(
                          selectedStanding === type ? null : type
                        )
                      }
                      className={`
                          px-3 py-1 text-xs rounded border w-full
                          ${
                            selectedStanding === type
                              ? "bg-[#71AC61] text-white border-green-500"
                              : "bg-white border-gray-300 hover:border-green-400"
                          }
                        `}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Pricing Section */}
            <div className="mt-4">
              <label className="text-sm font-medium mb-2 block">Pricing</label>
              <Input
                placeholder="Input"
                value={price}
                onChange={e => setPrice(e.target.value)}
                className="mb-3"
              />
              <div className="grid grid-cols-3 gap-2">
                {[50, 137, 222].map(amt => (
                  <Button
                    key={amt}
                    variant="outline"
                    className="h-10 bg-transparent"
                    onClick={() => setPrice(String(amt))}
                  >
                    {amt}
                  </Button>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="baggage" className="space-y-4 mt-4">
            {/* Trip Selection */}
            <div>
              <label className="text-sm font-medium mb-1 block">Trip</label>
              <Select defaultValue="allen-catarman">
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="allen-catarman">
                    ALLEN → CATARMAN
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Departure Date */}
            <div>
              <label className="text-sm font-medium mb-1 block">
                Departure Date
              </label>
              <div className="flex gap-1">
                <Input placeholder="MM" className="flex-1" />
                <span className="flex items-center">/</span>
                <Input placeholder="DD" className="flex-1" />
                <span className="flex items-center">/</span>
                <Input placeholder="YYYY" className="flex-1" />
              </div>
            </div>

            {/* Time */}
            <div>
              <label className="text-sm font-medium mb-1 block">Time</label>
              <div className="flex gap-2 items-center">
                <div className="flex items-center gap-1">
                  <Input placeholder="HH" className="w-12 text-center" />
                  <span>:</span>
                  <Input placeholder="MM" className="w-12 text-center" />
                </div>
                <Select defaultValue="pm">
                  <SelectTrigger className="w-16">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="am">a.m.</SelectItem>
                    <SelectItem value="pm">p.m.</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Sender and Dispatcher Numbers */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-medium mb-1 block">
                  Sender no.
                </label>
                <Input placeholder="" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">
                  Dispatcher no.
                </label>
                <Input placeholder="" />
              </div>
            </div>

            {/* Sender and Receiver */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-medium mb-1 block">Sender</label>
                <Input placeholder="Input" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">
                  Receiver
                </label>
                <Input placeholder="Input" />
              </div>
            </div>

            {/* Item */}
            <div>
              <label className="text-sm font-medium mb-1 block">Item</label>
              <Input placeholder="Input" />
            </div>

            {/* Pricing Section */}
            <div className="mt-4">
              <label className="text-sm font-medium mb-2 block">Pricing</label>
              <Input
                placeholder="Input"
                value={price}
                onChange={e => setPrice(e.target.value)}
                className="mb-3"
              />
              <div className="grid grid-cols-3 gap-2">
                {[50, 137, 222].map(amt => (
                  <Button
                    key={amt}
                    variant="outline"
                    className="h-10 bg-transparent"
                    onClick={() => setPrice(String(amt))}
                  >
                    {amt}
                  </Button>
                ))}
              </div>
            </div>
          </TabsContent>
        </div>
      </Tabs>

      {/* Create Ticket Button */}
      <Button className="w-full mt-6 bg-[#99C68B] hover:bg-green-600 text-white">
        Create Ticket
      </Button>
    </div>
  );
};

export default Page;
