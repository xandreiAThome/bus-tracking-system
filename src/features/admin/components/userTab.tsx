import { Button } from "@/components/ui/button";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "@/components/ui/table";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function UsersTab() {
  // Example static data
  const users = [
    { id: 1, name: "Alice", email: "alice@email.com", role: "admin" },
    { id: 2, name: "Bob", email: "bob@email.com", role: "user" },
    { id: 3, name: "Charlie", email: "charlie@email.com", role: "driver" },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Manage User Roles</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map(user => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Select defaultValue={user.role}>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue className="text-left" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="user">user</SelectItem>
                    <SelectItem value="admin">admin</SelectItem>
                    <SelectItem value="cashier">cashier</SelectItem>
                    <SelectItem value="driver">driver</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell>
                <Button disabled>Save</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
