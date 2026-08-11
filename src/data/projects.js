const defaultProjects = [
  {
    id: "bdm-fresh",
    slug: "bdm-fresh",
    title: "BDM Fresh",
    category: "Web",
    status: "completed",
    type: "Website Development",
    shortDescription: "A modern business-focused website designed to present the brand, products and business information.",
    description: "A modern business-focused website designed to present the brand, products and business information through a clean digital experience.",
    technologies: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
    image: "/bdm-fresh.webp",
    featured: true,
    externalLink: "https://bdmfresh.com/NewWeb/"
  },
  {
    id: "tejas-investment-solutions",
    slug: "tejas-investment-solutions",
    title: "Tejas Investment Solutions",
    category: "Web",
    status: "completed",
    type: "Corporate Website",
    shortDescription: "A professional digital presence designed for a financial services business.",
    description: "A professional digital presence designed for a financial services business, focusing on clear service communication, credibility and customer enquiries.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/tejas.webp",
    featured: true,
    externalLink: "https://app.tejasimf.com/"
  },
  {
    id: "indian-cocktail-academy",
    slug: "indian-cocktail-academy",
    title: "Indian Cocktail Academy",
    category: "Mobile",
    status: "completed",
    type: "Mobile Application",
    shortDescription: "A mobile-focused digital experience demonstrating user-focused content presentation.",
    description: "A mobile-focused digital experience for Indian Cocktail Academy, demonstrating mobile application development and user-focused content presentation.",
    technologies: ["React Native", "Firebase", "Node.js"],
    image: "/ica.webp",
    featured: true,
    externalLink: "https://indian-cocktail-academy.pages.dev/"
  },
  {
    id: "manufacturing-digital-transformation",
    slug: "manufacturing-digital-transformation",
    title: "Manufacturing Digital Transformation",
    category: "Business Systems",
    status: "concept",
    type: "ERP + Website + Mobile + Digital Growth",
    shortDescription: "A proposed digital ecosystem designed to connect manufacturing operations.",
    description: "A proposed digital ecosystem designed to connect manufacturing operations, inventory, purchasing, sales, accounts, workforce management, website, mobile application and digital growth.",
    technologies: ["React", "Node.js", "PostgreSQL", "React Native"],
    image: null,
    featured: true
  },
  {
    id: "shyam-plastic",
    slug: "shyam-plastic",
    title: "Shyam Plastic",
    category: "Digital Marketing",
    status: "completed",
    type: "Social Media Handling & Brand Growth",
    shortDescription: "Complete social media management, brand creative content, and digital audience growth.",
    description: "End-to-end social media handling, brand positioning, creative content production, and audience engagement strategy for Shyam Plastic.",
    technologies: ["Social Media Handling", "Content Strategy", "Creative Design", "Instagram Growth"],
    image: null,
    featured: true,
    externalLink: "https://www.instagram.com/shyamplastic_?igsh=M2M0OTR1b3dwN2lj"
  },
  {
    id: "hr-kamalini",
    slug: "hr-kamalini",
    title: "HR Kamalini",
    category: "Digital Marketing",
    status: "completed",
    type: "Personal Branding & Social Media Growth",
    shortDescription: "Personal brand positioning, professional content strategy, and social media audience growth.",
    description: "End-to-end personal branding, thought leadership content strategy, social media management, and community engagement for HR Kamalini.",
    technologies: ["Personal Branding", "Content Creation", "Social Media Strategy", "Instagram Growth"],
    image: null,
    featured: true,
    externalLink: "https://www.instagram.com/hrkamalini?igsh=NTR1aHpnZ24zeGlx"
  },
  {
    id: "b2b-manufacturing-growth",
    slug: "b2b-manufacturing-growth",
    title: "B2B Manufacturing Digital Growth Campaign",
    category: "Digital Marketing",
    status: "concept",
    type: "B2B Digital Marketing Strategy",
    shortDescription: "A sample digital marketing strategy demonstrating a structured B2B approach.",
    description: "A sample digital marketing strategy demonstrating how a B2B manufacturing business could build a stronger digital presence through structured content, social media and performance marketing.",
    technologies: ["Meta Ads", "Google Ads", "Content Strategy", "Analytics"],
    image: null,
    featured: false
  },
  {
    id: "local-business-growth",
    slug: "local-business-growth",
    title: "Local Business Digital Growth Campaign",
    category: "Digital Marketing",
    status: "concept",
    type: "Social Media + Performance Marketing",
    shortDescription: "A digital marketing campaign concept demonstrating local online visibility.",
    description: "A digital marketing campaign concept demonstrating how a local business can combine social media content, creative campaigns and performance advertising to build consistent online visibility.",
    technologies: ["Meta Ads", "Google Ads", "Social Media", "Reporting"],
    image: null,
    featured: false
  }
];

export function getProjects() {
  return defaultProjects;
}

export function getProjectById(id) {
  return defaultProjects.find((p) => p.id === id) || null;
}
