
import { ReactNode } from 'react';

export interface Experience {
  role: string;
  company: string;
  date: string;
  location: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
  projectLink?: string;
}

export interface Skill {
  name: string;
  icon: ReactNode;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}
