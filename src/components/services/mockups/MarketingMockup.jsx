import React from 'react';
import { motion } from 'framer-motion';

export default function MarketingMockup() {
  return (
    <div className="relative w-full flex justify-center items-center py-10 h-[350px]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[500px] bg-white rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden relative z-10 p-5 flex flex-col gap-4"
      >
        <div className="flex items-center justify-between mb-2">
          <div className="w-24 h-3 bg-gray-200 rounded"></div>
          <div className="w-16 h-4 bg-blue-50 text-brand-primary rounded-full text-[8px] flex items-center justify-center font-bold">This Month</div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-2">
           <div className="bg-gray-50 border border-gray-100 rounded-lg p-3">
             <div className="w-12 h-2 bg-gray-200 rounded mb-2"></div>
             <div className="w-16 h-4 bg-brand-primary/80 rounded mb-1"></div>
             <div className="w-8 h-1.5 bg-green-400 rounded"></div>
           </div>
           <div className="bg-gray-50 border border-gray-100 rounded-lg p-3">
             <div className="w-10 h-2 bg-gray-200 rounded mb-2"></div>
             <div className="w-14 h-4 bg-brand-primary/60 rounded mb-1"></div>
             <div className="w-10 h-1.5 bg-green-400 rounded"></div>
           </div>
           <div className="bg-gray-50 border border-gray-100 rounded-lg p-3">
             <div className="w-14 h-2 bg-gray-200 rounded mb-2"></div>
             <div className="w-12 h-4 bg-brand-primary/40 rounded mb-1"></div>
             <div className="w-6 h-1.5 bg-red-400 rounded"></div>
           </div>
        </div>

        <div className="w-full bg-gray-50 border border-gray-100 rounded-lg p-4 flex-1 flex flex-col">
           <div className="w-20 h-2 bg-gray-200 rounded mb-6"></div>
           <div className="flex-1 flex items-end gap-2 px-2">
             <div className="flex-1 bg-brand-primary/20 h-[30%] rounded-t-sm"></div>
             <div className="flex-1 bg-brand-primary/40 h-[45%] rounded-t-sm"></div>
             <div className="flex-1 bg-brand-primary/30 h-[40%] rounded-t-sm"></div>
             <div className="flex-1 bg-brand-cyan/60 h-[65%] rounded-t-sm"></div>
             <div className="flex-1 bg-brand-cyan/80 h-[80%] rounded-t-sm"></div>
             <div className="flex-1 bg-brand-primary h-[100%] rounded-t-sm"></div>
           </div>
        </div>
      </motion.div>
    </div>
  );
}
