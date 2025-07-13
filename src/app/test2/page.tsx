'use client';

import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';

const Page = () => {
  const [price, setPrice] = useState('');
  const [selectedType, setSelectedType] = useState<string | null>(null);

  return (
    <Card className='w-screen h-screen flex flex-col items-center gap-4 p-6'>
      <h1 className='text-xl font-bold'>Issue Ticket</h1>


      <div className='flex flex-col w-11/12 items-start border border-gray-300 p-4 rounded'>
        <h2 className='font-semibold mb-2'>Type:</h2>
        <div className='grid grid-cols-2 gap-2 w-full'>
          <button
            onClick={() => setSelectedType('passenger')}
            className={`border border-solid px-4 py-2 rounded ${
              selectedType === 'passenger' ? 'bg-blue-200' : ''
            }`}
          >
            Passenger
          </button>
          <button
            onClick={() => setSelectedType('baggage')}
            className={`border border-solid px-4 py-2 rounded ${
              selectedType === 'baggage' ? 'bg-blue-200' : ''
            }`}
          >
            Baggage
          </button>
        </div>
      </div>

      <div className='flex flex-col w-11/12 items-start border border-gray-300 p-4 rounded'>
        <h2 className='font-semibold mb-2'>Seats:</h2>
        <div></div>
      </div>

      <div className='flex flex-col w-11/12 items-start border border-gray-300 p-4 rounded'>
        <h2 className='font-semibold mb-2'>Price:</h2>
        <div className='w-full'>
          <Input
            placeholder='Amount'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className='mb-2'
          />
          <div className='grid grid-cols-3 gap-2 w-full'>
            {[50, 210, 137].map((amt) => (
              <button
                key={amt}
                className='border border-solid h-10 w-full rounded'
                onClick={() => setPrice(String(amt))}
              >
                {amt}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className='grid grid-cols-2 gap-4 w-11/12'>
        <button className='border border-solid py-2 rounded w-full'>Cancel</button>
        <button className='border border-solid py-2 rounded w-full'>Create</button>
      </div>

    </Card>
  );
};

export default Page;
