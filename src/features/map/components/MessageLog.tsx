import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MessageLogProps {
  messages: string[];
}

export function MessageLog({ messages }: MessageLogProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Message Log</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-black text-green-400 p-4 rounded font-mono text-sm max-h-64 overflow-y-auto">
          {messages.map((message, index) => (
            <div key={index} className="mb-1">
              {message}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
