import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Settings, Search, BarChart3, LayoutGrid, Monitor, PenTool } from 'lucide-react';

export default function WebsiteMockup() {
  return (
    <div className="relative w-full flex justify-center items-center py-10">
      
      {/* Background Decorative Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20 hidden md:block">
        <svg className="w-full h-full" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 200 C 150 150, 350 250, 400 200" stroke="#2563EB" strokeWidth="1" strokeDasharray="4 4"/>
          <path d="M150 100 C 200 150, 300 100, 350 150" stroke="#06B6D4" strokeWidth="1" strokeDasharray="4 4"/>
        </svg>
      </div>

      {/* Floating Capability Pills */}
      <motion.div 
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="absolute left-0 top-12 z-20 flex flex-col items-center gap-2 hidden lg:flex"
      >
        <div className="bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] p-3 flex flex-col items-center border border-gray-50 w-20">
          <div className="w-8 h-8 rounded-lg bg-blue-50 text-brand-primary flex items-center justify-center mb-1">
            <Smartphone size={16} />
          </div>
          <span className="text-[9px] font-bold text-gray-700">Responsive</span>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="absolute left-8 bottom-32 z-20 flex flex-col items-center gap-2 hidden lg:flex"
      >
        <div className="bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] p-3 flex flex-col items-center border border-gray-50 w-20">
          <div className="w-8 h-8 rounded-lg bg-blue-50 text-brand-primary flex items-center justify-center mb-1">
            <Settings size={16} />
          </div>
          <span className="text-[9px] font-bold text-gray-700">CMS</span>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="absolute right-0 top-24 z-20 flex flex-col items-center gap-2 hidden lg:flex"
      >
        <div className="bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] p-3 flex flex-col items-center border border-gray-50 w-20">
          <div className="w-8 h-8 rounded-lg bg-blue-50 text-brand-primary flex items-center justify-center mb-1">
            <Search size={16} />
          </div>
          <span className="text-[9px] font-bold text-gray-700">SEO</span>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute right-4 bottom-24 z-20 flex flex-col items-center gap-2 hidden lg:flex"
      >
        <div className="bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] p-3 flex flex-col items-center border border-gray-50 w-20">
          <div className="w-8 h-8 rounded-lg bg-blue-50 text-brand-primary flex items-center justify-center mb-1">
            <BarChart3 size={16} />
          </div>
          <span className="text-[9px] font-bold text-gray-700">Analytics</span>
        </div>
      </motion.div>

      {/* Main Browser Mockup */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[500px] bg-white rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden relative z-10"
      >
        {/* Browser Chrome */}
        <div className="h-10 bg-[#0B1220] flex items-center px-4 gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
          </div>
        </div>

        {/* Website Content */}
        <div className="p-5 flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-brand-primary rounded-sm"></div>
              <span className="text-xs font-bold text-gray-900">BrandCo.</span>
            </div>
            <div className="flex gap-4 text-[9px] font-medium text-gray-500 hidden sm:flex">
              <span>Home</span>
              <span>About</span>
              <span>Products</span>
              <span>Services</span>
              <span>Contact</span>
            </div>
            <div className="px-3 py-1 bg-brand-primary text-white text-[9px] font-bold rounded-full">
              Get in Touch
            </div>
          </div>

          {/* Hero Section */}
          <div className="flex flex-col sm:flex-row gap-6 mb-8">
            <div className="flex-1 pt-2">
              <div className="text-[8px] font-bold text-brand-primary tracking-wider uppercase mb-2">Powering Businesses</div>
              <div className="text-xl font-bold text-gray-900 leading-tight mb-3">
                Innovative Solutions for Modern Businesses
              </div>
              <div className="text-[9px] text-gray-500 leading-relaxed mb-4">
                We create digital experiences that help businesses grow, engage and succeed in the digital world.
              </div>
              <div className="flex gap-2">
                <div className="px-3 py-1.5 bg-brand-primary text-white text-[9px] font-bold rounded">Learn More</div>
                <div className="px-3 py-1.5 border border-gray-200 text-gray-600 text-[9px] font-bold rounded">Our Services</div>
              </div>
            </div>
            <div className="flex-1 relative h-32 bg-gray-100 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 to-brand-cyan/20"></div>
              {/* Fake building graphic */}
              <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-white/40 backdrop-blur-sm border-l border-t border-white/50 rounded-tl-xl flex flex-col justify-end p-2">
                <div className="w-full h-1/2 border-t border-white/50 flex flex-col justify-around">
                   <div className="w-full h-px bg-white/50"></div>
                   <div className="w-full h-px bg-white/50"></div>
                </div>
              </div>

              {/* Floating Chart Widget */}
              <div className="absolute bottom-2 left-2 bg-white rounded shadow-sm p-2 w-24">
                <div className="text-[7px] text-gray-500 mb-1">Business Growth</div>
                <div className="text-xs font-bold text-green-500 mb-1">+45%</div>
                <div className="flex items-end gap-0.5 h-6">
                  <div className="w-full bg-brand-primary/20 h-[30%] rounded-t-sm"></div>
                  <div className="w-full bg-brand-primary/40 h-[50%] rounded-t-sm"></div>
                  <div className="w-full bg-brand-primary/60 h-[70%] rounded-t-sm"></div>
                  <div className="w-full bg-brand-primary h-[90%] rounded-t-sm"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Cards Section */}
          <div className="text-[10px] font-bold text-gray-900 mb-3">Our Services</div>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
              <Monitor size={12} className="text-brand-primary mb-2" />
              <div className="text-[9px] font-bold text-gray-800 mb-1">Web Development</div>
              <div className="text-[7px] text-gray-500 leading-tight">Modern, responsive websites that drive results.</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
              <ShoppingBagIcon />
              <div className="text-[9px] font-bold text-gray-800 mb-1">E-Commerce</div>
              <div className="text-[7px] text-gray-500 leading-tight">Online stores built to convert and scale.</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
              <PenTool size={12} className="text-brand-primary mb-2" />
              <div className="text-[9px] font-bold text-gray-800 mb-1">UI/UX Design</div>
              <div className="text-[7px] text-gray-500 leading-tight">Beautiful designs that delight users.</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Small helper icon since ShoppingBag is not imported top-level in this file context initially
function ShoppingBagIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary mb-2">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
      <path d="M3 6h18"></path>
      <path d="M16 10a4 4 0 0 1-8 0"></path>
    </svg>
  );
}
