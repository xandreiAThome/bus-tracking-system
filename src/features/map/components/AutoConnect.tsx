"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { ClientInfo } from "../types";
import { Wifi, WifiOff } from "lucide-react";

interface AutoConnectProps {
  connect: () => void;
  register: (
    clientType: "bus_driver" | "passenger" | "admin",
    userId?: string,
    busId?: string
  ) => void;
  disconnect: () => void;
  subscribe: (busId: string, userId?: string) => void;
  connected: boolean;
  connecting: boolean;
  clientInfo: {
    clientCount: number;
    activeBuses: string[];
    clients: ClientInfo[];
  };
  busId: string;
  userId: string;
}

export function AutoConnect({
  connect,
  register,
  disconnect,
  connected,
  connecting,
  clientInfo,
  busId,
  subscribe,
  userId,
}: AutoConnectProps) {
  const initialized = useRef(false);
  const [busTrackedOnline, setBusTrackedOnline] = useState(false);
  const [wasConnected, setWasConnected] = useState(false);

  useEffect(() => {
    let found = false;
    for (let i = 0; i < clientInfo.clients.length; i++) {
      if (clientInfo.clients[i].busId === busId) {
        found = true;
        break;
      }
    }
    setBusTrackedOnline(found);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clientInfo]);

  useEffect(() => {
    if (!connected) {
      initialized.current = false;
    }
    // Only run initialization once
    if (!initialized.current) {
      connect();
      initialized.current = true;
    }
    // Cleanup on unmount
    return () => {
      disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Intentionally empty - we only want this to run once

  useEffect(() => {
    // Track if we've ever been connected
    if (connected) {
      setWasConnected(true);
    }
  }, [connected]);

  const handleManualConnect = () => {
    connect();
  };

  useEffect(() => {
    // Register when connection is established
    if (connected) {
      register("passenger", userId);
      subscribe(busId, userId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connected]); // Only depend on connected state

  // This component doesn't render anything visible
  return (
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
      <CardContent className="space-y-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div
              className={`w-3 h-3 rounded-full ${
                connected
                  ? "bg-green-500"
                  : connecting
                    ? "bg-yellow-500 animate-pulse"
                    : "bg-red-500"
              }`}
            ></div>
            <span>
              {connected
                ? "Connected to the Location Server"
                : connecting
                  ? "Connecting to server..."
                  : "Disconnected"}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className={`w-3 h-3 rounded-full ${busTrackedOnline ? "bg-green-500" : "bg-red-500"}`}
            ></div>
            <span>
              {busTrackedOnline
                ? `Bus ${busId} Online`
                : `Searching Bus ${busId}...`}
            </span>
          </div>
        </div>

        {!connected && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="text-sm text-red-700 mb-3">
              {connecting
                ? "Connecting to server..."
                : "Not connected to the server. Please check your internet connection and try again."}
            </div>
            {!connecting && (
              <Button
                onClick={handleManualConnect}
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <Wifi className="w-4 h-4" />
                {wasConnected ? "Reconnect" : "Connect"}
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
