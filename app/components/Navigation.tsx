'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Education', path: '/education' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-cyber-black/90 backdrop-blur-md border-b border-cyber-blue/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="cyber-glitch text-cyber-yellow text-xl font-bold">
              YR
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`nav-link ${
                    pathname === item.path ? 'text-cyber-blue' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/yuvan-rengifo-178925256/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyber-yellow hover:text-cyber-blue transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/YuvanRen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyber-yellow hover:text-cyber-blue transition-colors duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 