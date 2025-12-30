
import React from 'react';
import { motion } from 'framer-motion';

const TechStack: React.FC = () => {
  const techs = ['React', 'Next.js', 'Framer Motion', 'TypeScript', 'Webflow', 'Figma', 'Node.js', 'Three.js'];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-10">Powered by Modern Technology</p>
        <div className="flex flex-wrap justify-center gap-4">
          {techs.map((tech, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-6 py-3 glass rounded-2xl border border-slate-100 text-slate-700 font-bold shadow-sm"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
