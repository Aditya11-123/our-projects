import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-24 bg-[#0B1220] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#2563EB33_0%,_transparent_70%)]"></div>
      
      <Container className="relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-sm font-bold uppercase tracking-widest text-brand-cyan mb-4">Ready To Start?</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight leading-[1.1]">
            Have a Business Requirement?
          </h3>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Tell us what you're trying to build, improve or automate. We'll help you identify the right solution.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-brand-primary text-white font-bold rounded-xl hover:bg-brand-primaryHover transition-colors shadow-sm inline-flex items-center justify-center gap-2">
              Request a Project Discussion <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 hover:border-white/40 transition-colors inline-flex items-center justify-center backdrop-blur-sm shadow-sm">
              Get a Custom Proposal
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
