import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Terminal } from 'lucide-react';

const experiences = [
  {
    role: 'AI Automation Engineer',
    company: 'Programmers Force',
    period: '2024 - Present',
    description: 'Leading the development of AI-driven automation workflows and integrating LLMs into enterprise systems.',
    tasks: ['n8n Workflow Design', 'LangChain Integration', 'System Architecture']
  },
  {
    role: 'Automation & QA Engineer',
    company: 'REMAP.ai',
    period: '2022 - 2024',
    description: 'Developed comprehensive test automation frameworks and optimized CI/CD pipelines for AI products.',
    tasks: ['Playwright Frameworks', 'API Testing', 'Performance Optimization']
  },
  {
    role: 'Associate Software Developer',
    company: 'Cubic Solutions',
    period: '2021 - 2022',
    description: 'Worked on full-stack development with a focus on backend automation and data processing.',
    tasks: ['Node.js Backend', 'Database Design', 'Unit Testing']
  },
  {
    role: 'Freelance Automation Engineer',
    company: 'Global Clients',
    period: '2020 - 2021',
    description: 'Provided custom automation solutions for small to medium businesses worldwide.',
    tasks: ['Web Scraping', 'Zapier Automations', 'Custom Python Scripts']
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-16"
        >
          <div className="flex items-center gap-2 text-neon-green font-mono text-sm uppercase tracking-[0.3em] mb-4">
            <Briefcase className="w-4 h-4" />
            System Activity Logs
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center">Professional Timeline</h2>
        </motion.div>

        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-neon-blue before:via-neon-purple before:to-transparent">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-dark-bg absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10 shadow-[0_0_10px_rgba(0,242,255,0.3)] group-hover:scale-125 transition-transform">
                <Terminal className="w-4 h-4 text-neon-blue" />
              </div>

              {/* Content */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-8 rounded-3xl border border-white/5 hover:border-neon-blue/30 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="text-xs font-mono text-neon-blue uppercase tracking-widest">{exp.period}</div>
                  <div className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-bold text-white/40 uppercase tracking-tighter border border-white/10">
                    Initializing Module...
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                <div className="text-neon-purple font-display text-sm mb-4">{exp.company}</div>
                <p className="text-sm text-white/60 mb-6 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tasks.map(task => (
                    <span key={task} className="text-[10px] font-mono text-neon-cyan/80 bg-neon-cyan/5 px-2 py-1 rounded border border-neon-cyan/10">
                      {task}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
