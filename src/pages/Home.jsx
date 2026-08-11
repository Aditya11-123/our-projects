import React, { Suspense } from 'react';

// Eagerly loaded core components
import Hero from '../components/home/Hero';
import CapabilityStrip from '../components/home/CapabilityStrip';
import ServicesPreview from '../components/home/ServicesPreview';
import BusinessChallenges from '../components/home/BusinessChallenges';
import Achievements from '../components/home/Achievements';
import FeaturedProjects from '../components/home/FeaturedProjects';
import CaseStudyPreview from '../components/home/CaseStudyPreview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import EngineeringProcess from '../components/home/EngineeringProcess';
import TechExpertise from '../components/home/TechExpertise';
import CTA from '../components/home/CTA';

// Lazy loaded components (heavy / below the fold)
const Testimonials = React.lazy(() => import('../components/home/Testimonials'));
const MeetOurTeam = React.lazy(() => import('../components/home/MeetOurTeam'));

const SectionSkeleton = () => (
  <div className="w-full min-h-[400px] bg-white flex items-center justify-center animate-pulse">
    <div className="w-32 h-8 bg-gray-200 rounded-full" />
  </div>
);

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <CapabilityStrip />
      <ServicesPreview />
      <BusinessChallenges />
      <Achievements />
      <FeaturedProjects />
      <CaseStudyPreview />
      <WhyChooseUs />
      <EngineeringProcess />
      <TechExpertise />
      
      <Suspense fallback={<SectionSkeleton />}>
        <Testimonials />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <MeetOurTeam />
      </Suspense>
      
      <CTA />
    </main>
  );
}
