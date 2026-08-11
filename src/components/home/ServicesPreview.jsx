import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import { ArrowRight, Monitor, Smartphone, Database, TrendingUp } from 'lucide-react';
import { getServices } from '../../data/services';

const iconMap = {
  Monitor, Database, Smartphone, TrendingUp
};

export default function ServicesPreview() {
  const services = getServices();

  return (
    <section className="py-1 bg-transparent">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-brand-primary mb-3">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-white">Digital solutions engineered for business growth.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div key={service.id} className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand-primary hover:shadow-lg flex flex-col group">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-brand-primary mb-6">
                  <Icon size={24} />
                </div>
                <h4 className="text-lg font-bold text-white mb-3">{service.title}</h4>
                <p className="text-sm text-blue-100/70 mb-6 flex-grow">{service.shortDescription}</p>
                <Link to={service.path} className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary group-hover:text-brand-primaryHover transition-colors mt-auto">
                  View Service <ArrowRight size={16} />
                </Link>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
