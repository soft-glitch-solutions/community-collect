import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft, Shield, LogOut, Loader2, Download, Users, Recycle, ClipboardList,
  Truck, Package, FileSpreadsheet, Calendar
} from "lucide-react";
import { Link } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

type ReportKey =
  | "all_users"
  | "collectors"
  | "households"
  | "pending_applications"
  | "reviewed_applications"
  | "collections_all"
  | "collections_completed"
  | "logged_items"
  | "earnings_summary";

const reportDefs: { key: ReportKey; title: string; description: string; icon: any }[] = [
  { key: "all_users", title: "All Users", description: "Every registered user with profile details and last seen.", icon: Users },
  { key: "collectors", title: "Approved Collectors", description: "All approved collectors with invite codes and activity.", icon: Recycle },
  { key: "households", title: "Households Only", description: "Users who are not collectors.", icon: Users },
  { key: "pending_applications", title: "Pending Collector Applications", description: "Applications waiting for review.", icon: ClipboardList },
  { key: "reviewed_applications", title: "Reviewed Applications", description: "Approved or rejected applications.", icon: ClipboardList },
  { key: "collections_all", title: "All Collections", description: "Every scheduled and completed collection.", icon: Truck },
  { key: "collections_completed", title: "Completed Collections", description: "Only completed collections with actual earnings.", icon: Truck },
  { key: "logged_items", title: "Logged Recyclable Items", description: "All items households have logged.", icon: Package },
  { key: "earnings_summary", title: "Earnings Summary (per collector)", description: "Aggregated earnings & weight per collector.", icon: FileSpreadsheet },
];

