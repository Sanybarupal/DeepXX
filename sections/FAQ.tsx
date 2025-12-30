
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle, HelpCircle, ArrowRight } from 'lucide-react';

const FAQ: React.FC = () => {
  const [active, setActive] = useState<number | null>(0);

  const faqs = [
    { 
      q: "How long does a typical project take?", 
      a: "Most website projects take 4-8 weeks from discovery to launch, depending on complexity and revision cycles." 
    },
    { 
      q: "Do you offer post-launch support?", 
      a: "Yes, we provide monthly maintenance retainers to ensure your site remains secure, performant, and up-to-date." 
    },
    { 
      q: "Will I own the IP of the designs?", 
      a: "Absolutely. Once the project is completed and paid for, you own 100% of the intellectual property and source files." 
    },
    { 
      q: "Can you help with Web3/Crypto projects?", 
      a: "Yes, we have deep expertise in blockchain UX, DeFi dashboards, and NFT marketplace interface design." 
    },
  ];

  return (
    <section id="faq" className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section Matches Reference Style */}
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter">
              Got 
              <span className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-2xl mx-3 align-middle shadow-lg shadow-blue-500/20">
                <HelpCircle size={24} className="text-white fill-white/10" />
              </span>
              Questions?
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-lg font-medium"
          >
            Finding the answers to your design journey in three simple steps
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Support Visual & Floating Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative sticky top-32"
          >
            <div className="rounded-[3rem] overflow-hidden aspect-[4/5] lg:aspect-square shadow-2xl relative bg-slate-50">
              <img 
                src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=1000" 
                alt="Support Team" 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Floating Agent Card (Matches Rebecca Screenshot) */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[90%] glass p-6 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-white/60"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img 
                      src="https://i.pravatar.cc/150?u=alex" 
                      className="w-12 h-12 rounded-full border-2 border-white shadow-sm" 
                      alt="Alex"
                    />
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="font-bold text-slate-900 text-sm">Alex Rivera</span>
                        <div className="w-3 h-3 bg-green-500 rounded-full flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                        </div>
                      </div>
                      <p className="text-[10px] text-slate-400 font-medium">business.deepx@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-6 text-[10px] font-bold">
                    <div>
                      <p className="text-slate-300 uppercase tracking-tighter mb-1">Response</p>
                      <p className="text-slate-900">&lt; 15 mins</p>
                    </div>
                    <div>
                      <p className="text-slate-300 uppercase tracking-tighter mb-1">Status</p>
                      <p className="text-blue-600">Online</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-center">
                  <button className="bg-slate-900 text-white rounded-full py-2.5 px-6 text-xs font-bold flex items-center gap-2 group hover:bg-blue-600 transition-colors">
                    <div className="flex -space-x-1">
                       <div className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:bg-white" />
                       <div className="w-1.5 h-1.5 rounded-full bg-blue-300 group-hover:bg-white/80" />
                       <div className="w-1.5 h-1.5 rounded-full bg-blue-200 group-hover:bg-white/60" />
                    </div>
                    Live Chat Now
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side: Accordion Questions (Matches Reference Style) */}
          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => {
              const isActive = active === idx;
              return (
                <motion.div
                  key={idx}
                  onClick={() => setActive(isActive ? null : idx)}
                  className={`cursor-pointer transition-all duration-500 rounded-[2.5rem] overflow-hidden ${
                    isActive 
                    ? 'bg-slate-900 text-white p-8 shadow-2xl shadow-slate-900/20' 
                    : 'bg-transparent text-slate-900 p-8 border-b border-slate-100 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between gap-6">
                    <h3 className={`text-xl md:text-2xl font-bold tracking-tight transition-colors ${
                      isActive ? 'text-white' : 'text-slate-900'
                    }`}>
                      {faq.q}
                    </h3>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all shrink-0 ${
                      isActive 
                      ? 'bg-white text-slate-900 border-white' 
                      : 'bg-transparent text-slate-400 border-slate-200'
                    }`}>
                      {isActive ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </div>
                  
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      >
                        <p className="mt-6 text-slate-400 font-medium leading-relaxed text-lg max-w-md">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}

            {/* Bottom Help Note */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 p-10 glass rounded-[3rem] border-blue-50 bg-blue-50/20"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                  <MessageCircle size={20} />
                </div>
                <h4 className="font-black text-slate-900 tracking-tight">Still confused?</h4>
              </div>
              <p className="text-slate-500 font-medium mb-6">Our experts are ready to clarify any technical or creative concerns you might have.</p>
              <button className="flex items-center gap-2 text-blue-600 font-black text-sm group">
                Download Brochure <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
