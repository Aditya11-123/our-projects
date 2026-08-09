import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';
import BaseCard from '../common/BaseCard';
import { missionData } from '../../data/mission';
import { staggerContainer, staggerItem } from '../../animations/stagger';
import { Cpu, Zap, Target, Rocket, Code, Cloud, CheckCircle } from 'lucide-react';

const ICON_MAP = {
  Innovation: Cpu,
  Performance: Zap,
  Quality: Target
};

export default function Mission() {
  return (
    <section className="bg-bg-secondary border-t border-border-dark relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="xl:col-span-7 flex flex-col">
            <SectionHeader 
              title={missionData.title}
              heading={<>ENGINEERING<br/>BEYOND <span className="text-primary">CODE</span></>}
              description={missionData.description}
              align="left"
            />

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4"
            >
              {missionData.values.map(val => {
                const Icon = ICON_MAP[val.title] || Target;
                return (
                  <motion.div key={val.id} variants={staggerItem}>
                    <BaseCard className="flex flex-col items-start gap-5 h-full !p-6 hover:border-primary/30 transition-colors">
                      <div className="w-10 h-10 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <Icon size={18} strokeWidth={2} />
                      </div>
                      <div>
                        <h4 className="text-sm font-display font-extrabold uppercase tracking-wide mb-2 text-white">{val.title}</h4>
                        <p className="text-xs text-text-secondary leading-relaxed">{val.description}</p>
                      </div>
                    </BaseCard>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="xl:col-span-5 relative hidden xl:flex justify-center items-center h-[500px]"
          >
            {/* Highly stylized circular nodes illustration */}
            <div className="w-[450px] h-[450px] relative flex items-center justify-center">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-[100px]" />
              
              {/* Orbital Rings */}
              <div className="absolute inset-0 border border-white/5 rounded-full" />
              <div className="absolute inset-12 border border-border-dark/60 border-dashed rounded-full animate-[spin_100s_linear_infinite]" />
              <div className="absolute inset-28 border border-white/5 rounded-full" />
              
              {/* Center Core */}
              <div className="relative w-40 h-40 bg-[#0A0A0E] border-t border-l border-white/10 rounded-3xl shadow-[10px_10px_30px_rgba(0,0,0,0.8),inset_-5px_-5px_20px_rgba(255,43,6,0.1)] flex items-center justify-center z-10 overflow-hidden group hover:scale-105 transition-transform duration-700">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent opacity-40" />
                
                {/* W Logo mock */}
                <div className="relative font-display font-extrabold text-6xl italic flex items-center justify-center">
                  <span className="text-primary blur-[4px] absolute scale-110">W</span>
                  <span className="text-white relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">W</span>
                  <span className="text-primary relative z-10 ml-1">E</span>
                </div>
              </div>

              {/* Orbiting Nodes */}
              
              {/* 1. Innovate */}
              <div className="absolute top-[10%] left-[5%] flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full border border-primary/40 bg-bg-primary flex items-center justify-center text-primary shadow-[0_0_15px_rgba(255,43,6,0.2)] hover:scale-110 transition-transform">
                  <Rocket size={18} />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Innovate</span>
              </div>
              
              {/* 2. Develop */}
              <div className="absolute top-[5%] right-[10%] flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full border border-border-dark bg-bg-primary flex items-center justify-center text-gray-400 hover:border-primary/40 hover:text-primary transition-all">
                  <Code size={18} />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Develop</span>
              </div>
              
              {/* 3. Deploy */}
              <div className="absolute bottom-[20%] right-[-5%] flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full border border-border-dark bg-bg-primary flex items-center justify-center text-gray-400 hover:border-primary/40 hover:text-primary transition-all">
                  <Cloud size={18} />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Deploy</span>
              </div>
              
              {/* 4. Deliver */}
              <div className="absolute bottom-[10%] left-[20%] flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full border border-border-dark bg-bg-primary flex items-center justify-center text-gray-400 hover:border-primary/40 hover:text-primary transition-all">
                  <CheckCircle size={18} />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Deliver</span>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
