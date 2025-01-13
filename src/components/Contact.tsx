import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "./ui/button";

export const Contact = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-800" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
          Let's Connect
        </h2>
        <p className="text-lg text-blue-100/80 mb-12">
          Interested in collaborating or learning more about my work? 
          I'm always open to discussing new opportunities and ideas.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button 
            variant="outline" 
            size="lg" 
            className="gap-2 border-blue-500/20 bg-blue-500/10 text-blue-300 hover:bg-blue-500/20 hover:text-blue-200 transition-colors"
          >
            <Mail className="w-4 h-4" />
            Email Me
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="gap-2 border-blue-500/20 bg-blue-500/10 text-blue-300 hover:bg-blue-500/20 hover:text-blue-200 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="gap-2 border-blue-500/20 bg-blue-500/10 text-blue-300 hover:bg-blue-500/20 hover:text-blue-200 transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
          </Button>
        </div>
      </motion.div>
    </section>
  );
};