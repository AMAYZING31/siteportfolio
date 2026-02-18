import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Database, PenTool, Terminal, Layout } from 'lucide-react';

interface Skill {
   name: string;
   level?: number; 
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    title: 'Langages',
    icon: <Code2 className="w-6 h-6" />,
    skills: [
        { name: 'Java' },
        { name: 'Python' },
        { name: 'TypeScript' },
        { name: 'JavaScript' },
        { name: 'C' },
        { name: 'PHP' },
    ]
  },
  {
    title: 'Web Frameworks',
    icon: <Globe className="w-6 h-6" />,
    skills: [
        { name: 'Symfony & API Platform' },
        { name: 'Angular' },
        { name: 'React' },
        { name: 'Spring Boot' },
        { name: 'Node.js' },
    ]
  },
   {
    title: 'Bases de Données',
    icon: <Database className="w-6 h-6" />,
    skills: [
        { name: 'MariaDB' },
        { name: 'MySQL' },
        { name: 'MongoDB' },
        { name: 'PostgreSQL' },
        { name: 'Oracle' },
    ]
  },
  {
    title: 'Outils & DevOps',
    icon: <Terminal className="w-6 h-6" />,
    skills: [
        { name: 'Git & GitLab CI' },
        { name: 'Docker' },
        { name: 'Linux' },
        { name: 'Godot (3D/VR)' },
        { name: 'Chart.js' },
        { name: 'APIs REST' },
    ]
  },
  {
    title: 'Soft Skills',
    icon: <Layout className="w-6 h-6" />,
    skills: [
        { name: 'Travail en équipe' },
        { name: 'Communication' },
        { name: 'Gestion de projet' },
        { name: 'Organisation' },
        { name: 'Rigueur' },
    ]
  }
];

const Skills: React.FC = () => {
    return (
        <div className="w-full relative px-4 md:px-8 py-20">
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-secondary tracking-widest uppercase font-bold text-sm mb-4">Expertise</h2>
                    <h3 className="font-display font-bold text-5xl md:text-7xl text-foreground mb-6">
                        Compétences <span className="text-stroke-primary">Techniques</span>
                    </h3>
                    <p className="max-w-2xl mx-auto text-foreground/60 text-lg">
                        Un ensemble d'outils et de technologies acquis au cours de ma formation et de mes expériences professionnelles.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-colors group"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-surface rounded-xl text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                                    {category.icon}
                                </div>
                                <h4 className="font-display font-bold text-xl">{category.title}</h4>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, idx) => (
                                    <span 
                                        key={idx} 
                                        className="px-4 py-2 bg-surface text-sm font-medium rounded-full border border-white/5 text-foreground/80 hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
                                    >
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
