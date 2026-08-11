import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Our Work', path: '/our-work' },
  { name: 'Team', path: '/team' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';
  const isTransparent = isHome && !scrolled;

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200 py-3' : 'bg-transparent py-5'
      }`}>
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center group relative h-10 w-48">
            <img 
              src="/logo.png" 
              alt="The S Company" 
              className="absolute top-1/2 -translate-y-1/2 left-[20px] h-[100px] max-w-none object-contain transition-all duration-300 drop-shadow-md"
            />
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => {
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={`text-sm font-body font-medium transition-colors relative py-2 ${
                    isActive 
                      ? 'text-brand-primary' 
                      : (isTransparent ? 'text-white/90 hover:text-white drop-shadow-sm' : 'text-gray-600 hover:text-gray-900')
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div 
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-primary rounded-t-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-brand-primary text-white text-sm font-bold uppercase tracking-wider rounded-xl hover:bg-brand-primaryHover transition-all shadow-none">
              Let's Talk <ArrowRight size={16} />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`md:hidden ${isTransparent ? 'text-white drop-shadow-md' : 'text-gray-900'}`} 
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
              className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm z-50 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white border-l border-gray-100 z-50 flex flex-col p-6 shadow-2xl md:hidden"
            >
              <div className="flex justify-between items-center mb-10">
                <span className="font-display font-bold text-xl text-gray-900">Menu</span>
                <button onClick={() => setMobileMenuOpen(false)} className="text-gray-500 hover:text-gray-900 p-2">
                  <X size={24} />
                </button>
              </div>

              <nav className="flex flex-col gap-6">
                {navLinks.map(link => (
                  <Link 
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-lg font-body font-medium transition-colors ${
                      location.pathname === link.path ? 'text-brand-primary' : 'text-gray-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto pt-8 border-t border-gray-100">
                <Link 
                  to="/contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-brand-primary text-white rounded-xl font-bold uppercase tracking-wider shadow-none"
                >
                  Let's Talk <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
