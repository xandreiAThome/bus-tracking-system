import { Button } from "@/components/ui/button";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "@/components/ui/table";

export default function StationsTab() {
  // Example static data
  const stations = [
    { id: 1, name: "Station 1", location: "Location 1" },
    { id: 2, name: "Station 2", location: "Location 2" },
  ];
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Manage Stations</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {stations.map(station => (
            <TableRow key={station.id}>
              <TableCell>{station.name}</TableCell>
              <TableCell>{station.location}</TableCell>
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
        Add Station
      </Button>
    </div>
  );
}
