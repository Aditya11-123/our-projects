import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';
import BaseCard from '../common/BaseCard';
import { processData } from '../../data/process';
import { fadeUp } from '../../animations/fadeUp';

export default function EngineeringProcess() {
  return (
    <section className="bg-bg-secondary border-t border-border-dark overflow-hidden">
      <Container>
        <SectionHeader 
          title="Engineering Process"
          heading="How We Build"
          description="A disciplined, transparent, and iterative approach to software engineering that guarantees quality at every stage."
          align="center"
        />

        <div className="relative mt-12">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-border-dark -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {processData.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex flex-col h-full"
              >
                <BaseCard className="flex-grow flex flex-col items-start relative group !p-5">
                  <div className="w-8 h-8 rounded-full bg-bg-primary border border-border-dark flex items-center justify-center text-xs font-bold text-primary mb-4 shadow-md group-hover:scale-110 transition-transform">
                    {step.step}
                  </div>
                  <h4 className="text-sm font-display font-extrabold uppercase tracking-wide mb-2 text-white">
                    {step.title}
                  </h4>
                  <p className="text-[11px] text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </BaseCard>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
