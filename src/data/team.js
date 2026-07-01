// ============================================================
// WE PRO — Team Data
// ============================================================

const TEAM_KEY = 'wepro_team';

const defaultTeam = [
  {
    id: 'tm-001',
    name: 'Aditya',
    role: 'Team Lead & Full-Stack Dev',
    number: '01',
    bio: 'Architect of scalable systems. Loves React, Node.js, and clean code.',
    skills: ['React', 'Node.js', 'MongoDB', 'System Design'],
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Aditya&backgroundColor=E10600&textColor=ffffff',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'tm-002',
    name: 'Rahul',
    role: 'Frontend Engineer',
    number: '02',
    bio: 'Pixel-perfect UI craftsman. CSS wizard who makes animations sing.',
    skills: ['React', 'CSS', 'Figma', 'Three.js'],
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Rahul&backgroundColor=FF8000&textColor=ffffff',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'tm-003',
    name: 'Priya',
    role: 'Backend & DevOps',
    number: '03',
    bio: 'Container queen. Keeps our servers alive and our deployments smooth.',
    skills: ['Node.js', 'Docker', 'AWS', 'PostgreSQL'],
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Priya&backgroundColor=0096FF&textColor=ffffff',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'tm-004',
    name: 'Deepak',
    role: 'AI/ML Engineer',
    number: '04',
    bio: 'Making machines think. Specializes in NLP, CV, and model optimization.',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI'],
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Deepak&backgroundColor=00C34B&textColor=ffffff',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'tm-005',
    name: 'Sneha',
    role: 'UX/UI Designer',
    number: '05',
    bio: 'User first, always. Turns complex problems into intuitive experiences.',
    skills: ['Figma', 'Framer', 'User Research', 'Prototyping'],
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Sneha&backgroundColor=9333EA&textColor=ffffff',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'tm-006',
    name: 'Kiran',
    role: 'Mobile Developer',
    number: '06',
    bio: 'Native and cross-platform expert. Ships apps that users love.',
    skills: ['React Native', 'Flutter', 'Expo', 'Firebase'],
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Kiran&backgroundColor=DC2626&textColor=ffffff',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
];

function getTeam() {
  try {
    const stored = localStorage.getItem(TEAM_KEY);
    if (stored) return JSON.parse(stored);
  } catch (_) {}
  localStorage.setItem(TEAM_KEY, JSON.stringify(defaultTeam));
  return defaultTeam;
}

export { getTeam, defaultTeam };
