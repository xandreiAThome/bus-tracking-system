'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CreateTripModal from "@/features/trips/components/CreateTrip";
import TripsList from "@/features/trips/components/tripList";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function TripsOverview() {
  // const { data: session, status } = useSession();
  // const router = useRouter();

  // useEffect(() => {
  //   if (status === "authenticated" && session?.user?.role === "driver") {
  //     router.push("/map/1");
  //   }
  // }, [status, session, router]);

  // if (status === "loading") {
  //   return (
  //     <div className="h-full flex items-center justify-center">
  //       <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#456A3B]"></div>
  //     </div>
  //   );
  // }

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