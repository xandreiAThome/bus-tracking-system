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
  route: string;
  time: string;
  driver: string;
}

export default function TripCard(props: TripCardProps) {
  const [status, setStatus] = useState("boarding");
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div className="flex flex-col justify-center">
      <Card className="flex flex-col gap-1 p-5">
        {/* First Row*/}
        <div>
          <div className="flex items-center justify-between">
            {/* Left Side: Place and Time */}
            <div className="flex gap-2">
              <span className="font-semibold text-[#456A3B]">
                {props.route}
              </span>
              <span>{props.time}</span>
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
        <div className="text-[#456A3B]">{props.driver}</div>
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
