"use client";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SeatButton from "@/features/ticket/components/SeatButton";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface Station {
  id: number;
  name: string;
}

interface Seat {
  id: number;
  seat_number: string;
  bus_id: number;
  status: string;
}

interface Bus {
  id: string;
  plate_number: string;
}

interface Trip {
  id: number;
  src_station_id: number;
  dest_station_id: number;
  start_time: string;
  bus_id: number;
}

const Page = () => {
  const params = useParams();

  // Common state
  const [price, setPrice] = useState("");
  const [selectedType, setSelectedType] = useState("passenger");
  const [selectedCashier, setSelectedCashier] = useState("");

  // Passenger state
  const [selectedSeat, setSelectedSeat] = useState<number | null>(null);
  const [selectedStanding, setSelectedStanding] = useState<string | null>(null);

  // Baggage state
  const [senderNo, setSenderNo] = useState("");
  const [dispatcherNo, setDispatcherNo] = useState("");
  const [senderName, setSenderName] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [item, setItem] = useState("");

  const [seats, setSeats] = useState<Seat[]>([]);
  const [unavailableSeats, setUnavailableSeats] = useState<number[]>([]);
  const [trip, setTrip] = useState<Trip | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [stations, setStations] = useState<Station[]>([]);

  const dummyCashiers = [
    { id: 1, name: "JJ1" },
    { id: 2, name: "JJ2" },
    { id: 3, name: "JJ3" },
  ];

  const leftSeats = Array.from({ length: 12 }, (_, i) => i + 1);
  const rightSeats = Array.from({ length: 12 }, (_, i) => i + 13);
  const backSeats = Array.from({ length: 5 }, (_, i) => i + 25);

  useEffect(() => {
    const fetchTrip = async () => {
      if (!params.id) return;

      setIsLoading(true);
      try {
        const response = await fetch(`/api/trip/${params.id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch trip");
        }
        const data = await response.json();

        setTrip(data.trip);

        // 2. After getting trip, fetch stations for display
        const stationsResponse = await fetch("/api/station");
        const stationsData = await stationsResponse.json();
        setStations(stationsData.stations || stationsData);

        // 3. Then fetch seats using the bus_id from the trip
        if (data.trip.bus_id) {
          const seatsResponse = await fetch(
            `/api/bus/${data.trip.bus_id}/seats`
          );
          const seatsData = await seatsResponse.json();

          console.log(seatsData);

          setSeats(seatsData.seats || seatsData);

          const unavailable = (seatsData.seats || seatsData)
            .filter((seat: Seat) => seat.status === "occupied")
            .map((seat: Seat) => seat.id);
          setUnavailableSeats(unavailable);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrip();
  }, []);

  const getSeatIdByNumber = (seatNumber: number): number | null => {
    const seat = seats.find(
      s => parseInt(s.seat_number.replace(/\D/g, "")) === seatNumber
    );
    return seat?.id || null;
  };

  const getSeatNumberById = (seatId: number): number | null => {
    const seat = seats.find(s => s.id === seatId);
    return seat ? parseInt(seat.seat_number.replace(/\D/g, "")) : null;
  };

  const handleSeatSelect = (seatNumber: number) => {
    const seatId = getSeatIdByNumber(seatNumber);
    if (seatId) setSelectedSeat(seatId);
  };

  const formatTripDisplay = (trip: Trip) => {
    if (!trip || !stations.length) return "Loading trip...";

    const srcStation = stations.find(s => s.id === trip.src_station_id);
    const destStation = stations.find(s => s.id === trip.dest_station_id);

    const time = new Date(trip.start_time).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    return `${srcStation?.name || "Unknown"} → ${destStation?.name || "Unknown"} • ${time}`;
  };

  const handleBaggageSubmit = () => {
    if (!trip) return;

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

    fetch("/api/ticket", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then(response => response.json())
      .then(data => alert("Baggage Ticket successfully created"))
      .catch(error => console.error("Error:", error));
  };

  const handlePassengerSubmit = async () => {
    if (!selectedSeat || !trip) {
      alert("Please select a seat first");
      return;
    }

    const seatNumber = getSeatNumberById(selectedSeat);

    const payload = {
      price,
      trip_id: trip.id,
      cashier_id: Number(selectedCashier),
      ticket_type: "passenger",
      passenger_name: "John Doe",
      seat_id: selectedSeat,
      seat_number: seatNumber?.toString(),
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

      setUnavailableSeats(prev => [...prev, selectedSeat]);
      setSelectedSeat(null);

      alert("Passenger Ticket successfully created");
    } catch (error) {
      console.error("Error:", error);
      alert(
        error instanceof Error
          ? error.message
          : "An error occurred while creating ticket"
      );
    }
  };

  const getStationName = (stationId: number): string => {
    const station = stations.find(s => s.id === stationId);
    return station?.name || "Unknown Station";
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
      <Tabs value={selectedType} onValueChange={setSelectedType}>
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

        <TabsContent value="passenger" className="space-y-4 mt-4">
          <div className="p-4 bg-white border rounded-sm w-[400px] sm:w-[500px] md:w-[700px] lg:w-[800px]">
            <div className="flex gap-3 mb-2">
              <div className="w-full">
                <label className="text-sm font-medium mb-1 block">
                  Cashier
                </label>
                <Select
                  value={selectedCashier}
                  onValueChange={setSelectedCashier}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select cashier" />
                  </SelectTrigger>
                  <SelectContent>
                    {dummyCashiers.map(cashier => (
                      <SelectItem
                        key={cashier.id}
                        value={cashier.id.toString()}
                      >
                        {cashier.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="border rounded-lg p-3 transition-colors bg-white mb-4">
              <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg mb-4">
                {/* Trip Information */}
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 mb-1">Trip</p>
                  <h3 className="text-sm font-medium truncate">
                    {trip ? (
                      `${getStationName(trip.src_station_id)} → ${getStationName(trip.dest_station_id)}`
                    ) : (
                      <span className="text-gray-400">Loading trip...</span>
                    )}
                  </h3>
                </div>

                {/* Seat Information */}
                <div className="flex-1 min-w-0 text-right">
                  <p className="text-xs text-gray-500 mb-1">Assigned Seat</p>
                  <div className="text-sm font-medium">
                    {selectedSeat === null ? (
                      <span className="text-gray-600">Standing</span>
                    ) : (
                      <span className="text-green-600">
                        Seat {getSeatNumberById(selectedSeat)}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="p-6 border rounded bg-gray-50">
                  <div className="text-center text-xs font-medium mb-4 text-gray-600">
                    AMOEC TRANSPORT
                  </div>

                  <div className="w-full flex flex-col justify-center items-center">
                    <div className="grid grid-cols-2 gap-12 justify-center mb-5">
                      <div className="grid grid-cols-2 gap-4">
                        {leftSeats.map(seatNumber => {
                          const seatId = getSeatIdByNumber(seatNumber);
                          const isUnavailable = seatId
                            ? unavailableSeats.includes(seatId)
                            : false;
                          return (
                            <SeatButton
                              key={seatNumber}
                              seatNumber={seatNumber}
                              isSelected={selectedSeat === seatId}
                              isUnavailable={isUnavailable}
                              onSeatSelect={() =>
                                !isUnavailable && handleSeatSelect(seatNumber)
                              }
                            />
                          );
                        })}
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        {rightSeats.map(seatNumber => {
                          const seatId = getSeatIdByNumber(seatNumber);
                          const isUnavailable = seatId
                            ? unavailableSeats.includes(seatId)
                            : false;
                          return (
                            <SeatButton
                              key={seatNumber}
                              seatNumber={seatNumber}
                              isSelected={selectedSeat === seatId}
                              isUnavailable={isUnavailable}
                              onSeatSelect={() =>
                                !isUnavailable && handleSeatSelect(seatNumber)
                              }
                            />
                          );
                        })}
                      </div>
                    </div>

                    <div className="grid grid-cols-5 gap-2 justify-center pt-4 border-t">
                      {backSeats.map(seatNumber => {
                        const seatId = getSeatIdByNumber(seatNumber);
                        const isUnavailable = seatId
                          ? unavailableSeats.includes(seatId)
                          : false;
                        return (
                          <SeatButton
                            key={seatNumber}
                            seatNumber={seatNumber}
                            isSelected={selectedSeat === seatId}
                            isUnavailable={isUnavailable}
                            onSeatSelect={() =>
                              !isUnavailable && handleSeatSelect(seatNumber)
                            }
                          />
                        );
                      })}
                    </div>
                  </div>

                  <div className="text-center text-xs mt-4 text-gray-600">
                    ALLEN - CATARMAN & V.V
                  </div>
                </div>

                {selectedSeat === null && (
                  <div className="absolute top-0 left-0 w-full h-full bg-gray-300/80 z-50 rounded-md pointer-events-none" />
                )}
              </div>

              <div className="text-center mt-2">
                <button
                  onClick={() =>
                    setSelectedSeat(
                      selectedSeat === null
                        ? getSeatIdByNumber(1) || null
                        : null
                    )
                  }
                  className={`w-full border border-solid text-sm font-medium rounded-md p-1 ${
                    selectedSeat === null
                      ? "bg-[#71AC61] text-white border-gray-400"
                      : "border-[#456A3B]"
                  }`}
                >
                  Standing
                </button>

                <div className="flex justify-center gap-2 mt-2">
                  {["Student", "Senior", "PWD"].map(type => (
                    <button
                      key={type}
                      onClick={() =>
                        setSelectedStanding(
                          selectedStanding === type ? null : type
                        )
                      }
                      className={`px-3 py-1 text-xs rounded border w-full ${
                        selectedStanding === type
                          ? "bg-[#71AC61] text-white border-green-500"
                          : "bg-white border-gray-300 hover:border-green-400"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4">
              <label className="text-sm font-medium mb-2 block">Pricing</label>
              <Input
                placeholder="Input"
                value={price}
                onChange={e => setPrice(e.target.value)}
                className="mb-3"
              />
              <div className="grid grid-cols-3 gap-2">
                {[50, 137, 222].map(amt => (
                  <Button
                    key={amt}
                    variant="outline"
                    className="h-10 bg-transparent"
                    onClick={() => setPrice(String(amt))}
                  >
                    {amt}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="baggage" className="space-y-4 mt-4">
          <div className="p-4 bg-white border rounded-sm w-[400px] sm:w-[500px] md:w-[700px] lg:w-[800px]">
            <div className="flex gap-3">
              <div className="w-full">
                <label className="text-sm font-medium mb-1 block">
                  Cashier
                </label>
                <Select
                  value={selectedCashier}
                  onValueChange={setSelectedCashier}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select cashier" />
                  </SelectTrigger>
                  <SelectContent>
                    {dummyCashiers.map(cashier => (
                      <SelectItem
                        key={cashier.id}
                        value={cashier.id.toString()}
                      >
                        {cashier.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-4">
              <div>
                <label className="text-sm font-medium mb-1 block">
                  Sender no.
                </label>
                <Input
                  placeholder="Sender number"
                  value={senderNo}
                  onChange={e => setSenderNo(e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">
                  Dispatcher no.
                </label>
                <Input
                  placeholder="Dispatcher number"
                  value={dispatcherNo}
                  onChange={e => setDispatcherNo(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Sender</label>
                <Input
                  placeholder="Sender name"
                  value={senderName}
                  onChange={e => setSenderName(e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">
                  Receiver
                </label>
                <Input
                  placeholder="Receiver name"
                  value={receiverName}
                  onChange={e => setReceiverName(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="text-sm font-medium mb-1 block">Item</label>
              <Input
                placeholder="Item description"
                value={item}
                onChange={e => setItem(e.target.value)}
              />
            </div>

            <div className="mt-4">
              <label className="text-sm font-medium mb-2 block">Pricing</label>
              <Input
                placeholder="Amount"
                value={price}
                onChange={e => setPrice(e.target.value)}
                className="mb-3"
              />
              <div className="grid grid-cols-3 gap-2">
                {[50, 137, 222].map(amt => (
                  <Button
                    key={amt}
                    variant="outline"
                    className="h-10 bg-transparent"
                    onClick={() => setPrice(String(amt))}
                    type="button"
                  >
                    {amt}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <Button
        className="w-[400px] mt-6 bg-green-800 font-bold cursor-pointer hover:bg-green-600 text-white"
        onClick={() => {
          if (selectedType === "baggage") {
            handleBaggageSubmit();
          } else {
            handlePassengerSubmit();
          }
        }}
      >
        Create Ticket
      </Button>
    </div>
  );
};

export default Page;
