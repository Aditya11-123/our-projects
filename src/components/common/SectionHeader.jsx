import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../../animations/fadeUp';

export default function SectionHeader({ title, heading, description, align = 'center' }) {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto'
  };

  const alignClass = alignmentClasses[align] || alignmentClasses.center;

  return (
    <motion.div 
      {...fadeUp}
      className={`flex flex-col mb-12 md:mb-16 max-w-2xl ${alignClass}`}
    >
      <div className="flex items-center gap-4 w-full mb-3">
        {align === 'center' && <div className="h-[1px] bg-gradient-to-r from-transparent to-white/10 flex-grow" />}
        <span className="text-[10px] uppercase font-display font-black tracking-[0.2em] text-primary">
          {title}
        </span>
        {align === 'center' && <div className="h-[1px] bg-gradient-to-l from-transparent to-white/10 flex-grow" />}
      </div>
      
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold uppercase italic tracking-wide text-white mb-4">
        {heading}
      </h2>
      
      {description && (
        <p className="text-gray-400 text-sm leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
