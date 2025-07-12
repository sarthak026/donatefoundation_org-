
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Main Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/c64c3ab2-a104-47fc-9613-24e5baeeacb7.png" 
          alt="Children smiling"
          className="w-full h-full object-cover"
        />
        {/* Subtle dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Secondary Image - positioned on right side */}
      <div className="absolute top-20 right-10 w-80 h-80 rounded-2xl overflow-hidden opacity-90 shadow-2xl z-10 hidden lg:block">
        <img 
          src="/lovable-uploads/ae051478-e150-478c-aeb5-0ea9ae89102e.png" 
          alt="Community support"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Decorative Shape - Green Orange Gradient */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-green-400/30 to-orange-400/30 rounded-full blur-3xl z-5"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-gradient-to-tl from-orange-300/20 to-green-300/20 rounded-full blur-2xl z-5"></div>

      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl">
          {/* Small Tagline */}
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-primary px-4 py-2 rounded-full mb-8 shadow-lg">
            <Heart className="h-4 w-4 text-red-500" />
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
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl transform hover:scale-105 transition-all duration-300 border-0"
          >
            BECOME A DONOR TODAY
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white via-white/80 to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
