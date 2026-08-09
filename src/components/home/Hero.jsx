import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../common/Container';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-20 overflow-hidden bg-[#050507]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg-f1.jpg"
          alt="Performance Engineering"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050507]/90 via-[#050507]/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent z-10" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-2xl text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-xs font-bold tracking-widest uppercase text-white mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
              Engineering Excellence
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-6 tracking-tight drop-shadow-lg"
          >
            Enterprise digital solutions built for <span className="text-brand-primary">scale.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-medium drop-shadow-md max-w-xl"
          >
            We design, engineer, and deploy high-performance software systems that solve complex business challenges.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-brand-primary text-white font-bold rounded-xl hover:bg-brand-primaryHover transition-colors shadow-lg">
              Start a Project
            </Link>
            <Link to="/our-work" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 hover:border-white/40 transition-colors shadow-lg backdrop-blur-md">
              Explore Our Work
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
