import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';

export default function Footer() {
  return (
    <footer className="bg-[#0A192F] pt-16 pb-8 text-sm">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-left">
          
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <span className="font-display font-bold text-2xl text-white tracking-widest">THE S COMPANY</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 pr-4">
              We design, develop and implement digital solutions that help businesses streamline operations, engage customers and accelerate growth.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-sm text-white mb-6">Services</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/services/website-development" className="text-slate-400 hover:text-white transition-colors">Website Development</Link></li>
              <li><Link to="/services/mobile-app-development" className="text-slate-400 hover:text-white transition-colors">Mobile Applications</Link></li>
              <li><Link to="/services/erp-solutions" className="text-slate-400 hover:text-white transition-colors">ERP Solutions</Link></li>
              <li><Link to="/services/digital-marketing" className="text-slate-400 hover:text-white transition-colors">Digital Marketing</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-bold text-sm text-white mb-6">Resources</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/case-studies" className="text-slate-400 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/our-work" className="text-slate-400 hover:text-white transition-colors">Our Work</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-sm text-white mb-6">Company</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/team" className="text-slate-400 hover:text-white transition-colors">Our Team</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div>&copy; {new Date().getFullYear()} the s company. All rights reserved.</div>
          <div className="flex gap-6">
            <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
