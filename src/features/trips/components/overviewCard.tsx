import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TripCard from "@/features/trips/components/tripCard";
import CreateTripModal from "@/features/trips/components/CreateTrip";
import { useEffect, useState } from "react";

export default function OverviewCard() {
  const [trips, setTrips] = useState<Trip[]>([]);

  useEffect(() => {
    const fetchTrips = async () => {
      const res = await fetch("/api/trip");
      const data = await res.json();
      setTrips(data.trips || data);
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
              ></TripCard>
            ))}
          </div>
        </CardContent>
        <div className="flex mt-4 justify-center">
          <CreateTripModal />
        </div>
      </Card>
    </div>
  );
}
