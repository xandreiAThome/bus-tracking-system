import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ClientInfo } from "@/features/map/hooks";

interface ServerStatusProps {
  clientInfo: {
    clientCount: number;
    activeBuses: string[];
    clients: ClientInfo[];
  };
}

export function ServerStatus({ clientInfo }: ServerStatusProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Server Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p>
            <strong>Connected Clients:</strong> {clientInfo.clientCount}
          </p>
          <p>
            <strong>Active Buses:</strong>{" "}
            {clientInfo.activeBuses.join(", ") || "None"}
          </p>

          {clientInfo.clients.length > 0 && (
            <div className="mt-4">
              <strong>Clients:</strong>
              <div className="mt-2 space-y-1">
                {clientInfo.clients.map((client, index) => (
                  <div key={index} className="text-sm bg-gray-100 p-2 rounded">
                    {client.type} - {client.userId}{" "}
                    {client.busId && `(Bus: ${client.busId})`}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
