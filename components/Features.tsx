import React from 'react';
import { Section } from './ui/Section';
import { Shield, TrendingUp, Users, Zap, Trophy, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon: Icon, title, description, className = "" }: any) => (
  <div className={`p-8 rounded-3xl bg-karlon-surface border border-white/5 hover:border-white/10 transition-all duration-300 group ${className}`}>
    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold mb-3 text-white font-sans">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
  </div>
);

export const Features: React.FC = () => {
  return (
    <div className="bg-karlon-bg py-20" id="features">
      <Section>
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold font-sans mb-6 tracking-tight">
            Por que ter <span className="text-karlon-purple">$KARLON</span>?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl font-light">
            Não é só sobre o gráfico. É sobre fazer parte da história da guilda.
          </p>
        </div>

        {/* Grid Layout inspired by modern tech aesthetics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Main Large Card */}
          <div className="md:col-span-2 bg-gradient-to-br from-karlon-surface to-[#0f0f0f] rounded-3xl p-8 md:p-12 border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
               <Shield size={200} />
            </div>
            <div className="relative z-10">
                <div className="w-14 h-14 bg-karlon-green text-black rounded-2xl flex items-center justify-center mb-8">
                    <Users size={28} />
                </div>
                <h3 className="text-3xl font-bold mb-4">Comunidade Tanker</h3>
                <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
                    Diferente de projetos que somem depois do respawn, a nossa força vem da comunidade que está na live todo dia. Somos uma guilda sólida construída em anos de gameplay.
                </p>
            </div>
          </div>

          <FeatureCard 
            icon={TrendingUp}
            title="Meme Driven"
            description="O gráfico sobe, o gráfico desce, mas a zoeira é constante. A moeda é combustível para os melhores memes e clipes do canal."
            className="bg-karlon-surface-highlight"
          />

          <FeatureCard 
            icon={Trophy}
            title="Cultura da Live"
            description="Ter $KARLON na carteira é o equivalente digital a ter o crachá de VIP. É mostrar que você estava lá quando tudo começou."
          />

          <FeatureCard 
            icon={Zap}
            title="Fair Play"
            description="Na Pump.fun, a regra é clara. Sem privilégios injustos. É PvP aberto e honesto para todos os players."
          />

          <div className="md:col-span-1 bg-karlon-purple text-white rounded-3xl p-8 border border-white/10 flex flex-col justify-between overflow-hidden relative">
             <div className="absolute -bottom-4 -right-4 bg-white/20 w-32 h-32 rounded-full blur-2xl" />
             <div>
                <MessageCircle size={32} className="mb-6 opacity-80" />
                <h3 className="text-xl font-bold mb-2">Utilidade Real</h3>
                <p className="text-white/80 text-sm">
                   Acesso a votações exclusivas e influência nos desafios do canal.
                </p>
             </div>
          </div>

        </div>
      </Section>
    </div>
  );
};