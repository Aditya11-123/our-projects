import React from 'react';
import Container from '../common/Container';
import { ArrowRight, Factory, Box, ShoppingCart, Users, Calculator, FileText, Globe, Smartphone, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ERPSystemShowcase({ project }) {
  if (!project) return null;

  return (
    <section className="py-1 bg-[#0B1220] relative overflow-hidden border-t border-[#1e293b] scroll-mt-[100px]" id="erp-projects">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-4 text-white">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary mb-4 block">BUSINESS SYSTEMS</span>
            
            <span className="inline-block px-3 py-1 bg-brand-cyan/20 text-brand-cyan text-[10px] font-bold uppercase tracking-wider rounded-sm shadow-sm border border-brand-cyan/30 mb-6">PROPOSED SOLUTION</span>
            
            <h2 className="text-3xl font-display font-bold text-white mb-6 leading-tight">
              Manufacturing Digital Transformation
            </h2>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-10">
              A proposed digital ecosystem that connects manufacturing operations, business systems and digital channels into one integrated solution.
            </p>
            
            <Link to={`/our-work/${project.slug}`} className="text-brand-primary font-bold text-sm inline-flex items-center hover:text-brand-cyan transition-colors">
              Explore Proposed Solution <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          {/* Right Diagram */}
          <div className="lg:col-span-8">
             <div className="w-full bg-[#0B1220] rounded-3xl border border-gray-800 p-8 flex items-center justify-between relative overflow-hidden shadow-2xl ring-1 ring-white/5">
                
                {/* Lines */}
                <svg className="absolute inset-0 w-full h-full z-0" pointerEvents="none">
                  {/* Connect Left blocks to Center */}
                  <path d="M 180 100 L 250 100 L 250 200 L 320 200" stroke="#06B6D4" strokeWidth="1" strokeDasharray="4 4" fill="none" opacity="0.5"/>
                  <path d="M 180 200 L 320 200" stroke="#06B6D4" strokeWidth="1" strokeDasharray="4 4" fill="none" opacity="0.5"/>
                  <path d="M 180 300 L 250 300 L 250 200 L 320 200" stroke="#06B6D4" strokeWidth="1" strokeDasharray="4 4" fill="none" opacity="0.5"/>
                  
                  {/* Connect Center to Right blocks */}
                  <path d="M 480 200 L 550 200 L 550 100 L 620 100" stroke="#06B6D4" strokeWidth="1" strokeDasharray="4 4" fill="none" opacity="0.5"/>
                  <path d="M 480 200 L 620 200" stroke="#06B6D4" strokeWidth="1" strokeDasharray="4 4" fill="none" opacity="0.5"/>
                  <path d="M 480 200 L 550 200 L 550 300 L 620 300" stroke="#06B6D4" strokeWidth="1" strokeDasharray="4 4" fill="none" opacity="0.5"/>
                  
                  {/* Connect Right blocks to Ecosystem */}
                  <path d="M 760 200 L 820 200" stroke="#2563EB" strokeWidth="1" fill="none" opacity="0.3"/>
                </svg>

                {/* Left Blocks */}
                <div className="flex flex-col gap-6 z-10 w-[140px]">
                   <div className="bg-[#121b2d] border border-gray-800 rounded-lg p-3 flex items-center gap-3">
                      <div className="text-brand-cyan"><SettingsIcon /></div>
                      <span className="text-[9px] font-bold text-gray-300">Production Planning</span>
                   </div>
                   <div className="bg-[#121b2d] border border-gray-800 rounded-lg p-3 flex items-center gap-3">
                      <div className="text-brand-cyan"><Box size={14} /></div>
                      <span className="text-[9px] font-bold text-gray-300">Inventory Management</span>
                   </div>
                   <div className="bg-[#121b2d] border border-gray-800 rounded-lg p-3 flex items-center gap-3">
                      <div className="text-brand-cyan"><ShoppingCart size={14} /></div>
                      <span className="text-[9px] font-bold text-gray-300">Purchase Management</span>
                   </div>
                </div>

                {/* Center Block */}
                <div className="z-10 w-[140px] h-[140px] bg-[#0B1220] border-2 border-brand-primary rounded-2xl flex flex-col items-center justify-center text-center shadow-[0_0_30px_rgba(37,99,235,0.2)]">
                   <Factory size={32} className="text-brand-cyan mb-2" strokeWidth={1.5} />
                   <span className="text-[10px] font-bold text-white tracking-widest uppercase">MANUFACTURING<br/>BUSINESS</span>
                </div>

                {/* Right Blocks */}
                <div className="flex flex-col gap-6 z-10 w-[140px]">
                   <div className="bg-[#121b2d] border border-gray-800 rounded-lg p-3 flex items-center gap-3">
                      <div className="text-brand-cyan"><FileText size={14} /></div>
                      <span className="text-[9px] font-bold text-gray-300">Sales Management</span>
                   </div>
                   <div className="bg-[#121b2d] border border-gray-800 rounded-lg p-3 flex items-center gap-3">
                      <div className="text-brand-cyan"><Calculator size={14} /></div>
                      <span className="text-[9px] font-bold text-gray-300">Accounts & Finance</span>
                   </div>
                   <div className="bg-[#121b2d] border border-gray-800 rounded-lg p-3 flex items-center gap-3">
                      <div className="text-brand-cyan"><Users size={14} /></div>
                      <span className="text-[9px] font-bold text-gray-300">HR & Payroll Management</span>
                   </div>
                </div>

                {/* Ecosystem Block */}
                <div className="z-10 w-[180px] border-l border-gray-800 pl-8 ml-4">
                   <div className="text-[8px] font-bold uppercase tracking-widest text-brand-primary mb-4 flex items-center gap-2">
                     <div className="w-4 h-[1px] bg-brand-primary"></div> DIGITAL ECOSYSTEM
                   </div>
                   <div className="flex flex-col gap-4">
                      <div className="bg-[#121b2d] border border-gray-800 rounded-lg p-3 flex items-center gap-3">
                        <div className="text-brand-primary"><Globe size={14} /></div>
                        <div className="flex flex-col">
                          <span className="text-[9px] font-bold text-white">Website</span>
                          <span className="text-[7px] text-blue-100/50">Corporate Presence</span>
                        </div>
                      </div>
                      <div className="bg-[#121b2d] border border-gray-800 rounded-lg p-3 flex items-center gap-3">
                        <div className="text-brand-primary"><Smartphone size={14} /></div>
                        <div className="flex flex-col">
                          <span className="text-[9px] font-bold text-white">Mobile App</span>
                          <span className="text-[7px] text-blue-100/50">Customers on the Go</span>
                        </div>
                      </div>
                      <div className="bg-[#121b2d] border border-gray-800 rounded-lg p-3 flex items-center gap-3">
                        <div className="text-brand-primary"><TrendingUp size={14} /></div>
                        <div className="flex flex-col">
                          <span className="text-[9px] font-bold text-white">Digital Growth</span>
                          <span className="text-[7px] text-blue-100/50">Marketing & Leads</span>
                        </div>
                      </div>
                   </div>
                </div>

             </div>
          </div>

        </div>
      </Container>
    </section>
  );
}

function SettingsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
  );
}
