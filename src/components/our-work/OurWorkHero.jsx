import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import { ArrowRight, Monitor, Smartphone, Database, TrendingUp, Building2 } from 'lucide-react';

export default function OurWorkHero() {
  return (
    <section className="relative pt-1 pt-1 md:pt-1 md:pt-1 bg-transparent overflow-hidden">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            className="max-w-xl"
          >
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-primary"
            >
              OUR WORK
            </motion.div>
            
            <motion.h1 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="text-5xl lg:text-[4rem] font-display font-bold text-white leading-[1.1] mb-6 tracking-tight"
            >
              Digital Solutions We've <span className="text-brand-primary">Built</span> & <span className="text-brand-primary">Designed.</span>
            </motion.h1>
            
            <motion.p 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="text-lg text-blue-100/70 mb-10 leading-relaxed max-w-lg"
            >
              Explore our websites, mobile applications, business solution concepts and digital growth capabilities.
            </motion.p>
            
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/contact" className="inline-flex items-center justify-center px-7 py-3.5 bg-brand-primary text-white font-medium rounded-xl hover:bg-brand-primaryHover transition-colors shadow-sm">
                Discuss Your Project <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link to="/services" className="inline-flex items-center justify-center px-7 py-3.5 bg-transparent border border-white/20 text-gray-100 font-medium rounded-xl hover:border-gray-400 hover:bg-transparent transition-colors shadow-sm">
                Explore Our Services
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Visual Ecosystem */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
            }}
            className="relative hidden lg:flex justify-center items-center h-[360px] w-full mt-10 lg:mt-0"
          >
            {/* Connecting lines */}
            <svg className="absolute inset-0 w-full h-full z-0" pointerEvents="none" viewBox="0 0 600 360" preserveAspectRatio="xMidYMid meet">
               {/* Lines connecting center to the 4 cards */}
               <path d="M 300 180 L 150 90" stroke="#BFDBFE" strokeWidth="2" strokeDasharray="4 4" className="opacity-20" />
               <path d="M 300 180 L 150 270" stroke="#BFDBFE" strokeWidth="2" strokeDasharray="4 4" className="opacity-20" />
               <path d="M 300 180 L 450 90" stroke="#BFDBFE" strokeWidth="2" strokeDasharray="4 4" className="opacity-20" />
               <path d="M 300 180 L 450 270" stroke="#BFDBFE" strokeWidth="2" strokeDasharray="4 4" className="opacity-20" />
            </svg>
            
            {/* Center Node */}
            <motion.div 
              variants={{ hidden: { scale: 0.8, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { duration: 0.6, type: "spring", bounce: 0.4 } } }}
              className="absolute z-30 w-36 h-36 bg-[#0B1220] rounded-3xl shadow-2xl flex flex-col items-center justify-center p-4 text-center text-white border-4 border-white/10"
            >
              <Building2 className="w-10 h-10 mb-2 text-brand-cyan" strokeWidth={1.5} />
              <h3 className="font-display font-bold text-sm tracking-widest uppercase">Business</h3>
            </motion.div>

            {/* Top Left Card */}
            <motion.div 
              variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}
              className="absolute z-20 top-2 left-0 w-44 bg-black/40 backdrop-blur-md rounded-2xl shadow-[0_8px_32px_rgba(37,99,235,0.15)] p-4 border border-white/10 flex flex-col"
            >
              <Monitor size={20} className="text-brand-cyan mb-2" />
              <h4 className="font-bold text-white text-[11px] uppercase tracking-wider mb-1">Website</h4>
              <p className="text-[9px] text-gray-400 leading-tight">Modern websites that represent your brand.</p>
            </motion.div>

            {/* Bottom Left Card */}
            <motion.div 
              variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}
              className="absolute z-20 bottom-2 left-0 w-44 bg-black/40 backdrop-blur-md rounded-2xl shadow-[0_8px_32px_rgba(37,99,235,0.15)] p-4 border border-white/10 flex flex-col"
            >
              <Smartphone size={20} className="text-brand-cyan mb-2" />
              <h4 className="font-bold text-white text-[11px] uppercase tracking-wider mb-1">Mobile</h4>
              <p className="text-[9px] text-gray-400 leading-tight">Mobile apps that enhance user experience.</p>
            </motion.div>

            {/* Top Right Card */}
            <motion.div 
              variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}
              className="absolute z-20 top-2 right-0 w-44 bg-black/40 backdrop-blur-md rounded-2xl shadow-[0_8px_32px_rgba(37,99,235,0.15)] p-4 border border-white/10 flex flex-col"
            >
              <Database size={20} className="text-brand-cyan mb-2" />
              <h4 className="font-bold text-white text-[11px] uppercase tracking-wider mb-1">ERP</h4>
              <p className="text-[9px] text-gray-400 leading-tight">Business systems that streamline operations.</p>
            </motion.div>

            {/* Bottom Right Card */}
            <motion.div 
              variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}
              className="absolute z-20 bottom-2 right-0 w-44 bg-black/40 backdrop-blur-md rounded-2xl shadow-[0_8px_32px_rgba(37,99,235,0.15)] p-4 border border-white/10 flex flex-col"
            >
              <TrendingUp size={20} className="text-brand-cyan mb-2" />
              <h4 className="font-bold text-white text-[11px] uppercase tracking-wider mb-1">Digital Growth</h4>
              <p className="text-[9px] text-gray-400 leading-tight">Strategies that drive measurable growth.</p>
            </motion.div>
            
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
