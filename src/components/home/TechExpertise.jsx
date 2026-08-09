import React from 'react';
import Container from '../common/Container';

const technologies = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'TypeScript', 'Redux', 'Framer Motion']
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'Python', 'Django', 'REST APIs', 'GraphQL']
  },
  {
    category: 'Database',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Supabase']
  },
  {
    category: 'Cloud & Infrastructure',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Vercel', 'Linux']
  },
  {
    category: 'Mobile',
    skills: ['React Native', 'Expo', 'iOS', 'Android']
  }
];

export default function TechExpertise() {
  return (
    <section className="py-24 bg-bg-primary border-t border-gray-100">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-brand-primary mb-3">Our Technology Stack</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900">Built with modern, scalable tools.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {technologies.map((tech) => (
            <div key={tech.category} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-5 pb-3 border-b border-gray-100">{tech.category}</h4>
              <ul className="flex flex-col gap-3">
                {tech.skills.map(skill => (
                  <li key={skill} className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
