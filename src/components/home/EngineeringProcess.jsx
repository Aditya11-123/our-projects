import React from 'react';
import Container from '../common/Container';
import { motion } from 'framer-motion';
import { Search, PenTool, Layout, Code2, ShieldCheck, Rocket } from 'lucide-react';

const steps = [
  { id: '01', title: 'Discover', icon: Search, desc: 'Analyze business needs and define technical requirements.' },
  { id: '02', title: 'Plan', icon: PenTool, desc: 'Architect the solution, select stack, and plan milestones.' },
  { id: '03', title: 'Design', icon: Layout, desc: 'Create user flows, wireframes, and high-fidelity UI.' },
  { id: '04', title: 'Develop', icon: Code2, desc: 'Write clean, scalable code with continuous integration.' },
  { id: '05', title: 'Test', icon: ShieldCheck, desc: 'Rigorous QA, security testing, and performance optimization.' },
  { id: '06', title: 'Launch', icon: Rocket, desc: 'Deploy to production with zero downtime and provide support.' }
];

export default function EngineeringProcess() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-brand-primary mb-3">Our Process</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900">How we turn ideas into reality.</h3>
        </div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:grid grid-cols-6 gap-4">
          {steps.map((step, idx) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative"
            >
              <div className="text-4xl font-display font-black text-gray-100 mb-4">{step.id}</div>
              <div className="w-10 h-10 bg-gray-50 border border-gray-200 rounded-full flex items-center justify-center text-brand-primary mb-4 relative z-10">
                <step.icon size={18} />
              </div>
              {idx < steps.length - 1 && (
                <div className="absolute top-[4.5rem] left-[2.5rem] right-0 h-[1px] bg-gray-200 -z-0"></div>
              )}
              <h4 className="text-base font-bold text-gray-900 mb-2">{step.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile/Tablet Vertical Timeline */}
        <div className="lg:hidden flex flex-col gap-8">
          {steps.map((step, idx) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="flex gap-6 relative"
            >
              {idx < steps.length - 1 && (
                <div className="absolute top-10 bottom-[-2rem] left-6 w-[2px] bg-gray-100 -z-0"></div>
              )}
              <div className="w-12 h-12 shrink-0 bg-white border border-gray-200 rounded-full flex items-center justify-center text-brand-primary relative z-10 shadow-sm">
                <step.icon size={20} />
              </div>
              <div className="pt-2">
                <div className="text-xs font-bold text-gray-400 mb-1">STEP {step.id}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
