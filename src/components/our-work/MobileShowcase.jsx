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
               <div className="absolute z-10 w-[220px] h-[460px] bg-[#0B1220] rounded-[2.5rem] shadow-xl border-8 border-[#0B1220] overflow-hidden -translate-x-[40%] scale-90 opacity-60">
                  <div className="w-24 h-6 bg-[#0B1220] absolute top-0 left-1/2 -translate-x-1/2 rounded-b-2xl z-20"></div>
                  {project.image && (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover object-bottom" />
                  )}
               </div>

               {/* Center Phone */}
               <div className="absolute z-30 w-[240px] h-[500px] bg-black rounded-[2.5rem] shadow-2xl border-8 border-[#0B1220] overflow-hidden">
                  <div className="w-24 h-6 bg-[#0B1220] absolute top-0 left-1/2 -translate-x-1/2 rounded-b-2xl z-20"></div>
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top" />
                  ) : (
                    <div className="w-full h-full bg-[#fdf2e9] flex flex-col items-center justify-center p-6 text-center">
                       <h3 className="font-display font-bold text-white text-xl leading-tight mb-2">Welcome to<br/>Indian Cocktail<br/>Academy</h3>
                    </div>
                  )}
               </div>

               {/* Right Phone */}
               <div className="absolute z-20 w-[220px] h-[460px] bg-[#0B1220] rounded-[2.5rem] shadow-xl border-8 border-[#0B1220] overflow-hidden translate-x-[40%] scale-90 opacity-60">
                  <div className="w-24 h-6 bg-[#0B1220] absolute top-0 left-1/2 -translate-x-1/2 rounded-b-2xl z-20"></div>
                  {project.image && (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover object-center" />
                  )}
               </div>

            </div>

            {/* Right: Info */}
            <div className="w-full lg:w-1/2 pl-0 lg:pl-12">
               <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-wider rounded-sm shadow-sm border border-emerald-200 mb-6">COMPLETED</span>
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
               
               {project.externalLink ? (
                 <a href={project.externalLink} target="_blank" rel="noopener noreferrer" className="text-brand-primary font-bold text-sm inline-flex items-center hover:text-brand-primaryHover transition-colors">
                   View Mobile Project <ArrowRight size={16} className="ml-2" />
                 </a>
               ) : (
                 <Link to={`/our-work/${project.slug}`} className="text-brand-primary font-bold text-sm inline-flex items-center hover:text-brand-primaryHover transition-colors">
                   View Mobile Project <ArrowRight size={16} className="ml-2" />
                 </Link>
               )}
            </div>

        </div>
      </Container>
    </section>
  );
}
