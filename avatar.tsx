import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { toast } from "sonner";

const UploadStudentsCard = () => {
  const [file, setFile] = useState<File | null>(null);

  const onUpload = () => {
    if (!file) {
      toast.error("Select a CSV file first");
      return;
    }
    toast.info("Connect Supabase to store student data securely.");
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Upload className="text-primary" /> Upload Students
        </CardTitle>
        <CardDescription>
          Upload a CSV with headers: roll_no, name, email (optional)
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-3">
          <Label htmlFor="csv">CSV file</Label>
          <Input id="csv" type="file" accept=".csv" onChange={(e) => setFile(e.target.files?.[0] ?? null)} />
          {file && (
            <p className="text-xs text-muted-foreground">Selected: {file.name} • {(file.size / 1024).toFixed(1)} KB</p>
          )}
        </div>
        <Button variant="outline" onClick={onUpload}>Upload to Cloud</Button>
      </CardContent>
    </Card>
  );
};

export default UploadStudentsCard;
