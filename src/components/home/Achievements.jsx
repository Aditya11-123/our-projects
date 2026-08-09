import React from 'react';
import Container from '../common/Container';
import { Briefcase, Globe, Code, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const achievements = [
  { icon: Briefcase, title: 'Real-World Projects', desc: 'Proven track record of delivering functional software.' },
  { icon: Globe, title: 'Multiple Domains', desc: 'Experience across manufacturing, retail, and tech.' },
  { icon: Code, title: 'Modern Stack', desc: 'Expertise in React, Node, AWS, and modern cloud infrastructure.' },
  { icon: Smartphone, title: 'Cross-Platform', desc: 'Unified solutions for Web, iOS, and Android ecosystems.' },
];

export default function Achievements() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-brand-primary mb-3">Our Track Record</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900">Proven engineering capability.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-white rounded-full mx-auto flex items-center justify-center text-brand-primary shadow-sm border border-gray-100 mb-4">
                <item.icon size={20} />
              </div>
              <h4 className="text-base font-bold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
