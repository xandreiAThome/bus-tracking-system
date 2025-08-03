"use client";

import { AggregatedTicketType } from "@features/ticket/types/types";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { CashierType } from "@features/cashier/types/types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { SquarePen } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface EditPassengerModalProps {
  ticket: AggregatedTicketType;
  cashiers: CashierType[];
  onSuccess?: () => void;
}

export default function EditPassengerDialog({
  ticket,
  cashiers,
  onSuccess,
}: EditPassengerModalProps) {
  const [cashierId, setCashierId] = useState("");
  const [price, setPrice] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      setPrice(ticket.price.toString());
      setCashierId(ticket.cashier.id.toString() || "");
    }
  }, [ticket, open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (!cashierId && !price) {
      toast.error("Please fill in at least one field");
      setIsSubmitting(false);
      return;
    }
    try {
      const res = await fetch(`/api/ticket/passenger/${ticket.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          price: parseFloat(price),
          trip_id: ticket.trip_id,
          cashier_id: cashierId
            ? parseInt(cashierId)
            : (ticket.cashier?.id ?? undefined),
          ticket_type: ticket.ticket_type,
        }),
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to update ticket");
      }
      toast.success("Ticket updated successfully");
      setOpen(false);
      if (onSuccess) onSuccess();
    } catch (err) {
      console.error("Error updating ticket:", err);
      toast.error(
        err instanceof Error ? err.message : "Failed to update ticket"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Edit ticket">
          <SquarePen className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Edit Ticket #{ticket.id}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div>
            <Label className="mb-2">Price (₱)</Label>
            <Input
              type="number"
              step="0.01"
              value={price}
              onChange={e => setPrice(e.target.value)}
              required
            />
          </div>
          <div>
            <Label className="mb-2">Cashier</Label>
            <Select value={cashierId} onValueChange={setCashierId}>
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
          <Button
            type="submit"
            className="w-full bg-[#71AC61] hover:bg-[#456A3B]"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Saving..." : "Update Ticket"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
