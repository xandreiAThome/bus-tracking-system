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
import { useState } from "react";

const Page = () => {
  // Common state
  const [price, setPrice] = useState("");
  const [selectedType, setSelectedType] = useState("passenger");
  
  // Passenger state
  const [selectedSeat, setSelectedSeat] = useState<number | null>(1);
  const [previousSeat, setPreviousSeat] = useState<number | null>(1);
  const [selectedStanding, setSelectedStanding] = useState<string | null>(null);

  // Baggage state
  const [selectedTrip, setSelectedTrip] = useState("");
  const [selectedCashier, setSelectedCashier] = useState("");
  const [senderNo, setSenderNo] = useState("");
  const [dispatcherNo, setDispatcherNo] = useState("");
  const [senderName, setSenderName] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [item, setItem] = useState("");

  const seats = Array.from({ length: 36 }, (_, i) => i + 1);
  const unavailableSeats = [5, 12, 18, 25, 31];


  // Dummies because not yet made in backend
  const dummyCashiers = [
    { id: 1, name: "JJ1" },
    { id: 2, name: "JJ2" },
    { id: 3, name: "JJ3" },
  ];

  const dummyTrips = [
    { id: 1, name: "Manila -> QC" },
    { id: 2, name: "Taguig -> Pasig" },
    { id: 3, name: "Makati -> Ortigas" },
  ];

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
    
    // Here you would normally call your API:
    fetch('http://localhost:3000/api/ticket', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => alert("Baggage Ticket succesfully created"))
    .catch(error => console.error("Error:", error));
  };

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
            {/* Trip Selection */}
            <div className="flex gap-4 justify-center items-center border rounded-xl">
              <label className="text-sm font-medium ml-5 mr-10">Trip</label>
              <Select defaultValue="allen-catarman">
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="allen-catarman">
                    ALLEN → CATARMAN
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Assigned Seat */}
            <div className="border rounded-lg p-3 transition-colors bg-white">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Assigned Seat</span>
                <span className="text-sm text-gray-600">
                  {selectedSeat === null ? "Standing" : `Seat #${selectedSeat}`}
                </span>
              </div>

              {/* ⬇️ Make this div relative to allow absolute overlay inside it */}
              <div className="relative">
                <div className="grid grid-cols-6 gap-1 mb-3">
                  {seats.map(seat => (
                    <button
                      key={seat}
                      onClick={() => setSelectedSeat(seat)}
                      disabled={unavailableSeats.includes(seat)}
                      className={`
                          w-8 h-8 text-xs rounded border
                          ${
                            selectedSeat === seat
                              ? "bg-green-500 text-white border-green-500"
                              : unavailableSeats.includes(seat)
                                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                : "bg-white border-gray-300 hover:border-green-400"
                          }
                        `}
                    >
                      {seat}
                    </button>
                  ))}
                </div>

                {/* 🔒 Overlay only over the seat grid */}
                {selectedSeat === null && (
                  <div className="absolute top-0 left-0 w-full h-full bg-gray-300/80 z-50 rounded-md pointer-events-none" />
                )}
              </div>

              <div className="text-center mt-2">
                {/* Standing Button */}
                <button
                  onClick={() => {
                    if (selectedSeat === null) {
                      setSelectedSeat(1); // Or previousSeat if you store it
                    } else {
                      setSelectedSeat(null);
                    }
                  }}
                  className={`w-full border border-solid text-sm font-medium rounded-md p-1
                      ${selectedSeat === null ? "bg-[#71AC61] text-white border-gray-400" : "border-[#456A3B] data-[state=active]:text-white"}
                    `}
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
                      className={`
                          px-3 py-1 text-xs rounded border w-full
                          ${
                            selectedStanding === type
                              ? "bg-[#71AC61] text-white border-green-500"
                              : "bg-white border-gray-300 hover:border-green-400"
                          }
                        `}
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
                    {dummyTrips.map((trip) => (
                      <SelectItem key={trip.id} value={trip.id.toString()}>
                        {trip.name}
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
            // handle passenger submission
          }
        }}
      >
        Create Ticket
      </Button>
    </div>
  );
};

export default Page;