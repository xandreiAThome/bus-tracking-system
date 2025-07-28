"use client";
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

// Updated mock data for trips, tickets, and tellers
const trips = [
  {
    id: 1,
    teller: "Alice",
    date: "2025-07-28",
    passengerTickets: [
      { ticketId: 101, seat: "A1", price: 200, discount: 20, cashier: "Alice" },
      { ticketId: 102, seat: "A2", price: 200, discount: 0, cashier: "Alice" },
    ],
    baggageTickets: [
      {
        ticketId: 201,
        senderNumber: "09171234567",
        dispatcherNumber: "09179876543",
        receiverNumber: "09175551234",
        senderName: "John Doe",
        receiverName: "Jane Smith",
        itemDesc: "Box of clothes",
        weight: 10,
        price: 50,
        cashier: "Alice",
      },
      {
        ticketId: 204,
        senderNumber: "09170000001",
        dispatcherNumber: "09170000002",
        receiverNumber: "09170000003",
        senderName: "Carlos Reyes",
        receiverName: "Maria Cruz",
        itemDesc: "Shoes",
        weight: 5,
        price: 30,
        cashier: "Alice",
      },
      {
        ticketId: 205,
        senderNumber: "09170000004",
        dispatcherNumber: "09170000005",
        receiverNumber: "09170000006",
        senderName: "Anna Lim",
        receiverName: "Paul Tan",
        itemDesc: "Mobile Phone",
        weight: 1,
        price: 20,
        cashier: "Alice",
      },
    ],
  },
  {
    id: 2,
    teller: "Bob",
    date: "2025-07-28",
    passengerTickets: [
      { ticketId: 103, seat: "B1", price: 300, discount: 30, cashier: "Bob" },
    ],
    baggageTickets: [
      {
        ticketId: 202,
        senderNumber: "09178889999",
        dispatcherNumber: "09179998888",
        receiverNumber: "09176667777",
        senderName: "Alice Brown",
        receiverName: "Bob Lee",
        itemDesc: "Laptop",
        weight: 15,
        price: 60,
        cashier: "Bob",
      },
      {
        ticketId: 203,
        senderNumber: "09175551234",
        dispatcherNumber: "09179998888",
        receiverNumber: "09171234567",
        senderName: "Jane Smith",
        receiverName: "John Doe",
        itemDesc: "Books",
        weight: 8,
        price: 40,
        cashier: "Bob",
      },
      {
        ticketId: 206,
        senderNumber: "09170000007",
        dispatcherNumber: "09170000008",
        receiverNumber: "09170000009",
        senderName: "Miguel Santos",
        receiverName: "Liza Gomez",
        itemDesc: "Tablet",
        weight: 2,
        price: 25,
        cashier: "Bob",
      },
      {
        ticketId: 207,
        senderNumber: "09170000010",
        dispatcherNumber: "09170000011",
        receiverNumber: "09170000012",
        senderName: "Rico Dela Cruz",
        receiverName: "Ella Fajardo",
        itemDesc: "Gift Box",
        weight: 3,
        price: 35,
        cashier: "Bob",
      },
    ],
  },
  {
    id: 3,
    teller: "Alice",
    date: "2025-07-27",
    passengerTickets: [
      { ticketId: 104, seat: "C1", price: 400, discount: 0, cashier: "Alice" },
    ],
    baggageTickets: [
      {
        ticketId: 208,
        senderNumber: "09170000013",
        dispatcherNumber: "09170000014",
        receiverNumber: "09170000015",
        senderName: "Sofia Ramos",
        receiverName: "Kevin Uy",
        itemDesc: "Camera",
        weight: 2,
        price: 45,
        cashier: "Alice",
      },
      {
        ticketId: 209,
        senderNumber: "09170000016",
        dispatcherNumber: "09170000017",
        receiverNumber: "09170000018",
        senderName: "Jessa Chua",
        receiverName: "Mark Go",
        itemDesc: "Sports Equipment",
        weight: 7,
        price: 55,
        cashier: "Alice",
      },
    ],
  },
];

function getToday() {
  return new Date().toISOString().slice(0, 10);
}

function getMonth() {
  const now = new Date();
  return now.toISOString().slice(0, 7); // "YYYY-MM"
}

