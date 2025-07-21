import GPSBroadcastClient from "@/features/gps/components/GPSBroadcastClient";

export default function GPSBroadcastPage() {
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
          </div>

          <GPSBroadcastClient
            userEmail="driver@demo.com"
            userName="Bus Driver"
          />
        </div>
      </div>
    </div>
  );
}
