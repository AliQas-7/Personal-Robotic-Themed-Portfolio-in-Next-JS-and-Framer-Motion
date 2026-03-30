import React from 'react';
import { motion } from 'motion/react';
import { User, Activity, Globe, Code } from 'lucide-react';
import { cn } from '../lib/utils';

const stats = [
  { label: 'Automation Efficiency', value: '80%', icon: Activity, color: 'text-neon-blue' },
  { label: 'APIs Integrated', value: '50+', icon: Globe, color: 'text-neon-purple' },
  { label: 'Workflows Built', value: '20+', icon: Code, color: 'text-neon-green' },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-16"
        >
          <div className="flex items-center gap-2 text-neon-blue font-mono text-sm uppercase tracking-[0.3em] mb-4">
            <User className="w-4 h-4" />
            System Profile
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center">About Ali Qais</h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass p-8 md:p-12 rounded-3xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-90 md:opacity-10 group-hover:opacity-90 transition-opacity">
              <div className="relative w-32 h-32">
                {/* Outer rotating ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border border-dashed border-neon-blue/40 rounded-full"
                />
                {/* Middle rotating ring */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-2 border border-neon-purple/30 rounded-full flex items-center justify-center"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-neon-purple rounded-full shadow-[0_0_10px_#bc13fe]" />
                </motion.div>
                {/* Inner core with image */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.08, 1],
                    boxShadow: [
                      "0 0 20px rgba(0, 242, 255, 0.3)",
                      "0 0 40px rgba(0, 242, 255, 0.8)",
                      "0 0 20px rgba(0, 242, 255, 0.3)"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-4 rounded-full overflow-hidden border-2 border-neon-cyan/20"
                >
                  <img src="resources/profile.png" alt="Ali Qais" className="w-full h-full object-cover" />
                  {/* Scanning line */}
                  <motion.div
                    animate={{ y: [-32, 32, -32] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-blue/30 to-transparent"
                  />
                </motion.div>
                {/* Orbiting data nodes */}
                {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                  <motion.div
                    key={i}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8 + i * 0.5, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                  >
                    <div 
                      className="absolute w-1.5 h-1.5 bg-neon-cyan rounded-full shadow-[0_0_8px_#00ffff]" 
                      style={{ 
                        top: '50%', 
                        left: '100%', 
                        transform: 'translate(-50%, -50%)' 
                      }} 
                    />
                  </motion.div>
                ))}
                {/* Holographic overlay */}
                <motion.div
                  animate={{ opacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-4 rounded-full bg-gradient-to-br from-neon-blue/10 via-transparent to-neon-purple/10"
                />
              </div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded bg-neon-blue/20 flex items-center justify-center text-neon-blue text-sm">01</span>
                Professional Overview
              </h3>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                I am an <span className="text-white font-semibold">AI Automation & Test Automation Engineer</span> based in Lahore, Pakistan. 
                My mission is to bridge the gap between complex manual processes and intelligent, autonomous systems. 
                I specialize in crafting high-impact automation solutions that leverage the latest in AI and robotics-inspired workflows.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="text-neon-blue font-bold mb-2">AI Integrations</h4>
                  <p className="text-xs text-white/50">OpenAI, LangChain, RAG Systems</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="text-neon-purple font-bold mb-2">Workflow Automation</h4>
                  <p className="text-xs text-white/50">n8n, Zapier, Make.com</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="text-neon-green font-bold mb-2">End-to-End Testing</h4>
                  <p className="text-xs text-white/50">Selenium, Playwright, Cypress</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-3xl border-l-4 border-l-neon-blue flex items-center gap-6 group hover:bg-white/5 transition-all"
              >
                <div className={cn("w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform", stat.color)}>
                  <stat.icon className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-3xl font-bold font-display tracking-tighter">{stat.value}</div>
                  <div className="text-xs text-white/40 uppercase tracking-widest">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
