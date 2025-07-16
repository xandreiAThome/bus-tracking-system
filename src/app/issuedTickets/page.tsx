"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import TicketCard from '@/features/tickets/components/ticketCard';

const dummyTickets = [
  {seat:4, price: 115, passenger: 'Maria Leonora Theresa', ticketNo: '#3901', dateTime: 'JUL 24 2025 12:25 PM'},
  {seat:5, price: 115, passenger: 'Astherielle Rafael', ticketNo: '#3902', dateTime: 'JUL 24 2025 12:25 PM'},
  {seat:6, price: 115, passenger: 'Kidlat Adlawan', ticketNo: '#3903', dateTime: 'JUL 24 2025 12:25 PM'},
  {seat:7, price: 115, passenger: 'Kidlat Adlawan', ticketNo: '#3904', dateTime: 'JUL 24 2025 12:25 PM'},
]

export default function TripsOverview() {
  return (
    <div className='min-h-screen flex items-start justify-center p-5'>
      <Card className='w-full max-w-4xl h-full min-h-[calc(100vh-40px)] overflow-y-auto p-5 '>
        <CardHeader className='border-b border-gray-300'>
          <div className='flex flex-col items-center'>
            <div className='w-16 h-1.5 rounded-full bg-[#90A38B] mb-2'></div>
            <CardTitle className='mt-2 font-extrabold text-[#456A3B]'>
              Issued Tickets
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className='flex-1 overflow-y-auto mt-4'>
          <div className='flex flex-col gap-y-2'>
            {dummyTickets.map((ticket, index) => (
              <TicketCard
                key = {index}
                seat={ticket.seat}
                price={ticket.price}
                passenger={ticket.passenger}
                ticketNo={ticket.ticketNo}
                dateTime={ticket.dateTime}
              />
              ))}
          </div>
        </CardContent>
        <div className='flex mt-4 justify-center'>
          <Button className='h-max w-[80%] bg-[#71AC61] hover:bg-[#456A3B] font-bold text-xl rounded-lg'>
            Issue Ticket
          </Button>
        </div>
      </Card>
    </div>
  );
}
