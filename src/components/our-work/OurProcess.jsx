import React from 'react';
import Container from '../common/Container';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function OurProcess() {
  const steps = [
    { num: '01', title: 'Understand', desc: 'We understand your business, challenges and objectives.' },
    { num: '02', title: 'Plan', desc: 'We plan the right solution, strategy and technology.' },
    { num: '03', title: 'Design', desc: 'We design user-friendly interfaces and experiences.' },
    { num: '04', title: 'Develop', desc: 'We build clean, scalable and secure solutions.' },
    { num: '05', title: 'Test', desc: 'We test thoroughly for quality, performance and security.' },
    { num: '06', title: 'Launch', desc: 'We deploy and support your business growth.' }
  ];

  return (
    <section className="py-12 md:py-16 bg-white scroll-mt-[100px]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">
              Our Approach
            </h2>
            <p className="text-gray-600 text-sm">
              A clear process that ensures your project is delivered with quality, transparency and on-time execution.
            </p>
          </div>
          <Link to="/services" className="text-brand-primary font-bold text-sm inline-flex items-center hover:text-brand-primaryHover transition-colors shrink-0">
            View Our Process In Detail <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>

        <div className="relative">
           {/* Connecting Line */}
           <div className="absolute top-6 left-6 right-6 h-px bg-brand-primary/30 z-0 hidden lg:block"></div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
             {steps.map((step, idx) => (
               <div key={idx} className="flex flex-col items-center text-center relative z-10">
                 <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-sm mb-4 shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                   {step.num}
                 </div>
                 <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                 <p className="text-[10px] text-gray-500 max-w-[150px] leading-tight">
                   {step.desc}
                 </p>
               </div>
             ))}
           </div>
        </div>
      </Container>
    </section>
  );
}
