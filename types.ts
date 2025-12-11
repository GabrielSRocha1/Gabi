import { ReactNode } from 'react';

export interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  color?: 'green' | 'purple';
}

export interface RoadmapItemProps {
  phase: string;
  title: string;
  items: string[];
  status: 'completed' | 'current' | 'locked';
}