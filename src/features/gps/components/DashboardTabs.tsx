"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { ClientInfo } from "@/features/map/types";

interface DashboardTabsProps {
  clientInfo: {
    clientCount: number;
    activeBuses: string[];
    clients: ClientInfo[];
  };
  broadcastCount: number;
  isBroadcasting: boolean;
  messages: string[];
}

export default function DashboardTabs({
  clientInfo,
  broadcastCount,
  isBroadcasting,
  messages,
}: DashboardTabsProps) {
  return (
    <Tabs defaultValue="status" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="status">Status</TabsTrigger>
        <TabsTrigger value="clients">Clients</TabsTrigger>
        <TabsTrigger value="logs">Logs</TabsTrigger>
      </TabsList>

      <TabsContent value="status" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>System Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">
                  {clientInfo.clientCount}
                </div>
                <div className="text-sm text-gray-600">Total Clients</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">
                  {clientInfo.activeBuses.length}
                </div>
                <div className="text-sm text-gray-600">Active Buses</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">
                  {broadcastCount}
                </div>
                <div className="text-sm text-gray-600">Broadcasts Sent</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div
                  className={`text-2xl font-bold ${
                    isBroadcasting ? "text-green-600" : "text-gray-400"
                  }`}
                >
                  {isBroadcasting ? "ON" : "OFF"}
                </div>
                <div className="text-sm text-gray-600">Broadcasting</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="clients" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Connected Clients</CardTitle>
          </CardHeader>
          <CardContent>
            {clientInfo.clients.length > 0 ? (
              <div className="space-y-2">
                {clientInfo.clients.map((client, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <div className="font-medium">
                        {client.userId || "Unknown"}
                      </div>
                      <div className="text-sm text-gray-600">
                        {client.type} {client.busId && `• Bus: ${client.busId}`}
                      </div>
                    </div>
                    <div
                      className={`w-3 h-3 rounded-full ${
                        client.connected ? "bg-green-500" : "bg-gray-300"
                      }`}
                    ></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-500 py-8">
                No clients connected
              </div>
            )}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="logs" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Recent Messages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {messages.slice(-10).map((message, index) => (
                <div
                  key={index}
                  className="text-sm bg-gray-50 p-2 rounded font-mono"
                >
                  {message}
                </div>
              ))}
              {messages.length === 0 && (
                <div className="text-center text-gray-500 py-8">
                  No messages yet
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
