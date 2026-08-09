import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import { fadeUp } from '../../animations/fadeUp';

export default function CTA() {
  return (
    <section className="bg-gradient-to-b from-bg-secondary to-bg-primary border-t border-border-dark py-32">
      <Container>
        <motion.div 
          {...fadeUp}
          className="max-w-4xl mx-auto text-center flex flex-col items-center"
        >
          <div className="flex items-center gap-4 w-full mb-6 max-w-sm mx-auto">
            <div className="h-[1px] bg-gradient-to-r from-transparent to-white/10 flex-grow" />
            <span className="text-[10px] uppercase font-display font-black tracking-[0.2em] text-primary">
              Ready to start?
            </span>
            <div className="h-[1px] bg-gradient-to-l from-transparent to-white/10 flex-grow" />
          </div>

          <h2 className="text-4xl md:text-6xl font-display font-extrabold uppercase italic tracking-wide text-white mb-6">
            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Amazing.</span>
          </h2>
          
          <p className="text-gray-400 text-base md:text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Partner with OUR IMPACT to transform your complex engineering challenges into scalable, high-performance digital solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-display font-bold uppercase tracking-wider text-sm transition-all hover:-translate-y-1 shadow-card hover:shadow-cardHover">
              Start Project
            </button>
            <button className="w-full sm:w-auto border border-border-dark bg-card-base hover:bg-white/5 text-white px-8 py-4 rounded-xl font-display font-bold uppercase tracking-wider text-sm transition-all hover:-translate-y-1">
              Get Free Consultation
            </button>
            <button className="w-full sm:w-auto border border-transparent hover:border-border-dark text-gray-400 hover:text-white px-8 py-4 rounded-xl font-display font-bold uppercase tracking-wider text-sm transition-all">
              Email Us
            </button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
