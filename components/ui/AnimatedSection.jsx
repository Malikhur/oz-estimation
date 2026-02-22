'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

export default function AnimatedSection({ children, className = '', delay = 0, direction = 'up' }) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef(null);

  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  const dir = directions[direction] || directions.up;

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...dir }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
