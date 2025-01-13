import { motion } from "framer-motion";
import { ChevronDown, Mail, Zap, Clock } from "lucide-react";
import { Helmet } from "react-helmet";

export const Hero = () => {
  return (
    <>
      <Helmet>
        <title>LevelUP! | AI-Powered Email Marketing Made Simple</title>
        <meta name="description" content="LevelUP! | Create stunning email campaigns in minutes with AI-powered tools. Streamline your email marketing workflow and boost engagement with intelligent automation." />
        <meta name="keywords" content="Email Marketing, AI Email Creation, Marketing Automation, Email Campaigns, AI Marketing Tools, Email Templates, Marketing Technology, Digital Marketing, AI Writing Assistant, Email Optimization" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="LevelUP! | AI-Powered Email Marketing Made Simple" />
        <meta property="og:description" content="Create stunning email campaigns in minutes with AI-powered tools. Transform your email marketing with intelligent automation." />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LevelUP! | AI-Powered Email Marketing Made Simple" />
        <meta name="twitter:description" content="Create stunning email campaigns in minutes with AI-powered tools." />
        
        {/* Additional SEO */}
        <meta name="author" content="LevelUP!" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <section className="min-h-screen flex flex-col justify-center items-center px-4 relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("/lovable-uploads/2b42e154-9c8d-4796-bd1e-bfeef72f3a41.png")',
            zIndex: 0 
          }}
        />
        
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-[#9b87f5]/80 to-[#D946EF]/80"
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
            className="inline-block text-sm uppercase tracking-wider text-white mb-4 font-medium"
          >
            AI-Powered Email Marketing Platform
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#FDE1D3]"
          >
            LevelUP!
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed"
          >
            Create stunning email campaigns in minutes with our AI-powered platform. 
            Transform your email marketing with intelligent automation, personalized content, 
            and data-driven insights to boost engagement and drive results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex justify-center gap-8 mb-12"
          >
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-white mb-2" />
              <span className="text-sm text-white/80">Smart Templates</span>
            </div>
            <div className="flex flex-col items-center">
              <Zap className="w-8 h-8 text-white mb-2" />
              <span className="text-sm text-white/80">AI Writing</span>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 text-white mb-2" />
              <span className="text-sm text-white/80">Quick Setup</span>
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
          <ChevronDown className="w-6 h-6 animate-bounce text-white" />
        </motion.div>
      </section>
    </>
  );
};