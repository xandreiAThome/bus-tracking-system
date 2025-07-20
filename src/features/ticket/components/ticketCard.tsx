import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SquarePen, User } from "lucide-react";

interface TripCardProps {
  seat: number;
  price: number;
  passenger: string;
  ticketNo: string;
  dateTime: string;
}

export default function TicketCard(props: TripCardProps) {
  return (
    <div className="flex flex-col justify-center">
      <Card className="flex flex-col gap-0 p-5">
        <div className="font-semibold text-[#456A3B] text-xl">
          Seat {props.seat} - ₱ {props.price.toFixed(2)}
        </div>

        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-1">
            {/*Left Side*/}
            <button>
              <User />
            </button>
            <span className="text-[#525252] text-lg">{props.passenger}</span>
          </div>
          <div className="flex flex-row items-center gap-2">
            {/*Right Side*/}
            <SquarePen />
            <Button className="h-[70%] rounded-lg bg-[#B81F1F] hover:bg-[#8B1919] font-semibold text-lg">
              Refund
            </Button>
          </div>
        </div>

        <div className="text-[#456A3B] text-sm mt-1">
          {props.ticketNo} - {props.dateTime}
        </div>
      </Card>
    </div>
  );
}
