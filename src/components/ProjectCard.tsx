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
    >
      <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
        <div className="relative overflow-hidden aspect-video">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};