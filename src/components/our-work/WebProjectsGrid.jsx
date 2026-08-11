import React from 'react';
import Container from '../common/Container';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WebProjectsGrid({ projects }) {
  if (!projects || projects.length === 0) return null;

  return (
    <section className="py-1 md:py-1 bg-transparent border-t border-white/10 scroll-mt-[100px]" id="web-projects">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-2xl font-display font-bold text-white mb-2">
              Web Experiences
            </h2>
            <p className="text-blue-100/70 text-sm">
              Business-focused websites designed to communicate clearly and create a stronger digital presence.
            </p>
          </div>
          <Link to="/our-work" className="text-brand-primary font-bold text-sm inline-flex items-center hover:text-brand-primaryHover transition-colors shrink-0">
            View All Web Projects <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <Link key={project.id} to={`/our-work/${project.slug}`} className="group bg-transparent rounded-2xl shadow-sm border border-white/10 overflow-hidden flex flex-col hover:shadow-md hover:border-brand-primary/30 transition-all">
               
               {/* Thumbnail Placeholder (Since we don't have images yet, use a sleek dark CSS placeholder to match the image style) */}
               <div className="w-full h-[240px] bg-[#0B1220] relative overflow-hidden flex items-center justify-center p-6 border-b border-white/10 group-hover:bg-[#0f172a] transition-colors">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#2563EB2A_0%,_transparent_70%)]"></div>
                  
                  {/* Subtle abstract UI element inside the thumbnail to mimic the dark imagery in the design */}
                  <div className="relative z-10 w-full max-w-[280px] h-full bg-white/5 rounded-t-xl border-x border-t border-white/10 flex flex-col p-4">
                     <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full bg-brand-cyan"></div>
                          <div className="w-16 h-2 bg-white/20 rounded"></div>
                        </div>
                        <div className="flex gap-2">
                           <div className="w-8 h-1 bg-white/10 rounded"></div>
                           <div className="w-8 h-1 bg-white/10 rounded"></div>
                           <div className="w-8 h-1 bg-white/10 rounded"></div>
                        </div>
                     </div>
                     <div className="w-3/4 h-6 bg-white/20 rounded mb-2"></div>
                     <div className="w-1/2 h-4 bg-white/10 rounded mb-6"></div>
                     <div className="w-24 h-6 bg-brand-primary rounded"></div>
                  </div>
               </div>

               {/* Content */}
               <div className="p-6 md:p-8 flex-1 flex flex-col">
                 <div className="mb-4">
                    <span className={`inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-sm shadow-sm border mb-4 ${
                      project.status === 'internal' 
                        ? 'bg-blue-50 text-blue-800 border-blue-200'
                        : 'bg-emerald-50 text-emerald-800 border-emerald-200'
                    }`}>
                      {project.status === 'internal' ? 'INTERNAL PROJECT' : 'COMPLETED'}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-brand-primary transition-colors">{project.title}</h3>
                    <div className="text-xs font-bold text-blue-100/50 mb-3">{project.type}</div>
                    <p className="text-blue-100/70 text-xs leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                 </div>
                 
                 <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies?.slice(0, 3).map((tech, i) => (
                        <span key={i} className="px-2.5 py-1 bg-transparent border border-white/10 shadow-[0_4px_24px_rgba(37,99,235,0.15)] hover:shadow-[0_8px_32px_rgba(37,99,235,0.4)] transition-all duration-300 text-[10px] font-bold rounded text-gray-200">{tech}</span>
                      ))}
                    </div>
                    
                    <span className="text-brand-primary font-bold text-sm inline-flex items-center">
                      View Project <ArrowRight size={14} className="ml-1" />
                    </span>
                 </div>
               </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
