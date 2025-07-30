"use client";
import React, { useEffect, useState } from "react";
import TripCard from "./tripCard";
import { AggregatedTripType } from "../types/types";

function TripsList() {
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
        console.log(data);

        // Handle the API response structure
        const tripsData = data.data || [];
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
        <TripCard key={trip.id} {...trip} />
      ))}
    </div>
  );
}

export default TripsList;
