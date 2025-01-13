import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  tags?: string[];
  imageUrl?: string;
  videoUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  className?: string;
}

export const ProjectCard = ({
  title,
  description,
  tags,
  imageUrl,
  videoUrl,
  liveUrl,
  githubUrl,
  className,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-lg",
        className
      )}
    >
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold leading-none tracking-tight">
            {title}
          </h3>
          <div className="flex gap-2">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <Github className="h-5 w-5" />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
        <div className="mt-4 h-[200px] overflow-hidden rounded-md border">
          {videoUrl ? (
            <video
              className="h-full w-full object-cover"
              src={videoUrl}
              autoPlay
              loop
              muted
              playsInline
            />
          ) : imageUrl ? (
            <img
              src={imageUrl}
              alt={title}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-slate-800 flex items-center justify-center">
              <img 
                src="/lovable-uploads/6117afcc-fe25-472b-92df-92b94fdf8b81.png" 
                alt="LevelUP! Platform Preview"
                className="h-full w-full object-cover"
              />
            </div>
          )}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">{description}</p>
        {tags && tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};