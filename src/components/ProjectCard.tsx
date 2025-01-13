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

  const getVideoEmbedUrl = (url: string) => {
    const youtubeRegExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const youtubeMatch = url.match(youtubeRegExp);
    
    if (youtubeMatch && youtubeMatch[2].length === 11) {
      return `https://www.youtube.com/embed/${youtubeMatch[2]}?autoplay=1&mute=1&controls=0&modestbranding=1&playsinline=1&rel=0`;
    }
    
    if (url.includes('loom.com/embed')) {
      return url;
    }
    
    return null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="w-full"
    >
      <Card className="overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Media Section - Takes 40% width on desktop */}
          <div 
            className="relative md:w-2/5 aspect-video md:aspect-[4/3]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {video_url && isHovered ? (
              <iframe
                src={getVideoEmbedUrl(video_url)}
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

          {/* Content Section - Takes 60% width on desktop */}
          <CardContent className="flex-1 p-6 md:p-8 bg-gradient-to-br from-federal-blue via-honolulu-blue to-pacific-cyan">
            <div className="h-full flex flex-col">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                {title}
              </h3>
              <p className={`text-light-cyan/90 mb-6 ${isExpanded ? '' : 'line-clamp-3'}`}>
                {description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
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
              <div className="flex flex-wrap gap-3 mt-auto">
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
            </div>
          </CardContent>
        </div>
      </Card>
    </motion.div>
  );
};