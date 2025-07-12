
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Clean Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/2ebcde51-1f8b-49af-9753-58ddffaea64c.png" 
          alt="Donate Foundation community group"
          className="w-full h-full object-cover"
        />
        {/* Soft gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/60"></div>
      </div>

      {/* Content Container - Centered */}
      <div className="container mx-auto px-6 relative z-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Small Tagline */}
          <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm text-primary px-4 py-2 rounded-full mb-8 shadow-lg">
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
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            We seek out world changers and difference makers around the globe, and equip them to fulfill their unique purpose through organ donation awareness.
          </p>

          {/* CTA Button */}
          <Button 
            onClick={() => window.open('https://www.mohanfoundation.org/donorcard.asp', '_blank')} 
            className="bg-gradient-to-r from-secondary to-primary hover:from-secondary/90 hover:to-primary/90 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl transform hover:scale-105 transition-all duration-300 border-0"
          >
            BECOME A DONOR TODAY
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
