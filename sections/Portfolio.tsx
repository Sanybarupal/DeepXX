
import React from 'react';
import { motion } from 'framer-motion';

const Portfolio: React.FC = () => {
  const projects = [
    { title: "Quantum Ledger", category: "Web3 Dashboard", img: "https://picsum.photos/800/600?random=1" },
    { title: "Nexa SaaS", category: "Product Design", img: "https://picsum.photos/800/600?random=2" },
    { title: "Ethos Pay", category: "Fintech App", img: "https://picsum.photos/800/600?random=3" },
    { title: "Solaris Mobile", category: "Lifestyle Brand", img: "https://picsum.photos/800/600?random=4" },
  ];

  return (
    <section id="portfolio" className="py-32 px-6 bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-sm block mb-4">Portfolio</span>
            <h2 className="text-5xl font-extrabold text-slate-900 leading-tight">Our Recent Work.</h2>
          </div>
          <button className="px-8 py-4 glass border border-slate-200 text-slate-900 rounded-2xl font-bold hover:bg-white transition-all">
            Browse All Projects
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-[2.5rem] overflow-hidden aspect-[4/3] cursor-pointer"
            >
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-10 left-10 translate-y-10 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                <span className="text-blue-400 font-bold uppercase text-xs tracking-widest block mb-2">{project.category}</span>
                <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                <div className="flex items-center gap-4">
                  <span className="w-12 h-1 bg-white rounded-full" />
                  <span className="text-white font-semibold">View Case Study</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
