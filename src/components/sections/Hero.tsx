
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50">
      {/* Main Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/456a1ed2-7929-4a98-8606-2681fefdf3c9.png" 
          alt="Children smiling together"
          className="w-full h-full object-cover"
        />
        {/* Light overlay for text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl">
          {/* Small Tagline */}
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-primary px-4 py-2 rounded-full mb-8 shadow-sm">
            <Heart className="h-4 w-4 text-secondary" />
            <span className="text-sm font-medium">MAKE AN IMPACT</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            <span className="block">Bridging Communities.</span>
            <span className="block">Saving Lives.</span>
            <span className="block">Transforming Futures.</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl leading-relaxed">
            We seek out world changers and difference makers around the globe, and equip them to fulfill their unique purpose through organ donation awareness.
          </p>

          {/* CTA Button */}
          <Button 
            onClick={() => window.open('https://www.mohanfoundation.org/donorcard.asp', '_blank')} 
            className="bg-gradient-to-r from-secondary to-primary hover:from-secondary/90 hover:to-primary/90 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 border-0"
          >
            BECOME A DONOR TODAY
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Bottom Wave Transition */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white via-white/90 to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
