
import React from 'react';
import ContentContainer from '../common/ContentContainer';

const statItems = [
  {
    number: '100k+',
    description: 'People await transplants',
    color: 'bg-primary/10 border-primary/30 text-primary',
  },
  {
    number: '8 min',
    description: 'A new name is added',
    color: 'bg-secondary/10 border-secondary/30 text-secondary',
  },
  {
    number: '8',
    description: 'Lives one donor can save',
    color: 'bg-blue-100 border-blue-200 text-blue-600',
  },
];

const Stats: React.FC = () => {
  return (
    <ContentContainer className="bg-gray-50 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">The Impact of Donation</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Every donation has the power to transform multiple lives. These numbers show why your decision matters.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {statItems.map((item, index) => (
          <div 
            key={index} 
            className={`${item.color} p-8 rounded-xl border text-center transition-transform hover:scale-105`}
          >
            <p className="text-4xl font-display font-bold mb-2">{item.number}</p>
            <p className="text-lg">{item.description}</p>
          </div>
        ))}
      </div>
    </ContentContainer>
  );
};

export default Stats;
