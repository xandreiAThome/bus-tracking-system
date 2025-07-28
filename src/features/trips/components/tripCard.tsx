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
import { getStation } from '@features/station/services/crud';

interface TripCardProps {
  id: number;
  start: string;
  end: string;
  dst: number;
  src: number;
  bus: number;
  driver_id: number;
  status: string;
}

export default function TripCard(props: TripCardProps) {
  const [status, setStatus] = useState("boarding");
  const [openDrawer, setOpenDrawer] = useState(false);

  const [src, setSrc] = useState(null);
  const [dst, setDst] = useState(null);
  const [driver, setDriver] = useState(null);

  // Fetch Source Station
  useEffect(() => {
    const fetchSrc = async () => {
      const res = await fetch(`/api/station/${props.src}`);
      const data = await res.json();
      setSrc(data);
    };
    fetchSrc();
  }, []);

  // Fetch Destination Station
  useEffect(() => {
    const fetchDst = async () => {
      const res = await fetch(`/api/station/${props.dst}`);
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
              <span>{props.start}</span>
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
          {driver.first_name} {driver.last_name} - #{props.bus}
        </div>
        <div>
          <Select
            value={status}
            onValueChange={setStatus}
            defaultValue="boarding"
          >
            <SelectTrigger
              className={`
                w-[120px] rounded-lg font-bold ${status === "boarding" ? "bg-[#AC6161] text-white" : ""}
                ${status === "transit" ? "bg-[#EFA54A] text-white" : ""}
                ${status === "complete" ? "bg-[#71AC61] text-white" : ""}
              `}
            >
              <SelectValue>
                {status === "status"
                  ? "Status"
                  : status.charAt(0).toUpperCase() + status.slice(1)}
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
            {/* TEMPORARY, CHANGE TO THE BUS ID OF THE TRIP WHEN INTEGRATED TO THE BACKEND */}
            <Link href={props.bus}>
              <Map />
            </Link>
            <button>
              <SquarePen />
            </button>
          </div>

          {/* Right Side:  */}
          <div className="flex flex-col items-end">
            <div className="flex flex-row gap-1 justify-end items-baseline">
              <span className="font-bold">15/40</span>
              <span>
                <SquareArrowOutUpRight />
              </span>
            </div>
            <Link href={"ticket"}>
              <Button className="bg-[#456A3B] hover:bg-[#32442D] font-semibold">
                issue ticket
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
