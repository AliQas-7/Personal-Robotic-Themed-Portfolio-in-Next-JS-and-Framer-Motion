import React from 'react';
import { motion, useInView, useMotionValue, useSpring, useMotionValueEvent } from 'motion/react';
import { ExternalLink, Github, Layers, Zap, Database, Bot, Workflow } from 'lucide-react';
import { cn } from '../lib/utils';

// Helper: extract percentage
const getPercentage = (text: string) => {
  const match = text.match(/(\d+)%/);
  return match ? parseInt(match[1]) : null;
};

// Animated Counter Component
const Counter = ({ value }: { value: number }) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });

  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1.5 });

  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value]);

  // 🔑 THIS FIXES THE 0% ISSUE
  useMotionValueEvent(spring, "change", (latest) => {
    setDisplay(Math.floor(latest));
  });

  return <span ref={ref}>{display}%</span>;
};

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
    description: 'Intelligent bot that provides comprehensive information about AI companies, their products, and services.',
    tech: ['OpenAI', 'LangChain', 'Node.js', 'APIs'],
    impact: 'Automated multi-step business processes',
    github: 'https://github.com/AliQas-7',
    live: '',
    icon: Bot,
    color: 'from-neon-green to-emerald-500'
  },
  {
    title: 'End-to-End Test Automation Framework',
    description: 'Robust test automation framework supporting UI, API, and regression testing.',
    tech: ['Playwright', 'Selenium', 'TypeScript', 'Postman'],
    impact: 'Improved testing efficiency by 60%',
    github: 'https://github.com/AliQas-7',
    live: '',
    icon: Layers,
    color: 'from-indigo-500 to-purple-500'
  },
  {
    title: 'API Automation & Integration Hub',
    description: 'Centralized system for integrating multiple APIs and automating data flow.',
    tech: ['Node.js', 'REST APIs', 'n8n', 'Webhooks'],
    impact: 'Seamless multi-service integration',
    github: 'https://github.com/AliQas-7',
    live: '',
    icon: Zap,
    color: 'from-cyan-500 to-blue-500'
  },
  {
    title: 'AI Data Processing Pipelines',
    description: 'Automated pipelines for intelligent data processing using AI models.',
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
        
        {/* Header */}
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
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Automation Deployments
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => {
            const percent = getPercentage(project.impact);

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => window.open(project.github, '_blank')}
                className="glass rounded-3xl overflow-hidden border border-white/5 hover:border-neon-blue/30 transition-all group flex flex-col h-full cursor-pointer"
              >
                {/* Top */}
                <div className={cn("h-48 relative overflow-hidden bg-gradient-to-br", project.color)}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <project.icon className="w-20 h-20 text-white/20 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col h-full">
                  
                  {/* Title */}
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold leading-tight group-hover:text-neon-blue transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.github, '_blank');
                        }}
                        className="p-2 rounded-lg bg-white/5 hover:bg-neon-blue/20 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </button>
                      {project.live && (
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.live, '_blank');
                          }}
                          className="p-2 rounded-lg bg-white/5 hover:bg-neon-blue/20 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-white/60 mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech */}
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

                  {/* Impact Section */}
                  <div className="mt-auto pt-6 border-t border-white/5">
                    
                    <div className="flex items-center justify-between">
                      
                      {/* Left */}
                      <div>
                        <div className="text-[10px] sm:text-xs font-mono text-neon-green/70 uppercase tracking-widest mb-1">
                          Impact
                        </div>

                        {/* Stat UI */}
                        <div className="flex items-center gap-2">
                          {percent ? (
                            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-neon-green">
                              <Counter value={percent} />
                            </div>
                          ) : (
                            <div className="text-xs sm:text-sm text-neon-green font-semibold">
                              {project.impact}
                            </div>
                          )}

                          {/* Badge */}
                          <span className="px-2 py-1 text-[10px] font-mono rounded-full bg-neon-green/10 border border-neon-green/20 text-neon-green">
                            Metric
                          </span>
                        </div>

                        {/* Subtext */}
                        <div className="text-[11px] text-white/50 mt-1">
                          {project.impact}
                        </div>
                      </div>

                      {/* Animated dot */}
                      <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};