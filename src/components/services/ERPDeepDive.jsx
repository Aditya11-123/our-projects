import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import { Settings, Package, ShoppingCart, Calculator, Users, BookOpen } from 'lucide-react';

export default function ERPDeepDive() {
  const modules = [
    {
      title: 'Production',
      icon: Settings,
      items: ['Production planning', 'Work orders', 'Production tracking']
    },
    {
      title: 'Inventory',
      icon: Package,
      items: ['Raw materials', 'Finished goods', 'Warehouse management']
    },
    {
      title: 'Purchase & Sales',
      icon: ShoppingCart,
      items: ['Purchase orders', 'Sales orders', 'Vendor/customer management']
    },
    {
      title: 'Accounts',
      icon: Calculator,
      items: ['Invoices', 'Expenses', 'Receivables/payables']
    },
    {
      title: 'HR & Payroll',
      icon: Users,
      items: ['Employee records', 'Attendance', 'Payroll', 'Leave management']
    },
    {
      title: 'Configuration',
      icon: BookOpen,
      items: ['System setup', 'Role management', 'Team training']
    }
  ];

  return (
    <section id="erp-details" className="py-1 bg-[#0B1220] overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
      
      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold uppercase tracking-widest text-brand-cyan mb-3">Enterprise Resource Planning</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight">Bring Your Business Operations Into One System</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: ERP Dashboard Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group"
          >
            <img 
              src="/erp-dashboard.jpg" 
              alt="Enterprise Resource Planning Dashboard"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Subtle overlay glow to blend with the dark theme */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1220]/80 via-transparent to-transparent pointer-events-none mix-blend-multiply"></div>
          </motion.div>

          {/* Right: Modules */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
            {modules.map((mod, idx) => (
              <motion.div 
                key={mod.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-brand-cyan">
                    <mod.icon size={20} />
                  </div>
                  <h4 className="text-lg font-bold text-white">{mod.title}</h4>
                </div>
                <ul className="flex flex-col gap-2 pl-13">
                  {mod.items.map(item => (
                    <li key={item} className="text-sm text-slate-400 font-medium relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-brand-primary before:rounded-full">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
