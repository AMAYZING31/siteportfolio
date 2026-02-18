import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <div className="relative w-full overflow-hidden">
            
            {/* Background Elements */}
            <div className="fixed inset-0 pointer-events-none">
                <motion.div style={{ y: y1 }} className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-50" />
                <motion.div style={{ y: y2 }} className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] opacity-40" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 pt-32 pb-20 md:pt-48 md:pb-32">
                
                {/* Intro Line */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-4 mb-8"
                >
                    <div className="w-12 h-[1px] bg-primary" />
                    <span className="font-mono text-primary tracking-widest uppercase text-sm">
                        Sidney Richards — Toulouse
                    </span>
                </motion.div>

                {/* Main Headline */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="mb-12"
                >
                    <h1 className="font-display font-bold text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter text-foreground">
                        DÉVELOPPEUR <br />
                        <span className="text-stroke-primary text-transparent relative group cursor-default">
                            FULL-STACK
                            <motion.span 
                                className="absolute inset-0 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                aria-hidden="true"
                            >
                                FULL-STACK
                            </motion.span>
                        </span>
                        <br />JUNIOR
                    </h1>
                </motion.div>

                {/* Description */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-2xl text-xl text-foreground/70 leading-relaxed mb-12"
                >
                   Je conçois et développe des applications web performantes et utiles.
                   Actuellement en BUT Informatique, je recherche un stage ou une alternance en développement logiciel pour mettre à profit ma rigueur et ma passion pour l'innovation.
                </motion.div>

                {/* CTA Buttons */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex flex-wrap gap-6 items-center"
                >
                    <Link to="/projects" className="group relative px-8 py-4 bg-primary text-background rounded-full font-bold text-lg overflow-hidden flex items-center gap-2">
                        <span className="relative z-10 transition-colors group-hover:text-white">Voir mes projets</span>
                        <ArrowRight className="relative z-10 transition-colors group-hover:text-white group-hover:translate-x-1 duration-300" />
                        <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </Link>

                    <Link to="/cv" className="px-8 py-4 glass border border-white/10 rounded-full font-bold text-lg text-foreground hover:bg-white/10 transition-all flex items-center gap-2">
                        <span>Mon CV</span>
                        <ArrowDownRight size={20} />
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
