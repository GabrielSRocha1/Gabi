import React from 'react';
import { Button } from './ui/Button';
import { Twitter, MessageCircle, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Final CTA */}
        <div className="max-w-3xl mx-auto mb-20 space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold font-sans tracking-tight text-white">
            O Lobby Está Aberto.
          </h2>
          <p className="text-xl text-gray-400 font-light">
            A partida já começou e o servidor está enchendo. Junte-se à guilda.
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="px-12 py-6 text-lg">
                Comprar $KARLON Agora <ArrowUpRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/10 py-12 max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-4">
                <a 
                  href="https://x.com/KarlonHill" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer group w-full max-w-xs block"
                >
                    <Twitter className="w-6 h-6 mx-auto mb-2 group-hover:text-blue-400 transition-colors" />
                    <span className="font-bold block text-white">Twitter / X</span>
                    <span className="text-xs text-gray-500">Updates Diários</span>
                </a>
            </div>
            <div className="flex flex-col items-center gap-4">
                <a 
                  href="https://t.me/+nVWtiWKCuPI5NTQ5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer group w-full max-w-xs block"
                >
                    <MessageCircle className="w-6 h-6 mx-auto mb-2 group-hover:text-blue-500 transition-colors" />
                    <span className="font-bold block text-white">Telegram</span>
                    <span className="text-xs text-gray-500">Chat da Guilda</span>
                </a>
            </div>
        </div>

        {/* Disclaimer */}
        <div className="text-xs text-gray-600 max-w-4xl mx-auto font-sans leading-relaxed text-center">
          <p className="font-semibold mb-2 text-gray-500">AVISO LEGAL</p>
          <p>
            $KARLON é uma memecoin criada para fins de entretenimento e comunidade, sem valor intrínseco ou expectativa de retorno financeiro. 
            Criptomoedas são voláteis e o mercado é de alto risco. Nunca invista dinheiro que você não pode perder.
          </p>
          <p className="mt-8 opacity-50">
            © {new Date().getFullYear()} Guilda do Karlon Hill. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};