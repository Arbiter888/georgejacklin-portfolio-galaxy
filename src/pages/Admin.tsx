import { useQuery } from "@tanstack/react-query";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AdminLayout } from "@/components/layouts/AdminLayout";
import { supabase } from "@/integrations/supabase/client";

export default function Admin() {
  const { data: projectsCount } = useQuery({
    queryKey: ["projects-count"],
    queryFn: async () => {
      const { count } = await supabase
        .from("projects")
        .select("*", { count: "exact", head: true });
      return count || 0;
    },
  });

  const { data: blogsCount } = useQuery({
    queryKey: ["blogs-count"],
    queryFn: async () => {
      const { count } = await supabase
        .from("blogs")
        .select("*", { count: "exact", head: true });
      return count || 0;
    },
  });

  const { data: timelineCount } = useQuery({
    queryKey: ["timeline-count"],
    queryFn: async () => {
      const { count } = await supabase
        .from("timeline_entries")
        .select("*", { count: "exact", head: true });
      return count || 0;
    },
  });

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Dashboard</h1>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Projects</CardTitle>
              <Button variant="ghost" size="icon" asChild>
                <a href="/admin/projects">
                  <PlusCircle className="h-4 w-4" />
                </a>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{projectsCount}</div>
              <p className="text-xs text-muted-foreground">
                Total projects in portfolio
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Blog Posts</CardTitle>
              <Button variant="ghost" size="icon" asChild>
                <a href="/admin/posts">
                  <PlusCircle className="h-4 w-4" />
                </a>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{blogsCount}</div>
              <p className="text-xs text-muted-foreground">
                Total published and draft posts
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Timeline Entries</CardTitle>
              <Button variant="ghost" size="icon" asChild>
                <a href="/admin/timeline">
                  <PlusCircle className="h-4 w-4" />
                </a>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{timelineCount}</div>
              <p className="text-xs text-muted-foreground">
                Total experience entries
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Upload CV</CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <a href="/admin/cv">Manage CV</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}