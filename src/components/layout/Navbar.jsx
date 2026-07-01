import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Bell, Menu, X } from 'lucide-react';
import { useState } from 'react';

const NAV_LINKS = [
  { to: '/', label: 'HOME' },
  { to: '/projects', label: 'PROJECTS' },
  { to: '/about', label: 'TECHNOLOGIES' },
  { to: '/team', label: 'TEAMS' },
  { to: '/about', label: 'ABOUT' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (to) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#07070a]/90 backdrop-blur-md border-b border-white/5 py-4">
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Left Side Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          {/* F1 Checkered pattern */}
          <div className="flex flex-col gap-[3px]" aria-hidden="true">
            <div className="flex gap-[3px]">
              <div className="w-[6px] h-[6px] bg-primary rounded-sm" />
              <div className="w-[6px] h-[6px] bg-white rounded-sm" />
            </div>
            <div className="flex gap-[3px]">
              <div className="w-[6px] h-[6px] bg-white rounded-sm" />
              <div className="w-[6px] h-[6px] bg-primary rounded-sm" />
            </div>
          </div>
          <span className="font-display font-black text-xl italic tracking-wider uppercase text-white group-hover:text-primary transition-colors">
            WE <span className="text-primary group-hover:text-white transition-colors">PRO</span>
          </span>
        </Link>

        {/* Center Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`relative font-display text-xs font-bold tracking-widest transition-colors duration-300 py-1 ${
                isActive(link.to) ? 'text-primary' : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.label}
              {isActive(link.to) && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary" />
              )}
            </Link>
          ))}
        </nav>

        {/* Right Actions Block (Desktop) */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Search bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search projects, technologies..."
              className="bg-[#121216] border border-white/10 rounded-full py-1.5 pl-4 pr-10 text-xs text-white placeholder-gray-500 w-64 focus:outline-none focus:border-primary/50 transition-colors"
            />
            <Search size={14} className="absolute right-3.5 top-2.5 text-gray-500" />
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-4 text-gray-400">
            <button className="hover:text-white transition-colors relative" aria-label="Cart">
              <ShoppingBag size={18} />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-primary" />
            </button>
            <button className="hover:text-white transition-colors relative" aria-label="Notifications">
              <Bell size={18} />
              <span className="absolute -top-1 -right-1.5 bg-primary text-white text-[8px] font-black w-3.5 h-3.5 rounded-full flex items-center justify-center">
                3
              </span>
            </button>
          </div>
        </div>

        {/* Mobile menu toggle button */}
        <div className="flex lg:hidden items-center gap-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-400 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#07070a] border-b border-white/5 py-4 px-6 flex flex-col gap-4 animate-fadeIn">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setMobileMenuOpen(false)}
              className={`font-display text-sm font-bold tracking-widest py-2 border-b border-white/[0.02] ${
                isActive(link.to) ? 'text-primary' : 'text-gray-400'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="relative mt-2">
            <input
              type="text"
              placeholder="Search projects..."
              className="bg-[#121216] border border-white/10 rounded-full py-2 pl-4 pr-10 text-xs text-white placeholder-gray-500 w-full focus:outline-none focus:border-primary/50"
            />
            <Search size={14} className="absolute right-3.5 top-3.5 text-gray-500" />
          </div>
        </div>
      )}
    </header>
  );
}
