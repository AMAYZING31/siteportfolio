import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Database, Terminal, Layout } from 'lucide-react';

// Import SVG icons
import JavaIcon from '../assets/skills/java.png';
import PythonIcon from '../assets/skills/Python.svg';
import TypeScriptIcon from '../assets/skills/TypeScript.svg';
import JavaScriptIcon from '../assets/skills/JavaScript.svg';
import CIcon from '../assets/skills/C.svg';
import PHPIcon from '../assets/skills/PHP.svg';
import SymfonyIcon from '../assets/skills/symfony.png';
import AngularIcon from '../assets/skills/angular.png';
import ReactIcon from '../assets/skills/React.svg';
import NodejsIcon from '../assets/skills/Nodejs.svg';
import MySQLIcon from '../assets/skills/MySQL.svg';
import MongoDBIcon from '../assets/skills/MongoDB.svg';
import OracleIcon from '../assets/skills/oracle.png';
import GitIcon from '../assets/skills/Git.svg';
import DockerIcon from '../assets/skills/Docker.svg';
import LinuxIcon from '../assets/skills/Linux.svg';
// import ChartjsIcon from '../assets/skills/Chartjs.svg'; // Skipping as unsure of case
import HTMLIcon from '../assets/skills/HTML.svg';
import CSSIcon from '../assets/skills/CSS.png';
import BashIcon from '../assets/skills/Bash.svg';
import SpringIcon from '../assets/skills/spring.png';
import GodotIcon from '../assets/skills/godot.png';

interface Skill {
  name: string;
  icon?: string;
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
        { name: 'Java', icon: JavaIcon },
        { name: 'Python', icon: PythonIcon },
        { name: 'TypeScript', icon: TypeScriptIcon },
        { name: 'JavaScript', icon: JavaScriptIcon },
        { name: 'C', icon: CIcon },
        { name: 'PHP', icon: PHPIcon },
        { name: 'HTML', icon: HTMLIcon },
        { name: 'CSS', icon: CSSIcon },
        { name: 'Bash', icon: BashIcon },
    ]
  },
  {
    title: 'Web Frameworks',
    icon: <Globe className="w-6 h-6" />,
    skills: [
        { name: 'Symfony & API Platform', icon: SymfonyIcon },
        { name: 'Angular', icon: AngularIcon },
        { name: 'React', icon: ReactIcon },
        { name: 'Spring Boot', icon: SpringIcon },
        { name: 'Node.js', icon: NodejsIcon },
    ]
  },
   {
    title: 'Bases de Données',
    icon: <Database className="w-6 h-6" />,
    skills: [
        { name: 'MariaDB', icon: MySQLIcon }, 
        { name: 'MySQL', icon: MySQLIcon },
        { name: 'MongoDB', icon: MongoDBIcon },
        { name: 'PostgreSQL' },
        { name: 'Oracle', icon: OracleIcon },
    ]
  },
  {
    title: 'Outils & DevOps',
    icon: <Terminal className="w-6 h-6" />,
    skills: [
        { name: 'Git & GitLab CI', icon: GitIcon },
        { name: 'Docker', icon: DockerIcon },
        { name: 'Linux', icon: LinuxIcon },
        { name: 'Godot (3D/VR)', icon: GodotIcon },
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

const Technologies: React.FC = () => {
    return (
        <div className="w-full relative px-4 md:px-8 py-20 bg-background/50">
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-secondary tracking-widest uppercase font-bold text-sm mb-4">Stack Technique</h2>
                    <h3 className="font-display font-bold text-5xl md:text-7xl text-foreground mb-6">
                        Technologies <span className="text-stroke-primary">& Outils</span>
                    </h3>
                    <p className="max-w-2xl mx-auto text-foreground/60 text-lg">
                        L'ensemble des technologies que je maîtrise et utilise pour concevoir des solutions numériques.
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
                            className="bg-surface/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                                    {category.icon}
                                </div>
                                <h4 className="text-xl font-bold text-foreground">{category.title}</h4>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skIndex) => (
                                    <div 
                                        key={skIndex}
                                        className="flex items-center gap-2 px-3 py-2 bg-background/50 rounded-lg border border-white/5 text-sm text-foreground/80 hover:text-primary hover:border-primary/20 transition-colors"
                                    >
                                        {skill.icon && <img src={skill.icon} alt={skill.name} className="w-5 h-5 object-contain" />}
                                        <span className={skill.icon ? "" : "ml-1"}>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Technologies;
