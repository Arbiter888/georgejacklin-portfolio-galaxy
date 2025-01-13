import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Timeline } from "@/components/Timeline";
import { BlogSection } from "@/components/BlogSection";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";
import { Background } from "@/components/Background";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background text-foreground"
    >
      <Navigation />
      <section id="home">
        <Hero />
      </section>
      <Timeline />
      <Background />
      <Projects />
      <BlogSection />
      <Contact />
    </motion.div>
  );
};

export default Index;