import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';

export const About: React.FC = () => {
  return (
    <Section id="sobre" className="py-20 border-y border-white/5 bg-karlon-surface">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold font-sans tracking-tight leading-tight">
            O Que é a <span className="text-karlon-green">$KARLON</span>?
          </h2>
          
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
            <p>
              Você já viu streamer tankar o chat, o jogo e o lag ao mesmo tempo. 
              Agora, o Karlon Hill desbloqueou uma nova skill: a <strong className="text-white">$KARLON</strong>.
            </p>
            <p>
              Esta não é apenas mais uma moeda de cachorro ou gato aleatório. É o token oficial da nossa comunidade. 
              A $KARLON nasceu para unir todo mundo que acompanha as lives, os rages e as vitórias épicas em um só lugar.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
             <div className="flex items-center gap-4 p-4 rounded-2xl bg-black/20 border border-white/5">
                <div className="text-3xl">🎮</div>
                <div>
                    <h4 className="font-bold text-white">100% Gamer</h4>
                    <p className="text-xs text-gray-500">Sem devs ocultos</p>
                </div>
             </div>
             <div className="flex items-center gap-4 p-4 rounded-2xl bg-black/20 border border-white/5">
                <div className="text-3xl">🚀</div>
                <div>
                    <h4 className="font-bold text-white">Pump.fun</h4>
                    <p className="text-xs text-gray-500">Fair Launch</p>
                </div>
             </div>
          </div>
        </div>
        
        <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-r from-karlon-purple to-blue-500 rounded-3xl blur-2xl opacity-20" />
             <div className="relative bg-black border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden">
                <div className="absolute top-0 right-0 p-32 bg-karlon-green/5 rounded-full blur-3xl" />
                
                <h3 className="font-display text-2xl mb-6 text-white">MANIFESTO</h3>
                <p className="font-mono text-sm text-gray-400 mb-4">&gt; Inicializando protocolo de comunidade...</p>
                <p className="font-mono text-sm text-gray-400 mb-4">&gt; Sem pré-venda.</p>
                <p className="font-mono text-sm text-gray-400 mb-4">&gt; Sem team tokens escondidos.</p>
                <p className="font-mono text-sm text-karlon-green mb-0">&gt; Apenas vibração pura.</p>
             </div>
        </div>
      </div>
    </Section>
  );
};