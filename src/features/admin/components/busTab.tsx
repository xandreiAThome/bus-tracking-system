import { Button } from "@/components/ui/button";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "@/components/ui/table";

export default function BusesTab() {
  // Example static data
  const buses = [
    { id: 1, plate_number: "ABC123", station: "Station 1", capacity: 50 },
    { id: 2, plate_number: "XYZ789", station: "Station 2", capacity: 40 },
  ];
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Manage Buses</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Plate Number</TableHead>
            <TableHead>Station</TableHead>
            <TableHead>Capacity</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {buses.map(bus => (
            <TableRow key={bus.id}>
              <TableCell>{bus.plate_number}</TableCell>
              <TableCell>{bus.station}</TableCell>
              <TableCell>{bus.capacity}</TableCell>
              <TableCell>
                <Button disabled>Edit</Button>
                <Button variant="destructive" className="ml-2" disabled>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button className="mt-4" disabled>
        Add Bus
      </Button>
    </div>
  );
}
