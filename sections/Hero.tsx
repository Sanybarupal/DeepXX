
import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle2, ArrowRight } from 'lucide-react';
import PremiumButton from '../components/PremiumButton';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center pt-32 pb-20 px-6 lg:px-16 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Top Social Proof Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 mb-10"
        >
          <div className="flex items-center justify-center w-6 h-6 bg-blue-600 rounded-md text-white">
            <Star size={14} fill="white" />
          </div>
          <span className="text-slate-900 font-bold text-sm">
            4.9 <span className="text-slate-400 font-medium">on Clutch</span>
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Content */}
          <div className="relative z-10">
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[3.5rem] md:text-[5rem] lg:text-[5rem] font-bold text-slate-900 tracking-tight leading-[1.05] mb-8"
            >
              Connect with <br /> the <span className="text-blue-600 italic font-serif">World</span> <br /> 
              Through Design
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-slate-500 text-lg md:text-xl max-w-xl mb-12 leading-relaxed"
            >
              Learn to express your brand confidently and open doors to new opportunities everywhere with DeepX Design.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center"
            >
              <PremiumButton 
                text="Get Started - For Free!" 
                className="py-4 px-10 !bg-[#3b82f6] shadow-blue-500/20" 
              />
            </motion.div>
          </div>

          {/* Right Column: Visuals */}
          <div className="relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative rounded-[3rem] overflow-hidden shadow-2xl z-0"
            >
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800&h=1000" 
                alt="Expert Designer" 
                className="w-full h-auto object-cover max-h-[60vh]"
              />
            </motion.div>

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-10 bg-[#3b82f6] text-white p-6 rounded-[2rem] shadow-xl shadow-blue-500/30 z-20 min-w-[140px]"
            >
              <div className="text-2xl font-black mb-1">50+</div>
              <div className="text-[10px] font-bold uppercase tracking-wider leading-tight opacity-80">
                Global Design <br /> Support
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-20 -left-16 glass bg-white/90 p-8 rounded-[2.5rem] shadow-2xl z-20"
            >
              <h4 className="text-slate-900 font-bold mb-4">Add your skills</h4>
              <div className="flex gap-2">
                {['+ UI/UX', '+ Brand', '+ Strategy'].map((tag) => (
                  <span key={tag} className="px-4 py-1.5 rounded-full border border-blue-200 text-blue-600 text-xs font-bold whitespace-nowrap">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <div className="absolute top-10 -right-10 flex flex-col gap-4 z-20">
              {['Design Courses', 'One-to-One Sessions'].map((item) => (
                <motion.div
                  key={item}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="bg-white px-6 py-3 rounded-full shadow-lg flex items-center gap-3 border border-slate-50"
                >
                  <div className="bg-blue-600 rounded-full p-1">
                    <CheckCircle2 size={12} className="text-white" />
                  </div>
                  <span className="text-slate-700 font-bold text-xs whitespace-nowrap">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute bottom-10 -right-12 bg-[#3b82f6] text-white p-8 rounded-[2.5rem] shadow-xl z-20 min-w-[160px]"
            >
              <div className="text-3xl font-black mb-1">500+</div>
              <div className="text-[11px] font-bold uppercase tracking-wider opacity-80">
                Live Projects <br /> for clients
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Stats Footer */}
        <div className="mt-20 pt-16 border-t border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
          <div>
            <div className="text-4xl lg:text-5xl font-black text-slate-900 mb-2 tracking-tighter">100%</div>
            <div className="text-slate-400 font-bold text-xs tracking-widest uppercase">Satisfaction Rate</div>
          </div>
          <div>
            <div className="text-4xl lg:text-5xl font-black text-slate-900 mb-2 tracking-tighter">12+</div>
            <div className="text-slate-400 font-bold text-xs tracking-widest uppercase">Years Experience</div>
          </div>
          <div>
            <div className="text-4xl lg:text-5xl font-black text-slate-900 mb-2 tracking-tighter">500+</div>
            <div className="text-slate-400 font-bold text-xs tracking-widest uppercase">Active Clients</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
