import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, alignment = 'center' }) => {
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  };

  return (
    <div className={`flex flex-col ${alignClass[alignment]} mb-12`}>
      <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
        {title}
      </h2>
      {subtitle && (
        <div className="flex items-center gap-4 mt-2">
          <div className="h-[2px] w-12 bg-val-red"></div>
          <p className="text-val-red font-bold uppercase tracking-widest text-sm">{subtitle}</p>
          <div className="h-[2px] w-12 bg-val-red"></div>
        </div>
      )}
    </div>
  );
};