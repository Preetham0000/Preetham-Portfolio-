
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-50 text-slate-800">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
