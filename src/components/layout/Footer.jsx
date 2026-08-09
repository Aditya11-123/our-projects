import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../ui/SocialIcons';

export default function Footer() {
  return (
    <footer className="bg-bg-primary border-t border-border-dark pt-16 pb-8 text-sm">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-12 text-left">
          
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-8 h-8 bg-[url('/public/logo.svg')] bg-cover opacity-90 group-hover:opacity-100 transition-opacity" />
              <span className="font-display font-extrabold text-2xl italic tracking-wider text-white">OUR IMPACT</span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed mb-6 max-w-sm">
              We solve problems with technology. We combine modern frameworks, creative thinking, and engineering precision to build scalable digital products that transform ideas into reality.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/50 transition-colors">
                <GithubIcon size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/50 transition-colors">
                <LinkedinIcon size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/50 transition-colors">
                <TwitterIcon size={14} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white mb-6">Company</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/about" className="text-text-secondary hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/team" className="text-text-secondary hover:text-white transition-colors">Our Team</Link></li>
              <li><Link to="/careers" className="text-text-secondary hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-text-secondary hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white mb-6">Resources</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/projects" className="text-text-secondary hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/technologies" className="text-text-secondary hover:text-white transition-colors">Technologies</Link></li>
              <li><a href="#" className="text-text-secondary hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-text-secondary hover:text-white transition-colors">Open Source</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white mb-6">Newsletter</h4>
            <p className="text-text-secondary text-xs mb-4">Subscribe for the latest engineering insights.</p>
            <div className="flex flex-col gap-2">
              <input type="email" placeholder="Email Address" className="bg-white/5 border border-white/10 rounded-md px-4 py-2 text-sm text-white focus:outline-none focus:border-primary/50" />
              <button className="bg-primary hover:bg-primary-dark text-white rounded-md px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        <div className="border-t border-border-dark pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-secondary">
          <div>&copy; {new Date().getFullYear()} OUR IMPACT. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
