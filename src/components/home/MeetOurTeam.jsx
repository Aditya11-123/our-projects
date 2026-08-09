import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';
import TeamCard from '../common/TeamCard';
import { getTeam } from '../../data/team';
import { staggerContainer, staggerItem } from '../../animations/stagger';

export default function MeetOurTeam() {
  const team = getTeam();

  return (
    <section className="bg-bg-primary border-t border-border-dark">
      <Container>
        <SectionHeader 
          title="Meet Our Team"
          heading="The People Behind It"
          description="A specialized group of architects, engineers, and designers dedicated to pushing the boundaries of what's possible."
          align="center"
        />

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {team.map(member => (
            <motion.div key={member.id} variants={staggerItem}>
              <TeamCard member={member} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
