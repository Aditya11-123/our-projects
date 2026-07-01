// ============================================================
// WE PRO — Project Data
// All team projects stored here
// ============================================================

const PROJECTS_KEY = 'wepro_projects';

const defaultProjects = [
  {
    id: 'proj-001',
    title: 'ShopSphere',
    tagline: 'Full-stack e-commerce platform with AI recommendations',
    objective:
      'Build a scalable e-commerce web application that enables users to browse products, manage carts, and checkout securely — powered by an AI engine that personalizes product recommendations.',
    status: 'completed',
    category: 'Web App',
    year: 2024,
    duration: '4 months',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API', 'TensorFlow.js'],
    teamMembers: ['Aditya', 'Rahul', 'Priya', 'Deepak'],
    features: [
      'AI-powered product recommendation engine',
      'Secure Stripe payment gateway integration',
      'Real-time inventory management dashboard',
      'JWT-based authentication & role management',
      'Responsive PWA with offline support',
    ],
    challenges:
      'Optimizing the recommendation model inference time to under 200ms on the client side while maintaining accuracy. We solved this by pre-computing embeddings server-side and caching them in Redis.',
    outcome:
      'Deployed to 500+ beta users. Average session time increased by 42% compared to baseline. The recommendation engine achieved 78% click-through rate on suggested items.',
    thumbnail: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    gallery: [],
    githubUrl: 'https://github.com/wepro/shopsphere',
    liveUrl: '',
    highlights: [
      { label: 'Users', value: '500+' },
      { label: 'APIs', value: '18' },
      { label: 'CTR', value: '78%' },
    ],
  },
  {
    id: 'proj-002',
    title: 'MindMap AI',
    tagline: 'Collaborative mind-mapping tool powered by GPT',
    objective:
      'Create a real-time collaborative mind-mapping application where teams can brainstorm together, and an embedded GPT assistant auto-suggests ideas and connections to accelerate creativity.',
    status: 'completed',
    category: 'AI/ML',
    year: 2024,
    duration: '3 months',
    techStack: ['React', 'Socket.io', 'OpenAI API', 'Canvas API', 'Firebase', 'Tailwind'],
    teamMembers: ['Aditya', 'Sneha', 'Kiran'],
    features: [
      'Real-time multi-user collaboration via WebSockets',
      'GPT-4 powered idea expansion & auto-connect',
      'Infinite canvas with drag-and-drop nodes',
      'Export to PNG, PDF, and JSON formats',
      'Session recording & playback',
    ],
    challenges:
      'Synchronizing canvas state across multiple users without conflicts. Implemented an operational transformation (OT) algorithm to merge concurrent edits gracefully.',
    outcome:
      'Won 1st place at the college-level hackathon. Over 200 users onboarded in the first week of launch. Featured in 3 tech blogs.',
    thumbnail: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?w=800&q=80',
    gallery: [],
    githubUrl: 'https://github.com/wepro/mindmap-ai',
    liveUrl: '',
    highlights: [
      { label: 'Users', value: '200+' },
      { label: 'Award', value: '🥇 #1' },
      { label: 'Nodes/s', value: '60fps' },
    ],
  },
  {
    id: 'proj-003',
    title: 'TrackFit',
    tagline: 'Smart fitness tracking app with ML posture correction',
    objective:
      'Develop a mobile-first fitness tracking web app that uses the device camera and TensorFlow PoseNet to analyze exercise form in real-time and provide corrective audio feedback.',
    status: 'completed',
    category: 'Mobile',
    year: 2023,
    duration: '5 months',
    techStack: ['React Native', 'TensorFlow.js', 'PoseNet', 'Expo', 'Supabase', 'Python'],
    teamMembers: ['Aditya', 'Ravi', 'Meera'],
    features: [
      'Real-time pose estimation via device camera',
      'AI form correction with audio cues',
      'Custom workout builder and planner',
      'Progress charts with streak tracking',
      'Social leaderboard & challenges',
    ],
    challenges:
      'Running PoseNet inference at 30fps on mid-range Android devices was intensive. Optimized by quantizing the model and reducing input resolution adaptively based on device capabilities.',
    outcome:
      'Achieved 30fps inference on devices with Snapdragon 665+. Published to both Google Play (beta) and TestFlight with 120 active testers.',
    thumbnail: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
    gallery: [],
    githubUrl: 'https://github.com/wepro/trackfit',
    liveUrl: '',
    highlights: [
      { label: 'Testers', value: '120' },
      { label: 'FPS', value: '30' },
      { label: 'Accuracy', value: '91%' },
    ],
  },
  {
    id: 'proj-004',
    title: 'CodeCollab',
    tagline: 'Live collaborative code editor with interview mode',
    objective:
      'Build a browser-based collaborative code editor supporting 30+ languages, real-time pair programming, video call integration, and a structured "Interview Mode" for technical assessments.',
    status: 'completed',
    category: 'Tool',
    year: 2023,
    duration: '2 months',
    techStack: ['React', 'Monaco Editor', 'Socket.io', 'WebRTC', 'Docker', 'AWS EC2'],
    teamMembers: ['Aditya', 'Arjun', 'Divya', 'Nakul'],
    features: [
      '30+ language support via Monaco Editor',
      'Real-time code sync with conflict resolution',
      'Integrated WebRTC video/audio call',
      'Interview mode with timer and test cases',
      'Session recording and transcript export',
    ],
    challenges:
      'Embedding Monaco Editor in a multi-user environment required custom OT logic on top of Yjs CRDTs. Managing WebRTC connections at scale required TURN server configuration.',
    outcome:
      'Used by 5 college clubs for mock interview sessions. Reduced interview setup time from 15 minutes to under 2 minutes. Handles 50 concurrent users per instance.',
    thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
    gallery: [],
    githubUrl: 'https://github.com/wepro/codecollab',
    liveUrl: '',
    highlights: [
      { label: 'Languages', value: '30+' },
      { label: 'Concurrent', value: '50' },
      { label: 'Clubs', value: '5' },
    ],
  },
];

// ── Helpers ───────────────────────────────────────────────

function loadProjects() {
  try {
    const stored = localStorage.getItem(PROJECTS_KEY);
    if (stored) return JSON.parse(stored);
  } catch (_) {}
  // seed defaults on first load
  saveProjects(defaultProjects);
  return defaultProjects;
}

function saveProjects(projects) {
  localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects));
}

function getProjects() {
  return loadProjects();
}

function getProjectById(id) {
  return loadProjects().find((p) => p.id === id) || null;
}

function addProject(project) {
  const projects = loadProjects();
  const newProject = {
    ...project,
    id: `proj-${Date.now()}`,
  };
  const updated = [...projects, newProject];
  saveProjects(updated);
  return newProject;
}

function updateProject(id, data) {
  const projects = loadProjects();
  const updated = projects.map((p) => (p.id === id ? { ...p, ...data } : p));
  saveProjects(updated);
}

function deleteProject(id) {
  const projects = loadProjects();
  const updated = projects.filter((p) => p.id !== id);
  saveProjects(updated);
}

export {
  getProjects,
  getProjectById,
  addProject,
  updateProject,
  deleteProject,
  defaultProjects,
};
