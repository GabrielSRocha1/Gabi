import React from 'react';
import { SectionHeader } from './SectionHeader';
import { TrendingUp, Gamepad2 } from 'lucide-react';
import { CONTENT } from '../constants';

export const About: React.FC = () => {
  const { about } = CONTENT;

  return (
    <section id="about" className="py-24 bg-val-dark relative overflow-hidden">
        
        {/* Slanted Separator */}
        <div className="absolute top-0 left-0 w-full h-24 bg-val-dark transform -skew-y-2 origin-top-right -mt-12 z-20 border-b-4 border-val-red"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                
                {/* Text Content */}
                <div>
                    <SectionHeader title={about.sectionTitle} subtitle={about.sectionSubtitle} alignment="left" />
                    
                    <div className="space-y-6 text-lg text-gray-300 font-body leading-relaxed">
                        <p dangerouslySetInnerHTML={{ __html: about.textBlock1.replace('GabiCoin ($GABI)', '<strong class="text-val-red">GabiCoin ($GABI)</strong>') }}></p>
                        <p>{about.textBlock2}</p>

                        <div className="p-6 bg-white/5 border-l-4 border-green-500 mt-8">
                            <h3 className="text-xl font-display font-bold text-white mb-2 flex items-center gap-2">
                                <TrendingUp size={20} className="text-green-500"/> {about.highlightTitle}
                            </h3>
                            <p className="text-sm">
                                {about.highlightText}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Visual Element */}
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-val-red rounded-lg transform rotate-3 opacity-20 blur-lg"></div>
                    <div className="relative bg-black/40 border border-white/10 p-8 rounded-lg backdrop-blur-sm">
                         {/* Abstract "Card" representing the origin */}
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                                <div className="p-3 bg-val-red rounded-sm">
                                    <Gamepad2 className="text-white" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-display font-bold text-xl uppercase text-white">{about.originTitle}</h4>
                                    <p className="text-xs text-gray-400 font-mono">{about.originStatus}</p>
                                </div>
                            </div>
                            
                            <p className="text-gray-300 italic">
                                {about.originQuote}
                            </p>

                            <div className="mt-4 flex gap-2">
                                {about.tags.map((tag, i) => (
                                    <span key={i} className={`px-2 py-1 text-xs rounded border ${i === 0 ? 'bg-green-500/20 text-green-400 border-green-500/50' : 'bg-white/10 text-gray-400 border-transparent'}`}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
};