import React, { useState } from 'react';
import BaseCard from './BaseCard';
import { ArrowUpRight, Calendar, Users } from 'lucide-react';

export default function ProjectCard({ project }) {
  const [imgError, setImgError] = useState(false);

  return (
    <BaseCard noPadding className="flex flex-col h-full group hover:border-primary/40 bg-[#0A0A0E] overflow-hidden rounded-2xl">
      {/* Thumbnail area */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/40">
        <picture>
          <source srcSet={project.thumbnail.replace('.jpg', '.avif')} type="image/avif" />
          <source srcSet={project.thumbnail.replace('.jpg', '.webp')} type="image/webp" />
          <img
            src={imgError ? 'https://picsum.photos/seed/fallback/800/450' : project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0E] via-transparent to-transparent opacity-100" />
        
        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-[#0A0A0E]/80 text-white border border-white/10 text-[9px] font-bold px-3 py-1 rounded-full tracking-wider backdrop-blur-md">
          {project.category}
        </span>
        
        {/* Status Badge */}
        <span className={`absolute top-3 right-3 text-[9px] font-bold px-3 py-1 rounded-full tracking-wider border backdrop-blur-md ${
          project.status === 'Completed' 
            ? 'text-green-500 bg-green-500/10 border-green-500/20' 
            : 'text-orange-500 bg-orange-500/10 border-orange-500/20'
        }`}>
          {project.status}
        </span>
      </div>

      <div className="p-4 flex flex-col flex-grow text-left">
        {/* Title and Icon */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-base font-display font-extrabold text-white group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <ArrowUpRight size={16} className="text-primary" />
        </div>

        {/* Tech Chips */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 3).map(tech => (
            <span key={tech} className="flex items-center gap-1.5 text-[9px] bg-white/5 border border-white/5 px-2.5 py-1 rounded-full text-gray-300">
              <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
              {tech}
            </span>
          ))}
        </div>

        {/* Meta Info */}
        <div className="flex items-center text-[10px] text-gray-400 gap-3 mt-auto pt-4 border-t border-white/5">
          <span className="flex items-center gap-1.5"><Users size={12} /> {project.teamSize} Developers</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span className="flex items-center gap-1.5"><Calendar size={12} /> {project.duration}</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>{project.year}</span>
        </div>
      </div>
    </BaseCard>
  );
}
