'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { projects } from '@/data/projects';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function ProjectList() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  
  const [visibleCount, setVisibleCount] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const PROJECTS_PER_PAGE = 10;
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  
  // Logic: 
  // If on page 1 and visibleCount < 10, show visibleCount projects.
  // If on page 1 and visibleCount >= 10, show 10.
  // If on page > 1, show projects for that page.
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const endIndex = currentPage === 1 ? Math.min(visibleCount, 10) : startIndex + PROJECTS_PER_PAGE;
  const visibleProjects = projects.slice(startIndex, endIndex);
  
  const hasMore = visibleCount < 10 && currentPage === 1;
  const canSeeLess = visibleCount > 5 && currentPage === 1;

  const loadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount(10);
      setIsLoading(false);
    }, 600);
  };

  const seeLess = () => {
    setVisibleCount(5);
  };

  const changePage = (dir: 'next' | 'prev') => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentPage(prev => dir === 'next' ? Math.min(prev + 1, totalPages) : Math.max(prev - 1, 1));
      setVisibleCount(10);
      setIsLoading(false);
    }, 500);
  };

  return (
    <section 
      id="project-list" 
      className="px-8 border-b border-white/10 scroll-mt-24 relative"
    >
      {/* Pagination Header */}
      {projects.length > 10 && (
        <div className="flex justify-between items-center py-8 border-b border-white/10">
          <div className="font-mono text-[10px] tracking-widest text-white/40">
            PAGE_{currentPage.toString().padStart(2, '0')} // TOTAL_{totalPages.toString().padStart(2, '0')}
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => changePage('prev')}
              disabled={currentPage === 1 || isLoading}
              className={`p-2 border border-white/10 hover:border-accent transition-colors font-mono disabled:opacity-20`}
            >
              ←
            </button>
            <button 
              onClick={() => changePage('next')}
              disabled={currentPage === totalPages || isLoading}
              className={`p-2 border border-white/10 hover:border-accent transition-colors font-mono disabled:opacity-20`}
            >
              →
            </button>
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage + visibleCount}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link 
                href={`/archive/${project.id}`}
                className="group flex flex-col md:flex-row md:items-center border-b border-white/10 last:border-b-0 py-10 md:py-16 hover:bg-white/[0.02] transition-colors cursor-pointer relative z-10 gap-6 md:gap-0"
              >
                <div className="w-20 font-mono text-[10px] text-white/40 group-hover:text-accent transition-colors">
                  [ {project.index} ]
                </div>
                
                <div className="flex-1">
                  <h3 className="text-3xl md:text-7xl font-black uppercase tracking-tighter group-hover:translate-x-4 group-hover:text-accent transition-all duration-500 max-w-2xl break-words">
                    {project.title}
                  </h3>
                </div>
                
                <div className="w-full md:w-64 font-mono text-[10px] tracking-widest flex flex-col gap-2">
                  <div className="flex justify-between border-b border-white/10 pb-1 group-hover:border-accent/30 transition-colors">
                    <span className="text-white/40 font-bold">CLIENT</span>
                    <span className="text-right uppercase text-white/80 group-hover:text-accent transition-colors">{project.client}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-1 group-hover:border-accent/30 transition-colors">
                    <span className="text-white/40 font-bold">TYPE</span>
                    <span className="text-right uppercase text-white/80 group-hover:text-accent transition-colors">{project.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40 font-bold">YEAR</span>
                    <span className="text-right text-white/80 group-hover:text-accent transition-colors">{project.year}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
      
      <div className="flex justify-center gap-4 py-20">
        {hasMore && (
          isHome ? (
            <Link 
              href="/projects"
              className="px-10 py-3 border border-white/20 font-mono text-[10px] tracking-[0.3em] uppercase hover:bg-accent hover:text-black hover:border-accent transition-all inline-block"
            >
              VIEW_ALL_CATALOGUE_
            </Link>
          ) : (
            <button 
              onClick={loadMore}
              disabled={isLoading}
              className={`px-10 py-3 border border-white/20 font-mono text-[10px] tracking-[0.3em] uppercase transition-all ${
                isLoading ? 'bg-white/5 text-white/20' : 'hover:bg-accent hover:text-black hover:border-accent'
              }`}
            >
              {isLoading ? (
                <motion.span
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 0.2, repeat: Infinity }}
                >
                  [ SYNCING_DATABASE... ]
                </motion.span>
              ) : (
                'LOAD_MORE_DATA_'
              )}
            </button>
          )
        )}
        
        {canSeeLess && !isLoading && (
          <button 
            onClick={seeLess}
            className="px-10 py-3 border border-white/20 font-mono text-[10px] tracking-[0.3em] uppercase hover:bg-red-500 hover:text-white hover:border-red-500 transition-all"
          >
            SEE_LESS_DATA_
          </button>
        )}
      </div>
    </section>
  );
}
