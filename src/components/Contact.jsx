import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [status, setStatus] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    setTimeout(() => {
      const subject = encodeURIComponent(`Internship / Role Query — ${data.role_type || 'General'}`);
      const body = encodeURIComponent(
        `Name: ${data.from_name}\nEmail: ${data.from_email}\nCompany: ${data.company || 'N/A'}\nMessage:\n${data.message}`
      );
      window.location.href = `mailto:chetanrathodmrec@gmail.com?subject=${subject}&body=${body}`;
      setStatus('success');
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-bgBase px-6 md:px-16" ref={ref}>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="md:col-span-5 text-left"
        >
          <p className="font-mono text-[11px] text-brandRed tracking-widest uppercase mb-3 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-brandRed" /> Engagement
          </p>
          <h2 className="font-head text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 leading-none">Let's work <span className="text-brandRed">together.</span></h2>
          <p className="text-textDim text-sm font-light leading-relaxed mb-8">
            Currently looking for Software Engineering, Full Stack Product Development, and Computational Intelligence internships where structural algorithmic optimization matches active application shipping workflows.
          </p>

          <div className="flex flex-col gap-3 font-mono text-xs">
            <a href="mailto:chetanrathodmrec@gmail.com" className="flex items-center gap-3 text-textDim hover:text-brandRed transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="inline-block"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2M22 18"/></svg> 
              chetanrathodmrec@gmail.com
            </a>
            <a href="https://github.com/RathodChetan1122" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-textDim hover:text-brandRed transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="inline-block"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              github.com/RathodChetan1122
            </a>
            <a href="https://linkedin.com/in/rathod-chetan-826b13259" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-textDim hover:text-brandRed transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="inline-block"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              linkedin.com/in/rathod-chetan
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-7 bg-bgSurface border border-white/[0.06] rounded-2xl p-6 md:p-8"
        >
          {status === 'success' ? (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="font-head text-lg font-bold text-white mb-2">Mail Client Ready</h3>
              <p className="text-textDim text-xs font-mono">Dispatched connection stream configuration to default endpoint mail pipeline handler.</p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4 text-left font-mono text-[11px] uppercase tracking-wider text-textDim">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-textMain" htmlFor="from_name">Your Name *</label>
                  <input required className="w-full bg-bgSurface2 border border-white/[0.06] rounded-lg p-3 text-sm font-body text-textMain tracking-normal normal-case outline-none focus:border-brandRed transition-colors" type="text" name="from_name" id="from_name" placeholder="Name" />
                </div>
                <div>
                  <label className="block mb-2 text-textMain" htmlFor="from_email">Email Address *</label>
                  <input required className="w-full bg-bgSurface2 border border-white/[0.06] rounded-lg p-3 text-sm font-body text-textMain tracking-normal normal-case outline-none focus:border-brandRed transition-colors" type="email" name="from_email" id="from_email" placeholder="you@company.com" />
                </div>
              </div>
              
              <div>
                <label className="block mb-2 text-textMain" htmlFor="role_type">Opportunity Type</label>
                <select className="w-full bg-bgSurface2 border border-white/[0.06] rounded-lg p-3 text-sm font-body text-textMain tracking-normal normal-case outline-none focus:border-brandRed transition-colors appearance-none" name="role_type" id="role_type">
                  <option>Software Engineering Internship</option>
                  <option>Full Stack Development Internship</option>
                  <option>AI / ML Computational Internship</option>
                  <option>Full-Time Post-Graduation Engagement</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-textMain" htmlFor="message">Message Parameters *</label>
                <textarea required rows={4} className="w-full bg-bgSurface2 border border-white/[0.06] rounded-lg p-3 text-sm font-body text-textMain tracking-normal normal-case outline-none focus:border-brandRed transition-colors resize-none" name="message" id="message" placeholder="Describe the deployment pipeline context or role structure requirements..." />
              </div>

              <button type="submit" disabled={status === 'loading'} className="w-full py-4 rounded-lg bg-brandRed text-white font-head font-bold text-sm uppercase tracking-widest hover:bg-brandRedLight transition-colors shadow-lg shadow-brandRed/10 disabled:opacity-50">
                {status === 'loading' ? 'Processing Stream...' : 'Send Query Message ✉️'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}