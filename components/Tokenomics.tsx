import React from 'react';
import { SectionHeader } from './SectionHeader';
import { CONTENT } from '../constants';
import { PieChart, TrendingUp, Rocket } from 'lucide-react';

export const Tokenomics: React.FC = () => {
  const { tokenomics } = CONTENT;

  return (
    <section id="tokenomics" className="py-24 bg-val-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Col: Tokenomics Stats */}
            <div>
                <SectionHeader title={tokenomics.leftTitle} subtitle={tokenomics.leftSubtitle} alignment="left" />
                
                <div className="space-y-6 mt-10">
                    <div className="bg-neutral-900/50 p-6 border-l-4 border-green-500">
                        <div className="flex items-center gap-4 mb-2">
                            <PieChart className="text-green-500" />
                            <h3 className="font-display font-bold text-2xl uppercase">{tokenomics.supplyTitle}</h3>
                        </div>
                        <p className="text-gray-300">{tokenomics.supplyText}</p>
                    </div>

                    <div className="bg-neutral-900/50 p-6 border-l-4 border-val-red">
                         <div className="flex items-center gap-4 mb-2">
                            <TrendingUp className="text-val-red" />
                            <h3 className="font-display font-bold text-2xl uppercase">{tokenomics.liquidityTitle}</h3>
                        </div>
                        <ul className="space-y-2 text-gray-300 list-disc list-inside">
                            {tokenomics.liquidityList.map((item, index) => (
                                <li key={index}>
                                    <span className="text-white font-bold">{item.percent}</span> {item.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Right Col: Roadmap */}
            <div>
                <SectionHeader title={tokenomics.roadmapTitle} subtitle={tokenomics.roadmapSubtitle} alignment="left" />
                
                <div className="mt-10 relative border-l-2 border-white/10 ml-4 space-y-12">
                    {tokenomics.roadmapSteps.map((item, index) => (
                        <div key={index} className="relative pl-8 group">
                            {/* Dot Indicator */}
                            <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 ${
                                item.status === 'completed' ? 'bg-green-500 border-green-500' : 
                                item.status === 'current' ? 'bg-val-red border-val-red animate-pulse' : 
                                'bg-val-dark border-gray-500'
                            }`}></div>

                            <span className={`text-xs font-bold uppercase tracking-widest mb-1 block ${
                                item.status === 'current' ? 'text-val-red' : 'text-gray-500'
                            }`}>
                                {item.phase}
                            </span>
                            
                            <div className="flex items-center gap-2 mb-2">
                                <h3 className={`text-2xl font-display font-bold uppercase ${
                                    item.status === 'upcoming' ? 'text-gray-500' : 'text-white'
                                }`}>
                                    {item.title}
                                </h3>
                                {item.status === 'current' && <Rocket size={20} className="text-val-red animate-bounce" />}
                            </div>
                            
                            <p className="text-gray-400 text-sm">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

        </div>

      </div>
    </section>
  );
};