import React from 'react';
import ContentContainer from '../common/ContentContainer';
const Welcome: React.FC = () => {
  return <ContentContainer className="text-center max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-display font-semibold mb-8">Welcome from Our Founder</h2>
      <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-8 shadow-sm border border-gray-100">
        <p className="text-lg text-gray-700 italic mb-6">"Every day across India, thousands await the precious gift of life. At Donate Foundation, we bridge the gap between those in need and those willing to give. When I lost my Grandfather waiting for a kidney transplant, I discovered that awareness, not scarcity, was the barrier. Today, we've helped register over 100 donors and supported multiple families through the donation journey. Join us in building a future where no life is lost waiting."</p>
        <div className="flex items-center justify-center bg-gray-50">
          <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
            
          </div>
          <div className="text-left">
            <p className="font-semibold">Ameya</p>
            <p className="text-sm text-gray-600">President </p>
          </div>
        </div>
      </div>
    </ContentContainer>;
};
export default Welcome;