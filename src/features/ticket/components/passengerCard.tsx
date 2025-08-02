import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SquarePen, Ticket } from "lucide-react";
import { AggregatedTicketType } from "../types/types";
import RefundDialog from "@features/ticket/components/refundDialog";
import { useState } from "react";

interface TicketCardProps {
  ticket: AggregatedTicketType;
}

export default function PassengerCard({ ticket }: TicketCardProps) {
  const [isDeleted, setIsDeleted] = useState(false);

  if (isDeleted) return null;

  return (
    <div className="flex flex-col justify-center">
      <Card className="flex flex-col gap-0 p-5">
        <div className="font-semibold text-[#456A3B] text-xl">
          ₱ {Number(ticket.price).toFixed(2)}
        </div>

        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-1">
            {/*Left Side*/}
            <button>
              <Ticket />
            </button>
            <span className="text-[#525252] text-md">
              {" "}
              Ticket # {ticket.id}
            </span>
          </div>
          <div className="flex flex-row items-center gap-2 -mt-5">
            {/*Right Side*/}
            <SquarePen />
            <RefundDialog
              ticketId={ticket.id}
              onSuccess={() => setIsDeleted(true)}
            ></RefundDialog>
          </div>
        </div>
      </Card>
    </div>
  );
}
