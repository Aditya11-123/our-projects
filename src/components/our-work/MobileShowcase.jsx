import React from 'react';
import Container from '../common/Container';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MobileShowcase({ project }) {
  if (!project) return null;

  return (
    <section className="py-1 md:py-1 bg-transparent border-t border-white/10 overflow-hidden scroll-mt-[100px]" id="mobile-projects">
      <Container>
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-white mb-2">
            Mobile Experience
          </h2>
          <p className="text-blue-100/70 text-sm">
            Mobile applications built for real users with focused functionality and smooth experiences.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
           
           {/* Left: Phone Mockups */}
           <div className="w-full lg:w-1/2 relative h-[500px] flex items-center justify-center">
              
              {/* Background dots/grid */}
              <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#e5e7eb 2px, transparent 2px)', backgroundSize: '32px 32px' }}></div>
              
              {/* Left Phone */}
              <div className="absolute z-10 w-[220px] h-[460px] bg-transparent rounded-[2.5rem] shadow-xl border-8 border-[#0B1220] overflow-hidden -translate-x-[40%] scale-90 opacity-80">
                 <div className="w-24 h-6 bg-[#0B1220] absolute top-0 left-1/2 -translate-x-1/2 rounded-b-2xl z-20"></div>
                 <div className="w-full h-1/2 bg-[#fdf2e9] p-4 flex flex-col justify-end">
                    <div className="w-12 h-12 rounded-full bg-orange-100 mb-2"></div>
                    <div className="w-24 h-3 bg-gray-900 rounded mb-2"></div>
                    <div className="w-16 h-2 bg-gray-500 rounded"></div>
                 </div>
                 <div className="p-4 grid gap-3">
                   <div className="w-full h-16 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm"></div>
                   <div className="w-full h-16 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm"></div>
                 </div>
              </div>

              {/* Center Phone */}
              <div className="absolute z-30 w-[240px] h-[500px] bg-transparent rounded-[2.5rem] shadow-2xl border-8 border-[#0B1220] overflow-hidden">
                 <div className="w-24 h-6 bg-[#0B1220] absolute top-0 left-1/2 -translate-x-1/2 rounded-b-2xl z-20"></div>
                 <div className="w-full h-[60%] bg-[#fdf2e9] flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-16 h-16 bg-orange-200 rounded-full mb-6"></div>
                    <h3 className="font-display font-bold text-white text-xl leading-tight mb-2">Welcome to<br/>Indian Cocktail<br/>Academy</h3>
                    <div className="w-12 h-1 bg-gray-900 rounded-full"></div>
                 </div>
                 <div className="w-full h-[40%] bg-transparent p-6 flex flex-col justify-end gap-3 pb-8">
                    <div className="w-full py-3 bg-[#0B1220] text-white text-[10px] font-bold text-center rounded-xl">Get Started</div>
                    <div className="w-full py-3 bg-gray-100 text-white text-[10px] font-bold text-center rounded-xl">Log In</div>
                 </div>
              </div>

              {/* Right Phone */}
              <div className="absolute z-20 w-[220px] h-[460px] bg-transparent rounded-[2.5rem] shadow-xl border-8 border-[#0B1220] overflow-hidden translate-x-[40%] scale-90">
                 <div className="w-24 h-6 bg-[#0B1220] absolute top-0 left-1/2 -translate-x-1/2 rounded-b-2xl z-20"></div>
                 <div className="w-full h-1/3 bg-transparent p-6 flex flex-col justify-end">
                    <div className="flex justify-between items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                      <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                    </div>
                    <div className="w-32 h-4 bg-gray-900 rounded"></div>
                 </div>
                 <div className="p-4 grid gap-4">
                    <div className="w-full aspect-[4/3] bg-gray-100 rounded-xl relative">
                       <div className="absolute bottom-3 left-3 w-16 h-3 bg-gray-900 rounded"></div>
                    </div>
                    <div className="w-full aspect-[4/3] bg-gray-100 rounded-xl relative">
                       <div className="absolute bottom-3 left-3 w-16 h-3 bg-gray-900 rounded"></div>
                    </div>
                 </div>
              </div>

           </div>

           {/* Right: Info */}
           <div className="w-full lg:w-1/2 pl-0 lg:pl-12">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-[10px] font-bold uppercase tracking-wider rounded-sm shadow-sm border border-blue-200 mb-6">COMPLETED</span>
              <h2 className="text-4xl font-display font-bold text-white mb-2">{project.title}</h2>
              <h3 className="text-lg font-bold text-gray-100 mb-6">Mobile Application</h3>
              
              <p className="text-blue-100/70 mb-10 text-sm leading-relaxed max-w-lg">
                A mobile learning platform for cocktail enthusiasts to learn, explore and master the art of mixology.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-10">
                 {project.technologies?.map((tech, i) => (
                   <span key={i} className="px-3 py-1.5 bg-transparent border border-white/10 shadow-[0_4px_24px_rgba(37,99,235,0.15)] hover:shadow-[0_8px_32px_rgba(37,99,235,0.4)] transition-all duration-300 text-xs font-medium rounded text-gray-200 shadow-sm">{tech}</span>
                 ))}
              </div>
              
              <Link to={`/our-work/${project.slug}`} className="text-brand-primary font-bold text-sm inline-flex items-center hover:text-brand-primaryHover transition-colors">
                View Mobile Project <ArrowRight size={16} className="ml-2" />
              </Link>
           </div>

        </div>
      </Container>
    </section>
  );
}
