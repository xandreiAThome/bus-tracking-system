"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface LocationData {
  latitude: number;
  longitude: number;
  accuracy?: number;
  timestamp: number;
  busId?: string;
  userId?: string;
}

interface MapComponentProps {
  locations: LocationData[];
  center?: [number, number];
  zoom?: number;
}

// Fix for default markers in Leaflet
// eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function MapComponent({
  locations,
  center = [14.5995, 120.9842],
  zoom = 13,
}: MapComponentProps) {
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<{ [key: string]: L.Marker }>({});
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current && containerRef.current) {
      // Initialize map
      mapRef.current = L.map(containerRef.current, {
        center: center,
        zoom: zoom,
      });

      // Add OpenStreetMap tiles
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current);
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [center, zoom]);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = mapRef.current;
    const currentMarkers = markersRef.current;

    // Debug: log the locations array
    console.log("MapComponent received locations:", locations);

    // Create custom bus icon
    const busIcon = L.divIcon({
      html: `
        <div style="
          width: 20px;
          height: 20px;
          background-color: #ef4444;
          border: 2px solid white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        ">
          <div style="
            width: 8px;
            height: 8px;
            background-color: white;
            border-radius: 50%;
          "></div>
        </div>
      `,
      className: "custom-bus-marker",
      iconSize: [20, 20],
      iconAnchor: [10, 10],
    });

    // Group locations by busId to show only the latest location for each bus
    const latestLocations = locations.reduce(
      (acc, location) => {
        const busId = location.busId || "unknown";
        if (!acc[busId] || location.timestamp > acc[busId].timestamp) {
          acc[busId] = location;
        }
        return acc;
      },
      {} as { [key: string]: LocationData }
    );

    console.log("Latest locations per bus:", latestLocations);

    // Update markers
    Object.values(latestLocations).forEach(location => {
      const busId = location.busId || "unknown";
      const markerId = `${busId}-${location.userId || "unknown"}`;

      console.log(
        `Processing marker for bus ${busId} at ${location.latitude}, ${location.longitude}`
      );

      if (currentMarkers[markerId]) {
        // Update existing marker position
        currentMarkers[markerId].setLatLng([
          location.latitude,
          location.longitude,
        ]);

        // Update the popup content with new information
        currentMarkers[markerId].setPopupContent(`
          <div style="font-family: system-ui, -apple-system, sans-serif;">
            <strong>Bus ID:</strong> ${location.busId || "Unknown"}<br/>
            <strong>User:</strong> ${location.userId || "Unknown"}<br/>
            <strong>Location:</strong> ${location.latitude.toFixed(6)}, ${location.longitude.toFixed(6)}<br/>
            <strong>Time:</strong> ${new Date(location.timestamp).toLocaleTimeString()}<br/>
            ${location.accuracy ? `<strong>Accuracy:</strong> ${location.accuracy}m` : ""}
          </div>
        `);

        console.log(`Updated existing marker for ${markerId}`);
      } else {
        // Create new marker
        const marker = L.marker([location.latitude, location.longitude], {
          icon: busIcon,
        });

        // Add popup with bus information
        marker.bindPopup(`
          <div style="font-family: system-ui, -apple-system, sans-serif;">
            <strong>Bus ID:</strong> ${location.busId || "Unknown"}<br/>
            <strong>User:</strong> ${location.userId || "Unknown"}<br/>
            <strong>Location:</strong> ${location.latitude.toFixed(6)}, ${location.longitude.toFixed(6)}<br/>
            <strong>Time:</strong> ${new Date(location.timestamp).toLocaleTimeString()}<br/>
            ${location.accuracy ? `<strong>Accuracy:</strong> ${location.accuracy}m` : ""}
          </div>
        `);

        marker.addTo(map);
        currentMarkers[markerId] = marker;
        console.log(`Created new marker for ${markerId}`);
      }
    });

    // Remove markers for buses that are no longer in the location list
    const currentMarkerIds = new Set(
      Object.values(latestLocations).map(location => {
        const busId = location.busId || "unknown";
        return `${busId}-${location.userId || "unknown"}`;
      })
    );

    Object.keys(currentMarkers).forEach(markerId => {
      if (!currentMarkerIds.has(markerId)) {
        map.removeLayer(currentMarkers[markerId]);
        delete currentMarkers[markerId];
        console.log(`Removed marker for ${markerId}`);
      }
    });

    // Center the map based on markers
    const markerCount = Object.keys(currentMarkers).length;
    if (markerCount === 1) {
      // Single marker - center on it
      const marker = Object.values(currentMarkers)[0];
      const latLng = marker.getLatLng();
      map.setView(latLng, zoom);
      console.log(
        `Centered map on single marker at ${latLng.lat}, ${latLng.lng}`
      );
    } else if (markerCount > 1) {
      // Multiple markers - fit bounds to show all
      const group = L.featureGroup(Object.values(currentMarkers));
      map.fitBounds(group.getBounds().pad(0.1));
      console.log(`Fitted map bounds to show ${markerCount} markers`);
    }
  }, [locations, zoom]);

  return (
    <div
      ref={containerRef}
      style={{
        height: "400px",
        width: "100%",
        borderRadius: "0.5rem",
        overflow: "hidden",
      }}
    />
  );
}
