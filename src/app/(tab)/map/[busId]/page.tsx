import WebSocketWrapper from "@/features/map/components/WebSocketWrapper";

export default async function Page({
  params,
}: {
  params: Promise<{ busId: string }>;
}) {
  const { busId: busId } = await params;
  return <WebSocketWrapper busId={busId} />;
}
