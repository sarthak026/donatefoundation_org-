
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, ExternalLink, Handshake } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/10 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-primary/10 rounded-full blur-2xl"></div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 animate-fade-in">
            <span className="text-primary">Bridging Communities.</span><br />
            <span className="text-secondary">Saving Lives.</span><br />
            <span className="text-gray-800">Transforming Futures.</span>
          </h1>
          
          {/* Key Statistics */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-2xl mb-8 animate-fade-in border border-red-100" style={{animationDelay: '0.1s'}}>
            <p className="text-lg md:text-xl text-gray-800 mb-4 font-semibold">
              Key Statistics About Organ Donation in India
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base text-gray-700">
              <div className="bg-white/60 p-4 rounded-xl">
                <span className="font-bold text-red-600">17,000-18,000</span> transplants performed annually
              </div>
              <div className="bg-white/60 p-4 rounded-xl">
                <span className="font-bold text-red-600">250,000</span> transplants needed per year
              </div>
              <div className="bg-white/60 p-4 rounded-xl md:col-span-2">
                Meeting less than <span className="font-bold text-red-600">5%</span> of total demand
              </div>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Welcome to <span className="font-bold text-primary">DONATE</span> - Diverse Outreach Network Advancing Transplant Education
          </p>

          <div className="text-lg md:text-xl text-gray-700 mb-12 animate-fade-in space-y-4" style={{animationDelay: '0.3s'}}>
            <p>
              Every day, lives are saved and transformed through the gift of organ donation. At DONATE, we are on a mission to bridge the gaps in organ donation awareness by empowering underserved communities, advocating for ethical practices, and fostering global education.
            </p>
            <p>
              We believe in a world where organ donation is understood, embraced, and practiced ethically. Our commitment to inclusive outreach ensures that even the most remote and underserved populations can access the knowledge and resources they need to make informed decisions.
            </p>
          </div>

          {/* What We Stand For */}
          <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-8 rounded-2xl mb-8 animate-fade-in border border-teal-100" style={{animationDelay: '0.4s'}}>
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-6 text-gray-800">What We Stand For:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="bg-white/70 p-4 rounded-xl">
                <h4 className="font-bold text-teal-600 mb-2">Inclusive Outreach</h4>
                <p className="text-gray-700">Reaching rural and diverse populations with culturally relevant education.</p>
              </div>
              <div className="bg-white/70 p-4 rounded-xl">
                <h4 className="font-bold text-teal-600 mb-2">Ethical Advocacy</h4>
                <p className="text-gray-700">Promoting fairness, transparency, and integrity in organ transplantation.</p>
              </div>
              <div className="bg-white/70 p-4 rounded-xl md:col-span-2">
                <h4 className="font-bold text-teal-600 mb-2">Empowering Education</h4>
                <p className="text-gray-700">Dispelling myths and inspiring informed decision-making.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl mb-8 animate-fade-in border border-green-100" style={{animationDelay: '0.5s'}}>
            <p className="text-lg md:text-xl text-gray-800 mb-4">
              Together, we can transform awareness into action and hope into saved lives.
            </p>
            <p className="text-xl font-bold text-green-600">
              One organ donor can save up to 8 lives and enhance the lives of more than 75 people through tissue donation.
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center animate-fade-in" style={{animationDelay: '0.6s'}}>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Are You Ready to Donate Your Organ?</h3>
            <Button 
              onClick={() => window.open('https://www.mohanfoundation.org/donorcard.asp', '_blank')} 
              size="lg" 
              className="text-xl flex gap-2 rounded-full shadow-lg transform hover:scale-105 transition-all bg-orange-500 hover:bg-orange-400 px-8 py-3 mx-auto"
            >
              <Heart className="h-6 w-6" />
              Pledge to Donate Now
              <ExternalLink className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent z-0"></div>
    </section>
  );
};

export default Hero;
