import React from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Globe, Send, Terminal } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-16"
        >
          <div className="flex items-center gap-2 text-neon-blue font-mono text-sm uppercase tracking-[0.3em] mb-4">
            <Globe className="w-4 h-4" />
            Communication Terminal
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center">Establish Connection</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-3xl border border-white/5"
          >
            <div className="flex items-center gap-3 mb-8 text-neon-blue">
              <Terminal className="w-5 h-5" />
              <span className="font-mono text-sm uppercase tracking-widest">System_Input.exe</span>
            </div>

            <form action="mailto:qashdev7@gmail.com" method="post" enctype="text/plain" className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-mono text-white/40 uppercase tracking-widest ml-1">Identifier (Name)</label>
                <input 
                  type="text" 
                  name="name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-blue/50 focus:ring-1 focus:ring-neon-blue/20 transition-all"
                  placeholder="Enter your name..."
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-white/40 uppercase tracking-widest ml-1">Return Path (Email)</label>
                <input 
                  type="email" 
                  name="email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-blue/50 focus:ring-1 focus:ring-neon-blue/20 transition-all"
                  placeholder="Enter your email..."
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-white/40 uppercase tracking-widest ml-1">Payload (Message)</label>
                <textarea 
                  rows={4}
                  name="message"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-blue/50 focus:ring-1 focus:ring-neon-blue/20 transition-all resize-none"
                  placeholder="Transmission details..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl bg-neon-blue text-dark-bg font-bold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,242,255,0.3)] hover:shadow-[0_0_30px_rgba(0,242,255,0.5)] transition-all"
              >
                Send Message <Send className="w-4 h-4" />
              </motion.button>
            </form>

            <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
              <div className="text-[10px] font-mono text-neon-green uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                Connection Established
              </div>
              <div className="text-[10px] font-mono text-white/20 uppercase tracking-widest">v2.0.4-stable</div>
            </div>
          </motion.div>

          <div className="flex flex-col justify-center gap-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-3xl font-bold">Let's build the future <span className="text-neon-blue">together</span>.</h3>
              <p className="text-white/60 leading-relaxed">
                Whether you have a question about AI automation, need a custom workflow built, 
                or just want to say hi, my terminal is always open.
              </p>
            </motion.div>

            <div className="grid gap-4">
              <a href="mailto:qashdev7@gmail.com" className="glass p-6 rounded-2xl flex items-center gap-4 hover:border-neon-blue/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-neon-blue group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-white/40 uppercase tracking-widest">Email</div>
                  <div className="font-bold">qashdev7@gmail.com</div>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/ali-qais-410969210/" target="_blank" rel="noopener noreferrer" className="glass p-6 rounded-2xl flex items-center gap-4 hover:border-neon-purple/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-neon-purple group-hover:scale-110 transition-transform">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-white/40 uppercase tracking-widest">LinkedIn</div>
                  <div className="font-bold">Ali Qais</div>
                </div>
              </a>
              <a href="https://www.google.com/maps?q=Lahore,Pakistan" target="_blank" rel="noopener noreferrer" className="glass p-6 rounded-2xl flex items-center gap-4 hover:border-neon-cyan/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-neon-cyan group-hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-white/40 uppercase tracking-widest">Location</div>
                  <div className="font-bold">Lahore, Pakistan</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
