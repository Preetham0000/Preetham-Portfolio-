
import React from 'react';
import type { Project } from '../types';

const projects: Project[] = [
    {
        title: 'DSA Master',
        description: 'Developed a gamified platform to make learning Data Structures and Algorithms interactive and fun. Built intuitive UI with React and Tailwind; managed user data with MongoDB.',
        tags: ['React (TypeScript)', 'Tailwind CSS', 'MongoDB'],
        imageUrl: '/Dsa master.png',
        link: 'https://dsamasterr.netlify.app/',
        projectLink: 'Project Link'
    },
    {
        title: 'AlgoAce',
        description: 'Developed an AI-driven DSA learning platform using a Multi-Agent RAG system to deliver personalized learning paths and detailed concept explanations.',
        tags: ['AI', 'RAG', 'React', 'Node.js'],
        imageUrl: '/algoace.png',
        link: '#',
    },
    {
        title: 'DFlix',
        description: 'Contributed to a movie-centric Web3 platform offering reviews, ratings, and discussions. Implemented personalized recommendations and community tools.',
        tags: ['Web3', 'React.js', 'Blockchain'],
        imageUrl: '/dflix.png',
        link: 'http://143.244.134.9:5173/',
        projectLink: 'Project Link'
    },
    {
        title: 'Farm Hub',
        description: 'Created a marketplace for farmers to trade and sell their yield with vendors using TypeScript, React, and Styled Components.',
        tags: ['TypeScript', 'React', 'Styled Components'],
        imageUrl: '/farmhub.png',
        link: '#',
    },
    {
        title: 'Screen-Time Analysis',
        description: 'Visualized and interpreted device usage data to analyze productivity trends using Python, Matplotlib, Pandas, and NumPy.',
        tags: ['Python', 'Matplotlib', 'Pandas'],
        imageUrl: 'https://picsum.photos/seed/screen-time/400/300',
        link: '#',
    },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl hover:scale-105">
        <a href={project.link} target="_blank" rel="noopener noreferrer">
            <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-slate-800">{project.title}</h3>
                <p className="text-slate-600 text-sm mb-4 h-20">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                        <span key={tag} className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">{tag}</span>
                    ))}
                </div>
                 {project.projectLink && (
                    <span className="text-indigo-600 font-semibold group-hover:underline">
                        {project.projectLink} &rarr;
                    </span>
                )}
            </div>
        </a>
    </div>
);


const ProjectsSection: React.FC = () => {
    return (
        <section id="projects" className="py-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map(project => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
