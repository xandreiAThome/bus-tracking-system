"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Wifi, WifiOff } from "lucide-react";

interface ConnectionStatusProps {
  connected: boolean;
  connecting: boolean;
  clientInfo: {
    clientCount: number;
    activeBuses: string[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    clients?: any[];
  };
  onConnect: () => void;
  reconnectionAttempts?: number;
  maxReconnectionAttempts?: number;
  reconnectionFailed?: boolean;
  onRetryConnection?: () => void;
}

export default function ConnectionStatus({
  connected,
  connecting,
  clientInfo,
  reconnectionAttempts = 0,
  maxReconnectionAttempts = 10,
  reconnectionFailed = false,
  onRetryConnection,
}: ConnectionStatusProps) {
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
      <CardContent>
        <div className="flex items-center justify-between">
          <span
            className={`font-medium ${
              connected
                ? "text-green-600"
                : connecting
                  ? "text-blue-600"
                  : reconnectionFailed
                    ? "text-red-600"
                    : reconnectionAttempts > 0
                      ? "text-orange-600"
                      : "text-red-600"
            }`}
          >
            {connected
              ? "Connected"
              : connecting
                ? "Connecting..."
                : reconnectionFailed
                  ? "Connection Failed"
                  : reconnectionAttempts > 0
                    ? `Reconnecting... (${reconnectionAttempts}/${maxReconnectionAttempts})`
                    : "Disconnected"}
          </span>
          <div className="flex items-center gap-4">
            {connected && (
              <div className="text-sm text-gray-600">
                <Users className="w-4 h-4 inline mr-1" />
                {clientInfo.clientCount} clients •{" "}
                {clientInfo.activeBuses.length} active buses
              </div>
            )}
            {!connected &&
              !connecting &&
              reconnectionAttempts >= maxReconnectionAttempts && (
                <Button
                  onClick={onRetryConnection}
                  size="sm"
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <Wifi className="w-4 h-4" />
                  Retry
                </Button>
              )}
          </div>
        </div>
        {connecting && (
          <div className="mt-2 text-sm text-gray-600">
            Establishing connection to server...
          </div>
        )}
        {reconnectionAttempts > 0 && !connected && !reconnectionFailed && (
          <div className="mt-2 text-xs text-orange-600">
            Attempting to reconnect... ({reconnectionAttempts}/
            {maxReconnectionAttempts})
          </div>
        )}
        {reconnectionFailed && (
          <div className="mt-2 text-xs text-red-600">
            Failed to connect after {maxReconnectionAttempts} attempts. Please
            check your connection and try again.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
