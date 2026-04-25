'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/' || pathname.startsWith('/archive/');
    }
    return pathname.startsWith(path);
  };

  const navLinks = [
    { name: 'ARCHIVE', path: '/' },
    { name: 'PROJECT_LIST', path: '/projects' },
    { name: 'ABOUT', path: '/about' },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-8 py-4 md:py-6 border-b border-white/10 uppercase font-mono text-xs tracking-widest bg-black/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
        <div className="text-accent font-bold">
          RIZKY DIAS / SYSTEM_V1.0
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              href={link.path} 
              className={`hover:text-accent transition-colors relative group ${isActive(link.path) ? 'text-accent' : ''}`}
            >
              {link.name}
              {isActive(link.path) && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent" />
              )}
            </Link>
          ))}
        </div>
        
        <div className="flex items-center gap-4">
          <Link 
            href="#" 
            className="hidden sm:block bg-accent text-black px-4 py-2 font-bold hover:bg-white transition-colors text-[10px] md:text-xs"
          >
            INQUIRE_NOW
          </Link>
          
          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <motion.span 
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white block" 
            />
            <motion.span 
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-white block" 
            />
            <motion.span 
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white block" 
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-black flex flex-col items-center justify-center gap-12 font-mono text-2xl tracking-[0.2em]"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-accent text-sm"
            >
              [ CLOSE_SYSTEM ]
            </button>
            
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`hover:text-accent transition-colors ${isActive(link.path) ? 'text-accent' : 'text-white'}`}
              >
                {link.name}
              </Link>
            ))}
            
            <Link 
              href="#" 
              onClick={() => setIsOpen(false)}
              className="mt-8 bg-accent text-black px-8 py-4 font-bold text-sm"
            >
              INQUIRE_NOW
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
