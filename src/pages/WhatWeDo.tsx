
import React from 'react';
import ContentContainer from '../components/common/ContentContainer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BadgeCheck, BookOpen, Users, Award, FileText, ChartBar, Heart, Globe, Shield, Calendar, Target, TrendingUp, AlertCircle, CheckCircle2, MapPin, GraduationCap, Handshake, Megaphone, Users2, Database, RefreshCw, Radio, Computer, Link, Smartphone, DollarSign, Hospital, ReceiptText, Tv, Stethoscope, ClipboardList, Dna } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DonateButton from '../components/ui/DonateButton';

const WhatWeDo: React.FC = () => {
  return <>
      <div className="pt-24 bg-gradient-to-r from-primary/5 to-secondary/5">
        <ContentContainer>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-in">What We Do</h1>
            <p className="text-xl text-gray-700 mb-10 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Our mission is to create a culture where organ donation is embraced as a fundamental 
              human value, saving thousands of lives each year through education, 
              support, and community action.
            </p>
          </div>
        </ContentContainer>
      </div>

      {/* Introduction Section */}
      <ContentContainer className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-fade-in" style={{animationDelay: '0.4s'}}>
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
          <div className="bg-white shadow-md rounded-xl overflow-hidden card-hover">
            <img src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800&auto=format&q=80" alt="DonateLife Workshop in progress" className="w-full h-64 object-cover object-center" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Community Outreach Program</h3>
              <p className="text-gray-600">Our team members conducting an awareness workshop at a local community center in Mumbai.</p>
            </div>
          </div>
        </div>
      </ContentContainer>

      {/* Programs and Initiatives Section */}
      <ContentContainer className="py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6 text-center animate-fade-in">Programs and Initiatives</h2>
          <p className="text-xl text-gray-700 mb-12 text-center animate-fade-in" style={{animationDelay: '0.2s'}}>
            At DONATE, our initiatives are designed to address the gaps in awareness, access, and ethical 
            practices related to organ donation - because every life saved is a story rewritten.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Promoting Deceased Organ Donation */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 card-hover animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="bg-primary/10 p-3 rounded-full inline-flex mb-4">
                <Heart className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Promoting Deceased Organ Donation</h3>
              <p className="text-gray-700 mb-4">
                The gift of life doesn't end when life itself does. Deceased organ donation offers a powerful 
                opportunity to save and transform lives.
              </p>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="deceased-donation-details">
                  <AccordionTrigger>Learn More About Deceased Donation</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Life-Saving Potential</h4>
                        <p className="text-gray-700">A single deceased donor can save up to 8 lives through organ donation and enhance dozens more with tissue donation.</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Key Process Elements:</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          <li><strong>Eligibility:</strong> Patient must be declared legally and clinically dead with confirmed circulatory or brainstem death</li>
                          <li><strong>Donation Process:</strong> Hospital contacts organ procurement organization to check donor registry</li>
                          <li><strong>Organ Recovery:</strong> Medical team checks organ condition on artificial support and plans transport</li>
                          <li><strong>Organ Allocation:</strong> Based on medical need, blood type, height, and weight</li>
                          <li><strong>Safety:</strong> Well-regulated process with donor and recipient care as top priority</li>
                          <li><strong>Cost:</strong> No cost to donor or family for donation</li>
                          <li><strong>Funeral Arrangements:</strong> Open-casket funerals are possible for donors</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Rural Outreach Program */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 card-hover animate-fade-in" style={{animationDelay: '0.6s'}}>
              <div className="bg-secondary/10 p-3 rounded-full inline-flex mb-4">
                <MapPin className="text-secondary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Rural Outreach Program</h3>
              <p className="text-gray-700 mb-4">
                Access to information about organ donation remains scarce in rural and underserved areas. 
                DONATE is bridging this gap through:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Culturally Relevant Outreach: Tailored workshops, multilingual materials, and community events</li>
                <li>Trusted Partnerships: Collaborating with local leaders, educators, and healthcare providers</li>
              </ul>
              <div className="mt-4 p-3 bg-secondary/5 rounded-lg">
                <p className="text-gray-700 font-medium">Impact: Opening doors to organ donation opportunities for those who may not have had access to accurate information before.</p>
              </div>
            </div>

            {/* Advocating for Ethical Practices */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 card-hover animate-fade-in" style={{animationDelay: '0.8s'}}>
              <div className="bg-primary/10 p-3 rounded-full inline-flex mb-4">
                <Shield className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Advocating for Ethical Practices</h3>
              <p className="text-gray-700 mb-4">
                Ethics are at the core of everything we do. DONATE works tirelessly to ensure fairness, 
                transparency, and justice in organ transplantation.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Collaborations: Partnering with medical institutions and government-approved organizations</li>
                <li>Policy Advocacy: Engaging lawmakers and stakeholders to push for reforms</li>
              </ul>
              <div className="mt-4 p-3 bg-primary/5 rounded-lg">
                <p className="text-gray-700 font-medium">Our Stand: We believe organ donation should be guided by integrity, compassion, and respect for all individuals.</p>
              </div>
            </div>

            {/* Education and Enablement */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 card-hover animate-fade-in" style={{animationDelay: '1.0s'}}>
              <div className="bg-secondary/10 p-3 rounded-full inline-flex mb-4">
                <GraduationCap className="text-secondary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Education and Enablement</h3>
              <p className="text-gray-700 mb-4">
                Knowledge is the first step to action. DONATE empowers communities through tailored educational programs.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Campaigns for All Ages: Interactive sessions in schools, colleges, and community centers</li>
                <li>Inspiring Action: Encouraging donor registration through awareness and personal stories</li>
              </ul>
              <div className="mt-4 p-3 bg-secondary/5 rounded-lg">
                <p className="text-gray-700 font-medium">Result: Communities equipped with the knowledge to make informed, life-saving decisions.</p>
              </div>
            </div>
          </div>

          {/* Additional Programs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in" style={{animationDelay: '1.2s'}}>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center card-hover">
              <div className="bg-primary/10 p-3 rounded-full inline-flex mb-4">
                <Users2 className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Talking Points for High Schoolers</h3>
              <p className="text-gray-600 mb-3">
                Empowering students to be vocal advocates through interactive workshops and youth leadership programs.
              </p>
              <p className="text-sm text-primary font-medium">A new generation of advocates for hope and compassion.</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center card-hover">
              <div className="bg-secondary/10 p-3 rounded-full inline-flex mb-4">
                <Handshake className="text-secondary h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Supporting Donors and Recipients</h3>
              <p className="text-gray-600 mb-3">
                Providing emotional support and practical guidance throughout the organ donation journey.
              </p>
              <p className="text-sm text-secondary font-medium">Ensuring no donor or recipient feels alone.</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center card-hover">
              <div className="bg-primary/10 p-3 rounded-full inline-flex mb-4">
                <Globe className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Impacting Global Policy</h3>
              <p className="text-gray-600 mb-3">
                Collaborating with international partners to shape policies and best practices worldwide.
              </p>
              <p className="text-sm text-primary font-medium">A unified world of ethical organ donation.</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center card-hover">
              <div className="bg-secondary/10 p-3 rounded-full inline-flex mb-4">
                <Megaphone className="text-secondary h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Innovating Awareness Campaigns</h3>
              <p className="text-gray-600 mb-3">
                Using digital outreach and interactive experiences to inspire meaningful action.
              </p>
              <p className="text-sm text-secondary font-medium">Creative methods for lasting change.</p>
            </div>
          </div>
        </div>
      </ContentContainer>

      {/* Government Initiatives Section - Enhanced */}
      <ContentContainer className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Government Initiatives: Driving Change
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Discover how India's coordinated government efforts are transforming organ donation through 
              technology, policy, and strategic partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* National Organ Donation Framework */}
            <div className="bg-white rounded-2xl shadow-xl p-8 card-hover animate-fade-in border border-blue-100" style={{animationDelay: '0.2s'}}>
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-4 rounded-full inline-flex mb-6">
                <Database className="text-white h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">National Organ Donation Framework</h3>
              <p className="text-gray-600 mb-6">
                The central pillar of India's organ donation system is NOTTO (National Organ and Tissue Transplant Organization). 
                As a centralized coordination system, NOTTO manages:
              </p>
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                  <ClipboardList className="text-blue-600 h-5 w-5 mr-3" />
                  <span className="text-gray-700">The National Organ Registry</span>
                </div>
                <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                  <RefreshCw className="text-blue-600 h-5 w-5 mr-3" />
                  <span className="text-gray-700">Transparent organ allocation processes</span>
                </div>
                <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                  <Radio className="text-blue-600 h-5 w-5 mr-3" />
                  <span className="text-gray-700">Real-time monitoring of donation and transplantation activities</span>
                </div>
              </div>
            </div>

            {/* State-Level Success Stories */}
            <div className="bg-white rounded-2xl shadow-xl p-8 card-hover animate-fade-in border border-green-100" style={{animationDelay: '0.4s'}}>
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-4 rounded-full inline-flex mb-6">
                <MapPin className="text-white h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">State-Level Success Stories</h3>
              <p className="text-gray-600 mb-6">
                Several states have emerged as champions of organ donation through localized efforts:
              </p>
              <div className="space-y-4">
                <div className="flex items-start p-4 bg-green-50 rounded-lg">
                  <Stethoscope className="text-green-600 h-5 w-5 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-green-800">Maharashtra</h4>
                    <p className="text-gray-700 text-sm">Leading the way with exemplary models of organ donation coordination</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-green-50 rounded-lg">
                  <Dna className="text-green-600 h-5 w-5 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-green-800">Tamil Nadu</h4>
                    <p className="text-gray-700 text-sm">A pioneer with its innovative deceased donor program</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-green-50 rounded-lg">
                  <Megaphone className="text-green-600 h-5 w-5 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-green-800">Karnataka</h4>
                    <p className="text-gray-700 text-sm">Running impactful awareness campaigns to increase donor registrations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Digital Transformation */}
          <div className="bg-white rounded-2xl shadow-xl p-8 card-hover animate-fade-in border border-purple-100 mb-8" style={{animationDelay: '0.6s'}}>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full inline-flex mb-6">
              <Computer className="text-white h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Digital Transformation in Organ Donation</h3>
            <p className="text-gray-600 mb-6">
              The integration of technology has streamlined the organ donation process:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <Computer className="text-purple-600 h-8 w-8 mx-auto mb-3" />
                <h4 className="font-semibold text-purple-800 mb-2">Online Platforms</h4>
                <p className="text-gray-700 text-sm">Online donor registration platforms</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <Link className="text-purple-600 h-8 w-8 mx-auto mb-3" />
                <h4 className="font-semibold text-purple-800 mb-2">Unified Databases</h4>
                <p className="text-gray-700 text-sm">Unified national databases for organ allocation</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <MapPin className="text-purple-600 h-8 w-8 mx-auto mb-3" />
                <h4 className="font-semibold text-purple-800 mb-2">Real-time Tracking</h4>
                <p className="text-gray-700 text-sm">Real-time tracking systems for organ logistics</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <Smartphone className="text-purple-600 h-8 w-8 mx-auto mb-3" />
                <h4 className="font-semibold text-purple-800 mb-2">Mobile Apps</h4>
                <p className="text-gray-700 text-sm">Mobile applications for donor enrollment and status updates</p>
              </div>
            </div>
          </div>

          {/* Remarkable Government Strategies */}
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-xl p-8 text-white animate-fade-in" style={{animationDelay: '0.8s'}}>
            <h3 className="text-3xl font-bold mb-8 text-center">Remarkable Government Strategies</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Awareness and Education */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="bg-white/20 p-3 rounded-full inline-flex mb-4">
                  <GraduationCap className="text-white h-6 w-6" />
                </div>
                <h4 className="text-xl font-bold mb-4">Awareness and Education</h4>
                <p className="mb-4 text-orange-100">
                  The government has prioritized creating awareness about organ donation through:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <GraduationCap className="h-4 w-4 mr-3 text-orange-200" />
                    <span className="text-sm">School and college outreach programs to educate the youth</span>
                  </div>
                  <div className="flex items-center">
                    <Tv className="h-4 w-4 mr-3 text-orange-200" />
                    <span className="text-sm">Nationwide media campaigns, including TV, radio, and social media</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-3 text-orange-200" />
                    <span className="text-sm">Active involvement of community leaders to build trust</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-4 w-4 mr-3 text-orange-200" />
                    <span className="text-sm">Dedicated digital platforms share accurate information</span>
                  </div>
                </div>
              </div>

              {/* Financial Support Mechanisms */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="bg-white/20 p-3 rounded-full inline-flex mb-4">
                  <DollarSign className="text-white h-6 w-6" />
                </div>
                <h4 className="text-xl font-bold mb-4">Financial Support Mechanisms</h4>
                <p className="mb-4 text-orange-100">
                  To reduce economic barriers, the government offers:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 mr-3 text-orange-200" />
                    <span className="text-sm">Subsidized costs for organ transplantation surgeries</span>
                  </div>
                  <div className="flex items-center">
                    <Hospital className="h-4 w-4 mr-3 text-orange-200" />
                    <span className="text-sm">Expanded coverage under public health schemes</span>
                  </div>
                  <div className="flex items-center">
                    <ReceiptText className="h-4 w-4 mr-3 text-orange-200" />
                    <span className="text-sm">Financial assistance programs for economically disadvantaged patients</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-full text-lg font-semibold">
                Learn More About Government Support
              </Button>
            </div>
          </div>
        </div>
      </ContentContainer>

      {/* India's Organ Donation Policy Journey */}
      <ContentContainer className="bg-gradient-to-r from-primary/5 to-secondary/5 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">India's Organ Donation Policy Journey: A Silent Crisis</h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <div className="flex items-center justify-center mb-4">
                <AlertCircle className="text-red-600 h-8 w-8 mr-3" />
                <h3 className="text-xl font-semibold text-red-800">A Stark Reality</h3>
              </div>
              <p className="text-lg text-red-700 mb-2">
                Imagine a world where 500,000 lives hang in the balance every year.
              </p>
              <p className="text-red-700">
                In India, this is not a hypothetical scenario—it's our reality. While you read this sentence, 
                someone is waiting desperately for an organ which could mean the difference between life and death. 
                Yet, only 1 in 30 patients in need receives an organ transplant.
              </p>
            </div>
          </div>

          {/* Policy Framework */}
          <div className="bg-white rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-display font-semibold mb-6 flex items-center">
              <FileText className="text-primary h-6 w-6 mr-3" />
              The Legal Backbone: Transplantation of Human Organs Act, 1994
            </h3>
            <p className="text-gray-700 mb-6">
              India's organ donation framework was built on the foundation of the Transplantation of Human Organs Act, of 1994. 
              This legislation has been instrumental in establishing order and accountability in the organ donation process.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-semibold mb-3">Key Highlights of the Act:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Provides a comprehensive legal framework for organ donation</li>
                  <li>Prohibits commercial trading of organs</li>
                  <li>Sets transparent donation and allocation mechanisms</li>
                  <li>Clearly defines brain death and its certification process</li>
                  <li>Safeguards the rights of both donors and recipients</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Policy Evolution Timeline:</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1094</div>
                    <span className="text-gray-700">Enactment of the Organ Donation Act</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2011</div>
                    <span className="text-gray-700">Key amendments to tighten regulations</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2014</div>
                    <span className="text-gray-700">Introduction of nationwide organ allocation system</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2018</div>
                    <span className="text-gray-700">Rollout of digital registration for donors and recipients</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2022</div>
                    <span className="text-gray-700">Expanded protocols for deceased donor programs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Government Initiatives */}
          <div className="bg-white rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-display font-semibold mb-6 flex items-center">
              <Target className="text-secondary h-6 w-6 mr-3" />
              Government Initiatives: Driving Change
            </h3>

            <Tabs defaultValue="notto" className="w-full">
              <TabsList className="grid grid-cols-4 mb-6">
                <TabsTrigger value="notto">NOTTO</TabsTrigger>
                <TabsTrigger value="states">State Success</TabsTrigger>
                <TabsTrigger value="digital">Digital Transform</TabsTrigger>
                <TabsTrigger value="support">Financial Support</TabsTrigger>
              </TabsList>

              <TabsContent value="notto" className="space-y-4">
                <h4 className="text-xl font-semibold">National Organ and Tissue Transplant Organization (NOTTO)</h4>
                <p className="text-gray-700 mb-4">
                  The central pillar of India's organ donation system, NOTTO serves as a centralized coordination system managing:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>The National Organ Registry</li>
                  <li>Transparent organ allocation processes</li>
                  <li>Real-time monitoring of donation and transplantation activities</li>
                </ul>
              </TabsContent>

              <TabsContent value="states" className="space-y-4">
                <h4 className="text-xl font-semibold">State-Level Success Stories</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h5 className="font-semibold text-primary">Maharashtra</h5>
                    <p className="text-gray-700">Leading with exemplary models of organ donation coordination</p>
                  </div>
                  <div className="bg-secondary/5 p-4 rounded-lg">
                    <h5 className="font-semibold text-secondary">Tamil Nadu</h5>
                    <p className="text-gray-700">Pioneer with innovative deceased donor program</p>
                  </div>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h5 className="font-semibold text-primary">Karnataka</h5>
                    <p className="text-gray-700">Impactful awareness campaigns increasing donor registrations</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="digital" className="space-y-4">
                <h4 className="text-xl font-semibold">Digital Transformation in Organ Donation</h4>
                <p className="text-gray-700 mb-4">
                  The integration of technology has streamlined the organ donation process:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Online donor registration platforms</li>
                  <li>Unified national databases for organ allocation</li>
                  <li>Real-time tracking systems for organ logistics</li>
                  <li>Mobile applications for donor enrollment and status updates</li>
                </ul>
              </TabsContent>

              <TabsContent value="support" className="space-y-4">
                <h4 className="text-xl font-semibold">Financial Support Mechanisms</h4>
                <p className="text-gray-700 mb-4">
                  To reduce economic barriers, the government offers:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Subsidized costs for organ transplantation surgeries</li>
                  <li>Expanded coverage under public health schemes</li>
                  <li>Financial assistance programs for economically disadvantaged patients</li>
                </ul>
              </TabsContent>
            </Tabs>
          </div>

          {/* Challenges and Progress */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-800 flex items-center">
                <AlertCircle className="h-5 w-5 mr-2" />
                Persistent Challenges
              </h3>
              <ul className="list-disc list-inside space-y-2 text-red-700">
                <li>Cultural Barriers: Misconceptions, family consent complexities, and religious beliefs</li>
                <li>Infrastructure Limitations: Many regions lack advanced healthcare facilities</li>
                <li>Low Donation Rates: Low awareness and complicated registration processes</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-800 flex items-center">
                <CheckCircle2 className="h-5 w-5 mr-2" />
                Significant Progress
              </h3>
              <ul className="list-disc list-inside space-y-2 text-green-700">
                <li>300% increase in organ donation rates over the past decade</li>
                <li>Marked reduction in illegal organ trafficking</li>
                <li>Improved success rates due to enhanced medical infrastructure</li>
                <li>Greater public understanding and willingness to donate</li>
              </ul>
            </div>
          </div>

          {/* Breakthrough Statistics */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8">
            <h3 className="text-2xl font-display font-semibold mb-6 text-center flex items-center justify-center">
              <TrendingUp className="text-primary h-6 w-6 mr-3" />
              Breakthrough Statistics
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold mb-3">Donation Transformation</h4>
                <p className="text-gray-700 mb-2">
                  From 1,000 annual transplants in 2010 to over 8,000 in 2023, the numbers speak volumes.
                </p>
                <p className="text-primary font-semibold">
                  With sustained efforts, India has the potential to save 500,000 lives annually.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold mb-3">Regional Success Stories</h4>
                <p className="text-gray-700 mb-2">
                  Tamil Nadu boasts 2.1 donors per million, surpassing the global average of 0.5 per million.
                </p>
                <p className="text-secondary font-semibold">
                  Inching closer to India's national target of 1 donor per million.
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <h4 className="text-xl font-semibold mb-4">Call to Action</h4>
              <p className="text-lg text-gray-700 mb-6">
                Your Awareness. Your Choice. Someone's Life.
              </p>
              <p className="text-gray-700 mb-6">
                Every small step counts in this journey of saving lives. Pledge to be an organ donor today 
                and inspire others to follow. Together, we can change destinies and rewrite the future.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-lg">
                Pledge to Donate Now
              </Button>
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
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&q=80" alt="Educational workshop with participants" className="w-full h-64 object-cover rounded-lg" />
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
            <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&q=80" alt="Support group meeting" className="w-full h-64 object-cover rounded-lg" />
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
            <img src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&auto=format&q=80" alt="Medical staff training session" className="w-full h-64 object-cover rounded-lg" />
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
                  <img src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=200&auto=format&q=80" alt="Arjun Sharma" className="w-16 h-16 rounded-full object-cover mr-4" />
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
                  <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&auto=format&q=80" alt="Priya Malhotra" className="w-16 h-16 rounded-full object-cover mr-4" />
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
                      <div className="h-full bg-primary rounded-full" style={{
                      width: '85%'
                    }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">Lives Saved</span>
                      <span className="text-primary font-semibold">4,300+</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{
                      width: '65%'
                    }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">Hospitals Partnered</span>
                      <span className="text-primary font-semibold">210</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{
                      width: '75%'
                    }}></div>
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
    </>;
};

export default WhatWeDo;
