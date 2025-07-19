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

export type {
  LocationData,
  ClientInfo,
  LocationBroadcast,
  ClientMessage,
  ServerMessage,
};
