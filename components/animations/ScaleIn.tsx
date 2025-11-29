'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScaleInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  duration?: number;
}

/**
 * ScaleIn animation component
 * Animates children with scale and fade effect
 */
export default function ScaleIn({
  children,
  delay = 0,
  className = '',
  duration = 0.5,
}: ScaleInProps) {
  return (
    <motion.div
      initial={{
        scale: 0.8,
        opacity: 0,
      }}
      whileInView={{
        scale: 1,
        opacity: 1,
      }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration,
        delay,
        ease: [0.6, -0.05, 0.01, 0.99],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
