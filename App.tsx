import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Features } from './components/Features';
import { Tokenomics } from './components/Tokenomics';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-val-dark text-white font-body selection:bg-val-red selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Tokenomics />
        <FAQ />
      </main>
      <Footer />
      
      {/* Global Grain/Noise Overlay for that tactical feel */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
  );
}

export default App;