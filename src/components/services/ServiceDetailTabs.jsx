import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../common/Container';
import { Monitor, Database, Smartphone, Megaphone, Check, Building2, ShoppingBag, MessageSquare, Globe, ArrowRight } from 'lucide-react';
import WebsiteMockup from './mockups/WebsiteMockup';
import ERPMockup from './mockups/ERPMockup';
import MobileMockup from './mockups/MobileMockup';
import MarketingMockup from './mockups/MarketingMockup';

export default function ServiceDetailTabs() {
  const [activeTab, setActiveTab] = useState('website');

  const tabs = [
    { id: 'website', label: 'Website Development', icon: Monitor },
    { id: 'erp', label: 'ERP Solutions', icon: Database },
    { id: 'mobile', label: 'Mobile Apps', icon: Smartphone },
    { id: 'marketing', label: 'Digital Marketing', icon: Megaphone }
  ];

  const content = {
    website: {
      introLabel: 'WEBSITE DEVELOPMENT',
      introHeading: 'Build a Digital Presence That Works for Your Business.',
      introDesc: 'Create a professional, responsive digital experience that represents your business, products and services.',
      bestFor: [
        { text: 'Corporate websites', icon: Building2 },
        { text: 'Product catalogues', icon: ShoppingBag },
        { text: 'Business enquiries', icon: MessageSquare },
        { text: 'Digital presence', icon: Globe }
      ],
      ctaText: 'Explore Website Solutions',
      deliverables: [
        'Responsive Corporate Website', 'Product Catalogue', 'Analytics Configuration',
        'CMS Integration', 'Basic SEO Setup', 'Deployment Assistance'
      ],
      visual: <WebsiteMockup />
    },
    erp: {
      introLabel: 'ERP SOLUTIONS',
      introHeading: 'Connect Your Business Operations.',
      introDesc: 'Bring production, inventory, purchasing, sales, accounts and people operations into a centralized system.',
      bestFor: [
        { text: 'Manufacturing', icon: Building2 },
        { text: 'Inventory tracking', icon: ShoppingBag },
        { text: 'Team management', icon: MessageSquare },
        { text: 'Centralized ops', icon: Globe }
      ],
      ctaText: 'Explore ERP Solutions',
      deliverables: [
        'Production Planning', 'Purchase & Sales', 'HR & Payroll',
        'Inventory & Warehouse', 'Accounts & Finance', 'System Configuration'
      ],
      visual: <ERPMockup />
    },
    mobile: {
      introLabel: 'MOBILE APPLICATIONS',
      introHeading: "Put Your Business in Your Customers' Hands.",
      introDesc: 'Build mobile experiences that connect customers, vendors and business workflows.',
      bestFor: [
        { text: 'Customer portals', icon: Smartphone },
        { text: 'Vendor apps', icon: Building2 },
        { text: 'On-the-go teams', icon: MessageSquare },
        { text: 'Direct ordering', icon: ShoppingBag }
      ],
      ctaText: 'Explore Mobile Solutions',
      deliverables: [
        'User Authentication', 'Enquiries & Orders', 'API Integration',
        'Product Catalogue', 'Push Notifications', 'Deployment Support'
      ],
      visual: <MobileMockup />
    },
    marketing: {
      introLabel: 'DIGITAL MARKETING',
      introHeading: 'Turn Digital Presence Into Business Growth.',
      introDesc: 'Build consistent visibility and reach the right audience through targeted digital marketing.',
      bestFor: [
        { text: 'Brand visibility', icon: Globe },
        { text: 'Lead generation', icon: MessageSquare },
        { text: 'Audience growth', icon: Building2 },
        { text: 'Sales increase', icon: ShoppingBag }
      ],
      ctaText: 'Explore Marketing Solutions',
      deliverables: [
        'Social Media Mgt', 'Performance Ads', 'Analytics Tracking',
        'Creative Content', 'Campaign Strategy', 'Monthly Reporting'
      ],
      visual: <MarketingMockup />
    }
  };

  const activeContent = content[activeTab];

  return (
    <section className="py-1 bg-transparent relative overflow-hidden">
      
      {/* Subtle Background Treatment */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_#2563EB0A_0%,_transparent_70%)] translate-x-1/3 -translate-y-1/3"></div>
        {/* Subtle grid */}
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: 0.05 }}></div>
      </div>

      <Container className="relative z-10">
        
        {/* Section Intro */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary">WHAT'S INCLUDED</span>
            <div className="h-px bg-brand-primary/20 w-12"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight mb-4 tracking-tight">
            Everything You Need to <br/>
            Build, Launch & <span className="text-brand-primary">Grow.</span>
          </h2>
          <p className="text-lg text-blue-100/70 max-w-xl">
            Explore what each solution can include, from business websites and mobile applications to ERP systems and digital growth.
          </p>
        </div>

        {/* Service Navigation (Horizontal Selector) */}
        <div className="flex overflow-x-auto pb-4 mb-16 hide-scrollbar gap-2 lg:gap-4 border-b border-white/10">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-6 py-4 rounded-t-xl transition-all relative shrink-0 ${
                  isActive 
                    ? 'bg-transparent text-brand-primary shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.05)] border-t border-l border-r border-white/10' 
                    : 'text-blue-100/50 hover:text-white hover:bg-white/50 border-t border-l border-r border-transparent'
                }`}
              >
                <tab.icon size={18} />
                <span className="font-bold text-sm">{tab.label}</span>
                {isActive && (
                  <motion.div 
                    layoutId="activeServiceIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-primary"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Main Content Layout (Two Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* LEFT SIDE - Service Story (42%) */}
          <div className="lg:col-span-5 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-primary mb-3 block">
                  {activeContent.introLabel}
                </span>
                
                <h3 className="text-3xl lg:text-4xl font-display font-bold text-white leading-[1.2] mb-4">
                  {activeContent.introHeading}
                </h3>
                
                <p className="text-blue-100/70 leading-relaxed mb-10 text-sm md:text-base pr-4">
                  {activeContent.introDesc}
                </p>

                <div className="mb-10">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-primary mb-4 block">BEST FOR</span>
                  <div className="flex flex-col gap-4">
                    {activeContent.bestFor.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-brand-primary/10 flex items-center justify-center text-brand-primary border border-white/10">
                          <item.icon size={14} />
                        </div>
                        <span className="text-sm font-medium text-gray-200">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="inline-flex items-center justify-center px-6 py-3.5 bg-brand-primary text-white text-sm font-bold rounded-lg hover:bg-brand-primaryHover transition-all hover:-translate-y-[1px] shadow-[0_4px_14px_0_rgba(37,99,235,0.39)]">
                  {activeContent.ctaText} <ArrowRight size={16} className="ml-2" />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT SIDE - Deliverable Visual (58%) */}
          <div className="lg:col-span-7 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.35, ease: "easeOut", delay: 0.1 }}
                className="w-full flex flex-col h-full"
              >
                {/* The Mockup Area */}
                <div className="w-full relative mb-12 flex-grow flex items-center justify-center min-h-[350px]">
                  {activeContent.visual}
                </div>

                {/* Deliverables Grid underneath visual */}
                <div className="bg-transparent rounded-2xl p-6 md:p-8 shadow-sm border border-white/10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4">
                    {activeContent.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-2 rounded-lg hover:bg-transparent transition-colors">
                        <div className="w-5 h-5 rounded-full bg-brand-primary/20 text-brand-primary flex items-center justify-center shrink-0">
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span className="text-[11px] md:text-xs font-bold text-gray-100 leading-tight">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </Container>
    </section>
  );
}
