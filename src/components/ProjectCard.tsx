import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Play } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  videoUrl?: string | null;
  tags: string[];
  index: number;
}

export const ProjectCard = ({ title, description, image, videoUrl, tags, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && isHovered && videoUrl) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, [isHovered, videoUrl]);

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
          {videoUrl && isHovered ? (
            <iframe
              src={getYouTubeEmbedUrl(videoUrl)}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="relative w-full h-full group">
              <img
                src={image}
                alt={title}
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
              />
              {videoUrl && (
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
          <p className="text-light-cyan/90 mb-4 line-clamp-3">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag) => (
              <Badge 
                key={tag} 
                variant="secondary" 
                className="bg-pacific-cyan/10 text-light-cyan hover:bg-pacific-cyan/20 transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};