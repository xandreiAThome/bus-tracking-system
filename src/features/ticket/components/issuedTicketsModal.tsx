import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import TicketCard from "./ticketCard";
import { Dispatch, SetStateAction } from "react";

interface Ticket {
  seat: number;
  price: number;
  passenger: string;
  ticketNo: string;
  dateTime: string;
}

interface IssuedTicketsModalProps {
  openDrawer: boolean;
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
  tripId?: number; // Added tripId prop
  tickets?: Ticket[]; // Allow passing tickets as prop
  onIssueTicket?: () => void; // Callback for issue ticket action
}

const defaultTickets: Ticket[] = [
  {
    seat: 4,
    price: 115.0,
    passenger: "Maria Leonora Theresa",
    ticketNo: "#3901",
    dateTime: "JUL 24 2025 12:25 PM",
  },
  // ... other default tickets
];

export default function IssuedTicketsModal({
  openDrawer,
  setOpenDrawer,
  tripId,
  tickets = defaultTickets,
  onIssueTicket,
}: IssuedTicketsModalProps) {
  const handleIssueTicket = () => {
    if (onIssueTicket) {
      onIssueTicket();
    } else {
      // Default behavior if no handler provided
      window.location.href = `/ticket/${tripId || ''}`;
    }
    setOpenDrawer(false);
  };

  return (
    <Drawer open={openDrawer} onOpenChange={setOpenDrawer}>
      <DrawerContent className="w-full sm:w-[90%] mx-auto p-5 max-h-[90vh]">
        <DrawerHeader className="border-b border-gray-300 px-0">
          <DrawerTitle className="font-extrabold text-[#456A3B] text-center">
            Issued Tickets{tripId ? ` (Trip #${tripId})` : ''}
          </DrawerTitle>
        </DrawerHeader>
        
        <div className="flex flex-col gap-4 mt-5 px-1 overflow-y-auto">
          {tickets.length > 0 ? (
            tickets.map((ticket) => (
              <TicketCard
                key={`${ticket.ticketNo}-${ticket.seat}`}
                seat={ticket.seat}
                price={ticket.price}
                passenger={ticket.passenger}
                ticketNo={ticket.ticketNo}
                dateTime={ticket.dateTime}
              />
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              No tickets issued yet
            </div>
          )}
        </div>

        <div className="mt-6 sticky bottom-0 bg-background pt-4 pb-2">
          <Button 
            onClick={handleIssueTicket}
            className="h-12 w-full sm:w-[70%] mx-auto bg-[#71AC61] hover:bg-[#456A3B] font-bold text-lg rounded-lg"
            size="lg"
          >
            Issue New Ticket
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
}