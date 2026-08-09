import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import { ArrowRight, Workflow, Globe, Smartphone, TrendingUp } from 'lucide-react';

export default function ServiceChallenges() {
  const challenges = [
    {
      problem: "Manual Business Operations",
      description: "Reduce repetitive processes and bring workflows into a centralized system.",
      solution: "ERP & Business Automation",
      icon: Workflow,
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      problem: "Need a Strong Online Presence?",
      description: "Build a professional digital presence that represents your business and services.",
      solution: "Website Development",
      icon: Globe,
      color: "text-indigo-500",
      bg: "bg-indigo-50"
    },
    {
      problem: "Need Customers or Vendors on Mobile?",
      description: "Give users access to products, enquiries, orders and notifications from anywhere.",
      solution: "Mobile Applications",
      icon: Smartphone,
      color: "text-purple-500",
      bg: "bg-purple-50"
    },
    {
      problem: "Need Better Digital Reach?",
      description: "Build consistent online visibility and generate opportunities through targeted marketing.",
      solution: "Digital Marketing",
      icon: TrendingUp,
      color: "text-emerald-500",
      bg: "bg-emerald-50"
    }
  ];

  return (
    <section className="py-20 bg-bg-primary">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">From Business Challenges to Digital Solutions</h2>
        </div>

        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {challenges.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex items-start gap-5 flex-1">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${item.bg} ${item.color}`}>
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.problem}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">{item.description}</p>
                </div>
              </div>
              
              <div className="hidden md:flex items-center text-gray-300">
                <ArrowRight size={24} />
              </div>

              <div className="md:w-64 shrink-0 bg-gray-50 rounded-xl p-4 border border-gray-100 group-hover:bg-brand-primary/5 group-hover:border-brand-primary/20 transition-colors">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Solution</span>
                <span className="text-brand-primary font-bold">{item.solution}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
