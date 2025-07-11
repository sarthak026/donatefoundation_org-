
import React from 'react';
import ContentContainer from '../components/common/ContentContainer';
import PastEvents from '../components/sections/PastEvents';
import DonateButton from '../components/ui/DonateButton';
import { Button } from '@/components/ui/button';
import { Download, BookOpen, FileText, Video, Camera, Heart, Users, Globe } from 'lucide-react';

const Resources: React.FC = () => {
  const resources = [
    {
      title: "Organ Donation Guide",
      description: "Comprehensive guide covering everything you need to know about organ donation process, benefits, and myths.",
      icon: BookOpen,
      type: "PDF Guide",
      size: "2.5 MB"
    },
    {
      title: "Family Discussion Toolkit",
      description: "Tools and conversation starters to help families discuss organ donation decisions together.",
      icon: Users,
      type: "Toolkit",
      size: "1.8 MB"
    },
    {
      title: "Medical Facts & Statistics",
      description: "Latest statistics and medical facts about organ transplantation in India and globally.",
      icon: FileText,
      type: "Fact Sheet",
      size: "850 KB"
    },
    {
      title: "Community Outreach Manual",
      description: "Step-by-step guide for organizing awareness campaigns and community events.",
      icon: Globe,
      type: "Manual",
      size: "3.2 MB"
    }
  ];

  return (
    <>
      <div className="pt-24 bg-gradient-to-r from-primary/5 to-secondary/5">
        <ContentContainer>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Heart className="h-4 w-4" />
              <span className="font-medium">Knowledge & Support Materials</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-8 text-gray-800">Resources</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Access comprehensive educational materials, guides, and tools to support organ donation awareness and decision-making.
            </p>
          </div>
        </ContentContainer>
      </div>

      {/* Educational Resources */}
      <ContentContainer className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 text-gray-800">Educational Materials</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Download free resources to learn about organ donation, share with your community, and make informed decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-gradient-to-r from-primary to-secondary p-3 rounded-xl">
                  <resource.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="bg-gray-100 px-3 py-1 rounded-full">{resource.type}</span>
                    <span>{resource.size}</span>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90 text-white rounded-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Access Links */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 border border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Access</h3>
            <p className="text-gray-600">Frequently accessed resources and external links</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Button 
              variant="outline" 
              size="lg"
              className="h-auto py-6 px-6 flex flex-col items-center gap-3 bg-white hover:bg-gray-50 border-gray-200"
              onClick={() => window.open('https://www.mohanfoundation.org/donorcard.asp', '_blank')}
            >
              <Heart className="h-8 w-8 text-red-500" />
              <div className="text-center">
                <div className="font-semibold text-gray-800">Donor Registration</div>
                <div className="text-sm text-gray-600">Pledge to donate organs</div>
              </div>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="h-auto py-6 px-6 flex flex-col items-center gap-3 bg-white hover:bg-gray-50 border-gray-200"
            >
              <FileText className="h-8 w-8 text-blue-500" />
              <div className="text-center">
                <div className="font-semibold text-gray-800">Medical Guidelines</div>
                <div className="text-sm text-gray-600">Clinical protocols</div>
              </div>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="h-auto py-6 px-6 flex flex-col items-center gap-3 bg-white hover:bg-gray-50 border-gray-200"
            >
              <Users className="h-8 w-8 text-green-500" />
              <div className="text-center">
                <div className="font-semibold text-gray-800">Support Groups</div>
                <div className="text-sm text-gray-600">Connect with others</div>
              </div>
            </Button>
          </div>
        </div>
      </ContentContainer>

      {/* Past Events Section */}
      <PastEvents />

      <DonateButton />
    </>
  );
};

export default Resources;
