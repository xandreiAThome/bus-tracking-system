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
import { useEffect, useState, useCallback } from "react";
import { CashierType } from "@features/cashier/types/types";

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
  const [cashiers, setCashiers] = useState<CashierType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMeta = useCallback(async () => {
    setIsLoading(true);
    try {
      const [passRes, bagRes, cashierRes] = await Promise.all([
        fetch(`/api/ticket/passenger/trip/${tripId}`),
        fetch(`/api/ticket/baggage/trip/${tripId}`),
        fetch("/api/cashier"),
      ]);
      if (!passRes.ok || !bagRes.ok || !cashierRes.ok) {
        throw new Error("Failed to fetch meta data");
      }
      const [passData, bagData, cashierData] = await Promise.all([
        passRes.json(),
        bagRes.json(),
        cashierRes.json(),
      ]);
      setPassengerTickets(passData.passenger_tickets || passData);
      setBaggageTickets(bagData.baggage_tickets || bagData);
      setCashiers(cashierData.cashiers || cashierData);
    } catch (err) {
      console.error("Failed to fetch tickets:", err);
    } finally {
      setIsLoading(false);
    }
  }, [tripId]);

  const handleTicketUpdate = () => {
    fetchMeta(); // Refresh the tickets when a ticket is updated
  };

  useEffect(() => {
    fetchMeta();
  }, [fetchMeta]);

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
                      <PassengerCard
                        key={pass.id}
                        ticket={pass}
                        cashiers={cashiers}
                        onSuccess={handleTicketUpdate}
                      />
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
                      <BaggageCard
                        key={bag.id}
                        ticket={bag}
                        cashiers={cashiers}
                        onSuccess={handleTicketUpdate}
                      />
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
