
import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Palette, Code, Boxes, Globe, Search } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    whileHover={{ y: -15, scale: 1.02 }}
    className="glass-card p-12 rounded-[3.5rem] relative group cursor-pointer h-full"
  >
    <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
      <div className="w-12 h-12 rounded-full border border-blue-500/20 flex items-center justify-center">
        <span className="text-blue-500 font-bold">→</span>
      </div>
    </div>
    <div className="w-20 h-20 rounded-[2rem] bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center text-blue-600 mb-10 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-inner">
      {icon}
    </div>
    <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">{title}</h3>
    <p className="text-slate-500 leading-relaxed text-lg mb-8 font-medium">{description}</p>
    <div className="w-full h-1 bg-slate-50 rounded-full overflow-hidden">
      <motion.div 
        initial={{ x: '-100%' }}
        whileInView={{ x: '100%' }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="w-1/3 h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent" 
      />
    </div>
  </motion.div>
);

const Services: React.FC = () => {
  const services = [
    { icon: <Layout size={32} />, title: "UI/UX Mastery", description: "Strategic interfaces that guide users and maximize retention through behavioral psychology.", delay: 0.1 },
    { icon: <Code size={32} />, title: "Next-Gen Dev", description: "Ultra-fast Next.js architectures with seamless animations and bulletproof scalability.", delay: 0.2 },
    { icon: <Boxes size={32} />, title: "Web3 Innovation", description: "Simplifying blockchain complexity for DeFi, NFT, and GameFi ecosystems.", delay: 0.3 },
    { icon: <Palette size={32} />, title: "Visual ID", description: "Crafting iconic brand systems that command premium positioning in any market.", delay: 0.4 },
    { icon: <Globe size={32} />, title: "Growth Funnels", description: "Conversion-first landing pages engineered to turn traffic into raving fans.", delay: 0.5 },
    { icon: <Search size={32} />, title: "Product Audit", description: "Deep data analysis to identify friction points and unlock hidden revenue.", delay: 0.6 },
  ];

  return (
    <section id="services" className="py-40 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-32 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-blue-600 font-black uppercase tracking-[0.4em] text-xs block mb-6"
            >
              Capabilities
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-[900] text-slate-900 tracking-tighter leading-[0.95]"
            >
              We solve problems <br /> with aesthetics.
            </motion.h2>
          </div>
          <p className="text-slate-400 text-lg md:max-w-xs font-medium leading-relaxed">
            Merging artistic excellence with technical precision to build the future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s, idx) => (
            <ServiceCard key={idx} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
