import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Education } from "./Education";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const Timeline = () => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const { data: timelineEntries, isLoading } = useQuery({
    queryKey: ["timeline_entries"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("timeline_entries")
        .select("*")
        .order("order_index", { ascending: true });

      if (error) throw error;
      return data;
    },
  });

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  if (isLoading) return null;

  return (
    <section className="py-20 px-4 bg-slate-900" id="background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
          Background
        </h2>
        
        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-white">Professional Experience</h3>
            <div className="space-y-8">
              {timelineEntries?.map((item, index) => {
                const isExpanded = expandedItems.includes(item.id);
                return (
                  <div
                    key={item.id}
                    className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-blue-500 before:rounded-full before:shadow-lg animate-fadeIn"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <Card className="bg-slate-800 border-slate-700">
                      <CardHeader>
                        <div className="flex justify-between items-center mb-2">
                          <CardTitle className="text-xl font-semibold text-white">
                            {item.title}
                          </CardTitle>
                          <span className="text-sm text-blue-400">
                            {item.start_date && new Date(item.start_date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                            {item.end_date ? ` - ${new Date(item.end_date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}` : ' - Present'}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-blue-300">{item.company}</p>
                            {item.location && (
                              <p className="text-slate-400 text-sm mt-1">{item.location}</p>
                            )}
                            {item.employment_type && (
                              <p className="text-slate-400 text-sm">{item.employment_type}</p>
                            )}
                          </div>
                          <CollapsibleTrigger
                            onClick={() => toggleExpand(item.id)}
                            className="text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            {isExpanded ? (
                              <ChevronUp className="h-5 w-5" />
                            ) : (
                              <ChevronDown className="h-5 w-5" />
                            )}
                          </CollapsibleTrigger>
                        </div>
                      </CardHeader>
                      <Collapsible open={isExpanded}>
                        <CardContent>
                          <p className="text-slate-300 mb-4">{item.description}</p>
                          {item.detailed_description && (
                            <CollapsibleContent>
                              <ul className="space-y-2 text-slate-300 list-disc pl-4">
                                {item.detailed_description.map((detail, idx) => (
                                  <li key={idx} className="text-slate-300">{detail}</li>
                                ))}
                              </ul>
                            </CollapsibleContent>
                          )}
                        </CardContent>
                      </Collapsible>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-white">Education</h3>
            <Education />
          </div>
        </div>
      </div>
    </section>
  );
};