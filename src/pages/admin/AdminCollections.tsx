import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Truck, ArrowLeft, Search, Shield, LogOut, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";

const statusColor: Record<string, string> = {
  scheduled: "bg-secondary text-secondary-foreground",
  in_progress: "bg-primary/20 text-primary",
  completed: "bg-primary text-primary-foreground",
  cancelled: "bg-muted text-muted-foreground",
};

const AdminCollections = () => {
  const { isAdmin, loading: authLoading, user, signOut } = useAdminAuth();
  const [rows, setRows] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    if (!isAdmin) return;
    (async () => {
      const { data } = await supabase
        .from("collections")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(500);
      setRows(data || []);
      setLoadingData(false);
    })();
  }, [isAdmin]);

  if (authLoading || loadingData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }
  if (!isAdmin) return null;

  const filtered = rows.filter(
    (r) =>
      r.status?.toLowerCase().includes(search.toLowerCase()) ||
      r.collector_id?.toLowerCase().includes(search.toLowerCase()) ||
      r.household_id?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-card border-b border-border">
        <div className="container px-4 flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-primary" />
            <h1 className="text-lg font-bold text-foreground">Collections</h1>
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

        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by status or user id..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>

        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Truck className="h-5 w-5 text-muted-foreground" /> {filtered.length} Collections
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left text-muted-foreground">
                    <th className="pb-3 font-semibold">Scheduled</th>
                    <th className="pb-3 font-semibold">Status</th>
                    <th className="pb-3 font-semibold">Weight (kg)</th>
                    <th className="pb-3 font-semibold">Est. (R)</th>
                    <th className="pb-3 font-semibold">Actual (R)</th>
                    <th className="pb-3 font-semibold">Completed</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((r) => (
                    <tr key={r.id} className="border-b border-border last:border-0 hover:bg-muted/50">
                      <td className="py-3">{r.scheduled_date}</td>
                      <td className="py-3">
                        <Badge className={`text-xs ${statusColor[r.status] || "bg-muted"}`}>{r.status}</Badge>
                      </td>
                      <td className="py-3">{r.total_weight_kg ?? "—"}</td>
                      <td className="py-3 text-muted-foreground">{r.estimated_earnings ?? "—"}</td>
                      <td className="py-3 font-medium">{r.actual_earnings ?? "—"}</td>
                      <td className="py-3 text-muted-foreground text-xs">
                        {r.completed_at ? new Date(r.completed_at).toLocaleDateString() : "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filtered.length === 0 && (
                <p className="text-center py-8 text-muted-foreground">No collections found.</p>
              )}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminCollections;
