'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SKILLS = [
  'SPORTS_BRANDING',
  'MOTION_SYSTEMS',
  'SOCIAL_ENGAGEMENT',
  'FULL_STACK_DEV',
  'REMOTION_ANIMATION',
  'ASSET_MANAGEMENT'
];

export default function MatrixOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');

  // Matrix Rain Logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@&*%';
    const fontSize = 10;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = new Array(columns).fill(1);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#E2FF0011'; // Even lower opacity lime (approx 6%)
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resize);
    };
  }, []);

  // Decoding/Scrambled Text Logic
  useEffect(() => {
    const targetText = SKILLS[currentSkillIndex];
    let iteration = 0;
    let interval: NodeJS.Timeout;

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_';

    interval = setInterval(() => {
      setDisplayText(
        targetText
          .split('')
          .map((char, index) => {
            if (index < iteration) {
              return targetText[index];
            }
            return characters.charAt(Math.floor(Math.random() * characters.length));
          })
          .join('')
      );

      if (iteration >= targetText.length) {
        clearInterval(interval);
        setTimeout(() => {
          setCurrentSkillIndex((prev) => (prev + 1) % SKILLS.length);
        }, 3000);
      }

      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, [currentSkillIndex]);

  return (
    <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full"
      />
      
      <div className="absolute inset-0 flex items-start justify-end p-4">
        <div className="relative">
          <div className="font-mono text-[8px] text-accent/50 mb-1 tracking-[0.2em]">
            [ SCAN_0{currentSkillIndex + 1}: STATUS_ANALYZING ]
          </div>
          <div className="font-mono text-xs md:text-sm font-bold text-accent tracking-widest drop-shadow-[0_0_8px_rgba(226,255,0,0.4)]">
            {displayText}
          </div>
          
          {/* Scanning Line UI */}
          <motion.div 
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="absolute left-0 right-0 h-[1px] bg-accent/40 shadow-[0_0_5px_#E2FF00]"
          />
        </div>
      </div>
    </div>
  );
}
