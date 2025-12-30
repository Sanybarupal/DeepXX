
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Trophy, Target } from 'lucide-react';

const WhyUs: React.FC = () => {
  const points = [
    { icon: <Zap />, title: "Ultra Fast", desc: "Optimized performance that ensures your site loads in under 1s." },
    { icon: <ShieldCheck />, title: "Secure UX", desc: "Enterprise-grade security principles baked into every design." },
    { icon: <Trophy />, title: "Award Winning", desc: "Our team has worked with Fortune 500 giants and top startups." },
    { icon: <Target />, title: "Data Focused", desc: "We design based on metrics, not just aesthetics." },
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto glass p-12 md:p-24 rounded-[4rem] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-50 blur-[100px] rounded-full" />
        
        <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <div>
            <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-sm block mb-4">Why Choose Us</span>
            <h2 className="text-5xl font-extrabold text-slate-900 mb-8 leading-tight">The DeepX Advantage.</h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              We combine artistic flair with technical rigor to deliver results that exceed expectations. Our unique approach ensures your digital product stands out in a crowded market.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {points.map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-6 rounded-3xl bg-white shadow-sm border border-slate-100"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  {p.icon}
                </div>
                <h4 className="font-bold text-slate-900 mb-2">{p.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
