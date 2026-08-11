import React from 'react';
import Container from '../common/Container';
import { ArrowRight, Leaf, Truck, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function FeaturedProject({ project }) {
  if (!project) return null;

  return (
    <section className="py-1 md:py-1 bg-transparent scroll-mt-[100px]" id="featured-project">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary mb-4 block">FEATURED PROJECT</span>
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-[10px] font-bold uppercase tracking-wider rounded-sm shadow-sm border border-blue-200 mb-4">COMPLETED</span>
              <h2 className="text-4xl font-display font-bold text-white mb-2">{project.title}</h2>
              <h3 className="text-lg font-bold text-gray-100 mb-4">Website Development</h3>
            </div>
            
            <p className="text-blue-100/70 mb-8 text-sm leading-relaxed">
              A modern business website designed to present fresh produce and agricultural solutions with a clean, engaging and conversion-focused experience.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-10">
               <span className="px-3 py-1.5 bg-transparent border border-white/10 shadow-[0_4px_24px_rgba(37,99,235,0.15)] hover:shadow-[0_8px_32px_rgba(37,99,235,0.4)] transition-all duration-300 text-xs font-medium rounded text-gray-200 shadow-sm">React</span>
               <span className="px-3 py-1.5 bg-transparent border border-white/10 shadow-[0_4px_24px_rgba(37,99,235,0.15)] hover:shadow-[0_8px_32px_rgba(37,99,235,0.4)] transition-all duration-300 text-xs font-medium rounded text-gray-200 shadow-sm">Tailwind CSS</span>
               <span className="px-3 py-1.5 bg-transparent border border-white/10 shadow-[0_4px_24px_rgba(37,99,235,0.15)] hover:shadow-[0_8px_32px_rgba(37,99,235,0.4)] transition-all duration-300 text-xs font-medium rounded text-gray-200 shadow-sm">Framer Motion</span>
               <span className="px-3 py-1.5 bg-transparent border border-white/10 shadow-[0_4px_24px_rgba(37,99,235,0.15)] hover:shadow-[0_8px_32px_rgba(37,99,235,0.4)] transition-all duration-300 text-xs font-medium rounded text-gray-200 shadow-sm">Node.js</span>
            </div>
            
            <button className="text-brand-primary font-bold text-sm inline-flex items-center hover:text-brand-primaryHover transition-colors">
              View Project <ArrowRight size={16} className="ml-2" />
            </button>
          </div>

          <div className="lg:col-span-8">
             <div className="w-full bg-transparent rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-white/10 overflow-hidden relative aspect-[16/10] flex flex-col">
                {/* Browser top */}
                <div className="h-6 bg-transparent flex items-center px-4 gap-1.5 border-b border-white/10 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                </div>
                {/* Website content */}
                <div className="flex-1 bg-gradient-to-br from-[#F5F9F4] to-white relative p-8 flex flex-col">
                   <div className="flex justify-between items-center mb-12">
                      <div className="flex items-center gap-2">
                         <div className="w-6 h-6 bg-green-600 rounded-md flex items-center justify-center text-white"><Leaf size={14}/></div>
                         <span className="font-bold text-white tracking-tight">BDM FRESH</span>
                      </div>
                      <div className="flex gap-6 text-[10px] font-bold text-blue-100/70 hidden sm:flex">
                        <span>Home</span>
                        <span>Products</span>
                        <span>About Us</span>
                        <span>Contact</span>
                      </div>
                      <div className="px-4 py-2 bg-green-600 text-white text-[10px] font-bold rounded-full">
                        Order Fresh
                      </div>
                   </div>
                   
                   <div className="flex-1 flex items-center">
                     <div className="max-w-[50%]">
                       <h1 className="text-4xl lg:text-5xl font-bold text-green-900 leading-tight mb-4 tracking-tight">
                         Fresh Produce.<br/>Better Future.
                       </h1>
                       <p className="text-blue-100/70 text-[11px] mb-6">
                         Delivering farm-fresh quality produce with trust and transparency.
                       </p>
                       <div className="px-4 py-2 bg-green-600 text-white text-[10px] font-bold rounded-full inline-block">
                          Explore Products
                       </div>
                     </div>
                   </div>

                   {/* Features bottom row */}
                   <div className="absolute bottom-6 left-8 right-8 bg-white/80 backdrop-blur-md border border-white p-4 rounded-xl flex justify-between shadow-lg">
                      <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center"><CheckCircle2 size={14}/></div>
                         <div>
                            <div className="text-[9px] font-bold text-white">100% Organic</div>
                            <div className="text-[8px] text-blue-100/50">Quality Assured</div>
                         </div>
                      </div>
                      <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center"><Leaf size={14}/></div>
                         <div>
                            <div className="text-[9px] font-bold text-white">Farm Direct</div>
                            <div className="text-[8px] text-blue-100/50">Fresh & Healthy</div>
                         </div>
                      </div>
                      <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center"><Truck size={14}/></div>
                         <div>
                            <div className="text-[9px] font-bold text-white">Fast Delivery</div>
                            <div className="text-[8px] text-blue-100/50">On Time</div>
                         </div>
                      </div>
                      <div className="flex items-center gap-3 hidden md:flex">
                         <div className="w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center"><ShieldCheck size={14}/></div>
                         <div>
                            <div className="text-[9px] font-bold text-white">Trusted By</div>
                            <div className="text-[8px] text-blue-100/50">Happy Customers</div>
                         </div>
                      </div>
                   </div>

                   {/* Veg Image Placeholder right side */}
                   <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[60%] aspect-square bg-[url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center rounded-full shadow-2xl border-8 border-white"></div>
                </div>
             </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
