import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';
import TechCard from '../common/TechCard';
import { technologiesData } from '../../data/technologies';
import { staggerContainer, staggerItem } from '../../animations/stagger';

export default function TechExpertise() {
  return (
    <section className="bg-bg-primary border-t border-border-dark">
      <Container>
        <SectionHeader 
          title="Technology Expertise"
          heading="What Powers Our Work"
          description="We specialize in modern, scalable frameworks and cloud infrastructure to ensure your products are built for the future."
          align="center"
        />

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {technologiesData.map(tech => (
            <motion.div key={tech.id} variants={staggerItem}>
              <TechCard data={tech} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
