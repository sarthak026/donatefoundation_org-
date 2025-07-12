
import React from 'react';
import Hero from '../components/sections/Hero';
import Welcome from '../components/sections/Welcome';
import ImpactMetrics from '../components/sections/ImpactMetrics';
import News from '../components/sections/News';
import Programs from '../components/sections/Programs';
import ImpactStories from '../components/sections/ImpactStories';
import CallToAction from '../components/sections/CallToAction';
import AboutOrganDonation from '../components/sections/AboutOrganDonation';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Welcome />
      <ImpactMetrics />
      <AboutOrganDonation />
      <Programs />
      <ImpactStories />
      <News />
      <CallToAction />
    </div>
  );
};

export default Index;
