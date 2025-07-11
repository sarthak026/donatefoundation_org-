
import React from 'react';
import Hero from '../components/sections/Hero';
import Welcome from '../components/sections/Welcome';
import Stats from '../components/sections/Stats';
import News from '../components/sections/News';
import Programs from '../components/sections/Programs';
import ImpactStories from '../components/sections/ImpactStories';
import CallToAction from '../components/sections/CallToAction';
import AboutOrganDonation from '../components/sections/AboutOrganDonation';
import PhotoVideoGallery from '../components/sections/PhotoVideoGallery';
import DonateButton from '../components/ui/DonateButton';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Welcome />
      <AboutOrganDonation />
      <Stats />
      <Programs />
      <ImpactStories />
      <PhotoVideoGallery />
      <News />
      <CallToAction />
      <DonateButton />
    </div>
  );
};

export default Index;
