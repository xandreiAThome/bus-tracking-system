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
import {
  Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger,
} from '@/components/ui/drawer';
import Link from "next/link";
import {
  AlignJustify,
  SquareArrowOutUpRight,
  SquarePen,
  Map,
} from "lucide-react";
import TicketCard from '@/features/trips/components/ticketCard';

interface TripCardProps {
  route: string;
  time: string;
  driver: string;
}

const dummyTickets = [
  {
    seat: 4,
    price: 115.0,
    passenger: "Maria Leonora Theresa",
    ticketNo: "#3901",
    dateTime: "JUL 24 2025 12:25 PM",
  },
  {
    seat: 5,
    price: 115.0,
    passenger: "Astherielle Rafael",
    ticketNo: "#3902",
    dateTime: "JUL 24 2025 12:25 PM",
  },
  {
    seat: 6,
    price: 115.0,
    passenger: "Kidlat Adlawan",
    ticketNo: "#3903",
    dateTime: "JUL 24 2025 12:25 PM",
  },
  {
    seat: 7,
    price: 115.0,
    passenger: "Kidlat Adlawan",
    ticketNo: "#3904",
    dateTime: "JUL 24 2025 12:25 PM",
  },
];

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
            onValueChange={setStatus}
            defaultValue="boarding"
          >
            <SelectTrigger
              className={`
                w-[120px] rounded-lg font-bold ${status === "boarding" ? "bg-[#71AC61] text-white" : ""}
                ${status === "delayed" ? "bg-[#AC6161] text-white" : ""}
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
              <SelectItem value="delayed">Delayed</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="text-[#456A3B]">{props.driver}</div>
        <div className="flex items-end justify-between">
          {/* Left Side: Place and Time */}
          <div className="flex gap-2">
            <button>
              <Map />
            </button>
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

      {/* Issued Tickets Drawer*/}
      <Drawer open={openDrawer} onOpenChange={setOpenDrawer}>
        <DrawerContent className="w-[90%] mx-auto p-5">
          <DrawerHeader className="border-b border-gray-300">
            <DrawerTitle className="font-extrabold text-[#456A3B]">
              Issued Tickets
            </DrawerTitle>
          </DrawerHeader>
          <div className="flex flex-col gap-y-3 overflow-auto mt-5">
            {dummyTickets.map((ticket, index) => (
              <TicketCard
                key={index}
                seat={ticket.seat}
                price={ticket.price}
                passenger={ticket.passenger}
                ticketNo={ticket.ticketNo}
                dateTime={ticket.dateTime}
              />
            ))}
          </div>
          <div className="mt-4">
            <div className="flex justify-center">
              <Button className="h-max w-[70%] bg-[#71AC61] hover:bg-[#456A3B] font-bold text-xl rounded-lg">
                Issue Ticket
              </Button>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
