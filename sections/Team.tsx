
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github, Sparkles, ExternalLink } from 'lucide-react';

const Team: React.FC = () => {
  const members = [
    { 
      name: 'Sandeep Barupal', 
      role: 'Founder & Design Lead', 
      img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
      position: 'object-top',
      social: { twitter: '#', linkedin: '#', github: '#' }
    },
    { 
      name: 'Gagan', 
      role: 'Lead Visual & Motion Designer', 
      // Cinematic image with warm/blue lighting to match the user-provided photo
      img: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=800&auto=format&fit=crop', 
      position: 'object-center',
      social: { twitter: '#', linkedin: '#', github: '#' },
      featured: true,
      bio: "Master of cinematic lighting and digital storytelling."
    },
    { 
      name: 'Pawan Kumar', 
      role: 'Full-Stack Engineer', 
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
      position: 'object-center',
      social: { twitter: '#', linkedin: '#', github: '#' }
    },
    { 
      name: 'Jaspal Singh', 
      role: 'Backend Architect', 
      img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop',
      position: 'object-center',
      social: { twitter: '#', linkedin: '#', github: '#' }
    }
  ];

  return (
    <section id="team" className="py-40 px-6 bg-white relative">
      {/* Cinematic Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/40 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-50/30 blur-[150px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse shadow-[0_0_15px_rgba(37,99,235,0.5)]" />
            <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px]">The Collective</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.85]"
          >
            Minds Behind <br /> the Magic<span className="text-blue-600">.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-slate-400 font-bold text-lg max-w-2xl mx-auto tracking-tight"
          >
            A diverse team of visionaries dedicated to pushing the boundaries of digital design and engineering.
          </motion.p>
        </div>

        {/* 4-Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {members.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative glass p-4 rounded-[4.5rem] mb-10 transition-all duration-700 group-hover:shadow-[0_60px_100px_-20px_rgba(0,0,0,0.12)] group-hover:-translate-y-4 border-white">
                <div className="overflow-hidden rounded-[3.8rem] aspect-[4/5] relative bg-slate-50">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className={`w-full h-full object-cover ${member.name === 'Gagan' ? '' : 'grayscale'} transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110 ${member.position}`}
                  />
                  
                  {/* Highlight for Gagan / Featured Members */}
                  {member.featured && (
                    <div className="absolute top-8 left-8 z-10">
                      <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-slate-900/90 backdrop-blur-md text-white px-5 py-2.5 rounded-full flex items-center gap-2 shadow-2xl"
                      >
                        <Sparkles size={14} className="text-blue-400 animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Lead Motion</span>
                      </motion.div>
                    </div>
                  )}

                  {/* Dynamic Social Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                    <div className="flex justify-center gap-4">
                      {[Twitter, Linkedin, Github].map((Icon, idx) => (
                        <motion.a 
                          key={idx}
                          href="#" 
                          whileHover={{ y: -8, backgroundColor: '#ffffff', color: '#2563eb', scale: 1.1 }}
                          className="w-12 h-12 rounded-[1.5rem] bg-white/10 backdrop-blur-2xl border border-white/20 flex items-center justify-center text-white transition-all shadow-lg"
                        >
                          <Icon size={20} strokeWidth={2.5} />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Text Info */}
              <div className="text-center px-4">
                <div className="relative inline-block mb-2">
                   <h4 className="text-3xl font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                    {member.name}
                  </h4>
                  {member.featured && (
                    <div className="absolute -right-8 top-1 text-blue-500">
                      <ExternalLink size={14} />
                    </div>
                  )}
                </div>
                <p className="text-slate-400 font-black uppercase tracking-[0.3em] text-[10px] mb-4">
                  {member.role}
                </p>
                {member.name === 'Gagan' && (
                  <p className="text-slate-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-[200px] mx-auto leading-relaxed">
                    "Blending cinematic art with digital movement."
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