const toCSV = (rows: any[]) => {
  if (!rows.length) return "";
  const headers = Object.keys(rows[0]);
  const escape = (v: any) => {
    if (v === null || v === undefined) return "";
    const s = typeof v === "object" ? JSON.stringify(v) : String(v);
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  return [headers.join(","), ...rows.map((r) => headers.map((h) => escape(r[h])).join(","))].join("\n");
};

const download = (filename: string, content: string) => {
  const blob = new Blob([content], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
};

const AdminReports = () => {
  const { isAdmin, loading: authLoading, user, signOut } = useAdminAuth();
  const [range, setRange] = useState<string>("all");
  const [busy, setBusy] = useState<ReportKey | null>(null);
  const [stats, setStats] = useState({
    users: 0, collectors: 0, pendingApps: 0, completedCollections: 0,
    totalWeight: 0, totalEarnings: 0,
  });

  useEffect(() => {
    if (!isAdmin) return;
    (async () => {
      const [u, c, a, completed] = await Promise.all([
        supabase.from("user_profiles").select("id", { count: "exact", head: true }),
        supabase.from("user_profiles").select("id", { count: "exact", head: true }).eq("is_collector", true).eq("collector_approved", true),
        supabase.from("collector_applications").select("id", { count: "exact", head: true }).eq("status", "pending"),
        supabase.from("collections").select("total_weight_kg, actual_earnings").eq("status", "completed"),
      ]);
      const totalWeight = (completed.data || []).reduce((s, r: any) => s + Number(r.total_weight_kg || 0), 0);
      const totalEarnings = (completed.data || []).reduce((s, r: any) => s + Number(r.actual_earnings || 0), 0);
      setStats({
        users: u.count || 0,
        collectors: c.count || 0,
        pendingApps: a.count || 0,
        completedCollections: completed.data?.length || 0,
        totalWeight,
        totalEarnings,
      });
    })();
  }, [isAdmin]);

  const rangeFilter = (q: any, col: string) => {
    if (range === "all") return q;
    const days = range === "7d" ? 7 : range === "30d" ? 30 : 90;
    const from = new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();
    return q.gte(col, from);
  };

  const runReport = async (key: ReportKey) => {
    setBusy(key);
    try {
      let rows: any[] = [];
      const stamp = new Date().toISOString().slice(0, 10);

      switch (key) {
        case "all_users": {
          const { data } = await rangeFilter(supabase.from("user_profiles").select("*"), "created_at").order("created_at", { ascending: false });
          rows = data || [];
          break;
        }
        case "collectors": {
          const { data } = await rangeFilter(
            supabase.from("user_profiles").select("*").eq("is_collector", true).eq("collector_approved", true),
            "created_at"
          ).order("created_at", { ascending: false });
          rows = data || [];
          break;
        }
        case "households": {
          const { data } = await rangeFilter(
            supabase.from("user_profiles").select("*").eq("is_collector", false),
            "created_at"
          ).order("created_at", { ascending: false });
          rows = data || [];
          break;
        }
        case "pending_applications": {
          const { data } = await rangeFilter(
            supabase.from("collector_applications").select("*").eq("status", "pending"),
            "applied_at"
          ).order("applied_at", { ascending: false });
          rows = data || [];
          break;
        }
        case "reviewed_applications": {
          const { data } = await rangeFilter(
            supabase.from("collector_applications").select("*").neq("status", "pending"),
            "reviewed_at"
          ).order("reviewed_at", { ascending: false });
          rows = data || [];
          break;
        }
        case "collections_all": {
          const { data } = await rangeFilter(supabase.from("collections").select("*"), "created_at").order("created_at", { ascending: false });
          rows = data || [];
          break;
        }
        case "collections_completed": {
          const { data } = await rangeFilter(
            supabase.from("collections").select("*").eq("status", "completed"),
            "completed_at"
          ).order("completed_at", { ascending: false });
          rows = data || [];
          break;
        }
        case "logged_items": {
          const { data } = await rangeFilter(supabase.from("logged_items").select("*"), "logged_at").order("logged_at", { ascending: false });
          rows = data || [];
          break;
        }
        case "earnings_summary": {
          const { data } = await rangeFilter(
            supabase.from("collections").select("collector_id, total_weight_kg, actual_earnings, estimated_earnings, status"),
            "created_at"
          );
          const map = new Map<string, any>();
          (data || []).forEach((r: any) => {
            const cur = map.get(r.collector_id) || {
              collector_id: r.collector_id,
              total_collections: 0,
              completed_collections: 0,
              total_weight_kg: 0,
              actual_earnings: 0,
              estimated_earnings: 0,
            };
            cur.total_collections += 1;
            if (r.status === "completed") cur.completed_collections += 1;
            cur.total_weight_kg += Number(r.total_weight_kg || 0);
            cur.actual_earnings += Number(r.actual_earnings || 0);
            cur.estimated_earnings += Number(r.estimated_earnings || 0);
            map.set(r.collector_id, cur);
          });
          rows = Array.from(map.values());
          break;
        }
      }

      if (!rows.length) {
        toast.info("No data for this report.");
        return;
      }
      download(`recoza_${key}_${stamp}.csv`, toCSV(rows));
      toast.success(`Exported ${rows.length} rows.`);
    } catch (e: any) {
      toast.error(e.message || "Failed to generate report.");
    } finally {
      setBusy(null);
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }
  if (!isAdmin) return null;

  const summaryCards = [
    { label: "Total Users", value: stats.users },
    { label: "Approved Collectors", value: stats.collectors },
    { label: "Pending Applications", value: stats.pendingApps },
    { label: "Completed Collections", value: stats.completedCollections },
    { label: "Total Weight (kg)", value: stats.totalWeight.toFixed(1) },
    { label: "Total Earnings (R)", value: stats.totalEarnings.toFixed(2) },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-card border-b border-border">
        <div className="container px-4 flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-primary" />
            <h1 className="text-lg font-bold text-foreground">Reports</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden sm:block">{user?.email}</span>
            <Button variant="ghost" size="sm" onClick={signOut}>
              <LogOut className="h-4 w-4" /> Sign Out
            </Button>
          </div>
        </div>
      </header>

      <main className="container px-4 py-8 space-y-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <Link to="/admin">
            <Button variant="ghost" size="sm"><ArrowLeft className="h-4 w-4" /> Dashboard</Button>
          </Link>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <Select value={range} onValueChange={setRange}>
              <SelectTrigger className="w-44"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All time</SelectItem>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="90d">Last 90 days</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {summaryCards.map((s) => (
            <Card key={s.label}>
              <CardContent className="p-4">
                <p className="text-2xl font-bold text-foreground">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Reports list */}
        <div>
          <h2 className="text-lg font-semibold mb-1">Available Reports</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Download as CSV. The date range above filters where applicable.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reportDefs.map((r) => (
              <Card key={r.key} className="shadow-soft">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                      <r.icon className="h-4 w-4 text-primary" />
                    </div>
                    <CardTitle className="text-base">{r.title}</CardTitle>
                  </div>
                  <CardDescription className="pt-2">{r.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    onClick={() => runReport(r.key)}
                    disabled={busy === r.key}
                    className="w-full"
                    variant="outline"
                  >
                    {busy === r.key ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Download className="h-4 w-4" />
                    )}
                    Export CSV
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="bg-muted/40">
          <CardContent className="p-6 flex items-start gap-3">
            <Badge className="bg-primary text-primary-foreground mt-0.5">Tip</Badge>
            <p className="text-sm text-muted-foreground">
              Open exported CSVs in Google Sheets or Excel for pivot tables and charts.
              Need a custom report? Add it to <code className="text-xs">AdminReports.tsx</code>.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminReports;
