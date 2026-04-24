'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const HIGHLIGHTS = ["Sports Branding", "Full-Stack", "Physiolab"];

export default function AnimatedBio() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [loading, setLoading] = useState(0);
  const [showText, setShowText] = useState(false);
  const [displayText, setDisplayText] = useState('');

  const fullText = "An independent designer and creative engineer based in Surabaya, Indonesia. I don’t just create visuals; I build scalable digital ecosystems. With 6+ years of experience in high-performance Sports Branding and social media dynamics, I bridge the gap between raw athletic energy and systematic code. From conceptualizing 3D apparel textures to architecting Full-Stack digital archives, my work is a collision of precision, speed, and functional chaos.";

  useEffect(() => {
    if (isInView) {
      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += 2;
        setLoading(currentProgress);
        if (currentProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => setShowText(true), 500);
        }
      }, 30);
      return () => clearInterval(interval);
    }
  }, [isInView]);

  useEffect(() => {
    if (showText) {
      let iteration = 0;
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ_@#*';
      const interval = setInterval(() => {
        setDisplayText(
          fullText
            .split('')
            .map((char, index) => {
              if (index < iteration) return fullText[index];
              if (fullText[index] === ' ') return ' ';
              return characters.charAt(Math.floor(Math.random() * characters.length));
            })
            .join('')
        );

        if (iteration >= fullText.length) clearInterval(interval);
        iteration += fullText.length / 50;
      }, 40);
      return () => clearInterval(interval);
    }
  }, [showText]);

  const renderHighlightedText = (text: string) => {
    let result: (string | JSX.Element)[] = [text];
    HIGHLIGHTS.forEach(keyword => {
      const newResult: (string | JSX.Element)[] = [];
      result.forEach(part => {
        if (typeof part === 'string') {
          const parts = part.split(new RegExp(`(${keyword})`, 'gi'));
          parts.forEach((p, i) => {
            if (p.toLowerCase() === keyword.toLowerCase()) {
              newResult.push(<span key={keyword + i} className="text-accent font-bold">{p}</span>);
            } else if (p) {
              newResult.push(p);
            }
          });
        } else {
          newResult.push(part);
        }
      });
      result = newResult;
    });
    return result;
  };

  return (
    <div ref={containerRef} className="relative py-20 min-h-[400px]">
      {/* Coordinate Tags */}
      <div className="absolute top-0 left-0 font-mono text-[8px] text-white/40">LAT: -7.2504</div>
      <div className="absolute top-0 right-0 font-mono text-[8px] text-white/40">LONG: 112.7688</div>
      <div className="absolute bottom-0 left-0 font-mono text-[8px] text-white/40">ALT: 12.0M</div>
      <div className="absolute bottom-0 right-0 font-mono text-[8px] text-white/40">LOC: SUB_IDN</div>

      {isInView && !showText && (
        <div className="flex flex-col items-center justify-center h-full gap-4">
          <div className="w-64 h-[1px] bg-white/10 relative overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${loading}%` }}
              className="absolute h-full bg-accent"
            />
          </div>
          <div className="font-mono text-[10px] tracking-[0.3em] text-accent">
            [ LOADING_BIO... {loading}% ]
          </div>
        </div>
      )}

      {showText && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl md:text-2xl text-white leading-relaxed font-light font-mono"
        >
          {renderHighlightedText(displayText)}
        </motion.div>
      )}
    </div>
  );
}
