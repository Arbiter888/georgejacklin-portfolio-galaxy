import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "Product Analytics Dashboard",
    description: "Led the development of a comprehensive analytics platform that increased user engagement by 40%",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["Product Strategy", "Analytics", "UX Design"],
  },
  {
    title: "Mobile Payment Solution",
    description: "Revolutionized payment processing with an intuitive mobile-first approach",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["FinTech", "Mobile", "User Research"],
  },
  {
    title: "Enterprise Collaboration Tool",
    description: "Streamlined team communication and project management for Fortune 500 companies",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};