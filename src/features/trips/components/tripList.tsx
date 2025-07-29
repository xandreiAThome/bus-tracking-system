"use client";

import React, { useEffect, useState } from "react";
import TripCard from "./tripCard";

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

function TripsList() {
  const [isLoading, setIsLoading] = useState(true);
  const [trips, setTrips] = useState<Trip[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await fetch("/api/trip", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
          throw new Error(response.statusText || "Failed to fetch trips");
        }

        const data = await response.json();
        const tripsData = Array.isArray(data.trips)
          ? data.trips
          : Array.isArray(data)
            ? data
            : [];
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

    fetchTrips();
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col gap-y-4">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="h-32 w-full bg-gray-200 rounded-lg animate-pulse"
          ></div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 py-8">
        <p>Failed to load trips: {error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-2 text-sm underline"
        >
          Try again
        </button>
      </div>
    );
  }

  if (trips.length === 0) {
    return <div className="text-center py-8 text-gray-500">No trips found</div>;
  }

  return (
    <div className="flex flex-col overflow-y-auto gap-y-4">
      {trips.map(trip => (
        <TripCard
          key={trip.id}
          tripId={trip.id}
          route={
            trip.src_station_name && trip.dest_station_name
              ? `${trip.src_station_name} → ${trip.dest_station_name}`
              : `Station ${trip.src_station_id} → Station ${trip.dest_station_id}`
          }
          time={formatTime(trip.start_time)}
          driver={trip.driver_name || `Driver ID: ${trip.driver_id}`}
          status={trip.status || "boarding"}
        />
      ))}
    </div>
  );
}

// Helper function to format time
function formatTime(timeString: string): string {
  try {
    return new Date(timeString).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return timeString;
  }
}

export default TripsList;
