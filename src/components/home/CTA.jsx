import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-1 bg-[#0B1220] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#2563EB33_0%,_transparent_70%)]"></div>
      
      <Container className="relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Have a Business Challenge? <br/>
            <span className="text-brand-primary">Let's Build Something That Matters.</span>
          </h2>
          <p className="text-lg text-slate-400 mb-10">
            Talk to our engineering team today to see how we can design and build a custom solution for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-brand-primary text-white font-bold uppercase tracking-wider rounded-xl hover:bg-brand-primaryHover transition-colors shadow-none inline-flex items-center justify-center gap-2 border-2 border-brand-primary">
              Start a Conversation <ArrowRight size={18} />
            </Link>
            <Link to="/our-work" className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-bold uppercase tracking-wider rounded-xl hover:bg-gray-100 transition-colors shadow-none">
              Explore Our Work
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
