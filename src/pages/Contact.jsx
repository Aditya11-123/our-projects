import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/common/Container';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Users, Lock, ArrowRight } from 'lucide-react';
import { LinkedinIcon, TwitterIcon } from '../components/ui/SocialIcons';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <main className="pt-[60px] pb-[60px] min-h-screen relative overflow-hidden bg-[#05070B]">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(0,80,255,0.06),transparent_70%)] pointer-events-none z-0"></div>

      {/* Hero Section */}
      <Container className="relative z-10">
        <div className="max-w-[1280px] mx-auto pt-0 pb-[40px] lg:pb-[60px] flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Left Text (approx 45%) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[45%] flex flex-col items-start"
          >
            <h2 className="text-[12px] font-bold uppercase tracking-widest text-brand-primary mb-[16px]">
              CONTACT US
            </h2>
            <h1 className="font-display font-bold text-[42px] md:text-[48px] lg:text-[64px] text-white leading-[1.1] lg:leading-[1.05] tracking-tight mb-[24px]">
              Let's build something <br className="hidden lg:block" />
              <span className="text-brand-primary">great</span> together.
            </h1>
            <p className="text-[#94A3B8] text-[16px] lg:text-[17px] leading-relaxed max-w-[560px] mb-[32px]">
              Have a project in mind or want to explore how we can help your business grow? We'd love to hear from you. Reach out to us and let's start the conversation.
            </p>
            <a href="#form" onClick={(e) => { e.preventDefault(); document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' }); }} className="inline-flex items-center justify-center bg-brand-primary hover:bg-brand-primary/90 text-white font-bold text-[15px] rounded-[10px] h-[52px] px-8 transition-all hover:-translate-y-0.5">
              Start a Conversation <ArrowRight size={18} className="ml-2" />
            </a>
          </motion.div>

          {/* Right Visual (approx 55%) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-[55%] relative flex justify-end"
          >
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-[rgba(0,80,255,0.08)] blur-[60px] rounded-[20px] transform scale-95 pointer-events-none"></div>
            
            <div className="relative w-full max-w-[600px] aspect-[4/3] lg:h-[520px] rounded-[20px] overflow-hidden border border-[#1E293B] shadow-2xl bg-[#0B1018]">
              <img 
                src="/contact-corporate.jpg" 
                alt="S Company Corporate Workspace" 
                className="w-full h-full object-cover" 
              />
            </div>
          </motion.div>
          
        </div>

        {/* Trust Indicators */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-white/5 pb-[50px] mb-[50px]"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border border-white/10 bg-[#0B1018] flex items-center justify-center shrink-0">
              <Clock size={18} className="text-brand-cyan" />
            </div>
            <div>
              <h4 className="text-[14px] font-bold text-white mb-1">Quick Response</h4>
              <p className="text-[13px] text-gray-500">We reply within 24 hours</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border border-white/10 bg-[#0B1018] flex items-center justify-center shrink-0">
              <ShieldCheck size={18} className="text-brand-cyan" />
            </div>
            <div>
              <h4 className="text-[14px] font-bold text-white mb-1">Confidential</h4>
              <p className="text-[13px] text-gray-500">Your information is safe</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border border-white/10 bg-[#0B1018] flex items-center justify-center shrink-0">
              <Users size={18} className="text-brand-cyan" />
            </div>
            <div>
              <h4 className="text-[14px] font-bold text-white mb-1">Expert Team</h4>
              <p className="text-[13px] text-gray-500">Ready to help you</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Info + Form */}
        <div id="contact-form" className="flex flex-col lg:flex-row gap-8 mb-[60px]">
          
          {/* Left: Contact Info (32%) */}
          <div className="w-full lg:w-[32%] flex flex-col gap-4">
            
            <motion.div 
              whileHover={{ y: -3 }}
              className="bg-[#0B1018] border border-white/5 hover:border-brand-primary/30 transition-all rounded-[16px] p-6 flex gap-4 items-start group"
            >
              <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0 group-hover:bg-brand-primary/20 transition-colors">
                <Phone size={18} className="text-brand-primary" />
              </div>
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-brand-primary mb-2">PHONE</h4>
                <a href="tel:+918658549342" className="text-[15px] font-medium text-white hover:text-brand-primary transition-colors">
                  +91 86585 49342
                </a>
                <p className="text-[13px] text-gray-500 mt-1">Mon-Fri, 9am - 6pm</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -3 }}
              className="bg-[#0B1018] border border-white/5 hover:border-brand-primary/30 transition-all rounded-[16px] p-6 flex gap-4 items-start group"
            >
              <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0 group-hover:bg-brand-primary/20 transition-colors">
                <Mail size={18} className="text-brand-primary" />
              </div>
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-brand-primary mb-2">EMAIL</h4>
                <p className="text-[15px] font-medium text-white">contact@thescompany.com</p>
                <p className="text-[13px] text-gray-500 mt-1">We reply within 24 hours</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -3 }}
              className="bg-[#0B1018] border border-white/5 hover:border-brand-primary/30 transition-all rounded-[16px] p-6 flex gap-4 items-start group"
            >
              <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0 group-hover:bg-brand-primary/20 transition-colors">
                <MapPin size={18} className="text-brand-primary" />
              </div>
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-brand-primary mb-2">OFFICE</h4>
                <p className="text-[15px] font-medium text-white leading-relaxed">Bhubaneswar, Odisha</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -3 }}
              className="bg-[#0B1018] border border-white/5 hover:border-brand-primary/30 transition-all rounded-[16px] p-6 flex gap-4 items-start group"
            >
              <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0 group-hover:bg-brand-primary/20 transition-colors">
                <Users size={18} className="text-brand-primary" />
              </div>
              <div className="w-full">
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-brand-primary mb-3">FOLLOW US</h4>
                <div className="flex gap-4">
                  <a href="#" className="text-gray-500 hover:text-brand-primary transition-colors"><LinkedinIcon size={20} /></a>
                  <a href="#" className="text-gray-500 hover:text-brand-primary transition-colors"><TwitterIcon size={20} /></a>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right: Form (68%) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full lg:w-[68%] bg-[#0B1018] border border-white/10 rounded-[20px] p-8 md:p-10"
          >
            <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-2">Send us a message</h3>
            <p className="text-[14px] text-gray-400 mb-8">Fill out the form below and we'll get back to you shortly.</p>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] font-semibold text-gray-300">Your Name *</label>
                  <input type="text" placeholder="John Doe" className="bg-[#080D15] border border-white/10 rounded-[10px] h-[50px] px-4 text-white placeholder-[#64748B] focus:outline-none focus:border-brand-primary focus:shadow-[0_0_10px_rgba(37,99,235,0.15)] transition-all" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] font-semibold text-gray-300">Your Email *</label>
                  <input type="email" placeholder="john@company.com" className="bg-[#080D15] border border-white/10 rounded-[10px] h-[50px] px-4 text-white placeholder-[#64748B] focus:outline-none focus:border-brand-primary focus:shadow-[0_0_10px_rgba(37,99,235,0.15)] transition-all" required />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[12px] font-semibold text-gray-300">Your Phone Number</label>
                <input type="tel" placeholder="+1 (555) 000-0000" className="bg-[#080D15] border border-white/10 rounded-[10px] h-[50px] px-4 text-white placeholder-[#64748B] focus:outline-none focus:border-brand-primary focus:shadow-[0_0_10px_rgba(37,99,235,0.15)] transition-all" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[12px] font-semibold text-gray-300">Subject</label>
                <input type="text" placeholder="How can we help?" className="bg-[#080D15] border border-white/10 rounded-[10px] h-[50px] px-4 text-white placeholder-[#64748B] focus:outline-none focus:border-brand-primary focus:shadow-[0_0_10px_rgba(37,99,235,0.15)] transition-all" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[12px] font-semibold text-gray-300">Tell us about your project or requirement *</label>
                <textarea placeholder="Describe your needs..." className="bg-[#080D15] border border-white/10 rounded-[10px] h-[140px] p-4 text-white placeholder-[#64748B] focus:outline-none focus:border-brand-primary focus:shadow-[0_0_10px_rgba(37,99,235,0.15)] transition-all resize-none" required></textarea>
              </div>

              <div className="pt-2 flex">
                <button type="submit" className="bg-brand-primary hover:bg-brand-primary/90 text-white font-bold text-[14px] tracking-wide rounded-[10px] h-[50px] px-8 flex items-center justify-center hover:-translate-y-0.5 transition-all w-full md:w-auto">
                  SEND MESSAGE <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </form>

            <div className="flex items-center gap-2 mt-6">
              <Lock size={12} className="text-gray-500" />
              <span className="text-[12px] text-gray-500">We respect your privacy. Your details will never be shared.</span>
            </div>
          </motion.div>

        </div>



      </Container>
    </main>
  );
}
