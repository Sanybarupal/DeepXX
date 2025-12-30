
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      num: "01.",
      title: "Strategy & Discovery",
      desc: "We deep-dive into your brand DNA to uncover hidden opportunities and define a winning product strategy."
    },
    {
      num: "02.",
      title: "High-Fidelity Design",
      desc: "Crafting pixel-perfect interfaces that balance high-end aesthetics with world-class usability standards."
    },
    {
      num: "03.",
      title: "Iterative Refinement",
      desc: "Continuous feedback loops ensure every detail aligns perfectly with your vision and specific business goals."
    },
    {
      num: "04.",
      title: "Growth & Launch",
      desc: "Seamless handoff and post-launch optimization to ensure your product scales and dominates the market."
    }
  ];

  const avatars = [
    "https://i.pravatar.cc/150?u=a1",
    "https://i.pravatar.cc/150?u=a2",
    "https://i.pravatar.cc/150?u=a3",
    "https://i.pravatar.cc/150?u=a4",
  ];

  return (
    <section id="process" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main Inner Container - Premium White Theme */}
        <div className="bg-slate-50/40 border border-slate-100 rounded-[4rem] p-10 md:p-20 relative">
          
          {/* Section Header */}
          <div className="mb-16 md:mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse shadow-lg shadow-blue-500/50" />
              <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px]">4 Simple Steps</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.9] max-w-3xl"
            >
              Effortless Process, <br />
              Continuous Success
            </motion.h2>
            
            <div className="w-full h-px bg-slate-200 mt-12 max-w-xl opacity-60" />
          </div>

          {/* Steps Grid - Matching the 4-Column Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 md:mb-24">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group p-10 rounded-[3rem] bg-white border border-slate-100/80 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 flex flex-col min-h-[380px]"
              >
                <div className="text-2xl font-black text-slate-200 mb-6 group-hover:text-blue-600 group-hover:-translate-y-1 transition-all duration-300">
                  {step.num}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tight group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-400 font-medium leading-relaxed mt-auto text-sm lg:text-base">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom Integrated Trust Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-xl border border-slate-100 p-4 md:p-5 pl-8 md:pl-10 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-slate-200/20"
          >
            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                {avatars.map((url, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ y: -5, zIndex: 10 }}
                    className="w-11 h-11 rounded-full border-2 border-white overflow-hidden shadow-md"
                  >
                    <img src={url} alt="Expert Team" className="w-full h-full object-cover" />
                  </motion.div>
                ))}
              </div>
              <div className="h-8 w-px bg-slate-100 hidden md:block" />
              <p className="text-slate-500 font-bold text-sm md:text-base">
                Align with Businesses that <span className="text-slate-900 font-black">Choose Quality</span>
              </p>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-slate-900 hover:bg-blue-600 text-white pl-2 pr-10 py-2.5 rounded-full flex items-center gap-4 group transition-all duration-500 shadow-xl shadow-slate-900/10"
            >
              <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-slate-900 transition-transform group-hover:rotate-12">
                <ArrowRight size={22} />
              </div>
              <span className="font-black text-xs md:text-sm uppercase tracking-[0.2em]">Start Now</span>
            </motion.button>
          </motion.div>

          {/* Background Decorative Element */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100/30 blur-[120px] rounded-full -z-10" />
        </div>
      </div>
    </section>
  );
};

export default Process;
