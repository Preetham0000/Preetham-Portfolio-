
import React from 'react';
import type { Skill, SkillCategory } from '../types';
import { ReactIcon, JavaScriptIcon, PythonIcon, NodeJsIcon, MongoDbIcon, TailwindIcon, TypeScriptIcon, JavaIcon, GitIcon, DockerIcon, NextJsIcon, FirebaseIcon } from './Icons';

const skillData: SkillCategory[] = [
    {
        title: 'Languages',
        skills: [
            { name: 'Java', icon: <JavaIcon /> },
            { name: 'Python', icon: <PythonIcon /> },
            { name: 'JavaScript', icon: <JavaScriptIcon /> },
            { name: 'TypeScript', icon: <TypeScriptIcon /> },
            { name: 'C', icon: <div className="w-8 h-8 font-bold text-2xl text-slate-700 flex items-center justify-center">C</div> },
            { name: 'PHP', icon: <div className="w-8 h-8 font-bold text-2xl text-slate-700 flex items-center justify-center">php</div> },
        ]
    },
    {
        title: 'Frameworks & Technologies',
        skills: [
            { name: 'React.js', icon: <ReactIcon /> },
            { name: 'Next.js', icon: <NextJsIcon /> },
            { name: 'Node.js', icon: <NodeJsIcon /> },
            { name: 'Express.js', icon: <div className="w-8 h-8 font-bold text-lg text-slate-700 flex items-center justify-center">Ex</div> },
            { name: 'Tailwind CSS', icon: <TailwindIcon /> },
            { name: 'Flutter', icon: <div className="w-8 h-8 font-bold text-xl text-slate-700 flex items-center justify-center">F</div> },
        ]
    },
    {
        title: 'Tools & Platforms',
        skills: [
            { name: 'Git', icon: <GitIcon /> },
            { name: 'Docker', icon: <DockerIcon /> },
            { name: 'MongoDB', icon: <MongoDbIcon /> },
            { name: 'Firebase', icon: <FirebaseIcon /> },
            { name: 'Google Cloud', icon: <div className="w-8 h-8 font-bold text-xl text-slate-700 flex items-center justify-center">GCP</div> },
            { name: 'Vercel', icon: <div className="w-8 h-8 font-bold text-xl text-slate-700 flex items-center justify-center">▲</div> },
        ]
    }
];

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => (
    <div className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
        {skill.icon}
        <span className="mt-2 text-sm font-medium text-slate-600">{skill.name}</span>
    </div>
);


const SkillsSection: React.FC = () => {
    return (
        <section id="skills" className="py-20 bg-slate-100 rounded-2xl">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Technical Skills</h2>
                <div className="space-y-10">
                    {skillData.map(category => (
                        <div key={category.title}>
                            <h3 className="text-xl font-semibold text-center mb-6 text-slate-700">{category.title}</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                {category.skills.map(skill => (
                                    <SkillCard key={skill.name} skill={skill} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
