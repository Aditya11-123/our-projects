import React from 'react';
import BaseCard from './BaseCard';
import * as Icons from 'lucide-react';

export default function StatCard({ icon, value, label, description }) {
  const Icon = Icons[icon] || Icons.Award;

  return (
    <BaseCard className="flex flex-col items-center justify-center text-center !p-8 group hover:border-primary/40 h-full">
      <div className="flex items-center justify-center gap-4 mb-5">
        <div className="w-12 h-12 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
          <Icon size={20} strokeWidth={2} />
        </div>
        <div className="text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
          {value}
        </div>
      </div>
      <div className="text-xs font-display font-bold uppercase tracking-widest text-white mb-2">
        {label}
      </div>
      <div className="text-[11px] text-text-secondary leading-relaxed max-w-[200px]">
        {description}
      </div>
    </BaseCard>
  );
}
