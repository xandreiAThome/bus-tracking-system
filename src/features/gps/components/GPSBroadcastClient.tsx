"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useWebSocket } from "@/features/map/hooks/useWebSocket";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MapPin,
  Navigation,
  Users,
  Wifi,
  WifiOff,
  Play,
  Square,
} from "lucide-react";

interface GPSBroadcastClientProps {
  userEmail: string;
  userName: string;
}

export default function GPSBroadcastClient({
  userEmail,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  userName,
}: GPSBroadcastClientProps) {
  const [busId, setBusId] = useState<string>("");
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  const [isBroadcasting, setIsBroadcasting] = useState<boolean>(false);
  const [currentLocation, setCurrentLocation] = useState<{
    latitude: number;
    longitude: number;
    accuracy: number;
  } | null>(null);
  const [locationError, setLocationError] = useState<string>("");

  const watchIdRef = useRef<number | null>(null);
  const broadcastIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const {
    connected,
    clientInfo,
    messages,
    locationUpdates,
    connect,
    disconnect,
    register,
    sendLocationUpdate,
  } = useWebSocket();

  // Generate userId based on email
  const userId = `driver_${userEmail.split("@")[0]}`;

  useEffect(() => {
    // Auto-connect when component mounts
    connect();

    return () => {
      stopBroadcasting();
      disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRegister = () => {
    if (!busId.trim()) {
      alert("Please enter a Bus ID");
      return;
    }

    register("bus_driver", userId, busId.trim());
    setIsRegistered(true);
  };

  const getCurrentLocation = (): Promise<GeolocationPosition> => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error("Geolocation is not supported"));
        return;
      }

      navigator.geolocation.getCurrentPosition(resolve, reject, {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000, // 1 minute
      });
    });
  };

  const startLocationTracking = () => {
    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by this browser");
      return;
    }

    const options = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 30000, // 30 seconds
    };

    const watchId = navigator.geolocation.watchPosition(
      position => {
        const location = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
        };

        setCurrentLocation(location);
        setLocationError("");

        // Send location update immediately when location changes
        if (connected && isRegistered && isBroadcasting) {
          sendLocationUpdate(location.latitude, location.longitude, userId);
        }
      },
      error => {
        setLocationError(error.message);
        console.error("Location error:", error);
      },
      options
    );

    watchIdRef.current = watchId;
  };

  const stopLocationTracking = () => {
    if (watchIdRef.current !== null) {
      navigator.geolocation.clearWatch(watchIdRef.current);
      watchIdRef.current = null;
    }
  };

  const startBroadcasting = async () => {
    if (!connected || !isRegistered) {
      alert("Please connect and register first");
      return;
    }

    try {
      // Get initial location
      const position = await getCurrentLocation();
      const location = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        accuracy: position.coords.accuracy,
      };

      setCurrentLocation(location);
      setIsBroadcasting(true);

      // Send initial location
      sendLocationUpdate(location.latitude, location.longitude, userId);

      // Start continuous location tracking
      startLocationTracking();

      // Set up periodic broadcasting (every 2 seconds as backup)
      broadcastIntervalRef.current = setInterval(() => {
        if (currentLocation && connected && isRegistered) {
          sendLocationUpdate(
            currentLocation.latitude,
            currentLocation.longitude,
            userId
          );
        }
      }, 2000);
    } catch (error) {
      setLocationError(`Failed to get location: ${error.message}`);
      console.error("Location error:", error);
    }
  };

  const stopBroadcasting = () => {
    setIsBroadcasting(false);
    stopLocationTracking();

    if (broadcastIntervalRef.current) {
      clearInterval(broadcastIntervalRef.current);
      broadcastIntervalRef.current = null;
    }
  };

  const formatCoordinate = (coord: number, precision: number = 6): string => {
    return coord.toFixed(precision);
  };

  return (
    <div className="space-y-6">
      {/* Connection Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {connected ? (
              <Wifi className="w-5 h-5 text-green-500" />
            ) : (
              <WifiOff className="w-5 h-5 text-red-500" />
            )}
            Connection Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <span
              className={`font-medium ${connected ? "text-green-600" : "text-red-600"}`}
            >
              {connected ? "Connected" : "Disconnected"}
            </span>
            {connected && (
              <div className="text-sm text-gray-600">
                <Users className="w-4 h-4 inline mr-1" />
                {clientInfo.clientCount} clients •{" "}
                {clientInfo.activeBuses.length} active buses
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Bus Registration */}
      <Card>
        <CardHeader>
          <CardTitle>Bus Registration</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="busId">Bus ID</Label>
            <Input
              id="busId"
              value={busId}
              onChange={e => setBusId(e.target.value)}
              placeholder="Enter your bus ID (e.g., BUS-001)"
              disabled={isRegistered}
            />
          </div>

          <div className="flex items-center gap-4">
            <Button
              onClick={handleRegister}
              disabled={!connected || isRegistered || !busId.trim()}
            >
              {isRegistered ? "Registered" : "Register as Driver"}
            </Button>

            {isRegistered && (
              <span className="text-sm text-green-600 font-medium">
                ✓ Registered as driver for {busId}
              </span>
            )}
          </div>
        </CardContent>
      </Card>

      {/* GPS Broadcasting Controls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Navigation className="w-5 h-5" />
            GPS Broadcasting
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <Button
              onClick={startBroadcasting}
              disabled={!connected || !isRegistered || isBroadcasting}
              className="bg-green-600 hover:bg-green-700"
            >
              <Play className="w-4 h-4 mr-2" />
              Start Broadcasting
            </Button>

            <Button
              onClick={stopBroadcasting}
              disabled={!isBroadcasting}
              variant="destructive"
            >
              <Square className="w-4 h-4 mr-2" />
              Stop Broadcasting
            </Button>
          </div>

          {isBroadcasting && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center gap-2 text-green-700 font-medium mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                Broadcasting Location
              </div>
              <div className="text-sm text-green-600">
                Your location is being broadcast to passengers tracking Bus{" "}
                {busId}
              </div>
            </div>
          )}

          {locationError && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
              <strong>Location Error:</strong> {locationError}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Current Location Display */}
      {currentLocation && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Current Location
            </CardTitle>
          </CardHeader>
          <CardContent>
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
      )}

      {/* Dashboard Tabs */}
      <Tabs defaultValue="status" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="status">Status</TabsTrigger>
          <TabsTrigger value="clients">Clients</TabsTrigger>
          <TabsTrigger value="logs">Logs</TabsTrigger>
        </TabsList>

        <TabsContent value="status" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>System Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">
                    {clientInfo.clientCount}
                  </div>
                  <div className="text-sm text-gray-600">Total Clients</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">
                    {clientInfo.activeBuses.length}
                  </div>
                  <div className="text-sm text-gray-600">Active Buses</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">
                    {locationUpdates.length}
                  </div>
                  <div className="text-sm text-gray-600">Location Updates</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div
                    className={`text-2xl font-bold ${isBroadcasting ? "text-green-600" : "text-gray-400"}`}
                  >
                    {isBroadcasting ? "ON" : "OFF"}
                  </div>
                  <div className="text-sm text-gray-600">Broadcasting</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="clients" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Connected Clients</CardTitle>
            </CardHeader>
            <CardContent>
              {clientInfo.clients.length > 0 ? (
                <div className="space-y-2">
                  {clientInfo.clients.map((client, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div>
                        <div className="font-medium">
                          {client.userId || "Unknown"}
                        </div>
                        <div className="text-sm text-gray-600">
                          {client.type}{" "}
                          {client.busId && `• Bus: ${client.busId}`}
                        </div>
                      </div>
                      <div
                        className={`w-3 h-3 rounded-full ${client.connected ? "bg-green-500" : "bg-gray-300"}`}
                      ></div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center text-gray-500 py-8">
                  No clients connected
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="logs" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Messages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {messages.slice(-10).map((message, index) => (
                  <div
                    key={index}
                    className="text-sm bg-gray-50 p-2 rounded font-mono"
                  >
                    {message}
                  </div>
                ))}
                {messages.length === 0 && (
                  <div className="text-center text-gray-500 py-8">
                    No messages yet
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
