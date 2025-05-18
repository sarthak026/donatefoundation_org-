
import React from 'react';
import { Link } from 'react-router-dom';
import ContentContainer from '../common/ContentContainer';

const CallToAction: React.FC = () => {
  return (
    <ContentContainer className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl text-center">
      <div className="max-w-3xl mx-auto py-8">
        <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">Ready to Make a Difference?</h2>
        <p className="text-lg text-gray-700 mb-8">
          Join our mission to save lives through donation awareness, support, and advocacy.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/donate" className="btn-primary">
            Donate
          </Link>
          <Link to="/get-involved" className="btn-tertiary">
            Volunteer
          </Link>
          <Link to="/get-involved" className="btn-secondary">
            Advocate
          </Link>
        </div>
      </div>
    </ContentContainer>
  );
};

export default CallToAction;
