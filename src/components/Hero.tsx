import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <span className="text-sm uppercase tracking-wider text-muted-foreground mb-4 block">
          Product Manager
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          George Jacklin
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
          Crafting digital experiences that solve real problems. 
          Passionate about building products that make a difference.
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-10"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </motion.div>
    </section>
  );
};