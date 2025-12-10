import React, { useState } from 'react';
import { Menu, X, Hexagon } from 'lucide-react';
import { CONTENT } from '../constants';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { navbar } = CONTENT;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-val-dark/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="relative text-val-red animate-pulse">
              <Hexagon size={32} strokeWidth={2.5} />
              <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">{navbar.logoStart.charAt(0)}</span>
            </div>
            <span className="font-display font-bold text-2xl tracking-tighter uppercase text-white">
              {navbar.logoStart}<span className="text-val-red">{navbar.logoEnd}</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navbar.items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-display uppercase text-sm font-bold tracking-wider text-gray-300 hover:text-val-red transition-colors duration-200 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-val-red transition-all group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <Button variant="secondary" className="px-6 py-2 text-xs">
              {navbar.buttonText}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-val-red transition-colors"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-val-dark border-b border-val-red">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navbar.items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-display font-bold uppercase text-white hover:bg-val-red hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4">
               <Button fullWidth variant="secondary">{navbar.mobileButtonText}</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};