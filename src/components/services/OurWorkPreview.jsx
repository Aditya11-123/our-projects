import React from 'react';
import Container from '../common/Container';
import ProjectCard from '../ui/ProjectCard';
import { getProjects } from '../../data/projects';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function OurWorkPreview() {
  const projects = getProjects().slice(0, 3); // Take top 3

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold uppercase tracking-widest text-brand-primary mb-3">Our Work</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-gray-900">See What We've Built</h3>
          </div>
          <Link to="/our-work" className="inline-flex items-center gap-2 text-sm font-bold text-brand-primary hover:text-brand-primaryHover transition-colors">
            View All Projects <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
