import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Database, Smartphone, Globe, Megaphone } from 'lucide-react';

export default function ProjectCard({ project, featured = false }) {
  // Map standard project categories to specific icons
  const getCategoryIcon = (cat) => {
    switch(cat?.toLowerCase()) {
      case 'web':
      case 'website development': return <Globe size={16} />;
      case 'mobile':
      case 'mobile application': return <Smartphone size={16} />;
      case 'business systems':
      case 'erp': return <Database size={16} />;
      case 'digital marketing': return <Megaphone size={16} />;
      default: return <Layers size={16} />;
    }
  };

  // Status Badge Logic
  const getStatusBadge = (status) => {
    switch (status?.toLowerCase()) {
      case 'completed':
        return <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-wider rounded-sm shadow-sm border border-emerald-200">Completed Client Project</span>;
      case 'internal':
        return <span className="px-3 py-1 bg-blue-100 text-blue-800 text-[10px] font-bold uppercase tracking-wider rounded-sm shadow-sm border border-blue-200">Internal Project</span>;
      case 'concept':
        return <span className="px-3 py-1 bg-gray-800 text-white text-[10px] font-bold uppercase tracking-wider rounded-sm shadow-sm border border-gray-700">Proposed Solution</span>; // Using Proposed Solution badge for all concepts/proposals as requested for visual consistency, or differentiate. Wait, the spec says "PROPOSED SOLUTION" and "CONCEPT" are separate badges.
      default:
        return null;
    }
  };
  
  const getExactStatusBadge = (status, id) => {
     if (status === 'completed') return <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-wider rounded-sm shadow-sm border border-emerald-200">COMPLETED</span>;
     if (status === 'internal') return <span className="px-3 py-1 bg-blue-100 text-blue-800 text-[10px] font-bold uppercase tracking-wider rounded-sm shadow-sm border border-blue-200">INTERNAL PROJECT</span>;
     if (id === 'manufacturing-digital-transformation') return <span className="px-3 py-1 bg-gray-800 text-white text-[10px] font-bold uppercase tracking-wider rounded-sm shadow-sm border border-gray-700">PROPOSED SOLUTION</span>;
     if (status === 'concept') return <span className="px-3 py-1 bg-purple-100 text-purple-800 text-[10px] font-bold uppercase tracking-wider rounded-sm shadow-sm border border-purple-200">CONCEPT</span>;
     return null;
  }

  const FallbackImage = () => (
    <div className="w-full h-full bg-[#0B1220] flex flex-col items-center justify-center p-6 text-center border-b border-gray-100 group-hover:bg-[#0f172a] transition-colors relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#2563EB1A_0%,_transparent_70%)]"></div>
      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-brand-cyan mb-4 relative z-10 border border-white/10">
        {getCategoryIcon(project.category)}
      </div>
      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 relative z-10">{project.category}</span>
      <h4 className="text-xl font-display font-bold text-white leading-tight relative z-10">{project.title}</h4>
    </div>
  );

  return (
    <Link to={`/our-work/${project.slug}`} className={`group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-primary/30 transition-all h-full ${featured ? 'md:col-span-2 lg:col-span-3 lg:flex-row' : ''}`}>
      
      {/* Thumbnail */}
      <div className={`relative bg-gray-100 overflow-hidden shrink-0 ${featured ? 'w-full lg:w-[60%] lg:border-r border-gray-100' : 'aspect-[16/10] w-full'}`}>
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <FallbackImage />
        )}
        
        <div className="absolute top-4 left-4 z-20">
          {getExactStatusBadge(project.status, project.id)}
        </div>
        
        {project.image && (
          <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-2 text-[10px] font-bold text-gray-800 shadow-sm border border-gray-200/50">
            {getCategoryIcon(project.category)}
            <span className="uppercase tracking-wider">{project.category}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className={`p-6 md:p-8 flex flex-col flex-grow ${featured ? 'w-full lg:w-[40%] justify-center' : ''}`}>
        {!project.image && !featured && (
           <span className="text-[10px] font-bold uppercase tracking-wider text-brand-primary mb-2 flex items-center gap-1.5">
             {getCategoryIcon(project.category)} {project.category}
           </span>
        )}
        {featured && (
           <span className="text-[10px] font-bold uppercase tracking-wider text-brand-primary mb-3 flex items-center gap-1.5">
             {getCategoryIcon(project.category)} {project.category}
           </span>
        )}
        
        <h3 className={`${featured ? 'text-2xl lg:text-3xl' : 'text-xl'} font-bold text-gray-900 mb-3 leading-tight group-hover:text-brand-primary transition-colors`}>
          {project.title}
        </h3>
        
        <p className={`text-gray-600 text-sm leading-relaxed mb-8 flex-grow ${featured ? 'text-base mb-10' : 'line-clamp-2'}`}>
          {project.description}
        </p>
        
        {/* Footer / Tech Stack */}
        <div className="flex items-center justify-between pt-5 border-t border-gray-100 mt-auto">
          <div className="flex flex-wrap gap-x-3 gap-y-2 text-xs font-medium text-gray-500">
            {project.technologies?.slice(0, featured ? 4 : 3).map((tech, idx) => (
              <span key={idx}>{tech}</span>
            ))}
            {project.technologies?.length > (featured ? 4 : 3) && <span className="text-brand-primary">+{project.technologies.length - (featured ? 4 : 3)}</span>}
          </div>
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-50 text-gray-400 group-hover:bg-brand-primary group-hover:text-white transition-colors shrink-0">
            <ArrowRight size={14} />
          </div>
        </div>
      </div>
    </Link>
  );
}
