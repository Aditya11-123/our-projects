import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ChevronRight, Layers, Database, Terminal, Cpu } from 'lucide-react';

const CATEGORY_STYLES = {
  'Web App': { bg: 'bg-blue-500/10 text-blue-400 border-blue-500/20', label: 'WEB APP' },
  'AI/ML': { bg: 'bg-purple-500/10 text-purple-400 border-purple-500/20', label: 'AI/ML' },
  Mobile: { bg: 'bg-green-500/10 text-green-400 border-green-500/20', label: 'MOBILE APP' },
  Tool: { bg: 'bg-red-500/10 text-red-400 border-red-500/20', label: 'TOOL' },
  Game: { bg: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20', label: 'GAME' },
};

const TECH_ICON_MAP = {
  React: { icon: <Layers size={11} />, color: 'text-blue-400 bg-blue-500/10' },
  'Node.js': { icon: <Database size={11} />, color: 'text-green-400 bg-green-500/10' },
  MongoDB: { icon: <Database size={11} />, color: 'text-green-500 bg-green-500/10' },
  Express: { icon: <Database size={11} />, color: 'text-gray-400 bg-gray-500/10' },
  Python: { icon: <Terminal size={11} />, color: 'text-yellow-400 bg-yellow-500/10' },
  'OpenAI API': { icon: <Cpu size={11} />, color: 'text-purple-400 bg-purple-500/10' },
  Firebase: { icon: <Database size={11} />, color: 'text-orange-400 bg-orange-500/10' },
  'TensorFlow.js': { icon: <Cpu size={11} />, color: 'text-red-400 bg-red-500/10' },
  'React Native': { icon: <Layers size={11} />, color: 'text-blue-500 bg-blue-500/10' },
};

export default function ProjectCard({ project, index = 0 }) {
  const catStyle = CATEGORY_STYLES[project.category] || {
    bg: 'bg-gray-500/10 text-gray-400 border-gray-500/20',
    label: project.category.toUpperCase(),
  };

  // Mock rating based on project ID length to keep it consistent and matches image
  const mockRating = (4.5 + (project.title.length % 5) * 0.1).toFixed(1);

  return (
    <Link to={`/projects/${project.id}`} className="block group">
      <div className="bg-[#121216]/50 border border-white/5 hover:border-primary/45 rounded-md overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(225,6,0,0.15)] flex flex-col h-full">
        {/* Card Thumbnail */}
        <div className="relative aspect-video w-full overflow-hidden bg-black/40">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.target.src = `https://picsum.photos/seed/${project.id}/800/450`;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-transparent to-transparent opacity-80" />

          {/* Category Badge */}
          <span className={`absolute top-4 left-4 border text-[9px] font-bold px-2 py-0.5 rounded-sm tracking-wider uppercase backdrop-blur-sm ${catStyle.bg}`}>
            {catStyle.label}
          </span>
        </div>

        {/* Card Content */}
        <div className="p-5 flex flex-col flex-grow text-left">
          <h3 className="text-lg font-display font-extrabold uppercase italic tracking-wide text-white group-hover:text-primary transition-colors duration-300 mb-2">
            {project.title}
          </h3>
          <p className="text-gray-400 text-xs leading-relaxed mb-6 flex-grow line-clamp-2">
            {project.tagline}
          </p>

          {/* Card Footer row */}
          <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
            {/* Rating */}
            <div className="flex items-center gap-1.5 text-xs font-bold text-gray-300">
              <Star size={12} className="text-primary fill-primary" />
              <span>{mockRating}</span>
            </div>

            {/* Tech Stack Circles */}
            <div className="flex items-center gap-1">
              {project.techStack.slice(0, 3).map((tech) => {
                const iconConf = TECH_ICON_MAP[tech] || {
                  icon: <Layers size={10} />,
                  color: 'text-gray-400 bg-gray-500/10',
                };
                return (
                  <div
                    key={tech}
                    className={`w-6 h-6 rounded-full border border-white/5 flex items-center justify-center ${iconConf.color}`}
                    title={tech}
                  >
                    {iconConf.icon}
                  </div>
                );
              })}
              {project.techStack.length > 3 && (
                <span className="text-[9px] font-bold text-gray-500 ml-1">
                  +{project.techStack.length - 3}
                </span>
              )}
            </div>

            {/* Chevron Right indicator */}
            <ChevronRight
              size={14}
              className="text-gray-500 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
