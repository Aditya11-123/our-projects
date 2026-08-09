import React from 'react';
import { motion } from 'framer-motion';

export default function MobileMockup() {
  return (
    <div className="relative w-full flex justify-center items-center py-10 gap-8 h-[350px]">
      <motion.div 
        initial={{ opacity: 0, y: 20, rotate: -5 }}
        animate={{ opacity: 1, y: 0, rotate: -5 }}
        className="w-40 h-[280px] bg-white rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border-4 border-gray-100 overflow-hidden relative"
      >
        <div className="w-12 h-3 bg-gray-100 absolute top-0 left-1/2 -translate-x-1/2 rounded-b-xl z-10"></div>
        <div className="w-full h-32 bg-brand-primary/10 p-4">
           <div className="w-8 h-8 rounded-full bg-brand-primary/20 mb-2 mt-2"></div>
           <div className="w-20 h-2 rounded bg-brand-primary/40 mb-1"></div>
           <div className="w-12 h-2 rounded bg-brand-primary/20"></div>
        </div>
        <div className="p-3 grid grid-cols-2 gap-2 -mt-4 relative z-10">
           <div className="w-full h-20 bg-white shadow-sm rounded-xl border border-gray-50 flex items-end p-2">
             <div className="w-8 h-1 rounded bg-gray-200"></div>
           </div>
           <div className="w-full h-20 bg-white shadow-sm rounded-xl border border-gray-50 flex items-end p-2">
             <div className="w-10 h-1 rounded bg-gray-200"></div>
           </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 40, rotate: 5 }}
        animate={{ opacity: 1, y: 20, rotate: 5 }}
        className="w-40 h-[280px] bg-[#0B1220] rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] border-4 border-[#1E293B] overflow-hidden relative"
      >
        <div className="w-12 h-3 bg-[#1E293B] absolute top-0 left-1/2 -translate-x-1/2 rounded-b-xl z-10"></div>
        <div className="p-4 pt-10">
          <div className="flex justify-between items-center mb-6">
            <div className="w-16 h-2 rounded bg-white/20"></div>
            <div className="w-4 h-4 rounded bg-brand-cyan/20"></div>
          </div>
          <div className="flex flex-col gap-3">
             <div className="w-full h-12 bg-white/5 rounded-xl border border-white/5 flex items-center p-2 gap-2">
               <div className="w-8 h-8 rounded bg-white/10"></div>
               <div className="w-12 h-1.5 rounded bg-white/20"></div>
             </div>
             <div className="w-full h-12 bg-white/5 rounded-xl border border-white/5 flex items-center p-2 gap-2">
               <div className="w-8 h-8 rounded bg-brand-primary/20"></div>
               <div className="w-10 h-1.5 rounded bg-brand-primary/50"></div>
             </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
