
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import PremiumButton from '../components/PremiumButton';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-40 px-6 bg-slate-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-32 items-start">
          <div>
            <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-xs block mb-6">Contact</span>
            <h2 className="text-6xl font-[900] text-slate-900 mb-10 tracking-tighter leading-[0.95]">Let's build <br /> the future.</h2>
            <p className="text-slate-500 text-xl mb-16 leading-relaxed font-medium">
              We're excited to hear about your vision. Fill out the form or reach out directly to start the conversation.
            </p>

            <div className="space-y-12">
              <div className="flex items-center gap-8">
                <div className="w-16 h-16 glass rounded-[1.5rem] flex items-center justify-center text-blue-600 shadow-sm">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-1">Email</h4>
                  <p className="text-slate-600 text-lg font-bold">business.deepx@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="w-16 h-16 glass rounded-[1.5rem] flex items-center justify-center text-blue-600 shadow-sm">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-1">Call</h4>
                  <p className="text-slate-600 text-lg font-bold">+91 78520 52323</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-16 rounded-[4rem] shadow-2xl border border-white"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-black text-slate-900 uppercase tracking-widest ml-1">Name</label>
                  <input type="text" className="w-full glass-card bg-white/70 border-slate-100 p-5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 font-medium" placeholder="Jane Doe" />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-black text-slate-900 uppercase tracking-widest ml-1">Email</label>
                  <input type="email" className="w-full glass-card bg-white/70 border-slate-100 p-5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 font-medium" placeholder="jane@company.com" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-sm font-black text-slate-900 uppercase tracking-widest ml-1">Message</label>
                <textarea rows={4} className="w-full glass-card bg-white/70 border-slate-100 p-5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 font-medium" placeholder="What are we building?"></textarea>
              </div>
              <div className="pt-4">
                <PremiumButton text="Send Message" className="w-full justify-center py-5" />
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
