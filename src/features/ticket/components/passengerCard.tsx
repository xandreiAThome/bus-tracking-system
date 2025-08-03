"use client";

import { Card } from "@/components/ui/card";
import { SquarePen, Ticket } from "lucide-react";
import { AggregatedTicketType, PassengerTicketType } from "../types/types";
import RefundDialog from "@features/ticket/components/refundDialog";
import { useEffect, useState } from "react";
import EditPassengerDialog from "@features/ticket/components/editPassengerModal";
import { CashierType } from "@features/cashier/types/types";

interface TicketCardProps {
  ticket: AggregatedTicketType;
  cashiers: CashierType[];
}

export default function PassengerCard({ ticket, cashiers }: TicketCardProps) {
  const [passenger, setPassenger] = useState<PassengerTicketType>();
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    const fetchPass = async () => {
      const res = await fetch(`/api/ticket/passenger/${ticket.id}`);
      if (!res.ok) {
        throw new Error(res.statusText || "Failed to fetch ticket");
      }
      const data = await res.json();
      setPassenger(data.passenger_ticket || data);
    };
    fetchPass();
  }, []);

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
            <EditPassengerDialog
              ticket={ticket}
              cashiers={cashiers}
            ></EditPassengerDialog>
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
