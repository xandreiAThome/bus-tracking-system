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
import { useRef } from "react";
import { Download } from "lucide-react";
import { useDownloadExcel } from "react-export-table-to-excel";

interface BaggageTicketsTableProps {
  tickets: AggregatedTicketType[] | undefined;
  selectedTrip: AggregatedTripType | undefined;
}

export function BaggageTicketsTable({
  tickets,
  selectedTrip,
}: BaggageTicketsTableProps) {
  const tableRef = useRef<HTMLTableElement>(null);
  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: `BaggageTickets_${selectedTrip?.src_station?.name || ""}_${selectedTrip?.dest_station?.name || ""}`,
    sheet: "BaggageTickets",
  });

  if (tickets === undefined) {
    return (
      <div className="flex flex-col items-center justify-center py-8">
        <Loader2 className="animate-spin text-green-600 mb-2" size={32} />
        <span className="text-green-700 font-semibold">
          Loading baggage tickets...
        </span>
      </div>
    );
  }
  return (
    <Card className="border-green-400">
      <CardHeader className="bg-green-50 rounded-t-lg flex flex-row justify-between items-center">
        <CardTitle className="text-green-700">
          Baggage Tickets for Trip {selectedTrip?.src_station.name} {"->"}{" "}
          {selectedTrip?.dest_station.name}{" "}
          {selectedTrip?.start_time
            ? new Date(selectedTrip.start_time).toLocaleString()
            : ""}
        </CardTitle>
        <button
          onClick={onDownload}
          className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded flex items-center gap-2"
        >
          <Download size={18} /> Export to Excel
        </button>
      </CardHeader>
      <CardContent>
        <Table ref={tableRef}>
          <TableHeader>
            <TableRow>
              <TableHead>Ticket ID</TableHead>
              <TableHead>Sender #</TableHead>
              <TableHead>Dispatcher #</TableHead>
              <TableHead>Sender Name</TableHead>
              <TableHead>Receiver Name</TableHead>
              <TableHead>Item Desc</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Cashier</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tickets.length ? (
              tickets.map(ticket => (
                <TableRow key={ticket.id}>
                  <TableCell>{ticket.id}</TableCell>
                  <TableCell>{ticket.baggage_ticket.sender_no}</TableCell>
                  <TableCell>{ticket.baggage_ticket.dispatcher_no}</TableCell>
                  <TableCell>{ticket.baggage_ticket.sender_name}</TableCell>
                  <TableCell>{ticket.baggage_ticket.receiver_name}</TableCell>
                  <TableCell>{ticket.baggage_ticket.item}</TableCell>
                  <TableCell className="text-green-700 font-semibold">
                    ₱{ticket.price}
                  </TableCell>
                  <TableCell>{ticket.cashier.first_name}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={10} className="text-center text-gray-400">
                  No baggage tickets issued.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
