'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/' || pathname.startsWith('/archive/');
    }
    return pathname.startsWith(path);
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const element = document.getElementById('project-list');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If not on the home page, redirect to home with hash
      window.location.href = '/#project-list';
    }
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-6 border-b border-white/10 uppercase font-mono text-xs tracking-widest bg-white/[0.03] backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
      <div className="text-accent font-bold">
        RIZKY DIAS / SYSTEM_V1.0
      </div>
      
      <div className="flex gap-8 items-center">
        <Link 
          href="/" 
          className={`hover:text-accent transition-colors relative group ${isActive('/') ? 'text-accent' : ''}`}
        >
          ARCHIVE
          {isActive('/') && (
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent" />
          )}
        </Link>
        <Link 
          href="/projects" 
          className={`hover:text-accent transition-colors relative group ${isActive('/projects') ? 'text-accent' : ''}`}
        >
          PROJECT_LIST
          {isActive('/projects') && (
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent" />
          )}
        </Link>
        <Link 
          href="/about" 
          className={`hover:text-accent transition-colors relative group ${isActive('/about') ? 'text-accent' : ''}`}
        >
          ABOUT
          {isActive('/about') && (
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent" />
          )}
        </Link>
      </div>
      
      <Link 
        href="#" 
        className="bg-accent text-black px-4 py-2 font-bold hover:bg-white transition-colors"
      >
        INQUIRE_NOW
      </Link>
    </nav>
  );
}
