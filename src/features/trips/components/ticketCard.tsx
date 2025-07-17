import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
            {" "}
            {/*Left Side*/}
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-user-icon lucide-user"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </button>
            <span className="text-[#525252] text-lg">{props.passenger}</span>
          </div>
          <div className="flex flex-row items-center gap-2">
            {" "}
            {/*Right Side*/}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-square-pen-icon lucide-square-pen"
            >
              <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
            </svg>
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
