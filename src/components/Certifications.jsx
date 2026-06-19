import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { certificatesData } from '../data/certificates';

export default function Certifications() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="achievements" className="py-24 bg-bgOff px-6 md:px-16" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="font-mono text-[11px] text-brandRed tracking-widest uppercase mb-3 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-brandRed" /> Credentials
          </p>
          <h2 className="font-head text-4xl md:text-5xl font-extrabold text-white tracking-tight">Achievements & Certs.</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certificatesData.map((cert, index) => (
            <motion.a 
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-bgSurface border border-white/[0.06] rounded-xl p-5 flex items-center justify-between hover:border-brandRed/30 hover:bg-bgSurface2/40 transition-all group"
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-10 h-10 min-w-[40px] rounded-lg bg-brandRed/10 border border-brandRed/20 flex items-center justify-center text-lg">
                  {cert.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="font-head text-sm font-bold text-white group-hover:text-brandRed transition-colors truncate">{cert.name}</h3>
                  <p className="font-mono text-[10px] text-textDimmer tracking-wide mt-0.5 truncate">{cert.sub}</p>
                </div>
              </div>
              
              {/* 🚀 Replaced FiArrowUpRight with an inline structural SVG arrow */}
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-textDimmer group-hover:text-brandRed transition-colors flex-shrink-0 ml-2"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}