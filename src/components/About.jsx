import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-24 bg-bgOff px-6 md:px-16" ref={ref}>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="md:col-span-7"
        >
          <p className="font-mono text-[11px] text-brandRed tracking-widest uppercase mb-3 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-brandRed" /> About Me
          </p>
          <h2 className="font-head text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-none">
            Building things<br />that actually work.
          </h2>
          <p className="text-textDim font-light leading-relaxed mb-4 text-sm md:text-base">
            I'm <strong className="text-white font-medium">Chetan Rathod</strong> — a Computer Science engineering scholar focusing on designing performant applications and computational intelligence modules. My technical journey roots back to Government Polytechnic, Warangal, where I achieved a <strong className="text-white">9.65/10 CGPA</strong>, establishing deep structural paradigms before pursuing my B.Tech path at MREC Hyderabad.
          </p>
          
          <div className="flex border border-white/[0.06] rounded-lg overflow-hidden mt-8 max-w-md">
            <div className="flex-1 p-4 border-r border-white/[0.06] hover:bg-brandRed/[0.02] transition-colors">
              <div className="font-head text-2xl font-extrabold text-white">8.7<span className="text-brandRed text-sm">/10</span></div>
              <div className="font-mono text-[9px] text-textDimmer tracking-wider uppercase mt-1">B.Tech CGPA</div>
            </div>
            <div className="flex-1 p-4 hover:bg-brandRed/[0.02] transition-colors">
              <div className="font-head text-2xl font-extrabold text-white">9.65<span className="text-brandRed text-sm">/10</span></div>
              <div className="font-mono text-[9px] text-textDimmer tracking-wider uppercase mt-1">Diploma CGPA</div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-5 w-full font-mono text-xs border border-white/[0.06] bg-bgSurface rounded-xl p-6 space-y-4 shadow-xl"
        >
          {[
            { key: "Location", val: "Hyderabad, TS, India" },
            { key: "College", val: "Malla Reddy Engineering College" },
            { key: "Degree", val: "B.Tech Computer Science (2027)" },
            { key: "Email", val: "rathodchetan2027@gmail.com", isLink: true, url: "mailto:rathodchetan2027@gmail.com" },
            { key: "GitHub", val: "github.com/RathodChetan1122", isLink: true, url: "https://github.com/RathodChetan1122" },
            { key: "LinkedIn", val: "linkedin.com/in/rathod-chetan...", isLink: true, url: "https://linkedin.com/in/rathod-chetan-826b13259" }
          ].map((row, index) => (
            <div key={index} className="flex justify-between items-start py-2 border-b border-white/[0.04] last:border-0">
              <span className="text-textDimmer uppercase tracking-wider">{row.key}</span>
              <span className="text-textMain text-right max-w-[70%] truncate">
                {row.isLink ? (
                  <a href={row.url} target="_blank" rel="noopener noreferrer" className="text-brandRed hover:underline">
                    {row.val}
                  </a>
                ) : row.val}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}