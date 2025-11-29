/**
 * Type definitions for the portfolio
 */

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string[];
  stack: string[];
  features: string[];
  image: string;
  link?: string;
  github?: string;
}

export interface TechCategory {
  title: string;
  technologies: string[];
}

export interface Experience {
  id: string;
  period: string;
  title: string;
  company: string;
  responsibilities: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
