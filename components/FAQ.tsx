import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { CONTENT } from '../constants';
import { Plus, Minus } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { faq } = CONTENT;

  return (
    <section id="faq" className="py-24 bg-neutral-900 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={faq.title} subtitle={faq.subtitle} />
        
        <div className="mt-12 space-y-4">
          {faq.items.map((item, index) => (
            <div 
              key={index} 
              className={`border transition-colors duration-300 ${
                openIndex === index ? 'border-val-red bg-val-dark' : 'border-white/10 hover:border-white/30'
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`font-display font-bold uppercase text-lg ${openIndex === index ? 'text-val-red' : 'text-white'}`}>
                  {item.question}
                </span>
                {openIndex === index ? (
                  <Minus className="text-val-red flex-shrink-0" />
                ) : (
                  <Plus className="text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-300 leading-relaxed border-t border-white/5 mx-6 mt-2">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};