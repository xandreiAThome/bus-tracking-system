import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import PassengerCard from "@features/ticket/components/passengerCard";
import BaggageCard from "@features/ticket/components/baggageCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AggregatedTicketType } from "../types/types";
import { useEffect, useState } from "react";

interface IssuedTicketsModalProps {
  tripId?: number; // Added tripId pro
}

export default function IssuedTicketsModal({
  tripId,
}: IssuedTicketsModalProps) {
  const [open, setOpen] = useState(false);
  const [passengerTickets, setPassengerTickets] = useState<
    AggregatedTicketType[]
  >([]);
  const [baggageTickets, setBaggageTickets] = useState<AggregatedTicketType[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!open || !tripId) return;
    setIsLoading(true);
    // Fetch passenger tickets
    fetch(`/api/ticket/passenger/trip/${tripId}`)
      .then(res => res.json())
      .then(data => {
        setPassengerTickets(
          Array.isArray(data.passenger_tickets) ? data.passenger_tickets : []
        );
      })
      .catch(() => setPassengerTickets([]))
      .finally(() => setIsLoading(false));

    setIsLoading(true);
    // Fetch baggage tickets
    fetch(`/api/ticket/baggage/trip/${tripId}`)
      .then(res => res.json())
      .then(data => {
        setBaggageTickets(
          Array.isArray(data.baggage_tickets) ? data.baggage_tickets : []
        );
      })
      .catch(() => setBaggageTickets([]))
      .finally(() => setIsLoading(false));
  }, [tripId, open]);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button>Issued Tickets</Button>
      </DrawerTrigger>
      <DrawerContent className="mx-auto max-w-4xl">
        <DrawerHeader className="border-b border-gray-300">
          <DrawerTitle className="font-extrabold text-[#456A3B]">
            Issued Tickets
          </DrawerTitle>
        </DrawerHeader>
        {isLoading ? (
          <div className="flex items-center justify-center min-h-[40vh]">
            <span className="text-lg text-gray-500">Loading tickets...</span>
          </div>
        ) : (
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
                {passengerTickets.length === 0 ? (
                  <div className="flex items-center justify-center h-full text-gray-400 text-lg">
                    No tickets
                  </div>
                ) : (
                  <div className="flex flex-col gap-y-4">
                    {passengerTickets.map((pass: AggregatedTicketType) => (
                      <PassengerCard key={pass.id} ticket={pass} />
                    ))}
                  </div>
                )}
              </TabsContent>
              <TabsContent
                value="baggage"
                className="max-h-[60vh] min-h-[60vh] overflow-auto "
              >
                {baggageTickets.length === 0 ? (
                  <div className="flex items-center justify-center h-full text-gray-400 text-lg">
                    No tickets
                  </div>
                ) : (
                  <div className="flex flex-col gap-y-4">
                    {baggageTickets.map((bag: AggregatedTicketType) => (
                      <BaggageCard key={bag.id} ticket={bag} />
                    ))}
                  </div>
                )}
              </TabsContent>
            </div>
          </Tabs>
        )}
      </DrawerContent>
    </Drawer>
  );
}
