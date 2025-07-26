import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import TicketCard from "./ticketCard";
import { Dispatch, SetStateAction } from "react";
import { getAllTickets } from '@features/ticket/services/crud';

const dummyTickets = [
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
}: {
  openDrawer: boolean;
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
}) {
  const tickets = getAllTickets()
  return (
    <Drawer open={openDrawer} onOpenChange={setOpenDrawer}>
      <DrawerContent className="w-[90%] mx-auto p-5">
        <DrawerHeader className="border-b border-gray-300">
          <DrawerTitle className="font-extrabold text-[#456A3B]">
            Issued Tickets
          </DrawerTitle>
        </DrawerHeader>
        <div className="flex flex-col gap-y-3 overflow-auto mt-5">
          {dummyTickets.map((ticket, index) => (
            <TicketCard
              key={index}
              seat={ticket.seat}
              price={ticket.price}
              passenger={ticket.passenger}
              ticketNo={ticket.ticketNo}
              dateTime={ticket.dateTime}
            />
          ))}
        </div>
        <div className="mt-4">
          <div className="flex justify-center">
            <Button className="h-max w-[70%] bg-[#71AC61] hover:bg-[#456A3B] font-bold text-xl rounded-lg">
              Issue Ticket
            </Button>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
