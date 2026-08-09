import React from 'react';
import { motion } from 'framer-motion';
import { hoverCard } from '../../animations/hoverCard';

export default function BaseCard({ children, className = '', noPadding = false, ...props }) {
  return (
    <motion.div
      {...hoverCard}
      className={`bg-card-base border border-border-dark rounded-2xl overflow-hidden shadow-card hover:shadow-cardHover transition-all duration-300 ${!noPadding ? 'p-6 md:p-8' : ''} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
