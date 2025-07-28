"use client";
import React, { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
// import { TripSummary } from "@/features/reports/components/reportsSummary";
import { PassengerTicketsTable } from "./passengerTicketsTable";
import { BaggageTicketsTable } from "./baggageTicketsTable";
import { AggregatedTicketType } from "@/features/ticket/types/types";
import { AggregatedTripType } from "@/features/trips/types/types";

export default function ReportsClient() {
  const [selectedTrip, setSelectedTrip] = useState<number | null>(null);
  const [passengerTickets, setPassengerTickets] = useState<
    AggregatedTicketType[]
  >([]);
  const [baggageTickets, setBaggageTickets] = useState<AggregatedTicketType[]>(
    []
  );
  const [tripsList, setTripsList] = useState<AggregatedTripType[]>([]);
  const [day, setDay] = useState<string>("");

  useEffect(() => {
    if (day) {
      console.log(day);
      fetch(`/api/trip/daily?date=${day}`)
        .then(res => res.json())
        .then(data => {
          // If API returns { trips: [...] }
          let trips = [];
          if (Array.isArray(data)) {
            trips = data;
          } else if (Array.isArray(data?.trips)) {
            trips = data.trips;
          }
          setTripsList(trips);
          setSelectedTrip(trips[0]?.id || null);
        });
    }
  }, [day]);

  useEffect(() => {
    if (selectedTrip) {
      // Fetch passenger tickets
      fetch(`/api/ticket/passenger/trip/${selectedTrip}`)
        .then(res => res.json())
        .then(data => {
          setPassengerTickets(data.tickets || []);
        });
      // Fetch baggage tickets
      fetch(`/api/ticket/baggage/trip/${selectedTrip}`)
        .then(res => res.json())
        .then(data => {
          setBaggageTickets(data.tickets || []);
        });
    }
  }, [selectedTrip]);

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="mb-6">
        <div className="text-2xl font-bold text-green-700 mb-2">
          Tellers Report
        </div>
        <div className="bg-green-50 border border-green-400 rounded-lg p-4 flex flex-col md:flex-row gap-4 items-center shadow">
          <div className="flex gap-4 items-center">
            <label className="flex items-center gap-1 font-semibold text-green-700">
              <span className="mr-2">Day</span>
              <Input
                type="date"
                value={day}
                onChange={e => setDay(e.target.value)}
                className="w-[180px] text-green-700 font-semibold"
              />
            </label>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-semibold text-green-700">Select Trip:</label>
            <Select
              value={selectedTrip ? String(selectedTrip) : ""}
              onValueChange={val => setSelectedTrip(Number(val))}
            >
              <SelectTrigger
                className="w-[220px] text-green-700 font-semibold"
                aria-label="Select Trip"
              >
                <SelectValue placeholder="Select a trip" />
              </SelectTrigger>
              <SelectContent>
                {Array.isArray(tripsList) &&
                  tripsList.map(trip => (
                    <SelectItem key={trip.id} value={String(trip.id)}>
                      Trip {trip.src_station.name} {"-> "}
                      {trip.dest_station.name}{" "}
                      {trip?.start_time
                        ? new Date(trip.start_time).toLocaleString()
                        : ""}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <Tabs defaultValue="passenger" className="w-full">
        <TabsList className="flex justify-center bg-green-100 rounded mb-4">
          <TabsTrigger
            value="passenger"
            className="text-green-700 data-[state=active]:bg-green-600 data-[state=active]:text-white"
          >
            Passenger Tickets
          </TabsTrigger>
          <TabsTrigger
            value="baggage"
            className="text-green-700 data-[state=active]:bg-green-600 data-[state=active]:text-white"
          >
            Baggage Tickets
          </TabsTrigger>
        </TabsList>
        <TabsContent value="passenger">
          <PassengerTicketsTable
            tickets={passengerTickets}
            selectedTrip={tripsList.find(trip => trip.id === selectedTrip)}
          />
        </TabsContent>
        <TabsContent value="baggage">
          <BaggageTicketsTable
            tickets={baggageTickets}
            selectedTrip={tripsList.find(trip => trip.id === selectedTrip)}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
