import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';
import StatCard from '../common/StatCard';
import { achievementsData } from '../../data/achievements';
import { staggerContainer, staggerItem } from '../../animations/stagger';

export default function Achievements() {
  return (
    <section className="relative overflow-hidden border-t border-border-dark py-24">
      {/* Background with Track Image and Heavy Overlay */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source srcSet="/hero-bg.avif" type="image/avif" />
          <source srcSet="/hero-bg.webp" type="image/webp" />
          <img
            src="/hero-bg.jpg"
            alt="Track Background"
            className="w-full h-full object-cover object-center opacity-40 blur-sm scale-105"
          />
        </picture>
        <div className="absolute inset-0 bg-[#050507]/90 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-transparent to-bg-secondary z-10" />
      </div>

      <Container className="relative z-20">
        <SectionHeader 
          title="OUR IMPACT"
          heading={<>ENGINEERING EXCELLENCE<br/><span className="text-primary italic">DELIVERING REAL RESULTS</span></>}
          description="From innovative solutions to measurable outcomes, our numbers reflect our commitment to excellence."
          align="center"
        />

        <div className="max-w-5xl mx-auto mt-12 p-6 md:p-10 border border-white/5 rounded-[2rem] bg-[#09090b]/40 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.4)]">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {achievementsData.map(stat => (
              <motion.div key={stat.id} variants={staggerItem} className="h-full">
                <StatCard {...stat} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
