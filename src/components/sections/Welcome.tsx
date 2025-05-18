
import React from 'react';
import ContentContainer from '../common/ContentContainer';

const Welcome: React.FC = () => {
  return (
    <ContentContainer className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-8">
          Today, Over a billion people live in slums.<br />
          That's 14% of the world's population.
        </h2>
        <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto">
          We work over vast areas around all over world to eliminate poverty. We work to provide proper
          hygiene and education for the children living in the slums.
        </p>
      </div>
    </ContentContainer>
  );
};

export default Welcome;
