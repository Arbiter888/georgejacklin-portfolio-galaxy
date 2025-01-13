import { motion } from "framer-motion";
import { ChevronDown, Brain, Globe, Rocket } from "lucide-react";
import { Helmet } from "react-helmet";

export const Hero = () => {
  return (
    <>
      <Helmet>
        <title>George Jacklin | Product Manager & AI Entrepreneur</title>
        <meta name="description" content="George Jacklin | Product Manager and technology entrepreneur specializing in AI, Web3, and digital transformation. Leading innovation through Multiplier AI." />
        <meta name="keywords" content="Product Manager, AI Entrepreneur, Web3, Digital Transformation, AI Innovation, Technology Strategy, Digital Growth, Multiplier AI, Personal Coaching, Legal Tech" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="George Jacklin | Product Manager & AI Entrepreneur" />
        <meta property="og:description" content="Product Manager and technology entrepreneur specializing in AI, Web3, and digital transformation." />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="George Jacklin | Product Manager & AI Entrepreneur" />
        <meta name="twitter:description" content="Product Manager and technology entrepreneur specializing in AI, Web3, and digital transformation." />
        
        {/* Additional SEO */}
        <meta name="author" content="George Jacklin" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <section className="min-h-screen flex flex-col justify-center items-center px-4 relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("/lovable-uploads/b1e82aa6-ee21-431b-96b2-cc86a4972c26.png")',
            zIndex: 0 
          }}
        />
        
        {/* Blue Overlay */}
        <div 
          className="absolute inset-0 bg-federal-blue/70"
          style={{ zIndex: 1 }}
        />

        {/* Pattern Overlay */}
        <div 
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2NGgtMXYtNHptMi0yaDF2NGgtMXYtNHptMi0yaDF2NGgtMXYtNHptMi0yaDF2NGgtMXYtNHptMi0yaDF2NGgtMXYtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40 mix-blend-overlay"
          style={{ zIndex: 2 }}
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto relative"
          style={{ zIndex: 3 }}
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
            Product Manager and technology entrepreneur specializing in AI, Web3, and digital transformation. 
            Leading innovation through Multiplier AI, an AI agent marketplace for startup founders, and developing 
            cutting-edge solutions in personal coaching and legal tech.
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
          style={{ zIndex: 3 }}
        >
          <ChevronDown className="w-6 h-6 animate-bounce text-light-cyan" />
        </motion.div>
      </section>
    </>
  );
};