import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Linkedin, Globe, Send, Terminal, CheckCircle, X } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // ✅ ENV VARIABLES
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

  // Initialize EmailJS (only once)
  React.useEffect(() => {
    if (PUBLIC_KEY) {
      emailjs.init(PUBLIC_KEY);
    }
  }, [PUBLIC_KEY]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formRef.current) return;

    setIsLoading(true);
    setErrorMessage(null);

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current
      );

      setShowSuccess(true);
      formRef.current.reset();

      // Auto-close popup after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setErrorMessage('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

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

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-mono text-white/40 uppercase tracking-widest ml-1">Identifier (Name)</label>
                <input 
                  type="text" 
                  name="user_name"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-blue/50 focus:ring-1 focus:ring-neon-blue/20 transition-all"
                  placeholder="Enter your name..."
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-white/40 uppercase tracking-widest ml-1">Return Path (Email)</label>
                <input 
                  type="email" 
                  name="user_email"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-blue/50 focus:ring-1 focus:ring-neon-blue/20 transition-all"
                  placeholder="Enter your email..."
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-white/40 uppercase tracking-widest ml-1">Payload (Message)</label>
                <textarea 
                  rows={4}
                  name="message"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-blue/50 focus:ring-1 focus:ring-neon-blue/20 transition-all resize-none"
                  placeholder="Transmission details..."
                />
              </div>
              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: isLoading ? 1 : 1.02 }}
                whileTap={{ scale: isLoading ? 1 : 0.98 }}
                className="w-full py-4 rounded-xl bg-neon-blue text-dark-bg font-bold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,242,255,0.3)] hover:shadow-[0_0_30px_rgba(0,242,255,0.5)] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Transmitting...' : 'Send Message'} <Send className="w-4 h-4" />
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

        {/* Success Popup */}
        <AnimatePresence>
          {showSuccess && (
            <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/50 pointer-events-auto"
                onClick={() => setShowSuccess(false)}
              />
              
              <motion.div
                initial={{ scale: 0.5, opacity: 0, y: -50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.5, opacity: 0, y: -50 }}
                transition={{ type: 'spring', damping: 15, stiffness: 300 }}
                className="relative glass p-8 md:p-12 rounded-3xl border border-neon-green/50 max-w-md mx-4 pointer-events-auto"
              >
                <button
                  onClick={() => setShowSuccess(false)}
                  className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex flex-col items-center text-center space-y-4">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 rounded-full bg-gradient-to-r from-neon-green to-neon-cyan flex items-center justify-center shadow-[0_0_30px_rgba(0,255,150,0.5)]"
                  >
                    <CheckCircle className="w-8 h-8 text-dark-bg" />
                  </motion.div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">Transmission Complete</h3>
                    <p className="text-white/60 font-mono text-sm">
                      [SUCCESS] Message received in system_inbox
                    </p>
                  </div>

                  <div className="w-full pt-4">
                    <div className="text-xs font-mono text-neon-green/70 space-y-1 text-left bg-white/5 p-3 rounded-lg mb-4">
                      <div>⬤ Connection: ESTABLISHED</div>
                      <div>⬤ Data Transfer: 100%</div>
                      <div>⬤ Status: CONFIRMED</div>
                    </div>
                  </div>

                  <motion.button
                    onClick={() => setShowSuccess(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 rounded-xl bg-neon-green text-dark-bg font-bold shadow-[0_0_20px_rgba(0,255,150,0.3)] hover:shadow-[0_0_30px_rgba(0,255,150,0.5)] transition-all"
                  >
                    Close Terminal
                  </motion.button>

                  <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest pt-2">
                    Closing in 5 seconds...
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Error message display */}
        {errorMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed top-8 right-8 glass p-4 rounded-xl border border-neon-red/50 max-w-sm"
          >
            <p className="text-neon-red text-sm font-mono">{errorMessage}</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};