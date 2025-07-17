"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TripCard from "@/features/trips/components/tripCard";

const dummyTrips = [
  { route: "ALLEN → CATARMAN", time: "9:00 PM", driver: "Juan Dela Cruz" },
  { route: "MANILA → DAVAO", time: "9:00 PM", driver: "Rage Del Fiero" },
];

export default function TripsOverview() {
  return (
    <div className="min-h-screen flex items-start justify-center p-5">
      <Card className="w-full max-w-4xl h-full min-h-[calc(100vh-40px)] overflow-y-auto p-5 ">
        <CardHeader className="border-b border-gray-300">
          <div className="flex flex-col items-center">
            <div className="w-16 h-1.5 rounded-full bg-[#90A38B] mb-2"></div>
            <CardTitle className="mt-2 font-extrabold text-[#456A3B]">
              Trips Overview
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="flex-1 overflow-y-auto mt-4">
          <div className="flex flex-col gap-y-4">
            {dummyTrips.map((trip, index) => (
              <TripCard
                key={index}
                route={trip.route}
                time={trip.time}
                driver={trip.driver}
              />
            ))}
          </div>
        </CardContent>
        <div className="flex mt-4 justify-center">
          <Button className="h-max w-[80%] bg-[#71AC61] hover:bg-[#456A3B] font-bold text-xl rounded-lg">
            Create Trip
          </Button>
        </div>
      </Card>
    </div>
  );
}
