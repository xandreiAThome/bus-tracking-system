"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TripCard from "@/features/trips/components/tripCard";
import { CreateTripModal } from "@/features/trips/components/CreateTrip";
import { AggregatedBusType } from "@/features/bus/types/types";
import { DriverType } from "@/features/driver/types/types";
import { StationType } from "@/features/station/types/types";
import { useEffect, useState } from "react";
import { AggregatedTripType } from "../types/types";
import { Toaster } from "sonner";
import { format } from "date-fns";

type TripStatus = "all" | "transit" | "complete" | "boarding";

export default function OverviewCard() {
  const [isMetaLoading, setIsMetaLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [trips, setTrips] = useState<AggregatedTripType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [stations, setStations] = useState<StationType[]>([]);
  const [buses, setBuses] = useState<AggregatedBusType[]>([]);
  const [drivers, setDrivers] = useState<DriverType[]>([]);
  const [statusFilter, setStatusFilter] = useState<TripStatus>("all");

  const filteredTrips = trips.filter(trip => {
    if (statusFilter === "all") return true;
    return trip.status === statusFilter;
  });

  const fetchTrips = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/trip/daily`);
      if (!response.ok) {
        throw new Error(response.statusText || "Failed to fetch trips");
      }
      const data = await response.json();
      const tripsData = Array.isArray(data.trips) ? data.trips : [];
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

  const fetchMeta = async () => {
    setIsMetaLoading(true);
    try {
      const [stationsRes, busesRes, driverRes] = await Promise.all([
        fetch("/api/station"),
        fetch("/api/bus"),
        fetch("/api/driver"),
      ]);
      if (!stationsRes.ok || !busesRes.ok || !driverRes.ok) {
        throw new Error("Failed to fetch meta data");
      }
      const [stationsData, busesData, driversData] = await Promise.all([
        stationsRes.json(),
        busesRes.json(),
        driverRes.json(),
      ]);
      setStations(stationsData.stations || stationsData);
      setBuses(busesData.buses || busesData);
      setDrivers(driversData.drivers || driversData);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
    } finally {
      setIsMetaLoading(false);
    }
  };

  useEffect(() => {
    Promise.all([fetchTrips(), fetchMeta()]);
  }, []);

  if (isMetaLoading) {
    return (
      <div className="h-full flex items-center justify-center p-5 min-h-screen">
        <Card className="w-full max-w-2xl mx-auto p-8 flex flex-col items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#71AC61] mb-4"></div>
          <div className="text-lg text-gray-600 font-semibold">
            Loading data...
          </div>
        </Card>
      </div>
    );
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>;
  }

  console.log(trips);

  return (
    <div className="h-full flex items-start justify-center p-5  sm:pt-5 pt-12 relative bg-green-50">
      <Card className="w-full max-w-4xl h-full min-h-[calc(100vh-40px)] overflow-y-auto p-5">
        <CardHeader className="border-b border-gray-300">
          <div className="flex flex-col items-center">
            <CardTitle className="mt-2 text-xl font-extrabold text-green-700">
              Trips Overview
            </CardTitle>
            <div className="mt-1 text-green-700 font-semibold text-base">
              {format(new Date(), "MMMM dd, yyyy")}
            </div>

            {/* Status Filter Buttons */}
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
              {(["all", "transit", "complete", "boarding"] as TripStatus[]).map(
                status => (
                  <button
                    key={status}
                    onClick={() => setStatusFilter(status)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                      statusFilter === status
                        ? "bg-green-800 text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {status === "all"
                      ? "All Trips"
                      : status.charAt(0).toUpperCase() + status.slice(1)}
                  </button>
                )
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-1 mt-4">
          {isLoading ? (
            <div className="text-center text-green-700 font-bold">
              Loading trips...
            </div>
          ) : filteredTrips.length === 0 ? (
            <div className="text-center py-8 text-gray-500 font-bold">
              {trips.length === 0
                ? "No trips found"
                : `No ${statusFilter} trips found`}
            </div>
          ) : (
            <div className="flex flex-col overflow-y-auto gap-y-4">
              {filteredTrips.map(trip => (
                <TripCard
                  key={trip.id}
                  onSuccessEdit={fetchTrips}
                  trip={trip}
                  stations={stations}
                  buses={buses}
                  drivers={drivers}
                />
              ))}
            </div>
          )}
        </CardContent>
      </Card>
      <div className="flex mt-4 justify-center absolute bottom-10">
        <CreateTripModal
          onTripCreated={fetchTrips}
          stations={stations}
          buses={buses}
          drivers={drivers}
        />
      </div>
      <Toaster position="top-right" richColors />
    </div>
  );
}
