"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import MapComponent from "@/features/map/components/MapComponent";

interface CurrentLocationDisplayProps {
  currentLocation: {
    latitude: number;
    longitude: number;
    accuracy: number;
  } | null;
  busId: string;
  userId: string;
}

export default function CurrentLocationDisplay({
  currentLocation,
  busId,
  userId,
}: CurrentLocationDisplayProps) {
  if (!currentLocation) return null;

  const formatCoordinate = (coord: number, precision: number = 6): string => {
    return coord.toFixed(precision);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="w-5 h-5" />
          Current Location
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Map Display */}
        <MapComponent
          locations={[
            {
              latitude: currentLocation.latitude,
              longitude: currentLocation.longitude,
              accuracy: currentLocation.accuracy,
              timestamp: Date.now(),
              busId: busId,
              userId: userId,
            },
          ]}
          center={[currentLocation.latitude, currentLocation.longitude]}
          zoom={16}
        />

        {/* Coordinates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <span className="font-medium">Latitude:</span>
            <div className="font-mono">
              {formatCoordinate(currentLocation.latitude)}
            </div>
          </div>
          <div>
            <span className="font-medium">Longitude:</span>
            <div className="font-mono">
              {formatCoordinate(currentLocation.longitude)}
            </div>
          </div>
          <div>
            <span className="font-medium">Accuracy:</span>
            <div>{currentLocation.accuracy.toFixed(1)}m</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
