import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Layers, Zap, Database, Bot, Workflow } from 'lucide-react';
import { cn } from '../lib/utils';

const projects = [
  {
    title: 'Blueflower AI Travel Workflow Automation Engine',
    description: 'Intelligent workflow engine that automates travel planning, booking, and itinerary management using AI agents and n8n for seamless integration with travel APIs.',
    tech: ['n8n', 'OpenAI API', 'RAG Systems', 'JavaScript'],
    impact: 'Reduced manual workflows by 80%',
    github: 'https://github.com/AliQas-7',
    live: '',
    icon: Workflow,
    color: 'from-neon-blue to-neon-cyan'
  },
  {
    title: 'Email RAG Intelligence System',
    description: 'Retrieval-Augmented Generation system that indexes and vectorizes email history to generate context-aware responses aligned with previous conversations.',
    tech: ['Python', 'Pinecone', 'OpenAI', 'FastAPI'],
    impact: 'Context-aware AI responses with high accuracy',
    github: 'https://github.com/AliQas-7',
    live: '',
    icon: Database,
    color: 'from-neon-purple to-pink-500'
  },
  {
    title: 'AI Companies Information Bot',
    description: 'Intelligent bot that provides comprehensive information about AI companies, their products, and services. Utilizes OpenAI and LangChain for natural language understanding and dynamic data retrieval.',
    tech: ['OpenAI', 'LangChain', 'Node.js', 'APIs'],
    impact: 'Automated multi-step business processes',
    github: 'https://github.com/AliQas-7',
    live: '',
    icon: Bot,
    color: 'from-neon-green to-emerald-500'
  },
  {
    title: 'End-to-End Test Automation Framework',
    description: 'Robust test automation framework supporting UI, API, and regression testing with scalable architecture for continuous integration pipelines.',
    tech: ['Playwright', 'Selenium', 'TypeScript', 'Postman'],
    impact: 'Improved testing efficiency by 60%',
    github: 'https://github.com/AliQas-7',
    live: '',
    icon: Layers,
    color: 'from-indigo-500 to-purple-500'
  },
  {
    title: 'API Automation & Integration Hub',
    description: 'Centralized system for integrating multiple APIs, automating data flow between services, and handling real-time processing pipelines.',
    tech: ['Node.js', 'REST APIs', 'n8n', 'Webhooks'],
    impact: 'Seamless multi-service integration',
    github: 'https://github.com/AliQas-7',
    live: '',
    icon: Zap,
    color: 'from-cyan-500 to-blue-500'
  },
  {
    title: 'AI Data Processing Pipelines',
    description: 'Automated pipelines for data extraction, transformation, and intelligent processing using AI models and workflow orchestration tools.',
    tech: ['Python', 'OpenAI', 'LangChain', 'ETL'],
    impact: 'Accelerated data processing workflows',
    github: 'https://github.com/AliQas-7',
    live: '',
    icon: Database,
    color: 'from-pink-500 to-rose-500'
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-16"
        >
          <div className="flex items-center gap-2 text-neon-cyan font-mono text-sm uppercase tracking-[0.3em] mb-4">
            <Layers className="w-4 h-4" />
            Project Modules
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center">Automation Deployments</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-3xl overflow-hidden border border-white/5 hover:border-neon-blue/30 transition-all group"
            >
              <div className={cn("h-48 relative overflow-hidden bg-gradient-to-br", project.color)}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <project.icon className="w-20 h-20 text-white/20 group-hover:scale-110 transition-transform duration-500" />
                </div>

                {/* Animated data lines */}
                <div className="absolute inset-0 opacity-30 pointer-events-none">
                  <motion.div
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/4 left-0 w-full h-px bg-white"
                  />
                  <motion.div
                    animate={{ x: ['100%', '-100%'] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute top-2/4 left-0 w-full h-px bg-white"
                  />
                </div>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold leading-tight group-hover:text-neon-blue transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <a href={project.github} target="_blank">
                      <button className="p-2 rounded-lg bg-white/5 hover:bg-neon-blue/20 transition-colors">
                        <Github className="w-4 h-4" />
                      </button>
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank">
                        <button className="p-2 rounded-lg bg-white/5 hover:bg-neon-blue/20 transition-colors">
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm text-white/60 mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span
                      key={t}
                      className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-tighter text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="text-[10px] font-mono text-neon-green uppercase tracking-widest">
                    Impact
                  </div>
                  <div className="text-sm font-bold text-neon-green">
                    {project.impact}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};