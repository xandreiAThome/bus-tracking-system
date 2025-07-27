"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface LocationUpdateProps {
  latitude: string;
  setLatitude: (value: string) => void;
  longitude: string;
  setLongitude: (value: string) => void;
  connected: boolean;
  onLocationUpdate: () => void;
  onGetCurrentLocation: () => void;
}

export function LocationUpdate({
  latitude,
  setLatitude,
  longitude,
  setLongitude,
  connected,
  onLocationUpdate,
  onGetCurrentLocation,
}: LocationUpdateProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Send Location Update</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="latitude">Latitude</Label>
            <Input
              id="latitude"
              value={latitude}
              onChange={e => setLatitude(e.target.value)}
              placeholder="14.5995"
            />
          </div>
          <div>
            <Label htmlFor="longitude">Longitude</Label>
            <Input
              id="longitude"
              value={longitude}
              onChange={e => setLongitude(e.target.value)}
              placeholder="120.9842"
            />
          </div>
        </div>

        <div className="flex gap-2">
          <Button onClick={onLocationUpdate} disabled={!connected}>
            Send Location
          </Button>
          <Button onClick={onGetCurrentLocation} variant="outline">
            Use Current Location
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
