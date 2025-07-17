"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import dynamic from "next/dynamic";

// Dynamically import the map component to avoid SSR issues
const MapComponent = dynamic(() => import("@/components/MapComponent"), {
  ssr: false,
});

interface LocationData {
  latitude: number;
  longitude: number;
  accuracy?: number;
  timestamp: number;
}

interface ClientInfo {
  id: string;
  type: "bus_driver" | "passenger" | "admin";
  busId?: string;
  userId?: string;
  connected: boolean;
}

interface LocationBroadcast extends LocationData {
  busId?: string;
  userId?: string;
}

type ClientMessage =
  | {
      type: "register";
      clientType: "bus_driver" | "passenger" | "admin";
      busId?: string;
      userId?: string;
    }
  | { type: "location_update"; userId?: string; data: LocationData }
  | { type: "subscribe"; userId?: string; subscribeToBusId: string }
  | { type: "unsubscribe"; userId?: string };

type ServerMessage =
  | { type: "connection_ack"; message: string; clientCount: number }
  | { type: "location_broadcast"; data: LocationBroadcast }
  | {
      type: "client_list";
      clientCount: number;
      activeBuses: string[];
      clients: ClientInfo[];
    }
  | { type: "error"; message: string };

export default function WebSocketTest() {
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [connected, setConnected] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [locationUpdates, setLocationUpdates] = useState<LocationBroadcast[]>(
    []
  );
  const [clientInfo, setClientInfo] = useState<{
    clientCount: number;
    activeBuses: string[];
    clients: ClientInfo[];
  }>({
    clientCount: 0,
    activeBuses: [],
    clients: [],
  });

  // Form states
  const [clientType, setClientType] = useState<
    "bus_driver" | "passenger" | "admin"
  >("passenger");
  const [userId, setUserId] = useState("");
  const [busId, setBusId] = useState("");
  const [subscribeToBusId, setSubscribeToBusId] = useState("");
  const [latitude, setLatitude] = useState("14.5995");
  const [longitude, setLongitude] = useState("120.9842");

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setMessages(prev => [...prev, `[${timestamp}] ${message}`]);
  };

  const connectWebSocket = () => {
    try {
      const websocket = new WebSocket("ws://localhost:8080");

      websocket.onopen = () => {
        setConnected(true);
        setWs(websocket);
        addMessage("Connected to WebSocket server");
      };

      websocket.onmessage = event => {
        try {
          const data: ServerMessage = JSON.parse(event.data);
          addMessage(`Received: ${JSON.stringify(data, null, 2)}`);

          switch (data.type) {
            case "connection_ack":
              addMessage(
                `Server: ${data.message} (${data.clientCount} clients)`
              );
              break;
            case "location_broadcast":
              setLocationUpdates(prev => [...prev, data.data]);
              addMessage(
                `Location update from ${data.data.busId || "unknown"}: ${data.data.latitude}, ${data.data.longitude}`
              );
              break;
            case "client_list":
              setClientInfo({
                clientCount: data.clientCount,
                activeBuses: data.activeBuses,
                clients: data.clients,
              });
              break;
            case "error":
              addMessage(`Error: ${data.message}`);
              break;
          }
        } catch {
          addMessage(`Error parsing message: ${event.data}`);
        }
      };

      websocket.onclose = () => {
        setConnected(false);
        setWs(null);
        addMessage("Disconnected from WebSocket server");
      };

      websocket.onerror = error => {
        addMessage(`WebSocket error: ${error}`);
      };
    } catch (error) {
      addMessage(`Connection failed: ${error}`);
    }
  };

  const disconnect = () => {
    if (ws) {
      ws.close();
    }
  };

  const sendMessage = (message: ClientMessage) => {
    if (ws && connected) {
      ws.send(JSON.stringify(message));
      addMessage(`Sent: ${JSON.stringify(message, null, 2)}`);
    } else {
      addMessage("Not connected to server");
    }
  };

  const handleRegister = () => {
    const message: ClientMessage = {
      type: "register",
      clientType,
      userId: userId || undefined,
      busId: clientType === "bus_driver" && busId ? busId : undefined,
    };
    sendMessage(message);
  };

  const handleLocationUpdate = () => {
    if (!latitude || !longitude) {
      addMessage("Please enter valid latitude and longitude");
      return;
    }

    const message: ClientMessage = {
      type: "location_update",
      userId: userId || undefined,
      data: {
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
        accuracy: 10,
        timestamp: Date.now(),
      },
    };
    sendMessage(message);
  };

  const handleSubscribe = () => {
    if (!subscribeToBusId) {
      addMessage("Please enter a bus ID to subscribe to");
      return;
    }

    const message: ClientMessage = {
      type: "subscribe",
      userId: userId || undefined,
      subscribeToBusId,
    };
    sendMessage(message);
  };

  const handleUnsubscribe = () => {
    const message: ClientMessage = {
      type: "unsubscribe",
      userId: userId || undefined,
    };
    sendMessage(message);
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setLatitude(position.coords.latitude.toString());
          setLongitude(position.coords.longitude.toString());
          addMessage(
            `Got current location: ${position.coords.latitude}, ${position.coords.longitude}`
          );
        },
        error => {
          addMessage(`Geolocation error: ${error.message}`);
        }
      );
    } else {
      addMessage("Geolocation is not supported by this browser");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Map Section */}
        <Card>
          <CardHeader>
            <CardTitle>Bus Location Map</CardTitle>
          </CardHeader>
          <CardContent>
            <MapComponent
              locations={locationUpdates}
              center={[14.5995, 120.9842]}
              zoom={13}
            />
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Connection and Controls */}
          <div className="space-y-6">
            {/* Connection Status */}
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
                  <Button onClick={connectWebSocket} disabled={connected}>
                    Connect
                  </Button>
                  <Button
                    onClick={disconnect}
                    disabled={!connected}
                    variant="outline"
                  >
                    Disconnect
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Client Registration */}
            <Card>
              <CardHeader>
                <CardTitle>Client Registration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="clientType">Client Type</Label>
                  <Select
                    value={clientType}
                    onValueChange={(
                      value: "bus_driver" | "passenger" | "admin"
                    ) => setClientType(value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="passenger">Passenger</SelectItem>
                      <SelectItem value="bus_driver">Bus Driver</SelectItem>
                      <SelectItem value="admin">Admin</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="userId">User ID</Label>
                  <Input
                    id="userId"
                    value={userId}
                    onChange={e => setUserId(e.target.value)}
                    placeholder="Enter your user ID"
                  />
                </div>

                {clientType === "bus_driver" && (
                  <div>
                    <Label htmlFor="busId">Bus ID</Label>
                    <Input
                      id="busId"
                      value={busId}
                      onChange={e => setBusId(e.target.value)}
                      placeholder="Enter your bus ID"
                    />
                  </div>
                )}

                <Button onClick={handleRegister} disabled={!connected}>
                  Register
                </Button>
              </CardContent>
            </Card>

            {/* Location Update */}
            <Card>
              <CardHeader>
                <CardTitle>Send Location Update</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="latitude">Latitude</Label>
                    <Input
                      id="latitude"
                      value={latitude}
                      onChange={e => setLatitude(e.target.value)}
                      placeholder="14.5995"
                    />
                  </div>
                  <div>
                    <Label htmlFor="longitude">Longitude</Label>
                    <Input
                      id="longitude"
                      value={longitude}
                      onChange={e => setLongitude(e.target.value)}
                      placeholder="120.9842"
                    />
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button onClick={handleLocationUpdate} disabled={!connected}>
                    Send Location
                  </Button>
                  <Button onClick={getCurrentLocation} variant="outline">
                    Use Current Location
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Subscription */}
            <Card>
              <CardHeader>
                <CardTitle>Bus Subscription</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="subscribeToBusId">Subscribe to Bus ID</Label>
                  <Input
                    id="subscribeToBusId"
                    value={subscribeToBusId}
                    onChange={e => setSubscribeToBusId(e.target.value)}
                    placeholder="Enter bus ID to track"
                  />
                </div>

                <div className="flex gap-2">
                  <Button onClick={handleSubscribe} disabled={!connected}>
                    Subscribe
                  </Button>
                  <Button
                    onClick={handleUnsubscribe}
                    disabled={!connected}
                    variant="outline"
                  >
                    Unsubscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Data Display */}
          <div className="space-y-6">
            {/* Client Information */}
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
                          <div
                            key={index}
                            className="text-sm bg-gray-100 p-2 rounded"
                          >
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

            {/* Location Updates */}
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
                        <strong>Location:</strong>{" "}
                        {location.latitude.toFixed(6)},{" "}
                        {location.longitude.toFixed(6)}
                      </div>
                      <div>
                        <strong>Time:</strong>{" "}
                        {new Date(location.timestamp).toLocaleTimeString()}
                      </div>
                    </div>
                  ))}
                  {locationUpdates.length === 0 && (
                    <p className="text-gray-500">
                      No location updates received yet
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Message Log */}
            <Card>
              <CardHeader>
                <CardTitle>Message Log</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-black text-green-400 p-4 rounded font-mono text-sm max-h-64 overflow-y-auto">
                  {messages.map((message, index) => (
                    <div key={index} className="mb-1">
                      {message}
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
