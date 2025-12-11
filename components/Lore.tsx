import React from 'react';
import { Section } from './ui/Section';

export const Lore: React.FC = () => {
  return (
    <Section id="lore" className="py-20">
      <div className="relative bg-black rounded-3xl overflow-hidden border border-karlon-green/30">
        <div className="absolute top-0 left-0 right-0 h-8 bg-gray-900 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="ml-4 text-xs font-mono text-gray-500">genesis_block.exe</div>
        </div>
        
        <div className="p-8 md:p-12 font-mono mt-4">
            <h2 className="text-2xl md:text-3xl font-pixel text-karlon-green mb-8 typing-effect">
                > A LENDA DA ORIGEM
            </h2>
            
            <div className="space-y-6 text-green-400/80 leading-relaxed text-lg max-w-4xl">
                <p>
                    <span className="text-white opacity-50">001</span> Reza a lenda que Karlon Hill estava em uma speedrun impossível. Faltando 1 segundo para o recorde mundial...
                </p>
                <p>
                    <span className="text-white opacity-50">002</span> ...o PC travou. A tela ficou azul. O chat spammou F.
                </p>
                <p>
                    <span className="text-white opacity-50">003</span> Mas do meio do glitch, surgiu um código misterioso. Não era um erro. Era o <span className="text-karlon-purple font-bold">Genesis Block da $KARLON</span>.
                </p>
                <p>
                    <span className="text-white opacity-50">004</span> Dizem que a moeda carrega a energia caótica de mil partidas ranqueadas e a sorte de quem encontra um item lendário com 0.001% de drop rate.
                </p>
                <div className="p-4 bg-green-900/10 border-l-4 border-karlon-green mt-8">
                    <p className="italic text-white">
                        "Quem possui a $KARLON está protegido contra bad vibes e lag mental."
                    </p>
                </div>
            </div>
        </div>

        {/* Decorate glitch effect at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-karlon-green to-transparent opacity-50" />
      </div>
    </Section>
  );
};