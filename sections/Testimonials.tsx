
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);

  const reviews = [
    { 
      name: "John Smith", 
      role: "CEO, NexaCloud", 
      text: "DeepX transformed our vision into a stunning reality. Their attention to detail in the UI is unmatched and their workflow is incredibly efficient.",
      avatar: "https://i.pravatar.cc/150?u=john"
    },
    { 
      name: "Emily Davis", 
      role: "Product Mgr, StellarPay", 
      text: "Working with the DeepX team was seamless. They understood our brand immediately and delivered a product that exceeded our conversion goals.",
      avatar: "https://i.pravatar.cc/150?u=emily"
    },
    { 
      name: "David Chen", 
      role: "Founder, QuantumUI", 
      text: "The Web3 dashboard they built for us reduced user friction by 40%. Their expertise in blockchain UX is truly industry-leading.",
      avatar: "https://i.pravatar.cc/150?u=david"
    },
    { 
      name: "Sarah Jenkins", 
      role: "Director, ApexSaaS", 
      text: "Elite level design. They don't just make things look pretty; they build strategic tools that actually move the needle for our business.",
      avatar: "https://i.pravatar.cc/150?u=sarah"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <section id="testimonials" className="py-40 px-6 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-50/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-600 font-black uppercase tracking-[0.4em] text-xs block mb-6"
          >
            Success Stories
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-[900] text-slate-900 tracking-tighter leading-tight"
          >
            What our clients <br /> are saying.
          </motion.h2>
        </div>

        <div className="relative min-h-[450px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 1.1, x: -20 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <div className="glass p-12 md:p-20 rounded-[4rem] border border-white/80 shadow-2xl shadow-blue-500/5 relative overflow-hidden">
                {/* Large Background Icon */}
                <Quote className="absolute -top-10 -right-10 w-64 h-64 text-blue-50/50 -rotate-12 pointer-events-none" />
                
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                  {/* Client Avatar */}
                  <div className="shrink-0">
                    <div className="w-32 h-32 md:w-48 md:h-48 rounded-[3rem] overflow-hidden border-4 border-white shadow-xl rotate-3">
                      <img 
                        src={reviews[index].avatar} 
                        alt={reviews[index].name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Review Content */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex justify-center md:justify-start gap-1 mb-8 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={20} fill="currentColor" />
                      ))}
                    </div>
                    
                    <blockquote className="text-2xl md:text-3xl font-bold text-slate-800 leading-relaxed mb-10 italic">
                      "{reviews[index].text}"
                    </blockquote>
                    
                    <div>
                      <h4 className="text-2xl font-black text-slate-900 tracking-tight mb-1">
                        {reviews[index].name}
                      </h4>
                      <p className="text-blue-600 font-bold uppercase tracking-widest text-xs">
                        {reviews[index].role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`transition-all duration-500 rounded-full h-2 ${
                  index === i ? 'w-10 bg-blue-600' : 'w-2 bg-slate-200 hover:bg-slate-300'
                }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
