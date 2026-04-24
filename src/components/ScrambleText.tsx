'use client';

import { motion, useInView } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

interface ScrambleTextProps {
  text: string;
  className?: string;
  duration?: number;
  triggerOnce?: boolean;
}

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+<>?/';

export default function ScrambleText({ 
  text, 
  className = "", 
  duration = 0.4,
  triggerOnce = true 
}: ScrambleTextProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: triggerOnce, amount: 0.5 });
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);

  useEffect(() => {
    if (isInView && !isScrambling) {
      scramble();
    }
  }, [isInView]);

  const scramble = () => {
    setIsScrambling(true);
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (index < iteration) return text[index];
            if (text[index] === ' ') return ' ';
            return CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length));
          })
          .join('')
      );

      if (iteration >= text.length) {
        clearInterval(interval);
        setIsScrambling(false);
      }

      iteration += text.length / (duration * 20); // Adjust speed based on duration
    }, 30);
  };

  return (
    <span ref={containerRef} className={className}>
      {displayText}
    </span>
  );
}
