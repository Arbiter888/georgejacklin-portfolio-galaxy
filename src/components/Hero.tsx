import { motion } from "framer-motion";
import { ChevronDown, Mail, Gift, Globe } from "lucide-react";
import { Helmet } from "react-helmet";

export const Hero = () => {
  return (
    <>
      <Helmet>
        <title>LevelUP! | AI-Powered Email Marketing Platform</title>
        <meta name="description" content="LevelUP! | Generate engaging email campaigns instantly, reward loyal customers automatically, and showcase your business with AI-powered micro-websites." />
        <meta name="keywords" content="Email Marketing, AI Email Generation, Customer Rewards, Micro-Websites, Marketing Automation, Email Campaigns, AI Marketing Tools" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="LevelUP! | AI-Powered Email Marketing Platform" />
        <meta property="og:description" content="Generate engaging email campaigns instantly and reward loyal customers automatically with AI-powered tools." />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LevelUP! | AI-Powered Email Marketing Platform" />
        <meta name="twitter:description" content="Transform your email marketing with AI-powered campaign generation and customer rewards." />
        
        {/* Additional SEO */}
        <meta name="author" content="LevelUP!" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <section className="min-h-screen flex flex-col justify-center items-center px-4 relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("/lovable-uploads/f964e424-25e6-4216-a2c4-582abd1f83d4.png")',
            zIndex: 0 
          }}
        />
        
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary-purple/70 via-magenta-pink/60 to-soft-pink/50"
          style={{ zIndex: 1 }}
        />

        {/* Content */}
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
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-soft-pink"
          >
            LevelUP!
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed"
          >
            Generate engaging email campaigns instantly, reward loyal customers automatically, 
            and showcase your business with a beautiful micro-website powered by AI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex justify-center gap-8 mb-12"
          >
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-white mb-2" />
              <span className="text-sm text-white/80">Instant Emails</span>
            </div>
            <div className="flex flex-col items-center">
              <Gift className="w-8 h-8 text-white mb-2" />
              <span className="text-sm text-white/80">Smart Rewards</span>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="w-8 h-8 text-white mb-2" />
              <span className="text-sm text-white/80">Micro-Websites</span>
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