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
    <section id="erp-details" className="py-24 bg-[#0B1220] overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
      
      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold uppercase tracking-widest text-brand-cyan mb-3">Enterprise Resource Planning</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight">Bring Your Business Operations Into One System</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: CSS ERP Dashboard Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full bg-[#111827] border border-white/10 rounded-2xl p-4 shadow-2xl relative"
          >
            {/* Top Bar */}
            <div className="flex justify-between items-center border-b border-white/5 pb-4 mb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="w-32 h-6 bg-white/5 rounded-md"></div>
            </div>
            
            {/* Main Content Area */}
            <div className="flex gap-4">
              {/* Sidebar */}
              <div className="w-1/4 flex flex-col gap-3 border-r border-white/5 pr-4 hidden sm:flex">
                <div className="h-8 bg-brand-primary/20 rounded-md w-full"></div>
                <div className="h-8 bg-white/5 rounded-md w-full"></div>
                <div className="h-8 bg-white/5 rounded-md w-full"></div>
                <div className="h-8 bg-white/5 rounded-md w-full"></div>
                <div className="h-8 bg-white/5 rounded-md w-full"></div>
              </div>
              
              {/* Dashboard Content */}
              <div className="flex-1 flex flex-col gap-4">
                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="h-20 bg-white/5 border border-white/5 rounded-xl"></div>
                  <div className="h-20 bg-white/5 border border-white/5 rounded-xl"></div>
                  <div className="h-20 bg-brand-primary/10 border border-brand-primary/20 rounded-xl"></div>
                </div>
                {/* Chart Area */}
                <div className="h-40 bg-white/5 border border-white/5 rounded-xl flex items-end p-4 gap-2">
                  <div className="w-full bg-brand-cyan/20 rounded-t-sm h-[40%]"></div>
                  <div className="w-full bg-brand-cyan/20 rounded-t-sm h-[60%]"></div>
                  <div className="w-full bg-brand-cyan/40 rounded-t-sm h-[30%]"></div>
                  <div className="w-full bg-brand-primary/60 rounded-t-sm h-[80%]"></div>
                  <div className="w-full bg-brand-primary/80 rounded-t-sm h-[100%]"></div>
                  <div className="w-full bg-brand-primary rounded-t-sm h-[70%]"></div>
                </div>
                {/* List Area */}
                <div className="h-24 bg-white/5 border border-white/5 rounded-xl flex flex-col gap-2 p-3">
                  <div className="h-4 bg-white/10 rounded w-full"></div>
                  <div className="h-4 bg-white/5 rounded w-3/4"></div>
                  <div className="h-4 bg-white/5 rounded w-5/6"></div>
                </div>
              </div>
            </div>
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
