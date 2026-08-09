import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import { ArrowRight, Settings, Globe, Smartphone, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProposedSolutions() {
  const ecosystems = [
    { name: 'ERP Implementation', icon: Settings },
    { name: 'Corporate Website', icon: Globe },
    { name: 'Mobile Application', icon: Smartphone },
    { name: 'Digital Marketing', icon: TrendingUp }
  ];

  return (
    <section className="py-24 bg-bg-primary">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-brand-primary mb-3">Ecosystem Thinking</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900">What We Can Build</h3>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-[#0B1220] rounded-3xl overflow-hidden shadow-2xl relative"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#2563EB33_0%,_transparent_70%)] pointer-events-none"></div>
          
          <div className="p-8 md:p-12 relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
            <div className="flex-1">
              <span className="inline-block px-3 py-1 bg-gray-800 text-white text-[10px] font-bold uppercase tracking-wider rounded-sm mb-6 border border-gray-700">
                Proposed Solution
              </span>
              <h4 className="text-3xl font-display font-bold text-white mb-4">Manufacturing Digital Transformation</h4>
              <p className="text-gray-400 leading-relaxed mb-8">
                A complete end-to-end digital ecosystem conceptualized for a garment manufacturing unit. Connect production floors to digital storefronts through unified technology.
              </p>
              
              <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-10">
                {ecosystems.map((eco, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-white">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-brand-cyan shrink-0">
                      <eco.icon size={14} />
                    </div>
                    <span className="text-sm font-medium">{eco.name}</span>
                  </div>
                ))}
              </div>
              
              <Link to="/contact" className="inline-flex items-center gap-2 text-brand-cyan font-bold hover:text-white transition-colors">
                Discuss a Similar Solution <ArrowRight size={18} />
              </Link>
            </div>
            
            <div className="hidden md:block w-72 h-72 rounded-full border border-white/10 relative shrink-0">
              {/* Decorative concentric circles */}
              <div className="absolute inset-4 rounded-full border border-white/5"></div>
              <div className="absolute inset-8 rounded-full border border-brand-primary/20 bg-brand-primary/5 flex items-center justify-center">
                <Settings className="text-brand-primary w-16 h-16 opacity-50" />
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
