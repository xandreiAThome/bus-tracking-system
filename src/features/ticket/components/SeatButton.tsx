import React from 'react';

interface SeatButtonProps {
  seatNumber: number;
  isSelected: boolean;
  isUnavailable: boolean;
  onSeatSelect: (seatNumber: number) => void;
}

const SeatButton = ({ seatNumber, isSelected, isUnavailable, onSeatSelect }: SeatButtonProps) => {
  return (
    <button
      onClick={() => onSeatSelect(seatNumber)}
      disabled={isUnavailable}
      className={`
        w-10 h-10 text-sm rounded border font-medium
        ${
          isSelected
            ? "bg-green-500 text-white border-green-500"
            : isUnavailable
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-white border-gray-300 hover:border-green-400"
        }
      `}
    >
      {seatNumber}
    </button>
  );
};

export default SeatButton;