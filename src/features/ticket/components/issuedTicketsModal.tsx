import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import PassengerCard from "@features/ticket/components/passengerCard";
import BaggageCard from "@features/ticket/components/baggageCard";
import { Dispatch, SetStateAction } from "react";
import { getAllTicketsFromTrip } from "@features/ticket/services/refactorCrud";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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

const dummyBaggage = [
  {
    id: 1,
    sender_no: "09171234567",
    dispatcher_no: "09987654321",
    sender_name: "Juan Dela Cruz",
    receiver_name: "Maria Clara",
    item: "Box of clothes",
    ticket_id: "BAG001",
    price: 150.00,
    timeDate: "JUL 24 2025 12:25 PM",
  },
  {
    id: 2,
    sender_no: "09081234567",
    dispatcher_no: "09181234567",
    sender_name: "Ana Santos",
    receiver_name: "Jose Rizal",
    item: "Small appliance",
    ticket_id: "BAG002",
    price: 200.00,
    timeDate: "JUL 24 2025 12:30 PM",
  },
  {
    id: 3,
    sender_no: "09221234567",
    dispatcher_no: "09331234567",
    sender_name: "Pedro Penduko",
    receiver_name: "Luna Amihan",
    item: "Fragile glassware",
    ticket_id: "BAG003",
    price: 250.00,
    timeDate: "JUL 24 2025 12:45 PM",
  },
  {
    id: 4,
    sender_no: "09451234567",
    dispatcher_no: "09561234567",
    sender_name: "Kardo Dalisay",
    receiver_name: "Alyana Arevalo",
    item: "Backpack with books",
    ticket_id: "BAG004",
    price: 120.00,
    timeDate: "JUL 24 2025 01:00 PM",
  },
  {
    id: 5,
    sender_no: "09391234567",
    dispatcher_no: "09191234567",
    sender_name: "Liza Soberano",
    receiver_name: "Enrique Gil",
    item: "Parcel with gadgets",
    ticket_id: "BAG005",
    price: 300.00,
    timeDate: "JUL 24 2025 01:15 PM",
  },
];

interface IssuedTicketsModalProps {
  openDrawer: boolean;
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
  tripID: number;
}

export default function IssuedTicketsModal({
  openDrawer,
  setOpenDrawer,
  tripID,
}: IssuedTicketsModalProps) {
  const tickets = getAllTicketsFromTrip(tripID);

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
                {dummyTickets.map((ticket, index) => (
                  <PassengerCard
                    key={index}
                    seat={ticket.seat}
                    price={ticket.price}
                    ticketNo={ticket.ticketNo}
                    dateTime={ticket.dateTime}
                  />
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
                {dummyBaggage.map((ticket, index) => (
                  <BaggageCard
                    id={ticket.id}
                    key={index}
                    num={index + 1}
                    sender_no={ticket.sender_no}
                    dispatcher_no={ticket.dispatcher_no}
                    sender_name={ticket.sender_name}
                    receiver_name={ticket.receiver_name}
                    item={ticket.item}
                    ticket_id={ticket.ticket_id}
                    price={ticket.price}
                    timeDate={ticket.timeDate}
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
