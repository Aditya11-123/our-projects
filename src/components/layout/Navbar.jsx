import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Bell, User, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'HOME', path: '/' },
  { name: 'PROJECTS', path: '/projects' },
  { name: 'TECHNOLOGIES', path: '/technologies' },
  { name: 'TEAM', path: '/team' },
  { name: 'ABOUT', path: '/about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const searchInputRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcut "/" to focus search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#050507]/80 backdrop-blur-md shadow-md border-b border-white/5 py-3' : 'bg-transparent py-5'
      }`}>
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-[url('/public/logo.svg')] bg-cover opacity-90 group-hover:opacity-100 transition-opacity" />
            <span className="font-display font-extrabold text-2xl italic tracking-wider text-white">
              OUR IMPACT
            </span>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => {
              const isActive = location.pathname === link.path;
              return (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={`text-xs font-display font-bold tracking-widest relative transition-colors ${
                    isActive ? 'text-primary' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div 
                      layoutId="nav-indicator"
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-5">
            <div className="relative group">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-primary transition-colors" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search (Press '/')"
                className="bg-white/5 border border-white/10 rounded-full pl-9 pr-4 py-1.5 text-xs text-white focus:outline-none focus:border-primary/50 transition-colors w-48 focus:w-64"
              />
            </div>
            
            <button className="text-gray-400 hover:text-white relative" aria-label="Notifications">
              <Bell size={18} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full" />
            </button>
            
            <button className="text-gray-400 hover:text-white" aria-label="Profile">
              <User size={18} />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white" 
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-bg-primary border-l border-white/10 z-50 flex flex-col p-6 shadow-2xl md:hidden"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="font-display font-extrabold text-xl italic tracking-wider text-white">MENU</span>
                <button onClick={() => setMobileMenuOpen(false)} className="text-gray-400 hover:text-white">
                  <X size={24} />
                </button>
              </div>

              <div className="relative mb-8">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-white/5 border border-white/10 rounded-md pl-9 pr-4 py-3 text-sm text-white focus:outline-none focus:border-primary/50"
                />
              </div>

              <nav className="flex flex-col gap-6">
                {navLinks.map(link => (
                  <Link 
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-sm font-display font-bold tracking-widest uppercase ${
                      location.pathname === link.path ? 'text-primary' : 'text-gray-300'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
