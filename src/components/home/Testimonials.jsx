import React from 'react';
import Container from '../common/Container';
import { MessageSquare } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-1 bg-transparent border-t border-white/10">
      <Container>
        <div className="max-w-4xl mx-auto bg-[#0B1220] rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-brand-cyan mx-auto mb-8 backdrop-blur-sm border border-white/10">
              <MessageSquare size={32} />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Client-Centered Development
            </h2>
            
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
              We don't just write code. We partner with our clients to understand their business deeply, ensuring every technical decision aligns with their long-term growth and operational needs. Communication, transparency, and delivery are our core values.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold text-slate-400">
              <span className="bg-white/5 px-4 py-2 rounded-full border border-white/10">Transparent Reporting</span>
              <span className="bg-white/5 px-4 py-2 rounded-full border border-white/10">Dedicated Account Managers</span>
              <span className="bg-white/5 px-4 py-2 rounded-full border border-white/10">Long-Term Support</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
