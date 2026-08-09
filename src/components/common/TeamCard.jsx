import React, { useState } from 'react';
import BaseCard from './BaseCard';
import { MapPin, Briefcase } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';

export default function TeamCard({ member }) {
  const [imgError, setImgError] = useState(false);

  return (
    <BaseCard noPadding className="group hover:border-primary/40 text-left">
      <div className="relative aspect-square w-full overflow-hidden bg-black/40">
        <picture>
          <source srcSet={member.image.replace('.jpg', '.avif')} type="image/avif" />
          <source srcSet={member.image.replace('.jpg', '.webp')} type="image/webp" />
          <img
            src={imgError ? `https://api.dicebear.com/7.x/initials/svg?seed=${member.name}` : member.image}
            alt={member.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-card-base via-transparent to-transparent opacity-90" />
        
        {/* Availability Badge */}
        <span className={`absolute top-4 left-4 text-[9px] font-bold px-2 py-0.5 rounded-md tracking-wider uppercase border ${
          member.availability === 'Available' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-orange-500/10 text-orange-400 border-orange-500/20'
        }`}>
          {member.availability}
        </span>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-display font-extrabold uppercase italic tracking-wide group-hover:text-primary transition-colors">
              {member.name}
            </h3>
            <p className="text-xs text-primary font-bold uppercase tracking-wider">{member.role}</p>
          </div>
          <div className="flex gap-2">
            <a href={member.githubUrl} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
              <GithubIcon size={16} />
            </a>
            <a href={member.linkedinUrl} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
              <LinkedinIcon size={16} />
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-[10px] text-text-secondary mt-4 mb-5 border-y border-border-dark py-3">
          <span className="flex items-center gap-1"><MapPin size={12} className="text-primary"/> {member.location}</span>
          <span className="flex items-center gap-1"><Briefcase size={12} className="text-primary"/> {member.experience}</span>
        </div>

        <div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Specialization</div>
          <div className="text-sm font-medium text-gray-200 mb-4">{member.specialization}</div>
          
          <div className="flex flex-wrap gap-1.5">
            {member.languages.map(lang => (
              <span key={lang} className="text-[10px] bg-white/5 border border-border-dark px-2 py-1 rounded-md text-gray-300">
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </BaseCard>
  );
}
