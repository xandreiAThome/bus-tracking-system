import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SeatButton from "./SeatButton";
import { SeatType } from "@/features/seat/types/types";
import { AggregatedTripType } from "@/features/trips/types/types";
import { CashierType } from "@/features/cashier/types/types";

interface TicketPassengerFormProps {
  price: string;
  setPrice: (v: string) => void;
  selectedCashier: string;
  setSelectedCashier: (v: string) => void;
  selectedSeat: number | null;
  setSelectedSeat: (v: number | null) => void;
  selectedStanding: string | null;
  setSelectedStanding: (v: string | null) => void;
  trip: AggregatedTripType;
  seats: SeatType[];
  unavailableSeats: number[];
  leftSeats: number[];
  rightSeats: number[];
  backSeats: number[];
  cashiers: CashierType[];
  handleSeatSelect: (seatNumber: number) => void;
}

const TicketPassengerForm: React.FC<TicketPassengerFormProps> = ({
  price,
  setPrice,
  selectedCashier,
  setSelectedCashier,
  selectedSeat,
  setSelectedSeat,
  selectedStanding,
  setSelectedStanding,
  trip,
  seats,
  unavailableSeats,
  leftSeats,
  rightSeats,
  backSeats,
  cashiers,
  handleSeatSelect,
}) => {
  // Utility to get seat by id or number

  const getSeat = (query: { id?: number; number?: number }) => {
    if (query.id !== undefined) {
      return seats.find(s => s.id === query.id) || null;
    }
    if (query.number !== undefined) {
      return (
        seats.find(
          s => parseInt(s.seat_number.replace(/\D/g, "")) === query.number
        ) || null
      );
    }
    return null;
  };

  return (
    <div className="p-4 bg-white border rounded-sm">
      <div className="flex gap-3 mb-2">
        <div className="w-full">
          <label className="text-sm font-medium mb-1 block">Cashier</label>
          <Select value={selectedCashier} onValueChange={setSelectedCashier}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select cashier" />
            </SelectTrigger>
            <SelectContent>
              {cashiers.map(cashier => (
                <SelectItem key={cashier.id} value={cashier.id.toString()}>
                  {cashier.first_name} {cashier.last_name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="border rounded-lg p-3 transition-colors bg-white mb-4">
        <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg mb-4">
          {/* Trip Information */}
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-500 mb-1">Trip</p>
            <h3 className="text-sm font-medium truncate">
              {trip ? (
                `${trip.src_station?.name || "Unknown Station"} → ${trip.dest_station?.name || "Unknown Station"}`
              ) : (
                <span className="text-gray-400">Loading trip...</span>
              )}
            </h3>
          </div>

          {/* Seat Information */}
          <div className="flex-1 min-w-0 text-right">
            <p className="text-xs text-gray-500 mb-1">Assigned Seat</p>
            <div className="text-sm font-medium">
              {selectedSeat === null ? (
                <span className="text-gray-600">Standing</span>
              ) : (
                <span className="text-green-600">
                  Seat {getSeat({ id: selectedSeat })?.seat_number || ""}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="p-6 border rounded bg-gray-50">
            <div className="text-center text-xs font-medium mb-4 text-gray-600">
              AMOEC TRANSPORT
            </div>

            <div className="w-full flex flex-col justify-center items-center">
              <div className="grid grid-cols-2 gap-12 justify-center mb-5">
                <div className="grid grid-cols-2 gap-4">
                  {leftSeats.map(seatNumber => {
                    const seat = getSeat({ number: seatNumber });
                    const isUnavailable = seat
                      ? unavailableSeats.includes(seat.id)
                      : false;
                    return (
                      <SeatButton
                        key={seatNumber}
                        seatNumber={seatNumber}
                        isSelected={selectedSeat === (seat && seat.id)}
                        isUnavailable={isUnavailable}
                        onSeatSelect={() =>
                          !isUnavailable && handleSeatSelect(seatNumber)
                        }
                      />
                    );
                  })}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {rightSeats.map(seatNumber => {
                    const seat = getSeat({ number: seatNumber });
                    const isUnavailable = seat
                      ? unavailableSeats.includes(seat.id)
                      : false;
                    return (
                      <SeatButton
                        key={seatNumber}
                        seatNumber={seatNumber}
                        isSelected={selectedSeat === (seat && seat.id)}
                        isUnavailable={isUnavailable}
                        onSeatSelect={() =>
                          !isUnavailable && handleSeatSelect(seatNumber)
                        }
                      />
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-5 gap-2 justify-center pt-4 border-t">
                {backSeats.map(seatNumber => {
                  const seat = getSeat({ number: seatNumber });
                  const isUnavailable = seat
                    ? unavailableSeats.includes(seat.id)
                    : false;
                  return (
                    <SeatButton
                      key={seatNumber}
                      seatNumber={seatNumber}
                      isSelected={selectedSeat === (seat && seat.id)}
                      isUnavailable={isUnavailable}
                      onSeatSelect={() =>
                        !isUnavailable && handleSeatSelect(seatNumber)
                      }
                    />
                  );
                })}
              </div>
            </div>

            <div className="text-center text-xs mt-4 text-gray-600">
              ALLEN - CATARMAN & V.V
            </div>
          </div>

          {selectedSeat === null && (
            <div className="absolute top-0 left-0 w-full h-full bg-gray-300/80 z-50 rounded-md pointer-events-none" />
          )}
        </div>

        <div className="text-center mt-2">
          <button
            onClick={() => {
              if (selectedSeat === null) {
                // Find the first available seat (not in unavailableSeats and status is 'available')
                const availableSeat = seats.find(
                  seat =>
                    seat.status === "available" &&
                    !unavailableSeats.includes(seat.id)
                );
                setSelectedSeat(availableSeat ? availableSeat.id : null);
              } else {
                setSelectedSeat(null);
              }
            }}
            className={`w-full border border-solid text-sm font-medium rounded-md p-1 ${
              selectedSeat === null
                ? "bg-[#71AC61] text-white border-gray-400"
                : "border-[#456A3B]"
            }`}
          >
            Standing
          </button>

          <div className="flex justify-center gap-2 mt-2">
            {["Student", "Senior", "PWD"].map(type => (
              <button
                key={type}
                onClick={() =>
                  setSelectedStanding(selectedStanding === type ? null : type)
                }
                className={`px-3 py-1 text-xs rounded border w-full ${
                  selectedStanding === type
                    ? "bg-[#71AC61] text-white border-green-500"
                    : "bg-white border-gray-300 hover:border-green-400"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4">
        <label className="text-sm font-medium mb-2 block">Pricing</label>
        <Input
          placeholder="Input"
          value={price}
          onChange={e => setPrice(e.target.value)}
          className="mb-3"
        />
        <div className="grid grid-cols-3 gap-2">
          {[50, 137, 222].map(amt => (
            <Button
              key={amt}
              variant="outline"
              className="h-10 bg-transparent"
              onClick={() => setPrice(String(amt))}
            >
              {amt}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TicketPassengerForm;
