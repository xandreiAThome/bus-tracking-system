"use client";

import { Card } from "@/components/ui/card";
import { Ticket } from "lucide-react";
import { AggregatedTicketType } from "../types/types";
import RefundDialog from "@features/ticket/components/refundDialog";
import { useState } from "react";
import EditPassengerDialog from "@features/ticket/components/editPassengerModal";
import { CashierType } from "@features/cashier/types/types";

interface TicketCardProps {
  ticket: AggregatedTicketType;
  cashiers: CashierType[];
  onSuccess?: () => void;
}

export default function PassengerCard({
  ticket,
  cashiers,
  onSuccess,
}: TicketCardProps) {
  const [isDeleted, setIsDeleted] = useState(false);

  const handleSuccess = () => {
    if (onSuccess) onSuccess();
  };

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
            <EditPassengerDialog
              ticket={ticket}
              cashiers={cashiers}
              onSuccess={handleSuccess}
            />
            <RefundDialog
              ticketId={ticket.id}
              onSuccess={() => setIsDeleted(true)}
            ></RefundDialog>
          </div>
        </div>
        <div className="text-[#525252] text-sm mt-2">
          Seat: {ticket.seat ? `${ticket.seat.seat_number}` : "Standing"}
        </div>
        <div className="text-[#525252] text-sm">
          Cashier: {ticket.cashier.first_name} {ticket.cashier.last_name}
        </div>
      </Card>
    </div>
  );
}
