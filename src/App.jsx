import React, { useState, useEffect, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cursor from './components/Cursor';

// Lazy load non-critical below-the-fold views for structural optimization
const About = React.lazy(() => import('./components/About'));
const Skills = React.lazy(() => import('./components/Skills'));
const Projects = React.lazy(() => import('./components/Projects'));
const Certifications = React.lazy(() => import('./components/Certifications'));
const Experience = React.lazy(() => import('./components/Experience'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 300;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Cursor />
      <Navbar activeSection={activeSection} />
      <main id="main-content">
        <Hero />
        <Suspense fallback={<div className="h-40 bg-bgBase flex items-center justify-center text-textDim font-mono">Loading Modular Layout Component...</div>}>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certifications />
          <Contact />
          <Footer />
        </Suspense>
      </main>
    </>
  );
}

export default App;