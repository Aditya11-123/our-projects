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
        
        <div className="flex flex-col gap-16">
          {projects.map((project) => (
            <div key={project.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Details */}
              <div className="lg:col-span-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary mb-4 block">CLIENT PROJECT</span>
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-wider rounded-sm shadow-sm border border-emerald-200 mb-4">
                    {project.status === 'internal' ? 'INTERNAL PROJECT' : 'COMPLETED'}
                  </span>
                  <h2 className="text-4xl font-display font-bold text-white mb-2">{project.title}</h2>
                  <h3 className="text-lg font-bold text-gray-100 mb-4">{project.type}</h3>
                </div>
                
                <p className="text-blue-100/70 mb-8 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.technologies?.map((tech, i) => (
                    <span key={i} className="px-3 py-1.5 bg-transparent border border-white/10 shadow-[0_4px_24px_rgba(37,99,235,0.15)] hover:shadow-[0_8px_32px_rgba(37,99,235,0.4)] transition-all duration-300 text-xs font-medium rounded text-gray-200 shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {project.externalLink ? (
                  <a 
                    href={project.externalLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-brand-primary font-bold text-sm inline-flex items-center hover:text-brand-primaryHover transition-colors"
                  >
                    View Live Website <ArrowRight size={16} className="ml-2" />
                  </a>
                ) : (
                  <Link 
                    to={`/our-work/${project.slug}`}
                    className="text-brand-primary font-bold text-sm inline-flex items-center hover:text-brand-primaryHover transition-colors"
                  >
                    View Project <ArrowRight size={16} className="ml-2" />
                  </Link>
                )}
              </div>

              {/* Right Browser Mockup Frame */}
              <div className="lg:col-span-8">
                <div className="w-full bg-transparent rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-white/10 overflow-hidden relative aspect-[16/10] flex flex-col group">
                  {/* Browser top bar */}
                  <div className="h-6 bg-[#0B1018] flex items-center px-4 gap-1.5 border-b border-white/10 shrink-0">
                    <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                  </div>
                  {/* Screenshot display */}
                  <div className="flex-1 bg-[#05070B] relative overflow-hidden flex items-center justify-center">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500" 
                      />
                    ) : (
                      <div className="w-full h-full bg-[#0B1220] flex items-center justify-center text-gray-500 text-sm">
                        {project.title} Preview
                      </div>
                    )}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
