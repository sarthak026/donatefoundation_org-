
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, Users } from 'lucide-react';

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
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 animate-fade-in">
            <span className="text-primary">One Gift.</span> <span className="text-secondary">Many Lives.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Become an organ, eye, or tissue donor today and transform countless futures with your decision.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button asChild size="lg" className="text-lg flex gap-2 py-6 px-8 rounded-full shadow-lg">
              <Link to="/donate">
                <Heart className="h-5 w-5" />
                Register as Donor
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg flex gap-2 py-6 px-8 rounded-full border-secondary text-secondary hover:bg-secondary/10">
              <Link to="/what-we-do">
                <Users className="h-5 w-5" />
                See Impact Stories
              </Link>
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
