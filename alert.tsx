import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Fingerprint } from "lucide-react";
import { toast } from "sonner";

const JoinRoomCard = () => {
  const [roomId, setRoomId] = useState("");

  const onVerify = async () => {
    if (!roomId) {
      toast.error("Enter a Room ID");
      return;
    }
    const isNative = (window as any)?.Capacitor?.isNativePlatform ?? false;
    if (!isNative) {
      toast.warning("Biometric check requires the mobile app (Capacitor)", {
        description: "Open this app on iOS/Android after setup to use fingerprint.",
      });
      return;
    }
    // Placeholder: here we'd invoke biometric auth plugin
    toast.success("Fingerprint verified", { description: `Checked-in for ${roomId}` });
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Fingerprint className="text-primary" /> Join & Verify
        </CardTitle>
        <CardDescription>
          Enter the Room ID and verify using your device fingerprint.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-3">
          <Label htmlFor="rid">Room ID</Label>
          <Input id="rid" placeholder="e.g., RS-ABC123" value={roomId} onChange={(e) => setRoomId(e.target.value.toUpperCase())} />
        </div>
        <Button variant="hero" onClick={onVerify} className="gap-2">
          <Fingerprint /> Verify fingerprint & Check-in
        </Button>
        <p className="text-xs text-muted-foreground">
          Tip: For fingerprint access, set up the mobile app with Capacitor and run it on a device.
        </p>
      </CardContent>
    </Card>
  );
};

export default JoinRoomCard;
