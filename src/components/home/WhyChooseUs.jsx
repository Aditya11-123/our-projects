import React from 'react';
import Container from '../common/Container';
import { Target, Code2, Layers, Zap, Eye, HeadphonesIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const reasons = [
  { icon: Target, title: 'Business-First Approach', desc: 'We align our technical architecture directly with your business goals.' },
  { icon: Code2, title: 'Custom Solutions', desc: 'No templates. Every platform is tailored to your unique workflows.' },
  { icon: Layers, title: 'End-to-End Development', desc: 'From UX design to cloud deployment and infrastructure.' },
  { icon: Zap, title: 'Modern Technology', desc: 'We use the latest stable frameworks for maximum performance.' },
  { icon: Eye, title: 'Transparent Process', desc: 'Clear communication, visible milestones, and no technical jargon.' },
  { icon: HeadphonesIcon, title: 'Ongoing Support', desc: 'We maintain and scale your platform long after the initial launch.' }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-bg-primary">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-brand-primary mb-3">Why Choose Us</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900">A technology partner you can rely on.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div 
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex gap-5 items-start"
            >
              <div className="w-12 h-12 shrink-0 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-brand-primary shadow-sm">
                <reason.icon size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{reason.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{reason.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
