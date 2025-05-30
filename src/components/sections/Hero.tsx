
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, ExternalLink, Handshake } from 'lucide-react';
const Hero: React.FC = () => {
  return <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/10 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-primary/10 rounded-full blur-2xl"></div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 animate-fade-in">
            <span className="text-primary">One Gift.</span> <span className="text-secondary">Many Lives.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-12 animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            Become an organ, eye, or tissue donor today and transform countless futures with your decision.
          </p>

          {/* Mohan Foundation Section */}
          <div className="bg-gradient-to-r from-secondary/10 to-primary/10 p-8 rounded-2xl mb-8 animate-fade-in" style={{
          animationDelay: '0.3s'
        }}>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="h-8 w-8 text-secondary" />
              <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">Pledge to Save Lives with Mohan Foundation</h2>
            </div>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Every 10 minutes, someone is added to the organ transplant waiting list. One organ donor can save up to 8 lives. Join the movement and become a hero.
            </p>

            {/* MOU Announcement */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-primary/20 mb-8">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Handshake className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold text-primary">MOU Announcement</h3>
              </div>
              <p className="text-gray-700">
                We've signed an MoU with Mohan Foundation to promote organ donation awareness.
              </p>
            </div>

            {/* Centered Call to Action */}
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Are You Ready to Donate Your Organ?</h3>
              <p className="text-lg mb-6 text-gray-600">
            </p>
              <Button onClick={() => window.open('https://www.mohanfoundation.org/donorcard.asp', '_blank')} size="lg" className="text-xl flex gap-2 rounded-full shadow-lg transform hover:scale-105 transition-all bg-orange-500 hover:bg-orange-400 px-8 py-3">
                <Heart className="h-6 w-6" />
                Pledge Your Organ
                <ExternalLink className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent z-0"></div>
    </section>;
};
export default Hero;
