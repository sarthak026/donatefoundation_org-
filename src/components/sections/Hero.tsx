import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, ExternalLink } from 'lucide-react';
const Hero: React.FC = () => {
  return <section className="py-16 lg:py-24 bg-green-100">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
              <Heart className="h-4 w-4" />
              <span className="text-sm font-medium">MAKE AN IMPACT</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              <span className="block">Bridging Communities.</span>
              <span className="block">Saving Lives.</span>
              <span className="block">Transforming Futures.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
              We seek out world changers and difference makers around the globe, and equip them to fulfill their unique purpose through organ donation awareness.
            </p>

            {/* CTA Button */}
            <Button onClick={() => window.open('https://www.mohanfoundation.org/donorcard.asp', '_blank')} className="bg-gradient-to-r from-secondary to-primary hover:from-secondary/90 hover:to-primary/90 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 border-0">
              BECOME A DONOR TODAY
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img src="/lovable-uploads/cdc3ca31-bf3c-443a-9932-0113187946cd.png" alt="Donate Foundation community group" className="w-full h-auto rounded-lg shadow-xl" />
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;