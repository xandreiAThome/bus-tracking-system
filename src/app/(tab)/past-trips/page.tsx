"use client";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { AggregatedTripType } from "@/features/trips/types/types";
import TripCard from "@/features/trips/components/tripCard";
import { toast, Toaster } from "sonner";

export default function PastTripsPage() {
  // Use string for date in yyyy-MM-dd format for compatibility with input[type=date]
  const [selectedDate, setSelectedDate] = useState<string>(
    format(new Date(), "yyyy-MM-dd")
  );
  const [trips, setTrips] = useState<AggregatedTripType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTrips = async (dateStr: string) => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/trip/daily?date=${dateStr}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to fetch trips");
      setTrips(Array.isArray(data.trips) ? data.trips : []);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.error(err.message || "Failed to fetch trips");
      setTrips([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (selectedDate) fetchTrips(selectedDate);
  }, [selectedDate]);

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center py-8 px-2">
      <Toaster richColors position="top-center" />
      <div className="w-full max-w-2xl mb-8 bg-green-100 rounded-lg shadow p-2 border border-green-300">
        <h2 className="text-2xl font-bold text-green-800 mb-4 text-center">
          Past Trips
        </h2>
        <form
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          onSubmit={e => {
            e.preventDefault();
            if (selectedDate) fetchTrips(selectedDate);
          }}
        >
          <label className="font-semibold text-green-700" htmlFor="date-picker">
            Select Date:
          </label>
          <input
            id="date-picker"
            type="date"
            className="rounded border border-green-400 px-3 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white text-green-900"
            defaultValue={selectedDate}
            max={format(new Date(), "yyyy-MM-dd")}
            onChange={e => setSelectedDate(e.target.value)}
          />
        </form>
      </div>

      <div className="w-full max-w-3xl space-y-4">
        {isLoading ? (
          <Card className="border-green-200 bg-green-50">
            <CardContent className="py-8 text-center text-green-700">
              Loading trips...
            </CardContent>
          </Card>
        ) : trips.length === 0 ? (
          <Card className="border-green-200 bg-green-50">
            <CardContent className="py-8 text-center text-green-700">
              No trips found for this day.
            </CardContent>
          </Card>
        ) : (
          trips.map(trip => (
            <TripCard
              key={trip.id}
              trip={trip}
              onSuccessEdit={() => fetchTrips(selectedDate)}
              stations={[]}
              drivers={[]}
              buses={[]}
            />
          ))
        )}
      </div>
    </div>
  );
}
