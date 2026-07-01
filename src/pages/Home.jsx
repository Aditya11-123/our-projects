import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Folder,
  Users,
  Code,
  Trophy,
  Play,
  ArrowRight,
  TrendingUp,
  Award,
  Database,
  Terminal,
  Cpu,
  ChevronRight,
  Star,
  Layers,
  Sparkles,
} from 'lucide-react';
import { getProjects } from '../data/projects';
import ProjectCard from '../components/ui/ProjectCard';
import { useState } from 'react';

// Animation configs
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const latestUpdates = [
  {
    type: 'NEW PROJECT',
    title: 'Real-time Telemetry System',
    time: '2 hours ago',
    image: 'https://images.unsplash.com/photo-1611244424368-80f4961556ad?w=150&q=80',
  },
  {
    type: 'PROJECT UPDATE',
    title: 'E-commerce Platform v2.0',
    time: '5 hours ago',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=150&q=80',
  },
  {
    type: 'NEW TECHNOLOGY',
    title: 'Integration with Next.js 14',
    time: '1 day ago',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=150&q=80',
  },
];

const exploreCategories = [
  { name: 'Web Development', count: 45 },
  { name: 'Mobile Apps', count: 32 },
  { name: 'AI / Machine Learning', count: 28 },
  { name: 'Blockchain', count: 18 },
];

