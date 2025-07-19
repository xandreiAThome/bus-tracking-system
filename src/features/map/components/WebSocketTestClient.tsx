"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import dynamic from "next/dynamic";
import { useWebSocket } from "@/features/map/hooks";
import {
  AutoConnect,
  LocationUpdate,
  BusSubscription,
  ServerStatus,
  LocationUpdatesDisplay,
  MessageLog,
} from "./index";

// Dynamically import the map component to avoid SSR issues
const MapComponent = dynamic(
  () => import("@/features/map/components/MapComponent"),
  {
    ssr: false,
  }
);

export default function WebSocketTestClient() {
  const {
    connected,
    messages,
    locationUpdates,
    clientInfo,
    connect,
    disconnect,
    register,
    sendLocationUpdate,
    subscribe,
    unsubscribe,
    addMessage,
  } = useWebSocket();

  // Form states
  const [userId] = useState("admin-user");
  const [subscribeToBusId, setSubscribeToBusId] = useState("");
  const [latitude, setLatitude] = useState("14.5995");
  const [longitude, setLongitude] = useState("120.9842");

  const handleLocationUpdate = () => {
    if (!latitude || !longitude) {
      addMessage("Please enter valid latitude and longitude");
      return;
    }

    sendLocationUpdate(
      parseFloat(latitude),
      parseFloat(longitude),
      userId || undefined
    );
  };

  const handleSubscribe = () => {
    if (!subscribeToBusId) {
      addMessage("Please enter a bus ID to subscribe to");
      return;
    }

    subscribe(subscribeToBusId, userId || undefined);
  };

  const handleUnsubscribe = () => {
    unsubscribe(userId || undefined);
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setLatitude(position.coords.latitude.toString());
          setLongitude(position.coords.longitude.toString());
          addMessage(
            `Got current location: ${position.coords.latitude}, ${position.coords.longitude}`
          );
        },
        error => {
          addMessage(`Geolocation error: ${error.message}`);
        }
      );
    } else {
      addMessage("Geolocation is not supported by this browser");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Map Section */}
        <Card>
          <CardHeader>
            <CardTitle>Bus Location Map</CardTitle>
          </CardHeader>
          <CardContent>
            <MapComponent
              locations={locationUpdates}
              center={[parseFloat(latitude), parseFloat(longitude)]}
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
            />

            <LocationUpdate
              latitude={latitude}
              setLatitude={setLatitude}
              longitude={longitude}
              setLongitude={setLongitude}
              connected={connected}
              onLocationUpdate={handleLocationUpdate}
              onGetCurrentLocation={getCurrentLocation}
            />

            <BusSubscription
              subscribeToBusId={subscribeToBusId}
              setSubscribeToBusId={setSubscribeToBusId}
              connected={connected}
              onSubscribe={handleSubscribe}
              onUnsubscribe={handleUnsubscribe}
            />
          </div>

          {/* Data Display */}
          <div className="space-y-6">
            <ServerStatus clientInfo={clientInfo} />
            <LocationUpdatesDisplay locationUpdates={locationUpdates} />
            <MessageLog messages={messages} />
          </div>
        </div>
      </div>
    </div>
  );
}
