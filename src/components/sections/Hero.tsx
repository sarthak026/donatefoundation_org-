
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, ExternalLink, Users, Activity, Target } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {/* Main background image */}
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/2a444203-d2ab-4405-81be-6488e6e6a150.png" 
            alt="DONATE Foundation community"
            className="w-full h-full object-cover"
          />
          {/* Black and white filter overlay */}
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0" style={{filter: 'grayscale(0.7)'}}></div>
        </div>
        
        {/* Secondary image positioned on the right */}
        <div className="absolute top-20 right-10 w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden opacity-80 hidden lg:block">
          <img 
            src="/lovable-uploads/713dfd03-1877-471b-8b89-7c4496ac6737.png" 
            alt="DONATE Foundation mentorship"
            className="w-full h-full object-cover"
            style={{filter: 'grayscale(0.5)'}}
          />
        </div>
      </div>
      
      {/* Green-Orange Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-secondary/80 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/20 to-secondary/30 z-10"></div>
      
      {/* Decorative Shapes */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-secondary/20 rounded-full blur-3xl z-10"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-primary/30 rounded-full blur-2xl z-10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          
          {/* Left Column - Text Content */}
          <div className="text-white space-y-8">
            {/* Logo/Brand */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">DONATE</h3>
                <p className="text-green-100 text-sm">FOUNDATION</p>
              </div>
            </div>
            
            {/* Main Headline */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                <span className="text-white">Bridging</span><br />
                <span className="text-white">Communities.</span><br />
                <span className="text-secondary">Saving Lives.</span><br />
                <span className="text-white">Transforming</span><br />
                <span className="text-secondary">Futures.</span>
              </h1>
            </div>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-green-100 font-medium leading-relaxed max-w-2xl">
              Help them fulfill their dreams every action counts toward saving lives through organ donation.
            </p>
            
            {/* Key Points */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
              <div className="text-center md:text-left">
                <div className="text-3xl font-bold text-secondary mb-2">39,415</div>
                <div className="text-green-100 text-sm">Lives Saved</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl font-bold text-secondary mb-2">250K+</div>
                <div className="text-green-100 text-sm">People Waiting</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl font-bold text-secondary mb-2">8+</div>
                <div className="text-green-100 text-sm">Lives per Donor</div>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                onClick={() => window.open('https://www.mohanfoundation.org/donorcard.asp', '_blank')} 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 group"
              >
                <Heart className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                BECOME A DONOR TODAY
                <ExternalLink className="h-4 w-4 ml-2" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Right Column - Stats/Impact Cards */}
          <div className="hidden lg:flex flex-col space-y-6">
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Activity className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800">Critical Need</h4>
                  <p className="text-gray-600 text-sm">Organ donation in India</p>
                </div>
              </div>
              <p className="text-gray-700">Every day, lives hang in the balance waiting for organ donors. Your decision to donate can transform multiple families.</p>
            </div>
            
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800">Community Impact</h4>
                  <p className="text-gray-600 text-sm">Diverse outreach programs</p>
                </div>
              </div>
              <p className="text-gray-700">We bridge communities through education, reaching underserved populations with culturally relevant support.</p>
            </div>
            
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                  <Target className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800">Our Mission</h4>
                  <p className="text-gray-600 text-sm">Transforming awareness to action</p>
                </div>
              </div>
              <p className="text-gray-700">Empowering informed decision-making through comprehensive education and ethical advocacy.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white via-white/80 to-transparent z-20"></div>
    </section>
  );
};

export default Hero;
