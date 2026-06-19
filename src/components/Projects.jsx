import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projectsData } from '../data/projects';

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="projects" className="py-24 bg-bgOff px-6 md:px-16" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="font-mono text-[11px] text-brandRed tracking-widest uppercase mb-3 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-brandRed" /> Showcase
          </p>
          <h2 className="font-head text-4xl md:text-5xl font-extrabold text-white tracking-tight">Things I've built.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <motion.article 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-bgSurface border border-white/[0.06] rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:border-brandRed/20 transition-all group relative overflow-hidden min-h-[460px]"
            >
              <div className="absolute -top-6 -right-2 font-head text-8xl font-black text-white/[0.02] group-hover:text-brandRed/[0.03] transition-colors pointer-events-none select-none">
                {project.number}
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-mono text-[10px] text-textDimmer tracking-wider uppercase">Project {project.number}</span>
                  {project.featured && (
                    <span className="border border-brandRed/40 bg-brandRed/10 text-brandRed text-[9px] font-mono uppercase px-2.5 py-0.5 rounded-full">Featured</span>
                  )}
                </div>

                <h3 className="font-head text-xl md:text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-brandRed transition-colors">
                  {project.name}
                </h3>
                
                <p className="text-textDim text-sm font-light leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                {project.metrics && (
                  <div className="flex gap-6 mb-6">
                    {project.metrics.map((metric, mi) => (
                      <div key={mi}>
                        <div className="font-head text-lg font-bold text-white">{metric.value}</div>
                        <div className="font-mono text-[8px] text-textDimmer tracking-wider uppercase mt-0.5">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="border-t border-white/[0.04] pt-4">
                  <span className="block font-mono text-[9px] text-textDimmer uppercase tracking-wider mb-2">Technology Stack</span>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech, ti) => (
                      <span key={ti} className="text-[10px] font-mono bg-white/[0.02] text-textDim px-2 py-0.5 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" data-cursor-label="GitHub" className="flex-1 min-h-[40px] border border-white/10 rounded-lg font-mono text-[10px] uppercase tracking-wider flex items-center justify-center gap-2 hover:border-brandRed hover:text-brandRed transition-colors bg-bgBase/40">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="inline-block"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                    Source Repo
                  </a>
                  {project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" data-cursor-label="Demo" className="flex-1 min-h-[40px] border border-white/10 rounded-lg font-mono text-[10px] uppercase tracking-wider flex items-center justify-center gap-2 hover:border-brandRed hover:text-brandRed transition-colors bg-bgBase/40">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="inline-block"><path d="M18 13v6a2 2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
                      Live Demo
                    </a>
                  ) : (
                    <button disabled className="flex-1 min-h-[40px] border border-white/[0.03] text-textDimmer font-mono text-[10px] uppercase tracking-wider flex items-center justify-center gap-2 rounded bg-white/[0.01] cursor-not-allowed">
                      Deployment Pending
                    </button>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}