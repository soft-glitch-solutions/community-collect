import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Users, ArrowLeft, Search, Shield, LogOut, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";

const AdminUsers = () => {
  const { isAdmin, loading: authLoading, user, signOut } = useAdminAuth();
  const [users, setUsers] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    if (!isAdmin) return;
    const fetchUsers = async () => {
      const { data } = await supabase
        .from("user_profiles")
        .select("*")
        .order("last_seen_at", { ascending: false });
      setUsers(data || []);
      setLoadingData(false);
    };
    fetchUsers();
  }, [isAdmin]);

  if (authLoading || loadingData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAdmin) return null;

  const filtered = users.filter((u) =>
    u.full_name?.toLowerCase().includes(search.toLowerCase()) ||
    u.phone_number?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-card border-b border-border">
        <div className="container px-4 flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-primary" />
            <h1 className="text-lg font-bold text-foreground">All Users</h1>
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
        <div className="flex items-center gap-4">
          <Link to="/admin">
            <Button variant="ghost" size="sm"><ArrowLeft className="h-4 w-4" /> Dashboard</Button>
          </Link>
        </div>

        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by name or phone..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>

        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Users className="h-5 w-5 text-muted-foreground" />
              {filtered.length} Users
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="pb-3 font-semibold text-muted-foreground">Name</th>
                    <th className="pb-3 font-semibold text-muted-foreground">Phone</th>
                    <th className="pb-3 font-semibold text-muted-foreground">Role</th>
                    <th className="pb-3 font-semibold text-muted-foreground">Status</th>
                    <th className="pb-3 font-semibold text-muted-foreground">Last Seen</th>
                    <th className="pb-3 font-semibold text-muted-foreground">Joined</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((u) => (
                    <tr key={u.id} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                      <td className="py-3 font-medium text-foreground">{u.full_name}</td>
                      <td className="py-3 text-muted-foreground">{u.phone_number || "—"}</td>
                      <td className="py-3">
                        {u.is_collector ? (
                          <Badge variant="secondary" className="text-xs">Collector</Badge>
                        ) : (
                          <Badge variant="outline" className="text-xs">Household</Badge>
                        )}
                      </td>
                      <td className="py-3">
                        {u.is_collector && u.collector_approved ? (
                          <Badge className="bg-primary text-primary-foreground text-xs">Approved</Badge>
                        ) : u.is_collector ? (
                          <Badge className="bg-secondary text-secondary-foreground text-xs">Pending</Badge>
                        ) : (
                          <span className="text-muted-foreground text-xs">Active</span>
                        )}
                      </td>
                      <td className="py-3 text-muted-foreground text-xs">
                        {u.last_seen_at ? formatDistanceToNow(new Date(u.last_seen_at), { addSuffix: true }) : "Never"}
                      </td>
                      <td className="py-3 text-muted-foreground text-xs">
                        {u.created_at ? new Date(u.created_at).toLocaleDateString() : "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filtered.length === 0 && (
                <p className="text-center py-8 text-muted-foreground">No users found.</p>
              )}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminUsers;
