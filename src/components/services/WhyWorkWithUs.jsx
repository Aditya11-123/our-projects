import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import { Target, Sliders, Layers, Cpu, MessageSquare, Maximize } from 'lucide-react';

export default function WhyWorkWithUs() {
  const points = [
    {
      title: "Business-first thinking",
      desc: "We focus on the business requirement before choosing the technology.",
      icon: Target
    },
    {
      title: "Custom solutions",
      desc: "Solutions are adapted to project requirements rather than forcing a fixed template.",
      icon: Sliders
    },
    {
      title: "End-to-end delivery",
      desc: "From planning and development to testing and deployment.",
      icon: Layers
    },
    {
      title: "Modern technology",
      desc: "Use the appropriate modern technologies for web, mobile and business applications.",
      icon: Cpu
    },
    {
      title: "Clear communication",
      desc: "Keep clients involved through development milestones and reviews.",
      icon: MessageSquare
    },
    {
      title: "Scalable solutions",
      desc: "Build systems that can evolve as business requirements grow.",
      icon: Maximize
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-brand-primary mb-3">Why Work With Us</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900">A partner for your digital growth.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, idx) => (
            <motion.div 
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-bg-primary rounded-2xl p-8 border border-gray-100"
            >
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-brand-primary mb-6">
                <point.icon size={24} />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">{point.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
