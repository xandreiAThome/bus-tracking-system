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
        <Input
          placeholder="Amount"
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
              type="button"
            >
              {amt}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TicketBaggageForm;
