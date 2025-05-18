
import React from 'react';
import ContentContainer from '../common/ContentContainer';

const Welcome: React.FC = () => {
  return (
    <ContentContainer className="text-center max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-display font-semibold mb-8">Welcome from Our Founder</h2>
      <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
        <p className="text-lg text-gray-700 italic mb-6">
          "Every day, countless individuals wait with hope for the gift of life. At DonateLife Foundation, we believe in the power of generosity to transform not just one life, but entire communities. Our mission goes beyond medical procedures—we're building a culture where organ donation becomes a celebrated act of human connection and compassion."
        </p>
        <div className="flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
          <div className="text-left">
            <p className="font-semibold">Sarah Johnson</p>
            <p className="text-sm text-gray-600">Founder & Executive Director</p>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
};

export default Welcome;
