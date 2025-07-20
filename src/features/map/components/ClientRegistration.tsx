"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ClientRegistrationProps {
  clientType: "bus_driver" | "passenger" | "admin";
  setClientType: (value: "bus_driver" | "passenger" | "admin") => void;
  userId: string;
  setUserId: (value: string) => void;
  busId: string;
  setBusId: (value: string) => void;
  connected: boolean;
  onRegister: () => void;
}

export function ClientRegistration({
  clientType,
  setClientType,
  userId,
  setUserId,
  busId,
  setBusId,
  connected,
  onRegister,
}: ClientRegistrationProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Client Registration</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="clientType">Client Type</Label>
          <Select
            value={clientType}
            onValueChange={(value: "bus_driver" | "passenger" | "admin") =>
              setClientType(value)
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="passenger">Passenger</SelectItem>
              <SelectItem value="bus_driver">Bus Driver</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="userId">User ID</Label>
          <Input
            id="userId"
            value={userId}
            onChange={e => setUserId(e.target.value)}
            placeholder="Enter your user ID"
          />
        </div>

        {clientType === "bus_driver" && (
          <div>
            <Label htmlFor="busId">Bus ID</Label>
            <Input
              id="busId"
              value={busId}
              onChange={e => setBusId(e.target.value)}
              placeholder="Enter your bus ID"
            />
          </div>
        )}

        <Button onClick={onRegister} disabled={!connected}>
          Register
        </Button>
      </CardContent>
    </Card>
  );
}
