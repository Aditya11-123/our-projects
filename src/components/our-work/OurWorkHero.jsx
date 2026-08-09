import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import { ArrowRight, Monitor, Smartphone, Database, TrendingUp, Building2 } from 'lucide-react';

export default function OurWorkHero() {
  return (
    <section className="relative pt-8 pb-8 md:pt-12 md:pb-12 bg-white overflow-hidden">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="max-w-xl">
            <div className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-primary">
              OUR WORK
            </div>
            
            <h1 className="text-5xl lg:text-[4rem] font-display font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight">
              Digital Solutions We've <span className="text-brand-primary">Built</span> & <span className="text-brand-primary">Designed.</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-lg">
              Explore our websites, mobile applications, business solution concepts and digital growth capabilities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center px-7 py-3.5 bg-brand-primary text-white font-medium rounded-xl hover:bg-brand-primaryHover transition-colors shadow-sm">
                Discuss Your Project <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link to="/services" className="inline-flex items-center justify-center px-7 py-3.5 bg-white border border-gray-300 text-gray-800 font-medium rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-colors shadow-sm">
                Explore Our Services
              </Link>
            </div>
          </div>

          {/* Right Visual Ecosystem */}
          <div className="relative hidden lg:flex justify-center items-center h-[360px] w-full mt-10 lg:mt-0">
            {/* Connecting lines */}
            <svg className="absolute inset-0 w-full h-full z-0" pointerEvents="none" viewBox="0 0 600 360" preserveAspectRatio="xMidYMid meet">
               {/* Lines connecting center to the 4 cards */}
               <path d="M 300 180 L 150 90" stroke="#BFDBFE" strokeWidth="2" strokeDasharray="4 4" />
               <path d="M 300 180 L 150 270" stroke="#BFDBFE" strokeWidth="2" strokeDasharray="4 4" />
               <path d="M 300 180 L 450 90" stroke="#BFDBFE" strokeWidth="2" strokeDasharray="4 4" />
               <path d="M 300 180 L 450 270" stroke="#BFDBFE" strokeWidth="2" strokeDasharray="4 4" />
            </svg>
            
            {/* Center Node */}
            <div className="absolute z-30 w-36 h-36 bg-[#0B1220] rounded-3xl shadow-2xl flex flex-col items-center justify-center p-4 text-center text-white border-4 border-white">
              <Building2 className="w-10 h-10 mb-2 text-brand-cyan" strokeWidth={1.5} />
              <h3 className="font-display font-bold text-sm tracking-widest uppercase">Business</h3>
            </div>

            {/* Top Left Card */}
            <div className="absolute z-20 top-2 left-0 w-44 bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] p-4 border border-gray-100 flex flex-col">
              <Monitor size={20} className="text-brand-primary mb-2" />
              <h4 className="font-bold text-gray-900 text-[11px] uppercase tracking-wider mb-1">Website</h4>
              <p className="text-[9px] text-gray-500 leading-tight">Modern websites that represent your brand.</p>
            </div>

            {/* Bottom Left Card */}
            <div className="absolute z-20 bottom-2 left-0 w-44 bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] p-4 border border-gray-100 flex flex-col">
              <Smartphone size={20} className="text-brand-primary mb-2" />
              <h4 className="font-bold text-gray-900 text-[11px] uppercase tracking-wider mb-1">Mobile</h4>
              <p className="text-[9px] text-gray-500 leading-tight">Mobile apps that enhance user experience.</p>
            </div>

            {/* Top Right Card */}
            <div className="absolute z-20 top-2 right-0 w-44 bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] p-4 border border-gray-100 flex flex-col">
              <Database size={20} className="text-brand-primary mb-2" />
              <h4 className="font-bold text-gray-900 text-[11px] uppercase tracking-wider mb-1">ERP</h4>
              <p className="text-[9px] text-gray-500 leading-tight">Business systems that streamline operations.</p>
            </div>

            {/* Bottom Right Card */}
            <div className="absolute z-20 bottom-2 right-0 w-44 bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] p-4 border border-gray-100 flex flex-col">
              <TrendingUp size={20} className="text-brand-primary mb-2" />
              <h4 className="font-bold text-gray-900 text-[11px] uppercase tracking-wider mb-1">Digital Growth</h4>
              <p className="text-[9px] text-gray-500 leading-tight">Strategies that drive measurable growth.</p>
            </div>
            
          </div>
        </div>
      </Container>
    </section>
  );
}
