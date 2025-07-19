"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useRef } from "react";

interface AutoConnectProps {
  connect: () => void;
  register: (
    clientType: "bus_driver" | "passenger" | "admin",
    userId?: string,
    busId?: string
  ) => void;
  disconnect: () => void;
  connected: boolean;
}

export function AutoConnect({
  connect,
  register,
  disconnect,
  connected,
}: AutoConnectProps) {
  const initialized = useRef(false);

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
      register("admin", "admin-user");
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
        <div className="flex items-center gap-2">
          <div
            className={`w-3 h-3 rounded-full ${connected ? "bg-green-500" : "bg-red-500"}`}
          ></div>
          <span>{connected ? "Connected as Admin" : "Connecting..."}</span>
        </div>
        {connected && (
          <div className="text-sm text-gray-600">
            Automatically connected and registered as admin user.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
