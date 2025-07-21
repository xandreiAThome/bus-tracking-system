// WebSocket server configuration for GPS tracking
export const WS_CONFIG = {
  // Development server URL - update this to match your WebSocket server
  WS_URL: process.env.NEXT_PUBLIC_WS_URL || "ws://localhost:8080",

  // Connection options
  RECONNECT_INTERVAL: 3000, // 3 seconds
  MAX_RECONNECT_ATTEMPTS: 5,

  // Location update intervals
  LOCATION_UPDATE_INTERVAL: 5000, // 5 seconds
  HIGH_ACCURACY_LOCATION: true,
  LOCATION_TIMEOUT: 10000, // 10 seconds
  LOCATION_MAX_AGE: 30000, // 30 seconds
} as const;
