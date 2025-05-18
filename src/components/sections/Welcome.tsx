
import React from 'react';
import ContentContainer from '../common/ContentContainer';

const Welcome: React.FC = () => {
  return (
    <ContentContainer className="text-center max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-display font-semibold mb-8">Welcome from Our Founder</h2>
      <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-8 shadow-sm border border-gray-100">
        <p className="text-lg text-gray-700 italic mb-6">
          "Every day across India, thousands await the precious gift of life. At DonateLife Foundation, we bridge the gap between those in need and those willing to give. When I lost my sister waiting for a kidney transplant, I discovered that awareness, not scarcity, was the barrier. Today, we've helped register over 50,000 donors and supported hundreds of families through the donation journey. Join us in building a future where no life is lost waiting."
        </p>
        <div className="flex items-center justify-center">
          <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
            <img 
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&auto=format" 
              alt="Sarah Johnson - Founder"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-left">
            <p className="font-semibold">Dr. Anjali Mehta</p>
            <p className="text-sm text-gray-600">Founder & Executive Director</p>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
};

export default Welcome;
