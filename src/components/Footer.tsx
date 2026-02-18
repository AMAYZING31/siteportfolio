import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full py-12 px-4 border-t border-surface shadow-2xl bg-background mt-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                
                {/* Brand */}
                <div className="flex flex-col items-center md:items-start gap-2">
                    <div className="flex items-center gap-2">
                        <Code2 className="text-primary w-8 h-8" />
                        <span className="font-display font-bold text-2xl tracking-tighter">
                            Sidney Richards
                        </span>
                    </div>
                    <p className="text-foreground/50 text-sm">
                        Développeur Full-Stack Junior | BUT Informatique
                    </p>
                     <p className="text-foreground/30 text-xs mt-2">
                        © {currentYear} Tous droits réservés.
                    </p>
                </div>

                {/* Socials */}
                <div className="flex items-center gap-6">
                    <motion.a 
                        href="https://github.com" 
                        target="_blank" 
                        rel="noreferrer"
                        whileHover={{ y: -3 }}
                        className="text-foreground/60 hover:text-primary transition-colors"
                    >
                        <Github size={24} />
                    </motion.a>
                    <motion.a 
                        href="https://linkedin.com" 
                        target="_blank" 
                        rel="noreferrer"
                        whileHover={{ y: -3 }}
                        className="text-foreground/60 hover:text-primary transition-colors"
                    >
                        <Linkedin size={24} />
                    </motion.a>
                    <motion.a 
                        href="mailto:sidneyrichards31@gmail.com"
                        whileHover={{ y: -3 }}
                        className="text-foreground/60 hover:text-primary transition-colors"
                    >
                        <Mail size={24} />
                    </motion.a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
