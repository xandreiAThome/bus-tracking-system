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

import { useEffect, useState } from "react";

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
    await fetch(`/api/station/${id}`, { method: "DELETE" });
    fetchStations();
  };

  const handleEdit = (station: Station) => {
    setEditingId(station.id);
    setEditStation({ name: station.name });
  };

  const handleEditSave = async (id: number) => {
    await fetch(`/api/station/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: editStation.name }),
    });
    setEditingId(null);
    setEditStation({ name: "" });
    fetchStations();
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
                      <Button
                        variant="destructive"
                        onClick={() => handleDelete(station.id)}
                      >
                        Delete
                      </Button>
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
    </div>
  );
}
