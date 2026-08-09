import React from 'react';
import Container from '../common/Container';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const challenges = [
  { problem: 'Manual, error-prone operations', solution: 'Custom ERP & Business Automation' },
  { problem: 'Weak online presence & slow site', solution: 'High-Performance Corporate Website' },
  { problem: 'Customers need on-the-go access', solution: 'Native & Cross-Platform Mobile Apps' },
  { problem: 'Struggling to generate B2B leads', solution: 'Data-Driven Digital Marketing' }
];

export default function BusinessChallenges() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-brand-primary mb-3">The Challenge</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">We solve complex business problems with technology.</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Off-the-shelf software rarely fits your exact business workflows. We bridge the gap by building bespoke digital ecosystems that integrate seamlessly into your operations.
            </p>
            <div className="flex items-center gap-4 text-sm font-semibold text-gray-900 bg-gray-50 px-6 py-4 rounded-xl border border-gray-200">
              <CheckCircle2 className="text-green-500" size={20} />
              Designed for scalability and performance.
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 md:p-10 border border-gray-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            
            <div className="flex flex-col gap-6 relative z-10">
              {challenges.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="flex flex-col sm:flex-row sm:items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm"
                >
                  <div className="flex-1 text-sm font-medium text-gray-500">{item.problem}</div>
                  <div className="hidden sm:block text-brand-cyan"><ArrowRight size={16} /></div>
                  <div className="block sm:hidden text-brand-cyan rotate-90 ml-2"><ArrowRight size={16} /></div>
                  <div className="flex-1 text-sm font-bold text-gray-900">{item.solution}</div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
