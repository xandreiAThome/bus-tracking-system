import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import TripCard from "@/features/trips/components/tripCard";
import CreateTripModal from "@/features/trips/components/CreateTrip";

const dummyTrips = [
  { route: "ALLEN → CATARMAN", time: "9:00 PM", driver: "Juan Dela Cruz" },
  { route: "MANILA → DAVAO", time: "9:00 PM", driver: "Rage Del Fiero" },
];

export default function TripsOverview() {
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
            <CreateTripModal/>
          </div>
      </Card>
    </div>
  );
}
