const defaultProjects = [
  {
    id: 'proj-001',
    title: 'ShopSphere',
    category: 'Web App',
    description: 'Full-stack e-commerce platform with AI recommendations, secure payments, and real-time inventory management.',
    techStack: ['React', 'Node.js', 'MongoDB', 'AI'],
    teamSize: '6 Developers',
    duration: '4 Months',
    status: 'Completed',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'proj-002',
    title: 'MindMap AI',
    category: 'AI',
    description: 'Collaborative mind-mapping tool powered by GPT for real-time idea generation and auto-connections.',
    techStack: ['React', 'Socket.io', 'OpenAI API'],
    teamSize: '3 Developers',
    duration: '3 Months',
    status: 'Completed',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?w=800&q=80',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'proj-003',
    title: 'TrackFit',
    category: 'Mobile',
    description: 'Smart fitness tracking app using device camera and ML for real-time posture correction.',
    techStack: ['React Native', 'TensorFlow.js', 'Python'],
    teamSize: '3 Developers',
    duration: '5 Months',
    status: 'Beta',
    year: '2023',
    thumbnail: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'proj-004',
    title: 'CodeCollab',
    category: 'Web App',
    description: 'Live collaborative code editor supporting 30+ languages with an integrated interview mode.',
    techStack: ['React', 'WebRTC', 'AWS'],
    teamSize: '4 Developers',
    duration: '2 Months',
    status: 'Completed',
    year: '2023',
    thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
    liveUrl: '#',
    githubUrl: '#',
  },
];

export function getProjects() {
  return defaultProjects;
}

export function getProjectById(id) {
  return defaultProjects.find((p) => p.id === id) || null;
}
