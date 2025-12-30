
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import PremiumButton from '../components/PremiumButton';

const Pricing: React.FC = () => {
  const plans = [
    { name: 'Starter', price: '$4,999', features: ['UI Design (5 Pages)', 'Basic Prototyping', '1 Revision Round', 'Email Support'] },
    { name: 'Elite', price: '$9,999', features: ['Full UI/UX Strategy', 'Up to 15 Pages', 'Unlimited Revisions', 'Priority Support', 'Next.js Integration'], popular: true },
    { name: 'Custom', price: 'Contact', features: ['Enterprise Solutions', 'Full Product Design', 'Strategic Consulting', 'Dev Handoff', 'Branding Kit'] },
  ];

  return (
    <section className="py-40 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-xs block mb-6">Investment</span>
          <h2 className="text-5xl md:text-7xl font-[900] text-slate-900 tracking-tighter">Value-Based Pricing.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 items-center">
          {plans.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-16 rounded-[4rem] transition-all duration-500 ${p.popular ? 'glass border-blue-200 shadow-2xl relative py-24 scale-105 z-10' : 'glass-card border-slate-100'}`}
            >
              {p.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 text-white px-8 py-2.5 rounded-full font-black text-xs uppercase tracking-widest shadow-xl">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-black text-slate-900 mb-4 text-center tracking-tight">{p.name}</h3>
              <div className="text-6xl font-[900] text-slate-900 mb-10 text-center tracking-tighter">{p.price}</div>
              <ul className="space-y-6 mb-12">
                {p.features.map(f => (
                  <li key={f} className="flex items-center gap-4 text-slate-500 text-base font-medium">
                    <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center">
                      <Check size={12} className="text-blue-600" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="flex justify-center">
                <PremiumButton text="Get Started" className={`w-full justify-center ${!p.popular ? 'bg-slate-900 shadow-none' : ''}`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
