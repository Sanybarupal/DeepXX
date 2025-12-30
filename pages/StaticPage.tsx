
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, ArrowRight, ArrowUpRight, Zap, Shield, Globe, Users, 
  MessageSquare, Info, Star, Bookmark, Calendar, User,
  Mail, Phone, MapPin, Search, ChevronRight, Briefcase, 
  Handshake, HelpCircle, Newspaper, Bell, Heart, Send
} from 'lucide-react';
import PremiumButton from '../components/PremiumButton';

interface StaticPageProps {
  pageId: string;
  onBack: () => void;
}

const StaticPage: React.FC<StaticPageProps> = ({ pageId, onBack }) => {
  const getPageData = (id: string) => {
    const baseTitle = id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    
    const data: Record<string, any> = {
      'about-us': {
        title: "Pioneering the Future of Experience",
        subtitle: "Our Story & Vision",
        heroImg: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
        icon: <Users className="text-blue-600" size={32} />,
        layout: 'rich-text',
        sections: [
          {
            type: 'text-image',
            title: "We are DeepX",
            content: "Founded in 2012, DeepX Design began as a boutique studio in San Francisco with a singular mission: to eliminate friction between humans and machines. Today, we are a global collective of designers, engineers, and strategists working with the world's most ambitious brands.",
            img: "https://images.unsplash.com/photo-1522071823991-b1ae5e6a3048?auto=format&fit=crop&q=80&w=800"
          },
          {
            type: 'values',
            title: "Our Core Principles",
            items: [
              { title: "Radical Transparency", desc: "No fluff. Just honest data and direct communication throughout the project lifecycle.", icon: <Shield size={24} /> },
              { title: "Quality Obsessed", desc: "We don't ship 'good enough'. We ship 'better than you imagined'.", icon: <Star size={24} /> },
              { title: "Human Centric", desc: "Technology serves people, not the other way around. Every pixel has a purpose.", icon: <Heart size={24} /> }
            ]
          }
        ]
      },
      'blog': {
        title: "The Creative Pulse",
        subtitle: "Insights & Trends",
        heroImg: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1200",
        icon: <Zap className="text-blue-600" size={32} />,
        type: 'blog-grid',
        posts: [
          { title: "The Rise of Glassmorphism in 2025", category: "Design", date: "Oct 12, 2024", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600", excerpt: "Exploring the evolution of translucent UI elements and why depth is returning to digital design." },
          { title: "Why Next.js 15 is a Game Changer", category: "Dev", date: "Oct 08, 2024", img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=600", excerpt: "A deep dive into server components and the new caching mechanisms that boost speed by 40%." },
          { title: "Psychology of Color in Fintech", category: "UX", date: "Sep 29, 2024", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600", excerpt: "How trust is built through palette choices in modern banking and investment applications." },
          { title: "Bridging Web2 and Web3 UX", category: "Crypto", date: "Sep 15, 2024", img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=600", excerpt: "Simplifying wallet connectivity and transaction signing for the mainstream user base." }
        ]
      },
      'press': {
        title: "DeepX Newsroom",
        subtitle: "Announcements & Media",
        heroImg: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=1200",
        icon: <Newspaper className="text-blue-600" size={32} />,
        type: 'list',
        items: [
          { title: "DeepX Design Wins Webby for Best Fintech Interface", date: "Aug 2024", desc: "Our work on Ethos Pay has been recognized globally for its revolutionary approach to asset management UI." },
          { title: "DeepX Announces $2M Fund for Emerging Designers", date: "July 2024", desc: "A new initiative to support underrepresented talent in the digital product design space." },
          { title: "Expanding Our Footprint to Singapore & Dubai", date: "June 2024", desc: "Meeting the rising demand for Web3 design expertise in the world's leading crypto hubs." }
        ]
      },
      'partnerships': {
        title: "Collaborate for Impact",
        subtitle: "Global Partnerships",
        heroImg: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1200",
        icon: <Handshake className="text-blue-600" size={32} />,
        type: 'partners',
        content: "We believe that the best products are built through collaboration. DeepX partners with technology firms, venture capitals, and industry leaders to provide end-to-end excellence.",
        items: [
          { name: "Venture Partners", desc: "We work with top-tier VCs to accelerate the design maturity of their portfolio startups." },
          { name: "Tech Alliances", desc: "Partnering with cloud providers and SaaS giants to build seamless integrations." }
        ]
      },
      'faqs': {
        title: "Clear Answers",
        subtitle: "Help Center",
        heroImg: "https://images.unsplash.com/photo-1454165833767-027ff33027ef?auto=format&fit=crop&q=80&w=1200",
        icon: <HelpCircle className="text-blue-600" size={32} />,
        type: 'faq-list',
        items: [
          { q: "What is your typical project timeline?", a: "MVP projects usually take 6-8 weeks, while complex enterprise platforms can range from 3-6 months depending on requirements." },
          { q: "Do you handle development as well as design?", a: "Yes, we are a full-service agency. Our engineers specialize in React, Next.js, and high-fidelity frontend implementations." },
          { q: "How do you handle revisions?", a: "We operate in agile sprints. Each milestone includes dedicated review periods to ensure total alignment with your vision." }
        ]
      },
      'newsletter': {
        title: "Stay Ahead of the Curve",
        subtitle: "Weekly Design Brief",
        heroImg: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=1200",
        icon: <Send className="text-blue-600" size={32} />,
        type: 'subscription'
      }
    };

    return data[id] || {
      title: baseTitle,
      subtitle: "Digital Resources",
      heroImg: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200",
      icon: <Globe className="text-blue-600" size={32} />,
      type: 'generic',
      content: `The ${baseTitle} section is currently under curation by our editorial team. Check back soon for premium updates and deep-dives into our agency ecosystem.`
    };
  };

  const page = getPageData(pageId);

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Dynamic Hero */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img src={page.heroImg} className="w-full h-full object-cover" alt={page.title} />
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        </motion.div>

        <div className="relative z-10 text-center max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/10">
              {page.icon}
            </div>
            <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-xs">
              {page.subtitle}
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.95] mb-8"
          >
            {page.title}<span className="text-blue-600">.</span>
          </motion.h1>
          <motion.button
            onClick={onBack}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-2 text-slate-400 hover:text-blue-600 font-bold mx-auto transition-colors group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Return to Studio
          </motion.button>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* BLOG GRID */}
          {page.type === 'blog-grid' && (
            <div className="grid md:grid-cols-2 gap-16">
              {page.posts.map((post: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="relative rounded-[3.5rem] overflow-hidden aspect-[16/10] mb-8 glass shadow-2xl">
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                    <div className="absolute top-8 left-8 glass px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-900 shadow-xl">
                      {post.category}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-4 text-slate-400 font-bold text-xs uppercase tracking-widest">
                    <Calendar size={14} className="text-blue-600" /> {post.date}
                    <span className="w-1 h-1 rounded-full bg-slate-200" />
                    <User size={14} className="text-blue-600" /> By DeepX
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight leading-tight mb-4">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 font-medium leading-relaxed">{post.excerpt}</p>
                </motion.div>
              ))}
            </div>
          )}

          {/* ABOUT CONTENT */}
          {pageId === 'about-us' && (
            <div className="space-y-40">
              {page.sections.map((sec: any, i: number) => (
                <div key={i}>
                  {sec.type === 'text-image' && (
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                      <div className={i % 2 === 0 ? "order-1" : "order-2"}>
                        <h2 className="text-5xl font-black text-slate-900 mb-8 tracking-tighter leading-tight">{sec.title}</h2>
                        <p className="text-xl text-slate-500 leading-relaxed font-medium mb-12">{sec.content}</p>
                        <PremiumButton text="Our Process" onClick={() => {}} />
                      </div>
                      <div className={`relative ${i % 2 === 0 ? "order-2" : "order-1"}`}>
                        <div className="glass p-4 rounded-[4rem] shadow-2xl relative z-10">
                          <img src={sec.img} className="w-full rounded-[3.5rem] object-cover aspect-square" alt="Agency Life" />
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-100/40 rounded-full blur-[100px] -z-10" />
                      </div>
                    </div>
                  )}
                  {sec.type === 'values' && (
                    <div className="bg-slate-50 p-16 md:p-32 rounded-[5rem] relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-96 h-96 bg-white/50 blur-[150px] rounded-full" />
                      <h2 className="text-5xl font-black text-slate-900 mb-20 tracking-tighter text-center">{sec.title}</h2>
                      <div className="grid md:grid-cols-3 gap-12">
                        {sec.items.map((item: any, j: number) => (
                          <div key={j} className="text-center p-8 glass rounded-[3rem] shadow-sm border-white">
                            <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-8 shadow-lg shadow-blue-500/5">
                              {item.icon}
                            </div>
                            <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{item.title}</h4>
                            <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* LIST TYPE (Press/Partners) */}
          {(page.type === 'list' || page.type === 'partners') && (
            <div className="max-w-4xl mx-auto space-y-24">
              {page.content && (
                <p className="text-2xl font-medium text-slate-600 leading-relaxed text-center mb-20 italic">
                  "{page.content}"
                </p>
              )}
              <div className="space-y-12">
                {page.items.map((item: any, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="group glass p-12 rounded-[3.5rem] flex flex-col md:flex-row items-start md:items-center justify-between gap-10 hover:bg-slate-50 transition-colors cursor-pointer border-white shadow-xl"
                  >
                    <div className="max-w-xl">
                      {item.date && <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.3em] mb-2 block">{item.date}</span>}
                      <h3 className="text-3xl font-black text-slate-900 tracking-tight mb-4 group-hover:text-blue-600 transition-colors">{item.title || item.name}</h3>
                      <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                    <div className="w-14 h-14 glass rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-lg">
                      <ArrowUpRight size={24} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* FAQ LIST */}
          {page.type === 'faq-list' && (
            <div className="max-w-4xl mx-auto space-y-8">
              {page.items.map((item: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="glass p-10 rounded-[3rem] border-white shadow-lg"
                >
                  <h3 className="text-2xl font-black text-slate-900 mb-4 flex gap-4 items-center">
                    <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-sm font-black italic">Q</span>
                    {item.q}
                  </h3>
                  <div className="pl-12 text-lg text-slate-500 font-medium leading-relaxed">
                    {item.a}
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* SUBSCRIPTION PAGE */}
          {page.type === 'subscription' && (
            <div className="max-w-4xl mx-auto glass p-16 md:p-32 rounded-[5rem] text-center shadow-2xl border-white relative overflow-hidden">
               <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-400 blur-[150px] opacity-20" />
               <h2 className="text-5xl font-black text-slate-900 mb-8 tracking-tighter">Design Insights Delivered.</h2>
               <p className="text-xl text-slate-500 font-medium mb-12 leading-relaxed">Join 12,000+ founders and designers who get our curated weekly brief on the future of UI/UX, Web3, and SaaS growth.</p>
               <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                 <input type="email" placeholder="Your work email" className="flex-1 px-8 py-5 rounded-full bg-slate-50 border-none focus:ring-2 focus:ring-blue-500/20 text-lg font-medium" />
                 <PremiumButton text="Subscribe" className="py-5 !px-12" />
               </div>
               <p className="mt-8 text-slate-400 text-sm">No spam. One email per week. Unsubscribe anytime.</p>
            </div>
          )}

          {/* GENERIC / FALLBACK */}
          {page.type === 'generic' && (
            <div className="max-w-3xl mx-auto glass p-20 rounded-[4rem] text-center shadow-2xl border-white">
              <p className="text-2xl text-slate-500 font-medium leading-relaxed mb-12">
                {page.content}
              </p>
              <PremiumButton text="Contact Us Directly" onClick={() => {}} />
            </div>
          )}

        </div>
      </section>

      {/* Shared Footer Action */}
      <section className="py-24 px-6 border-t border-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="glass p-20 rounded-[4rem] relative overflow-hidden group">
            <div className="absolute inset-0 bg-blue-50/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tighter">Have a specific project in mind?</h2>
            <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto font-medium">Our senior strategists are ready to dive into your product requirements and provide a free visual roadmap.</p>
            <div className="flex justify-center gap-8">
              <PremiumButton text="Start Conversation" onClick={() => onBack()} />
            </div>
          </div>
        </div>
      </section>

      {/* Global Background Logo */}
      <div className="fixed bottom-0 right-0 pointer-events-none select-none overflow-hidden opacity-[0.03] -z-10">
        <span className="text-blue-600 font-black text-[50rem] leading-none translate-x-32 translate-y-32">DX</span>
      </div>
    </div>
  );
};

export default StaticPage;
