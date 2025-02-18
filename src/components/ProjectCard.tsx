import { motion } from "framer-motion";
import { useState } from "react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Github, ExternalLink } from "lucide-react";
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
  const [isExpanded, setIsExpanded] = useState(false);

  const getVideoEmbedUrl = (url: string) => {
    const youtubeRegExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const youtubeMatch = url.match(youtubeRegExp);
    
    if (youtubeMatch && youtubeMatch[2].length === 11) {
      return `https://www.youtube.com/embed/${youtubeMatch[2]}?modestbranding=1&playsinline=1&rel=0`;
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
          <div className="relative md:w-2/5 aspect-video md:aspect-[4/3]">
            {video_url ? (
              <iframe
                src={getVideoEmbedUrl(video_url)}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : image_url ? (
              <img
                src={image_url}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                <span className="text-white/50 text-sm">No demo available</span>
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
                {live_url && !title.toLowerCase().includes('multiplier ai') && (
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