import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import ProblemSolution from './components/ProblemSolution';
import CTAWithCalendly from './components/CTAWithCalendly';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <SocialProof />
        <ProblemSolution />
        <CTAWithCalendly />
      </main>
      <footer className="bg-dark-lighter py-6 border-t border-gray-800">
        <div className="container-custom text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} ExecLytix. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
