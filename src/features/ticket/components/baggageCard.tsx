import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, SquarePen } from "lucide-react";

interface BaggageCardProps {
  id: number;
  num: number;
  sender_no: string;
  dispatcher_no: string;
  sender_name: string;
  receiver_name: string;
  item: string;
  ticket_id: string;
  price: number;
  timeDate: string;
}

export default function BaggageCard(props: BaggageCardProps) {
  return (
    <div className="flex flex-col justify-center">
      <Card className="flex flex-col gap-0 p-5">
        <div className="font-semibold text-[#456A3B] text-xl">
          Baggage #{props.num} - ₱ {props.price.toFixed(2)}
        </div>

        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-1">
            {/*Left Side*/}
            <button>
              <ShoppingBag />
            </button>
            <span className="text-[#525252] font-medium text-lg">{props.item}</span>
          </div>
          <div className="flex flex-row items-center gap-2">
            {/*Right Side*/}
            <SquarePen />
            <Button className="h-[70%] rounded-lg bg-[#B81F1F] hover:bg-[#8B1919] font-semibold text-lg">
              Refund
            </Button>
          </div>
        </div>
        <div className="text-[#525252] -mt-2">{props.sender_name}</div>
        <div className="text-[#456A3B] text-sm mt-2">
          #{props.ticket_id} - {props.timeDate}
        </div>
      </Card>
    </div>
  );
}
