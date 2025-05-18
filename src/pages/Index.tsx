
import React from 'react';
import Hero from '../components/sections/Hero';
import Welcome from '../components/sections/Welcome';
import Stats from '../components/sections/Stats';
import News from '../components/sections/News';
import CallToAction from '../components/sections/CallToAction';
import DonateButton from '../components/ui/DonateButton';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Welcome />
      <Stats />
      <News />
      <CallToAction />
      <DonateButton />
    </div>
  );
};

export default Index;
