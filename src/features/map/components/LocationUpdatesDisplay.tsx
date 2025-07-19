import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LocationBroadcast } from "@/features/map/hooks";

interface LocationUpdatesDisplayProps {
  locationUpdates: LocationBroadcast[];
}

export function LocationUpdatesDisplay({
  locationUpdates,
}: LocationUpdatesDisplayProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Location Updates</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {locationUpdates.slice(-10).map((location, index) => (
            <div key={index} className="text-sm bg-blue-50 p-2 rounded">
              <div>
                <strong>Bus:</strong> {location.busId || "Unknown"}
              </div>
              <div>
                <strong>User:</strong> {location.userId || "Unknown"}
              </div>
              <div>
                <strong>Location:</strong> {location.latitude.toFixed(6)},{" "}
                {location.longitude.toFixed(6)}
              </div>
              <div>
                <strong>Time:</strong>{" "}
                {new Date(location.timestamp).toLocaleTimeString()}
              </div>
            </div>
          ))}
          {locationUpdates.length === 0 && (
            <p className="text-gray-500">No location updates received yet</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
