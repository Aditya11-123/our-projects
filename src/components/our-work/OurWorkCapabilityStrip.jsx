import React from 'react';
import Container from '../common/Container';
import { Monitor, Smartphone, Database, TrendingUp } from 'lucide-react';

export default function OurWorkCapabilityStrip() {
  const capabilities = [
    { num: "03", title: "WEB", desc: "Projects", icon: <Monitor size={20} /> },
    { num: "01", title: "MOBILE", desc: "Project", icon: <Smartphone size={20} /> },
    { num: "01", title: "BUSINESS SYSTEMS", desc: "Proposed Solution", icon: <Database size={20} /> },
    { num: "04", title: "DIGITAL GROWTH", desc: "Projects & Concepts", icon: <TrendingUp size={20} /> }
  ];

  return (
    <div className="bg-transparent py-8 border-b border-white/10 relative z-20">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-white/10">
          {capabilities.map((cap, idx) => (
            <div key={idx} className={`flex items-center gap-4 group cursor-default ${idx !== 0 ? 'pl-8' : ''}`}>
              <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                {cap.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-display font-bold text-brand-primary leading-none mb-1">
                  {cap.num}
                </span>
                <span className="text-[10px] font-bold tracking-widest text-white uppercase">
                  {cap.title}
                </span>
                <span className="text-[10px] text-blue-100/50">
                  {cap.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
