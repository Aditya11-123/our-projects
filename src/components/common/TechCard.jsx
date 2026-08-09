import React from 'react';
import BaseCard from './BaseCard';
import { Layers, Database, Cloud, Cpu } from 'lucide-react';

const ICON_MAP = {
  Layers: Layers,
  Database: Database,
  Cloud: Cloud,
  Cpu: Cpu
};

export default function TechCard({ data }) {
  const Icon = ICON_MAP[data.icon] || Layers;

  return (
    <BaseCard className="group hover:border-primary/40 flex flex-col text-left">
      <div className="flex items-center justify-between border-b border-border-dark pb-4 mb-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
            <Icon size={20} />
          </div>
          <h3 className="text-lg font-display font-extrabold uppercase tracking-wide">{data.category}</h3>
        </div>
        <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider border border-border-dark px-2 py-1 rounded-md bg-white/5">
          {data.projectCount}
        </span>
      </div>

      <div className="flex flex-col gap-4">
        {data.stack.map(tech => (
          <div key={tech.name} className="flex flex-col gap-1">
            <div className="flex justify-between text-xs font-medium">
              <span className="text-gray-200">{tech.name}</span>
              <span className="text-primary">{tech.expertise}% Expertise</span>
            </div>
            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary rounded-full transition-all duration-1000 origin-left"
                style={{ width: `${tech.expertise}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </BaseCard>
  );
}
