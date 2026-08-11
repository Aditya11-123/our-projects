import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getProjects, getProjectById } from '../data/projects';

import OurWorkHero from '../components/our-work/OurWorkHero';
import OurWorkCapabilityStrip from '../components/our-work/OurWorkCapabilityStrip';
import OurWorkFilters from '../components/our-work/OurWorkFilters';
import FeaturedProject from '../components/our-work/FeaturedProject';
import WebProjectsGrid from '../components/our-work/WebProjectsGrid';
import MobileShowcase from '../components/our-work/MobileShowcase';
import ERPSystemShowcase from '../components/our-work/ERPSystemShowcase';
import DigitalMarketingShowcase from '../components/our-work/DigitalMarketingShowcase';
import OurProcess from '../components/our-work/OurProcess';
import OurWorkCTA from '../components/our-work/OurWorkCTA';

export default function OurWork() {
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const bdmFresh = getProjectById('bdm-fresh');
  const aiSalon = getProjectById('ai-salon');
  const tejas = getProjectById('tejas-investment-solutions');
  const cocktailAcademy = getProjectById('indian-cocktail-academy');
  const erpProposal = getProjectById('manufacturing-digital-transformation');
  const b2bMarketing = getProjectById('b2b-manufacturing-growth');
  const localMarketing = getProjectById('local-business-growth');

  const showWeb = activeFilter === 'all' || activeFilter === 'web';
  const showMobile = activeFilter === 'all' || activeFilter === 'mobile';
  const showERP = activeFilter === 'all' || activeFilter === 'business systems';
  const showMarketing = activeFilter === 'all' || activeFilter === 'digital marketing';

  return (
    <div className="bg-transparent min-h-screen pt-20 scroll-pt-[90px] scroll-smooth">
      <OurWorkHero />
      <OurWorkCapabilityStrip />
      <OurWorkFilters activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

      <div className="relative">
        <AnimatePresence mode="popLayout">
          {showWeb && (
            <motion.div
              key="web-section"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <FeaturedProject project={bdmFresh} />
              <WebProjectsGrid projects={[aiSalon, tejas]} />
            </motion.div>
          )}

          {showMobile && (
            <motion.div
              key="mobile-section"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <MobileShowcase project={cocktailAcademy} />
            </motion.div>
          )}

          {showERP && (
            <motion.div
              key="erp-section"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <ERPSystemShowcase project={erpProposal} />
            </motion.div>
          )}

          {showMarketing && (
            <motion.div
              key="marketing-section"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <DigitalMarketingShowcase projects={[b2bMarketing, localMarketing]} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <OurProcess />
      <OurWorkCTA />
    </div>
  );
}
