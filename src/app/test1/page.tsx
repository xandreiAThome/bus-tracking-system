'use client';

import { Label } from '@/components/ui/label';
import React, { useState } from 'react';

const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [hour, setHour] = useState("00");
  const [minute, setMinute] = useState("00");
  const [meridiem, setMeridiem] = useState("a.m.");

  const incrementHour = () => {
    const newHour = (parseInt(hour) + 1) % 12 || 12;
    setHour(newHour.toString().padStart(2, '0'));
  };

  const decrementHour = () => {
    const newHour = (parseInt(hour) - 1 + 12) % 12 || 12;
    setHour(newHour.toString().padStart(2, '0'));
  };

  const incrementMinute = () => {
    const newMinute = (parseInt(minute) + 1) % 60;
    setMinute(newMinute.toString().padStart(2, '0'));
  };

  const decrementMinute = () => {
    const newMinute = (parseInt(minute) - 1 + 60) % 60;
    setMinute(newMinute.toString().padStart(2, '0'));
  };

  const toggleMeridiem = () => {
    setMeridiem(prev => (prev === 'a.m.' ? 'p.m.' : 'a.m.'));
  };

  return (
    <div className='h-screen flex flex-col justify-end items-center bg-gray-100'>
      <button
        className="mb-10 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        onClick={() => setShowModal(true)}
      >
        Issue Ticket
      </button>

      {/* Modal */}
      {showModal && (
        <div className="w-11/12 bg-white rounded-t-3xl shadow-lg p-6 absolute bottom-0">
          <div className="w-full flex justify-center mb-2">
            <div className="h-1 w-24 bg-[#71AC61] rounded-full"></div>
          </div>

          <div className="w-full mb-4">
            <h2 className="text-center font-semibold text-[#71AC61] mb-2">Create Trip</h2>
            <hr className="relative w-[92vw] right-6 border-t-2 mb-4" />
          </div>


          <form className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Source Station</label>
              <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm">
                <option>Cashier Station</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Destination Station</label>
              <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm">
                <option>Choose Station</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Bus</label>
              <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm">
                <option>Choose Bus</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
              <div className="flex items-center gap-2">
                {/* Hour */}
                <div className="flex items-center border px-2 rounded">
                  <button type="button" onClick={decrementHour} className="text-lg px-2">-</button>
                  <input
                    value={hour}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (/^\d{0,2}$/.test(val)) setHour(val);
                    }}
                    onBlur={() => {
                      const n = parseInt(hour);
                      setHour((isNaN(n) ? 0 : Math.max(1, Math.min(12, n))).toString().padStart(2, '0'));
                    }}
                    className="w-10 text-center outline-none"
                  />
                  <button type="button" onClick={incrementHour} className="text-lg px-2">+</button>
                </div>

                <span className="text-xl">:</span>

                {/* Minute */}
                <div className="flex items-center border px-2 rounded">
                  <button type="button" onClick={decrementMinute} className="text-lg px-2">-</button>
                  <input
                    value={minute}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (/^\d{0,2}$/.test(val)) setMinute(val);
                    }}
                    onBlur={() => {
                      const n = parseInt(minute);
                      setMinute((isNaN(n) ? 0 : Math.min(59, Math.max(0, n))).toString().padStart(2, '0'));
                    }}
                    className="w-10 text-center outline-none"
                  />
                  <button type="button" onClick={incrementMinute} className="text-lg px-2">+</button>
                </div>

                {/* Meridiem */}
                <select
                  value={meridiem}
                  onChange={(e) => setMeridiem(e.target.value)}
                  className="ml-2 border border-gray-300 rounded px-2 py-1 text-sm"
                >
                  <option value="a.m.">a.m.</option>
                  <option value="p.m.">p.m.</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="bg-[#71AC61] text-white py-2 rounded mt-4 hover:brightness-110 transition"
            >
              Create New Trip
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Page;
