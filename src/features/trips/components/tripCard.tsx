"use client";
import { useState } from "react";
import { Card } from '@/components/ui/card';
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';


interface TripCardProps {
  route:string,
  time: string,
  driver: string,
}

export default function TripCard(props: TripCardProps) {
  const [status, setStatus] = useState("");

  return (
    <div className="flex flex-col justify-center">
      <Card className='flex flex-col gap-1 p-5'>
        {/* First Row*/}
        <div>
          <div className='flex items-center justify-between'>
            {/* Left Side: Place and Time */}
            <div className='flex gap-2'>
              <span className='font-semibold text-[#456A3B]'>
                {props.route}
              </span>
              <span>{props.time}</span>
            </div>

            {/* Right Side: Ellipsis Button */}
            <button>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='lucide lucide-ellipsis-icon lucide-ellipsis'
              >
                <circle cx='12' cy='12' r='1' />
                <circle cx='19' cy='12' r='1' />
                <circle cx='5' cy='12' r='1' />
              </svg>
            </button>
          </div>
        </div>
        <div>
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger
              className={`
                w-[120px] rounded-lg font-bold ${status === 'boarding' ? 'bg-[#71AC61] text-white' : ''}
                ${status === 'delayed' ? 'bg-[#AC6161] text-white' : ''}
              `}
            >
              <SelectValue>{status === "status" ? "Status" : status.charAt(0).toUpperCase() + status.slice(1)}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="boarding">Boarding</SelectItem>
              <SelectItem value="delayed">Delayed</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className='text-[#456A3B]'>{props.driver}</div>
        <div className='flex items-end justify-between'>
          {/* Left Side: Place and Time */}
          <div className='flex gap-2'>
            <button>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='lucide lucide-map-icon lucide-map'
              >
                <path d='M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z' />
                <path d='M15 5.764v15' />
                <path d='M9 3.236v15' />
              </svg>
            </button>
            <button>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='lucide lucide-square-pen-icon lucide-square-pen'
              >
                <path d='M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7' />
                <path d='M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z' />
              </svg>
            </button>
          </div>

          {/* Right Side:  */}
          <div className='flex flex-col items-end'>
            <div className='flex flex-row gap-1 justify-end items-baseline'>
              <span className='font-bold'>15/40</span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round"
                     className="lucide lucide-square-arrow-out-up-right-icon lucide-square-arrow-out-up-right"><path
                  d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" /><path d="m21 3-9 9" /><path
                  d="M15 3h6v6" />
                </svg>
              </span>
            </div>
            <Button className='bg-[#456A3B] hover:bg-[#32442D] font-semibold'>issue ticket</Button>
          </div>
        </div>
      </Card>
    </div>
);
}