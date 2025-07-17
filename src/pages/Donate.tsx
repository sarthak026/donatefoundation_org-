import React, { useState } from 'react';
import ContentContainer from '../components/common/ContentContainer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Building, Gift, Landmark, HelpCircle, ExternalLink, HandHeart, Users2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const Donate: React.FC = () => {
  const [donationAmount, setDonationAmount] = useState<number | string>(1000);
  const [isMonthly, setIsMonthly] = useState<boolean>(false);
  const handleCustomAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDonationAmount(e.target.value);
  };
  const selectAmount = (amount: number) => {
    setDonationAmount(amount);
  };
  return <>
      {/* Hero Section with Impactful Donation Imagery */}
      <div className="relative pt-24 pb-20 bg-gradient-to-br from-primary via-primary/90 to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-secondary/95"></div>
        <div className="absolute inset-0 opacity-20">
          <img src="/lovable-uploads/05135849-ef60-4f5f-a5d9-652674e0492b.png" alt="Community support and dialogue background" className="w-full h-full object-cover" />
        </div>
        <ContentContainer>
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <HandHeart className="h-4 w-4" />
              <span className="font-medium">Every Contribution Counts</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-8 text-white">Support Our Mission</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Your contribution helps us promote organ donation awareness, support donor 
              families, and save lives across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => window.open('https://www.mohanfoundation.org/donorcard.asp', '_blank')} size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-3 text-lg font-semibold">
                <Heart className="h-5 w-5 mr-2" />
                Pledge Your Organs
              </Button>
              <Button size="lg" variant="outline" className="border-white hover:bg-white/10 rounded-full px-8 py-3 text-lg font-semibold text-slate-950">
                <Users2 className="h-5 w-5 mr-2" />
                Corporate Partnership
              </Button>
            </div>
          </div>
        </ContentContainer>
      </div>

      {/* Impact Stats Section */}
      <ContentContainer className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="bg-primary/10 p-4 rounded-full inline-flex mb-6">
              <Heart className="text-primary h-6 w-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">Your Impact in Numbers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how your support translates into real change and saved lives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="bg-primary/10 p-4 rounded-full inline-flex mb-4 group-hover:bg-primary/20 transition-colors">
                <Heart className="text-primary h-6 w-6" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">1:8</div>
              <p className="text-gray-600">Donor to Lives Saved Ratio</p>
            </div>
            <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="bg-secondary/10 p-4 rounded-full inline-flex mb-4 group-hover:bg-secondary/20 transition-colors">
                <Building className="text-secondary h-6 w-6" />
              </div>
              <div className="text-3xl font-bold text-secondary mb-2">₹5,000</div>
              <p className="text-gray-600">Sponsors One Workshop</p>
            </div>
            <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="bg-primary/10 p-4 rounded-full inline-flex mb-4 group-hover:bg-primary/20 transition-colors">
                <Users2 className="text-primary h-6 w-6" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <p className="text-gray-600">Families Counseled Monthly</p>
            </div>
            <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="bg-secondary/10 p-4 rounded-full inline-flex mb-4 group-hover:bg-secondary/20 transition-colors">
                <Landmark className="text-secondary h-6 w-6" />
              </div>
              <div className="text-3xl font-bold text-secondary mb-2">15</div>
              <p className="text-gray-600">States We Operate In</p>
            </div>
          </div>
        </div>
      </ContentContainer>

      {/* Ways to Give Section */}
      <ContentContainer className="py-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="bg-primary/10 p-4 rounded-full inline-flex mb-6">
              <Gift className="text-primary h-6 w-6" />
            </div>
            <h2 className="text-3xl font-display font-semibold mb-6">Ways to Give</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the giving method that works best for you and your organization
            </p>
          </div>
          
          <Tabs defaultValue="organ" className="w-full">
            <TabsList className="grid grid-cols-1 md:grid-cols-3 mb-8">
              <TabsTrigger value="organ" className="flex items-center gap-2">
                <Heart className="h-4 w-4" /> Organ Pledge
              </TabsTrigger>
              <TabsTrigger value="corporate" className="flex items-center gap-2">
                <Building className="h-4 w-4" /> Corporate
              </TabsTrigger>
              <TabsTrigger value="inkind" className="flex items-center gap-2">
                <Gift className="h-4 w-4" /> In-Kind
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="organ" className="bg-white p-6 rounded-xl shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Pledge Your Organs</h3>
                  <p className="text-gray-700 mb-6">
                    Registering as an organ donor is one of the most powerful ways to save lives. 
                    One donor can save up to eight lives and enhance many more through tissue donation.
                  </p>
                  
                  <div className="bg-primary/5 p-4 rounded-lg mb-6">
                    <h4 className="font-semibold mb-2">What you can donate:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Vital organs: heart, lungs, liver, pancreas, kidneys, intestines</li>
                      <li>Tissues: corneas, skin, heart valves, bone, blood vessels</li>
                      <li>Bone marrow and stem cells</li>
                    </ul>
                  </div>
                  
                  <Button onClick={() => window.open('https://www.mohanfoundation.org/donorcard.asp', '_blank')} className="w-full flex items-center gap-2">
                    <Heart className="h-5 w-5" />
                    Pledge Your Organ
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">Important Information</h3>
                  
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      After registering online, you will need to:
                    </p>
                    
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                      <li>Download and print your donor card</li>
                      <li>Inform your family about your decision</li>
                      <li>Keep your donor card with your identification</li>
                    </ol>
                    
                    <div className="border-t pt-4 mt-4">
                      <p className="italic text-gray-600">
                        "The greatest gift is the gift of life. By pledging your organs, 
                        you offer hope and a second chance to those in need."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="corporate" className="bg-white p-6 rounded-xl shadow-sm">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Corporate Partnerships</h3>
                <p className="text-gray-700 mb-6">
                  Partner with DonateLife Foundation through corporate giving, employee matching programs, 
                  or sponsored events. Our corporate partners play a crucial role in advancing our mission.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                    <div className="bg-primary/10 p-3 rounded-full inline-flex mb-4">
                      <Landmark className="text-primary h-6 w-6" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Programs</h4>
                    <p className="text-gray-600 mb-4">Event, program, or educational initiative</p>
                    <Button variant="outline">Learn More</Button>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                    <div className="bg-primary/10 p-3 rounded-full inline-flex mb-4">
                      <Building className="text-primary h-6 w-6" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Matching Gifts</h4>
                    <p className="text-gray-600 mb-4">Double your employees charitable contributions</p>
                    <Button variant="outline">Learn More</Button>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                    <div className="bg-primary/10 p-3 rounded-full inline-flex mb-4">
                      <Heart className="text-primary h-6 w-6" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">CSR Partnership</h4>
                    <p className="text-gray-600 mb-4">
                      Align your CSR goals with our life-saving mission
                    </p>
                    <Button variant="outline">Learn More</Button>
                  </div>
                </div>
                
                <div className="text-center">
                  <Button>Contact Our Partnership Team</Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="inkind" className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">In-Kind Donations</h3>
              <p className="text-gray-700 mb-6">
                Support our mission through non-monetary gifts that help us operate efficiently 
                and extend our reach to more communities.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg mb-3">Items We Accept:</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                    <li>Office supplies and equipment</li>
                    <li>Educational materials and printing services</li>
                    <li>Event space and catering</li>
                    <li>Transportation services</li>
                    <li>Professional services (legal, marketing, IT)</li>
                  </ul>
                  
                  <Button>Contact Us About In-Kind Donations</Button>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-lg mb-3">Process:</h4>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>Fill out our in-kind donation form</li>
                    <li>Our team will review your offer</li>
                    <li>We'll contact you to coordinate delivery or service</li>
                    <li>You'll receive a tax receipt for your donation</li>
                  </ol>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </ContentContainer>

      {/* Sponsorship Tiers */}
      <ContentContainer className="bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-16">
        <div className="text-center mb-12">
          <div className="bg-primary/10 p-4 rounded-full inline-flex mb-6">
            <Landmark className="text-primary h-6 w-6" />
          </div>
          <h2 className="text-3xl font-display font-semibold mb-6">Sponsorship Opportunities</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Partner with us and make a lasting impact through structured sponsorship programs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
            <div className="bg-gray-100 p-6 text-center">
              
              <p className="text-3xl font-bold mt-2 mb-1">₹25,000</p>
              <p className="text-gray-600">Annual contribution</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Logo on website</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Recognition in annual report</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Certificate of appreciation</span>
                </li>
              </ul>
              
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden border-2 border-primary transform md:-translate-y-4">
            <div className="bg-primary p-6 text-center text-white">
              
              <p className="text-3xl font-bold mt-2 mb-1">₹50,000</p>
              <p className="text-white/90">Annual contribution</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>All Bronze benefits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Logo on event banners</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Social media recognition</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Quarterly impact reports</span>
                </li>
              </ul>
              <Button className="w-full">Become Silver Sponsor</Button>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
            <div className="bg-gray-100 p-6 text-center">
              
              <p className="text-3xl font-bold mt-2 mb-1">₹1,00,000</p>
              <p className="text-gray-600">Annual contribution</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>All Silver benefits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Featured sponsor at major events</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Co-branded awareness materials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Employee volunteering opportunities</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">Become Gold Sponsor</Button>
            </div>
          </div>
        </div>
      </ContentContainer>

      {/* Donor FAQs */}
      <ContentContainer className="py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-primary/10 p-3 rounded-full">
              <HelpCircle className="text-primary h-6 w-6" />
            </div>
            <h2 className="text-3xl font-display font-semibold">Donation FAQs</h2>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is my donation tax-deductible?</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  Yes, DonateLife Foundation is a registered non-profit organization in India. All donations are eligible 
                  for tax benefits under Section 80G of the Income Tax Act. You will receive an official receipt for your contribution.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>How is my donation used?</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700 mb-3">
                  Your donation directly supports our programs and operations. Here's a breakdown of how funds are typically allocated:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>70% - Program delivery (awareness workshops, counseling, hospital partnerships)</li>
                  <li>15% - Administrative expenses</li>
                  <li>15% - Fundraising and development</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger>Can I donate in memory of someone?</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  Yes, you can make a memorial donation in honor of a loved one. During the donation process, 
                  you'll have the option to specify that your gift is in memory of someone. We can send an 
                  acknowledgment card to a designated family member if you provide their contact information.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger>How do I cancel or modify my monthly donation?</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  You can cancel or modify your monthly donation at any time by contacting our donor services team 
                  at donations@donatelife.org or by calling our helpline at +91-XXX-XXX-XXXX. Changes typically take 
                  effect within 5 business days.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger>Can I specify how my donation is used?</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  Yes, you can designate your donation for a specific program or initiative. During the donation 
                  process, you'll have the option to select a specific fund. If you have a particular use in mind 
                  that isn't listed, please contact us to discuss your interests.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </ContentContainer>
    </>;
};
export default Donate;