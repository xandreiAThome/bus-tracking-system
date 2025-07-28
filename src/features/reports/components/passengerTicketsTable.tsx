import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "@/components/ui/table";
import { AggregatedTicketType } from "@/features/ticket/types/types";
import { AggregatedTripType } from "@/features/trips/types/types";

interface PassengerTicketsTableProps {
  tickets: AggregatedTicketType[] | undefined;
  selectedTrip: AggregatedTripType | undefined;
}

export function PassengerTicketsTable({
  tickets,
  selectedTrip,
}: PassengerTicketsTableProps) {
  if (tickets === undefined) {
    return (
      <div className="flex flex-col items-center justify-center py-8">
        <Loader2 className="animate-spin text-green-600 mb-2" size={32} />
        <span className="text-green-700 font-semibold">
          Loading passenger tickets...
        </span>
      </div>
    );
  }
  return (
    <Card className="border-green-400">
      <CardHeader className="bg-green-50 rounded-t-lg">
        <CardTitle className="text-green-700">
          Passenger Tickets for Trip {selectedTrip?.src_station.name} {"->"}{" "}
          {selectedTrip?.dest_station.name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Ticket ID</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Discount Type</TableHead>
              <TableHead>Cashier</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tickets.length ? (
              tickets.map(ticket => (
                <TableRow key={ticket.id}>
                  <TableCell>{ticket.id}</TableCell>
                  <TableCell className="text-green-700 font-semibold">
                    ₱{ticket.price}
                  </TableCell>
                  <TableCell>
                    {ticket.passenger_ticket.discount
                      ? `${ticket.passenger_ticket.discount}`
                      : "-"}
                  </TableCell>
                  <TableCell>{ticket.cashier.first_name}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-gray-400">
                  No passenger tickets issued.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
