"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ConnectionStatusProps {
  connected: boolean;
  onConnect: () => void;
  onDisconnect: () => void;
}

export function ConnectionStatus({
  connected,
  onConnect,
  onDisconnect,
}: ConnectionStatusProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>WebSocket Connection</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2">
          <div
            className={`w-3 h-3 rounded-full ${connected ? "bg-green-500" : "bg-red-500"}`}
          ></div>
          <span>{connected ? "Connected" : "Disconnected"}</span>
        </div>
        <div className="flex gap-2">
          <Button onClick={onConnect} disabled={connected}>
            Connect
          </Button>
          <Button
            onClick={onDisconnect}
            disabled={!connected}
            variant="outline"
          >
            Disconnect
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
