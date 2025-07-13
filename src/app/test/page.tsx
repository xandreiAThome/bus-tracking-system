'use client'; 


import React, { useState } from 'react';

const Page = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='h-screen flex flex-col justify-end'>
      <button
        className="mb-10 ml-5 mr-5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200 active:bg-blue-700 transition"
        onClick={() => setShowModal(true)}
      >
        Issue Ticket
      </button>

      {/* Modal */}
      
    </div>
  );
};

export default Page;
