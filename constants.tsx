import { Zap, TrendingUp, Rocket, Diamond } from 'lucide-react';

// ==================================================================================
// CENTRAL DE TEXTOS DO SITE
// Edite aqui qualquer texto que aparece na tela.
// ==================================================================================

export const CONTENT = {
  // --- Barra de Navegação ---
  navbar: {
    logoStart: "Gabi",
    logoEnd: "Coin",
    items: [
      { label: 'O que é?', href: '#about' },
      { label: 'Potencial', href: '#features' },
      { label: 'Roadmap', href: '#tokenomics' },
      { label: 'FAQ', href: '#faq' },
    ],
    buttonText: "Pump.fun",
    mobileButtonText: "Ver no Pump.fun"
  },

  // --- Seção Hero (Topo) ---
  hero: {
    badge: "🚀 Next 100x Gem • Community Hype",
    titleStart: "Gabi",
    titleEnd: "Coin",
    descriptionPrefix: "A moeda oficial das plays insanas.",
    descriptionHighlight: "Valorização explosiva",
    descriptionSuffix: "movida pelo caos do chat. Segure firme e prepare-se para a lua!",
    ctaPrimary: "Comprar Agora",
    ctaSecondary: "Ver Gráfico",
    hudLeft: "MARKET.OPEN",
    hudRight: "VOLATILITY.HIGH"
  },

  // --- Seção Sobre ---
  about: {
    sectionTitle: "O Fenômeno GabiCoin",
    sectionSubtitle: "Buy High, Sell Higher",
    textBlock1: "GabiCoin ($GABI) não é apenas uma memecoin, é um movimento. É a cristalização do hype, do caos e das melhores jogadas em um ativo digital pronto para decolar.",
    textBlock2: "O mercado de memecoins é movido por atenção, e ninguém segura a atenção do chat como a Gabi. Estamos construindo uma comunidade forte, unida e pronta para levar esse gráfico para a estratosfera.",
    highlightTitle: "Foco na Valorização",
    highlightText: "Esqueça utilidades complexas. O objetivo aqui é simples: criar a memecoin mais hypada do cenário. Se o chat está feliz, o gráfico responde.",
    originTitle: "Origem do Pump",
    originStatus: "STATUS: BULLISH",
    originQuote: "\"Durante as lives, percebemos que a energia do chat valia ouro. Decidimos transformar essa energia na GabiCoin. Uma moeda feita para valorizar junto com a fama das nossas plays.\"",
    tags: ["#Stonks", "#Lua", "#HODL"]
  },

  // --- Seção Features (Por que comprar?) ---
  features: {
    sectionTitle: "Por que a GabiCoin?",
    sectionSubtitle: "Rumo ao topo",
    footerDisclaimer: "* O valor de mercado é volátil, mas a nossa fé é inabalável.",
    cards: [
      {
        title: 'Potencial de Lua',
        description: 'A única moeda que sobe mais rápido que a Jett no updraft. O gráfico aponta pra cima!',
        icon: Rocket,
      },
      {
        title: 'Comunidade Diamond Hands',
        description: 'Aqui ninguém "paper hands". A comunidade segura a GabiCoin até o Radiante.',
        icon: Diamond,
      },
      {
        title: 'Hype Infinito',
        description: 'Cada play insana da Gabi gera um candle verde no gráfico. A economia do caos.',
        icon: TrendingUp,
      },
      {
        title: 'Escassez Lendária',
        description: 'Tão rara quanto o Gabi não dar rage quit numa partida ruim. Valorização pura.',
        icon: Zap,
      },
    ]
  },

  // --- Seção Tokenomics e Roadmap ---
  tokenomics: {
    leftTitle: "Tokenomics Bullish",
    leftSubtitle: "Estrutura para Lua",
    supplyTitle: "Supply Controlado",
    supplyText: "Quantidade perfeita para garantir escassez enquanto a demanda explode no chat.",
    liquidityTitle: "Fundo de Liquidez",
    liquidityList: [
      { percent: "90%", text: "Bloqueado na Liquidez (Segurança)" },
      { percent: "10%", text: "Tesouro da Comunidade (Marketing/Hype)" },
      { percent: "0%", text: "Dev Wallet (Just Fair Launch)" }
    ],
    roadmapTitle: "Roadmap de Crescimento",
    roadmapSubtitle: "O Caminho do Ouro",
    // Status pode ser: 'completed' (verde), 'current' (vermelho/piscando), 'upcoming' (cinza)
    roadmapSteps: [
      {
        phase: 'Fase 1',
        title: 'O Lançamento',
        description: 'GabiCoin nasce no Pump.fun. O market cap começa a aquecer.',
        status: 'completed' as const,
      },
      {
        phase: 'Fase 2',
        title: 'Pump da Comunidade',
        description: 'Todo mundo comprando e segurando. O gráfico começa a ficar vertical.',
        status: 'current' as const,
      },
      {
        phase: 'Fase 3',
        title: 'To The Moon',
        description: 'A GabiCoin rompe barreiras. O chat fica rico (de risadas e talvez coins).',
        status: 'upcoming' as const,
      },
      {
        phase: 'Fase 4',
        title: 'Dominação Global',
        description: 'GabiCoin vale mais que skins de Vandal. Elon Musk retweeta (sonho).',
        status: 'upcoming' as const,
      },
    ]
  },

  // --- Seção FAQ ---
  faq: {
    title: "Perguntas Frequentes",
    subtitle: "Leia antes de perguntar no chat",
    items: [
      {
        question: "A GabiCoin vai valorizar?",
        answer: "A gente mira na lua! Com a força da comunidade e as plays da Gabi, o objetivo é ver apenas candles verdes. O céu é o limite!"
      },
      {
        question: "Por que eu deveria comprar?",
        answer: "Porque você quer fazer parte da elite do chat. Segurar GabiCoin é o sinal definitivo de que você acredita no potencial da lenda."
      },
      {
        question: "O que acontece se a Gabi pinarm?",
        answer: "A volatilidade faz parte! Mas cada pino é um meme, e cada meme traz mais visibilidade. No final, o marketing é orgânico."
      },
      {
        question: "Onde eu acompanho o gráfico?",
        answer: "Direto no Pump.fun. Fique de olho, porque piscou, o preço mudou (para cima, esperamos)!"
      }
    ]
  },

  // --- Rodapé ---
  footer: {
    brand: "Gabi",
    brandHighlight: "Coin",
    brandDescription: "A moeda oficial da comunidade. Feito para valorizar.",
    copyright: "© 2024 GabiCoin Community. All rights reserved (mostly).",
    disclaimer: "AVISO LEGAL: ESTE PROJETO É UMA OBRA DE FICÇÃO/MEME PARA FINS DE ENTRETENIMENTO. NÃO POSSUI VALOR INTRÍNSECO NEM EXPECTATIVA DE RETORNO FINANCEIRO."
  }
};