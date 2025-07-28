"use client";
import { useState } from "react";
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
import EditTripModal from "./EditTrip";

interface TripCardProps {
  tripId: number;
  route: string;
  time: string;
  driver: string;
  status?: string; // Added optional status prop
  onStatusChange?: (newStatus: string) => void; // Callback for status updates
}

export default function TripCard({ 
  tripId, 
  route, 
  time, 
  driver,
  status: propStatus = "boarding",
  onStatusChange
}: TripCardProps) {
  const [localStatus, setLocalStatus] = useState(propStatus);
  const [openDrawer, setOpenDrawer] = useState(false);

  // Sync with prop changes
  const status = onStatusChange ? propStatus : localStatus;

  const handleStatusChange = (newStatus: string) => {
    if (onStatusChange) {
      onStatusChange(newStatus);
    } else {
      setLocalStatus(newStatus);
    }
  };

  return (
    <div className="flex flex-col justify-center">
      <Card className="flex flex-col gap-3 p-5">
        {/* Route and Time */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#456A3B]">
              {route}
            </span>
            <span className="text-sm text-gray-600">{time}</span>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button 
                aria-label="Trip options"
                className="p-1 rounded hover:bg-gray-100"
              >
                <AlignJustify className="h-5 w-5" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onSelect={() => setOpenDrawer(true)}
                className="w-full justify-center"
              >
                Issued Tickets
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Status Selector */}
        <div>
          <Select
            value={status}
            onValueChange={handleStatusChange}
            defaultValue={propStatus}
          >
            <SelectTrigger
              className={`
                w-[120px] rounded-lg font-bold ${status === "boarding" ? "bg-[#71AC61] text-white" : ""}
                ${status === "delayed" ? "bg-[#AC6161] text-white" : ""}
              `}
              aria-label="Trip status"
            >
              <SelectValue>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="boarding">Boarding</SelectItem>
              <SelectItem value="delayed">Delayed</SelectItem>
              {/* Consider adding more statuses if needed */}
            </SelectContent>
          </Select>
        </div>

        {/* Driver Info */}
        <div className="text-[#456A3B] text-sm">{driver} : {tripId}</div>

        {/* Action Buttons */}
        <div className="flex items-end justify-between">
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
          
          <div className="flex flex-col items-end gap-1">
            <div className="flex items-center gap-1">
              <span className="font-bold">15/40</span>
              <SquareArrowOutUpRight className="h-4 w-4" />
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
        tripId={tripId} // Pass tripId to the modal
      />
    </div>
  );
}