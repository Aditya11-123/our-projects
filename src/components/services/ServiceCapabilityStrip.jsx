import React from 'react';
import Container from '../common/Container';

export default function ServiceCapabilityStrip() {
  const capabilities = [
    "WEB DEVELOPMENT",
    "ERP SOLUTIONS",
    "MOBILE APPLICATIONS",
    "DIGITAL MARKETING"
  ];

  return (
    <div className="bg-[#0B1220] py-4 border-b border-white/5">
      <Container>
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
          {capabilities.map((cap, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <span className="text-xs md:text-sm font-bold tracking-widest text-white/80 uppercase">
                {cap}
              </span>
              {idx < capabilities.length - 1 && (
                <span className="text-brand-primary/50 text-xl leading-none hidden md:block">•</span>
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
