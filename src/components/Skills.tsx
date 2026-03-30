import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Cpu, Code2, Wrench, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

const skillCategories = [
  {
    title: 'Automation & AI',
    icon: Cpu,
    color: 'text-neon-blue',
    skills: [
      { name: 'n8n', level: 95 },
      { name: 'OpenAI API', level: 90 },
      { name: 'LangChain', level: 85 },
      { name: 'Zapier / Make', level: 92 },
      { name: 'RAG Systems', level: 80 },
    ]
  },
  {
    title: 'Test Automation',
    icon: CheckCircle2,
    color: 'text-neon-green',
    skills: [
      { name: 'Selenium', level: 95 },
      { name: 'Playwright', level: 90 },
      { name: 'Automation Frameworks', level: 85 },
      { name: 'workflow Automation', level: 80 },
      { name: 'JMeter', level: 75 },
    ]
  },
  {
    title: 'Programming',
    icon: Code2,
    color: 'text-neon-purple',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 95 },
      { name: 'TypeScript', level: 88 },
      { name: 'Java', level: 75 },
      { name: 'SQL', level: 82 },
    ]
  },
  {
    title: 'Tools & DevOps',
    icon: Wrench,
    color: 'text-neon-cyan',
    skills: [
      { name: 'Git / GitHub', level: 95 },
      { name: 'VS Code/AI Agent', level: 90 },
      { name: 'Postman', level: 92 },
      { name: 'Cursor', level: 90 },
      { name: 'ChatGPT/Claude/Gemini', level: 100 },
    ]
  }
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-16"
        >
          <div className="flex items-center gap-2 text-neon-purple font-mono text-sm uppercase tracking-[0.3em] mb-4">
            <Terminal className="w-4 h-4" />
            Skill Modules
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center">System Capabilities</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-6 rounded-3xl border border-white/5 hover:border-neon-blue/30 transition-all group"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className={cn("w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center", category.color)}>
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold tracking-tight">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-xs font-mono uppercase tracking-tighter">
                      <span className="text-white/70">{skill.name}</span>
                      <span className={category.color}>{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className={cn("h-full rounded-full shadow-[0_0_8px_currentColor]", category.color.replace('text-', 'bg-'))}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
