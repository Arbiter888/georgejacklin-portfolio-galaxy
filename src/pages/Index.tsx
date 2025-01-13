import { useEffect } from "react";
import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Timeline } from "@/components/Timeline";
import { BlogSection } from "@/components/BlogSection";
import { Contact } from "@/components/Contact";

const Index = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background text-foreground"
    >
      <Hero />
      <Timeline />
      <Projects />
      <BlogSection />
      <Contact />
    </motion.div>
  );
};

export default Index;