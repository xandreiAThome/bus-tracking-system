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
import SeatButton from "@/features/ticket/components/SeatButton"
import { useEffect, useState } from "react";

interface Trip {
  id: number;
  start_time: string;
  end_time: string;
  dest_station_id: number;
  src_station_id: number;
  bus_id: number;
  driver_id: number;
  status: string | null;
}

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

const Page = () => {
  // Common state
  const [price, setPrice] = useState("");
  const [selectedType, setSelectedType] = useState("passenger");
  
  // Passenger state
  const [selectedSeat, setSelectedSeat] = useState<number | null>(null);
  const [selectedStanding, setSelectedStanding] = useState<string | null>(null);

  // Baggage state
  const [selectedTrip, setSelectedTrip] = useState("");
  const [selectedCashier, setSelectedCashier] = useState("");
  const [senderNo, setSenderNo] = useState("");
  const [dispatcherNo, setDispatcherNo] = useState("");
  const [senderName, setSenderName] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [item, setItem] = useState("");

  const [seats, setSeats] = useState<Seat[]>([]);
  const [unavailableSeats, setUnavailableSeats] = useState<number[]>([]);
  
  const [trips, setTrips] = useState<Trip[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [stations, setStations] = useState<Station[]>([]);
  const [selectedBus, setSelectedBus] = useState<string>("");
  const [buses, setBuses] = useState<Bus[]>([]);

  const dummyCashiers = [
    { id: 1, name: "JJ1"},
    { id: 2, name: "JJ2"},
    { id: 3, name: "JJ3"}
  ]

  // Hardcoded seat numbers (1-29)
  const leftSeats = Array.from({ length: 12 }, (_, i) => i + 1); 
  const rightSeats = Array.from({ length: 12 }, (_, i) => i + 13);
  const backSeats = Array.from({ length: 5 }, (_, i) => i + 25);

  // Fetches all the trips
  useEffect(() => {
    const fetchTrips = async () => {
      setIsLoading(true);
      
      try {
        const response = await fetch('/api/trip', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        setTrips(data.trips || data); 
      } catch (err) {
        console.error("Error:", err);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchTrips();
  }, []);

  // Fetches all the stations
  useEffect(() => {
    const fetchStations = async () => {
      const response = await fetch('/api/station');
      const data = await response.json();
      setStations(data.stations || data); 
    };
    fetchStations();
  }, []);

  // Fetches all buses
  useEffect(() => {
    const fetchBuses = async () => {
      const response = await fetch('/api/bus');
      const data = await response.json();
      setBuses(data.buses || data);
    };
    fetchBuses();
  }, []);

  // Fetches seats when bus is selected
  useEffect(() => {
    const fetchBusSeats = async () => {
      if (!selectedBus) return;
      
      try {
        const response = await fetch(`/api/bus/${selectedBus}/seats`);
        const data = await response.json();
        
        setSeats(data.seats || data);
        
        // Get unavailable seat IDs
        const unavailable = (data.seats || data)
          .filter((seat: Seat) => seat.status === 'occupied')
          .map((seat: Seat) => seat.id);
        setUnavailableSeats(unavailable);
      } catch (error) {
        console.error("Error fetching seats:", error);
      }
    };
  
    fetchBusSeats();
  }, [selectedBus]);

  // Maps seat numbers to their database IDs
  const getSeatIdByNumber = (seatNumber: number): number | null => {
    const seat = seats.find(s => parseInt(s.seat_number.replace(/\D/g, '')) === seatNumber);
    return seat?.id || null;
  };

  // Gets seat number from ID
  const getSeatNumberById = (seatId: number): number | null => {
    const seat = seats.find(s => s.id === seatId);
    return seat ? parseInt(seat.seat_number.replace(/\D/g, '')) : null;
  };

  const handleSeatSelect = (seatNumber: number) => {
    const seatId = getSeatIdByNumber(seatNumber);
    if (seatId) setSelectedSeat(seatId);
  };

  const handleBaggageSubmit = () => {
    const payload = {
      price,
      trip_id: Number(selectedTrip), 
      cashier_id: Number(selectedCashier),
      ticket_type: "baggage",
      sender_no: senderNo,
      dispatcher_no: dispatcherNo,
      sender_name: senderName,
      receiver_name: receiverName,
      item
    };

    console.log("Submitting baggage ticket:", payload);
    
    fetch('/api/ticket', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => alert("Baggage Ticket successfully created"))
    .catch(error => console.error("Error:", error));
  };

  const handlePassengerSubmit = async () => {
    if (!selectedSeat) {
      alert("Please select a seat first");
      return;
    }
  
    const seatNumber = getSeatNumberById(selectedSeat);
    
    const payload = {
      price,
      trip_id: Number(selectedTrip),
      cashier_id: Number(selectedCashier),
      ticket_type: "passenger",
      passenger_name: "John Doe",
      seat_id: selectedSeat,
      seat_number: seatNumber?.toString()
    };
  
    try {
      console.log("Creating ticket with payload:", payload);
      
      // First create the ticket
      const ticketResponse = await fetch('/api/ticket', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
  
      const ticketData = await ticketResponse.json();
      console.log("Ticket response:", ticketData);
  
      if (!ticketResponse.ok) {
        throw new Error(ticketData.message || "Failed to create ticket");
      }
  
      console.log("Updating seat status for seat ID:", selectedSeat);
      
      // Then update the seat status to occupied
      const seatResponse = await fetch(`/api/seat/${selectedSeat}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: "occupied" })
      });
  
      const seatData = await seatResponse.json();
      console.log("Seat update response:", seatData);
  
      if (!seatResponse.ok) {
        throw new Error(seatData.message || "Ticket created but failed to update seat status");
      }
  
      // Update local state to reflect the occupied seat
      setUnavailableSeats(prev => [...prev, selectedSeat]);
      setSelectedSeat(null); // Clear selection
      
      alert("Passenger Ticket successfully created");
    } catch (error) {
      console.error("Error details:", {
        error,
        payload,
        selectedSeat,
        selectedTrip,
        selectedCashier
      });
      alert(error instanceof Error ? error.message : "An error occurred while creating ticket");
    }
  };

  const formatTripDisplay = (trip: Trip, stations: Station[]) => {
    const srcStation = stations.find(s => s.id === trip.src_station_id);
    const destStation = stations.find(s => s.id === trip.dest_station_id);
  
    const time = new Date(trip.start_time).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  
    return `${srcStation?.name} → ${destStation?.name} • ${time}`;
  };

  if (isLoading) return <div className="min-h-screen bg-[#71AC61] flex items-center justify-center">Loading trips...</div>;

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
              {/* Trip Selection */}
              <div className="w-full">
                <label className="text-sm font-medium mb-1 block">Trip</label>
                <Select 
                  value={selectedTrip}
                  onValueChange={setSelectedTrip}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select trip" />
                  </SelectTrigger>
                  <SelectContent>
                    {trips.map((trip) => (
                      <SelectItem key={trip.id} value={trip.id.toString()}>
                        {formatTripDisplay(trip, stations)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Cashier Selection */}
              <div className="w-full"> 
                <label className="text-sm font-medium mb-1 block">Cashier</label>
                <Select 
                  value={selectedCashier}
                  onValueChange={setSelectedCashier}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select cashier" />
                  </SelectTrigger>
                  <SelectContent>
                    {dummyCashiers.map((cashier) => (
                      <SelectItem key={cashier.id} value={cashier.id.toString()}>
                        {cashier.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Assigned Seat */}
            <div className="border rounded-lg p-3 transition-colors bg-white mb-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium">Assigned Seat</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600 w-full">
                      {selectedSeat === null ? "Standing" : `Seat ${getSeatNumberById(selectedSeat)}`}
                    </span>
                    <Select 
                      value={selectedBus}
                      onValueChange={setSelectedBus}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Bus" />
                      </SelectTrigger>
                      <SelectContent>
                        {buses.map((bus) => (
                          <SelectItem key={bus.id} value={bus.id.toString()}>
                            {bus.plate_number}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Bus layout */}
                <div className="relative">
                  <div className="p-6 border rounded bg-gray-50">
                    <div className="text-center text-xs font-medium mb-4 text-gray-600">AMOEC TRANSPORT</div>

                    <div className="w-full flex flex-col justify-center items-center">
                      {/* Front seats: left and right columns */}
                      <div className="grid grid-cols-2 gap-12 justify-center mb-5">
                        {/* Left Seats */}
                        <div className="grid grid-cols-2 gap-4">
                          {leftSeats.map((seatNumber) => {
                            const seatId = getSeatIdByNumber(seatNumber);
                            const isUnavailable = seatId ? unavailableSeats.includes(seatId) : false;
                            return (
                              <SeatButton
                                key={seatNumber}
                                seatNumber={seatNumber}
                                isSelected={selectedSeat === seatId}
                                isUnavailable={isUnavailable}
                                onSeatSelect={() => !isUnavailable && handleSeatSelect(seatNumber)}
                              />
                            );
                          })}
                        </div>
                        
                        {/* Right Seats */}
                        <div className="grid grid-cols-2 gap-4">
                          {rightSeats.map((seatNumber) => {
                            const seatId = getSeatIdByNumber(seatNumber);
                            const isUnavailable = seatId ? unavailableSeats.includes(seatId) : false;
                            return (
                              <SeatButton
                                key={seatNumber}
                                seatNumber={seatNumber}
                                isSelected={selectedSeat === seatId}
                                isUnavailable={isUnavailable}
                                onSeatSelect={() => !isUnavailable && handleSeatSelect(seatNumber)}
                              />
                            );
                          })}
                        </div>
                      </div>

                      {/* Back seats */}
                      <div className="grid grid-cols-5 gap-2 justify-center pt-4 border-t">
                        {backSeats.map((seatNumber) => {
                          const seatId = getSeatIdByNumber(seatNumber);
                          const isUnavailable = seatId ? unavailableSeats.includes(seatId) : false;
                          return (
                            <SeatButton
                              key={seatNumber}
                              seatNumber={seatNumber}
                              isSelected={selectedSeat === seatId}
                              isUnavailable={isUnavailable}
                              onSeatSelect={() => !isUnavailable && handleSeatSelect(seatNumber)}
                            />
                          );
                        })}
                      </div>
                    </div>

                    <div className="text-center text-xs mt-4 text-gray-600">ALLEN - CATARMAN & V.V</div>
                  </div>

                  {/* Overlay when standing is selected */}
                  {selectedSeat === null && (
                    <div className="absolute top-0 left-0 w-full h-full bg-gray-300/80 z-50 rounded-md pointer-events-none" />
                  )}
                </div>

                {/* Standing and passenger type selection */}
                <div className="text-center mt-2">
                  <button
                    onClick={() => setSelectedSeat(selectedSeat === null ? getSeatIdByNumber(1) || null : null)}
                    className={`w-full border border-solid text-sm font-medium rounded-md p-1 ${
                      selectedSeat === null ? "bg-[#71AC61] text-white border-gray-400" : "border-[#456A3B]"
                    }`}
                  >
                    Standing
                  </button>

                  <div className="flex justify-center gap-2 mt-2">
                    {["Student", "Senior", "PWD"].map((type) => (
                      <button
                        key={type}
                        onClick={() => setSelectedStanding(selectedStanding === type ? null : type)}
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

              {/* Pricing Section */}
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
              {/* Trip Selection */}
              <div className="w-full">
                <label className="text-sm font-medium mb-1 block">Trip</label>
                <Select 
                  value={selectedTrip}
                  onValueChange={setSelectedTrip}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select trip" />
                  </SelectTrigger>
                  <SelectContent>
                    {trips.map((trip) => (
                      <SelectItem key={trip.id} value={trip.id.toString()}>
                        {formatTripDisplay(trip, stations)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Cashier Selection */}
              <div className="w-full"> 
                <label className="text-sm font-medium mb-1 block">Cashier</label>
                <Select 
                  value={selectedCashier}
                  onValueChange={setSelectedCashier}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select cashier" />
                  </SelectTrigger>
                  <SelectContent>
                    {dummyCashiers.map((cashier) => (
                      <SelectItem key={cashier.id} value={cashier.id.toString()}>
                        {cashier.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Sender and Dispatcher Numbers */}
            <div className="grid grid-cols-2 gap-3 mt-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">
                    Sender no.
                  </label>
                  <Input 
                    placeholder="Sender number" 
                    value={senderNo}
                    onChange={(e) => setSenderNo(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">
                    Dispatcher no.
                  </label>
                  <Input 
                    placeholder="Dispatcher number" 
                    value={dispatcherNo}
                    onChange={(e) => setDispatcherNo(e.target.value)}
                  />
                </div>
              </div>

              {/* Sender and Receiver */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Sender</label>
                  <Input 
                    placeholder="Sender name" 
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">
                    Receiver
                  </label>
                  <Input 
                    placeholder="Receiver name" 
                    value={receiverName}
                    onChange={(e) => setReceiverName(e.target.value)}
                  />
                </div>
              </div>

              {/* Item */}
              <div className="mt-4">
                <label className="text-sm font-medium mb-1 block">Item</label>
                <Input 
                  placeholder="Item description" 
                  value={item}
                  onChange={(e) => setItem(e.target.value)}
                />
              </div>

              {/* Pricing Section */}
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

      {/* Create Ticket Button */}
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