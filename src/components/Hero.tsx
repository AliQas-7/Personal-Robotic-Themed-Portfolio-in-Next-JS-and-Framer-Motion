import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Play, Bot, Zap, ShieldCheck } from 'lucide-react';

import { useEffect, useState } from "react";

const useTypewriter = (texts: string[], speed = 40, delay = 2000) => {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    let currentText = texts[textIndex];
    let charIndex = 0;

    const type = () => {
      if (charIndex <= currentText.length) {
        setDisplayedText(currentText.slice(0, charIndex));
        charIndex++;

        // 🔊 typing sound
        const audio = new Audio("/sounds/type.mp3"); // add this file
        audio.volume = 0.1;
        audio.play().catch(() => {});

        setTimeout(type, speed);
      } else {
        setTimeout(() => {
          setTextIndex((prev) => (prev + 1) % texts.length);
        }, delay);
      }
    };

    type();
  }, [textIndex]);

  return displayedText;
};

export const Hero: React.FC = () => {
  const texts = [
  "Building Intelligent Workflows...",
  "Designing AI-Powered Automation Systems...",
  "Orchestrating Smart Data Pipelines...",
  "Automating the Future with AI Agents..."
];

const typedText = useTypewriter(texts);
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center"> */}
     <div className="w-full max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20 grid lg:grid-cols-2 gap-12 xl:gap-20 2xl:gap-28 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-xs font-bold tracking-widest uppercase mb-6 relative">
            <div className="relative w-4 h-4">
              {/* Pulsing core */}
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-neon-blue"></span>
              {/* Rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-dashed border-neon-cyan/50 rounded-full"
              />
              {/* Orbiting dots */}
              {[0, 120, 240].map((angle, i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6 + i, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <div 
                    className="absolute w-1 h-1 bg-neon-cyan rounded-full shadow-[0_0_6px_#00ffff]" 
                    style={{ 
                      top: '50%', 
                      left: '100%', 
                      transform: 'translate(-50%, -50%)' 
                    }} 
                  />
                </motion.div>
              ))}
            </div>
            System Online: AI Automation Core
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 relative">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              AI <span className="text-neon-blue relative">
                Automation
                {/* Scanning line */}
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-blue/30 to-transparent"
                />
              </span> <br />
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              Engineer
            </motion.span>
            {/* Holographic overlay */}
            <motion.div
              animate={{ opacity: [0.05, 0.15, 0.05] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 via-transparent to-neon-purple/5 rounded-lg"
            />
          </h1>

          <div className="text-lg md:text-xl text-white/60 max-w-xl md:max-w-2xl xl:max-w-3xl md:max-w-2xl xl:max-w-3xl mb-8 leading-relaxed font-mono relative">

  {/* Terminal header */}
  <div className="text-xs text-neon-blue uppercase tracking-widest mb-2">
    AI Output Console
  </div>

  {/* Typing text */}
  <div className="text-white">
    {typedText}
    <motion.span
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 1, repeat: Infinity }}
      className="ml-1"
    >
      |
    </motion.span>
  </div>

  {/* subtle glow */}
  <motion.div
    animate={{ opacity: [0.1, 0.3, 0.1] }}
    transition={{ duration: 3, repeat: Infinity }}
    className="absolute inset-0 bg-neon-blue/5 blur-xl pointer-events-none"
  />
</div>

          <div className="flex flex-wrap gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="relative"
            >
              <motion.a
                href="https://github.com/AliQas-7"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-neon-blue text-dark-bg font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(0,242,255,0.4)] hover:shadow-[0_0_30px_rgba(0,242,255,0.6)] transition-all relative z-10"
              >
                View Projects <ChevronRight className="w-5 h-5" />
              </motion.a>
              {/* Orbiting elements */}
              {[0, 90, 180, 270].map((angle, i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <div 
                    className="absolute w-2 h-2 bg-neon-cyan rounded-full shadow-[0_0_8px_#00ffff]" 
                    style={{ 
                      top: '50%', 
                      left: '100%', 
                      transform: 'translate(-50%, -50%)' 
                    }} 
                  />
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 2 }}
              className="relative"
            >
              <motion.button
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md font-bold flex items-center gap-2 hover:bg-white/10 transition-all relative z-10"
              >
                Contact Me <Play className="w-4 h-4 fill-current" />
              </motion.button>
              {/* Pulsing ring */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 border-2 border-dashed border-neon-purple/40 rounded-xl"
              />
            </motion.div>
          </div>

          <div className="mt-12 flex items-center gap-8 text-white/40">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.5 }}
              className="flex items-center gap-2 relative"
            >
              <div className="relative">
                <Bot className="w-5 h-5 text-neon-blue" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border border-dashed border-neon-blue/30 rounded-full"
                />
              </div>
              <span className="text-sm font-mono uppercase tracking-tighter">AI Agents</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 3 }}
              className="flex items-center gap-2 relative"
            >
              <div className="relative">
                <Zap className="w-5 h-5 text-neon-purple" />
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    boxShadow: [
                      "0 0 0 rgba(188, 19, 254, 0.2)",
                      "0 0 10px rgba(188, 19, 254, 0.5)",
                      "0 0 0 rgba(188, 19, 254, 0.2)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 rounded-full"
                />
              </div>
              <span className="text-sm font-mono uppercase tracking-tighter">Workflows</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 3.5 }}
              className="flex items-center gap-2 relative"
            >
              <div className="relative">
                <ShieldCheck className="w-5 h-5 text-neon-green" />
                <motion.div
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute inset-0 bg-neon-green/20 rounded-full blur-sm"
                />
              </div>
              <span className="text-sm font-mono uppercase tracking-tighter">QA Automation</span>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center items-center"
        >
          {/* Animated AI Core Visualization */}
         <div className="relative w-72 h-72 md:w-96 md:h-96 xl:w-[420px] xl:h-[420px] 2xl:w-[500px] 2xl:h-[500px]">
            {/* Outer Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-dashed border-neon-blue/20 rounded-full"
            />
            {/* Middle Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 border border-neon-purple/30 rounded-full flex items-center justify-center"
            >
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-neon-purple rounded-full shadow-[0_0_15px_#bc13fe]" />
            </motion.div>
            {/* Inner Core */}
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 0 20px rgba(0, 242, 255, 0.3)",
                  "0 0 50px rgba(0, 242, 255, 0.6)",
                  "0 0 20px rgba(0, 242, 255, 0.3)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-20 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full flex items-center justify-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
              <Bot className="w-16 h-16 text-white drop-shadow-lg" />
            </motion.div>

            {/* Orbiting Nodes */}
            {[0, 72, 144, 216, 288].map((angle, i) => (
              <motion.div
                key={i}
                animate={{ rotate: 360 }}
                transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div 
                  className="absolute w-3 h-3 bg-neon-cyan rounded-full shadow-[0_0_10px_#00ffff]" 
                  style={{ 
                    top: '50%', 
                    left: '100%', 
                    transform: 'translate(-50%, -50%)' 
                  }} 
                />
              </motion.div>
            ))}
          </div>

          {/* Floating Data Panels */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -top-10 -right-10 glass p-4 rounded-xl border-neon-blue/30 hidden md:block"
          >
            <div className="text-[10px] font-mono text-neon-blue mb-2 uppercase tracking-widest">System Status</div>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map(i => (
                <motion.div 
                  key={i}
                  animate={{ height: [10, 20, 10] }}
                  transition={{ duration: 0.5, delay: i * 0.1, repeat: Infinity }}
                  className="w-1 bg-neon-blue rounded-full"
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-10 -left-10 glass p-4 rounded-xl border-neon-purple/30 hidden md:block"
          >
            <div className="text-[10px] font-mono text-neon-purple mb-1 uppercase tracking-widest">Neural Link</div>
            <div className="text-xs font-bold">ACTIVE_SYNC: 98%</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
