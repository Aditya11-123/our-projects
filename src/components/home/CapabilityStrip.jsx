import React from 'react';
import Container from '../common/Container';
import { Monitor, Smartphone, Database, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const capabilities = [
  { name: 'Web Development', icon: Monitor },
  { name: 'ERP Solutions', icon: Database },
  { name: 'Mobile Applications', icon: Smartphone },
  { name: 'Digital Marketing', icon: TrendingUp },
];

export default function CapabilityStrip() {
  return (
    <div className="bg-brand-primary/10 backdrop-blur-md border-b border-brand-primary/20 py-2">
      <Container noPadding>
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-4">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400 w-full md:w-auto text-center">Core Capabilities</span>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {capabilities.map((cap, idx) => (
              <motion.div 
                key={cap.name} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="flex items-center gap-2 text-white"
              >
                <cap.icon size={18} className="text-brand-primary" />
                <span className="text-sm font-semibold">{cap.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
