import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, SquarePen } from "lucide-react";
import { AggregatedTicketType } from "../types/types";
import RefundDialog from "@features/ticket/components/refundDialog";

interface TicketCardProps {
  ticket: AggregatedTicketType;
}

export default function BaggageCard({ ticket }: TicketCardProps) {
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
              <ShoppingBag />
            </button>
            <span className="text-[#525252] font-medium text-lg">
              Item description: {ticket.baggage_ticket.item}
            </span>
          </div>
          <div className="flex flex-row items-center gap-2">
            {/*Right Side*/}
            <SquarePen />
            <RefundDialog></RefundDialog>
          </div>
        </div>
        <div className="text-[#525252] -mt-2">
          Sender: {ticket.baggage_ticket.sender_name}
        </div>
        <div className="text-[#456A3B] text-sm mt-2">
          Baggage Ticket #{ticket.id}
        </div>
      </Card>
    </div>
  );
}
