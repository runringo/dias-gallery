'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function GridBackground() {
  const { scrollY } = useScroll();
  
  // Subtle parallax effect: move grid 1px for every 5px scrolled
  const y = useTransform(scrollY, [0, 1000], [0, -200]);

  return (
    <motion.div 
      style={{ 
        y,
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '12.5% 100px'
      }}
      className="fixed inset-0 pointer-events-none z-[-1] h-[200vh] w-full"
    />
  );
}
