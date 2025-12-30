
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import PremiumButton from './PremiumButton';

interface NavbarProps {
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Expertise', href: '#services' },
    { name: 'Selected Work', href: '#portfolio' },
    { name: 'Methodology', href: '#process' },
    { name: 'Investment', href: '#pricing' },
    { name: 'The Collective', href: '#team' },
  ];

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate('home');
    setTimeout(() => {
      const el = document.getElementById(href.substring(1));
      if (el) {
        const offset = 100;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 py-6 ${
        scrolled ? 'px-4 md:px-12' : 'px-8 md:px-16'
      }`}
    >
      <div 
        className={`max-w-7xl mx-auto transition-all duration-500 rounded-[3rem] border border-white/40 ${
          scrolled 
            ? 'bg-white/70 backdrop-blur-2xl px-8 py-3 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)]' 
            : 'bg-transparent px-0 py-2'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Identity */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <div className="relative">
              <motion.div 
                whileHover={{ rotate: 90 }}
                className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white font-black text-xl shadow-xl transition-all duration-500 group-hover:bg-blue-600"
              >
                DX
              </motion.div>
              <div className="absolute -inset-2 bg-blue-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter text-slate-900 leading-none">DeepX</span>
              <span className="text-[9px] font-black text-blue-600 uppercase tracking-[0.3em] mt-1">Design Studio</span>
            </div>
          </motion.div>

          {/* Core Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative px-5 py-2 text-[11px] font-extrabold text-slate-500 hover:text-slate-900 transition-all uppercase tracking-[0.2em] group overflow-hidden rounded-full"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute inset-0 bg-slate-100/50 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
              </motion.a>
            ))}
          </div>

          {/* Call to Action */}
          <div className="hidden md:flex items-center gap-4">
             <div className="h-6 w-px bg-slate-200 mx-2" />
             <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate('contact-us')}
                className="bg-slate-900 text-white text-[11px] font-black uppercase tracking-[0.2em] px-8 py-4 rounded-full flex items-center gap-2 shadow-2xl shadow-slate-900/10 hover:bg-blue-600 transition-all duration-300"
              >
                Contact Now
                <ArrowUpRight size={14} strokeWidth={3} />
              </motion.button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-3 bg-white border border-slate-100 rounded-2xl text-slate-900 hover:bg-slate-50 transition-colors shadow-sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Layer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -20 }}
            className="lg:hidden absolute top-[calc(100%-1rem)] left-4 right-4 bg-white/95 backdrop-blur-3xl rounded-[3rem] p-12 shadow-2xl border border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.a 
                  key={link.name} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  href={link.href} 
                  className="text-4xl font-black text-slate-900 hover:text-blue-600 transition-colors tracking-tighter"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="h-px bg-slate-100 my-4" />
              <PremiumButton 
                text="Start Project" 
                className="w-full justify-center py-6" 
                onClick={() => { setMobileMenuOpen(false); onNavigate('contact-us'); }} 
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
