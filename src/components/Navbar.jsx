import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About', num: '01.' },
    { id: 'skills', label: 'Skills', num: '02.' },
    { id: 'projects', label: 'Projects', num: '03.' },
    { id: 'experience', label: 'Experience', num: '04.' },
    { id: 'achievements', label: 'Certs', num: '05.' },
    { id: 'contact', label: 'Contact', num: '06.' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex items-center justify-between px-6 md:px-16 ${scrolled ? 'py-4 bg-bgBase/90 border-b border-white/[0.06] backdrop-blur-md' : 'py-6 bg-transparent'}`}>
        <a href="#hero" className="font-head font-extrabold text-xl tracking-tight text-white">
          CR<span className="text-brandRed">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-wider">
          {navItems.map((item) => (
            <li key={item.id}>
              <a 
                href={`#${item.id}`} 
                className={`transition-colors flex items-center gap-1 hover:text-white ${activeSection === item.id ? 'text-white font-medium' : 'text-textDim'}`}
              >
                <span className="text-brandRed text-[10px]">{item.num}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="hidden md:inline-block bg-brandRed text-white text-xs font-head font-bold uppercase tracking-wider px-6 py-2.5 rounded hover:bg-brandRedLight transition-colors shadow-lg shadow-brandRed/20">
          Hire Me ↗
        </a>

        <button aria-label="Toggle Navigation Menu" className="md:hidden text-xl text-white focus:outline-none" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
          )}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.35 }}
            className="fixed inset-0 bg-bgBase/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 font-head text-2xl font-bold"
          >
            {navItems.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`} 
                onClick={() => setMobileOpen(false)}
                className={`transition-colors ${activeSection === item.id ? 'text-brandRed' : 'text-textDim'}`}
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileOpen(false)} className="bg-brandRed text-white text-sm uppercase px-8 py-3 rounded mt-4">
              Hire Me
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}