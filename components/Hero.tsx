import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Copy, ImageOff } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-karlon-bg">
      {/* Abstract Background - Roblox Style */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-karlon-purple/20 rounded-full blur-[120px] opacity-40" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-karlon-green/20 rounded-full blur-[120px] opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Content Side */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-karlon-green">
            <span className="w-2 h-2 rounded-full bg-karlon-green animate-pulse" />
            O DROP MAIS LENDÁRIO DO SERVIDOR
          </div>
          
          <h1 className="font-sans font-extrabold text-5xl md:text-7xl leading-tight tracking-tight">
            A Memecoin da <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-karlon-purple to-karlon-green">
              Guilda $KARLON
            </span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
            Não é só hype. É a memecoin oficial da comunidade do Karlon Hill. 
            Lançada na Pump.fun com fair play. Deixe de ser NPC e venha para o <span className="text-white font-medium">main character energy</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <Button size="lg" variant="primary">
              <Rocket className="w-5 h-5 mr-2" /> 
              Comprar na Pump.fun
            </Button>
            <Button 
              size="lg" 
              variant="secondary" 
              onClick={() => window.open('https://t.me/+nVWtiWKCuPI5NTQ5', '_blank')}
            >
              Telegram da Guilda
            </Button>
          </div>
          
          <div className="flex items-center justify-center lg:justify-start gap-4 text-xs text-gray-500 font-mono pt-4">
            <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-md border border-white/5 cursor-pointer hover:bg-white/10 transition-colors">
              <span>CA: 8xG...k92z</span>
              <Copy size={12} />
            </div>
            <span>✅ Contrato Verificado</span>
          </div>
        </motion.div>

        {/* Visual Side - Token Identity Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
            <div className="relative w-full max-w-md aspect-square">
                {/* Rotating Glow Ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-karlon-green via-purple-500 to-transparent blur-3xl opacity-30 animate-pulse" />
                
                {/* Main Card */}
                <div className="relative h-full w-full bg-karlon-surface border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col">
                    {/* Image Area */}
                    <div className="h-3/4 relative overflow-hidden group bg-black/50 flex items-center justify-center">
                        {!imageError ? (
                          <img 
                             src="https://i.ibb.co/hJ3FjD7J/thumbroblox.png" 
                             alt="Karlon Avatar" 
                             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                             onError={() => setImageError(true)}
                          />
                        ) : (
                          // Fallback UI if image fails to load
                          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black flex flex-col items-center justify-center text-gray-500 p-8 text-center">
                             <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mb-4">
                                <span className="text-4xl font-bold text-white">K</span>
                             </div>
                             <span className="text-xs uppercase tracking-widest opacity-50 mb-2">Imagem não encontrada</span>
                             <span className="text-[10px] opacity-30">Verifique se o arquivo se chama "thumbroblox.png" na pasta public</span>
                          </div>
                        )}
                        
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-karlon-surface via-transparent to-transparent pointer-events-none" />
                        
                        {/* Floating Badge */}
                        <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full flex items-center gap-2 z-20">
                             <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
                             <span className="text-xs font-bold tracking-widest text-white">ONLINE</span>
                        </div>
                    </div>

                    {/* Info Area */}
                    <div className="h-1/4 p-6 flex items-center justify-between bg-karlon-surface-highlight border-t border-white/5">
                        <div>
                            <h3 className="text-2xl font-bold font-sans tracking-tight">$KARLON</h3>
                            <p className="text-gray-400 text-sm">Official Memecoin</p>
                        </div>
                        <div className="text-right">
                            <p className="text-karlon-green font-mono font-bold text-lg">+9999%</p>
                            <p className="text-gray-500 text-xs uppercase tracking-wider">Hype Level</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
      </div>
    </div>
  );
};