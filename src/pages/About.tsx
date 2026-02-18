import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="w-full relative px-4 md:px-8 py-20">
       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
          >
             <h2 className="text-secondary text-lg font-medium tracking-widest uppercase mb-4">À Propos</h2>
             <h3 className="font-display font-bold text-5xl md:text-7xl leading-none mb-8 text-foreground">
                ÉTUDIANT <br />
                <span className="text-stroke-primary">PASSIONNÉ</span>
             </h3>
             <div className="space-y-6 text-lg text-foreground/80 font-light leading-relaxed">
                <p>
                   Je suis Sidney Richards, étudiant en BUT Informatique à l'IUT de Blagnac. 
                   Spécialisé en développement logiciel et web, je m'intéresse particulièrement à la 
                   <span className="text-primary font-medium"> performance applicative</span>, à l'analyse de données et aux outils modernes.
                </p>
                <p>
                   Au cours de ma formation, j'ai développé une grande rigueur technique et un fort esprit d'équipe. 
                   Autonome et curieux, j'aime relever des défis complexes et apprendre de nouvelles technologies pour 
                   concevoir des solutions robustes et évolutives.
                </p>
                <p>
                   Aujourd'hui, je suis prêt à mettre mes compétences au service d'une entreprise innovante 
                   dans le cadre d'un stage ou d'une alternance.
                </p>
             </div>
          </motion.div>

          {/* Abstract Visual / Image */}
          <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="relative"
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-3xl blur-2xl opacity-40 animate-pulse" />
             <div className="relative glass rounded-3xl p-8 border border-white/10 aspect-square flex items-center justify-center overflow-hidden group">
                {/* Placeholder image for profile or abstract tech visual */}
                <div className="absolute inset-0 bg-black/60 z-10 group-hover:bg-black/40 transition-colors duration-500" />
                <img 
                    src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Coding Environment"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                />
                
                <div className="relative z-20 glass-light p-6 rounded-2xl text-background font-bold text-2xl text-center rotate-[-5deg] group-hover:rotate-0 transition-transform duration-500 shadow-xl">
                   Base à <br /> Toulouse, FR
                </div>
             </div>
          </motion.div>
       </div>
    </div>
  );
};

export default About;