export default function Home() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const projects = getProjects();

  // We map the projects from data layer or fall back to default
  const featured = projects.slice(0, 4);

  return (
    <div className="bg-[#07070a] text-white min-h-screen">
      {/* ── HERO BANNER ─────────────────────────────────── */}
      <section className="relative min-h-[650px] lg:min-h-0 lg:aspect-[16/9] w-full flex items-start pt-24 lg:pt-44 overflow-hidden" aria-label="Hero Showcase">
        {/* Background F1 track image / overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-bg.jpg"
            alt="Formula 1 Racing Background"
            className="w-full h-full object-cover object-center opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/20 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07070a] via-transparent to-transparent z-10" />
        </div>

        <div className="container mx-auto px-4 md:px-8 z-20 relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Hero Left Content */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              WELCOME TO WE PRO
            </div>

            <h1 className="text-4xl md:text-6xl xl:text-7xl font-display font-extrabold uppercase italic tracking-tight leading-[0.9] mb-6">
              Driving Innovation.
              <br />
              <span className="text-primary drop-shadow-[0_0_30px_rgba(225,6,0,0.3)]">
                Delivering Excellence.
              </span>
            </h1>

            <p className="text-gray-400 text-sm md:text-base max-w-lg mb-8 leading-relaxed">
              Explore our collection of engineering projects, built with cutting-edge technologies
              and creative solutions.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                to="/projects"
                className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-sm font-display font-bold uppercase tracking-wider flex items-center gap-2 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(225,6,0,0.4)] text-sm"
              >
                Explore Projects <ChevronRight size={16} />
              </Link>
              <a
                href="#featured"
                className="border border-white/20 hover:border-white/50 hover:bg-white/5 text-white px-6 py-3 rounded-sm font-display font-bold uppercase tracking-wider flex items-center gap-2 transition-all duration-300 text-sm"
              >
                View Showcase <Play size={14} fill="white" />
              </a>
            </div>

            {/* Carousel Indicators */}
            <div className="flex gap-2">
              {[0, 1, 2].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setCarouselIndex(idx)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    carouselIndex === idx ? 'w-8 bg-primary' : 'w-4 bg-gray-600'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Hero Right Featured Project Card */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-[#121216]/90 border border-white/10 rounded-md p-6 backdrop-blur-md relative overflow-hidden group hover:border-primary/50 transition-all duration-300 shadow-[0_10px_45px_rgba(0,0,0,0.5)]">
              {/* Top accent border */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-accent" />

              <div className="text-[10px] text-primary font-bold uppercase tracking-wider mb-2">
                FEATURED PROJECT
              </div>

              <h3 className="text-2xl font-display font-extrabold uppercase italic mb-3 group-hover:text-primary transition-colors duration-300">
                AI-Powered Racing Analytics
              </h3>

              <p className="text-gray-400 text-xs mb-6 leading-relaxed">
                Real-time race data analysis and predictive insights platform built for next-generation race engineering.
              </p>

              {/* Tech Stack */}
              <div className="mb-8">
                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-3">
                  TECH STACK
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400" title="React">
                    <Layers size={14} />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400" title="Node.js">
                    <Database size={14} />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center text-yellow-400" title="Python">
                    <Terminal size={14} />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400" title="AI Core">
                    <Cpu size={14} />
                  </div>
                </div>
              </div>

              {/* Link CTA */}
              <Link
                to="/projects/proj-001"
                className="inline-flex items-center gap-1.5 text-xs font-display font-bold uppercase tracking-wider text-white hover:text-primary transition-colors duration-300 group/link"
              >
                View Project{' '}
                <ChevronRight
                  size={14}
                  className="transform group-hover/link:translate-x-1 transition-transform duration-300 text-primary"
                />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* ── METRICS STRIP (Overlay) ────────────────────────── */}
        <div className="absolute bottom-4 lg:bottom-8 left-0 right-0 bg-[#0b0b0f]/95 border-y border-white/5 z-30">
          <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 items-stretch">
            {/* Main Counters */}
            <div className="md:col-span-8 py-4 grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
              <div className="flex items-center gap-4 px-4">
                <div className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <Folder size={18} />
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-display font-extrabold">250+</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider">Projects</div>
                </div>
              </div>

              <div className="flex items-center gap-4 px-4 border-l border-white/5">
                <div className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <Users size={18} />
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-display font-extrabold">50+</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider">Teams</div>
                </div>
              </div>

              <div className="flex items-center gap-4 px-4 border-l border-white/5">
                <div className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <Code size={18} />
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-display font-extrabold">120+</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider">Developers</div>
                </div>
              </div>

              <div className="flex items-center gap-4 px-4 border-l border-white/5">
                <div className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <Trophy size={18} />
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-display font-extrabold">25+</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider">Awards</div>
                </div>
              </div>
            </div>

            {/* Have an Idea Skewed Card */}
            <Link
              to="/about"
              className="md:col-span-4 bg-primary hover:bg-primary-dark transition-colors duration-300 text-white flex items-center justify-between px-8 py-5 clip-skew-right relative overflow-hidden group"
            >
              <div>
                <div className="text-xs uppercase font-extrabold tracking-wider italic text-white/80">
                  Have an idea?
                </div>
                <div className="text-base font-display font-extrabold uppercase tracking-wider">
                  Submit Your Project
                </div>
              </div>
              <ArrowRight
                size={20}
                className="transform group-hover:translate-x-2 transition-transform duration-300"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ── BOTTOM MAIN DIVISION ────────────────────────── */}
      <section id="featured" className="py-16 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT: FEATURED PROJECTS GRID */}
          <div className="lg:col-span-8">
            <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
              <div className="flex items-center gap-3">
                <span className="w-[3px] h-6 bg-primary" />
                <h2 className="text-xl font-display font-extrabold uppercase tracking-wider">
                  Featured Projects
                </h2>
              </div>
              <Link
                to="/projects"
                className="text-xs uppercase tracking-wider font-bold text-primary flex items-center gap-1.5 hover:text-white transition-colors duration-300"
              >
                View All Projects <ChevronRight size={14} />
              </Link>
            </div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {featured.map((p, index) => (
                <motion.div key={p.id} variants={itemVariants}>
                  <ProjectCard project={p} index={index} />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: UPDATES & CATEGORIES SIDEBAR */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            {/* LATEST UPDATES */}
            <div className="bg-[#0b0b0f] border border-white/5 rounded-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-sm font-display font-extrabold uppercase tracking-wider text-gray-400">
                  Latest Updates
                </h3>
                <Link
                  to="/projects"
                  className="text-[10px] uppercase font-bold text-gray-500 hover:text-primary transition-colors duration-300"
                >
                  View All
                </Link>
              </div>

              <div className="flex flex-col gap-4">
                {latestUpdates.map((update, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 items-center group hover:bg-white/[0.02] p-2 rounded-sm transition-colors duration-300"
                  >
                    <img
                      src={update.image}
                      alt={update.title}
                      className="w-14 h-14 object-cover rounded-sm border border-white/5"
                    />
                    <div className="text-left">
                      <div className="text-[9px] font-bold text-primary tracking-wider uppercase mb-1">
                        {update.type}
                      </div>
                      <div className="text-xs font-bold text-white group-hover:text-primary transition-colors duration-300 line-clamp-1">
                        {update.title}
                      </div>
                      <div className="text-[10px] text-gray-500 mt-1">{update.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* EXPLORE CATEGORIES */}
            <div className="bg-[#0b0b0f] border border-white/5 rounded-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-sm font-display font-extrabold uppercase tracking-wider text-gray-400">
                  Explore Categories
                </h3>
                <Link
                  to="/projects"
                  className="text-[10px] uppercase font-bold text-gray-500 hover:text-primary transition-colors duration-300"
                >
                  View All
                </Link>
              </div>

              <div className="flex flex-col gap-2">
                {exploreCategories.map((cat, idx) => (
                  <Link
                    key={idx}
                    to={`/projects?category=${encodeURIComponent(cat.name)}`}
                    className="flex items-center justify-between p-3 rounded-sm bg-white/[0.02] hover:bg-[#121216] border border-white/[0.03] hover:border-primary/20 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-xs font-bold text-gray-300 group-hover:text-white transition-colors duration-300">
                        {cat.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-gray-500 group-hover:text-primary transition-colors duration-300">
                        {cat.count} Projects
                      </span>
                      <ChevronRight
                        size={12}
                        className="text-gray-600 group-hover:text-primary transform group-hover:translate-x-0.5 transition-all"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
