import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  date: string;
  description: string[];
  tech?: string[];
  highlight?: boolean;
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    title: 'Stage - Développement & Data Analysis',
    company: 'SoundHound AI',
    location: 'Paris / Remote',
    date: '2 mois',
    highlight: true,
    description: [
      'Analyse de grands volumes de logs issus de l\'API Houndify.',
      'Développement d\'un outil Python complet pour l\'extraction et l\'analyse de données.',
      'Génération de rapports interactifs avec graphiques (Chart.js) et cartes géographiques (Folium).',
      'Mise en place de systèmes de cache pour optimiser les performances de traitement.',
      'Collaboration directe avec des clients du secteur automobile.'
    ],
    tech: ['Python', 'Data Analysis', 'Chart.js', 'Folium', 'Caching', 'API REST']
  }
];

const Experience: React.FC = () => {
    return (
        <div className="w-full min-h-screen relative px-4 md:px-8 py-20">
            <div className="max-w-4xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-secondary tracking-widest uppercase font-bold text-sm mb-4">Parcours</h2>
                    <h3 className="font-display font-bold text-5xl md:text-7xl text-foreground">
                        Expérience <span className="text-stroke-primary">Pro</span>
                    </h3>
                </motion.div>

                <div className="relative border-l-2 border-white/10 ml-4 md:ml-10 space-y-16">
                    {experiences.map((exp, index) => (
                        <motion.div 
                            key={exp.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative pl-8 md:pl-16"
                        >
                            {/* Dot on timeline */}
                            <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 ${exp.highlight ? 'bg-primary border-primary shadow-[0_0_20px_rgba(255,109,56,0.5)]' : 'bg-background border-white/20'}`} />
                            
                            <div className={`glass p-8 rounded-3xl ${exp.highlight ? 'border-primary/30 bg-primary/5' : 'border-white/5'}`}>
                                <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
                                    <div>
                                        <h4 className="font-display font-bold text-2xl text-foreground mb-2">{exp.title}</h4>
                                        <div className="flex items-center gap-2 text-primary font-medium text-lg">
                                            <Briefcase size={18} />
                                            <span>{exp.company}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2 text-sm text-foreground/50 font-mono">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={14} />
                                            <span>{exp.date}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin size={14} />
                                            <span>{exp.location}</span>
                                        </div>
                                    </div>
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {exp.description.map((desc, i) => (
                                        <li key={i} className="flex items-start gap-3 text-foreground/80 leading-relaxed">
                                            <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 shrink-0" />
                                            <span>{desc}</span>
                                        </li>
                                    ))}
                                </ul>

                                {exp.tech && (
                                    <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                                        {exp.tech.map((t, i) => (
                                            <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-foreground/60 border border-white/5">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
