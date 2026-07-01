import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, Sparkles } from 'lucide-react';
import { getProjects } from '../data/projects';
import ProjectCard from '../components/ui/ProjectCard';

const CATEGORIES = ['All', 'Web App', 'AI/ML', 'Mobile', 'Game', 'Tool'];
const YEARS = ['All', '2024', '2023', '2022'];

export default function Projects() {
  const allProjects = getProjects();
  const [category, setCategory] = useState('All');
  const [year, setYear] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return allProjects.filter((p) => {
      const matchCat = category === 'All' || p.category === category;
      const matchYear = year === 'All' || String(p.year) === year;
      const matchSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.tagline.toLowerCase().includes(search.toLowerCase()) ||
        p.techStack.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      return matchCat && matchYear && matchSearch;
    });
  }, [allProjects, category, year, search]);

  return (
    <main className="bg-[#07070a] text-white min-h-screen pt-28 pb-16">
      {/* Header banner */}
      <div className="border-b border-white/5 pb-8 mb-12 bg-gradient-to-b from-[#121216]/20 to-transparent">
        <div className="container mx-auto px-4 md:px-8 text-left">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            INVENTORY
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-extrabold uppercase italic tracking-wide">
            Project Directory
          </h1>
          <p className="text-gray-400 text-xs md:text-sm mt-2 max-w-xl">
            Explore our complete archive of engineering works, filterable by category and tech stack.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        {/* Search & Filters */}
        <div className="bg-[#0b0b0f] border border-white/5 rounded-md p-6 mb-8 flex flex-col md:flex-row justify-between gap-6 items-stretch">
          {/* Search bar */}
          <div className="relative flex-grow max-w-md">
            <input
              type="text"
              placeholder="Search projects or technologies..."
              className="bg-[#121216] border border-white/10 rounded-sm py-2 pl-4 pr-10 text-xs text-white placeholder-gray-500 w-full focus:outline-none focus:border-primary/50 transition-colors"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Search size={14} className="absolute right-3.5 top-3 text-gray-500" />
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mr-2">
              Category:
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`text-[10px] font-bold uppercase px-3 py-1.5 rounded-sm border transition-colors ${
                  category === cat
                    ? 'bg-primary border-primary text-white'
                    : 'bg-[#121216] border-white/5 text-gray-400 hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Filter Year */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mr-2">
              Year:
            </span>
            <div className="relative">
              <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="bg-[#121216] border border-white/10 rounded-sm py-1.5 pl-3 pr-8 text-xs text-white focus:outline-none focus:border-primary/50 appearance-none font-bold cursor-pointer"
              >
                {YEARS.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={12}
                className="absolute right-2.5 top-2.5 text-gray-500 pointer-events-none"
              />
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="text-left mb-6 text-xs text-gray-500 flex items-center gap-2 font-bold uppercase tracking-wider">
          <Sparkles size={12} className="text-primary" />
          <span>
            Showing {filtered.length} of {allProjects.length} project{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p, index) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={p} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20 border border-dashed border-white/10 rounded-md bg-[#0b0b0f]">
            <span className="text-4xl">🏁</span>
            <h3 className="text-lg font-display font-extrabold uppercase italic mt-4 text-white">
              No Projects Found
            </h3>
            <p className="text-gray-500 text-xs mt-1">
              Try adjusting your search criteria or category filters.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
