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
              [Your background content will go here - This section will be updated with your story about learning market research and customer insights through your father's business]
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};