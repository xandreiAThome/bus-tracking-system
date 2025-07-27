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

  const leftSeats = Array.from({ length: 12 }, (_, i) => i + 1); 
  const rightSeats = Array.from({ length: 12 }, (_, i) => i + 13);
  const backSeats = Array.from({ length: 5}, (_, i) => i + 25);
  const unavailableSeats = [5, 12, 18, 25, 31];

  const [trips, setTrips] = useState<Trip[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [stations, setStations] = useState([]);

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

  useEffect(() => {
    const fetchStations = async () => {
      const response = await fetch('/api/station');
      const data = await response.json();
      setStations(data.stations || data); 
    };
    fetchStations();
  }, []);

  // Dummy cashiers
  const dummyCashiers = [
    { id: 1, name: "JJ1" },
    { id: 2, name: "JJ2" },
    { id: 3, name: "JJ3" },
  ];

  const handleSeatSelect = (seatNumber: number) => {
    setSelectedSeat(seatNumber);
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

  const handlePassengerSubmit = () => {
    const payload = {
      price,
      trip_id: Number(selectedTrip),
      cashier_id: Number(selectedCashier),
      ticket_type: "passenger",
      passenger_name: "John Doe", 
      seat_number: selectedSeat
    };

    console.log("Submitting passenger ticket:", payload);
    
    fetch('/api/ticket', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => alert("Passenger Ticket successfully created"))
    .catch(error => console.error("Error:", error));
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
      <h1 className="text-lg font-semibold text-center mb-3 text-[#FFFFFF]">
        Issue Tickets
      </h1>
      <Tabs value={selectedType} onValueChange={setSelectedType}>
        <TabsList className="grid w-full grid-cols-2 pb-2 p-0 -my-2.5 bg-[#71AC61]">
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
                  <span className="text-sm text-gray-600 w-full">{selectedSeat === null ? "Standing" : `Seat #${selectedSeat}`}</span>
                  <Select 
                    value={selectedCashier}
                    onValueChange={setSelectedCashier}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Bus" />
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

                {/* Bus layout */}
                <div className="relative">
                  <div className="p-6 border rounded bg-gray-50">
                    <div className="text-center text-xs font-medium mb-4 text-gray-600">AMOEC TRANSPORT</div>

                    <div className="w-full flex flex-col justify-center items-center">
                      {/* Front seats: left and right columns */}
                      <div className="grid grid-cols-2 gap-12 justify-center mb-5">
                        {/* Right Seats (1-4) */}
                        <div className="grid grid-cols-2 gap-4">
                          {leftSeats.map((seat) => (
                            <SeatButton
                              key={seat}
                              seatNumber={seat}
                              isSelected={selectedSeat === seat}
                              isUnavailable={unavailableSeats.includes(seat)}
                              onSeatSelect={handleSeatSelect}
                            />
                          ))}

                        </div>
                        
                        {/* Left Seats (5-6) */}
                        <div className="grid grid-cols-2 gap-4">
                          {rightSeats.map((seat) => (
                            <SeatButton
                              key={seat}
                              seatNumber={seat}
                              isSelected={selectedSeat === seat}
                              isUnavailable={unavailableSeats.includes(seat)}
                              onSeatSelect={handleSeatSelect}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Back seats: 25-29 */}
                      <div className="grid grid-cols-5 gap-2 justify-center pt-4 border-t">
                        {backSeats.map((seat) => (
                          <SeatButton
                            key={seat}
                            seatNumber={seat}
                            isSelected={selectedSeat === seat}
                            isUnavailable={unavailableSeats.includes(seat)}
                            onSeatSelect={handleSeatSelect}
                          />
                        ))}
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
                    onClick={() => setSelectedSeat(selectedSeat === null ? 1 : null)}
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