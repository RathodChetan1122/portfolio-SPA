import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Native React hook for counting animation to avoid React 19 library conflicts
function useAnimatedCount(target, duration = 1500, trigger) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const end = parseFloat(target);
    if (start === end) return;

    const totalMiliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 10);
    
    const timer = setInterval(() => {
      start += 1;
      if (start >= end) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration, trigger]);

  return count;
}

// Native React typing engine
function useTypingEffect(phrases, speed = 100, deleteSpeed = 50, delay = 2000) {
  const [text, setText] = useState('');
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const i = loopNum % phrases.length;
    const fullText = phrases[i];

    const handleType = () => {
      if (!isDeleting) {
        setText(fullText.substring(0, text.length + 1));
        if (text === fullText) {
          timer = setTimeout(() => setIsDeleting(true), delay);
          return;
        }
      } else {
        setText(fullText.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          return;
        }
      }
      timer = setTimeout(handleType, isDeleting ? deleteSpeed : speed);
    };

    timer = setTimeout(handleType, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, phrases]);

  return text;
}

export default function Hero() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const typedRoles = ['Software Engineer', 'Full Stack Developer', 'AI / ML Developer', 'Computer Vision Engineer'];
  const animatedText = useTypingEffect(typedRoles);

  // Safely grab native values
  const cgpa = inView ? 8.7 : 0;
  const dsa = useAnimatedCount(75, 1200, inView);
  const commits = useAnimatedCount(400, 1500, inView);
  const projects = useAnimatedCount(3, 1000, inView);

  const stats = [
    { value: cgpa, label: "Current CGPA", suffix: "", link: null },
    { value: dsa, label: "DSA Problems", suffix: "+", link: "https://leetcode.com/u/chethanrathod/" },
    { value: commits, label: "GitHub Commits", suffix: "+", link: "https://github.com/RathodChetan1122" },
    { value: projects, label: "Deployed Projects", suffix: "+", link: "https://github.com/RathodChetan1122?tab=repositories" }
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-24 pb-16 px-6 md:px-16 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-radial pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[45rem] h-[45rem] rounded-full bg-brandRed/5 blur-[120px]" />
        <div className="absolute bottom-[5%] left-[5%] w-[35rem] h-[35rem] rounded-full bg-blue-900/20 blur-[100px]" />
      </div>

      <div className="max-w-5xl w-full z-10 flex flex-col items-start text-left" ref={ref}>
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brandRed/10 border border-brandRed/20 font-mono text-[10px] text-brandRed tracking-widest uppercase mb-6"
        >
          <span className="w-1.5 h-1.5 bg-brandRed rounded-full animate-ping" />
          Available for Internships — Summer 2026
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-head text-6xl sm:text-7xl md:text-9xl font-extrabold tracking-tighter text-white leading-[0.9]"
        >
          Chetan <span className="text-brandRed block">Rathod.</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="font-mono text-sm md:text-base text-textDim uppercase tracking-widest mt-6 mb-4 min-h-[24px]"
        >
          <span>{animatedText}</span>
          <span className="text-brandRed animate-pulse ml-1">|</span>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base md:text-lg text-textDim font-light max-w-2xl leading-relaxed"
        >
          Final-year B.Tech CSE student at MREC, Hyderabad. Passionate about <strong className="text-white font-medium">Software Engineering</strong>, scalable systems, and architecture. I build maintainable solutions using modern enterprise tech stacks, integrating AI paradigms to solve real-world problems.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap gap-4 mt-8"
        >
          <a href="#projects" className="bg-brandRed text-white font-head font-bold text-sm px-8 py-4 rounded hover:bg-brandRedLight transition-transform hover:-translate-y-0.5 shadow-xl shadow-brandRed/20">
            View Projects ↓
          </a>
          <a href="mailto:chetanrathodmrec@gmail.com" className="border border-white/10 text-textDim font-head font-bold text-sm px-8 py-4 rounded hover:text-white hover:border-white/20 transition-all">
            Contact Me →
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 w-full pt-8 border-t border-white/[0.06]"
        >
          {stats.map((stat, i) => {
            const isLink = stat.link !== null;
            const Element = isLink ? 'a' : 'div';
            return (
              <Element 
                href={stat.link || undefined} 
                target={isLink ? "_blank" : undefined} 
                rel={isLink ? "noopener noreferrer" : undefined}
                key={i} 
                className="glass-card rounded-xl p-5 hover:border-brandRed/30 transition-all hover:-translate-y-1 group block"
              >
                <div className="font-head text-3xl font-extrabold text-white group-hover:text-brandRed transition-colors">
                  {stat.value}{stat.suffix}
                </div>
                <div className="font-mono text-[9px] text-textDimmer tracking-widest uppercase mt-2">
                  {stat.label} {isLink && '↗'}
                </div>
              </Element>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}