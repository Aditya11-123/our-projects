import React from 'react';
import Container from '../common/Container';
import { ArrowRight, FileText, MessageSquare, Megaphone, Users, LineChart, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DigitalMarketingShowcase({ projects }) {
  if (!projects || projects.length === 0) return null;

  return (
    <section className="py-1 md:py-1 bg-transparent border-t border-white/10 scroll-mt-[100px]" id="marketing-projects">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-2xl font-display font-bold text-white mb-2">
              Digital Growth Concepts
            </h2>
            <p className="text-blue-100/70 text-sm">
              Strategic marketing concepts designed to build visibility, generate leads and grow businesses.
            </p>
          </div>
          <Link to="/our-work" className="text-brand-primary font-bold text-sm inline-flex items-center hover:text-brand-primaryHover transition-colors shrink-0">
            View All Concepts <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: B2B */}
          <div className="bg-transparent rounded-2xl shadow-sm border border-white/10 p-8">
            <span className="inline-block px-3 py-1 bg-blue-50 text-brand-primary text-[10px] font-bold uppercase tracking-wider rounded-sm shadow-sm border border-blue-100 mb-4">CONCEPT</span>
            <h3 className="text-xl font-bold text-white mb-2">B2B Manufacturing Digital Growth Campaign</h3>
            <p className="text-blue-100/70 text-[11px] mb-8 max-w-sm">
              A digital strategy concept for manufacturing businesses to build brand authority, generate quality leads and grow consistently.
            </p>
            
            {/* Flow Diagram */}
            <div className="flex items-center justify-between mb-10 text-brand-primary overflow-x-auto hide-scrollbar pb-2">
               <div className="flex flex-col items-center gap-2 shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center"><FileText size={20} /></div>
                  <span className="text-[9px] font-bold text-white">Content<br/>Strategy</span>
               </div>
               <div className="flex-1 h-px bg-brand-primary/20 mx-2 shrink-0 min-w-[20px] relative">
                  <ArrowRight size={12} className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-primary/40 translate-x-1/2" />
               </div>
               
               <div className="flex flex-col items-center gap-2 shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center"><MessageSquare size={20} /></div>
                  <span className="text-[9px] font-bold text-white">Social<br/>Media</span>
               </div>
               <div className="flex-1 h-px bg-brand-primary/20 mx-2 shrink-0 min-w-[20px] relative">
                  <ArrowRight size={12} className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-primary/40 translate-x-1/2" />
               </div>

               <div className="flex flex-col items-center gap-2 shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center"><Megaphone size={20} /></div>
                  <span className="text-[9px] font-bold text-white">Paid<br/>Campaigns</span>
               </div>
               <div className="flex-1 h-px bg-brand-primary/20 mx-2 shrink-0 min-w-[20px] relative">
                  <ArrowRight size={12} className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-primary/40 translate-x-1/2" />
               </div>

               <div className="flex flex-col items-center gap-2 shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center"><Users size={20} /></div>
                  <span className="text-[9px] font-bold text-white">Lead<br/>Generation</span>
               </div>
               <div className="flex-1 h-px bg-brand-primary/20 mx-2 shrink-0 min-w-[20px] relative">
                  <ArrowRight size={12} className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-primary/40 translate-x-1/2" />
               </div>

               <div className="flex flex-col items-center gap-2 shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center"><LineChart size={20} /></div>
                  <span className="text-[9px] font-bold text-white">Reporting &<br/>Analytics</span>
               </div>
            </div>

            <div className="flex flex-wrap gap-2">
               <span className="px-3 py-1.5 bg-transparent border border-white/10 shadow-[0_4px_24px_rgba(37,99,235,0.15)] hover:shadow-[0_8px_32px_rgba(37,99,235,0.4)] transition-all duration-300 text-[10px] font-medium rounded text-blue-100/70">Social Media</span>
               <span className="px-3 py-1.5 bg-transparent border border-white/10 shadow-[0_4px_24px_rgba(37,99,235,0.15)] hover:shadow-[0_8px_32px_rgba(37,99,235,0.4)] transition-all duration-300 text-[10px] font-medium rounded text-blue-100/70">Content Planning</span>
               <span className="px-3 py-1.5 bg-transparent border border-white/10 shadow-[0_4px_24px_rgba(37,99,235,0.15)] hover:shadow-[0_8px_32px_rgba(37,99,235,0.4)] transition-all duration-300 text-[10px] font-medium rounded text-blue-100/70">Meta Ads</span>
               <span className="px-3 py-1.5 bg-transparent border border-white/10 shadow-[0_4px_24px_rgba(37,99,235,0.15)] hover:shadow-[0_8px_32px_rgba(37,99,235,0.4)] transition-all duration-300 text-[10px] font-medium rounded text-blue-100/70">Google Ads</span>
               <span className="px-3 py-1.5 bg-transparent border border-white/10 shadow-[0_4px_24px_rgba(37,99,235,0.15)] hover:shadow-[0_8px_32px_rgba(37,99,235,0.4)] transition-all duration-300 text-[10px] font-medium rounded text-blue-100/70">Reporting</span>
            </div>
          </div>

          {/* Card 2: Local Business */}
          <div className="bg-transparent rounded-2xl shadow-sm border border-white/10 p-8">
            <span className="inline-block px-3 py-1 bg-blue-50 text-brand-primary text-[10px] font-bold uppercase tracking-wider rounded-sm shadow-sm border border-blue-100 mb-4">CONCEPT</span>
            <h3 className="text-xl font-bold text-white mb-2">Local Business Digital Growth Campaign</h3>
            <p className="text-blue-100/70 text-[11px] mb-8 max-w-sm">
              A concept for local businesses to increase online presence and attract more customers through targeted marketing.
            </p>
            
            {/* Flow Diagram */}
            <div className="flex items-center justify-between mb-10 text-brand-primary overflow-x-auto hide-scrollbar pb-2">
               <div className="flex flex-col items-center gap-2 shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center"><Calendar size={20} /></div>
                  <span className="text-[9px] font-bold text-white">Content<br/>Calendar</span>
               </div>
               <div className="flex-1 h-px bg-brand-primary/20 mx-2 shrink-0 min-w-[20px] relative">
                  <ArrowRight size={12} className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-primary/40 translate-x-1/2" />
               </div>
               
               <div className="flex flex-col items-center gap-2 shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center"><MessageSquare size={20} /></div>
                  <span className="text-[9px] font-bold text-white">Social<br/>Media</span>
               </div>
               <div className="flex-1 h-px bg-brand-primary/20 mx-2 shrink-0 min-w-[20px] relative">
                  <ArrowRight size={12} className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-primary/40 translate-x-1/2" />
               </div>

               <div className="flex flex-col items-center gap-2 shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center"><Megaphone size={20} /></div>
                  <span className="text-[9px] font-bold text-white">Campaign<br/>Execution</span>
               </div>
               <div className="flex-1 h-px bg-brand-primary/20 mx-2 shrink-0 min-w-[20px] relative">
                  <ArrowRight size={12} className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-primary/40 translate-x-1/2" />
               </div>

               <div className="flex flex-col items-center gap-2 shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center"><Users size={20} /></div>
                  <span className="text-[9px] font-bold text-white">Leads &<br/>Engagement</span>
               </div>
               <div className="flex-1 h-px bg-brand-primary/20 mx-2 shrink-0 min-w-[20px] relative">
                  <ArrowRight size={12} className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-primary/40 translate-x-1/2" />
               </div>

               <div className="flex flex-col items-center gap-2 shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center"><LineChart size={20} /></div>
                  <span className="text-[9px] font-bold text-white">Performance<br/>Reporting</span>
               </div>
            </div>

            <div className="flex flex-wrap gap-2">
               <span className="px-3 py-1.5 bg-transparent border border-white/10 shadow-[0_4px_24px_rgba(37,99,235,0.15)] hover:shadow-[0_8px_32px_rgba(37,99,235,0.4)] transition-all duration-300 text-[10px] font-medium rounded text-blue-100/70">Content Creation</span>
               <span className="px-3 py-1.5 bg-transparent border border-white/10 shadow-[0_4px_24px_rgba(37,99,235,0.15)] hover:shadow-[0_8px_32px_rgba(37,99,235,0.4)] transition-all duration-300 text-[10px] font-medium rounded text-blue-100/70">Social Media</span>
               <span className="px-3 py-1.5 bg-transparent border border-white/10 shadow-[0_4px_24px_rgba(37,99,235,0.15)] hover:shadow-[0_8px_32px_rgba(37,99,235,0.4)] transition-all duration-300 text-[10px] font-medium rounded text-blue-100/70">Performance Marketing</span>
               <span className="px-3 py-1.5 bg-transparent border border-white/10 shadow-[0_4px_24px_rgba(37,99,235,0.15)] hover:shadow-[0_8px_32px_rgba(37,99,235,0.4)] transition-all duration-300 text-[10px] font-medium rounded text-blue-100/70">Reporting</span>
            </div>
          </div>
          
        </div>
      </Container>
    </section>
  );
}
