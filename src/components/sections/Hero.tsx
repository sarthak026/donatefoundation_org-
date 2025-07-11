
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, ExternalLink, Handshake, Users, Activity, Award, Globe, Target } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Enhanced Background with authentic DONATE Foundation images */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-blue-50 to-green-50 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/15 z-0"></div>
      
      {/* Authentic DONATE Foundation Background Images */}
      <div className="absolute inset-0 z-0">
        {/* Main group photo - top right */}
        <div className="absolute top-10 right-10 w-80 h-64 rounded-3xl overflow-hidden opacity-15 blur-sm rotate-6 transform hover:rotate-3 transition-transform duration-700">
          <img 
            src="/lovable-uploads/da3607ac-ad59-455e-969a-2c38b8a0ac34.png" 
            alt="DONATE Foundation community event with participants"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
        </div>
        
        {/* Intimate conversation photo - bottom left */}
        <div className="absolute bottom-20 left-10 w-72 h-48 rounded-2xl overflow-hidden opacity-20 blur-sm -rotate-6">
          <img 
            src="/lovable-uploads/04d6dbe6-ee01-4ba1-b5c8-4f348d96aecc.png" 
            alt="DONATE Foundation counseling session"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent"></div>
        </div>
        
        {/* Banner conversation - middle left */}
        <div className="absolute top-1/3 left-1/4 w-60 h-40 rounded-2xl overflow-hidden opacity-18 blur-sm rotate-12">
          <img 
            src="/lovable-uploads/c0625d85-03db-48f2-8a8b-f5b1f4f15939.png" 
            alt="DONATE Foundation mission discussion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent"></div>
        </div>
        
        {/* Group photo - top center background */}
        <div className="absolute top-40 right-1/3 w-56 h-36 rounded-full overflow-hidden opacity-12 blur-md">
          <img 
            src="/lovable-uploads/1b4e1f8d-3b09-4afe-b01a-f0b30b996df9.png" 
            alt="DONATE Foundation team and volunteers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-orange-400/25 to-transparent"></div>
        </div>
        
        {/* Another conversation photo - bottom right */}
        <div className="absolute bottom-32 right-1/4 w-48 h-32 rounded-xl overflow-hidden opacity-16 blur-sm -rotate-12">
          <img 
            src="/lovable-uploads/54add024-ffe2-46d8-9f8b-398ce53887ae.png" 
            alt="DONATE Foundation community engagement"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent"></div>
        </div>
      </div>
      
      {/* Enhanced Decorative elements with DONATE Foundation colors */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-br from-green-200/30 to-orange-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-gradient-to-tr from-primary/15 to-teal-300/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-gradient-to-br from-orange-200/30 to-pink-200/20 rounded-full blur-xl"></div>
      
      {/* Hero content with enhanced readability overlay */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading with enhanced styling and readability */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-primary px-6 py-3 rounded-full mb-8 shadow-lg border border-primary/20">
              <Heart className="h-5 w-5 text-red-500 animate-pulse" />
              <span className="font-semibold">Transforming Lives Through Donation</span>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 mb-8 shadow-xl border border-white/50">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8 animate-fade-in">
                <span className="bg-gradient-to-r from-primary to-teal-600 bg-clip-text text-transparent">Bridging Communities.</span><br />
                <span className="bg-gradient-to-r from-secondary to-orange-600 bg-clip-text text-transparent">Saving Lives.</span><br />
                <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Transforming Futures.</span>
              </h1>
              
              {/* Enhanced CTA Button */}
              <div className="mt-8">
                <Button 
                  onClick={() => window.open('https://www.mohanfoundation.org/donorcard.asp', '_blank')} 
                  size="lg" 
                  className="text-xl flex gap-3 rounded-full shadow-2xl transform hover:scale-105 transition-all bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-500 hover:to-teal-500 px-12 py-4 mx-auto group border-2 border-white/20"
                >
                  <Heart className="h-6 w-6 group-hover:animate-pulse" />
                  Become a Donor Today
                  <ExternalLink className="h-5 w-5" />
                </Button>
                <p className="text-sm text-gray-600 mt-3">
                  Join thousands of heroes who have already pledged to save lives
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced Statistics Highlight with cards layout */}
          <div className="mb-12 animate-fade-in" style={{animationDelay: '0.1s'}}>
            <div className="text-center mb-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Critical Need for Organ Donation in India</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl border border-red-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
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
              
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl border border-blue-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
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
              
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl border border-orange-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
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
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/50 max-w-4xl mx-auto">
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
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 max-w-2xl mx-auto">
                <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-800">What We Stand For</h3>
                <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto rounded-full"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-teal-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-teal-500 to-blue-500 rounded-xl">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-teal-600">Inclusive Outreach</h4>
                </div>
                <p className="text-gray-700">Reaching rural and diverse populations with culturally relevant education and support.</p>
              </div>
              
              <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-blue-600">Ethical Advocacy</h4>
                </div>
                <p className="text-gray-700">Promoting fairness, transparency, and integrity in organ transplantation processes.</p>
              </div>
              
              <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-green-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
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
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-8 rounded-3xl shadow-2xl max-w-4xl mx-auto border border-white/20">
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
        </div>
      </div>
      
      {/* Enhanced Decorative wave */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white via-white/80 to-transparent z-0"></div>
    </section>
  );
};

export default Hero;
