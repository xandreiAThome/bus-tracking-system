import { auth } from "@/features/auth/services/auth";
import TicketPageClient from "../../../../features/ticket/components/TicketPageClient";

interface TicketPageProps {
  params: Promise<{
    tripId: string;
  }>;
}

export default async function TicketPage({ params }: TicketPageProps) {
  const session = await auth();
  const { tripId } = await params;

  return <TicketPageClient tripId={tripId} session={session} />;
}
