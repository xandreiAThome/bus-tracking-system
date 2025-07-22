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
  };
  onConnect: () => void;
}

export default function ConnectionStatus({
  connected,
  connecting,
  clientInfo,
  onConnect,
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
                  : "text-red-600"
            }`}
          >
            {connected
              ? "Connected"
              : connecting
                ? "Connecting..."
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
            {!connected && !connecting && (
              <Button
                onClick={onConnect}
                size="sm"
                variant="outline"
                className="flex items-center gap-2"
              >
                <Wifi className="w-4 h-4" />
                Connect
              </Button>
            )}
          </div>
        </div>
        {connecting && (
          <div className="mt-2 text-sm text-gray-600">
            Establishing connection to server...
          </div>
        )}
      </CardContent>
    </Card>
  );
}
