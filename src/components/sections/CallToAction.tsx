
import React from 'react';
import { Link } from 'react-router-dom';
import ContentContainer from '../common/ContentContainer';
import { Button } from '@/components/ui/button';
import { Heart, Users, Flag } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <ContentContainer className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl" fullWidth>
      <div className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-center">
          Ready to Make a Difference?
        </h2>
        <p className="text-xl text-gray-700 mb-10 text-center max-w-3xl mx-auto">
          Join our mission to save lives through donation awareness, support, and advocacy. Your involvement can transform futures.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <Button asChild variant="secondary" className="w-full py-8 flex flex-col items-center justify-center gap-4 rounded-xl">
              <Link to="/donate">
                <Heart size={32} />
                <span className="text-lg font-semibold">Donate</span>
                <span className="text-sm">Support our programs</span>
              </Link>
            </Button>
          </div>
          
          <div className="flex flex-col items-center">
            <Button asChild className="w-full py-8 flex flex-col items-center justify-center gap-4 rounded-xl">
              <Link to="/get-involved">
                <Users size={32} />
                <span className="text-lg font-semibold">Volunteer</span>
                <span className="text-sm">Join our team</span>
              </Link>
            </Button>
          </div>
          
          <div className="flex flex-col items-center">
            <Button asChild variant="outline" className="w-full py-8 flex flex-col items-center justify-center gap-4 rounded-xl border-secondary text-secondary hover:bg-secondary/10">
              <Link to="/get-involved">
                <Flag size={32} />
                <span className="text-lg font-semibold">Advocate</span>
                <span className="text-sm">Spread awareness</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
};

export default CallToAction;
