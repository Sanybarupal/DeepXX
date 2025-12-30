
import React from 'react';
import { motion } from 'framer-motion';

const Clients: React.FC = () => {
  const logos = [
    'TechFlow', 'NexaCloud', 'QuantumUI', 'ApexSaaS', 'StellarPay', 'VortexApp'
  ];

  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-12">
          Trusted by Innovative Giants
        </p>
        
        <div className="relative flex overflow-hidden">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-16 md:gap-32 shrink-0 pr-16 md:pr-32"
          >
            {[...logos, ...logos].map((logo, i) => (
              <div key={i} className="text-3xl md:text-4xl font-black text-slate-200 hover:text-blue-500/30 transition-colors cursor-default select-none whitespace-nowrap">
                {logo}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
