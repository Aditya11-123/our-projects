import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Calendar,
  Clock,
  Users,
  ExternalLink,
  Layers,
  Sparkles,
  Trophy,
  AlertTriangle,
  CheckCircle2,
} from 'lucide-react';
import { getProjectById } from '../data/projects';
import TechBadge from '../components/ui/TechBadge';
import { GithubIcon } from '../components/ui/SocialIcons';

const CATEGORY_COLORS = {
  'Web App': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'AI/ML': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  Mobile: 'bg-green-500/10 text-green-400 border-green-500/20',
  Tool: 'bg-red-500/10 text-red-400 border-red-500/20',
  Game: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
};

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = getProjectById(id);

  if (!project) {
    return (
      <main className="min-h-screen bg-[#07070a] text-white flex items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="text-4xl font-display font-extrabold uppercase italic">Project Not Found</h1>
          <p className="text-gray-500 text-xs mt-2">The requested project entry does not exist.</p>
          <button
            onClick={() => navigate('/projects')}
            className="mt-6 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-sm font-display font-bold uppercase tracking-wider text-xs transition-colors"
          >
            ← Back to Inventory
          </button>
        </div>
      </main>
    );
  }

  const categoryColor = CATEGORY_COLORS[project.category] || 'bg-gray-500/10 text-gray-400 border-gray-500/20';

  return (
    <main className="bg-[#07070a] text-white min-h-screen pt-20">
      {/* Banner Header */}
      <section className="relative h-[45vh] min-h-[300px] overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              e.target.src = `https://picsum.photos/seed/${project.id}/1600/600`;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07070a] via-[#07070a]/70 to-transparent" />
        </div>

        <button
          onClick={() => navigate(-1)}
          className="absolute top-8 left-8 border border-white/10 hover:border-white/30 bg-black/40 hover:bg-black/60 text-white px-4 py-2 rounded-sm font-display text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 transition-all"
        >
          <ArrowLeft size={14} /> Back
        </button>

        <div className="container mx-auto px-4 md:px-8 pb-8 z-10 text-left">
          <span className={`border text-[9px] font-bold px-2 py-0.5 rounded-sm tracking-wider uppercase backdrop-blur-sm ${categoryColor}`}>
            {project.category}
          </span>
          <h1 className="text-3xl md:text-5xl xl:text-6xl font-display font-extrabold uppercase italic tracking-wide mt-3">
            {project.title}
          </h1>
          <p className="text-gray-400 text-xs md:text-sm mt-2 max-w-xl">
            {project.tagline}
          </p>
        </div>
      </section>

      {/* Meta horizontal bar */}
      <div className="bg-[#0b0b0f] border-y border-white/5 py-4">
        <div className="container mx-auto px-4 md:px-8 flex flex-wrap items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-6 text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar size={13} className="text-primary" />
              <span>{project.year}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={13} className="text-primary" />
              <span>{project.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={13} className="text-primary" />
              <span>{project.teamMembers.join(', ')}</span>
            </div>
          </div>

          <div className="flex gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="border border-white/10 hover:border-primary bg-white/[0.02] hover:bg-primary/5 px-4 py-1.5 rounded-sm text-xs font-display font-bold uppercase tracking-wider text-gray-300 hover:text-white flex items-center gap-1.5 transition-all"
              >
                <GithubIcon size={13} /> GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="border border-white/10 hover:border-primary bg-white/[0.02] hover:bg-primary/5 px-4 py-1.5 rounded-sm text-xs font-display font-bold uppercase tracking-wider text-gray-300 hover:text-white flex items-center gap-1.5 transition-all"
              >
                <ExternalLink size={13} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Main layout divisions */}
      <section className="container mx-auto px-4 md:px-8 py-12 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Core Description Details */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {/* Objective */}
            <div className="bg-[#0b0b0f] border border-white/5 rounded-md p-6">
              <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-3">
                <Sparkles size={16} className="text-primary" />
                <h3 className="font-display font-extrabold uppercase tracking-wider text-sm">
                  Objective
                </h3>
              </div>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                {project.objective}
              </p>
            </div>

            {/* Features list */}
            {project.features && project.features.length > 0 && (
              <div className="bg-[#0b0b0f] border border-white/5 rounded-md p-6">
                <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-3">
                  <CheckCircle2 size={16} className="text-primary" />
                  <h3 className="font-display font-extrabold uppercase tracking-wider text-sm">
                    Key Features
                  </h3>
                </div>
                <ul className="flex flex-col gap-3">
                  {project.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Challenges box */}
            {project.challenges && (
              <div className="bg-[#0b0b0f] border border-white/5 border-l-2 border-l-orange rounded-md p-6">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle size={16} className="text-orange" />
                  <h3 className="font-display font-extrabold uppercase tracking-wider text-sm text-orange">
                    Challenges Solved
                  </h3>
                </div>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                  {project.challenges}
                </p>
              </div>
            )}

            {/* Outcome box */}
            {project.outcome && (
              <div className="bg-[#0b0b0f] border border-white/5 border-l-2 border-l-green-500 rounded-md p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Trophy size={16} className="text-green-400" />
                  <h3 className="font-display font-extrabold uppercase tracking-wider text-sm text-green-400">
                    Results & Impact
                  </h3>
                </div>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                  {project.outcome}
                </p>
              </div>
            )}
          </div>

          {/* Right Column: Spec cards */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="bg-[#0b0b0f] border border-white/5 rounded-md p-6">
                <h4 className="font-display text-xs font-bold tracking-widest text-gray-400 uppercase mb-4 border-b border-white/5 pb-2">
                  Project Highlights
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {project.highlights.map((h, idx) => (
                    <div key={idx} className="bg-white/[0.01] border border-white/5 rounded-sm p-3 text-center">
                      <div className="font-display text-lg font-black text-primary">{h.value}</div>
                      <div className="text-[9px] uppercase font-bold text-gray-500 mt-1">{h.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech stack badges list */}
            <div className="bg-[#0b0b0f] border border-white/5 rounded-md p-6">
              <h4 className="font-display text-xs font-bold tracking-widest text-gray-400 uppercase mb-4 border-b border-white/5 pb-2">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <TechBadge key={tech} name={tech} />
                ))}
              </div>
            </div>

            {/* Roster of team members */}
            <div className="bg-[#0b0b0f] border border-white/5 rounded-md p-6">
              <h4 className="font-display text-xs font-bold tracking-widest text-gray-400 uppercase mb-4 border-b border-white/5 pb-2">
                Engineers
              </h4>
              <div className="flex flex-col gap-3">
                {project.teamMembers.map((member) => (
                  <div key={member} className="flex items-center gap-3">
                    <img
                      src={`https://api.dicebear.com/7.x/initials/svg?seed=${member}&backgroundColor=E10600&textColor=ffffff`}
                      alt={member}
                      className="w-8 h-8 rounded-full border border-white/5"
                    />
                    <span className="text-xs font-bold text-gray-300">{member}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Nav back */}
      <div className="container mx-auto px-4 md:px-8 pb-12 text-left">
        <Link
          to="/projects"
          className="border border-white/10 hover:border-primary bg-white/[0.02] hover:bg-primary/5 px-6 py-3 rounded-sm font-display text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 transition-all"
        >
          ← Back to Inventory
        </Link>
      </div>
    </main>
  );
}
