
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, ExternalLink, Handshake, Users, Activity, Award, Globe, Target, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gray-900">
      {/* Main Background Images */}
      <div className="absolute inset-0 z-0">
        {/* Banner Image 1 - Large group photo */}
        <div className="absolute inset-0 opacity-40">
          <img 
            src="/lovable-uploads/ae051478-e150-478c-aeb5-0ea9ae89102e.png"
            alt="DONATE Foundation community event"
            className="w-full h-full object-cover grayscale"
          />
        </div>
        
        {/* Banner Image 2 - Interview/consultation scene */}
        <div className="absolute top-1/4 right-0 w-1/2 h-1/2 opacity-50">
          <img 
            src="/lovable-uploads/c64c3ab2-a104-47fc-9613-24e5baeeacb7.png"
            alt="DONATE Foundation consultation"
            className="w-full h-full object-cover grayscale rounded-l-3xl"
          />
        </div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-secondary/70 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-transparent to-secondary/30 z-10"></div>

      {/* Decorative Shapes - inspired by reference designs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-secondary/20 to-primary/10 rounded-full blur-3xl z-10"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-primary/15 to-secondary/20 rounded-full blur-2xl z-10"></div>
      
      {/* Main colored overlay shape - like reference designs */}
      <div className="absolute top-1/4 left-0 w-2/3 h-1/2 bg-gradient-to-r from-primary to-secondary opacity-90 transform -skew-y-6 z-15"></div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-20 flex items-center min-h-screen">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-primary px-6 py-3 rounded-full mb-8 shadow-lg border border-primary/20">
            <Heart className="h-5 w-5 text-red-500 animate-pulse" />
            <span className="font-semibold">Transforming Lives Through Donation</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 text-white leading-tight">
            <span className="block">Bridging Communities.</span>
            <span className="block text-secondary">Saving Lives.</span>
            <span className="block text-primary">Transforming Futures.</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl font-medium leading-relaxed">
            Every day, lives are saved and transformed through the gift of organ donation. Join our mission to bridge communities and create hope.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 mb-16">
            <Button 
              onClick={() => window.open('https://www.mohanfoundation.org/donorcard.asp', '_blank')} 
              size="lg" 
              className="text-xl bg-secondary hover:bg-secondary/90 text-white px-10 py-6 rounded-full shadow-xl transform hover:scale-105 transition-all group border-0 font-semibold"
            >
              <Heart className="h-6 w-6 mr-3 group-hover:animate-pulse" />
              Become a Donor Today
              <ArrowRight className="h-5 w-5 ml-3" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg" 
              className="text-xl bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-10 py-6 rounded-full shadow-xl transition-all font-semibold"
            >
              Learn More
              <ExternalLink className="h-5 w-5 ml-3" />
            </Button>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">39,415</div>
              <div className="text-white/80">Lives Saved in 2023</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">250,000</div>
              <div className="text-white/80">People Waiting</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">8,500+</div>
              <div className="text-white/80">People Reached</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/80 to-transparent z-30"></div>
    </section>
  );
};

export default Hero;
