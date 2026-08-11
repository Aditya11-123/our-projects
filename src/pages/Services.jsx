import React from 'react';
import ServiceHero from '../components/services/ServiceHero';
import ServiceCapabilityStrip from '../components/services/ServiceCapabilityStrip';
import ServiceChallenges from '../components/services/ServiceChallenges';
import CoreServicesGrid from '../components/services/CoreServicesGrid';
import ServiceDetailTabs from '../components/services/ServiceDetailTabs';
import ERPDeepDive from '../components/services/ERPDeepDive';
import BusinessEnvironments from '../components/services/BusinessEnvironments';
import DeliveryProcess from '../components/services/DeliveryProcess';
import WhyWorkWithUs from '../components/services/WhyWorkWithUs';
import TechExpertise from '../components/services/TechExpertise';
import OurWorkPreview from '../components/services/OurWorkPreview';
import ProposedSolutions from '../components/services/ProposedSolutions';
import ServiceFAQ from '../components/services/ServiceFAQ';
import FinalCTA from '../components/services/FinalCTA';

export default function Services() {
  return (
    <div className="flex flex-col w-full bg-transparent">
      <ServiceHero />
      <ServiceCapabilityStrip />
      <ServiceChallenges />
      <CoreServicesGrid />
      <ServiceDetailTabs />
      <ERPDeepDive />
      <BusinessEnvironments />
      <DeliveryProcess />
      <WhyWorkWithUs />
      <TechExpertise />
      <OurWorkPreview />
      <ProposedSolutions />
      <ServiceFAQ />
      <FinalCTA />
    </div>
  );
}
