import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp, Users, Database, Layout, Server, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CompetenceSection {
    title: string;
    icon: React.ReactNode;
    description: string;
    proofs: {
        label: string;
        detail: string;
        projectId?: number; // Link to project ID if applicable
    }[];
}

const competences: CompetenceSection[] = [
    {
        title: "C1 - Réaliser (Niveau 3)",
        icon: <Layout className="w-8 h-8 text-primary" />,
        description: "Adapter des applications sur un ensemble de supports (IoT, Web, Mobile, Réalité Virtuelle) en choisissant et unifiant les solutions techniques.",
        proofs: [
            { label: "Bibliothèque (Angular & Symfony)", detail: "Architecture complète n-tiers : Back-office + API REST (Simfony) et Front-office (Angular).", projectId: 7 },
            { label: "Clone Bomberman 3D (Godot)", detail: "Développement multi-support (PC & Casque VR Quest 3) avec contraintes de gameplay asymétrique.", projectId: 3 },
            { label: "Projet Scolarité (Symfony)", detail: "Développement d'une application de gestion universitaire respectant un schéma strict de navigation.", projectId: 8 }
        ]
    },
    {
        title: "C2 - Optimiser (Niveau 3)",
        icon: <TrendingUp className="w-8 h-8 text-primary" />,
        description: "Analyser et optimiser des applications pour répondre à des critères de performance ou d'efficacité numérique et énergétique.",
        proofs: [
            { label: "POC Bibliothèque", detail: "Réalisation d'un Proof of Concept minimaliste (Semaine 7) pour valider les choix techniques avant passage à l'échelle.", projectId: 7 },
            { label: "Stage SoundHound AI", detail: "Réduction des temps de latence API via l'implémentation de caches Redis et optimisation des requêtes Python.", projectId: 1 }
        ]
    },
    {
        title: "C3 - Administrer (Niveau 3)",
        icon: <Server className="w-8 h-8 text-primary" />,
        description: "Déployer, sécuriser et superviser des infrastructures informatiques et des services.",
        proofs: [
            { label: "Projet Scolarité (Sécurité)", detail: "Implémentation des rôles (USER/ADMIN) et sécurisation des routes (Create/Delete réservés aux admins).", projectId: 8 },
            { label: "Automatisation CI/CD", detail: "Mise en place d'un pipeline complet (Build, Test, Deploy) sur GitLab CI avec conteneurisation Docker.", projectId: 5 }
        ]
    },
    {
        title: "C4 - Gérer (Niveau 3)",
        icon: <Database className="w-8 h-8 text-primary" />,
        description: "Concevoir et gérer des bases de données complexes, distribuées ou hétérogènes.",
        proofs: [
            { label: "Projet Scolarité (Données)", detail: "Conception du schéma relationnel Étudiant/Diplôme/Promotion et génération de jeux de données (Fixtures).", projectId: 8 },
            { label: "API REST (Bibliothèque)", detail: "Exposition des données via une API REST (Symfony) consommée par une application tierce (Angular).", projectId: 7 }
        ]
    },
    {
        title: "C5 - Conduire (Niveau 3)",
        icon: <Users className="w-8 h-8 text-primary" />,
        description: "Conduire un projet informatique en appliquant une démarche de gestion de projet adaptée.",
        proofs: [
            { label: "Gestion de Projet (Bibliothèque)", detail: "Planification par jalons (Livraisons M-11, J-12, Recette V-13/03) et travail en mode projet.", projectId: 7 },
            { label: "Projet Godot (Agile/Scrum)", detail: "Application stricte de la méthode Agile : Sprints, Kanban, Daily Meetings et pilotage par les risques.", projectId: 3 }
        ]
    },
     {
        title: "C6 - Collaborer (Niveau 3)",
        icon: <Users className="w-8 h-8 text-primary" />,
        description: "Manager une équipe informatique et communiquer avec les parties prenantes.",
        proofs: [
            { label: "Travail de Groupe (Bibliothèque)", detail: "Collaboration en équipe avec répartition des tâches (3 ou 4 séances guidées puis autonomie).", projectId: 7 },
            { label: "Association DREAMS", detail: "Participation active à une équipe agile : Daily meetings, partage de code et revues (Merge Requests).", projectId: 1 }
        ]
    }
];

const Competences: React.FC = () => {
    return (
        <div className="w-full relative px-4 py-20">
             {/* Background decoration */}
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-secondary tracking-widest uppercase font-bold text-sm mb-4">Bilan de Compétences</h2>
                    <h3 className="font-display font-bold text-5xl md:text-7xl text-foreground">
                        Compétences <span className="text-stroke-primary">du BUT</span>
                    </h3>
                    <p className="max-w-2xl mx-auto text-foreground/60 text-lg mt-6">
                        Une vue détaillée de ma progression et de l'acquisition de compétences clés à travers mes projets et expériences professionnelles.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {competences.map((comp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`glass p-8 rounded-3xl border border-white/5 hover:border-primary/20 transition-all group lg:col-span-1 ${index === 3 || index === 4 ? 'md:col-span-1' : ''}`}
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className="p-4 bg-surface rounded-2xl group-hover:bg-primary/20 transition-colors">
                                    {comp.icon}
                                </div>
                                <span className="font-mono text-xs text-foreground/30">0{index + 1}</span>
                            </div>

                            <h4 className="font-display font-bold text-xl mb-4 group-hover:text-primary transition-colors min-h-[3rem]">
                                {comp.title}
                            </h4>
                            
                            <p className="text-foreground/70 mb-8 leading-relaxed text-sm h-20">
                                {comp.description}
                            </p>

                            <div className="bg-surface rounded-xl p-6 space-y-4">
                                <h5 className="font-bold text-xs uppercase tracking-wider text-secondary mb-2">Preuves & Réalisations</h5>
                                {comp.proofs.map((proof, idx) => (
                                    <div key={idx} className="flex gap-3 items-start group/proof">
                                        <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                                        <div className="flex-1">
                                            <span className="font-bold text-foreground block text-sm mb-0.5">
                                                {proof.label}
                                                {proof.projectId && (
                                                    <Link to="/projects" className="inline-block ml-1 opacity-0 group-hover/proof:opacity-100 transition-opacity text-primary hover:underline" title="Voir le projet">
                                                        <ArrowRight size={12} />
                                                    </Link>
                                                )}
                                            </span>
                                            <span className="text-xs text-foreground/50 leading-tight block">{proof.detail}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-20 p-8 glass rounded-3xl text-center md:flex justify-between items-center"
                >
                    <div className="text-left mb-6 md:mb-0">
                        <h4 className="font-bold text-2xl mb-2">Progression Continue</h4>
                        <p className="text-foreground/60 max-w-xl">
                            Mon parcours en BUT m'a permis de passer de la découverte de la programmation à la conception d'architectures logicielles complexes, en intégrant des contraintes professionnelles réelles.
                        </p>
                    </div>
                    <div className="px-6 py-3 bg-secondary/10 text-secondary rounded-full font-bold border border-secondary/20">
                        Niveau Junior Confirmé
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Competences;
