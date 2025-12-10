import React from 'react';
import { Button } from './Button';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { CONTENT } from '../constants';

export const Hero: React.FC = () => {
  const { hero } = CONTENT;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-val-dark z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 bg-[length:40px_40px]"></div>
        
        {/* Abstract Shapes */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-val-red opacity-10 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500 opacity-10 blur-[100px] rounded-full"></div>
        
        {/* Animated Lines */}
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Floating Badges */}
        <div className="mb-6 animate-bounce">
            <span className="inline-block px-4 py-1 bg-green-500/20 border border-green-500 text-green-400 text-xs font-bold uppercase tracking-widest backdrop-blur-sm shadow-[0_0_15px_rgba(74,222,128,0.3)]">
              {hero.badge}
            </span>
        </div>

        {/* Main Title */}
        <h1 className="text-7xl md:text-9xl font-display font-bold uppercase italic tracking-tighter text-white mb-2 leading-none relative">
          {hero.titleStart}<span className="text-transparent bg-clip-text bg-gradient-to-r from-val-red to-green-400">{hero.titleEnd}</span>
          <TrendingUp className="absolute -top-4 -right-12 text-green-500 opacity-80 hidden md:block" size={64} />
        </h1>

        <p className="max-w-2xl mx-auto text-xl md:text-2xl text-gray-300 mb-10 font-body">
          {hero.descriptionPrefix} <span className="text-green-400 font-bold">{hero.descriptionHighlight}</span> 
          <br className="hidden md:block" /> {hero.descriptionSuffix}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Button variant="primary" className="text-xl px-12 bg-green-600 hover:bg-green-700">
            {hero.ctaPrimary} <ArrowRight className="inline-block ml-2" size={20} />
          </Button>
          <Button variant="outline" className="text-xl px-12">
            {hero.ctaSecondary}
          </Button>
        </div>

        {/* Decorative HUD Elements */}
        <div className="absolute bottom-10 left-10 hidden md:flex flex-col gap-2">
            <div className="w-24 h-1 bg-green-500 shadow-[0_0_10px_#22c55e]"></div>
            <div className="w-12 h-1 bg-white/50"></div>
            <div className="text-xs font-mono text-green-400">{hero.hudLeft}</div>
        </div>
        
        <div className="absolute bottom-10 right-10 hidden md:flex flex-col items-end gap-2 text-right">
            <div className="w-24 h-1 bg-val-red"></div>
            <div className="text-xs font-mono text-white/50">{hero.hudRight}</div>
        </div>

      </div>
    </section>
  );
};