import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';

export default function DeliveryProcess() {
  const steps = [
    { id: '01', title: 'Understand', desc: 'We understand your business and requirements.' },
    { id: '02', title: 'Plan', desc: 'We define scope, workflows and technical requirements.' },
    { id: '03', title: 'Design', desc: 'We create the user experience and system structure.' },
    { id: '04', title: 'Develop', desc: 'We build and integrate the solution.' },
    { id: '05', title: 'Test', desc: 'We test functionality, usability and integrations.' },
    { id: '06', title: 'Launch & Support', desc: 'We assist with deployment and post-launch improvements.' }
  ];

  return (
    <section className="py-24 bg-bg-primary">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-sm font-bold uppercase tracking-widest text-brand-primary mb-3">Our Delivery Process</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900">From Requirement to Reality</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
          {steps.map((step, idx) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative"
            >
              <div className="text-5xl font-display font-black text-gray-100 absolute -top-6 -left-4 -z-10 select-none">
                {step.id}
              </div>
              <div className="pl-4 border-l-2 border-brand-primary/30 h-full">
                <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
