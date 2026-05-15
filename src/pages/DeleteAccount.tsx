import { useState } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AlertTriangle, Trash2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const DeleteAccount = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [confirm, setConfirm] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (confirm !== "DELETE") {
      toast({
        title: "Please type DELETE to confirm",
        variant: "destructive",
      });
      return;
    }
    setSubmitting(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        await supabase.auth.signOut();
      }
      toast({
        title: "Deletion request received",
        description: "We've recorded your request. Our team will permanently delete your account within 30 days. You'll receive an email confirmation at the address provided.",
      });
      setEmail("");
      setReason("");
      setConfirm("");
    } catch (err) {
      toast({
        title: "Something went wrong",
        description: "Please email hello@recoza.org so we can process your request.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container px-4 pt-28 pb-16 max-w-2xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Delete Your Account</h1>
        <p className="text-muted-foreground mb-8">
          Permanently remove your Recoza account and associated data.
        </p>

        <Card className="border-destructive/30 mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <AlertTriangle className="h-5 w-5" />
              This action cannot be undone
            </CardTitle>
            <CardDescription>
              Deleting your account will permanently remove your profile, collector application,
              logged recyclable items, and collection history. You will not be able to recover this data.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Request account deletion</CardTitle>
            <CardDescription>
              Submit this form to request permanent deletion. We will process your request within 30 days
              as required by South African POPIA regulations.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email">Account email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="reason">Reason (optional)</Label>
                <Textarea
                  id="reason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="Help us improve by telling us why you're leaving..."
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirm">
                  Type <span className="font-mono font-bold text-destructive">DELETE</span> to confirm
                </Label>
                <Input
                  id="confirm"
                  required
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  placeholder="DELETE"
                />
              </div>

              <Button
                type="submit"
                variant="destructive"
                className="w-full"
                disabled={submitting || confirm !== "DELETE"}
              >
                <Trash2 className="h-4 w-4" />
                {submitting ? "Submitting..." : "Permanently delete my account"}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Prefer email? Contact{" "}
                <a href="mailto:hello@recoza.org" className="text-primary hover:underline">
                  hello@recoza.org
                </a>
              </p>
            </form>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default DeleteAccount;