export default function ReportsPage() {
  const [selectedTrip, setSelectedTrip] = useState(trips[0]?.id || null);
  const today = getToday();
  const month = getMonth();
  const todayTrips = trips.filter(t => t.date === today);
  const monthTrips = trips.filter(t => t.date.startsWith(month));

  const selectedTripData = trips.find(t => t.id === selectedTrip);

  return (
    <div className="max-w-4xl mx-auto py-8">
      <Card className="mb-6 border-green-600 pt-0">
        <CardHeader className="bg-green-600 text-white rounded-t-lg py-0">
          <CardTitle className="text-lg -pt-6">Teller Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div>
              <span className="font-semibold">Total Trips Today:</span>{" "}
              <span className="text-green-700 font-bold">
                {todayTrips.length}
              </span>
            </div>
            <div>
              <span className="font-semibold">Total Trips This Month:</span>{" "}
              <span className="text-green-700 font-bold">
                {monthTrips.length}
              </span>
            </div>
            <div>
              <label className="font-semibold mr-2">Select Trip:</label>
              <select
                className="border rounded px-2 py-1 text-green-700"
                value={selectedTrip || ""}
                onChange={e => setSelectedTrip(Number(e.target.value))}
              >
                {trips.map(trip => (
                  <option key={trip.id} value={trip.id}>
                    Trip #{trip.id} ({trip.teller}, {trip.date})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="passenger" className="w-full">
        <TabsList className="flex justify-center bg-green-100 rounded mb-4">
          <TabsTrigger
            value="passenger"
            className="text-green-700 data-[state=active]:bg-green-600 data-[state=active]:text-white"
          >
            Passenger Tickets
          </TabsTrigger>
          <TabsTrigger
            value="baggage"
            className="text-green-700 data-[state=active]:bg-green-600 data-[state=active]:text-white"
          >
            Baggage Tickets
          </TabsTrigger>
        </TabsList>
        <TabsContent value="passenger">
          <Card className="border-green-400">
            <CardHeader className="bg-green-50 rounded-t-lg">
              <CardTitle className="text-green-700">
                Passenger Tickets for Trip #{selectedTrip}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Ticket ID</TableHead>
                    <TableHead>Seat</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Discount</TableHead>
                    <TableHead>Cashier</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {selectedTripData?.passengerTickets?.length ? (
                    selectedTripData.passengerTickets.map(ticket => (
                      <TableRow key={ticket.ticketId}>
                        <TableCell>{ticket.ticketId}</TableCell>
                        <TableCell>{ticket.seat}</TableCell>
                        <TableCell className="text-green-700 font-semibold">
                          ₱{ticket.price}
                        </TableCell>
                        <TableCell>
                          {ticket.discount ? `₱${ticket.discount}` : "-"}
                        </TableCell>
                        <TableCell>{ticket.cashier}</TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={5}
                        className="text-center text-gray-400"
                      >
                        No passenger tickets issued.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="baggage">
          <Card className="border-green-400">
            <CardHeader className="bg-green-50 rounded-t-lg">
              <CardTitle className="text-green-700">
                Baggage Tickets for Trip #{selectedTrip}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Ticket ID</TableHead>
                    <TableHead>Sender #</TableHead>
                    <TableHead>Dispatcher #</TableHead>
                    <TableHead>Receiver #</TableHead>
                    <TableHead>Sender Name</TableHead>
                    <TableHead>Receiver Name</TableHead>
                    <TableHead>Item Desc</TableHead>
                    <TableHead>Weight (kg)</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Cashier</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {selectedTripData?.baggageTickets?.length ? (
                    selectedTripData.baggageTickets.map(ticket => (
                      <TableRow key={ticket.ticketId}>
                        <TableCell>{ticket.ticketId}</TableCell>
                        <TableCell>{ticket.senderNumber}</TableCell>
                        <TableCell>{ticket.dispatcherNumber}</TableCell>
                        <TableCell>{ticket.receiverNumber}</TableCell>
                        <TableCell>{ticket.senderName}</TableCell>
                        <TableCell>{ticket.receiverName}</TableCell>
                        <TableCell>{ticket.itemDesc}</TableCell>
                        <TableCell>{ticket.weight}</TableCell>
                        <TableCell className="text-green-700 font-semibold">
                          ₱{ticket.price}
                        </TableCell>
                        <TableCell>{ticket.cashier}</TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={10}
                        className="text-center text-gray-400"
                      >
                        No baggage tickets issued.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
