import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import { ArrowRight, Monitor, Smartphone, Users, TrendingUp } from 'lucide-react';

export default function OurWorkCTA() {
  return (
    <section className="py-1 bg-[#0B1220] border-t border-[#1e293b] scroll-mt-[100px]">
      <Container>
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 leading-tight">
            Have a Business Requirement?
          </h2>
          <p className="text-gray-400 text-sm mb-10 max-w-lg">
            Whether you need a website, mobile application, business system or digital growth strategy, let's discuss what you are trying to build.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3.5 bg-brand-primary text-white font-bold text-sm rounded-xl hover:bg-brand-primaryHover transition-colors shadow-sm">
              Discuss Your Project <ArrowRight size={16} className="ml-2" />
            </Link>
            <Link to="/services" className="inline-flex items-center justify-center px-8 py-3.5 bg-transparent border border-gray-700 text-white font-bold text-sm rounded-xl hover:bg-gray-800 transition-colors shadow-sm">
              Explore Our Services
            </Link>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-8 text-[10px] font-bold text-blue-100/50 tracking-wider">
            <div className="flex items-center gap-2"><Monitor size={14} className="text-gray-400"/> Websites</div>
            <div className="flex items-center gap-2"><Smartphone size={14} className="text-gray-400"/> Mobile Apps</div>
            <div className="flex items-center gap-2"><Users size={14} className="text-gray-400"/> ERP Solutions</div>
            <div className="flex items-center gap-2"><TrendingUp size={14} className="text-gray-400"/> Digital Growth</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
