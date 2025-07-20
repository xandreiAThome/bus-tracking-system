"use client";
import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import dynamic from "next/dynamic";
import { useWebSocket } from "@/features/map/hooks";
import { AutoConnect } from "./index";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

// TEMPORARY CONNECT TO AUTH AFTER INTEGRATION
const USERID = "admin-user";

// Dynamically import the map component to avoid SSR issues
const MapComponent = dynamic(
  () => import("@/features/map/components/MapComponent"),
  {
    ssr: false,
  }
);

export default function WebSocketWrapper({ busId }: { busId: string }) {
  const {
    connected,
    locationUpdates,
    clientInfo,
    connect,
    disconnect,
    register,
    subscribe,
  } = useWebSocket();

  // Form states

  useEffect(() => {
    toast(`BusID: ${busId}`);
  }, [busId]);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <Toaster></Toaster>
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Map Section */}
        <Card>
          <CardHeader>
            <CardTitle>Bus {busId} Location Map</CardTitle>
          </CardHeader>
          <CardContent className="p-1 sm:p-6">
            <MapComponent
              locations={locationUpdates}
              // TEMPORARY CENTERED LOCATION
              center={[parseFloat("14.5995"), parseFloat("120.9842")]}
              zoom={15}
            />
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Connection Status and Controls */}
          <div className="space-y-6">
            {/* Show connection status only */}
            <AutoConnect
              connect={connect}
              register={register}
              disconnect={disconnect}
              connected={connected}
              clientInfo={clientInfo}
              busId={busId}
              subscribe={subscribe}
              userId={USERID}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
