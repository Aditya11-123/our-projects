export const caseStudies = [
  {
    id: 'garment-manufacturing-digital-transformation',
    title: 'Garment Manufacturing Digital Transformation',
    client: 'Garment Manufacturing Client',
    industry: 'Manufacturing',
    status: 'proposal',
    challenge: 'Manual operations spanning production, inventory tracking, and sales, leading to inefficiencies and lost revenue.',
    objectives: [
      'Digitize and connect the entire production workflow.',
      'Establish a strong online presence for B2B sales.',
      'Enable mobile access for on-the-go order management.'
    ],
    solution: 'A complete digital ecosystem including a custom ERP, Corporate Website, and Mobile Application.',
    features: [
      'Production & Inventory tracking modules',
      'HR & Payroll management',
      'Corporate website with product catalogue',
      'Mobile app for vendor orders and notifications'
    ],
    technology: ['React', 'Node.js', 'PostgreSQL', 'React Native', 'AWS'],
    implementation: 'Proposed as a multi-phase rollout over 12 weeks, ensuring UAT at every major milestone.',
    results: 'Streamlined data flow, reduced manual entry errors, and a centralized system for business intelligence.',
    feedback: null
  }
];

export function getCaseStudies() {
  return caseStudies;
}

export function getCaseStudyById(id) {
  return caseStudies.find(c => c.id === id) || null;
}
