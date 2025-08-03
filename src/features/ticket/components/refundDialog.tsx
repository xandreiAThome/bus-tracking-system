"use client";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import React, { useTransition } from "react";

interface RefundDialogProps {
  ticketId: number;
  onSuccess: () => void;
}

export default function RefundDialog({
  ticketId,
  onSuccess,
}: RefundDialogProps) {
  const [isPending, startTransition] = useTransition();

  const handleRefund = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/ticket/${ticketId}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Refund failed");
      }

      onSuccess(); // Let parent component know
      document.getElementById(`close-${ticketId}`)?.click(); // Close dialog
    } catch (err) {
      console.error("Refund error:", err);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-[70%] rounded-lg bg-[#B81F1F] hover:bg-[#8B1919] font-semibold text-lg">
          Refund
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={e => startTransition(() => handleRefund(e))}>
          <DialogHeader>
            <DialogTitle>Refund Ticket</DialogTitle>
            <DialogDescription className="mb-5 text-md">
              Are you sure you want to refund this ticket?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" id={`close-${ticketId}`}>
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" disabled={isPending}>
              {isPending ? "Refunding..." : "Confirm"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
