"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
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

import { useEffect, useState } from "react";
import { toast, Toaster } from "sonner";

type UserRole = "user" | "admin" | "cashier" | "driver";
type User = {
  id: number;
  name: string;
  email: string;
  image: string;
  role: UserRole;
};

type Cashier = {
  id: number;
  user_id: number;
  station_id: number;
};
export default function UserTab() {
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [cashiers, setCashiers] = useState<Cashier[]>([]);
  const [stations, setStations] = useState<{ id: number; name: string }[]>([]);
  const [editState, setEditState] = useState<
    Record<number, { role: string; station_id?: number | null }>
  >({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/api/user")
      .then(res => res.json())
      .then(data => setUsers(data.users || []));
    fetch("/api/cashier")
      .then(res => res.json())
      .then(data => setCashiers(data.cashiers || []));
    fetch("/api/station")
      .then(res => res.json())
      .then(data => setStations(data.stations || []));
  }, []);

  const handleRoleChange = (userId: number, newRole: string) => {
    setEditState(state => {
      let station_id: number | undefined = undefined;
      if (newRole === "cashier") {
        // Try to get station_id from cashier record if available
        const cashier = cashiers.find(c => c.user_id === userId);
        if (cashier) {
          station_id = cashier.station_id;
        } else if (state[userId]?.station_id) {
          station_id = state[userId].station_id;
        }
      }
      return {
        ...state,
        [userId]: {
          role: newRole,
          station_id: newRole === "cashier" ? station_id : undefined,
        },
      };
    });
  };

  const handleStationChange = (userId: number, stationId: string) => {
    setEditState(state => ({
      ...state,
      [userId]: {
        role: "cashier",
        station_id: Number(stationId),
      },
    }));
  };

  const handleSave = async (user: User) => {
    setLoading(true);
    const update = editState[user.id] || { role: user.role };
    try {
      // PATCH user role
      await fetch(`/api/user/${user.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role: update.role }),
      });

      // If cashier, always ensure entry exists or update station assignment
      if (update.role === "cashier") {
        const cashier = cashiers.find(c => c.user_id === user.id);
        // Split name into first and last name, handle single-word names
        const nameParts = user.name.split(" ");
        const first_name = nameParts[0] || "";
        const last_name =
          nameParts.length > 1 ? nameParts.slice(1).join(" ") : "";
        if (cashier) {
          // Update station assignment if station_id is provided
          await fetch(`/api/cashier/${cashier.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ station_id: update.station_id }),
          });
        } else {
          // Always create new cashier entry if not exists
          const cashierPayload: {
            first_name: string;
            last_name: string;
            user_id: number;
            station_id?: number;
          } = {
            first_name,
            last_name,
            user_id: user.id,
          };
          if (
            typeof update.station_id === "number" &&
            !isNaN(update.station_id)
          ) {
            cashierPayload.station_id = update.station_id;
          }
          await fetch(`/api/cashier`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cashierPayload),
          });
        }
      }

      // If driver, only POST if driver entry does not exist
      if (update.role === "driver") {
        // Split name into first and last name
        const [first_name, ...rest] = user.name.split(" ");
        const last_name = rest.join(" ");
        // Check if driver entry exists
        let driverExists = false;
        try {
          const res = await fetch(`/api/driver/${user.id}`);
          if (res.ok) {
            const data = await res.json();
            driverExists = !!data.driver;
          }
        } catch {}
        if (!driverExists) {
          await fetch(`/api/driver`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ user_id: user.id, first_name, last_name }),
          });
        }
      }

      setEditState(state => ({
        ...state,
        [user.id]: { role: update.role, station_id: update.station_id },
      }));
      // Refresh users and cashiers
      fetch("/api/user")
        .then(res => res.json())
        .then(data => setUsers(data.users || []));
      fetch("/api/cashier")
        .then(res => res.json())
        .then(data => setCashiers(data.cashiers || []));
      toast.success("Save successful");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Save failed");
    }
    setLoading(false);
  };

  const handleDelete = async (id: number) => {
    setLoading(true);
    await fetch(`/api/user/${id}`, { method: "DELETE" });
    setDeleteId(null);
    fetch("/api/user")
      .then(res => res.json())
      .then(data => setUsers(data.users || []));
    setLoading(false);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Manage User Roles</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Station</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user: User) => {
            const edit = editState[user.id] || { role: user.role };
            // Find cashier record for this user
            const cashier = cashiers.find(c => c.user_id === user.id);
            return (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Select
                    value={edit.role}
                    onValueChange={val => handleRoleChange(user.id, val)}
                  >
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
                  {edit.role === "cashier" ? (
                    <Select
                      value={
                        typeof edit.station_id === "number"
                          ? String(edit.station_id)
                          : cashier
                            ? String(cashier.station_id)
                            : ""
                      }
                      onValueChange={val => handleStationChange(user.id, val)}
                    >
                      <SelectTrigger className="w-[140px]">
                        <SelectValue placeholder="Assign station" />
                      </SelectTrigger>
                      <SelectContent>
                        {stations.map(station => (
                          <SelectItem
                            key={station.id}
                            value={String(station.id)}
                          >
                            {station.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  ) : (
                    <span className="text-gray-400 italic">N/A</span>
                  )}
                </TableCell>
                <TableCell className="flex gap-2">
                  <Button onClick={() => handleSave(user)} disabled={loading}>
                    Save
                  </Button>
                  <Dialog
                    open={deleteId === user.id}
                    onOpenChange={open => setDeleteId(open ? user.id : null)}
                  >
                    <DialogTrigger asChild>
                      <Button variant="destructive">Delete</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Delete User</DialogTitle>
                      </DialogHeader>
                      <p>
                        Are you sure you want to delete <b>{user.name}</b>?
                      </p>
                      <DialogFooter>
                        <Button
                          variant="secondary"
                          onClick={() => setDeleteId(null)}
                        >
                          Cancel
                        </Button>
                        <Button
                          variant="destructive"
                          onClick={() => handleDelete(user.id)}
                          disabled={loading}
                        >
                          Delete
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      {/* Sonner Toaster for notifications */}
      <Toaster position="top-right" richColors />
    </div>
  );
}
