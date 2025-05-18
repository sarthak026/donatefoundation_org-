
import React from 'react';
import ContentContainer from '../common/ContentContainer';

const statItems = [
  {
    number: '100k+',
    description: 'People await transplants in India',
    color: 'bg-gradient-to-r from-primary/20 to-primary/10 border-primary/20 text-primary-800',
  },
  {
    number: '8 min',
    description: 'A new name is added to the waiting list',
    color: 'bg-gradient-to-r from-secondary/20 to-secondary/10 border-secondary/20 text-secondary-800',
  },
  {
    number: '8',
    description: 'Lives one donor can save',
    color: 'bg-gradient-to-r from-blue-100/80 to-blue-50 border-blue-200 text-blue-700',
  },
  {
    number: '500+',
    description: 'Awareness workshops conducted yearly',
    color: 'bg-gradient-to-r from-purple-100/80 to-purple-50 border-purple-200 text-purple-700',
  },
];

const Stats: React.FC = () => {
  return (
    <ContentContainer className="bg-gray-50 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">The Impact of Donation</h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Every donation has the power to transform multiple lives. These numbers show why your decision matters in India's healthcare landscape.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {statItems.map((item, index) => (
          <div 
            key={index} 
            className={`${item.color} p-8 rounded-xl border text-center transition-all hover:scale-105 shadow-sm`}
          >
            <p className="text-4xl md:text-5xl font-display font-bold mb-4">{item.number}</p>
            <p className="text-lg">{item.description}</p>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12 text-gray-600 max-w-2xl mx-auto">
        <p>Source: National Organ & Tissue Transplant Organization (NOTTO), Ministry of Health and Family Welfare, Government of India</p>
      </div>
    </ContentContainer>
  );
};

export default Stats;
