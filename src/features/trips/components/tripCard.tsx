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
import EditTripModal from './EditTrip';

interface TripCardProps {
  id: number;
  start_time: string;
  end_time: string;
  dest_station_id: number;
  src_station_id: number;
  bus_id: number;
  driver_id: number;
  status: string | null;
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
  const [status, setStatus] = useState(props.status || "boarding");
  const [openDrawer, setOpenDrawer] = useState(false);
  const [loading, setLoading] = useState({
    src: true,
    dst: true,
    driver: true,
    status: false
  });

  const [src, setSrc] = useState<Station | null>(null);
  const [dst, setDst] = useState<Station | null>(null);
  const [driver, setDriver] = useState<Driver | null>(null);

  // Combined fetch for all data
  useEffect(() => {
    let isMounted = true;
    
    const fetchAllData = async () => {
      try {
        // Fetch all data in parallel
        const [srcRes, dstRes, driverRes] = await Promise.all([
          fetch(`/api/station/${props.src_station_id}`),
          fetch(`/api/station/${props.dest_station_id}`),
          fetch(`/api/driver/${props.driver_id}`)
        ]);

        // Handle source station
        if (!srcRes.ok) throw new Error("Failed to fetch source station");
        const srcData = await srcRes.json();
        if (isMounted) setSrc(srcData.station || srcData);

        // Handle destination station
        if (!dstRes.ok) throw new Error("Failed to fetch destination station");
        const dstData = await dstRes.json();
        if (isMounted) setDst(dstData.station || dstData);

        // Handle driver
        if (!driverRes.ok) throw new Error("Failed to fetch driver");
        const driverData = await driverRes.json();
        if (isMounted) setDriver(driverData.driver || driverData);

      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        if (isMounted) {
          setLoading(prev => ({ 
            ...prev, 
            src: false,
            dst: false,
            driver: false
          }));
        }
      }
    };

    fetchAllData();
    
    return () => {
      isMounted = false;
    };
  }, [props.src_station_id, props.dest_station_id, props.driver_id]);

  async function handleStatusChange(newStatus: string) {
    try {
      setLoading(prev => ({ ...prev, status: true }));
      
      const response = await fetch(`/api/trip/${props.id}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        throw new Error('Failed to update trip status');
      }

      setStatus(newStatus);
    } catch (error) {
      console.error("Error updating trip status:", error);
    } finally {
      setLoading(prev => ({ ...prev, status: false }));
    }
  }

  if (loading.src || loading.dst || loading.driver) {
    return (
      <Card className="flex flex-col gap-1 p-5">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="h-8 bg-gray-200 rounded w-[120px]"></div>
          <div className="flex justify-between">
            <div className="h-8 bg-gray-200 rounded w-24"></div>
            <div className="h-8 bg-gray-200 rounded w-24"></div>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <div className="flex flex-col justify-center">
      <Card className="flex flex-col gap-1 p-5">
        {/* First Row*/}
        <div>
          <div className="flex items-center justify-between">
            {/* Left Side: Place and Time */}
            <div className="flex gap-2">
              <span className="font-semibold text-[#456A3B]">
                {src?.name || "Unknown"} → {dst?.name || "Unknown"}
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
          {driver ? `${driver.first_name} ${driver.last_name}` : "Driver unknown"}
        </div>
        <div>
          <Select
            value={status}
            onValueChange={handleStatusChange}
            disabled={loading.status}
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
            <Link href={`/map/${props.id}`} aria-label="View on map">
              <button className="p-1 rounded hover:bg-gray-100">
                <Map className="h-5 w-5" />
              </button>
            </Link>
            <EditTripModal
              tripId={props.id}
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
            <Link href={`/ticket/${props.id}`} passHref>
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

      {/* <IssuedTicketsModal
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
        tripId={props.id}
      /> */}
    </div>
  );
}

function formatTime(timeString: string): string {
  try {
    return new Date(timeString).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return timeString;
  }
}