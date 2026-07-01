import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../ui/SocialIcons';

const QUICK_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/team', label: 'Team' },
  { to: '/about', label: 'About' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0f] border-t border-white/5 relative mt-auto">
      {/* Checkered top accent */}
      <div className="h-1 checker-pattern" aria-hidden="true" />

      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Logo & Info */}
          <div className="md:col-span-6 text-left">
            <Link to="/" className="inline-flex items-center gap-2 mb-4 group">
              {/* F1 Checkered pattern */}
              <div className="flex flex-col gap-[2px]" aria-hidden="true">
                <div className="flex gap-[2px]">
                  <div className="w-[4px] h-[4px] bg-primary rounded-sm" />
                  <div className="w-[4px] h-[4px] bg-white rounded-sm" />
                </div>
                <div className="flex gap-[2px]">
                  <div className="w-[4px] h-[4px] bg-white rounded-sm" />
                  <div className="w-[4px] h-[4px] bg-primary rounded-sm" />
                </div>
              </div>
              <span className="font-display font-black text-lg italic tracking-wider uppercase text-white">
                WE <span className="text-primary">PRO</span>
              </span>
            </Link>
            <p className="text-gray-400 text-xs leading-relaxed max-w-sm mb-6">
              Built with precision. Shipped with passion. Every project tells our story of driving innovation and engineering excellence.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-sm bg-white/[0.03] hover:bg-primary border border-white/5 hover:border-primary flex items-center justify-center text-gray-400 hover:text-white transition-all"
                aria-label="GitHub"
              >
                <GithubIcon size={14} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-sm bg-white/[0.03] hover:bg-primary border border-white/5 hover:border-primary flex items-center justify-center text-gray-400 hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={14} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-sm bg-white/[0.03] hover:bg-primary border border-white/5 hover:border-primary flex items-center justify-center text-gray-400 hover:text-white transition-all"
                aria-label="Twitter"
              >
                <TwitterIcon size={14} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 text-left">
            <h4 className="font-display text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">
              Navigate
            </h4>
            <ul className="flex flex-col gap-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-xs text-gray-400 hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Stats summary */}
          <div className="md:col-span-3 text-left">
            <h4 className="font-display text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">
              Key Metrics
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-lg font-black text-primary leading-none">250+</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-wider">Completed Projects</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-lg font-black text-primary leading-none">120+</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-wider">Active Developers</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-lg font-black text-primary leading-none">25+</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-wider">Engineering Awards</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom footer bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-gray-600">
          <p>© {new Date().getFullYear()} WE PRO. All rights reserved.</p>
          <p className="font-display tracking-widest text-gray-500">BUILT WITH TAILWIND CSS & REACT</p>
        </div>
      </div>
    </footer>
  );
}
