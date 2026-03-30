import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, Terminal, Briefcase, User, Mail, Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

const navItems = [
  { name: 'Home', href: '#home', icon: Cpu },
  { name: 'About', href: '#about', icon: User },
  { name: 'Skills', href: '#skills', icon: Terminal },
  { name: 'Projects', href: '#projects', icon: Briefcase },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-dark-bg/80 backdrop-blur-md border-b border-neon-blue/20' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 rounded-lg bg-neon-blue/10 border border-neon-blue/30 flex items-center justify-center">
            <Cpu className="w-6 h-6 text-neon-blue animate-pulse" />
          </div>
          <span className="text-xl font-display font-bold tracking-tighter">
            ALI<span className="text-neon-blue">.QAIS</span>
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-white/70 hover:text-neon-blue transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-blue transition-all group-hover:w-full shadow-[0_0_8px_#00f2ff]" />
            </motion.a>
          ))}
          <motion.button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 rounded-full bg-neon-blue text-dark-bg font-bold text-sm shadow-[0_0_15px_rgba(0,242,255,0.5)] hover:shadow-[0_0_25px_rgba(0,242,255,0.8)] transition-all"
          >
            HIRE ME
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-bg/95 backdrop-blur-xl border-b border-neon-blue/20 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 text-lg font-medium text-white/70 hover:text-neon-blue"
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </a>
              ))}
              <motion.button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setTimeout(() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 300);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 px-5 py-3 rounded-full bg-neon-blue text-dark-bg font-bold text-sm shadow-[0_0_15px_rgba(0,242,255,0.5)] hover:shadow-[0_0_25px_rgba(0,242,255,0.8)] transition-all w-full"
              >
                HIRE ME
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
