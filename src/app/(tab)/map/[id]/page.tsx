import WebSocketWrapper from "@/features/map/components/WebSocketWrapper";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: busId } = await params;
  return <WebSocketWrapper busId={busId} />;
}
