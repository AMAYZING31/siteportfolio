import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  repo?: string;
  image?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Site Association DREAMS',
    description: 'Développement d\'une plateforme web complète pour une association humanitaire. Le site comprend une partie publique pour la présentation des actions et une interface d\'administration privée (Back-office) pour la gestion des membres et des ressources. Travail collaboratif en équipe agile.',
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
    image: '/dreams.png'
  },
  {
    id: 2,
    title: 'Plateforme E-Commerce & IoT',
    description: 'Conception d\'un site de vente en ligne sécurisé avec gestion de base de données relationnelle. Le projet intègre une dimension IoT avec des capteurs connectés remontant des données en temps réel sur l\'interface web.',
    tags: ['PHP', 'MySQL', 'Python', 'Java', 'IoT'],
    image: '/simulate.png'
  },
  {
    id: 3,
    title: 'Clone Bomberman 3D (Godot)',
    description: 'Développement d\'un jeu multijoueur en 3D inspiré de Bomberman, intégrant un mode Réalité Virtuelle (Quest 3). Gestion de la physique, IA des ennemis, et implémentation de mécaniques de gameplay complexes en équipe agile.',
    tags: ['Godot Engine', 'GDScript', '3D', 'VR/Mixed Reality', 'Agile'],
    image: '/godot.png'
  },
  {
    id: 4,
    title: 'Fitness IUT (Spring Boot)',
    description: 'Application de gestion de routines sportives avec architecture MVC et API REST. Validation des données, sécurité, et persistance via MariaDB. Documentation complète de l\'API.',
    tags: ['Java 21', 'Spring Boot 3', 'MariaDB', 'Thymeleaf', 'REST API'],
    image: '/spring.png'
  },
  {
    id: 5,
    title: 'Automatisation CI/CD & DevOps',
    description: 'Mise en place d\'un pipeline complet d\'intégration et déploiement continu sur GitLab. Conteneurisation Docker, tests automatisés, et génération de documentation. Déploiement multi-environnement (Dev/Prod).',
    tags: ['GitLab CI', 'Docker', 'Maven', 'Python', 'DevOps'],
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=1000'
  },
   {
    id: 6,
    title: 'Portfolio Personnel (Ce site)',
    description: 'Conception d\'un portfolio interactif et performant. Utilisation de React et Framer Motion pour les animations, et Tailwind CSS pour un design responsive et moderne adaptable (Light/Dark mode).',
    tags: ['React', 'Vite', 'TypeScript', 'Tailwind', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 7,
    title: 'Bibliothèque (Angular & Symfony)',
    description: 'Développement d\'une application complète de gestion de bibliothèque avec une architecture découplée. Back-office et API REST sous Symfony (EasyAdmin), et Front-office "One Page" en Angular. Authentification JWT et gestion des rôles.',
    tags: ['Angular', 'Symfony', 'API REST', 'TypeScript', 'PHP'],
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 8,
    title: 'Plateforme Scolarité (Symfony)',
    description: 'Réalisation du site web "Scolarité" pour une Université. Gestion des étudiants, diplômes et promotions avec relations complexes. Sécurisation avancée (ACL, Votes) et validation des données. Utilisation de Fixtures pour les jeux de tests.',
    tags: ['Symfony', 'Twig', 'Doctrine', 'Bootstrap', 'Fixtures'],
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 9,
    title: 'Tower Defense (Python)',
    description: 'Création d\'un jeu de stratégie de type Tower Defense en Terminale (Spéciailté NSI). Utilisation de la bibliothèque Pygame pour le moteur graphique et la boucle de jeu. Gestion de la logique des vagues, des tours et des ennemis.',
    tags: ['Python', 'Pygame', 'Algorithmique', 'Game Dev'],
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 10,
    title: 'Application Bancaire Java',
    description: 'Développement d’une application bancaire en Java avec interface graphique (IHM). Le projet a nécessité la rédaction complète d\'un cahier des charges et une organisation rigoureuse du travail d\'équipe.',
    tags: ['Java', 'IHM', 'Swing', 'Gestion de projet'],
    image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&q=80&w=1000'
  }
];

const Projects: React.FC = () => {
    return (
        <div className="w-full relative px-4 md:px-8 py-20">
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-secondary tracking-widest uppercase font-bold text-sm mb-4">Réalisations</h2>
                    <h3 className="font-display font-bold text-5xl md:text-7xl text-foreground">
                        Projets <span className="text-stroke-primary">Académiques</span>
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative rounded-3xl overflow-hidden aspect-video mb-6 border border-white/10">
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500 z-10" />
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    <button className="p-3 bg-white text-black rounded-full hover:bg-primary transition-colors">
                                        <ArrowUpRight size={20} />
                                    </button>
                                </div>
                            </div>
                            
                            <div className="space-y-4 px-2">
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-xs font-mono text-primary px-2 py-1 border border-primary/20 rounded-md bg-primary/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h4 className="font-display font-bold text-3xl group-hover:text-primary transition-colors">{project.title}</h4>
                                <p className="text-foreground/60 leading-relaxed text-lg lg:w-3/4">
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
