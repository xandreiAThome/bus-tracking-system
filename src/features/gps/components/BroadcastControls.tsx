"use client";

import { MutableRefObject } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation, WifiOff, Play, Square } from "lucide-react";

interface BroadcastControlsProps {
  connected: boolean;
  connecting: boolean;
  isRegistered: boolean;
  isBroadcasting: boolean;
  broadcastCount: number;
  isManuallyStoppedRef: MutableRefObject<boolean>;
  locationError: string;
  onStartBroadcasting: () => void;
  onStopBroadcasting: () => void;
}

export default function BroadcastControls({
  connected,
  connecting,
  isRegistered,
  isBroadcasting,
  broadcastCount,
  isManuallyStoppedRef,
  locationError,
  onStartBroadcasting,
  onStopBroadcasting,
}: BroadcastControlsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Navigation className="w-5 h-5" />
          GPS Broadcasting
        </CardTitle>
        {connected &&
          isRegistered &&
          !isBroadcasting &&
          !isManuallyStoppedRef.current && (
            <div className="text-sm text-green-600 bg-green-50 px-3 py-2 rounded-lg border border-green-200">
              🚀 Starting GPS broadcast automatically...
            </div>
          )}
        {connected &&
          isRegistered &&
          !isBroadcasting &&
          isManuallyStoppedRef.current && (
            <div className="text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg border border-gray-200">
              ⏸️ GPS broadcasting stopped manually - click &quot;Start
              Broadcasting&quot; to resume
            </div>
          )}
        {!connected && broadcastCount > 0 && !isManuallyStoppedRef.current && (
          <div className="text-sm text-orange-600 bg-orange-50 px-3 py-2 rounded-lg border border-orange-200">
            📡 Broadcasting paused - will resume when reconnected
          </div>
        )}
        {!connected && broadcastCount > 0 && isManuallyStoppedRef.current && (
          <div className="text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg border border-gray-200">
            ⏸️ Broadcasting manually stopped - won&apos;t auto-resume on
            reconnection
          </div>
        )}
        {!connected &&
          broadcastCount === 0 &&
          !isManuallyStoppedRef.current && (
            <div className="text-sm text-blue-600 bg-blue-50 px-3 py-2 rounded-lg border border-blue-200">
              📡 GPS broadcasting will start automatically once connected
            </div>
          )}
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center flex-wrap gap-4">
          <Button
            onClick={onStartBroadcasting}
            disabled={
              !connected || !isRegistered || isBroadcasting || connecting
            }
            className="bg-green-600 hover:bg-green-700"
          >
            <Play className="w-4 h-4 mr-2" />
            Start Broadcasting
          </Button>

          <Button
            onClick={onStopBroadcasting}
            disabled={!isBroadcasting}
            variant="destructive"
          >
            <Square className="w-4 h-4 mr-2" />
            Stop Broadcasting
          </Button>
        </div>

        {isBroadcasting && !connected && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-center gap-2 text-yellow-700 font-medium mb-2">
              <WifiOff className="w-4 h-4" />
              Broadcasting Interrupted
            </div>
            <div className="text-sm text-yellow-600">
              Connection lost. Broadcasting will resume automatically when
              connection is restored.
            </div>
          </div>
        )}

        {isBroadcasting && connected && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center gap-2 text-green-700 font-medium mb-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              Broadcasting Location
            </div>
            <div className="text-sm text-green-600">
              Your location is being broadcast to passengers
            </div>
            <div className="text-xs text-green-500 mt-1">
              📡 Updates sent every 5 seconds
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
  );
}
