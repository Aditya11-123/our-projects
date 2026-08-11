import React from 'react';
import Container from '../common/Container';
import TeamCard from '../ui/TeamCard';
import { getTeam } from '../../data/team';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function MeetOurTeam() {
  // Take top 4 team members for the homepage
  const team = getTeam().slice(0, 4);

  return (
    <section className="py-1 bg-transparent">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold uppercase tracking-widest text-brand-primary mb-3">The People Behind It</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white">A specialized group of engineers.</h3>
          </div>
          <Link to="/team" className="inline-flex items-center gap-2 text-sm font-bold text-brand-primary hover:text-brand-primaryHover transition-colors">
            Meet the Full Team <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map(member => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </Container>
    </section>
  );
}
