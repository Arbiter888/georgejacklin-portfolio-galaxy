import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "Conscious Cloud",
    description: "A revolutionary platform promoting environmental consciousness through real-time carbon footprint tracking and interactive visualizations. Features AI-powered recommendations and community engagement tools.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tags: ["AI/ML", "Environmental Tech", "Data Visualization"],
  },
  {
    title: "Product Analytics Dashboard",
    description: "Led the development of a comprehensive analytics platform that increased user engagement by 40%. Implemented real-time data visualization and predictive analytics features.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tags: ["Product Strategy", "Analytics", "UX Design"],
  },
  {
    title: "Enterprise Collaboration Tool",
    description: "Streamlined team communication and project management for Fortune 500 companies. Integrated AI-powered workflow automation and real-time collaboration features.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tags: ["Enterprise", "Collaboration", "Agile"],
  },
];

export const Projects = () => {
  return (
    <section className="py-20 px-4 bg-slate-950" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};