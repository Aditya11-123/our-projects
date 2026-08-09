import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import { fadeUp } from '../../animations/fadeUp';
import { staggerContainer, staggerItem } from '../../animations/stagger';
import { Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-primary pt-20">
      {/* Background with modern picture tags for AVIF/WebP */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source srcSet="/hero-bg.avif" type="image/avif" />
          <source srcSet="/hero-bg.webp" type="image/webp" />
          <img
            src="/hero-bg.jpg"
            alt="Engineering Excellence Background"
            className="w-full h-full object-cover object-center opacity-80"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/90 via-bg-primary/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent z-10" />
      </div>

      <Container className="relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="lg:col-span-8 flex flex-col items-start text-left"
          >
            <motion.div variants={staggerItem} className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[2px] bg-primary" />
              <span className="font-display font-black text-xs uppercase tracking-[0.2em] text-primary">
                Welcome to OUR IMPACT
              </span>
            </motion.div>

            <motion.h1 variants={staggerItem} className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold uppercase italic leading-[0.9] tracking-tight mb-6 text-white drop-shadow-2xl">
              Driving <span className="text-primary">Innovation.</span><br />
              Delivering <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Excellence.</span>
            </motion.h1>

            <motion.p variants={staggerItem} className="text-gray-300 text-sm md:text-base max-w-2xl mb-10 leading-relaxed font-medium">
              We build engineering solutions that scale. From complex AI integrations to resilient cloud architectures, we turn your toughest problems into performant digital platforms.
            </motion.p>

            <motion.div variants={staggerItem} className="flex flex-wrap items-center gap-6 mb-12">
              <button className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-display font-bold uppercase tracking-wider text-sm transition-all hover:scale-105 shadow-card hover:shadow-cardHover">
                Start Project
              </button>
              <button className="border border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-display font-bold uppercase tracking-wider text-sm flex items-center gap-2 transition-all hover:border-white/40">
                <Play size={16} className="fill-white" /> View Portfolio
              </button>
            </motion.div>
            
            {/* Trust Badges */}
            <motion.div variants={staggerItem} className="flex flex-wrap items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-text-secondary">
              <div className="flex items-center gap-1.5"><span className="text-green-400">✔</span> 250+ Projects</div>
              <div className="flex items-center gap-1.5"><span className="text-green-400">✔</span> 15 Countries</div>
              <div className="flex items-center gap-1.5"><span className="text-green-400">✔</span> 98% Success</div>
            </motion.div>

          </motion.div>

        </div>
      </Container>
    </section>
  );
}
