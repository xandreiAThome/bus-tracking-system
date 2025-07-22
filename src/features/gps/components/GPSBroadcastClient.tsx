"use client";

import { useState, useEffect, useRef } from "react";
import { useWebSocket } from "@/features/map/hooks/useWebSocket";
import ConnectionStatus from "./ConnectionStatus";
import BroadcastControls from "./BroadcastControls";
import CurrentLocationDisplay from "./CurrentLocationDisplay";
import DashboardTabs from "./DashboardTabs";

interface GPSBroadcastClientProps {
  userEmail: string;
  userName: string;
  busId: string;
}

export default function GPSBroadcastClient({
  userEmail,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  userName,
  busId,
}: GPSBroadcastClientProps) {
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  const [isBroadcasting, setIsBroadcasting] = useState<boolean>(false);
  const [currentLocation, setCurrentLocation] = useState<{
    latitude: number;
    longitude: number;
    accuracy: number;
  } | null>(null);
  const [locationError, setLocationError] = useState<string>("");
  const [broadcastCount, setBroadcastCount] = useState<number>(0);

  const watchIdRef = useRef<number | null>(null);
  const broadcastIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const isManuallyStoppedRef = useRef<boolean>(false);
  const currentLocationRef = useRef<{
    latitude: number;
    longitude: number;
    accuracy: number;
  } | null>(null);

  const {
    connected,
    connecting,
    clientInfo,
    messages,
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
      stopBroadcasting(true);
      disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Auto-register and start broadcasting when connected
    if (connected && !isRegistered) {
      register("bus_driver", userId, busId);
      setIsRegistered(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connected, isRegistered]);

  useEffect(() => {
    // Auto-start broadcasting when connected and registered (unless manually stopped)
    // This handles both initial connection and reconnection scenarios
    if (
      connected &&
      isRegistered &&
      !isBroadcasting &&
      !isManuallyStoppedRef.current
    ) {
      if (broadcastCount > 0) {
        console.log("Restarting GPS broadcast after reconnection...");
      } else {
        console.log("Auto-starting GPS broadcast...");
      }
      startBroadcasting();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connected, isRegistered, isBroadcasting]);

  useEffect(() => {
    // Stop broadcasting immediately when disconnected
    if (!connected && isBroadcasting) {
      console.log("Connection lost, stopping broadcast immediately...");
      setIsBroadcasting(false);
      stopLocationTracking();
      if (broadcastIntervalRef.current) {
        clearInterval(broadcastIntervalRef.current);
        broadcastIntervalRef.current = null;
      }
    }
  }, [connected, isBroadcasting]);

  const getCurrentLocation = (): Promise<GeolocationPosition> => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error("Geolocation is not supported"));
        return;
      }

      // Try with lower accuracy first for better reliability
      navigator.geolocation.getCurrentPosition(
        resolve,
        error => {
          console.warn(
            "Lower accuracy location failed, trying high accuracy:",
            error
          );
          // Fallback to high accuracy if low accuracy fails
          navigator.geolocation.getCurrentPosition(resolve, reject, {
            enableHighAccuracy: true,
            timeout: 20000, // 20 seconds for high accuracy
            maximumAge: 300000, // 5 minutes
          });
        },
        {
          enableHighAccuracy: false, // Less accurate but faster
          timeout: 15000, // Increased to 15 seconds
          maximumAge: 300000, // 5 minutes - allow older cached location
        }
      );
    });
  };

  const startLocationTracking = () => {
    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by this browser");
      return;
    }

    const options = {
      enableHighAccuracy: false, // Less accurate but more reliable
      timeout: 15000, // 15 seconds
      maximumAge: 60000, // 1 minute
    };

    const watchId = navigator.geolocation.watchPosition(
      position => {
        const location = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
        };

        setCurrentLocation(location);
        currentLocationRef.current = location; // Also update the ref
        setLocationError("");
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
    currentLocationRef.current = null; // Clear the location ref
  };

  const startBroadcasting = async () => {
    if (!connected || !isRegistered) {
      alert("Please connect and register first");
      return;
    }

    // Reset manual stop flag when starting broadcasting
    isManuallyStoppedRef.current = false;

    try {
      // Get initial location
      const position = await getCurrentLocation();
      const location = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        accuracy: position.coords.accuracy,
      };

      setCurrentLocation(location);
      currentLocationRef.current = location; // Also update the ref
      setIsBroadcasting(true);

      // Send initial location
      sendLocationUpdate(location.latitude, location.longitude, userId);
      setBroadcastCount(prev => prev + 1);
      console.log("Initial location sent:", location);

      // Start continuous location tracking
      startLocationTracking();

      // Set up periodic broadcasting (every 5 seconds)
      // Use the ref which will always have the latest location
      broadcastIntervalRef.current = setInterval(() => {
        if (connected && isRegistered && currentLocationRef.current) {
          sendLocationUpdate(
            currentLocationRef.current.latitude,
            currentLocationRef.current.longitude,
            userId
          );
          setBroadcastCount(prev => prev + 1);
          console.log("Periodic location sent:", currentLocationRef.current);
        } else {
          // Stop broadcasting if not connected or not registered
          console.log(
            "Connection lost or not registered, stopping broadcast..."
          );
          clearInterval(broadcastIntervalRef.current!);
          broadcastIntervalRef.current = null;
          setIsBroadcasting(false);
          stopLocationTracking();
        }
      }, 5000); // 5 seconds interval
    } catch (error) {
      const errorMessage =
        typeof error === "object" && error !== null && "message" in error
          ? (error as { message: string }).message
          : String(error);
      setLocationError(`Failed to get location: ${errorMessage}`);
      console.error("Location error:", error);
    }
  };

  const stopBroadcasting = (resetCount: boolean = true) => {
    setIsBroadcasting(false);
    stopLocationTracking();

    if (resetCount) {
      setBroadcastCount(0);
      // Set manual stop flag only when manually stopping (resetCount = true)
      isManuallyStoppedRef.current = true;
    }

    if (broadcastIntervalRef.current) {
      clearInterval(broadcastIntervalRef.current);
      broadcastIntervalRef.current = null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Connection Status */}
      <ConnectionStatus
        connected={connected}
        connecting={connecting}
        clientInfo={clientInfo}
        onConnect={connect}
      />

      {/* GPS Broadcasting Controls */}
      <BroadcastControls
        connected={connected}
        connecting={connecting}
        isRegistered={isRegistered}
        isBroadcasting={isBroadcasting}
        broadcastCount={broadcastCount}
        isManuallyStoppedRef={isManuallyStoppedRef}
        locationError={locationError}
        onStartBroadcasting={startBroadcasting}
        onStopBroadcasting={() => stopBroadcasting(true)}
      />

      {/* Current Location Display */}
      <CurrentLocationDisplay
        currentLocation={currentLocation}
        busId={busId}
        userId={userId}
      />

      {/* Dashboard Tabs */}
      <DashboardTabs
        clientInfo={clientInfo}
        broadcastCount={broadcastCount}
        isBroadcasting={isBroadcasting}
        messages={messages}
      />
    </div>
  );
}
