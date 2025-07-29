"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CreateTripModal from "@/features/trips/components/CreateTrip";
import TripsList from "@/features/trips/components/tripList";

export default function TripsOverview() {
  return (
    <div className="h-full flex items-start justify-center p-5">
      <Card className="w-full max-w-4xl h-full min-h-[calc(100vh-40px)] overflow-y-auto p-5">
        <CardHeader className="border-b border-gray-300">
          <div className="flex flex-col items-center">
            <CardTitle className="mt-2 font-extrabold text-[#456A3B]">
              Trips Overview
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="flex-1 mt-4">
          <TripsList />
        </CardContent>
        <div className="flex mt-4 justify-center pb-4">
          <CreateTripModal onTripCreated={() => window.location.reload()} />
        </div>
      </Card>
    </div>
  );
}
