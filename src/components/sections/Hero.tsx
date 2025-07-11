
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, ExternalLink, Handshake, Users, Activity, Award, Globe, Target } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Enhanced Background with multiple gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-blue-50 to-green-50 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/15 z-0"></div>
      
      {/* Enhanced Background Images with better positioning */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-3xl overflow-hidden opacity-20 blur-sm rotate-12 transform hover:rotate-6 transition-transform duration-700">
          <img 
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&auto=format&q=80" 
            alt="Medical awareness"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-32 left-10 w-48 h-48 rounded-full overflow-hidden opacity-25 blur-sm">
          <img 
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&auto=format&q=80" 
            alt="Healthcare"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-1/3 left-1/4 w-36 h-36 rounded-2xl overflow-hidden opacity-15 blur-sm -rotate-12">
          <img 
            src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&auto=format&q=80" 
            alt="Community support"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-40 right-1/3 w-40 h-40 rounded-full overflow-hidden opacity-20 blur-sm">
          <img 
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&auto=format&q=80" 
            alt="Organ donation"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Enhanced Decorative elements */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-br from-secondary/20 to-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-gradient-to-tr from-primary/15 to-teal-300/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-gradient-to-br from-orange-200/30 to-pink-200/20 rounded-full blur-xl"></div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading with enhanced styling */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-primary px-6 py-3 rounded-full mb-8 shadow-lg border border-primary/20">
              <Heart className="h-5 w-5 text-red-500 animate-pulse" />
              <span className="font-semibold">Transforming Lives Through Donation</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8 animate-fade-in">
              <span className="bg-gradient-to-r from-primary to-teal-600 bg-clip-text text-transparent">Bridging Communities.</span><br />
              <span className="bg-gradient-to-r from-secondary to-orange-600 bg-clip-text text-transparent">Saving Lives.</span><br />
              <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Transforming Futures.</span>
            </h1>
          </div>

          {/* Enhanced Statistics Highlight with cards layout */}
          <div className="mb-12 animate-fade-in" style={{animationDelay: '0.1s'}}>
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Critical Need for Organ Donation in India</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-red-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl">
                    <Activity className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-red-600">39,415</div>
                    <div className="text-sm text-gray-600">Lives Saved in 2023</div>
                  </div>
                </div>
                <div className="text-xs text-green-600 bg-green-50 px-3 py-1 rounded-full inline-block">+6.3% from 2022</div>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">250,000</div>
                    <div className="text-sm text-gray-600">People Waiting</div>
                  </div>
                </div>
                <div className="text-xs text-orange-600 bg-orange-50 px-3 py-1 rounded-full inline-block">Critical Need</div>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-orange-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-600">&lt;5%</div>
                    <div className="text-sm text-gray-600">Demand Met</div>
                  </div>
                </div>
                <div className="text-xs text-red-600 bg-red-50 px-3 py-1 rounded-full inline-block">Gap Exists</div>
              </div>
            </div>
          </div>

          {/* Enhanced Welcome Message with visual elements */}
          <div className="text-center mb-12 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-white/50 max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Welcome to <span className="bg-gradient-to-r from-primary to-teal-600 bg-clip-text text-transparent">DONATE</span>
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                <span className="font-semibold text-primary">Diverse Outreach Network Advancing Transplant Education</span>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mt-8">
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Every day, lives are saved and transformed through the gift of organ donation. At DONATE, we are on a mission to bridge the gaps in organ donation awareness by empowering underserved communities.
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    We believe in a world where organ donation is understood, embraced, and practiced ethically. Our commitment to inclusive outreach ensures access to knowledge and resources.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced What We Stand For section */}
          <div className="mb-12 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-800">What We Stand For</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-teal-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-teal-500 to-blue-500 rounded-xl">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-teal-600">Inclusive Outreach</h4>
                </div>
                <p className="text-gray-700">Reaching rural and diverse populations with culturally relevant education and support.</p>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-blue-600">Ethical Advocacy</h4>
                </div>
                <p className="text-gray-700">Promoting fairness, transparency, and integrity in organ transplantation processes.</p>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-green-600">Empowering Education</h4>
                </div>
                <p className="text-gray-700">Dispelling myths and inspiring informed decision-making through comprehensive education.</p>
              </div>
            </div>
          </div>

          {/* Enhanced Impact Message */}
          <div className="mb-12 animate-fade-in" style={{animationDelay: '0.5s'}}>
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-8 rounded-3xl shadow-2xl max-w-4xl mx-auto">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                  <Heart className="h-5 w-5 text-white" />
                  <span className="font-semibold">Making a Difference</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Together, we can transform awareness into action and hope into saved lives.
                </h3>
                <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl">
                  <p className="text-xl font-bold text-green-100 mb-2">
                    One organ donor can save up to 8 lives
                  </p>
                  <p className="text-lg text-green-50">
                    and enhance the lives of more than 75 people through tissue donation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Call to Action */}
          <div className="text-center animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-white/50 max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Are You Ready to Donate Your Organ?
              </h3>
              <p className="text-lg text-gray-700 mb-8">
                Take the first step towards saving lives. Your decision today can give someone a second chance at life.
              </p>
              <Button 
                onClick={() => window.open('https://www.mohanfoundation.org/donorcard.asp', '_blank')} 
                size="lg" 
                className="text-xl flex gap-3 rounded-full shadow-xl transform hover:scale-105 transition-all bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 px-10 py-4 mx-auto group"
              >
                <Heart className="h-6 w-6 group-hover:animate-pulse" />
                Pledge to Donate Now
                <ExternalLink className="h-5 w-5" />
              </Button>
              <p className="text-sm text-gray-500 mt-4">
                Join thousands of heroes who have already pledged to save lives
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Decorative wave */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white via-white/80 to-transparent z-0"></div>
    </section>
  );
};

export default Hero;
