import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skillsData } from '../data/skills';

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <section id="skills" className="py-24 bg-bgBase px-6 md:px-16" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="font-mono text-[11px] text-brandRed tracking-widest uppercase mb-3 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-brandRed" /> Skill Matrix
          </p>
          <h2 className="font-head text-4xl md:text-5xl font-extrabold text-white tracking-tight">What I work with.</h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          {skillsData.map((group, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              className="bg-bgSurface border border-white/[0.06] rounded-xl p-6 transition-all duration-300 hover:border-brandRed/30 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brandRed to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl">{group.icon}</span>
                <h3 className="font-head text-xs font-bold tracking-widest uppercase text-brandRed">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, si) => (
                  <span key={si} className="text-xs font-mono bg-white/[0.03] border border-white/[0.06] text-textDim px-3 py-1 rounded hover:border-brandRed/20 hover:text-textMain transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}