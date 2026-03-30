import React from 'react';
import { motion } from 'motion/react';
import { Zap, Bot, ShieldCheck } from 'lucide-react';
import { cn } from '../lib/utils';

const services = [
  {
    title: 'Workflow Automation',
    description: 'End-to-end business process automation using n8n, Zapier, and custom scripts to eliminate repetitive tasks.',
    icon: Zap,
    color: 'text-neon-blue'
  },
  {
    title: 'AI Integration',
    description: 'Integrating LLMs (GPT-4, Claude) into your existing stack to create intelligent agents and RAG systems.',
    icon: Bot,
    color: 'text-neon-purple'
  },
  {
    title: 'Test Automation',
    description: 'Building robust, scalable E2E test suites with Playwright and Selenium to ensure software quality.',
    icon: ShieldCheck,
    color: 'text-neon-green'
  }
];

export const Services: React.FC = () => {
  return (
    <section className="py-24 relative bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl border border-white/5 bg-white/5 hover:bg-white/[0.08] transition-all group"
            >
              <div className={cn("w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform", service.color)}>
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-neon-blue/10 border border-neon-blue/30 flex items-center justify-center">
            <Zap className="w-4 h-4 text-neon-blue" />
          </div>
          <span className="font-display font-bold">ALI.QAIS</span>
        </div>
        
        <div className="text-xs font-mono text-white/20 uppercase tracking-widest">
          © 2026 ALI QAIS // ALL SYSTEMS OPERATIONAL
        </div>

        <div className="flex gap-6">
          {['Twitter', 'GitHub', 'LinkedIn'].map(social => (
            <a key={social} href={
              social === 'Twitter' ? 'https://x.com/AliQas_7' :
              social === 'GitHub' ? 'https://github.com/AliQas-7' :
              'https://www.linkedin.com/in/ali-qais-410969210/'
            } target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-white/40 hover:text-neon-blue transition-colors uppercase tracking-widest">
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
