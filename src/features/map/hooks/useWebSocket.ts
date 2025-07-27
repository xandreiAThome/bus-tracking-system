import { useState, useCallback, useRef } from "react";
import type {
  LocationData,
  ClientInfo,
  LocationBroadcast,
  ClientMessage,
  ServerMessage,
} from "../types";

export interface UseWebSocketReturn {
  // Connection state
  connected: boolean;
  connecting: boolean;
  ws: WebSocket | null;

  // Data state
  messages: string[];
  locationUpdates: LocationBroadcast[];
  clientInfo: {
    clientCount: number;
    activeBuses: string[];
    clients: ClientInfo[];
  };

  // Actions
  connect: () => void;
  disconnect: () => void;
  sendMessage: (message: ClientMessage) => void;
  register: (
    clientType: "bus_driver" | "passenger" | "admin",
    userId?: string,
    busId?: string
  ) => void;
  sendLocationUpdate: (
    latitude: number,
    longitude: number,
    userId?: string
  ) => void;
  subscribe: (busId: string, userId?: string) => void;
  unsubscribe: (userId?: string) => void;
  addMessage: (message: string) => void;
}

export function useWebSocket(): UseWebSocketReturn {
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [connected, setConnected] = useState(false);
  const [connecting, setConnecting] = useState(false);
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

  // Simple connection management
  const lastRegistrationRef = useRef<{
    clientType: "bus_driver" | "passenger" | "admin";
    userId?: string;
    busId?: string;
  } | null>(null);

  const addMessage = useCallback((message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setMessages(prev => [...prev, `[${timestamp}] ${message}`]);
  }, []);

  const sendMessage = useCallback(
    (message: ClientMessage) => {
      if (ws && connected) {
        ws.send(JSON.stringify(message));
        addMessage(`Sent: ${JSON.stringify(message, null, 2)}`);
      } else {
        addMessage("Not connected to server");
      }
    },
    [ws, connected, addMessage]
  );

  const connect = useCallback(() => {
    if (connecting || connected) {
      return; // Prevent multiple connection attempts
    }

    setConnecting(true);

    try {
      const wsServer = process.env.NEXT_PUBLIC_WEBSOCKET_SERVER;
      if (!wsServer) {
        addMessage("WebSocket server URL is not defined.");
        setConnecting(false);
        return;
      }

      const websocket = new WebSocket(wsServer);

      // --- Connection timeout workaround ---
      const connectionTimeout = setTimeout(() => {
        if (websocket.readyState !== WebSocket.OPEN) {
          addMessage("WebSocket connection timed out.");
          websocket.close();
          setConnecting(false);
        }
      }, 5000); // 5 seconds timeout

      websocket.onopen = () => {
        clearTimeout(connectionTimeout); // <--- here
        setConnected(true);
        setConnecting(false);
        setWs(websocket);
        addMessage("Connected to WebSocket server");

        // Re-register if we have previous registration info
        if (lastRegistrationRef.current) {
          const { clientType, userId, busId } = lastRegistrationRef.current;
          setTimeout(() => {
            const message = {
              type: "register" as const,
              clientType,
              userId: userId || undefined,
              busId: clientType === "bus_driver" && busId ? busId : undefined,
            };
            if (websocket.readyState === WebSocket.OPEN) {
              websocket.send(JSON.stringify(message));
              addMessage(`Re-registered as ${clientType}`);
            }
          }, 100); // Small delay to ensure connection is stable
        }
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
        setConnecting(false);
        setWs(null);
        addMessage("Disconnected from WebSocket server");
      };

      websocket.onerror = () => {
        setConnecting(false);
        addMessage("WebSocket connection error");
      };
    } catch (error) {
      setConnecting(false);
      addMessage(`Connection failed: ${error}`);
    }
  }, [addMessage, connecting, connected]);

  const disconnect = useCallback(() => {
    if (ws) {
      ws.close();
    }
  }, [ws]);

  const register = useCallback(
    (
      clientType: "bus_driver" | "passenger" | "admin",
      userId?: string,
      busId?: string
    ) => {
      // Store registration info for auto re-registration after reconnection
      lastRegistrationRef.current = { clientType, userId, busId };

      const message: ClientMessage = {
        type: "register",
        clientType,
        userId: userId || undefined,
        busId: clientType === "bus_driver" && busId ? busId : undefined,
      };
      sendMessage(message);
    },
    [sendMessage]
  );

  const sendLocationUpdate = useCallback(
    (latitude: number, longitude: number, userId?: string) => {
      const message: ClientMessage = {
        type: "location_update",
        userId: userId || undefined,
        data: {
          latitude,
          longitude,
          accuracy: 10,
          timestamp: Date.now(),
        },
      };
      sendMessage(message);
    },
    [sendMessage]
  );

  const subscribe = useCallback(
    (busId: string, userId?: string) => {
      const message: ClientMessage = {
        type: "subscribe",
        userId: userId || undefined,
        subscribeToBusId: busId,
      };
      sendMessage(message);
    },
    [sendMessage]
  );

  const unsubscribe = useCallback(
    (userId?: string) => {
      const message: ClientMessage = {
        type: "unsubscribe",
        userId: userId || undefined,
      };
      sendMessage(message);
    },
    [sendMessage]
  );

  return {
    // Connection state
    connected,
    connecting,
    ws,

    // Data state
    messages,
    locationUpdates,
    clientInfo,

    // Actions
    connect,
    disconnect,
    sendMessage,
    register,
    sendLocationUpdate,
    subscribe,
    unsubscribe,
    addMessage,
  };
}

export type {
  LocationData,
  ClientInfo,
  LocationBroadcast,
  ClientMessage,
  ServerMessage,
};
