"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import { ClientInfo } from "../types";

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
  clientInfo,
  busId,
  subscribe,
  userId,
}: AutoConnectProps) {
  const initialized = useRef(false);
  const [busTrackedOnline, setBusTrackedOnline] = useState(false);

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
    // Only run initialization once
    if (!initialized.current) {
      initialized.current = true;
      connect();
    }

    // Cleanup on unmount
    return () => {
      disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Intentionally empty - we only want this to run once

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
        <CardTitle>Connection Status</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col  gap-2">
          <div className="flex items-center gap-2">
            <div
              className={`w-3 h-3 rounded-full ${connected ? "bg-green-500" : "bg-red-500"}`}
            ></div>
            <span>
              {connected ? "Connected to the Location Server" : "Connecting..."}
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
      </CardContent>
    </Card>
  );
}
