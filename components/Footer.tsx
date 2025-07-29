
import React from 'react';
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-4">
            <a href="https://github.com/Preetham" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-indigo-600 transition-colors duration-300">
                <GitHubIcon />
            </a>
            <a href="https://linkedin.com/in/PreethamH" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-indigo-600 transition-colors duration-300">
                <LinkedInIcon />
            </a>
            <a href="mailto:prh3653@gmail.com" className="text-slate-500 hover:text-indigo-600 transition-colors duration-300">
                <MailIcon />
            </a>
        </div>
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Preetham H. All rights reserved.
        </p>
         <p className="text-slate-400 text-xs mt-2">
          Built with React, TypeScript, and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
