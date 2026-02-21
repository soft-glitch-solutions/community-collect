import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ClipboardList, ArrowLeft, Shield, LogOut, Loader2, CheckCircle, XCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { formatDistanceToNow } from "date-fns";

const AdminApplications = () => {
  const { isAdmin, loading: authLoading, user, signOut } = useAdminAuth();
  const [applications, setApplications] = useState<any[]>([]);
  const [loadingData, setLoadingData] = useState(true);
  const [processing, setProcessing] = useState<string | null>(null);
  const { toast } = useToast();

  const fetchApplications = async () => {
    const { data } = await supabase
      .from("collector_applications")
      .select("*")
      .order("applied_at", { ascending: false });
    setApplications(data || []);
    setLoadingData(false);
  };

  useEffect(() => {
    if (!isAdmin) return;
    fetchApplications();
  }, [isAdmin]);

  const handleAction = async (appId: string, userId: string, action: "approved" | "rejected") => {
    setProcessing(appId);

    const { error: appError } = await supabase
      .from("collector_applications")
      .update({ status: action, reviewed_at: new Date().toISOString() })
      .eq("id", appId);

    if (action === "approved" && !appError) {
      await supabase
        .from("user_profiles")
        .update({ is_collector: true, collector_approved: true })
        .eq("id", userId);
    }

    if (appError) {
      toast({ title: "Error", description: appError.message, variant: "destructive" });
    } else {
      toast({ title: `Application ${action}`, description: `The collector application has been ${action}.` });
      fetchApplications();
    }

    setProcessing(null);
  };

  if (authLoading || loadingData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAdmin) return null;

  const statusColor = (status: string) => {
    switch (status) {
      case "approved": return "bg-primary text-primary-foreground";
      case "rejected": return "bg-destructive text-destructive-foreground";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-card border-b border-border">
        <div className="container px-4 flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-primary" />
            <h1 className="text-lg font-bold text-foreground">Collector Applications</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden sm:block">{user?.email}</span>
            <Button variant="ghost" size="sm" onClick={signOut}>
              <LogOut className="h-4 w-4" /> Sign Out
            </Button>
          </div>
        </div>
      </header>

      <main className="container px-4 py-8 space-y-6">
        <Link to="/admin">
          <Button variant="ghost" size="sm"><ArrowLeft className="h-4 w-4" /> Dashboard</Button>
        </Link>

        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <ClipboardList className="h-5 w-5 text-muted-foreground" />
              {applications.length} Applications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {applications.length === 0 ? (
              <p className="text-center py-8 text-muted-foreground">No applications found.</p>
            ) : (
              applications.map((app) => (
                <div key={app.id} className="p-4 rounded-lg border border-border bg-card space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-foreground">{app.area}</p>
                        <Badge className={`text-xs ${statusColor(app.status)}`}>
                          {app.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{app.motivation}</p>
                      <p className="text-xs text-muted-foreground">
                        Applied {app.applied_at ? formatDistanceToNow(new Date(app.applied_at), { addSuffix: true }) : "Unknown"}
                      </p>
                    </div>
                    {app.status === "pending" && (
                      <div className="flex gap-2 shrink-0">
                        <Button
                          size="sm"
                          onClick={() => handleAction(app.id, app.user_id, "approved")}
                          disabled={processing === app.id}
                        >
                          {processing === app.id ? <Loader2 className="h-4 w-4 animate-spin" /> : <CheckCircle className="h-4 w-4" />}
                          Approve
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleAction(app.id, app.user_id, "rejected")}
                          disabled={processing === app.id}
                        >
                          <XCircle className="h-4 w-4" /> Reject
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminApplications;
