import React from 'react';
import ContentContainer from '../components/common/ContentContainer';
import DonateButton from '../components/ui/DonateButton';
import { Button } from '@/components/ui/button';
import { Heart, Users, Shield, BookOpen, Globe, Lightbulb, HandHeart, Target } from 'lucide-react';
const About: React.FC = () => {
  return <>
      {/* Hero Section with Background Image */}
      <div className="relative pt-24 pb-20 bg-gradient-to-br from-primary via-primary/90 to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-secondary/95"></div>
        <div className="absolute inset-0 opacity-20">
          <img src="/lovable-uploads/254d10a2-79a1-4365-9fb3-d9dd964afd0e.png" alt="Community engagement background" className="w-full h-full object-cover" />
        </div>
        <ContentContainer>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <HandHeart className="h-4 w-4" />
              <span className="font-medium">Transforming Lives Through Hope</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-8 text-white">About DONATE</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Diverse Outreach Network Advancing Transplant Education
            </p>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Creating awareness, building bridges, and saving lives through compassionate organ donation advocacy
            </p>
          </div>
        </ContentContainer>
      </div>

      {/* Mission & Vision Section */}
      <ContentContainer className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-primary/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-3 rounded-full">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-display font-semibold text-primary">Our Mission</h2>
            </div>
            <p className="text-gray-700 mb-4">We aim to bridge the gap in organ donation awareness through inclusive outreach, ethical advocacy, and transformative education.</p>
            <p className="text-gray-700">
              We are committed to dispelling myths, promoting transparency, and fostering global dialogue on organ transplantation.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-secondary/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-secondary/10 p-3 rounded-full">
                <Globe className="h-6 w-6 text-secondary" />
              </div>
              <h2 className="text-3xl font-display font-semibold text-secondary">Our Vision</h2>
            </div>
            <p className="text-gray-700 mb-4">
              We envision a world where organ donation is universally understood, ethically practiced, and widely embraced.
            </p>
            <p className="text-gray-700">
              We focus particularly on empowering rural communities through education, advocacy, and support.
            </p>
          </div>
        </div>
      </ContentContainer>

      {/* Our Story */}
      <ContentContainer className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-12 text-center">Our Story</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <p className="text-lg text-gray-700 mb-6">Founded with a singular goal: to break down barriers in organ donation awareness. Our inspiration came from witnessing the life-changing impact of organ transplantation and the disparities in knowledge and access in rural and underserved areas.</p>
              <p className="text-lg text-gray-700">
                Through a combination of community outreach, educational initiatives, and policy advocacy, we strive to make organ donation a symbol of humanity and hope.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img src="/lovable-uploads/e0f53023-698d-432d-97c8-689af2f235de.png" alt="Educational workshop with community" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg mt-8">
                <img src="/lovable-uploads/f1ff8a96-c999-4319-aade-e4a5cee10edf.png" alt="Mission outreach activities" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </ContentContainer>

      {/* Community Impact Section */}
      <ContentContainer className="py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Target className="h-4 w-4" />
              <span className="font-medium">Real Stories, Real Impact</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">Making a Difference Together</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every conversation, every workshop, and every pledge brings us closer to a world where organ donation saves more lives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-2xl shadow-lg">
              <img src="/lovable-uploads/7f33df0a-fc8e-4ecb-ac01-2d158466dbec.png" alt="Team building and volunteer engagement" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Volunteer Engagement</h3>
                <p className="text-white/90">Building passionate teams that drive change</p>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-2xl shadow-lg">
              <img src="/lovable-uploads/05135849-ef60-4f5f-a5d9-652674e0492b.png" alt="One-on-one community dialogue" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Personal Connections</h3>
                <p className="text-white/90">Heart-to-heart conversations that matter</p>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-2xl shadow-lg">
              <img src="/lovable-uploads/2c805cd6-bd0d-4f2c-bfc8-1771623cf03e.png" alt="Community awareness and connections" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Community Connections</h3>
                <p className="text-white/90">Building networks of hope and support</p>
              </div>
            </div>
          </div>
        </div>
      </ContentContainer>

      {/* Core Values */}
      <ContentContainer className="py-16">
        <h2 className="text-3xl md:text-4xl font-display font-semibold mb-12 text-center">Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center border border-blue-100 hover:shadow-xl transition-shadow">
            <div className="bg-blue-50 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-display font-semibold mb-3 text-blue-600">Transparency</h3>
            <p className="text-gray-700">Open, honest communication in all our processes and practices.</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center border border-green-100 hover:shadow-xl transition-shadow">
            <div className="bg-green-50 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-display font-semibold mb-3 text-green-600">Inclusivity</h3>
            <p className="text-gray-700">Ensuring equal access and representation for all communities.</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center border border-purple-100 hover:shadow-xl transition-shadow">
            <div className="bg-purple-50 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Heart className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-display font-semibold mb-3 text-purple-600">Advocacy</h3>
            <p className="text-gray-700">Fighting for ethical practices and patient rights in organ donation.</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center border border-orange-100 hover:shadow-xl transition-shadow">
            <div className="bg-orange-50 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Lightbulb className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-display font-semibold mb-3 text-orange-600">Empowerment</h3>
            <p className="text-gray-700">Providing knowledge and tools for informed decision-making.</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center border border-teal-100 hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
            <div className="bg-teal-50 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Globe className="h-8 w-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-display font-semibold mb-3 text-teal-600">Global Impact</h3>
            <p className="text-gray-700">Creating worldwide awareness and positive change.</p>
          </div>
        </div>
      </ContentContainer>

      {/* Call to Action */}
      <ContentContainer className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-gray-800">
            Join Our Mission
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Together, we can transform awareness into action and hope into saved lives. Your support helps us reach more communities and save more lives.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-3 text-lg">
            <BookOpen className="h-5 w-5 mr-2" />
            Learn About Organ Donation
          </Button>
        </div>
      </ContentContainer>

      <DonateButton />
    </>;
};
export default About;