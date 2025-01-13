import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "./ui/button";

export const Contact = () => {
  return (
    <section className="py-20 px-4 bg-muted/30" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
        <p className="text-lg text-muted-foreground mb-12">
          Interested in collaborating or learning more about my work? 
          I'm always open to discussing new opportunities and ideas.
        </p>
        
        <div className="flex justify-center gap-4">
          <Button variant="outline" size="lg" className="gap-2">
            <Mail className="w-4 h-4" />
            Email Me
          </Button>
          <Button variant="outline" size="lg" className="gap-2">
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </Button>
          <Button variant="outline" size="lg" className="gap-2">
            <Github className="w-4 h-4" />
            GitHub
          </Button>
        </div>
      </motion.div>
    </section>
  );
};