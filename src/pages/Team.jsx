import { getTeam } from '../data/team';
import TeamCard from '../components/ui/TeamCard';
import Container from '../components/common/Container';

export default function Team() {
  const team = getTeam();

  return (
    <main className="pt-32 pb-24 min-h-screen">
      {/* Header banner */}
      <div className="mb-16">
        <Container>
          <div className="max-w-2xl">
            <h1 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-4">
              Meet the Team
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              We are a collective of engineers, designers, and strategists passionate about building scalable digital solutions.
            </p>
          </div>
        </Container>
      </div>

      {/* Team grid */}
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </Container>
    </main>
  );
}
