
import React from 'react';
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="py-20 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
        <div className="md:col-span-2">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-4">
            Hi, I'm Preetham H
          </h1>
          <p className="text-lg md:text-xl text-indigo-600 font-semibold mb-6">
            Intern @NFThing | Freelancer@Outlier | Full Stack Web Dev | MSRIT'26 - ISE
          </p>
          <p className="text-slate-600 max-w-2xl text-base md:text-lg leading-relaxed mb-8">
            As an enthusiastic Information Science Engineering student at Ramaiah Institute of Technology, I am on a journey to become a software engineer. With a strong academic background and hands-on experience in both industry and challenging projects, I excel at transforming complex problems into elegant solutions. Driven by curiosity and a commitment to innovation, I am constantly exploring new technologies and opportunities for growth, eager to make a meaningful impact in the tech world.
          </p>
          <div className="flex items-center space-x-4">
            <a href="https://github.com/Preetham" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-indigo-600 transition-transform duration-300 hover:scale-110">
              <GitHubIcon />
            </a>
            <a href="https://linkedin.com/in/PreethamH" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-indigo-600 transition-transform duration-300 hover:scale-110">
              <LinkedInIcon />
            </a>
            <a href="mailto:prh3653@gmail.com" className="text-slate-600 hover:text-indigo-600 transition-transform duration-300 hover:scale-110">
              <MailIcon />
            </a>
             <a href="#contact" className="ml-4 inline-block bg-indigo-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
              Get In Touch
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full blur-2xl opacity-50"></div>
            <img 
              src="/preetham-profile.png" 
              alt="Preetham H" 
              className="relative w-full h-full object-cover rounded-full shadow-2xl border-4 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
