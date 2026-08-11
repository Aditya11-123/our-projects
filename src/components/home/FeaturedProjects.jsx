import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import ProjectCard from '../ui/ProjectCard';
import { getProjects } from '../../data/projects';
import { ArrowRight } from 'lucide-react';

export default function FeaturedProjects() {
  const allProjects = getProjects();
  // Select the specific 4 projects requested for the homepage
  const homepageProjectIds = [
    'bdm-fresh',
    'tejas-investment-solutions',
    'indian-cocktail-academy'
  ];
  
  const featured = homepageProjectIds
    .map(id => allProjects.find(p => p.id === id))
    .filter(Boolean); // Ensure they exist

  return (
    <section className="py-1 bg-transparent">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold uppercase tracking-widest text-brand-primary mb-3">Selected Work</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-white leading-[1.2]">
              Explore some of the websites, mobile experiences and business solutions we've built and designed.
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project) => (
            <div key={project.id}>
               <ProjectCard project={project} />
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
           <Link to="/our-work" className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/10 shadow-[0_4px_24px_rgba(37,99,235,0.15)] hover:shadow-[0_8px_32px_rgba(37,99,235,0.4)] transition-all duration-300 text-gray-100 font-bold rounded-xl hover:bg-transparent hover:border-white/20 transition-colors shadow-sm">
             View All Work <ArrowRight size={18} className="ml-2" />
           </Link>
        </div>
      </Container>
    </section>
  );
}
