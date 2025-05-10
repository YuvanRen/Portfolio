'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-cyber-black border-t border-cyber-blue/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-cyber-yellow font-cyber text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-cyber-yellow transition-colors duration-300 font-mono-cyber">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-cyber-yellow transition-colors duration-300 font-mono-cyber">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-gray-300 hover:text-cyber-yellow transition-colors duration-300 font-mono-cyber">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/education" className="text-gray-300 hover:text-cyber-yellow transition-colors duration-300 font-mono-cyber">
                  Education
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-cyber-yellow font-cyber text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 font-mono-cyber">
                <span className="text-cyber-blue">Email:</span> yuvan.rengifo@stevens.edu
              </li>
              <li className="text-gray-300 font-mono-cyber">
                <span className="text-cyber-blue">Phone:</span> (201) 665-5833
              </li>
              <li className="text-gray-300 font-mono-cyber">
                <span className="text-cyber-blue">Location:</span> Hoboken, NJ
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-cyber-yellow font-cyber text-lg mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://github.com/YuvanRen" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyber-yellow transition-colors duration-300 font-mono-cyber"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/yuvan-rengifo-178925256/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyber-yellow transition-colors duration-300 font-mono-cyber"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-cyber-blue/20">
          <p className="text-center text-gray-400 font-mono-cyber text-sm">
            © {new Date().getFullYear()} Yuvan Rengifo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 