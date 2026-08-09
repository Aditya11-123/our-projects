import React, { Suspense } from 'react';

// Eagerly loaded components (above the fold / high priority)
import Hero from '../components/home/Hero';
import Mission from '../components/home/Mission';
import Achievements from '../components/home/Achievements';
import FeaturedProjects from '../components/home/FeaturedProjects';
import TechExpertise from '../components/home/TechExpertise';
import EngineeringProcess from '../components/home/EngineeringProcess';
import CTA from '../components/home/CTA';

// Lazy loaded components (heavy / below the fold)
const MeetOurTeam = React.lazy(() => import('../components/home/MeetOurTeam'));
const Testimonials = React.lazy(() => import('../components/home/Testimonials'));

// Simple fallback skeleton
const SectionSkeleton = () => (
  <div className="w-full min-h-[400px] bg-bg-primary flex items-center justify-center border-t border-border-dark animate-pulse">
    <div className="w-32 h-8 bg-white/5 rounded-full" />
  </div>
);

export default function Home() {
  return (
    <main className="bg-bg-primary min-h-screen">
      {/* 1. Who are you? */}
      <Hero />
      
      {/* 2. Why do you exist? */}
      <Mission />
      
      {/* 3. Can I trust you? */}
      <Achievements />
      
      {/* 4. What have you built? */}
      <FeaturedProjects />
      
      {/* 5. What can you build? */}
      <TechExpertise />
      
      {/* 6. How do you work? */}
      <EngineeringProcess />
      
      {/* 7. Who builds it? (Lazy Loaded) */}
      <Suspense fallback={<SectionSkeleton />}>
        <MeetOurTeam />
      </Suspense>
      
      {/* 8. What do clients say? (Lazy Loaded) */}
      <Suspense fallback={<SectionSkeleton />}>
        <Testimonials />
      </Suspense>
      
      {/* 9. How do I contact you? */}
      <CTA />
    </main>
  );
}
