import { getTeam } from '../data/team';
import TeamCard from '../components/ui/TeamCard';

export default function Team() {
  const team = getTeam();

  return (
    <main className="bg-[#07070a] text-white min-h-screen pt-28 pb-16">
      {/* Header banner */}
      <div className="border-b border-white/5 pb-8 mb-12 bg-gradient-to-b from-[#121216]/20 to-transparent">
        <div className="container mx-auto px-4 md:px-8 text-left">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            ENGINEERS
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-extrabold uppercase italic tracking-wide">
            Our Team
          </h1>
          <p className="text-gray-400 text-xs md:text-sm mt-2 max-w-xl">
            Meet the developers, engineers, and designers driving innovation at OUR IMPACT.
          </p>
        </div>
      </div>

      {/* Team grid */}
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <TeamCard key={member.id} member={member} index={i} />
          ))}
        </div>
      </div>
    </main>
  );
}
