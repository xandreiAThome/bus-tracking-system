"use client";

import { useState, useEffect, useRef, useCallback } from "react";
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
  const [reconnectionAttempts, setReconnectionAttempts] = useState(0);
  const [reconnectionFailed, setReconnectionFailed] = useState(false);
  const maxReconnectionAttempts = 10;
  const reconnectionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [hasTriedInitialConnect, setHasTriedInitialConnect] = useState(false);

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

  // Try to reconnect with exponential backoff
  const tryReconnect = useCallback(() => {
    if (reconnectionAttempts >= maxReconnectionAttempts) {
      setReconnectionFailed(true);
      return;
    }
    const delay = Math.min(1000 * Math.pow(2, reconnectionAttempts), 30000);
    reconnectionTimeoutRef.current = setTimeout(() => {
      setReconnectionAttempts(prev => prev + 1);
      connect();
    }, delay);
  }, [reconnectionAttempts, connect]);

  // Retry handler for the button
  const handleRetry = useCallback(() => {
    setReconnectionAttempts(0);
    setReconnectionFailed(false);
    if (reconnectionTimeoutRef.current) {
      clearTimeout(reconnectionTimeoutRef.current);
      reconnectionTimeoutRef.current = null;
    }
    connect();
  }, [connect]);

  // On mount, try to connect
  useEffect(() => {
    connect();
    setHasTriedInitialConnect(true);
    return () => {
      if (reconnectionTimeoutRef.current)
        clearTimeout(reconnectionTimeoutRef.current);
    };
    // eslint-disable-next-line
  }, []);

  // Watch for connection loss or failed initial connect
  useEffect(() => {
    if (
      !connected &&
      hasTriedInitialConnect &&
      !connecting &&
      !reconnectionFailed
    ) {
      if (reconnectionAttempts < maxReconnectionAttempts) {
        tryReconnect();
      } else {
        setReconnectionFailed(true);
      }
    }
    if (connected) {
      setReconnectionAttempts(0);
      setReconnectionFailed(false);
    }
    // eslint-disable-next-line
  }, [
    connected,
    connecting,
    hasTriedInitialConnect,
    reconnectionAttempts,
    reconnectionFailed,
    tryReconnect,
  ]);

  return (
    <div className="space-y-6">
      <ConnectionStatus
        connected={connected}
        connecting={connecting}
        clientInfo={clientInfo}
        onConnect={connect}
        reconnectionAttempts={reconnectionAttempts}
        maxReconnectionAttempts={maxReconnectionAttempts}
        reconnectionFailed={reconnectionFailed}
        onRetryConnection={handleRetry}
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
