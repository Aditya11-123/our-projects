const defaultTeam = [
  {
    id: 'team-1',
    name: 'Aditya',
    role: 'Senior Backend Engineer',
    availability: 'Available',
    location: 'India',
    experience: '6 Years',
    specialization: 'Microservices',
    languages: ['Java', 'Spring Boot', 'Node.js'],
    githubUrl: 'https://github.com/wepro-aditya',
    linkedinUrl: 'https://linkedin.com/in/wepro-aditya',
    image: 'https://api.dicebear.com/7.x/initials/svg?seed=Aditya&backgroundColor=E10600&textColor=ffffff'
  },
  {
    id: 'team-2',
    name: 'Sarah',
    role: 'Lead UI/UX Designer',
    availability: 'Booked',
    location: 'USA',
    experience: '8 Years',
    specialization: 'Design Systems',
    languages: ['Figma', 'Framer', 'React'],
    githubUrl: '#',
    linkedinUrl: '#',
    image: 'https://api.dicebear.com/7.x/initials/svg?seed=Sarah&backgroundColor=050507&textColor=ffffff'
  },
  {
    id: 'team-3',
    name: 'Rahul',
    role: 'Cloud Architect',
    availability: 'Available',
    location: 'UK',
    experience: '10 Years',
    specialization: 'DevOps & AWS',
    languages: ['Terraform', 'Docker', 'Kubernetes'],
    githubUrl: '#',
    linkedinUrl: '#',
    image: 'https://api.dicebear.com/7.x/initials/svg?seed=Rahul&backgroundColor=1F1F28&textColor=ffffff'
  },
  {
    id: 'team-4',
    name: 'Priya',
    role: 'AI Researcher',
    availability: 'Available',
    location: 'Canada',
    experience: '5 Years',
    specialization: 'LLMs & NLP',
    languages: ['Python', 'PyTorch', 'TensorFlow'],
    githubUrl: '#',
    linkedinUrl: '#',
    image: 'https://api.dicebear.com/7.x/initials/svg?seed=Priya&backgroundColor=E10600&textColor=ffffff'
  }
];

export function getTeam() {
  return defaultTeam;
}
