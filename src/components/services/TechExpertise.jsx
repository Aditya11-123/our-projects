import React from 'react';
import Container from '../common/Container';

export default function TechExpertise() {
  const techCategories = [
    {
      name: "Frontend",
      tech: ["React", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind"]
    },
    {
      name: "Backend",
      tech: ["Node.js", "Express", "Java", "Spring Boot", "REST APIs"]
    },
    {
      name: "Database",
      tech: ["MongoDB", "PostgreSQL", "MySQL"]
    },
    {
      name: "Mobile",
      tech: ["React Native"]
    },
    {
      name: "Cloud / Deployment",
      tech: ["AWS", "Vercel", "Docker"]
    }
  ];

  return (
    <section className="py-1 bg-transparent border-t border-white/10">
      <Container>
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Technology Expertise</h2>
          <p className="text-blue-100/70 text-sm md:text-base">Technology that supports the solution.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {techCategories.map(cat => (
            <div key={cat.name}>
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-primary mb-4 pb-2 border-b border-brand-primary/20">{cat.name}</h4>
              <ul className="flex flex-col gap-3">
                {cat.tech.map(item => (
                  <li key={item} className="text-sm font-medium text-gray-200">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
