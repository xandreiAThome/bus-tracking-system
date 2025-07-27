"use client";
import { Button } from "@/components/ui/button";
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
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "@/components/ui/table";

import { useEffect, useState } from "react";

type Bus = {
  id: number;
  plate_number: string;
  station_id: number;
  capacity: number;
};

type Station = {
  id: number;
  name: string;
};

export default function BusesTab() {
  const [buses, setBuses] = useState<Bus[]>([]);
  const [stations, setStations] = useState<Station[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [adding, setAdding] = useState(false);
  const [newBus, setNewBus] = useState({
    plate_number: "",
    station_id: -1,
    capacity: 0,
  });
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editBus, setEditBus] = useState({
    plate_number: "",
    station_id: -1,
    capacity: 0,
  });

  const fetchBuses = () => {
    setLoading(true);
    fetch("/api/bus")
      .then(res => res.json())
      .then(data => {
        setBuses(data.buses || []);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load buses");
        setLoading(false);
      });
  };

  const fetchStations = () => {
    fetch("/api/station")
      .then(res => res.json())
      .then(data => {
        setStations(data.stations || []);
      });
  };

  useEffect(() => {
    fetchBuses();
    fetchStations();
  }, []);

  const handleAdd = async () => {
    if (!newBus.plate_number || newBus.station_id === -1 || !newBus.capacity)
      return;
    setAdding(true);
    await fetch("/api/bus", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBus),
    });
    setNewBus({ plate_number: "", station_id: -1, capacity: 0 });
    setAdding(false);
    fetchBuses();
  };

  const [deleteId, setDeleteId] = useState<number | null>(null);
  const handleDelete = async (id: number) => {
    await fetch(`/api/bus/${id}`, { method: "DELETE" });
    setDeleteId(null);
    fetchBuses();
  };

  const handleEdit = (bus: Bus) => {
    setEditingId(bus.id);
    setEditBus({
      plate_number: bus.plate_number,
      station_id: bus.station_id,
      capacity: bus.capacity,
    });
  };

  const handleEditSave = async (id: number) => {
    await fetch(`/api/bus/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editBus),
    });
    setEditingId(null);
    setEditBus({ plate_number: "", station_id: -1, capacity: 0 });
    fetchBuses();
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Manage Buses</h2>
      {loading ? (
        <div>Loading buses...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : (
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
                {editingId === bus.id ? (
                  <>
                    <TableCell>
                      <input
                        className="border rounded px-2 py-1 w-full"
                        value={editBus.plate_number}
                        onChange={e =>
                          setEditBus(s => ({
                            ...s,
                            plate_number: e.target.value,
                          }))
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <select
                        className="border rounded px-2 py-1 w-full"
                        value={editBus.station_id}
                        onChange={e =>
                          setEditBus(s => ({
                            ...s,
                            station_id: Number(e.target.value),
                          }))
                        }
                      >
                        <option value={-1}>Select station</option>
                        {stations.map(station => (
                          <option key={station.id} value={station.id}>
                            {station.name}
                          </option>
                        ))}
                      </select>
                    </TableCell>
                    <TableCell>
                      <input
                        type="number"
                        className="border rounded px-2 py-1 w-full"
                        value={editBus.capacity}
                        onChange={e =>
                          setEditBus(s => ({
                            ...s,
                            capacity: Number(e.target.value),
                          }))
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Button
                        onClick={() => handleEditSave(bus.id)}
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
                    <TableCell>{bus.plate_number}</TableCell>
                    <TableCell>
                      {stations.find(s => s.id === bus.station_id)?.name ||
                        bus.station_id}
                    </TableCell>
                    <TableCell>{bus.capacity}</TableCell>
                    <TableCell>
                      <Button onClick={() => handleEdit(bus)} className="mr-2">
                        Edit
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button
                            variant="destructive"
                            onClick={() => setDeleteId(bus.id)}
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
          placeholder="Plate number"
          value={newBus.plate_number}
          onChange={e =>
            setNewBus(s => ({ ...s, plate_number: e.target.value }))
          }
        />
        <select
          className="border rounded px-2 py-1"
          value={newBus.station_id}
          onChange={e =>
            setNewBus(s => ({ ...s, station_id: Number(e.target.value) }))
          }
        >
          <option value={-1}>Select station</option>
          {stations.map(station => (
            <option key={station.id} value={station.id}>
              {station.name}
            </option>
          ))}
        </select>
        <input
          type="number"
          className="border rounded px-2 py-1"
          placeholder="Capacity"
          value={newBus.capacity}
          onChange={e =>
            setNewBus(s => ({ ...s, capacity: Number(e.target.value) }))
          }
        />
        <Button
          onClick={handleAdd}
          disabled={
            adding ||
            !newBus.plate_number ||
            newBus.station_id === -1 ||
            !newBus.capacity
          }
        >
          {adding ? "Adding..." : "Add Bus"}
        </Button>
      </div>
    </div>
  );
}
