import WebSocketWrapper from "@/features/map/components/WebSocketWrapper";

export default async function Page({ params }: { params: { id: string } }) {
  const { id: busId } = await params;
  return <WebSocketWrapper busId={busId} />;
}
