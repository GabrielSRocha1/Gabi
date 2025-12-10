import React from 'react';
import { SectionHeader } from './SectionHeader';
import { CONTENT } from '../constants';

export const Features: React.FC = () => {
  const { features } = CONTENT;

  return (
    <section id="features" className="py-24 bg-neutral-900 relative">
      
      {/* Background Grid Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 hidden lg:block"></div>
      
      {/* Chart line decorative background */}
      <div className="absolute bottom-0 left-0 w-full h-64 opacity-10 pointer-events-none">
         <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="w-full h-full text-green-500 fill-current">
            <path d="M0 20 L0 15 Q10 18 20 10 T40 12 T60 5 T80 8 T100 0 L100 20 Z" />
         </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader title={features.sectionTitle} subtitle={features.sectionSubtitle} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {features.cards.map((feature, index) => (
            <div 
              key={index}
              className="group relative p-6 bg-val-dark border border-white/10 hover:border-green-500 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              
              <div className="w-12 h-12 bg-white/5 rounded-sm flex items-center justify-center mb-6 group-hover:bg-green-500 group-hover:text-white transition-colors duration-300 text-green-500">
                <feature.icon size={24} />
              </div>
              
              <h3 className="text-xl font-display font-bold uppercase text-white mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-xs text-gray-500 uppercase tracking-widest font-mono">
                {features.footerDisclaimer}
            </p>
        </div>
      </div>
    </section>
  );
};