import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext'; // Assuming you have this context
import clsx from 'clsx';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const links = [
    { name: 'À propos', path: '/about' },
    { name: 'Compétences', path: '/skills' },
    { name: 'Exp.', path: '/experience' }, // Shortened for pill layout
    { name: 'Projets', path: '/projects' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'CV', path: '/cv' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // smooth ease
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[90vw]"
      >
        <div className="glass rounded-full px-2 py-2 flex items-center gap-1 shadow-2xl shadow-primary/10">
          
          {/* Logo / Home */}
          <Link 
            to="/" 
            className="p-3 bg-surface rounded-full text-foreground hover:bg-surface-hover transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <Code2 size={20} className="text-secondary" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1 mx-1">
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={clsx(
                    "relative px-4 py-2 rounded-full text-sm font-medium transition-colors z-10",
                    isActive ? "text-background" : "text-foreground/70 hover:text-foreground hover:bg-surface-hover"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-primary rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 text-foreground/70 hover:text-foreground hover:bg-surface-hover rounded-full transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-3 text-foreground/70 hover:text-foreground hover:bg-surface-hover rounded-full transition-colors ml-1"
          >
             {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20, x: '-50%' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-24 left-1/2 z-40 w-[90vw] max-w-sm glass rounded-2xl p-4 shadow-xl border border-white/10 origin-top bg-background/90 backdrop-blur-xl"
            style={{ x: '-50%' }}
          >
             <div className="flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={clsx(
                    "px-4 py-3 rounded-xl text-base font-medium transition-colors text-center",
                    location.pathname === link.path
                      ? "bg-primary text-background"
                      : "text-foreground hover:bg-surface-hover hover:text-primary"
                  )}
                >
                  {link.name}
                </Link>
              ))}
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
