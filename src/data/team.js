const defaultTeam = [
  {
    id: 'team-1',
    number: '01',
    name: 'Hemant Kumar Khora',
    role: 'Founder & CEO',
    description: 'Leads company vision, business strategy, client relationships and overall growth.',
    focus: 'BUSINESS STRATEGY · LEADERSHIP · CLIENT RELATIONS',
    githubUrl: null,
    linkedinUrl: '#',
    emailUrl: '#',
    image: 'https://api.dicebear.com/7.x/initials/svg?seed=Hemant&backgroundColor=2563EB&textColor=ffffff'
  },
  {
    id: 'team-2',
    number: '02',
    name: 'Subham Mishra',
    role: 'Digital Marketing Head',
    description: 'Leads digital marketing, brand strategy, social media growth and digital presence.',
    focus: 'DIGITAL MARKETING · BRAND STRATEGY · SOCIAL MEDIA',
    githubUrl: null,
    linkedinUrl: '#',
    emailUrl: '#',
    image: 'https://api.dicebear.com/7.x/initials/svg?seed=Subham&backgroundColor=0B1220&textColor=ffffff'
  },
  {
    id: 'team-3',
    number: '03',
    name: 'Aditya Parida',
    role: 'Project Manager & Lead',
    description: 'Leads project planning, execution, team coordination and client delivery.',
    focus: 'PROJECT MANAGEMENT · DELIVERY · CLIENT COORDINATION',
    githubUrl: null,
    linkedinUrl: '#',
    emailUrl: '#',
    image: 'https://api.dicebear.com/7.x/initials/svg?seed=Aditya&backgroundColor=06B6D4&textColor=ffffff'
  },
  {
    id: 'team-4',
    number: '04',
    name: 'Aditya Ranjan Biswal',
    role: 'Technology & Automation Lead',
    description: 'Leads technology strategy, software development, automation and technical delivery.',
    focus: 'TECHNOLOGY · AUTOMATION · SOFTWARE',
    githubUrl: null,
    linkedinUrl: '#',
    emailUrl: '#',
    image: 'https://api.dicebear.com/7.x/initials/svg?seed=AdityaR&backgroundColor=2563EB&textColor=ffffff'
  }
];

export function getTeam() {
  return defaultTeam;
}
