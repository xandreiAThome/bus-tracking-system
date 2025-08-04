import { auth } from "@/features/auth/services/auth";
import WebSocketWrapper from "@/features/map/components/WebSocketWrapper";

export default async function Page({
  params,
}: {
  params: Promise<{ tripId: string }>;
}) {
  const session = await auth();
  const { tripId: tripId } = await params;
  return (
    <WebSocketWrapper
      tripId={tripId}
      userName={session?.user?.name || "unknown1"}
    />
  );
}
