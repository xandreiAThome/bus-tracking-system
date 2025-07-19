"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface BusSubscriptionProps {
  subscribeToBusId: string;
  setSubscribeToBusId: (value: string) => void;
  connected: boolean;
  onSubscribe: () => void;
  onUnsubscribe: () => void;
}

export function BusSubscription({
  subscribeToBusId,
  setSubscribeToBusId,
  connected,
  onSubscribe,
  onUnsubscribe,
}: BusSubscriptionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bus Subscription</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="subscribeToBusId">Subscribe to Bus ID</Label>
          <Input
            id="subscribeToBusId"
            value={subscribeToBusId}
            onChange={e => setSubscribeToBusId(e.target.value)}
            placeholder="Enter bus ID to track"
          />
        </div>

        <div className="flex gap-2">
          <Button onClick={onSubscribe} disabled={!connected}>
            Subscribe
          </Button>
          <Button
            onClick={onUnsubscribe}
            disabled={!connected}
            variant="outline"
          >
            Unsubscribe
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
