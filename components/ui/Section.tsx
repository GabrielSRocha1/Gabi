import React from 'react';
import { SectionProps } from '../../types';

export const Section: React.FC<SectionProps> = ({ children, className = '', id }) => {
  return (
    <section id={id} className={`w-full px-4 py-16 md:py-24 max-w-7xl mx-auto ${className}`}>
      {children}
    </section>
  );
};