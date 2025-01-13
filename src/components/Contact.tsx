import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "./ui/button";

export const Contact = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-federal-blue via-honolulu-blue to-pacific-cyan" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-light-cyan">
          Let's Connect
        </h2>
        <p className="text-lg text-light-cyan/90 mb-12">
          Interested in collaborating or learning more about my work? 
          I'm always open to discussing new opportunities and ideas.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button 
            variant="outline" 
            size="lg" 
            className="gap-2 border-pacific-cyan/20 bg-pacific-cyan/10 text-light-cyan hover:bg-pacific-cyan/20 hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4" />
            Email Me
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="gap-2 border-pacific-cyan/20 bg-pacific-cyan/10 text-light-cyan hover:bg-pacific-cyan/20 hover:text-white transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="gap-2 border-pacific-cyan/20 bg-pacific-cyan/10 text-light-cyan hover:bg-pacific-cyan/20 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
          </Button>
        </div>
      </motion.div>
    </section>
  );
};