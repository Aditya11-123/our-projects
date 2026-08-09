import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import { ArrowRight, Globe, Database, Smartphone, TrendingUp } from 'lucide-react';

export default function CoreServicesGrid() {
  const services = [
    {
      id: 'website',
      title: "Website Development",
      description: "Build a professional digital presence that works for your business.",
      icon: Globe,
      tags: ["Corporate Websites", "E-Commerce", "Product Catalogue", "CMS", "SEO", "Deployment"],
      link: "#website-details"
    },
    {
      id: 'erp',
      title: "ERP & Business Solutions",
      description: "Connect your business operations through a centralized digital system.",
      icon: Database,
      tags: ["Production", "Inventory", "Purchase & Sales", "Accounts", "HR & Payroll", "Reporting"],
      link: "#erp-details"
    },
    {
      id: 'mobile',
      title: "Mobile App Development",
      description: "Bring your products, services and business workflows to mobile.",
      icon: Smartphone,
      tags: ["Android", "iOS", "Authentication", "Catalogue", "Orders", "Notifications", "API Integration"],
      link: "#mobile-details"
    },
    {
      id: 'marketing',
      title: "Digital Marketing",
      description: "Turn your digital presence into a consistent growth channel.",
      icon: TrendingUp,
      tags: ["Social Media", "Creative Content", "Performance Marketing", "Campaigns", "Analytics", "Reporting"],
      link: "#marketing-details"
    }
  ];

  return (
    <section id="core-services" className="py-24 bg-white border-t border-gray-100">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-brand-primary mb-3">Our Core Services</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900">Four primary service offerings</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group bg-bg-primary rounded-3xl p-8 md:p-10 border border-gray-100 hover:border-brand-primary/30 transition-colors shadow-sm hover:shadow-md flex flex-col h-full"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8 text-brand-primary">
                <service.icon size={28} />
              </div>
              
              <h4 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed mb-8">{service.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-10 mt-auto">
                {service.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium text-gray-600 bg-white border border-gray-200 px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              
              <a 
                href={service.link}
                className="inline-flex items-center text-sm font-bold text-brand-primary hover:text-brand-primaryHover transition-colors mt-auto"
              >
                Explore {service.title.split(' ')[0]} Solutions <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
