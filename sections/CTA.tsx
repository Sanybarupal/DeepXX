
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Banner Container - Height reduced to feel more integrated */}
        <div className="relative w-full bg-gradient-to-r from-[#2c40ff] via-[#3a52ff] to-[#7e8cff] rounded-[3.5rem] overflow-hidden min-h-[380px] flex items-center shadow-2xl shadow-blue-500/15 border border-white/20">
          
          {/* Stylized background "X" element - Scaled down slightly */}
          <div className="absolute right-0 top-0 h-full flex items-center pointer-events-none select-none overflow-hidden">
             <span className="text-white font-black text-[35rem] leading-none opacity-[0.08] translate-x-24 translate-y-5">X</span>
          </div>
          
          {/* Content Wrapper - Reduced padding for a shorter height */}
          <div className="relative z-10 w-full flex flex-col lg:grid lg:grid-cols-2 items-center gap-12 px-10 md:px-20 py-12">
            
            {/* Left Column: Text Content */}
            <div className="text-center lg:text-left">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-[3.8rem] font-black text-white mb-6 tracking-tighter leading-[1.0]"
              >
                Ready to Redefine <br /> Your Brand?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-white/90 text-lg font-medium mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed"
              >
                Our award-winning designers are ready to elevate your digital presence. Let's create something extraordinary together.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8"
              >
                <motion.button 
                  whileHover={{ scale: 1.05, backgroundColor: '#ffffff', color: '#0028ff' }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#0b0e2b] text-white px-10 py-3.5 rounded-full font-black text-base shadow-2xl transition-all duration-300"
                >
                  Start Your Project
                </motion.button>
                <motion.a 
                  href="#portfolio"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-white font-black text-base group"
                >
                  View successes <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </motion.a>
              </motion.div>
            </div>

            {/* Right Column: Visual Section - Adjusted height and improved image */}
            <div className="hidden lg:flex justify-end items-end relative h-full min-h-[350px] -mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-[380px]"
              >
                {/* Masked High-End Creative Portrait */}
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800" 
                  alt="Lead Designer" 
                  className="w-full h-auto object-cover rounded-t-full"
                  style={{ 
                    maskImage: 'linear-gradient(to top, transparent 0%, black 20%)',
                    WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 20%)'
                  }}
                />
                
                {/* Floating Badge - Refined design */}
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/4 -left-6 glass bg-white/10 text-white p-5 rounded-[1.8rem] border border-white/20 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
                >
                  <div className="text-2xl font-black mb-0.5 tracking-tighter">Premium</div>
                  <div className="text-[9px] font-bold uppercase tracking-[0.2em] opacity-70">Experience Only</div>
                </motion.div>
              </motion.div>
            </div>

          </div>

          {/* Subtle Background Inner Glow */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
