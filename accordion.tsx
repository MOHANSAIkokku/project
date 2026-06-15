import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Clock, Copy, QrCode } from "lucide-react";
import { toast } from "sonner";

const randomCode = () => `RS-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;

const CreateRoomCard = () => {
  const [course, setCourse] = useState("");
  const [duration, setDuration] = useState<number>(10);
  const [roomId, setRoomId] = useState<string | null>(null);

  const handleCreate = async () => {
    if (!course) {
      toast.error("Enter course/session name");
      return;
    }
    const id = randomCode();
    setRoomId(id);
    try {
      await navigator.clipboard.writeText(id);
      toast.success("Room created & ID copied", { description: id });
    } catch {
      toast.success("Room created", { description: id });
    }
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <QrCode className="text-primary" /> Create Room
        </CardTitle>
        <CardDescription>
          Generate a one-time room code valid for the selected time window.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-3">
          <Label htmlFor="course">Course / Session</Label>
          <Input id="course" placeholder="e.g., CS101 — Lecture 5" value={course} onChange={(e) => setCourse(e.target.value)} />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="duration" className="flex items-center gap-2"><Clock /> Duration (minutes)</Label>
          <Input id="duration" type="number" min={1} max={180} value={duration} onChange={(e) => setDuration(parseInt(e.target.value || "10"))} />
        </div>
        <div className="flex items-center gap-3">
          <Button variant="hero" onClick={handleCreate}>Create Room</Button>
          {roomId && (
            <Button variant="outline" onClick={() => navigator.clipboard.writeText(roomId)}>
              <Copy className="mr-1" /> Copy ID
            </Button>
          )}
        </div>
        {roomId && (
          <p className="text-sm text-muted-foreground">Share this Room ID with students: <span className="font-semibold">{roomId}</span> (valid ~{duration} min)</p>
        )}
      </CardContent>
    </Card>
  );
};

export default CreateRoomCard;
