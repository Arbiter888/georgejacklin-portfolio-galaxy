import { motion } from "framer-motion";

export const Background = () => {
  return (
    <section className="py-20 px-4 bg-slate-900" id="background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200 mb-12">
            Background
          </h2>
          
          <div className="bg-slate-800 rounded-xl p-8 shadow-xl">
            <p className="text-slate-300 leading-relaxed mb-6">
              My journey in understanding markets and customer insights began long before my professional career. As the son of a pioneering market researcher, I was immersed in the world of data and customer understanding from an early age. Growing up, I traveled extensively with my father, who worked with some of the world's leading organizations including the Financial Times, BBC, CNN, and The Economist.
            </p>
            
            <p className="text-slate-300 leading-relaxed mb-6">
              Through his work at Ipsos Media, Objective Research, and later Think Media Consultancy, I witnessed firsthand how deep market understanding shapes successful businesses. From watching qualitative research sessions to understanding how global brands make data-driven decisions, these early experiences laid the foundation for my current work in AI and digital transformation.
            </p>
            
            <p className="text-slate-300 leading-relaxed">
              Today, I continue to collaborate with my father, bringing his decades of market research expertise to modern startups, combining traditional insight methodologies with cutting-edge AI solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};