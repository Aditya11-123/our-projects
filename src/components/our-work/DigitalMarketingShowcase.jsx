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
          
          {/* Card 1: Shyam Plastic (Completed) */}
          <div className="bg-[#0B1018] rounded-2xl shadow-lg border border-white/10 p-8 flex flex-col justify-between hover:border-brand-primary/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-wider rounded-sm shadow-sm border border-emerald-200">COMPLETED</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary">SOCIAL MEDIA</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Shyam Plastic</h3>
              <p className="text-slate-400 text-xs mb-6">
                End-to-end social media handling, brand positioning, creative content production, and organic audience engagement strategy for Shyam Plastic.
              </p>
              
              {/* Flow Diagram */}
              <div className="flex items-center justify-between mb-8 text-brand-primary overflow-x-auto hide-scrollbar pb-2">
                 <div className="flex flex-col items-center gap-1.5 shrink-0 text-center">
                    <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary"><MessageSquare size={16} /></div>
                    <span className="text-[8px] font-bold text-slate-300">Brand<br/>Voice</span>
                 </div>
                 <div className="flex-1 h-px bg-brand-primary/20 mx-1.5 shrink-0 min-w-[12px] relative">
                    <ArrowRight size={10} className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-primary/40 translate-x-1/2" />
                 </div>
                 
                 <div className="flex flex-col items-center gap-1.5 shrink-0 text-center">
                    <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary"><Calendar size={16} /></div>
                    <span className="text-[8px] font-bold text-slate-300">Creative<br/>Posts</span>
                 </div>
                 <div className="flex-1 h-px bg-brand-primary/20 mx-1.5 shrink-0 min-w-[12px] relative">
                    <ArrowRight size={10} className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-primary/40 translate-x-1/2" />
                 </div>

                 <div className="flex flex-col items-center gap-1.5 shrink-0 text-center">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400"><Users size={16} /></div>
                    <span className="text-[8px] font-bold text-slate-300">Audience<br/>Growth</span>
                 </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                 <span className="px-2.5 py-1 bg-white/5 border border-white/10 text-[10px] font-medium rounded text-slate-300">Instagram Growth</span>
                 <span className="px-2.5 py-1 bg-white/5 border border-white/10 text-[10px] font-medium rounded text-slate-300">Creative Design</span>
                 <span className="px-2.5 py-1 bg-white/5 border border-white/10 text-[10px] font-medium rounded text-slate-300">Content Strategy</span>
              </div>
            </div>

            <a 
              href="https://www.instagram.com/shyamplastic_?igsh=M2M0OTR1b3dwN2lj" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-2 w-full py-3 bg-brand-primary hover:bg-brand-primary/90 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all"
            >
              View Instagram Profile <ArrowRight size={14} />
            </a>
          </div>

          {/* Card 2: HR Kamalini (Completed) */}
          <div className="bg-[#0B1018] rounded-2xl shadow-lg border border-white/10 p-8 flex flex-col justify-between hover:border-brand-primary/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-wider rounded-sm shadow-sm border border-emerald-200">COMPLETED</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary">PERSONAL BRANDING</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">HR Kamalini</h3>
              <p className="text-slate-400 text-xs mb-6">
                Personal branding, professional thought leadership content strategy, social media management, and community engagement for HR Kamalini.
              </p>
              
              {/* Flow Diagram */}
              <div className="flex items-center justify-between mb-8 text-brand-primary overflow-x-auto hide-scrollbar pb-2">
                 <div className="flex flex-col items-center gap-1.5 shrink-0 text-center">
                    <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary"><Users size={16} /></div>
                    <span className="text-[8px] font-bold text-slate-300">Personal<br/>Brand</span>
                 </div>
                 <div className="flex-1 h-px bg-brand-primary/20 mx-1.5 shrink-0 min-w-[12px] relative">
                    <ArrowRight size={10} className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-primary/40 translate-x-1/2" />
                 </div>
                 
                 <div className="flex flex-col items-center gap-1.5 shrink-0 text-center">
                    <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary"><FileText size={16} /></div>
                    <span className="text-[8px] font-bold text-slate-300">Thought<br/>Leadership</span>
                 </div>
                 <div className="flex-1 h-px bg-brand-primary/20 mx-1.5 shrink-0 min-w-[12px] relative">
                    <ArrowRight size={10} className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-primary/40 translate-x-1/2" />
                 </div>

                 <div className="flex flex-col items-center gap-1.5 shrink-0 text-center">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400"><LineChart size={16} /></div>
                    <span className="text-[8px] font-bold text-slate-300">Reach &<br/>Network</span>
                 </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                 <span className="px-2.5 py-1 bg-white/5 border border-white/10 text-[10px] font-medium rounded text-slate-300">Personal Branding</span>
                 <span className="px-2.5 py-1 bg-white/5 border border-white/10 text-[10px] font-medium rounded text-slate-300">Content Strategy</span>
                 <span className="px-2.5 py-1 bg-white/5 border border-white/10 text-[10px] font-medium rounded text-slate-300">Social Media Growth</span>
              </div>
            </div>

            <a 
              href="https://www.instagram.com/hrkamalini?igsh=NTR1aHpnZ24zeGlx" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-2 w-full py-3 bg-brand-primary hover:bg-brand-primary/90 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all"
            >
              View Instagram Profile <ArrowRight size={14} />
            </a>
          </div>

          {/* Card 3: B2B Concept */}
          <div className="bg-[#0B1018] rounded-2xl shadow-lg border border-white/10 p-8 flex flex-col justify-between hover:border-brand-primary/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block px-3 py-1 bg-blue-50 text-brand-primary text-[10px] font-bold uppercase tracking-wider rounded-sm shadow-sm border border-blue-100">CONCEPT</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">B2B STRATEGY</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">B2B Manufacturing Growth</h3>
              <p className="text-slate-400 text-xs mb-6">
                A digital strategy concept for manufacturing businesses to build brand authority, generate quality leads and grow consistently.
              </p>
              
              {/* Flow Diagram */}
              <div className="flex items-center justify-between mb-8 text-brand-primary overflow-x-auto hide-scrollbar pb-2">
                 <div className="flex flex-col items-center gap-1.5 shrink-0 text-center">
                    <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary"><FileText size={16} /></div>
                    <span className="text-[8px] font-bold text-slate-300">Content</span>
                 </div>
                 <div className="flex-1 h-px bg-brand-primary/20 mx-1.5 shrink-0 min-w-[12px] relative">
                    <ArrowRight size={10} className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-primary/40 translate-x-1/2" />
                 </div>
                 
                 <div className="flex flex-col items-center gap-1.5 shrink-0 text-center">
                    <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary"><Megaphone size={16} /></div>
                    <span className="text-[8px] font-bold text-slate-300">Ads</span>
                 </div>
                 <div className="flex-1 h-px bg-brand-primary/20 mx-1.5 shrink-0 min-w-[12px] relative">
                    <ArrowRight size={10} className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-primary/40 translate-x-1/2" />
                 </div>

                 <div className="flex flex-col items-center gap-1.5 shrink-0 text-center">
                    <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary"><LineChart size={16} /></div>
                    <span className="text-[8px] font-bold text-slate-300">Analytics</span>
                 </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                 <span className="px-2.5 py-1 bg-white/5 border border-white/10 text-[10px] font-medium rounded text-slate-300">Meta Ads</span>
                 <span className="px-2.5 py-1 bg-white/5 border border-white/10 text-[10px] font-medium rounded text-slate-300">Google Ads</span>
                 <span className="px-2.5 py-1 bg-white/5 border border-white/10 text-[10px] font-medium rounded text-slate-300">Reporting</span>
              </div>
            </div>

            <Link to="/contact" className="inline-flex items-center justify-center gap-2 w-full py-3 bg-white/5 border border-white/10 hover:border-brand-primary/40 hover:bg-white/10 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all">
              Discuss Strategy <ArrowRight size={14} />
            </Link>
          </div>

          {/* Card 4: Local Business Concept */}
          <div className="bg-[#0B1018] rounded-2xl shadow-lg border border-white/10 p-8 flex flex-col justify-between hover:border-brand-primary/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block px-3 py-1 bg-blue-50 text-brand-primary text-[10px] font-bold uppercase tracking-wider rounded-sm shadow-sm border border-blue-100">CONCEPT</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">LOCAL GROWTH</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Local Business Growth</h3>
              <p className="text-slate-400 text-xs mb-6">
                A concept for local businesses to increase online presence and attract more customers through targeted creative marketing.
              </p>
              
              {/* Flow Diagram */}
              <div className="flex items-center justify-between mb-8 text-brand-primary overflow-x-auto hide-scrollbar pb-2">
                 <div className="flex flex-col items-center gap-1.5 shrink-0 text-center">
                    <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary"><Calendar size={16} /></div>
                    <span className="text-[8px] font-bold text-slate-300">Calendar</span>
                 </div>
                 <div className="flex-1 h-px bg-brand-primary/20 mx-1.5 shrink-0 min-w-[12px] relative">
                    <ArrowRight size={10} className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-primary/40 translate-x-1/2" />
                 </div>
                 
                 <div className="flex flex-col items-center gap-1.5 shrink-0 text-center">
                    <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary"><MessageSquare size={16} /></div>
                    <span className="text-[8px] font-bold text-slate-300">Content</span>
                 </div>
                 <div className="flex-1 h-px bg-brand-primary/20 mx-1.5 shrink-0 min-w-[12px] relative">
                    <ArrowRight size={10} className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-primary/40 translate-x-1/2" />
                 </div>

                 <div className="flex flex-col items-center gap-1.5 shrink-0 text-center">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400"><Users size={16} /></div>
                    <span className="text-[8px] font-bold text-slate-300">Leads</span>
                 </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                 <span className="px-2.5 py-1 bg-white/5 border border-white/10 text-[10px] font-medium rounded text-slate-300">Creative Media</span>
                 <span className="px-2.5 py-1 bg-white/5 border border-white/10 text-[10px] font-medium rounded text-slate-300">Meta Ads</span>
                 <span className="px-2.5 py-1 bg-white/5 border border-white/10 text-[10px] font-medium rounded text-slate-300">Lead Funnel</span>
              </div>
            </div>

            <Link to="/contact" className="inline-flex items-center justify-center gap-2 w-full py-3 bg-white/5 border border-white/10 hover:border-brand-primary/40 hover:bg-white/10 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all">
              Discuss Strategy <ArrowRight size={14} />
            </Link>
          </div>
          
        </div>
      </Container>
    </section>
  );
}
