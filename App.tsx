
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Preloader from './sections/Preloader';
import Hero from './sections/Hero';
import Clients from './sections/Clients';
import About from './sections/About';
import Services from './sections/Services';
import Process from './sections/Process';
import Portfolio from './sections/Portfolio';
import WhyUs from './sections/WhyUs';
import TechStack from './sections/TechStack';
import Team from './sections/Team';
import Testimonials from './sections/Testimonials';
import Pricing from './sections/Pricing';
import FAQ from './sections/FAQ';
import CTA from './sections/CTA';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import StaticPage from './pages/StaticPage';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen selection:bg-blue-100 selection:text-blue-900">
      <AnimatePresence>
        {loading ? (
          <Preloader key="preloader" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="bg-white"
          >
            {/* Scroll Progress Bar */}
            <motion.div
              className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-600 z-[100] origin-left"
              style={{ scaleX }}
            />

            <Navbar onNavigate={navigateTo} />
            
            <main>
              {currentPage === 'home' ? (
                <>
                  <Hero />
                  <Clients />
                  <About />
                  <Services />
                  <Process />
                  <Portfolio />
                  <WhyUs />
                  <TechStack />
                  <Team />
                  <Testimonials />
                  <Pricing />
                  <FAQ />
                  <CTA />
                  <Contact />
                </>
              ) : (
                <StaticPage pageId={currentPage} onBack={() => navigateTo('home')} />
              )}
            </main>

            <Footer onNavigate={navigateTo} />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-0 left-[-10%] w-[50%] h-[50%] bg-blue-50/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-indigo-50/50 rounded-full blur-[150px]" />
        <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] bg-blue-100/30 rounded-full blur-[100px]" />
      </div>
    </div>
  );
};

export default App;
