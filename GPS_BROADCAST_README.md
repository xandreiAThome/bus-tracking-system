# GPS Broadcast Feature - Testing Guide

## Overview

The GPS Broadcast feature allows bus drivers to broadcast their real-time location to passengers. This feature is restricted to users with driver privileges.

## Driver Access

To access the GPS broadcast feature, a user must be identified as a driver. Currently, this is determined by checking if the user's email contains:

- "driver"
- "bus"
- "@buscompany.com" (your bus company domain)

**Example driver emails:**

- `john.driver@gmail.com`
- `busdriver001@company.com`
- `driver@buscompany.com`

## Features

### 1. Driver-Only Access

- Only users with driver-identified emails can access `/gps-broadcast`
- Navigation link appears in the menu only for drivers
- Non-drivers are redirected to the trips overview page

### 2. Bus Registration

- Drivers must register with a Bus ID before broadcasting
- Bus ID format: `BUS-001`, `ROUTE-A`, etc.
- Registration connects the driver to the WebSocket server

### 3. Real-time GPS Broadcasting

- Uses browser's Geolocation API for precise location tracking
- Broadcasts location updates every 5 seconds or when location changes
- Shows current coordinates, accuracy, and broadcasting status

### 4. Connection Management

- Real-time WebSocket connection status
- Automatic reconnection on disconnect
- Client and bus tracking dashboard

### 5. Dashboard Tabs

- **Status**: System overview and broadcasting metrics
- **Clients**: View connected passengers and other drivers
- **Logs**: Recent WebSocket messages and events

## Usage Instructions

### For Drivers:

1. **Sign in** with a driver-identified email
2. **Navigate** to GPS Broadcast from the menu
3. **Enter Bus ID** (e.g., "BUS-001")
4. **Register** as a driver for that bus
5. **Start Broadcasting** to begin sharing location
6. **Monitor** passengers and system status in dashboard tabs

### For Testing:

1. **WebSocket Server**: Ensure your GPS WebSocket server is running on `ws://localhost:8080`
2. **Driver Account**: Use an email containing "driver", "bus", or your company domain
3. **Location Permissions**: Allow browser location access when prompted
4. **Multiple Clients**: Open passenger apps or additional browser tabs to see real-time tracking

## WebSocket Server Configuration

Update the WebSocket URL in `/src/features/gps/config/websocket.ts`:

```typescript
WS_URL: process.env.NEXT_PUBLIC_WS_URL || "ws://localhost:8080";
```

Set your production WebSocket URL in environment variables:

```bash
NEXT_PUBLIC_WS_URL=wss://your-websocket-server.com
```

## Security Considerations

### Current Implementation (Demo):

- Email-based role detection
- Client-side validation only

### Production Recommendations:

- Implement proper user roles in database
- Server-side role validation
- JWT tokens with role claims
- API endpoint protection with middleware

## Browser Requirements

- **Geolocation API**: Modern browsers (Chrome, Firefox, Safari, Edge)
- **WebSockets**: All modern browsers
- **HTTPS**: Required for geolocation in production
- **Permissions**: User must grant location access

## Troubleshooting

### Common Issues:

1. **"Not a driver" error**: Check email format contains driver keywords
2. **Location not working**: Ensure HTTPS and location permissions granted
3. **WebSocket connection failed**: Verify server is running and URL is correct
4. **Registration failed**: Check Bus ID format and connection status

### Development Mode:

- Use `http://localhost:3000` for the web app
- Use `ws://localhost:8080` for WebSocket server
- Browser may show location permission warnings on HTTP

### Production Mode:

- HTTPS required for geolocation
- WSS (secure WebSocket) recommended
- Valid SSL certificates needed

## Files Created

- `/src/app/(tab)/gps-broadcast/page.tsx` - Main GPS broadcast page
- `/src/features/gps/components/GPSBroadcastClient.tsx` - React component
- `/src/features/auth/utils/userUtils.ts` - User role utilities
- `/src/features/gps/config/websocket.ts` - WebSocket configuration
- Updated `/src/components/navbar.tsx` - Added driver navigation
- Updated `/src/app/(tab)/layout.tsx` - Pass user email to navbar
