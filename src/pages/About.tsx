
import React from 'react';
import ContentContainer from '../components/common/ContentContainer';
import DonateButton from '../components/ui/DonateButton';
import { Button } from '@/components/ui/button';
import { Heart, Users, Shield, BookOpen, Globe, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  return (
    <>
      <div className="pt-24 bg-gradient-to-r from-primary/5 to-secondary/5">
        <ContentContainer>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-8">About DONATE</h1>
            <p className="text-xl text-gray-700">
              Diverse Outreach Network Advancing Transplant Education
            </p>
          </div>
        </ContentContainer>
      </div>

      {/* Mission & Vision Section */}
      <ContentContainer className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-primary/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-3 rounded-full">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-display font-semibold text-primary">Our Mission</h2>
            </div>
            <p className="text-gray-700 mb-4">
              At DONATE, we aim to bridge the gap in organ donation awareness through inclusive outreach, ethical advocacy, and transformative education.
            </p>
            <p className="text-gray-700">
              We are committed to dispelling myths, promoting transparency, and fostering global dialogue on organ transplantation.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-secondary/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-secondary/10 p-3 rounded-full">
                <Globe className="h-6 w-6 text-secondary" />
              </div>
              <h2 className="text-3xl font-display font-semibold text-secondary">Our Vision</h2>
            </div>
            <p className="text-gray-700 mb-4">
              We envision a world where organ donation is universally understood, ethically practiced, and widely embraced.
            </p>
            <p className="text-gray-700">
              We focus particularly on empowering rural communities through education, advocacy, and support.
            </p>
          </div>
        </div>
      </ContentContainer>

      {/* Our Story */}
      <ContentContainer className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-8 text-center">Our Story</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-lg text-gray-700 mb-6">
              DONATE was founded with a singular goal: to break down barriers in organ donation awareness. Our inspiration came from witnessing the life-changing impact of organ transplantation and the disparities in knowledge and access in rural and underserved areas.
            </p>
            <p className="text-lg text-gray-700">
              Through a combination of community outreach, educational initiatives, and policy advocacy, we strive to make organ donation a symbol of humanity and hope.
            </p>
          </div>
        </div>
      </ContentContainer>

      {/* Core Values */}
      <ContentContainer className="py-16">
        <h2 className="text-3xl md:text-4xl font-display font-semibold mb-12 text-center">Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center border border-blue-100 hover:shadow-xl transition-shadow">
            <div className="bg-blue-50 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-display font-semibold mb-3 text-blue-600">Transparency</h3>
            <p className="text-gray-700">Open, honest communication in all our processes and practices.</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center border border-green-100 hover:shadow-xl transition-shadow">
            <div className="bg-green-50 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-display font-semibold mb-3 text-green-600">Inclusivity</h3>
            <p className="text-gray-700">Ensuring equal access and representation for all communities.</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center border border-purple-100 hover:shadow-xl transition-shadow">
            <div className="bg-purple-50 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Heart className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-display font-semibold mb-3 text-purple-600">Advocacy</h3>
            <p className="text-gray-700">Fighting for ethical practices and patient rights in organ donation.</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center border border-orange-100 hover:shadow-xl transition-shadow">
            <div className="bg-orange-50 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Lightbulb className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-display font-semibold mb-3 text-orange-600">Empowerment</h3>
            <p className="text-gray-700">Providing knowledge and tools for informed decision-making.</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center border border-teal-100 hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
            <div className="bg-teal-50 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Globe className="h-8 w-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-display font-semibold mb-3 text-teal-600">Global Impact</h3>
            <p className="text-gray-700">Creating worldwide awareness and positive change.</p>
          </div>
        </div>
      </ContentContainer>

      {/* Call to Action */}
      <ContentContainer className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-gray-800">
            Join Our Mission
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Together, we can transform awareness into action and hope into saved lives. Your support helps us reach more communities and save more lives.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-3 text-lg">
            <BookOpen className="h-5 w-5 mr-2" />
            Learn About Organ Donation
          </Button>
        </div>
      </ContentContainer>

      <DonateButton />
    </>
  );
};

export default About;
