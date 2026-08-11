export const services = [
  {
    id: 'website-development',
    title: 'Website Development',
    shortDescription: 'Corporate websites, product catalogues, e-commerce platforms and business portals.',
    description: 'We build high-performance, responsive websites that serve as the digital foundation for your business. Our solutions are designed for scalability, search visibility, and optimal user experience.',
    capabilities: [
      'Corporate Websites',
      'Product Catalogues',
      'E-commerce Websites',
      'Business Portals',
      'Content Management Systems (CMS)',
      'Basic SEO & Analytics',
      'Deployment & SSL Configuration'
    ],
    icon: 'Monitor',
    path: '/services'
  },
  {
    id: 'erp-solutions',
    title: 'ERP & Business Solutions',
    shortDescription: 'Production, inventory, purchase, sales, accounts, HR and business workflow management.',
    description: 'Turn complex business operations into one connected system. We design and implement custom ERP solutions that automate workflows, reduce manual errors, and provide real-time business insights.',
    capabilities: [
      'Production & Work Orders',
      'Inventory & Warehouse Management',
      'Purchase & Sales Orders',
      'Accounts & Financial Reporting',
      'HR, Payroll & Attendance',
      'Workflow Configuration & User Training'
    ],
    icon: 'Database',
    path: '/services'
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile Applications',
    shortDescription: 'Customer and vendor-facing applications with authentication, catalogue, and orders.',
    description: 'Deliver powerful mobile experiences your customers can rely on. We build native and cross-platform applications integrated seamlessly with your backend systems.',
    capabilities: [
      'iOS & Android Apps',
      'Secure Authentication',
      'Product Catalogues & Orders',
      'Push Notifications',
      'API & ERP Integrations',
      'Automated Testing & App Store Deployment'
    ],
    icon: 'Smartphone',
    path: '/services'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    shortDescription: 'Social media management, creative content, performance marketing and reporting.',
    description: 'Drive growth and visibility with data-backed digital marketing strategies. We handle everything from creative content production to performance ad campaign management.',
    capabilities: [
      'Social Media Management (Instagram/Facebook)',
      'Content Planning & Strategy',
      'Creative Design (Statics & Reels)',
      'Performance Marketing (Meta/Google Ads)',
      'Campaign Monitoring & Optimization',
      'Monthly Performance Reporting'
    ],
    icon: 'TrendingUp',
    path: '/services'
  }
];

export function getServices() {
  return services;
}

export function getServiceById(id) {
  return services.find(s => s.id === id) || null;
}
