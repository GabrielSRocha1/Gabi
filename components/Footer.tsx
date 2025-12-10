import React from 'react';
import { Twitch, Twitter, MessageSquare, Hexagon } from 'lucide-react';
import { CONTENT } from '../constants';

export const Footer: React.FC = () => {
  const { footer } = CONTENT;

  return (
    <footer className="bg-val-dark border-t-4 border-val-red pt-16 pb-8 relative overflow-hidden">
        
      {/* Background oversized logo */}
      <div className="absolute -bottom-24 -right-24 text-white opacity-[0.02]">
        <Hexagon size={400} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
            
            {/* Branding */}
            <div className="flex flex-col items-center md:items-start">
                <h2 className="text-4xl font-display font-bold uppercase text-white mb-4">
                    {footer.brand}<span className="text-val-red">{footer.brandHighlight}</span>
                </h2>
                <p className="text-gray-400 max-w-xs text-center md:text-left text-sm">
                    {footer.brandDescription}
                </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-6">
                <a href="#" className="w-12 h-12 bg-white/5 flex items-center justify-center rounded hover:bg-[#9146FF] hover:text-white transition-colors text-gray-400">
                    <Twitch size={24} />
                </a>
                <a href="#" className="w-12 h-12 bg-white/5 flex items-center justify-center rounded hover:bg-[#1DA1F2] hover:text-white transition-colors text-gray-400">
                    <Twitter size={24} />
                </a>
                <a href="#" className="w-12 h-12 bg-white/5 flex items-center justify-center rounded hover:bg-[#5865F2] hover:text-white transition-colors text-gray-400">
                    <MessageSquare size={24} />
                </a>
            </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs font-mono">
                {footer.copyright}
            </p>
            <div className="text-gray-600 text-[10px] uppercase tracking-widest text-center md:text-right max-w-md">
                {footer.disclaimer}
            </div>
        </div>
      </div>
    </footer>
  );
};