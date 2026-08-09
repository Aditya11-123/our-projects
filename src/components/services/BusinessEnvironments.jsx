import React from 'react';
import Container from '../common/Container';

export default function BusinessEnvironments() {
  const environments = [
    "Manufacturing",
    "Product Businesses",
    "Service Businesses",
    "B2B Operations",
    "Growing Businesses"
  ];

  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="max-w-md text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
              Solutions That Adapt to Different Business Needs
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Our solutions can be adapted to different business workflows and requirements.
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-3 max-w-lg">
            {environments.map(env => (
              <span key={env} className="bg-bg-primary border border-gray-200 text-gray-700 px-5 py-2.5 rounded-full text-sm font-bold shadow-sm">
                {env}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
