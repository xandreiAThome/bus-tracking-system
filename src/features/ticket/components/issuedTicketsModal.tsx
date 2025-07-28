import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import PassengerCard from "@features/ticket/components/passengerCard";
import BaggageCard from "@features/ticket/components/baggageCard";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
  {
    seat: 5,
    price: 115.0,
    passenger: "Astherielle Rafael",
    ticketNo: "#3902",
    dateTime: "JUL 24 2025 12:25 PM",
  },
  {
    seat: 6,
    price: 115.0,
    passenger: "Kidlat Adlawan",
    ticketNo: "#3903",
    dateTime: "JUL 24 2025 12:25 PM",
  },
  {
    seat: 7,
    price: 115.0,
    passenger: "Kidlat Adlawan",
    ticketNo: "#3904",
    dateTime: "JUL 24 2025 12:25 PM",
  },
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
      <DrawerContent className="w-[80%] mx-auto">
        <DrawerHeader className="border-b border-gray-300">
          <DrawerTitle className="font-extrabold text-[#456A3B]">
            Issued Tickets
          </DrawerTitle>
        </DrawerHeader>
        <Tabs defaultValue="passenger" className="flex">
          <TabsList className="grid w-full grid-cols-2 pb-2 pt-5 p-0 -mb-2.5 ">
            <TabsTrigger
              value="passenger"
              className="border rounded-none font-bold text-md text-[#7B7575] data-[state=active]:text-[#456A3B] data-[state=active]:rounded-tr-lg data-[state=active]:rounded-l-none"
            >
              Passenger
            </TabsTrigger>
            <TabsTrigger
              value="baggage"
              className="border rounded-none font-bold text-md text-[#7B7575] data-[state=active]:text-[#456A3B] data-[state=active]:rounded-r-none data-[state=active]:rounded-tl-lg"
            >
              Baggage
            </TabsTrigger>
          </TabsList>
          <div className="p-4 bg-white">
            <TabsContent
              value="passenger"
              className="max-h-[60vh] min-h-[60vh] overflow-auto "
            >
              <div className="flex flex-col gap-y-4">
                {passenger.map((pass, index) => (
                  <PassengerCard
                    key={index}
                    id={pass.id}
                    price={pass.price}
                    trip={pass.trip_id}
                    cashier={pass.cashier_id}
                    type={pass.ticket_type}
                    arr={index}
                  ></PassengerCard>
                ))}
              </div>
              <div className="mt-4 sticky bottom-0 bg-white py">
                <div className="flex justify-center">
                  <Button className="h-max w-[70%] bg-[#71AC61] hover:bg-[#456A3B] font-bold text-xl rounded-lg">
                    Issue Ticket
                  </Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="baggage"
              className="max-h-[60vh] min-h-[60vh] overflow-auto "
            >
              <div className="flex flex-col gap-y-4">
                {baggage.map((bag, index) => (
                  <BaggageCard
                    key={index}
                    num={index + 1}
                    id={bag.id}
                    price={bag.price}
                    trip={bag.trip_id}
                    cashier={bag.cashier}
                    type={bag.ticket_type}
                  ></BaggageCard>
                ))}
              </div>
              <div className="mt-4 sticky bottom-0 bg-white">
                <div className="flex justify-center">
                  <Button className="h-max w-[70%] bg-[#71AC61] hover:bg-[#456A3B] font-bold text-xl rounded-lg">
                    Issue Ticket
                  </Button>
                </div>
              </div>
            </TabsContent>
          </div>
          <div className="mt-4 bottom-0">
            <div className="flex justify-center">
              <Button className="h-max w-[70%] bg-[#71AC61] hover:bg-[#456A3B] font-bold text-xl rounded-lg">
                Issue Ticket
              </Button>
            </div>
          </div>
        </Tabs>
      </DrawerContent>
    </Drawer>
  );
}
