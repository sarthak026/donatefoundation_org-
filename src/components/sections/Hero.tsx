
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/456a1ed2-7929-4a98-8606-2681fefdf3c9.png" 
          alt="Community group"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full mb-8">
          <Heart className="h-4 w-4 text-secondary" />
          <span className="text-sm font-medium">MAKE AN IMPACT</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
          Bridging Communities.<br/>
          Saving Lives.<br/>
          Transforming Futures.
        </h1>
        
        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          We seek out world changers and difference makers around the globe, and equip them to fulfill their unique purpose through organ donation awareness.
        </p>
        
        <Button 
          onClick={() => window.open('https://www.mohanfoundation.org/donorcard.asp', '_blank')} 
          className="bg-gradient-to-r from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold"
        >
          BECOME A DONOR TODAY
          <ExternalLink className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
