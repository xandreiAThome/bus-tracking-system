import { auth } from "@/features/auth/services/auth";
import { getDriverByUserId } from "@/features/driver/services/crud";
import GPSBroadcastClient from "@/features/gps/components/GPSBroadcastClient";
import { getTripsForDay } from "@/features/trips/services/crud";
import { formatTime } from "@/lib/utils";
import { redirect } from "next/navigation";

export default async function GPSBroadcastPage() {
  // Helper to get time-based greeting using Manila timezone
  function getGreeting() {
    // Get Manila time for proper greeting
    const now = new Date();
    const manilaOffset = 8 * 60 * 60 * 1000; // 8 hours in milliseconds
    const manilaTime = new Date(now.getTime() + manilaOffset);
    const hour = manilaTime.getUTCHours(); // Use UTC methods since we added offset

    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  }
  const session = await auth();
  if (session?.user?.role !== "driver" && session?.user?.role !== "admin") {
    redirect("/tripsOverview");
  }

  // Get today's date in Manila timezone for proper trip lookup
  const now = new Date();
  const manilaOffset = 8 * 60 * 60 * 1000; // 8 hours in milliseconds
  const manilaTime = new Date(now.getTime() + manilaOffset);

  // Create Manila "today" using UTC methods to avoid server timezone issues
  const year = manilaTime.getUTCFullYear();
  const month = manilaTime.getUTCMonth();
  const day = manilaTime.getUTCDate();
  const today = new Date(Date.UTC(year, month, day));

  console.log("Manila today:", today);
  const trips = await getTripsForDay(today);
  console.log("Found trips:", trips);

  const driver =
    typeof session.user.user_id === "number"
      ? await getDriverByUserId(session.user.user_id)
      : null;

  const driverTrip = Array.isArray(trips)
    ? trips.find(
        trip => trip.driver?.id === driver?.id && trip.status !== "complete"
      )
    : undefined;

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-green-800">
                GPS Broadcast Dashboard
              </h1>
              <div className="text-sm text-gray-600">Bus Driver Interface</div>
            </div>
            <p className="text-gray-600 mb-6">
              Broadcast your real-time location to passengers tracking your bus
              route.
            </p>
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg font-semibold text-green-700">
                  {getGreeting()}
                </span>
                <span className="text-lg font-bold text-gray-800">
                  {driver?.first_name} {driver?.last_name}
                </span>
                <span className="ml-2 px-2 py-1 rounded bg-green-100 text-green-700 text-xs font-medium">
                  Bus Driver
                </span>
              </div>
              <h2 className="text-lg font-semibold text-green-700 mb-2">
                Today&apos;s Trip
              </h2>
              {driverTrip ? (
                <ul>
                  <li key={driverTrip.id}>
                    {driverTrip.src_station?.name} →{" "}
                    {driverTrip.dest_station?.name} (Bus {driverTrip.bus?.id})
                    {" | "}
                    {formatTime(driverTrip.start_time)}
                  </li>
                </ul>
              ) : (
                <div className="text-gray-500">No trips found for today.</div>
              )}
            </div>
          </div>

          <GPSBroadcastClient
            userEmail={session.user.email ?? "unknown@email.com"}
            userName={driver?.first_name ?? "Unknown Driver"}
            busId={
              driverTrip?.bus.id !== undefined
                ? String(driverTrip.bus.id)
                : "unknown"
            }
          />
        </div>
      </div>
    </div>
  );
}
