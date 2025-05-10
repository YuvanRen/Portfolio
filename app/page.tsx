'use client';

import { useState } from 'react';
import Navigation from './components/Navigation';
import ContactModal from './components/ContactModal';

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <div className="relative pt-16">
        {/* Cyberpunk background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 -top-48 -left-48 bg-cyber-purple/30 rounded-full filter blur-3xl"></div>
          <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-cyber-red/30 rounded-full filter blur-3xl"></div>
        </div>

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 
                className="cyber-glitch text-5xl md:text-7xl font-bold text-cyber-yellow mb-6"
                data-text="YUVAN RENGIFO"
              >
                YUVAN RENGIFO
              </h1>
              <p className="text-xl md:text-2xl text-cyber-blue mb-8 font-mono-cyber">
                Software Engineer | Full Stack Developer
              </p>
              <div className="flex justify-center">
                <button 
                  onClick={() => setIsContactModalOpen(true)} 
                  className="cyber-button"
                >
                  CONTACT ME
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Info Section */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card">
              <h3 className="text-cyber-yellow text-xl font-bold mb-4 font-cyber">Education</h3>
              <p className="text-gray-300">
                Stevens Institute of Technology
                <br />
                BS in Computer Science
                <br />
                Class of 2026
              </p>
            </div>
            <div className="cyber-card">
              <h3 className="text-cyber-yellow text-xl font-bold mb-4 font-cyber">Experience</h3>
              <p className="text-gray-300">
                Software Engineer Intern
                <br />
                Genforce-SW Automation
                <br />
                Aug 2024 - Mar 2025
              </p>
            </div>
            <div className="cyber-card">
              <h3 className="text-cyber-yellow text-xl font-bold mb-4 font-cyber">Skills</h3>
              <p className="text-gray-300">
                Java • Python • JavaScript
                <br />
                React • Node.js • Docker
                <br />
                And many more...
              </p>
            </div>
          </div>
        </section>
      </div>

      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </main>
  );
} 