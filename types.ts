import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface RoadmapItem {
  phase: string;
  title: string;
  description: string;
  status: 'completed' | 'current' | 'upcoming';
}

export interface FAQItem {
  question: string;
  answer: string;
}
