"use client";
import { useEffect, useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import {
  AlignJustify,
  SquareArrowOutUpRight,
  SquarePen,
  Map,
} from "lucide-react";
import IssuedTicketsModal from "@/features/ticket/components/issuedTicketsModal";

interface TripCardProps {
  id: number;
  start_time: string;
  end_time: string;
  dest_station_id: string;
  src_station_id: string;
  bus_id: number;
  driver_id: number;
  status: string;
}

interface Station {
  id: number;
  name: string;
}

interface Driver {
  id: number;
  first_name: string;
  last_name: string;
  user_id: number;
}

export default function TripCard(props: TripCardProps) {
  const [status, setStatus] = useState("boarding");
  const [openDrawer, setOpenDrawer] = useState(false);

  const [src, setSrc] = useState<Station>(null);
  const [dst, setDst] = useState<Station>(null);
  const [driver, setDriver] = useState<Driver>(null);

  // Fetch Source Station
  useEffect(() => {
    const fetchSrc = async () => {
      const res = await fetch(`/api/station/${props.src_station_id}`);
      const data = await res.json();
      setSrc(data);
    };
    fetchSrc();
  }, []);

  // Fetch Destination Source
  useEffect(() => {
    const fetchDst = async () => {
      const res = await fetch(`/api/station/${props.dest_station_id}`);
      const data = await res.json();
      setDst(data);
    };
    fetchDst();
  }, []);
  
  // Fetch Driver
  useEffect(() => {
    const fetchDriver = async () => {
      const res = await fetch(`/api/driver/${props.driver_id}`);
      const data = await res.json();
      setDriver(data);
    };
    fetchDriver();
  }, []);

  return (
    <div className="flex flex-col justify-center">
      <Card className="flex flex-col gap-1 p-5">
        {/* First Row*/}
        <div>
          <div className="flex items-center justify-between">
            {/* Left Side: Place and Time */}
            <div className="flex gap-2">
              <span className="font-semibold text-[#456A3B]">
                {src.name} → {dst.name}
              </span>
              <span>{formatTime(props.start_time)}</span>
            </div>

            {/* Right Side: Ellipsis Button */}

            <DropdownMenu>
              <DropdownMenuTrigger>
                <AlignJustify />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem
                  onSelect={() => setOpenDrawer(true)}
                  className="w-full justify-center"
                >
                  Issued Tickets
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="text-[#456A3B]">
          {driver.first_name} {driver.last_name}
        </div>
        <div>
          <Select
            value={status}
            onValueChange={handleStatusChange}
            defaultValue={propStatus}
          >
            <SelectTrigger
              className={`
                w-[120px] rounded-lg font-bold ${status === "boarding" ? "bg-[#AC6161] text-white" : ""}
                ${status === "transit" ? "bg-[#EFA54A] text-white" : ""}
                ${status === "complete" ? "bg-[#71AC61] text-white" : ""}
              `}
            >
              <SelectValue>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="boarding">Boarding</SelectItem>
              <SelectItem value="transit">Transit</SelectItem>
              <SelectItem value="complete">Complete</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-end justify-between">
          {/* Left Side: Place and Time */}
          <div className="flex gap-2">
            <Link href={`/map/${tripId}`} aria-label="View on map">
              <button className="p-1 rounded hover:bg-gray-100">
                <Map className="h-5 w-5" />
              </button>
            </Link>
            <EditTripModal
              tripId={tripId}
              onSuccess={() => {
                // Optional: refresh trip data
              }}
            />
          </div>

          {/* Right Side:  */}
          <div className="flex flex-col items-end">
            <div className="flex flex-row gap-1 justify-end items-baseline">
              <span className="font-bold">15/40</span>
              <span>
                <SquareArrowOutUpRight />
              </span>
            </div>
            <Link href={`/ticket/${tripId}`} passHref>
              <Button
                className="bg-[#456A3B] hover:bg-[#32442D] font-semibold"
                aria-label="Issue ticket"
              >
                Issue Ticket
              </Button>
            </Link>
          </div>
        </div>
      </Card>

      <IssuedTicketsModal
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
        tripID={props.id}
      ></IssuedTicketsModal>
    </div>
  );
}

function formatTime(timeString: string): string {
  try {
    return new Date(timeString).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });
  } catch {
    return timeString;
  }
}
