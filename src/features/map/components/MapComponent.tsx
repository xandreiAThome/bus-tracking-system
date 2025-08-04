"use client";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { LocationBroadcast } from "@/features/map/hooks";

interface MapComponentProps {
  locations: LocationBroadcast[];
  center: [number, number];
  zoom: number;
}

const MapComponent = ({ locations, center, zoom }: MapComponentProps) => {
  const mapStyles = {
    width: "100%",
    height: "524px",
  };

  const mapCenter = {
    lat: center[0],
    lng: center[1],
  };

  // Check if Google Maps API key is available
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: googleMapsApiKey || "",
  });

  // Get the latest location for each unique bus/user
  const getLatestLocations = () => {
    const latestLocationMap = new Map();

    // Process locations in reverse order to get the most recent for each bus/user
    for (let i = locations.length - 1; i >= 0; i--) {
      const location = locations[i];
      const key = location.busId || location.userId || `unknown-${i}`;

      if (!latestLocationMap.has(key)) {
        latestLocationMap.set(key, location);
      }
    }

    return Array.from(latestLocationMap.values());
  };

  const latestLocations = getLatestLocations();

  // Auto-center map on the most recent location if available
  const getMapCenter = () => {
    if (latestLocations.length > 0) {
      const mostRecent = latestLocations.reduce((latest, current) =>
        current.timestamp > latest.timestamp ? current : latest
      );
      return {
        lat: mostRecent.latitude,
        lng: mostRecent.longitude,
      };
    }
    return mapCenter;
  };

  const dynamicCenter = getMapCenter();

  if (!googleMapsApiKey) {
    return (
      <div
        className="flex items-center justify-center bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg"
        style={mapStyles}
      >
        <div className="text-center">
          <p className="text-gray-600 font-medium">Map Component</p>
          <p className="text-sm text-gray-500 mt-2">
            Google Maps API key not configured
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Set NEXT_PUBLIC_GOOGLE_MAPS_API_KEY in your environment
          </p>
        </div>
      </div>
    );
  }

  if (loadError) {
    return (
      <div
        className="flex items-center justify-center bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg"
        style={mapStyles}
      >
        <div className="text-center">
          <p className="text-red-600 font-medium">Failed to load Google Maps</p>
        </div>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div
        className="flex items-center justify-center bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg"
        style={mapStyles}
      >
        <div className="text-center">
          <p className="text-gray-600 font-medium">Loading Map...</p>
        </div>
      </div>
    );
  }

  return (
    <GoogleMap mapContainerStyle={mapStyles} center={dynamicCenter} zoom={zoom}>
      {/* Only show markers for actual bus/user locations from WebSocket */}
      {latestLocations.map(location => {
        const key =
          location.busId || location.userId || `unknown-${location.timestamp}`;
        const isBus = !!location.busId;

        return (
          <Marker
            key={key}
            position={{
              lat: location.latitude,
              lng: location.longitude,
            }}
            title={
              isBus
                ? `Bus ${location.busId}${location.userId ? ` (Driver: ${location.userId})` : ""}`
                : `User: ${location.userId || "Unknown"}`
            }
            icon={{
              url: isBus
                ? "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%232563EB' stroke='%23fff' stroke-width='2' d='M4 6h16v10H4z'/%3E%3Ccircle cx='7' cy='18' r='2' fill='%23374151'/%3E%3Ccircle cx='17' cy='18' r='2' fill='%23374151'/%3E%3Cpath fill='%23fff' d='M6 8h4v4H6zM14 8h4v4h-4z'/%3E%3C/svg%3E"
                : "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Ccircle cx='10' cy='10' r='8' fill='%2310B981' stroke='%23fff' stroke-width='2'/%3E%3C/svg%3E",
              scaledSize:
                typeof window !== "undefined" && window.google?.maps?.Size
                  ? new window.google.maps.Size(
                      isBus ? 24 : 20,
                      isBus ? 24 : 20
                    )
                  : undefined,
            }}
          />
        );
      })}
    </GoogleMap>
  );
};

export default MapComponent;
