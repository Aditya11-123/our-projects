import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getTeam } from '../data/team';
import TeamCard from '../components/ui/TeamCard';
import Container from '../components/common/Container';
import { ArrowRight } from 'lucide-react';

export default function Team() {
  const team = getTeam();

  return (
    <main className="pt-[75px] lg:pt-[85px] pb-[60px] min-h-screen relative overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(0,80,255,0.06),transparent_70%)] pointer-events-none z-0"></div>

      {/* Hero Intro */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-[15px] lg:mb-[20px] relative z-10 text-center"
      >
        <Container noPadding={true}>
          <div className="max-w-[850px] mx-auto flex flex-col items-center">
            <h2 className="text-[11px] lg:text-[12px] font-bold uppercase tracking-widest text-brand-primary mb-[12px] lg:mb-[16px]">
              LEADERSHIP
            </h2>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-[52px] text-white leading-tight tracking-tight mb-[16px] lg:mb-[20px]">
              The people driving S COMPANY forward.
            </h1>
            <p className="text-gray-400 text-[15px] lg:text-[16px] leading-relaxed max-w-[700px]">
              A focused leadership team combining business strategy, technology, design, project execution and digital growth to build meaningful solutions for modern businesses.
            </p>
          </div>
        </Container>
      </motion.div>

      {/* Leadership Grid */}
      <Container noPadding={true} className="relative z-10 mb-[60px]">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {team.map((member) => (
            <motion.div 
              key={member.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
            >
              <TeamCard member={member} />
            </motion.div>
          ))}
        </motion.div>
      </Container>

      {/* Leadership Statement */}
      <Container noPadding={true} className="relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-[850px] mx-auto text-center border-t border-white/5 pt-[60px]"
        >
          <h2 className="text-[11px] lg:text-[12px] font-bold uppercase tracking-widest text-brand-primary mb-4">
            OUR APPROACH
          </h2>
          <h3 className="font-display font-bold text-2xl lg:text-3xl text-white mb-4">
            Built around people. Driven by technology.
          </h3>
          <p className="text-gray-400 text-[14px] lg:text-[15px] leading-relaxed mb-8 max-w-[600px] mx-auto">
            We bring together business thinking, creative execution and engineering expertise to turn ideas into practical digital solutions.
          </p>
          <Link to="/contact" className="inline-flex items-center text-[13px] font-bold text-brand-primary hover:text-white transition-colors uppercase tracking-wider">
            Let's work together <ArrowRight size={14} className="ml-2" />
          </Link>
        </motion.div>
      </Container>
      
    </main>
  );
}
