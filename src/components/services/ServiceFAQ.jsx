import React, { useState } from 'react';
import Container from '../common/Container';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ServiceFAQ() {
  const faqs = [
    {
      q: "Can you build a website according to our business requirements?",
      a: "Yes. We can plan the structure, UI, development, integrations and deployment based on the project scope."
    },
    {
      q: "Can you integrate a website with an ERP?",
      a: "Yes, where the required APIs and integration requirements are available."
    },
    {
      q: "Can you build both Android and iOS applications?",
      a: "Yes, depending on project requirements and scope. We use cross-platform technologies to deliver native-like experiences on both platforms efficiently."
    },
    {
      q: "Do you provide post-launch support?",
      a: "Support and maintenance can be defined according to the project requirements. We offer ongoing maintenance packages for continuous operations."
    },
    {
      q: "Can you work with an existing system?",
      a: "Yes, after reviewing the existing architecture, APIs and integration requirements. We can audit your current infrastructure before committing."
    },
    {
      q: "How do you start a project?",
      a: "We begin by understanding your requirements, business workflow, users and expected outcome before defining the implementation scope."
    }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Answers to common questions about working with us.</p>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`border rounded-2xl overflow-hidden transition-colors ${openIndex === idx ? 'border-brand-primary/20 bg-brand-primary/5' : 'border-gray-200 bg-white'}`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                  className="flex items-center justify-between w-full p-6 text-left"
                >
                  <span className="font-bold text-gray-900 text-base md:text-lg pr-8">{faq.q}</span>
                  <ChevronDown 
                    size={20} 
                    className={`shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-brand-primary' : 'text-gray-400'}`} 
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed text-sm md:text-base">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
