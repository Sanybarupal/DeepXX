
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-indigo-50 rounded-[3rem] blur-2xl opacity-50" />
          <div className="relative glass p-4 rounded-[3rem]">
            <img 
              src="https://picsum.photos/1000/1000?random=10" 
              alt="DeepX Team" 
              className="w-full h-auto rounded-[2.5rem] shadow-2xl"
            />
            {/* Stats Overlay */}
            <div className="absolute -bottom-10 -right-10 glass p-8 rounded-3xl shadow-2xl border border-white/50 max-w-[200px]">
              <div className="text-4xl font-black text-blue-600 mb-1">98%</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-relaxed">
                Client Satisfaction Rate
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-sm block mb-4">Who We Are</span>
          <h2 className="text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
            We are a Collective of <br /> Digital Visionaries.
          </h2>
          <p className="text-lg text-slate-500 mb-8 leading-relaxed">
            Founded by industry veterans, DeepX Design was born from the desire to bridge the gap between complex technology and human-centric design. 
            We don't just build websites; we craft immersive digital ecosystems that tell your story.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <div className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2" />
              <div>
                <h4 className="font-bold text-slate-900">Future-Proof Tech</h4>
                <p className="text-sm text-slate-500 mt-1">We utilize the latest tech stacks to ensure longevity.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2" />
              <div>
                <h4 className="font-bold text-slate-900">High Conversion</h4>
                <p className="text-sm text-slate-500 mt-1">Our designs are data-driven to boost your ROI.</p>
              </div>
            </div>
          </div>

          <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold shadow-xl shadow-slate-900/10 hover:shadow-slate-900/30 transition-all">
            Our Full Story
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
