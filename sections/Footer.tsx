
import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Youtube, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  // Navigation mapping for all footer links
  const footerLinks = {
    usefulLinks: [
      { name: 'About Us', id: 'about-us' },
      { name: 'Contact Us', id: 'contact-us' },
      { name: 'FAQs', id: 'faqs' },
      { name: 'Terms of Service', id: 'terms-of-service' },
      { name: 'Privacy Policy', id: 'privacy-policy' },
    ],
    careers: [
      { name: 'Blog', id: 'blog' },
      { name: 'Press', id: 'press' },
      { name: 'Partnerships', id: 'partnerships' },
      { name: 'Support', id: 'support' },
      { name: 'Help Center', id: 'help-center' },
    ],
    resources: [
      { name: 'Events', id: 'events' },
      { name: 'Community', id: 'community' },
      { name: 'Social Media', id: 'social-media' },
      { name: 'Newsletter', id: 'newsletter' },
      { name: 'Subscribe', id: 'subscribe' },
    ]
  };

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    onNavigate(id);
  };

  return (
    <footer className="pt-24 pb-12 px-6 bg-white overflow-hidden border-t border-slate-50">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. Link Columns & Subscribe Section */}
        <div className="grid md:grid-cols-12 gap-16 mb-24">
          
          {/* Link Columns */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div>
              <h4 className="text-[#0f172a] font-black text-xl mb-10 tracking-tight">Useful Links</h4>
              <ul className="space-y-4">
                {footerLinks.usefulLinks.map(link => (
                  <li key={link.id}>
                    <a 
                      href="#" 
                      onClick={(e) => handleLinkClick(e, link.id)}
                      className="text-slate-500 hover:text-blue-600 font-medium transition-colors text-base"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[#0f172a] font-black text-xl mb-10 tracking-tight">Careers</h4>
              <ul className="space-y-4">
                {footerLinks.careers.map(link => (
                  <li key={link.id}>
                    <a 
                      href="#" 
                      onClick={(e) => handleLinkClick(e, link.id)}
                      className="text-slate-500 hover:text-blue-600 font-medium transition-colors text-base"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[#0f172a] font-black text-xl mb-10 tracking-tight">Resources</h4>
              <ul className="space-y-4">
                {footerLinks.resources.map(link => (
                  <li key={link.id}>
                    <a 
                      href="#" 
                      onClick={(e) => handleLinkClick(e, link.id)}
                      className="text-slate-500 hover:text-blue-600 font-medium transition-colors text-base"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Subscribe Column */}
          <div className="md:col-span-4 bg-slate-50/50 p-10 rounded-[3rem] border border-slate-100">
            <h4 className="text-[#0f172a] font-black text-2xl mb-4 tracking-tight">Stay Updated</h4>
            <p className="text-slate-500 font-medium mb-8">Join our elite community for weekly design insights.</p>
            
            <div className="flex flex-col gap-4 w-full">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white border border-slate-200 rounded-full py-4 px-6 focus:ring-2 focus:ring-blue-500/20 text-slate-700 font-medium placeholder:text-slate-400 outline-none"
              />
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-black py-4 px-8 rounded-full shadow-xl shadow-blue-500/20 transition-all uppercase tracking-widest text-xs"
              >
                Subscribe Now
              </motion.button>
            </div>
            <p className="text-slate-400 text-[0.75rem] mt-6 px-2 leading-relaxed text-center">
              By subscribing, you agree to our <a href="#" onClick={(e) => handleLinkClick(e, 'privacy-policy')} className="underline hover:text-blue-600 transition-colors">Privacy Policy</a>
            </p>
          </div>
        </div>

        {/* 2. Bottom Brand & Legals Bar */}
        <div className="border-t border-slate-100 pt-16 pb-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Logo */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-[2.5rem] font-black text-[#0f172a] tracking-tighter cursor-pointer flex items-center gap-2"
              onClick={() => onNavigate('home')}
            >
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white text-xl">DX</div>
              DeepX<span className="text-blue-600">.</span>
            </motion.div>
            
            {/* Social Links */}
            <div className="flex items-center gap-10">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="text-slate-400 hover:text-blue-600 transition-all transform hover:scale-110">
                  <Icon size={22} strokeWidth={2.5} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-8 text-slate-400 text-[13px] font-bold uppercase tracking-widest">
            <div className="flex flex-wrap justify-center gap-10">
              <a href="#" onClick={(e) => handleLinkClick(e, 'privacy-policy')} className="hover:text-blue-600 transition-colors">Privacy Policy</a>
              <a href="#" onClick={(e) => handleLinkClick(e, 'terms-of-service')} className="hover:text-blue-600 transition-colors">Terms of Service</a>
              <a href="#" onClick={(e) => handleLinkClick(e, 'cookie-policy')} className="hover:text-blue-600 transition-colors">Cookie Policy</a>
            </div>
            <p className="text-slate-400">© {new Date().getFullYear()} DeepX Design Collective</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
