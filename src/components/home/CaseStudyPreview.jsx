import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import { getCaseStudies } from '../../data/caseStudies';
import { ArrowRight, Check, Database } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CaseStudyPreview() {
  const caseStudy = getCaseStudies()[0];
  if (!caseStudy) return null;

  return (
    <section className="py-24 bg-brand-navy text-white overflow-hidden relative">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <Container className="relative z-10">
        <div className="flex items-center gap-3 mb-10">
          <span className="px-3 py-1 bg-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-wider rounded-full border border-brand-primary/30">
            {caseStudy.status === 'proposal' ? 'Proposed Solution' : 'Case Study'}
          </span>
          <span className="text-gray-400 text-sm font-medium">{caseStudy.industry}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 leading-tight">
              {caseStudy.title}
            </h2>
            
            <div className="space-y-8 mb-10">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">The Challenge</h4>
                <p className="text-gray-300 leading-relaxed">{caseStudy.challenge}</p>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-brand-cyan mb-2">The Solution</h4>
                <p className="text-gray-300 leading-relaxed">{caseStudy.solution}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {caseStudy.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <Check className="text-brand-primary mt-1 shrink-0" size={16} />
                  <span className="text-sm text-gray-300 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <Link to={`/case-studies`} className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-navy font-bold rounded-xl hover:bg-gray-100 transition-colors">
              View Full Case Study <ArrowRight size={18} />
            </Link>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white/5 backdrop-blur-sm aspect-[4/3] flex items-center justify-center"
          >
            {/* Placeholder for case study image/dashboard visual */}
            <div className="w-full h-full bg-gradient-to-br from-brand-primary/20 to-brand-navy/80 flex flex-col items-center justify-center p-8 text-center">
              <Database className="text-brand-primary/50 w-24 h-24 mb-6" />
              <div className="w-3/4 h-32 bg-white/5 rounded-lg border border-white/10 mb-4 backdrop-blur-md"></div>
              <div className="w-1/2 h-8 bg-white/5 rounded-lg border border-white/10 backdrop-blur-md"></div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
