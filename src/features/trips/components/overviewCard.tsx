"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TripCard from "@/features/trips/components/tripCard";
import CreateTripModal from "@/features/trips/components/CreateTrip";
import { useEffect, useState } from "react";
import { AggregatedTripType } from "../types/types";

export default function OverviewCard() {
  const [isLoading, setIsLoading] = useState(true);
  const [trips, setTrips] = useState<AggregatedTripType[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchTrips = async () => {
    try {
      const response = await fetch(`/api/trip/daily`);
      if (!response.ok) {
        throw new Error(response.statusText || "Failed to fetch trips");
      }
      const data = await response.json();
      console.log(data);

      const tripsData = Array.isArray(data.trips) ? data.trips : [];
      console.log(tripsData);
      setTrips(tripsData);
    } catch (err) {
      console.error("Error fetching trips:", err);
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchTrips();
  }, []);

  if (isLoading) {
    return <div className="text-center py-8 text-gray-500">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>;
  }

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
          {trips.length === 0 ? (
            <div className="text-center py-8 text-gray-500">No trips found</div>
          ) : (
            <div className="flex flex-col overflow-y-auto gap-y-4">
              {trips.map(trip => {
                if (trip.status !== "complete")
                  return (
                    <TripCard
                      key={trip.id} // ✅ add key prop
                      onSuccessEdit={fetchTrips}
                      trip={trip}
                    />
                  );
              })}
            </div>
          )}
        </CardContent>
        <div className="flex mt-4 justify-center">
          <CreateTripModal onTripCreated={fetchTrips} />
        </div>
      </Card>
    </div>
  );
}
