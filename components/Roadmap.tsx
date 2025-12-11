import React from 'react';
import { Section } from './ui/Section';

export const Roadmap: React.FC = () => {
  const phases = [
    {
      phase: "01",
      title: "Tutorial",
      status: "completed",
      items: ["Lançamento na Pump.fun", "Formação da Party (Comunidade)", "Primeiros memes viralizando"]
    },
    {
      phase: "02",
      title: "O Grind",
      status: "current",
      items: ["Raids comunitárias", "Listagens em agregadores", "Eventos exclusivos na Live"]
    },
    {
      phase: "03",
      title: "Boss Final",
      status: "upcoming",
      items: ["$KARLON moeda de Marte", "Teclado banhado a ouro", "Dominação Universal Gamer"]
    }
  ];

  return (
    <Section id="roadmap" className="py-24">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        <div className="md:w-1/3">
          <h2 className="text-4xl font-bold font-sans tracking-tight mb-6">Roadmap</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            O plano de jogo para a dominação. Não é promessa, é quest log.
          </p>
        </div>

        <div className="md:w-2/3 space-y-8">
          {phases.map((item, index) => (
            <div 
                key={index} 
                className={`group relative pl-8 border-l-2 transition-all duration-300 ${item.status === 'current' ? 'border-karlon-green' : 'border-white/10'}`}
            >
              <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-4 border-karlon-bg transition-colors duration-300
                  ${item.status === 'completed' ? 'bg-karlon-green' : item.status === 'current' ? 'bg-karlon-green animate-pulse' : 'bg-gray-800'}`} 
              />
              
              <div className="mb-2 flex items-center gap-3">
                 <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Fase {item.phase}</span>
                 {item.status === 'current' && (
                     <span className="bg-karlon-green/10 text-karlon-green text-[10px] font-bold px-2 py-0.5 rounded-full border border-karlon-green/20">ATUAL</span>
                 )}
              </div>
              
              <h3 className={`text-2xl font-bold mb-4 ${item.status === 'upcoming' ? 'text-gray-500' : 'text-white'}`}>
                  {item.title}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {item.items.map((subItem, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm text-gray-400 bg-white/5 p-3 rounded-lg border border-white/5">
                          <div className={`w-1.5 h-1.5 rounded-full ${item.status === 'upcoming' ? 'bg-gray-700' : 'bg-karlon-purple'}`} />
                          {subItem}
                      </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};