"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TripCard from "@/features/trips/components/tripCard";
import CreateTripModal from "@/features/trips/components/CreateTrip";
import { useEffect, useState } from "react";

interface Trip {
  id: number;
  start_time: string;
  end_time: string;
  dest_station_id: number;
  src_station_id: number;
  bus_id: number;
  driver_id: number;
  status: string | null;
  driver_name?: string;
  src_station_name?: string;
  dest_station_name?: string;
}

export default function OverviewCard() {
  const [isLoading, setIsLoading] = useState(true);
  const [trips, setTrips] = useState<Trip[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await fetch('/api/trip', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });

        console.trace('headers used')

        if (!response.ok) {
          throw new Error(response.statusText || "Failed to fetch trips");
        }

        const data = await response.json();
        console.log("Fetched trip data:", data);
        //const tripsData = Array.isArray(data.trips) ? data.trips : Array.isArray(data) ? data : [];
        setTrips(data.trips || data);
      } catch (err) {
        console.error("Error fetching trips:", err);
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrips();
  }, []);

  return (
    <div className="h-full flex items-start justify-center p-5">
      <Card className="w-full max-w-4xl h-full min-h-[calc(100vh-40px)] overflow-y-auto p-5 ">
        <CardHeader className="border-b border-gray-300">
          <div className="flex flex-col items-center">
            <CardTitle className="mt-2 font-extrabold text-[#456A3B]">
              Trips Overview
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="flex-1 mt-4">
          {isLoading ? (
            <div className="flex flex-col gap-y-4">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="h-32 w-full bg-gray-200 rounded-lg animate-pulse"
                ></div>
              ))}
            </div>
          ) : error ? (
            // Error state
            <div className="text-center text-red-500 py-8">
              <p>Failed to load trips: {error}</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-2 text-sm underline"
              >
                Try again
              </button>
            </div>
          ) : trips.length === 0 ? (
            <div className="text-center py-8 text-gray-500">No trips found</div>
          ) : (
            <div className="flex flex-col overflow-y-auto gap-y-4">
              {trips.map((trip, index) => (
                <TripCard
                  key={index}
                  id={trip.id}
                  start={trip.start_time}
                  end={trip.end_time}
                  dst={trip.dest_station_id}
                  src={trip.src_station_id}
                  bus={trip.bus_id}
                  driver_id={trip.driver_id}
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
