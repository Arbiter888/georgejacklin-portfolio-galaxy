import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Play, Github, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image_url?: string | null;
  video_url?: string | null;
  github_url?: string | null;
  live_url?: string | null;
  tags?: string[] | null;
  index: number;
}

export const ProjectCard = ({ 
  title, 
  description, 
  image_url, 
  video_url, 
  github_url,
  live_url,
  tags, 
  index 
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && isHovered && video_url) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, [isHovered, video_url]);

  const getYouTubeEmbedUrl = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11
      ? `https://www.youtube.com/embed/${match[2]}?autoplay=1&mute=1&controls=0&modestbranding=1&playsinline=1&rel=0`
      : null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full flex flex-col">
        {/* Media Section */}
        <div 
          className="relative aspect-video cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {video_url && isHovered ? (
            <iframe
              src={getYouTubeEmbedUrl(video_url)}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="relative w-full h-full group">
              <img
                src={image_url || "https://images.unsplash.com/photo-1451187580459-43490279c0fa"}
                alt={title}
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
              />
              {video_url && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="w-16 h-16 text-white" />
                  <span className="absolute bottom-4 text-white text-sm font-medium">
                    Hover to view demo
                  </span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Content Section */}
        <CardContent className="flex-1 p-6 bg-gradient-to-br from-federal-blue via-honolulu-blue to-pacific-cyan">
          <h3 className="text-2xl font-bold mb-3 text-white">
            {title}
          </h3>
          <p className={`text-light-cyan/90 mb-4 ${isExpanded ? '' : 'line-clamp-3'}`}>
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags?.map((tag) => (
              <Badge 
                key={tag} 
                variant="secondary" 
                className="bg-pacific-cyan/10 text-light-cyan hover:bg-pacific-cyan/20 transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mt-auto">
            {description.length > 150 && (
              <Button
                variant="secondary"
                className="bg-pacific-cyan/10 text-light-cyan hover:bg-pacific-cyan/20"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? 'Show Less' : 'Show More'}
              </Button>
            )}
            {github_url && (
              <Button
                variant="secondary"
                className="bg-pacific-cyan/10 text-light-cyan hover:bg-pacific-cyan/20"
                onClick={() => window.open(github_url, '_blank')}
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            )}
            {live_url && (
              <Button
                variant="secondary"
                className="bg-pacific-cyan/10 text-light-cyan hover:bg-pacific-cyan/20"
                onClick={() => window.open(live_url, '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};