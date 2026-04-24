'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import MatrixOverlay from './MatrixOverlay';

export default function Hero() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yIntro = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const yLabel = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={targetRef} className="px-8 py-20 border-b border-white/10 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 z-10">
          <motion.div style={{ y: yLabel }} className="flex flex-col gap-4 mb-8">
            <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em]">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              <span className="text-accent">INDEX_001 // SELECT WORKS</span>
            </div>
            <div className="font-mono text-[9px] tracking-[0.3em] text-white/30 uppercase">
              [ SPECIALIZATION: SPORTS & SOCIAL MEDIA CONTENT ]
            </div>
          </motion.div>
          
          <motion.h1 style={{ y: yText }} className="text-huge font-black uppercase mb-12 leading-none">
            THE<br />WORKS<br /><span className="text-accent">023/026</span>
          </motion.h1>

          <motion.div style={{ y: yIntro }} className="max-w-xl mb-20">
            <p className="text-lg text-white/60 leading-relaxed font-light font-mono italic">
              "Independent designer specializing in high-performance sports branding and social media ecosystems. Merging raw athletic energy with systematic digital archives."
            </p>
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative h-[600px] lg:h-[750px] flex items-center justify-center">
          <motion.div 
            style={{ y }}
            className="relative w-full h-full border border-white/10 overflow-hidden group"
          >
            <div className="relative w-full h-full">
              <Image 
                src="/portfolio_portrait_brutalist_1776970124737.png" 
                alt="Portrait" 
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Matrix Overlay */}
            <MatrixOverlay />
          </motion.div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-20 h-20 border-t border-r border-accent z-30"></div>
          <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b border-l border-accent z-30"></div>
        </div>
      </div>
      
      <div className="flex justify-between font-mono text-[10px] tracking-[0.2em] uppercase text-white/50 mt-20">
        <span>[ 12 PROJECTS ]</span>
        <span>[ UPDATED_2024 ]</span>
      </div>
    </section>
  );
}
