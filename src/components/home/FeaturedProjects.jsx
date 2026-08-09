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
    'indian-cocktail-academy',
    'manufacturing-digital-transformation'
  ];
  
  const featured = homepageProjectIds
    .map(id => allProjects.find(p => p.id === id))
    .filter(Boolean); // Ensure they exist

  return (
    <section className="py-24 bg-bg-primary">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold uppercase tracking-widest text-brand-primary mb-3">Selected Work</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-gray-900 leading-[1.2]">
              Explore some of the websites, mobile experiences and business solutions we've built and designed.
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project, idx) => (
            <div key={project.id} className={idx === 3 ? "lg:col-span-3 max-w-4xl mx-auto w-full" : ""}>
               <ProjectCard project={project} />
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
           <Link to="/our-work" className="inline-flex items-center justify-center px-8 py-4 bg-white border border-gray-200 text-gray-800 font-bold rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-sm">
             View All Work <ArrowRight size={18} className="ml-2" />
           </Link>
        </div>
      </Container>
    </section>
  );
}
