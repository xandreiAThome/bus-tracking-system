import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, SquarePen } from "lucide-react";
import { useEffect, useState } from 'react';

interface TicketCardProps {
  num: number;
  id: number;
  price: number;
  trip: number;
  cashier: number;
  type: string;
}

export default function BaggageCard(props: TicketCardProps) {
  const [baggage, setBaggage] = useState();
  const [trip, setTrip] = useState();

  // Fetch Baggage
  useEffect(() => {
    const fetchBaggage = async () => {
      const res = await fetch(`/api/ticket/baggage/${props.id}`);
      const data = await res.json();
      setBaggage(data);
    };
    fetchBaggage();
  }, []);

  // Fetch Trip
  useEffect(() => {
    const fetchTrip = async () => {
      const res = await fetch(`/api/trip/${props.trip}`);
      const data = await res.json();
      setTrip(data);
    };
    fetchTrip();
  }, []);

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
            <span className="text-[#525252] font-medium text-lg">{baggage.item}</span>
          </div>
          <div className="flex flex-row items-center gap-2">
            {/*Right Side*/}
            <SquarePen />
            <Button className="h-[70%] rounded-lg bg-[#B81F1F] hover:bg-[#8B1919] font-semibold text-lg">
              Refund
            </Button>
          </div>
        </div>
        <div className="text-[#525252] -mt-2">{baggage.sender_name}</div>
        <div className="text-[#456A3B] text-sm mt-2">
          #{props.id} - {trip.start_time}
        </div>
      </Card>
    </div>
  );
}
