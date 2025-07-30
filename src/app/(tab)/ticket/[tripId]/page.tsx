"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import TicketPassengerForm from "@/features/ticket/components/TicketPassengerForm";
import TicketBaggageForm from "@/features/ticket/components/TicketBaggageForm";
import { CashierType } from "@/features/cashier/types/types";
import { SeatType } from "@/features/seat/types/types";
import { AggregatedTripType } from "@/features/trips/types/types";

export default function Page() {
  const params = useParams();
  const [trip, setTrip] = useState<AggregatedTripType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [price, setPrice] = useState("");
  const [selectedType, setSelectedType] = useState("passenger");
  const [selectedCashier, setSelectedCashier] = useState("");
  const [selectedSeat, setSelectedSeat] = useState<number | null>(null);
  const [selectedStanding, setSelectedStanding] = useState<string | null>(null);
  const [senderNo, setSenderNo] = useState("");
  const [dispatcherNo, setDispatcherNo] = useState("");
  const [senderName, setSenderName] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [item, setItem] = useState("");

  const [cashiers, setCashiers] = useState<CashierType[]>([]);
  const [seats, setSeats] = useState<SeatType[]>([]);
  const [unavailableSeats, setUnavailableSeats] = useState<number[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const leftSeats = Array.from({ length: 12 }, (_, i) => i + 1);
  const rightSeats = Array.from({ length: 12 }, (_, i) => i + 13);
  const backSeats = Array.from({ length: 5 }, (_, i) => i + 25);

  useEffect(() => {
    let ignore = false;
    async function getCashiers() {
      const res = await fetch("/api/cashier");
      const data = await res.json();
      if (!res.ok) throw new Error("Failed to fetch cashiers");
      if (!ignore) setCashiers(data.cashiers);
    }
    getCashiers();
    return () => {
      ignore = true;
    };
  }, []);

  useEffect(() => {
    let ignore = false;
    async function fetchTripAndSeats() {
      if (!params?.id) return;
      setIsLoading(true);
      try {
        const tripRes = await fetch(`/api/trip/${params.id}`);
        if (!tripRes.ok) throw new Error("Failed to fetch trip");
        const tripData = await tripRes.json();
        const tripObj: AggregatedTripType = {
          ...tripData.trip,
          start_time: tripData.trip.start_time
            ? new Date(tripData.trip.start_time)
            : null,
          end_time: tripData.trip.end_time
            ? new Date(tripData.trip.end_time)
            : null,
        };
        if (!ignore) setTrip(tripObj);

        // Fetch seats if bus id exists
        if (tripObj.bus && tripObj.bus.id) {
          const seatsRes = await fetch(`/api/bus/${tripObj.bus.id}/seats`);
          const seatsData = await seatsRes.json();
          const seatList = seatsData.seats || seatsData;
          if (!ignore) {
            setSeats(seatList);
            const unavailable = seatList
              .filter((seat: SeatType) => seat.status === "occupied")
              .map((seat: SeatType) => seat.id);
            setUnavailableSeats(unavailable);
          }
        }
      } catch (error) {
        console.error("Error fetching trip or seats:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchTripAndSeats();
    return () => {
      ignore = true;
    };
  }, [params?.id]);

  const getSeat = (query: { id?: number; number?: number }) => {
    if (query.id !== undefined) {
      return seats.find(s => s.id === query.id) || null;
    }
    if (query.number !== undefined) {
      return (
        seats.find(
          s => parseInt(s.seat_number.replace(/\D/g, "")) === query.number
        ) || null
      );
    }
    return null;
  };

  const handleSeatSelect = (seatNumber: number) => {
    const seat = getSeat({ number: seatNumber });
    if (seat) setSelectedSeat(seat.id);
  };

  const handleBaggageSubmit = async () => {
    if (!trip) return;
    setIsSubmitting(true);
    const payload = {
      price,
      trip_id: trip.id,
      cashier_id: Number(selectedCashier),
      ticket_type: "baggage",
      sender_no: senderNo,
      dispatcher_no: dispatcherNo,
      sender_name: senderName,
      receiver_name: receiverName,
      item,
    };
    try {
      const response = await fetch("/api/ticket", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to create baggage ticket");
      }
      window.alert("Baggage Ticket successfully created");
    } catch (error) {
      console.error("Error:", error);
      window.alert(
        error instanceof Error
          ? error.message
          : "An error occurred while creating baggage ticket"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePassengerSubmit = async () => {
    const seatNumber =
      getSeat({ id: selectedSeat ?? undefined })?.seat_number || null;
    setIsSubmitting(true);
    const payload = {
      price,
      trip_id: trip?.id || null,
      cashier_id: Number(selectedCashier),
      ticket_type: "passenger",
      passenger_name: "John Doe",
      seat_id: selectedSeat,
      seat_number: seatNumber,
    };
    try {
      const ticketResponse = await fetch("/api/ticket", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const ticketData = await ticketResponse.json();
      if (!ticketResponse.ok) {
        throw new Error(ticketData.message || "Failed to create ticket");
      }
      const seatResponse = await fetch(`/api/seat/${selectedSeat}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "occupied" }),
      });
      const seatData = await seatResponse.json();
      if (!seatResponse.ok) {
        throw new Error(
          seatData.message || "Ticket created but failed to update seat status"
        );
      }
      if (selectedSeat !== null) {
        setUnavailableSeats(prev => [...prev, selectedSeat]);
      }
      setSelectedSeat(null);
      window.alert("Passenger Ticket successfully created");
    } catch (error) {
      console.error("Error:", error);
      window.alert(
        error instanceof Error
          ? error.message
          : "An error occurred while creating ticket"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading)
    return (
      <div className="min-h-screen bg-[#71AC61] flex items-center justify-center">
        Loading...
      </div>
    );
  if (!trip)
    return (
      <div className="min-h-screen bg-[#71AC61] flex items-center justify-center">
        Trip not found
      </div>
    );

  return (
    <div className="min-h-screen bg-[#71AC61] flex flex-col items-center justify-center p-4">
      <h1 className="text-lg font-semibold text-center mt-5 text-[#FFFFFF]">
        Issue Tickets
      </h1>
      <Tabs
        value={selectedType}
        onValueChange={setSelectedType}
        className="mt-2 w-full max-w-4xl"
      >
        <TabsList className="grid w-full grid-cols-2 pb-2 p-0 -my-1.5 bg-[#71AC61] -mb-5.5 mt-4">
          <TabsTrigger
            value="passenger"
            className="bg-[#71AC61] text-white data-[state=active]:bg-white data-[state=active]:text-[#71AC61] border rounded-b-none pb-4"
          >
            Passenger
          </TabsTrigger>
          <TabsTrigger
            value="baggage"
            className="bg-[#71AC61] text-white data-[state=active]:bg-white data-[state=active]:text-[#71AC61] border rounded-b-none pb-4"
          >
            Baggage
          </TabsTrigger>
        </TabsList>
        <TabsContent value="passenger" className="space-y-4 mt-4 max-w-4xl">
          <TicketPassengerForm
            price={price}
            setPrice={setPrice}
            selectedCashier={selectedCashier}
            setSelectedCashier={setSelectedCashier}
            selectedSeat={selectedSeat}
            setSelectedSeat={setSelectedSeat}
            selectedStanding={selectedStanding}
            setSelectedStanding={setSelectedStanding}
            trip={trip}
            seats={seats}
            unavailableSeats={unavailableSeats}
            leftSeats={leftSeats}
            rightSeats={rightSeats}
            backSeats={backSeats}
            handleSeatSelect={handleSeatSelect}
            cashiers={cashiers}
          />
        </TabsContent>
        <TabsContent value="baggage" className="space-y-4 mt-4">
          <TicketBaggageForm
            price={price}
            setPrice={setPrice}
            selectedCashier={selectedCashier}
            setSelectedCashier={setSelectedCashier}
            senderNo={senderNo}
            setSenderNo={setSenderNo}
            dispatcherNo={dispatcherNo}
            setDispatcherNo={setDispatcherNo}
            senderName={senderName}
            setSenderName={setSenderName}
            receiverName={receiverName}
            setReceiverName={setReceiverName}
            item={item}
            setItem={setItem}
            cashiers={cashiers}
          />
        </TabsContent>
      </Tabs>
      <Button
        className="max-w-4xl w-full mt-6 bg-green-800 font-bold cursor-pointer hover:bg-green-600 text-xl text-white"
        onClick={() => {
          if (selectedType === "baggage") {
            handleBaggageSubmit();
          } else {
            handlePassengerSubmit();
          }
        }}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Creating..." : "Create Ticket"}
      </Button>
    </div>
  );
}
