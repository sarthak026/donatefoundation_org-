
import React from 'react';
import ContentContainer from '../components/common/ContentContainer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BadgeCheck, BookOpen, Users, Award, FileText, ChartBar } from 'lucide-react';
import DonateButton from '../components/ui/DonateButton';

const WhatWeDo: React.FC = () => {
  return (
    <>
      <div className="pt-24 bg-gradient-to-r from-primary/5 to-secondary/5">
        <ContentContainer>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">What We Do</h1>
            <p className="text-xl text-gray-700 mb-10">
              Our mission is to create a culture where organ donation is embraced as a fundamental 
              human value, saving thousands of lives each year through education, 
              support, and community action.
            </p>
          </div>
        </ContentContainer>
      </div>

      {/* Introduction Section */}
      <ContentContainer className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-display font-semibold mb-6 text-primary" id="workshops">Our Approach</h2>
            <p className="text-gray-700 mb-6">
              DonateLife Foundation takes a comprehensive approach to increasing organ and tissue donation across India. 
              We work at multiple levels – from educating school children to training healthcare professionals, providing 
              counseling to donor families, and advocating for supportive policies.
            </p>
            <p className="text-gray-700">
              Through our initiatives, we aim to remove barriers to donation, address myths and misconceptions, 
              and create pathways for more people to give the gift of life.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800&auto=format&q=80" 
              alt="DonateLife Workshop in progress" 
              className="w-full h-64 object-cover object-center"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Community Outreach Program</h3>
              <p className="text-gray-600">Our team members conducting an awareness workshop at a local community center in Mumbai.</p>
            </div>
          </div>
        </div>
      </ContentContainer>

      {/* Programs Section */}
      <ContentContainer className="bg-gray-50 py-16" id="programs">
        <h2 className="text-3xl md:text-4xl font-display font-semibold mb-12 text-center">Our Programs</h2>
        
        <Tabs defaultValue="workshops" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="workshops" className="text-center py-3">Awareness Workshops</TabsTrigger>
            <TabsTrigger value="support" className="text-center py-3">Family Support</TabsTrigger>
            <TabsTrigger value="partnerships" className="text-center py-3">Hospital Partnerships</TabsTrigger>
          </TabsList>
          
          <TabsContent value="workshops" className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-primary/10 p-3 rounded-full">
                <BookOpen className="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-semibold mb-4">Awareness Workshops</h3>
                <p className="text-gray-700 mb-4">
                  Our interactive workshops reach thousands of people each year through schools, colleges, 
                  corporate offices, and community centers. Using a mix of presentations, personal stories, 
                  and engaging activities, we educate about the donation process and its life-saving impact.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>School and College Programs</li>
                  <li>Corporate Awareness Sessions</li>
                  <li>Community Outreach Events</li>
                  <li>Digital Learning Modules</li>
                </ul>
              </div>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&q=80" 
              alt="Educational workshop with participants" 
              className="w-full h-64 object-cover rounded-lg"
            />
          </TabsContent>
          
          <TabsContent value="support" className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-primary/10 p-3 rounded-full">
                <Users className="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-semibold mb-4">Donor Family Support</h3>
                <p className="text-gray-700 mb-4">
                  We provide comprehensive support to families who have made the generous decision to donate 
                  their loved one's organs. Our counselors offer emotional support, guidance through the 
                  donation process, and opportunities to honor their loved one's legacy.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Grief Counseling Services</li>
                  <li>Support Group Meetings</li>
                  <li>Remembrance Ceremonies</li>
                  <li>Legacy Projects</li>
                </ul>
              </div>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&q=80" 
              alt="Support group meeting" 
              className="w-full h-64 object-cover rounded-lg"
            />
          </TabsContent>
          
          <TabsContent value="partnerships" className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-primary/10 p-3 rounded-full">
                <Award className="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-semibold mb-4">Hospital Partnerships</h3>
                <p className="text-gray-700 mb-4">
                  We collaborate with hospitals to improve donation protocols, train healthcare professionals, 
                  and establish dedicated transplant coordinators who can guide families through the donation process 
                  with sensitivity and care.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Medical Staff Training Programs</li>
                  <li>Transplant Coordinator Support</li>
                  <li>Protocol Development</li>
                  <li>Inter-Hospital Coordination Networks</li>
                </ul>
              </div>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&auto=format&q=80" 
              alt="Medical staff training session" 
              className="w-full h-64 object-cover rounded-lg"
            />
          </TabsContent>
        </Tabs>
      </ContentContainer>

      {/* Impact Stories Section */}
      <ContentContainer className="py-16" id="stories">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6 text-center">Impact Stories</h2>
          <p className="text-xl text-gray-700 mb-12 text-center">
            Stories of hope, courage, and transformation from donors, recipients, and their families.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=200&auto=format&q=80" 
                    alt="Arjun Sharma" 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-xl">Arjun Sharma</h3>
                    <p className="text-primary">Heart Recipient</p>
                  </div>
                </div>
                <blockquote className="italic text-gray-700 mb-4">
                  "After my heart transplant in 2023, I've been given a second chance at life. I can play with my children again and have returned to teaching – something I thought I'd never do. Every heartbeat reminds me of the incredible gift I received."
                </blockquote>
                <p className="text-gray-600">
                  Arjun was diagnosed with end-stage heart failure at 32. After waiting 8 months, he received a heart transplant that saved his life.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&auto=format&q=80" 
                    alt="Priya Malhotra" 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-xl">Priya Malhotra</h3>
                    <p className="text-secondary">Donor Family Member</p>
                  </div>
                </div>
                <blockquote className="italic text-gray-700 mb-4">
                  "When we lost my mother suddenly, donating her corneas helped our family find meaning in our loss. Knowing that two people can now see because of her gives us comfort. Her light continues to shine in the world."
                </blockquote>
                <p className="text-gray-600">
                  After Priya's mother passed away, the family made the decision to donate her corneas, which restored sight to two individuals.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <a href="#" className="btn-primary inline-flex items-center">
              Read More Stories <BadgeCheck className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </ContentContainer>

      {/* Success Metrics */}
      <ContentContainer className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16 rounded-xl" id="metrics">
        <h2 className="text-3xl md:text-4xl font-display font-semibold mb-12 text-center">Our Impact</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <ChartBar className="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Progress Since 2020</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">Registered Donors</span>
                      <span className="text-primary font-semibold">12,500+</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">Lives Saved</span>
                      <span className="text-primary font-semibold">4,300+</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">Hospitals Partnered</span>
                      <span className="text-primary font-semibold">210</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <FileText className="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Research & Publications</h3>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Annual Impact Report 2024</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700 mb-2">
                        Our comprehensive analysis of donation trends, success stories, and future goals.
                      </p>
                      <a href="#" className="text-primary hover:underline">Download PDF</a>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Organ Donation Awareness Guide</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700 mb-2">
                        Educational resources designed for schools and community organizations.
                      </p>
                      <a href="#" className="text-primary hover:underline">View Online</a>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Healthcare Professional Handbook</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700 mb-2">
                        Best practices for medical professionals in the organ donation process.
                      </p>
                      <a href="#" className="text-primary hover:underline">Request Access</a>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </ContentContainer>

      <DonateButton />
    </>
  );
};

export default WhatWeDo;
