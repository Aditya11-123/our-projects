import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';
import ProjectCard from '../common/ProjectCard';
import { getProjects } from '../../data/projects';
import { staggerContainer, staggerItem } from '../../animations/stagger';

const FILTERS = ['All', 'Web App', 'Mobile', 'AI', 'Cloud', 'Enterprise'];

export default function FeaturedProjects() {
  const [filter, setFilter] = useState('All');
  const projects = getProjects();
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section className="bg-bg-secondary border-t border-border-dark py-24">
      <Container>
        <SectionHeader 
          title="Featured Work"
          heading="What We Have Built"
          description="Explore a selection of our most complex and impactful engineering projects across various domains."
          align="center"
        />

        {/* Filter Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-[11px] font-bold transition-all duration-300 border ${
                filter === f 
                  ? 'border-primary text-primary bg-[#0A0A0E]' 
                  : 'border-white/5 text-gray-400 bg-[#0A0A0E] hover:border-white/20 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid - Updated to 4 columns */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              filteredProjects.map(project => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-20 text-center border border-dashed border-border-dark rounded-2xl"
              >
                <p className="text-gray-500 font-display text-xl uppercase tracking-wider">No Projects Found</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
