"use client";

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
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { useEffect, useState } from "react";
import { toast, Toaster } from "sonner";

type Station = {
  id: number;
  name: string;
};

export default function StationTab() {
  const [stations, setStations] = useState<Station[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [adding, setAdding] = useState(false);
  const [newStation, setNewStation] = useState({ name: "" });
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editStation, setEditStation] = useState({ name: "" });
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const fetchStations = () => {
    setLoading(true);
    fetch("/api/station")
      .then(res => res.json())
      .then(data => {
        setStations(data.stations || []);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load stations");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchStations();
  }, []);

  const handleAdd = async () => {
    if (!newStation.name) return;
    setAdding(true);
    await fetch("/api/station", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newStation.name }),
    });
    setNewStation({ name: "" });
    setAdding(false);
    fetchStations();
  };

  const handleDelete = async (id: number) => {
    try {
      const res = await fetch(`/api/station/${id}`, { method: "DELETE" });
      if (!res.ok) {
        toast.error("Failed to delete station");
        throw new Error("Delete Failed");
      }
      fetchStations();
      toast.success("Deleted station succesfully");

      setDeleteId(null);
    } catch {
      toast.error("Failed to delete station");
    }
  };

  const handleEdit = (station: Station) => {
    setEditingId(station.id);
    setEditStation({ name: station.name });
  };

  const handleEditSave = async (id: number) => {
    try {
      const res = await fetch(`/api/station/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: editStation.name }),
      });
      if (!res.ok) {
        toast.error("Failed to update station");
        throw new Error("PATCH failed");
      }
      toast.success("Updated station succesfully");
      setEditingId(null);
      setEditStation({ name: "" });
      fetchStations();
    } catch {
      toast.error("Failed to update station");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Manage Stations</h2>
      {loading ? (
        <div>Loading stations...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {stations.map(station => (
              <TableRow key={station.id}>
                {editingId === station.id ? (
                  <>
                    <TableCell>
                      <input
                        className="border rounded px-2 py-1 w-full"
                        value={editStation.name}
                        onChange={e =>
                          setEditStation(s => ({ ...s, name: e.target.value }))
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Button
                        onClick={() => handleEditSave(station.id)}
                        className="mr-2"
                      >
                        Save
                      </Button>
                      <Button
                        variant="secondary"
                        onClick={() => setEditingId(null)}
                      >
                        Cancel
                      </Button>
                    </TableCell>
                  </>
                ) : (
                  <>
                    <TableCell>{station.name}</TableCell>
                    <TableCell>
                      <Button
                        onClick={() => handleEdit(station)}
                        className="mr-2"
                      >
                        Edit
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button
                            variant="destructive"
                            onClick={() => setDeleteId(station.id)}
                          >
                            Delete
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Delete Bus</AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to delete this bus? This
                              action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel
                              onClick={() => setDeleteId(null)}
                            >
                              Cancel
                            </AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() =>
                                deleteId !== null && handleDelete(deleteId)
                              }
                              className="bg-red-600 hover:bg-red-700"
                            >
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </TableCell>
                  </>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
      <div className="flex gap-2 mt-4 items-center">
        <input
          className="border rounded px-2 py-1"
          placeholder="Station name"
          value={newStation.name}
          onChange={e => setNewStation(s => ({ ...s, name: e.target.value }))}
        />
        <Button onClick={handleAdd} disabled={adding || !newStation.name}>
          {adding ? "Adding..." : "Add Station"}
        </Button>
      </div>
      <Toaster position="top-right" richColors />
    </div>
  );
}
