import { auth } from "@/features/auth/services/auth";
import TicketPageClient from "./TicketPageClient";

interface TicketPageProps {
  params: {
    tripId: string;
  };
}

export default async function TicketPage({ params }: TicketPageProps) {
  const session = await auth();

  return <TicketPageClient tripId={params.tripId} session={session} />;
}
