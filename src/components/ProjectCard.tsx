import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  index: number;
}

export const ProjectCard = ({ title, description, image, tags, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <Card className="overflow-hidden group bg-gradient-to-br from-[#4CD6B4] to-[#3BA7E4] border-teal-400/20 text-white">
        <div className="relative overflow-hidden aspect-video">
          <div className="absolute inset-0 bg-gradient-to-t from-[#3BA7E4]/80 to-transparent z-10"></div>
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        <CardHeader className="relative z-20 -mt-20">
          <CardTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-100 to-white">
            {title}
          </CardTitle>
          <CardDescription className="text-teal-50/90">{description}</CardDescription>
        </CardHeader>
        <CardContent className="relative z-20">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge 
                key={tag} 
                variant="secondary" 
                className="bg-teal-400/10 text-teal-100 hover:bg-teal-400/20 transition-colors"
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