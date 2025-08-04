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
import { toast } from "sonner";

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
        const errorData = await res.json();
        throw new Error(errorData.message || "Refund failed");
      }

      onSuccess(); // Let parent component know
      toast.success("Ticket refunded successfully");

      // Trigger a custom event to notify other components
      window.dispatchEvent(
        new CustomEvent("ticketRefunded", {
          detail: { ticketId },
        })
      );

      // Also trigger storage event as fallback
      window.dispatchEvent(
        new StorageEvent("storage", {
          key: "ticketRefunded",
          newValue: Date.now().toString(),
        })
      );

      document.getElementById(`close-${ticketId}`)?.click(); // Close dialog
    } catch (err) {
      console.error("Refund error:", err);
      // Show a user-friendly error message
      toast.error(
        `Refund failed: ${err instanceof Error ? err.message : "Unknown error"}`
      );
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
