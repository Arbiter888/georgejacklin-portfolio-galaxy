import { motion } from "framer-motion";
import { ChevronDown, Brain, Globe, Rocket } from "lucide-react";
import { Helmet } from "react-helmet";

export const Hero = () => {
  return (
    <>
      <Helmet>
        <title>George Jacklin | Product Manager & AI Entrepreneur</title>
        <meta name="description" content="George Jacklin | Product Manager and AI entrepreneur specializing in AI solutions for personal coaching, legal tech, and startup tools. Leading digital transformation through innovative products." />
        <meta name="keywords" content="Product Manager, AI Entrepreneur, AI Solutions, Legal Tech Innovation, Web3 Technology, AI Product Development, Technology Strategy, Digital Innovation, AI Personal Coaching, AI Agent Marketplace" />
        <meta property="og:title" content="George Jacklin | Product Manager & AI Entrepreneur" />
        <meta property="og:description" content="Product Manager and AI entrepreneur specializing in AI solutions for personal coaching, legal tech, and startup tools." />
        <meta name="twitter:title" content="George Jacklin | Product Manager & AI Entrepreneur" />
        <meta name="twitter:description" content="Product Manager and AI entrepreneur specializing in AI solutions and digital transformation." />
      </Helmet>
      <section className="min-h-screen flex flex-col justify-center items-center px-4 relative bg-gradient-to-br from-federal-blue via-honolulu-blue to-pacific-cyan text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2NGgtMXYtNHptMi0yaDF2NGgtMXYtNHptMi0yaDF2NGgtMXYtNHptMi0yaDF2NGgtMXYtNHptMi0yaDF2NGgtMXYtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40 mix-blend-overlay"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto relative z-10"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-block text-sm uppercase tracking-wider text-light-cyan mb-4 font-medium"
          >
            Product Manager & AI Entrepreneur
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-non-photo-blue to-white"
          >
            George Jacklin
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-lg md:text-xl text-light-cyan/90 mb-8 leading-relaxed"
          >
            Pioneering AI solutions in personal coaching, legal tech, and startup tools through Multiplier AI. 
            Building the future of digital transformation with innovative products that empower businesses and individuals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex justify-center gap-8 mb-12"
          >
            <div className="flex flex-col items-center">
              <Brain className="w-8 h-8 text-light-cyan mb-2" />
              <span className="text-sm text-light-cyan/80">AI Innovation</span>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="w-8 h-8 text-light-cyan mb-2" />
              <span className="text-sm text-light-cyan/80">Web3 Tech</span>
            </div>
            <div className="flex flex-col items-center">
              <Rocket className="w-8 h-8 text-light-cyan mb-2" />
              <span className="text-sm text-light-cyan/80">Digital Growth</span>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10"
        >
          <ChevronDown className="w-6 h-6 animate-bounce text-light-cyan" />
        </motion.div>
      </section>
    </>
  );
};