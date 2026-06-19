import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const timelineItems = [
    {
      date: "Aug 2025 – Nov 2025",
      role: "Trainer Intern",
      company: "Tech Nirmaan · On-site",
      bullets: [
        "Designed and delivered structured web development sessions (Flask, HTML, CSS, JavaScript, SQL) to 40+ first-year engineering students across multiple batches.",
        "Built and executed practical curriculum modules; strengthened technical communication and collaborative teaching skills in a real on-site environment."
      ]
    },
    {
      date: "June 2024 – Aug 2024",
      role: "AI Virtual Intern",
      company: "Infosys Springboard · Remote",
      bullets: [
        "Completed structured training in core ML paradigms: analytical classification models, data parsing/preprocessing pipelines, and applied Python computational libraries.",
        "Built and evaluated multiple classification models end-to-end, bridging conceptual machine learning with structured platform code configurations."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-bgBase px-6 md:px-16" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <div className="mb-16">
          <p className="font-mono text-[11px] text-brandRed tracking-widest uppercase mb-3 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-brandRed" /> Timeline
          </p>
          <h2 className="font-head text-4xl md:text-5xl font-extrabold text-white tracking-tight">Where I've worked.</h2>
        </div>

        <div className="relative border-l border-white/[0.06] pl-6 md:pl-8 space-y-12">
          {timelineItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-bgBase border-2 border-brandRed group-hover:bg-brandRed transition-colors ring-4 ring-bgBase" />
              
              <div className="font-mono text-xs text-textDimmer mb-2">{item.date}</div>
              <h3 className="font-head text-xl font-bold text-white tracking-tight">{item.role}</h3>
              <div className="font-mono text-xs text-brandRed uppercase tracking-wider mb-4">{item.company}</div>
              
              <ul className="space-y-2.5 text-textDim text-sm font-light leading-relaxed list-none">
                {item.bullets.map((bullet, bi) => (
                  <li key={bi} className="relative pl-4">
                    <span className="absolute left-0 text-brandRed font-bold">›</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}