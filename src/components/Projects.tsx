import { useQuery } from "@tanstack/react-query";
import { ProjectCard } from "./ProjectCard";
import { supabase } from "@/integrations/supabase/client";

const fetchProjects = async () => {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('order_index', { ascending: true });
  
  if (error) throw error;
  return data;
};

export const Projects = () => {
  const { data: projects, isLoading, error } = useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
  });

  if (isLoading) {
    return (
      <section className="py-20 px-4 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            AI-Powered Innovation Projects
          </h2>
          <p className="text-light-cyan/90 text-center mb-12 max-w-2xl mx-auto">
            Showcasing transformative AI solutions that make professional services more accessible and efficient
          </p>
          <div className="space-y-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-[400px] bg-slate-800 animate-pulse rounded-lg" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    console.error('Error loading projects:', error);
    return null;
  }

  return (
    <section className="py-20 px-4 bg-slate-950" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
          AI-Powered Innovation Projects
        </h2>
        <p className="text-light-cyan/90 text-center mb-12 max-w-2xl mx-auto">
          Showcasing transformative AI solutions that make professional services more accessible and efficient
        </p>
        <div className="space-y-8">
          {projects?.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              {...project} 
              index={index}
              description={project.long_description || project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};