import React from 'react';
import Container from '../common/Container';

export default function OurWorkFilters({ activeFilter, setActiveFilter }) {
  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'business systems', label: 'Business Systems' },
    { id: 'digital marketing', label: 'Digital Marketing' }
  ];

  return (
    <div className="bg-white py-6 md:py-8 border-b border-gray-100 relative">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-col">
            <h2 className="text-sm font-bold uppercase tracking-widest text-brand-primary mb-1">Explore Our Work</h2>
            <p className="text-xs text-gray-500">Browse our digital solutions by category.</p>
          </div>
          
          <div className="flex overflow-x-auto hide-scrollbar gap-2 items-center">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-2 text-[13px] font-medium transition-colors shrink-0 rounded-full ${
                  isActive 
                    ? 'bg-brand-primary text-white shadow-sm' 
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
        </div>
      </Container>
    </div>
  );
}
