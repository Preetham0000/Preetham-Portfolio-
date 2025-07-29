
import React from 'react';
import type { Experience } from '../types';

const experiences: Experience[] = [
    {
        role: 'Full Stack Developer Intern',
        company: 'NFTHING',
        date: 'Jan 2024 - Present',
        location: 'Bengaluru, Karnataka (Remote)',
        description: [
            'Working on Building Decentralised Apps, Smart Contracts and building a strong Web3Onwards Community.',
            'Learning and exploring blockchain technologies as part of project development.'
        ]
    },
    {
        role: 'AI Tutor (Freelancer)',
        company: 'Outlier',
        date: 'Aug 2024 - Present',
        location: 'Bengaluru, Karnataka (Remote)',
        description: [
            'Trained and developed various AI models, enhancing their performance and accuracy through prompt engineering.'
        ]
    },
    {
        role: 'Team Member - Business and Social Media Division',
        company: 'Velocita Racing',
        date: 'Feb 2024 - Present',
        location: 'Bengaluru, Karnataka',
        description: [
            'Managing social media presence and digital engagement for the team participating in Formula Bharat.',
            'Contributing to the development of the team\'s business plan, including budgeting, strategy, and outreach.'
        ]
    },
    {
        role: 'Freelancer - Data Labeling (SRT Projects)',
        company: 'Labelbox',
        date: 'Nov 2024 - Present',
        location: 'Remote',
        description: [
            'Worked on video data annotation projects involving SRT file creation and validation for AI model training.',
            'Maintained high-quality labeling standards, helping improve model comprehension of audiovisual content.'
        ]
    }
];

const ExperienceCard: React.FC<{ experience: Experience }> = ({ experience }) => (
    <div className="relative pl-8 sm:pl-12 py-6 group">
        <div className="flex items-center mb-1">
            <div className="bg-indigo-600 h-4 w-4 rounded-full border-4 border-slate-50 absolute left-0 sm:left-4 transform -translate-x-1/2 z-10"></div>
            <h3 className="font-bold text-lg text-slate-800">{experience.role}</h3>
            <span className="text-sm font-medium text-slate-500 ml-auto">{experience.date}</span>
        </div>
        <div className="text-sm font-medium text-indigo-700 mb-2">{experience.company} &middot; {experience.location}</div>
        <ul className="list-disc list-inside text-slate-600 space-y-1">
            {experience.description.map((point, index) => (
                <li key={index}>{point}</li>
            ))}
        </ul>
    </div>
);


const ExperienceSection: React.FC = () => {
    return (
        <section id="experience" className="py-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Work Experience</h2>
            <div className="relative border-l-2 border-slate-200">
                {experiences.map((exp, index) => (
                    <ExperienceCard key={index} experience={exp} />
                ))}
            </div>
        </section>
    );
};

export default ExperienceSection;
