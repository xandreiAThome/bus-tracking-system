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
import { CashierType } from "@/features/cashier/types/types";

interface TicketBaggageFormProps {
  price: string;
  setPrice: (v: string) => void;
  selectedCashier: string;
  setSelectedCashier: (v: string) => void;
  senderNo: string;
  setSenderNo: (v: string) => void;
  dispatcherNo: string;
  setDispatcherNo: (v: string) => void;
  senderName: string;
  setSenderName: (v: string) => void;
  receiverName: string;
  setReceiverName: (v: string) => void;
  item: string;
  setItem: (v: string) => void;
  cashiers: CashierType[];
}

// Cookie helper functions
const setCookie = (name: string, value: string) => {
  if (typeof window !== "undefined") {
    document.cookie = `${name}=${value}; path=/; max-age=${60 * 60 * 24 * 30}`; // 30 days
  }
};

const getCookie = (name: string): string | null => {
  if (typeof window === "undefined") return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift() || null;
  return null;
};

const COOKIE_NAME = "baggageDefaultPrices";

const TicketBaggageForm: React.FC<TicketBaggageFormProps> = ({
  price,
  setPrice,
  selectedCashier,
  setSelectedCashier,
  senderNo,
  setSenderNo,
  dispatcherNo,
  setDispatcherNo,
  senderName,
  setSenderName,
  receiverName,
  setReceiverName,
  item,
  setItem,
  cashiers,
}) => {
  // Get initial prices from cookies or use defaults
  const getInitialPrices = (): number[] => {
    if (typeof window !== "undefined") {
      const cookieValue = getCookie(COOKIE_NAME);
      if (cookieValue) {
        try {
          const parsed = JSON.parse(cookieValue);
          if (
            Array.isArray(parsed) &&
            parsed.every(p => typeof p === "number")
          ) {
            return parsed;
          }
        } catch {}
      }
    }
    return [50, 137, 222];
  };

  const [defaultPrices, setDefaultPrices] =
    React.useState<number[]>(getInitialPrices());

  const [newPrice, setNewPrice] = React.useState<string>("");
  const [editMode, setEditMode] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setCookie(COOKIE_NAME, JSON.stringify(defaultPrices));
    }
  }, [defaultPrices]);

  const handleAddPrice = () => {
    const priceNum = Number(newPrice);
    if (!isNaN(priceNum) && priceNum > 0 && !defaultPrices.includes(priceNum)) {
      setDefaultPrices([...defaultPrices, priceNum]);
      setNewPrice("");
    }
  };

  const handleEditPrice = (index: number, value: string) => {
    const priceNum = Number(value);
    if (!isNaN(priceNum) && priceNum > 0) {
      setDefaultPrices(
        defaultPrices.map((p, i) => (i === index ? priceNum : p))
      );
    }
  };

  const handleRemovePrice = (index: number) => {
    setDefaultPrices(defaultPrices.filter((_, i) => i !== index));
  };
  return (
    <div className="p-4 bg-white border rounded-sm max-w-4xl">
      <div className="flex gap-3">
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

      <div className="grid grid-cols-2 gap-3 mt-4">
        <div>
          <label className="text-sm font-medium mb-1 block">Sender no.</label>
          <Input
            placeholder="Sender number"
            value={senderNo}
            onChange={e => setSenderNo(e.target.value)}
          />
        </div>
        <div>
          <label className="text-sm font-medium mb-1 block">
            Dispatcher no.
          </label>
          <Input
            placeholder="Dispatcher number"
            value={dispatcherNo}
            onChange={e => setDispatcherNo(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-4">
        <div>
          <label className="text-sm font-medium mb-1 block">Sender</label>
          <Input
            placeholder="Sender name"
            value={senderName}
            onChange={e => setSenderName(e.target.value)}
          />
        </div>
        <div>
          <label className="text-sm font-medium mb-1 block">Receiver</label>
          <Input
            placeholder="Receiver name"
            value={receiverName}
            onChange={e => setReceiverName(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-4">
        <label className="text-sm font-medium mb-1 block">Item</label>
        <Input
          placeholder="Item description"
          value={item}
          onChange={e => setItem(e.target.value)}
        />
      </div>

      <div className="mt-4">
        <label className="text-sm font-medium mb-2 block">Pricing</label>
        <div className="rounded-lg border bg-gray-50 p-4 mb-2">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center mb-2">
              <Input
                placeholder="Custom price"
                value={price}
                onChange={e => setPrice(e.target.value)}
                className="w-32 h-10 text-center border-gray-300"
              />
              <span className="text-xs text-gray-500">
                Enter or select a price
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {defaultPrices.map((amt, idx) => (
                <div key={amt} className="relative">
                  {editMode ? (
                    <div className="flex items-center gap-1 bg-white border rounded px-2 py-1 shadow-sm">
                      <Input
                        type="number"
                        value={amt}
                        onChange={e => handleEditPrice(idx, e.target.value)}
                        className="w-16 h-8 text-center border-gray-300"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-red-500"
                        onClick={() => handleRemovePrice(idx)}
                        aria-label="Remove price"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4 4L12 12M12 4L4 12"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </Button>
                    </div>
                  ) : (
                    <Button
                      variant={price === String(amt) ? "default" : "outline"}
                      className={`h-8 px-4 rounded-full transition-all ${price === String(amt) ? "bg-green-600 text-white border-green-600" : "bg-white border-gray-300 text-gray-700 hover:bg-green-50"}`}
                      onClick={() => setPrice(String(amt))}
                      type="button"
                    >
                      <span className="font-semibold">₱{amt}</span>
                    </Button>
                  )}
                </div>
              ))}
            </div>
            {editMode && (
              <div className="flex gap-2 mt-2 items-center">
                <Input
                  type="number"
                  placeholder="Add price"
                  value={newPrice}
                  onChange={e => setNewPrice(e.target.value)}
                  className="w-24 h-8 text-center border-gray-300"
                />
                <Button
                  variant="outline"
                  className="h-8 px-4"
                  onClick={handleAddPrice}
                  disabled={
                    !newPrice ||
                    isNaN(Number(newPrice)) ||
                    Number(newPrice) <= 0
                  }
                >
                  <span className="font-semibold">Add</span>
                </Button>
              </div>
            )}
          </div>
          <div className="flex justify-end mt-2">
            <Button
              variant="outline"
              className="h-8 px-4"
              onClick={() => setEditMode(!editMode)}
              type="button"
            >
              <span className="font-semibold">
                {editMode ? "Done" : "Edit Prices"}
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketBaggageForm;
