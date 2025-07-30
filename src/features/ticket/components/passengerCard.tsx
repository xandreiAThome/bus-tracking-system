import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SquarePen, Ticket } from "lucide-react";
import { useEffect, useState } from "react";

interface TicketCardProps {
  id: number;
  arr: number;
  price: number;
  trip: number;
  cashier: number;
  type: string;
}

export default function PassengerCard(props: TicketCardProps) {
  const [passenger, setPassenger] = useState(null);
  const [trip, setTrip] = useState(null);
  const [bus, setBus] = useState(null);
  const [seats, setSeats] = useState<Seat[]>(null);

  // Fetch Passenger
  useEffect(() => {
    const fetchPassenger = async () => {
      const res = await fetch(`/api/passenger/${props.id}`);
      const data = await res.json();
      setPassenger(data);
    };
    fetchPassenger();
  }, []);

  if (passenger.discount !== "null") {
    props.price = props.price - props.price * 0.2;
  }

  // Fetch Trip
  useEffect(() => {
    const fetchTrip = async () => {
      const res = await fetch(`/api/trip/${props.trip}`);
      const data = await res.json();
      setTrip(data);
    };
    fetchTrip();
  }, []);

  // Fetch Bus
  useEffect(() => {
    const fetchBus = async () => {
      const res = await fetch(`/api/bus/${trip.bus_id}`);
      const data = await res.json();
      setBus(data);
    };
    fetchBus();
  }, []);

  // Fetch Seats
  useEffect(() => {
    const fetchSeats = async () => {
      const res = await fetch(`/api/bus/${bus.id}/seats`);
      const data = await res.json();
      setSeats(data.seats || data);
    };
    fetchSeats();
  }, []);

  const occupied = seats.filter(s => s.status === "occupied");

  return (
    <div className="flex flex-col justify-center">
      <Card className="flex flex-col gap-0 p-5">
        <div className="font-semibold text-[#456A3B] text-xl">
          Seat {occupied[props.arr].seat_number} - ₱ {props.price.toFixed(2)}
        </div>

        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-1">
            {/*Left Side*/}
            <button>
              <Ticket />
            </button>
            <span className="text-[#525252] text-md">
              {" "}
              {props.id} - {trip.start_time}
            </span>
          </div>
          <div className="flex flex-row items-center gap-2 -mt-5">
            {/*Right Side*/}
            <SquarePen />
            <Button className="h-[70%] rounded-lg bg-[#B81F1F] hover:bg-[#8B1919] font-semibold text-lg">
              Refund
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
