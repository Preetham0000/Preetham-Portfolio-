
import React from 'react';

const iconProps = {
  className: "w-6 h-6"
};

export const GitHubIcon: React.FC = () => (
  <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

export const LinkedInIcon: React.FC = () => (
  <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export const MailIcon: React.FC = () => (
  <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

export const MenuIcon: React.FC = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
  </svg>
);

export const CloseIcon: React.FC = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
  </svg>
);

const skillIconProps = {
  className: "w-8 h-8 text-slate-700"
};

export const ReactIcon: React.FC = () => <svg {...skillIconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z"></path><path d="M12 2v2m0 16v2m-9-9H1m16 0h2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41"></path></svg>;
export const JavaScriptIcon: React.FC = () => <svg {...skillIconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 18a4 4 0 0 0-4-4h-4a4 4 0 0 0 0 8h4a4 4 0 0 0 4-4z"></path><path d="M12 14v4"></path><path d="M20 6a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4h4a2 2 0 0 0 2-2z"></path></svg>;
export const PythonIcon: React.FC = () => <svg {...skillIconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 10V3.3a1 1 0 0 0-1.7-.7L4 9v5a1 1 0 0 0 .7.9l7.3 4.8a1 1 0 0 0 1.7-.7V14"></path><path d="M12 10h.01"></path><path d="M16 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"></path></svg>;
export const NodeJsIcon: React.FC = () => <svg {...skillIconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>;
export const MongoDbIcon: React.FC = () => <svg {...skillIconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"></path><path d="M14 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path><path d="M12 6c-3.79 0-7 2.8-7 6.21 0 2.37 1.49 4.49 3.69 5.51.13.06.21.2.21.34v.3c0 .15.12.27.27.27h6.66c.15 0 .27-.12.27-.27v-.3c0-.14.08-.28.21-.34C17.51 16.7 19 14.58 19 12.21 19 8.8 15.79 6 12 6z"></path></svg>;
export const TailwindIcon: React.FC = () => <svg {...skillIconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13.5 21H3a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h10.5m0 7H21a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-7.5m0 7V14m0 0H7m6.5 0h4.5"></path><path d="M12 14l-2-2.5 2-2.5m0 5l2-2.5-2-2.5"></path></svg>;
export const TypeScriptIcon: React.FC = () => <svg {...skillIconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19l7-7-7-7"></path><path d="M12 12H5"></path><path d="M21 16V8"></path></svg>;
export const JavaIcon: React.FC = () => <svg {...skillIconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V9z"></path><path d="M4 9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9z"></path><path d="M8 13v4a2 2 0 0 0 2 2h2"></path></svg>;
export const GitIcon: React.FC = () => <svg {...skillIconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 15l-6-6-6 6"></path></svg>;
export const DockerIcon: React.FC = () => <svg {...skillIconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 17H2v-7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v7z"></path><path d="M18 17H6v-4h12v4z"></path><circle cx="9" cy="10" r="1"></circle><circle cx="15" cy="10" r="1"></circle></svg>;
export const NextJsIcon: React.FC = () => <svg {...skillIconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18V6l7 6-7 6z"></path><path d="M16 18h2"></path></svg>;
export const FirebaseIcon: React.FC = () => <svg {...skillIconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18.83 5.44c-2.02-2.7-5.4-4.44-9.33-4.44C4.36 1 1 4.58 1 9.4c0 4.21 3.89 7.37 8.35 8.52l-5.06 4.08L6 23l9.08-7.3A11.05 11.05 0 0 0 23 9.4c0-2.34-1.04-4.59-2.73-6.24l-1.44 2.28z"></path></svg>;

