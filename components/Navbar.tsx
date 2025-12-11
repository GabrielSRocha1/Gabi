import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-karlon-dark/90 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-karlon-green rounded-sm animate-pulse" />
          <span className="font-pixel text-lg md:text-xl text-white tracking-tighter">
            $<span className="text-karlon-green">KARLON</span>
          </span>
        </div>

        <div className="flex items-center">
          <Button size="sm" variant="secondary">
            Comprar Agora
          </Button>
        </div>
      </div>
    </nav>
  );
};