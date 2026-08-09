import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Package, ShoppingCart, Calculator, Users } from 'lucide-react';

export default function ERPMockup() {
  return (
    <div className="relative w-full flex justify-center items-center py-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[500px] bg-[#0B1220] rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] border border-white/10 overflow-hidden relative z-10 p-5 flex flex-col gap-4"
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-brand-cyan/20 rounded flex items-center justify-center text-brand-cyan">
              <Settings size={14} />
            </div>
            <span className="text-white text-sm font-bold">Enterprise Core</span>
          </div>
          <div className="flex gap-2">
            <div className="w-16 h-2 rounded bg-white/10"></div>
            <div className="w-8 h-2 rounded bg-white/10"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/5 rounded-lg p-4 border border-white/5">
            <div className="flex items-center gap-2 mb-3 text-gray-300">
              <Package size={14} className="text-brand-cyan" />
              <span className="text-xs font-bold">Inventory</span>
            </div>
            <div className="w-full h-1 bg-white/10 rounded overflow-hidden">
              <div className="w-[75%] h-full bg-brand-cyan"></div>
            </div>
            <div className="text-[9px] text-gray-500 mt-2">75% Capacity</div>
          </div>

          <div className="bg-white/5 rounded-lg p-4 border border-white/5">
            <div className="flex items-center gap-2 mb-3 text-gray-300">
              <Calculator size={14} className="text-green-400" />
              <span className="text-xs font-bold">Accounts</span>
            </div>
            <div className="w-full h-1 bg-white/10 rounded overflow-hidden">
              <div className="w-[45%] h-full bg-green-400"></div>
            </div>
            <div className="text-[9px] text-gray-500 mt-2">Receivables</div>
          </div>
        </div>

        <div className="bg-white/5 rounded-lg p-4 border border-white/5 flex flex-col gap-3">
           <div className="flex items-center justify-between text-gray-300">
             <div className="flex items-center gap-2">
               <ShoppingCart size={14} className="text-brand-primary" />
               <span className="text-xs font-bold">Recent Orders</span>
             </div>
             <span className="text-[9px] bg-brand-primary/20 text-brand-primary px-2 py-0.5 rounded">Active</span>
           </div>
           <div className="flex flex-col gap-2 mt-2">
             <div className="w-full h-8 bg-white/5 rounded flex items-center px-3 justify-between">
                <div className="w-16 h-1.5 bg-white/20 rounded"></div>
                <div className="w-8 h-1.5 bg-brand-primary/50 rounded"></div>
             </div>
             <div className="w-full h-8 bg-white/5 rounded flex items-center px-3 justify-between">
                <div className="w-20 h-1.5 bg-white/20 rounded"></div>
                <div className="w-10 h-1.5 bg-green-500/50 rounded"></div>
             </div>
           </div>
        </div>

      </motion.div>
    </div>
  );
}
