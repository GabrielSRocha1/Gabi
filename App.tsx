import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Features } from './components/Features';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-karlon-dark min-h-screen text-white selection:bg-karlon-green selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;