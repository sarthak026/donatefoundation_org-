
import React from 'react';
import ContentContainer from '../components/common/ContentContainer';
import DonateButton from '../components/ui/DonateButton';

const About: React.FC = () => {
  return (
    <>
      <div className="pt-24 bg-gray-50">
        <ContentContainer>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-8 text-center">About DonateLife Foundation</h1>
          </div>
        </ContentContainer>
      </div>

      {/* Mission & Vision Section */}
      <ContentContainer className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-display font-semibold mb-6 text-primary">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              DonateLife Foundation is dedicated to saving and enhancing lives through increased awareness and accessibility of organ, eye, and tissue donation.
            </p>
            <p className="text-gray-700">
              We work tirelessly to educate communities, support donor families, and advocate for policies that improve the donation and transplantation system.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-display font-semibold mb-6 text-secondary">Our Vision</h2>
            <p className="text-gray-700 mb-4">
              We envision a world where everyone embraces organ donation as a fundamental human responsibility, where waiting lists for transplants no longer exist, and where the gift of life is celebrated as our greatest legacy.
            </p>
            <p className="text-gray-700">
              Through innovation, education, and compassion, we're creating a future where no one dies waiting for a transplant.
            </p>
          </div>
        </div>
        <div className="my-16 px-8 py-10 bg-gray-100 rounded-xl text-center">
          <blockquote className="text-2xl font-display italic text-gray-700">
            "The measure of life is not its duration, but its donation."
          </blockquote>
        </div>
      </ContentContainer>

      {/* Our Story */}
      <ContentContainer className="bg-gray-50 py-16">
        <h2 className="text-3xl md:text-4xl font-display font-semibold mb-12 text-center">Our Journey</h2>
        <div className="max-w-4xl mx-auto">
          {/* Timeline items */}
          <div className="relative border-l-4 border-primary pl-8 pb-8">
            <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-primary"></div>
            <h3 className="text-xl font-display font-semibold mb-2">2010: The Beginning</h3>
            <p className="text-gray-700">
              Founded by Sarah Johnson after her brother received a life-saving heart transplant, DonateLife Foundation started as a small community outreach program.
            </p>
          </div>
          
          <div className="relative border-l-4 border-primary pl-8 pb-8">
            <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-primary"></div>
            <h3 className="text-xl font-display font-semibold mb-2">2015: Growing Impact</h3>
            <p className="text-gray-700">
              Expanded to five states with dedicated hospital counselors and launched our annual awareness walk, reaching over 50,000 potential donors.
            </p>
          </div>
          
          <div className="relative border-l-4 border-primary pl-8 pb-8">
            <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-primary"></div>
            <h3 className="text-xl font-display font-semibold mb-2">2020: National Recognition</h3>
            <p className="text-gray-700">
              Received the National Healthcare Award for our innovative donor registry system and family support programs.
            </p>
          </div>
          
          <div className="relative pl-8">
            <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-primary"></div>
            <h3 className="text-xl font-display font-semibold mb-2">2025: The Future</h3>
            <p className="text-gray-700">
              Today, we operate nationwide with a comprehensive approach to donation education, support, and advocacy, having facilitated over 10,000 successful transplants.
            </p>
          </div>
        </div>
      </ContentContainer>

      {/* Leadership Team */}
      <ContentContainer>
        <h2 className="text-3xl md:text-4xl font-display font-semibold mb-12 text-center">Our Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member Cards */}
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4"></div>
            <h3 className="text-xl font-display font-semibold mb-1">Sarah Johnson</h3>
            <p className="text-gray-500 mb-4">Founder & Executive Director</p>
            <p className="text-gray-700">
              Driven by personal experience, Sarah has led DonateLife from a local initiative to a national foundation.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4"></div>
            <h3 className="text-xl font-display font-semibold mb-1">Dr. Michael Chen</h3>
            <p className="text-gray-500 mb-4">Medical Director</p>
            <p className="text-gray-700">
              A transplant surgeon with over 20 years of experience, Dr. Chen oversees our medical outreach programs.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4"></div>
            <h3 className="text-xl font-display font-semibold mb-1">Lisa Rodriguez</h3>
            <p className="text-gray-500 mb-4">Director of Community Engagement</p>
            <p className="text-gray-700">
              Lisa builds partnerships with hospitals, schools, and community organizations across the country.
            </p>
          </div>
        </div>
      </ContentContainer>

      {/* Partners & Sponsors */}
      <ContentContainer className="bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-display font-semibold mb-12 text-center">Our Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Partner logos - using gray placeholder boxes */}
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div 
              key={item} 
              className="h-24 bg-white rounded-lg shadow-sm flex items-center justify-center grayscale hover:grayscale-0 transition-all"
            >
              <div className="w-3/4 h-12 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      </ContentContainer>

      <DonateButton />
    </>
  );
};

export default About;
