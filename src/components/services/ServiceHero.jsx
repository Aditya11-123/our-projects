import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import { ArrowRight, Monitor, Smartphone, Database, Megaphone, Building2, MessageCircle } from 'lucide-react';

export default function ServiceHero() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const nodeVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="relative pt-0 pb-24 md:pt-4 md:pb-32 bg-[#FAFBFF] overflow-hidden">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-xl"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
              <div className="w-4 h-[2px] bg-brand-primary"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-primary ml-1">OUR SERVICES</span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl lg:text-[3.5rem] font-display font-bold text-[#0B1220] leading-[1.1] mb-6 tracking-tight"
            >
              Digital Solutions <br/> Built Around <br/>
              <span className="text-brand-primary">Your Business.</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 mb-10 leading-relaxed font-medium max-w-lg"
            >
              From business websites and mobile applications to ERP systems and digital marketing, we build practical digital solutions designed around your business requirements.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#core-services" className="inline-flex items-center justify-center px-7 py-3.5 bg-[#0A5BEA] text-white font-medium rounded-xl hover:bg-blue-700 transition-colors shadow-sm">
                Explore Our Services <ArrowRight size={18} className="ml-2" />
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center px-7 py-3.5 bg-white border border-gray-300 text-gray-800 font-medium rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-colors shadow-sm">
                Discuss Your Project <MessageCircle size={18} className="ml-2 text-gray-600" />
              </Link>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex items-center gap-4 text-sm font-bold text-gray-600">
              <span>Web</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span>
              <span>ERP</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span>
              <span>Mobile</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span>
              <span>Digital Growth</span>
            </motion.div>
          </motion.div>

          {/* Right Visual Ecosystem */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative hidden lg:flex justify-center items-center h-[600px] w-full"
          >
            {/* Concentric Circles */}
            <div className="absolute w-[450px] h-[450px] rounded-full border border-blue-100/50 z-0"></div>
            <div className="absolute w-[350px] h-[350px] rounded-full border border-blue-200/60 z-0"></div>
            <div className="absolute w-[550px] h-[550px] rounded-full border border-blue-50/50 z-0"></div>
            
            {/* Background decorative dots */}
            <div className="absolute top-10 right-10 grid grid-cols-3 gap-2 opacity-20">
              {[...Array(9)].map((_, i) => <div key={i} className="w-1 h-1 bg-brand-primary rounded-full"></div>)}
            </div>
            <div className="absolute bottom-10 left-10 grid grid-cols-3 gap-2 opacity-20">
              {[...Array(9)].map((_, i) => <div key={i} className="w-1 h-1 bg-brand-primary rounded-full"></div>)}
            </div>

            {/* Connection Lines */}
            <div className="absolute w-[500px] h-[2px] bg-blue-100 z-10 flex justify-between items-center px-4">
               <div className="w-2 h-2 rounded-full bg-brand-primary shadow-[0_0_8px_rgba(37,99,235,0.6)]"></div>
               <div className="w-2 h-2 rounded-full bg-brand-primary shadow-[0_0_8px_rgba(37,99,235,0.6)]"></div>
            </div>
            <div className="absolute h-[500px] w-[2px] bg-blue-100 z-10 flex flex-col justify-between items-center py-4">
               <div className="w-2 h-2 rounded-full bg-brand-primary shadow-[0_0_8px_rgba(37,99,235,0.6)]"></div>
               <div className="w-2 h-2 rounded-full bg-brand-primary shadow-[0_0_8px_rgba(37,99,235,0.6)]"></div>
            </div>

            {/* Center Node: BUSINESS */}
            <motion.div variants={nodeVariants} className="absolute z-30 w-52 h-52 bg-[#0B1220] rounded-[2rem] shadow-2xl flex flex-col items-center justify-center p-6 text-center">
              <Building2 className="text-white w-12 h-12 mb-3" strokeWidth={1.5} />
              <h3 className="text-white font-display font-bold text-xl tracking-wide mb-1">BUSINESS</h3>
              <p className="text-gray-400 text-xs font-medium px-2">Your Business,<br/>Our Solutions</p>
            </motion.div>

            {/* Top Node: Website */}
            <motion.div variants={nodeVariants} className="absolute top-4 z-20 w-44 bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] p-5 flex flex-col items-center text-center border border-gray-50 hover:-translate-y-1 transition-transform">
              <div className="w-10 h-10 mb-3 text-brand-primary">
                <Monitor size={36} strokeWidth={1.5} />
              </div>
              <h4 className="font-bold text-gray-900 text-sm mb-2">Website</h4>
              <p className="text-[10px] text-gray-500 leading-tight">Professional websites that represent and grow your business.</p>
              <div className="w-6 h-0.5 bg-brand-primary mt-3 opacity-30"></div>
            </motion.div>

            {/* Bottom Node: Digital Marketing */}
            <motion.div variants={nodeVariants} className="absolute bottom-4 z-20 w-44 bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] p-5 flex flex-col items-center text-center border border-gray-50 hover:-translate-y-1 transition-transform">
              <div className="w-10 h-10 mb-3 text-brand-primary">
                <Megaphone size={36} strokeWidth={1.5} />
              </div>
              <h4 className="font-bold text-gray-900 text-sm mb-2">Digital Marketing</h4>
              <p className="text-[10px] text-gray-500 leading-tight">Data-driven marketing strategies that drive growth and visibility.</p>
              <div className="w-6 h-0.5 bg-brand-primary mt-3 opacity-30"></div>
            </motion.div>

            {/* Left Node: Mobile App */}
            <motion.div variants={nodeVariants} className="absolute left-0 lg:-left-12 z-20 w-40 bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] p-5 flex flex-col items-center text-center border border-gray-50 hover:-translate-y-1 transition-transform">
              <div className="w-10 h-10 mb-3 text-brand-primary">
                <Smartphone size={36} strokeWidth={1.5} />
              </div>
              <h4 className="font-bold text-gray-900 text-sm mb-2">Mobile App</h4>
              <p className="text-[10px] text-gray-500 leading-tight">Powerful mobile applications for your customers and team.</p>
              <div className="w-6 h-0.5 bg-brand-primary mt-3 opacity-30"></div>
            </motion.div>

            {/* Right Node: ERP Solutions */}
            <motion.div variants={nodeVariants} className="absolute right-0 lg:-right-12 z-20 w-40 bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] p-5 flex flex-col items-center text-center border border-gray-50 hover:-translate-y-1 transition-transform">
              <div className="w-10 h-10 mb-3 text-brand-primary">
                <Database size={36} strokeWidth={1.5} />
              </div>
              <h4 className="font-bold text-gray-900 text-sm mb-2">ERP Solutions</h4>
              <p className="text-[10px] text-gray-500 leading-tight">Streamline operations with integrated business systems.</p>
              <div className="w-6 h-0.5 bg-brand-primary mt-3 opacity-30"></div>
            </motion.div>

          </motion.div>
        </div>
      </Container>
    </section>
  );
}
