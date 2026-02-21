import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users, ClipboardList, Recycle, LogOut, Shield, Clock,
  CheckCircle, XCircle, Loader2, ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";

const AdminDashboard = () => {
  const { isAdmin, loading: authLoading, user, signOut } = useAdminAuth();
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalCollectors: 0,
    pendingApplications: 0,
    totalCollections: 0,
  });
  const [recentUsers, setRecentUsers] = useState<any[]>([]);
  const [pendingApps, setPendingApps] = useState<any[]>([]);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    if (!isAdmin) return;

    const fetchData = async () => {
      const [usersRes, collectorsRes, appsRes, collectionsRes, recentRes, pendingRes] = await Promise.all([
        supabase.from("user_profiles").select("id", { count: "exact", head: true }),
        supabase.from("user_profiles").select("id", { count: "exact", head: true }).eq("is_collector", true),
        supabase.from("collector_applications").select("id", { count: "exact", head: true }).eq("status", "pending"),
        supabase.from("collections").select("id", { count: "exact", head: true }),
        supabase.from("user_profiles").select("*").order("last_seen_at", { ascending: false }).limit(5),
        supabase.from("collector_applications").select("*").eq("status", "pending").order("applied_at", { ascending: false }).limit(5),
      ]);

      setStats({
        totalUsers: usersRes.count || 0,
        totalCollectors: collectorsRes.count || 0,
        pendingApplications: appsRes.count || 0,
        totalCollections: collectionsRes.count || 0,
      });
      setRecentUsers(recentRes.data || []);
      setPendingApps(pendingRes.data || []);
      setLoadingData(false);
    };

    fetchData();
  }, [isAdmin]);

  if (authLoading || loadingData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAdmin) return null;

  const statCards = [
    { label: "Total Users", value: stats.totalUsers, icon: Users, color: "text-primary" },
    { label: "Collectors", value: stats.totalCollectors, icon: Recycle, color: "text-accent" },
    { label: "Pending Applications", value: stats.pendingApplications, icon: ClipboardList, color: "text-secondary" },
    { label: "Total Collections", value: stats.totalCollections, icon: CheckCircle, color: "text-primary" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card border-b border-border">
        <div className="container px-4 flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-primary" />
            <h1 className="text-lg font-bold text-foreground">Recoza Support Portal</h1>
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
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {statCards.map((stat) => (
            <Card key={stat.label} className="shadow-soft">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recently Active Users */}
          <Card className="shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg flex items-center gap-2">
                <Clock className="h-5 w-5 text-muted-foreground" />
                Recently Active Users
              </CardTitle>
              <Link to="/admin/users">
                <Button variant="ghost" size="sm">
                  View All <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentUsers.length === 0 ? (
                <p className="text-sm text-muted-foreground">No users found.</p>
              ) : (
                recentUsers.map((u) => (
                  <div key={u.id} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                    <div>
                      <p className="text-sm font-medium text-foreground">{u.full_name}</p>
                      <p className="text-xs text-muted-foreground">{u.phone_number || "No phone"}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {u.is_collector && <Badge variant="secondary" className="text-xs">Collector</Badge>}
                      <span className="text-xs text-muted-foreground">
                        {u.last_seen_at ? formatDistanceToNow(new Date(u.last_seen_at), { addSuffix: true }) : "Never"}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </CardContent>
          </Card>

          {/* Pending Collector Applications */}
          <Card className="shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg flex items-center gap-2">
                <ClipboardList className="h-5 w-5 text-muted-foreground" />
                Pending Applications
              </CardTitle>
              <Link to="/admin/applications">
                <Button variant="ghost" size="sm">
                  View All <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent className="space-y-3">
              {pendingApps.length === 0 ? (
                <p className="text-sm text-muted-foreground">No pending applications.</p>
              ) : (
                pendingApps.map((app) => (
                  <div key={app.id} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                    <div>
                      <p className="text-sm font-medium text-foreground">{app.area}</p>
                      <p className="text-xs text-muted-foreground line-clamp-1">{app.motivation}</p>
                    </div>
                    <Badge className="bg-secondary text-secondary-foreground text-xs">Pending</Badge>
                  </div>
                ))
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
