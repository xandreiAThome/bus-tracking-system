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

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await fetch("/api/trip");
        if (!response.ok) {
          throw new Error(response.statusText || "Failed to fetch trips");
        }
        const data = await response.json();

        const tripsData = data.data || data.mappedTrips || [];
        console.log(tripsData)
        setTrips(tripsData);
      } catch (err) {
        console.error("Error fetching trips:", err);
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      } finally {
        setIsLoading(false);
      }
    };
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
              {trips.map((trip) => (
                <TripCard
                  key={trip.id}          // ✅ add key prop
                  id={trip.id}           // ✅ use actual trip.id
                  start_time={trip.start_time}
                  end_time={trip.end_time}
                  dest_station={trip.dest_station}
                  src_station={trip.src_station}
                  bus={trip.bus}
                  driver={trip.driver}
                  status={trip.status}
                />
              ))}
            </div>
          )}
        </CardContent>
        <div className="flex mt-4 justify-center">
          <CreateTripModal />
        </div>
      </Card>
    </div>
  );
}
