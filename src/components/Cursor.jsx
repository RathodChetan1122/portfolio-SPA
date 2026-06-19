import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState('');
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (finePointer && !reducedMotion) {
      setEnabled(true);
      document.documentElement.classList.add('has-custom-cursor');
    }

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    // Safe Event-Driven Hover Detection (No querySelector crashes)
    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      
      const interactive = target.closest('[data-cursor-label]');
      if (interactive) {
        setLabel(interactive.getAttribute('data-cursor-label') || 'View');
      } else if (target.closest('a, button')) {
        setLabel('Link');
      } else {
        setLabel('');
      }
    };

    window.addEventListener('pointermove', moveCursor, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('pointermove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.div 
        className="fixed top-0 left-0 w-9 h-9 border border-white/40 bg-white/[0.02] rounded-full pointer-events-none z-[9998] mix-blend-difference flex items-center justify-center"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%', scale: label ? 1.6 : 1 }}
      >
        {label && (
          <span className="text-[7px] tracking-widest text-white uppercase font-mono absolute -top-6 whitespace-nowrap bg-bgBase/80 px-1 py-0.5 rounded border border-white/10">
            {label}
          </span>
        )}
      </motion.div>
    </>
  );
}