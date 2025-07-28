import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

import { Trip } from "@/features/reports/types/types";

interface TripSummaryProps {
  todayTrips: Trip[];
  monthTrips: Trip[];
  selectedTrip: number | null;
  setSelectedTrip: (id: number) => void;
  trips: Trip[];
}

export function TripSummary({
  todayTrips,
  monthTrips,
  selectedTrip,
  setSelectedTrip,
  trips,
}: TripSummaryProps) {
  return (
    <Card className="mb-6 border-green-600 pt-0">
      <CardHeader className="bg-green-600 text-white rounded-t-lg py-0">
        <CardTitle className="text-lg -pt-6">Teller Reports</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div>
            <span className="font-semibold">Total Trips Today:</span>{" "}
            <span className="text-green-700 font-bold">
              {todayTrips.length}
            </span>
          </div>
          <div>
            <span className="font-semibold">Total Trips This Month:</span>{" "}
            <span className="text-green-700 font-bold">
              {monthTrips.length}
            </span>
          </div>
          <div>
            <label className="font-semibold mr-2">Select Trip:</label>
            <select
              className="border rounded px-2 py-1 text-green-700"
              value={selectedTrip || ""}
              onChange={e => setSelectedTrip(Number(e.target.value))}
            >
              {trips.map(trip => (
                <option key={trip.id} value={trip.id}>
                  Trip #{trip.id} ({trip.teller}, {trip.date})
                </option>
              ))}
            </select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
