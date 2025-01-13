import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const Education = () => {
  const { data: educationEntries, isLoading } = useQuery({
    queryKey: ["education"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("education_entries")
        .select("*")
        .order("order_index", { ascending: true });

      if (error) throw error;
      return data;
    },
  });

  if (isLoading) return null;

  return (
    <div className="space-y-8">
      {educationEntries?.map((entry, index) => (
        <div
          key={entry.id}
          className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-blue-500 before:rounded-full before:shadow-lg animate-fadeIn"
          style={{ animationDelay: `${index * 200}ms` }}
        >
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <div className="flex justify-between items-center mb-2">
                <CardTitle className="text-xl font-semibold text-white">
                  {entry.institution}
                </CardTitle>
                <span className="text-sm text-blue-400">{entry.years}</span>
              </div>
              <p className="text-blue-300">{entry.degree}</p>
            </CardHeader>
            {entry.description && (
              <CardContent>
                <p className="text-slate-300">{entry.description}</p>
              </CardContent>
            )}
          </Card>
        </div>
      ))}
    </div>
  );
};