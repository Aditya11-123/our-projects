import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';
import BaseCard from '../common/BaseCard';
import { testimonialsData } from '../../data/testimonials';
import { UI_CONSTANTS } from '../../config/constants';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, UI_CONSTANTS.TIMING.TESTIMONIAL_SLIDER_MS);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);

  return (
    <section className="bg-bg-secondary border-t border-border-dark">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-4">
            <SectionHeader 
              title="Client Testimonials"
              heading="See What Others Say"
              description="Don't just take our word for it. Read the experiences of engineering leaders who have partnered with OUR IMPACT."
              align="left"
            />
            
            <div className="flex gap-4 mt-8">
              <button onClick={prev} className="w-10 h-10 rounded-full border border-border-dark flex items-center justify-center hover:bg-white/5 hover:border-white/30 transition-all text-white">
                <ChevronLeft size={18} />
              </button>
              <button onClick={next} className="w-10 h-10 rounded-full border border-border-dark flex items-center justify-center hover:bg-white/5 hover:border-white/30 transition-all text-white">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="lg:col-span-8 relative">
            <div className="overflow-hidden relative h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <BaseCard className="h-full flex flex-col justify-between relative !p-10">
                    <Quote size={40} className="absolute top-6 right-8 text-white/5" />
                    
                    <div>
                      <div className="flex gap-1 mb-6 text-primary">
                        {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
                      </div>
                      <p className="text-lg md:text-2xl font-body leading-relaxed text-gray-200">
                        "{testimonialsData[currentIndex].feedback}"
                      </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-border-dark flex items-center justify-between">
                      <div>
                        <div className="font-display font-bold text-lg uppercase tracking-wide text-white">
                          {testimonialsData[currentIndex].name}
                        </div>
                        <div className="text-xs text-primary font-bold uppercase tracking-wider">
                          {testimonialsData[currentIndex].role} — {testimonialsData[currentIndex].company}
                        </div>
                      </div>
                      <div className="text-[10px] font-bold text-text-secondary uppercase tracking-widest px-3 py-1 bg-white/5 rounded-md border border-border-dark">
                        {testimonialsData[currentIndex].location}
                      </div>
                    </div>
                  </BaseCard>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
