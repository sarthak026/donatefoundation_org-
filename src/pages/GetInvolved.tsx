import React from 'react';
import ContentContainer from '../components/common/ContentContainer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Users, Calendar, Heart, Flag, BadgeCheck, ChevronDown, FileText, Shield, User, Globe, BookOpen, CheckCircle, UserPlus, Handshake, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import DonateButton from '../components/ui/DonateButton';

const GetInvolved: React.FC = () => {
  return (
    <>
      {/* Hero Section with Action CTAs */}
      <div className="relative pt-24 pb-20 bg-gradient-to-br from-secondary via-secondary/90 to-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 to-primary/95"></div>
        <div className="absolute inset-0 opacity-15">
          <img 
            src="/lovable-uploads/7f33df0a-fc8e-4ecb-ac01-2d158466dbec.png" 
            alt="Team collaboration background" 
            className="w-full h-full object-cover"
          />
        </div>
        <ContentContainer>
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <UserPlus className="h-4 w-4" />
              <span className="font-medium">Join the Movement</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-8 text-white">Get Involved</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join our mission to save lives through organ donation awareness and advocacy. 
              Your time, skills, and passion can make a real difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-3 text-lg font-semibold">
                <Handshake className="h-5 w-5 mr-2" />
                Become a Volunteer
              </Button>
              <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90 rounded-full px-8 py-3 text-lg font-semibold">
                <Target className="h-5 w-5 mr-2" />
                Partner With Us
              </Button>
            </div>
          </div>
        </ContentContainer>
      </div>

      {/* Quick Action Cards */}
      <ContentContainer className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">Join Our Community</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose how you want to make a difference in the organ donation movement
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="bg-primary/10 p-4 rounded-full inline-flex mb-4 group-hover:bg-primary/20 transition-colors">
              <UserPlus className="text-primary h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Become a Volunteer</h3>
            <p className="text-gray-600 mb-4">
              Join our passionate team spreading awareness in communities, hospitals, and schools.
            </p>
            <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
              Start Volunteering
            </Button>
          </div>

          <div className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="bg-secondary/10 p-4 rounded-full inline-flex mb-4 group-hover:bg-secondary/20 transition-colors">
              <Handshake className="text-secondary h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Partner With Us</h3>
            <p className="text-gray-600 mb-4">
              Organizations and institutions can collaborate for greater impact and reach.
            </p>
            <Button variant="outline" className="w-full group-hover:bg-secondary group-hover:text-white transition-colors">
              Explore Partnerships
            </Button>
          </div>

          <div className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="bg-primary/10 p-4 rounded-full inline-flex mb-4 group-hover:bg-primary/20 transition-colors">
              <Target className="text-primary h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Advocate & Support</h3>
            <p className="text-gray-600 mb-4">
              Use your voice and platform to promote organ donation awareness in your network.
            </p>
            <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
              Join Advocacy
            </Button>
          </div>
        </div>
      </ContentContainer>

      {/* How It Works Section */}
      <ContentContainer className="py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="bg-primary/10 p-4 rounded-full inline-flex mb-6">
              <BookOpen className="text-primary h-6 w-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">How It Works</h2>
            <p className="text-xl text-gray-700 mb-12">
              Step-by-Step Guide to Becoming an Organ Donor
            </p>
          </div>
          <p className="text-gray-700 mb-10">
            Choosing to be an organ donor is a simple but life-altering decision. Whether you choose to donate 
            during your life or after death, the procedure is governed by precise medical and legal guidelines. 
            This section leads you through each step of the process, from understanding organ donation to 
            registration and consent, so you can make an informed and confident decision to help save lives.
          </p>

          {/* Step-by-Step Process */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="bg-primary/10 p-3 rounded-full inline-flex mb-4">
                <User className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Step 1: Initial Consideration</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Educate yourself about organ donation</li>
                <li>• Discuss the decision with family members</li>
                <li>• Reflect on personal values and desire to help others</li>
                <li>• Attend awareness programs or counseling sessions</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="bg-primary/10 p-3 rounded-full inline-flex mb-4">
                <Shield className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Step 2: Medical Evaluation</h3>
              <p className="text-gray-600 mb-3">
                While living donation requires specific medical assessments, deceased donation follows a different protocol:
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• No prior comprehensive medical examination required</li>
                <li>• Basic health history considerations</li>
                <li>• Suitability determined at time of potential donation</li>
                <li>• Medical professionals conduct thorough screenings during the donation process</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="bg-primary/10 p-3 rounded-full inline-flex mb-4">
                <FileText className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Step 3: Registration Process</h3>
              <p className="text-gray-600 mb-3">Multiple registration methods are available:</p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-800">Online Registration</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Visit official organ donation websites</li>
                    <li>• Fill out detailed registration form</li>
                    <li>• Upload necessary identification documents</li>
                    <li>• Receive digital donor card</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Offline Registration</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Visit designated healthcare centers</li>
                    <li>• Complete physical registration forms</li>
                    <li>• Obtain official donor card</li>
                    <li>• Receive counseling and information</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="bg-primary/10 p-3 rounded-full inline-flex mb-4">
                <BadgeCheck className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Step 4: Documentation</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Receive official donor card</li>
                <li>• Share donor status with immediate family</li>
                <li>• Keep documentation accessible</li>
                <li>• Update information periodically</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="bg-primary/10 p-3 rounded-full inline-flex mb-4">
                <Heart className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Step 5: Family Communication</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Discuss donation decision with family</li>
                <li>• Ensure family understands and supports your choice</li>
                <li>• Provide them with necessary documentation</li>
                <li>• Encourage open, transparent communication</li>
              </ul>
            </div>
          </div>

          {/* Legal Framework Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12 border border-blue-100">
            <h3 className="text-2xl font-display font-semibold mb-6 flex items-center">
              <Shield className="text-primary h-6 w-6 mr-3" />
              Legal Framework in India
            </h3>
            <p className="text-gray-700 mb-6">
              India's organ donation ecosystem is underpinned by a robust legal and institutional framework 
              designed to promote ethical practices, protect donor and recipient rights, and combat illegal 
              activities. The Transplantation of Human Organs Act (THOA), 1994, serves as the cornerstone of this 
              system, ensuring transparency, accountability, and fairness in every stage of the organ donation process.
            </p>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="thoa-overview">
                <AccordionTrigger className="text-lg font-semibold">
                  The Transplantation of Human Organs Act, 1994: An Overview
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700 mb-4">
                    The Transplantation of Human Organs Act (THOA) was enacted to establish a comprehensive legal 
                    structure for organ donation and transplantation in India. This landmark legislation was a pivotal 
                    step in addressing critical issues such as organ trafficking, unethical practices, and the need for 
                    transparent processes.
                  </p>
                  <h4 className="font-semibold mb-3">Key Highlights of THOA</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Comprehensive Governance: Regulates the donation, retrieval, and transplantation of human organs</li>
                    <li>Prevention of Commercial Organ Trade: Strictly prohibits the buying and selling of organs</li>
                    <li>Ethical Donation Practices: Mandates fair and transparent donation mechanisms to prevent exploitation</li>
                    <li>Donor and Recipient Rights: Protects the rights of both donors and recipients, ensuring dignity and safety</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="legal-provisions">
                <AccordionTrigger className="text-lg font-semibold">
                  Key Legal Provisions
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700 mb-4">
                    THOA and its subsequent amendments outline specific provisions to safeguard ethical organ donation practices:
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold">1. Mandatory Consent Requirements</h5>
                      <ul className="list-disc list-inside ml-4 text-gray-700">
                        <li>Donors must provide written, informed consent for organ donation</li>
                        <li>Family consent is required in the case of deceased donation</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold">2. Strict Regulations Against Organ Trafficking</h5>
                      <ul className="list-disc list-inside ml-4 text-gray-700">
                        <li>Imposes severe penalties for unauthorized organ trade</li>
                        <li>Requires rigorous documentation and screening to prevent exploitation</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold">3. Transparent Allocation Mechanisms</h5>
                      <ul className="list-disc list-inside ml-4 text-gray-700">
                        <li>Establishes a systematic, impartial process for organ allocation</li>
                        <li>Prioritizes medical urgency and fairness over personal or financial influence</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold">4. Privacy Protection</h5>
                      <ul className="list-disc list-inside ml-4 text-gray-700">
                        <li>Ensures confidentiality of donor and recipient information</li>
                        <li>Restricts public disclosure to maintain privacy and dignity</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold">5. Brain Death Criteria</h5>
                      <ul className="list-disc list-inside ml-4 text-gray-700">
                        <li>Defines brain death as a legally recognized form of death</li>
                        <li>Requires certification by an authorized medical board before organ retrieval</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold">6. Government Oversight</h5>
                      <ul className="list-disc list-inside ml-4 text-gray-700">
                        <li>Mandates periodic audits and reporting to monitor compliance</li>
                        <li>Enables stringent enforcement of legal and ethical standards</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="institutional-framework">
                <AccordionTrigger className="text-lg font-semibold">
                  Institutional Frameworks Supporting Organ Donation
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700 mb-4">
                    The success of India's organ donation system relies on a well-coordinated institutional framework 
                    that brings together national, state, and medical authorities.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold">1. National Organ and Tissue Transplant Organization (NOTTO)</h5>
                      <p className="text-gray-700 mb-2">The apex body overseeing organ donation and transplantation across India:</p>
                      <ul className="list-disc list-inside ml-4 text-gray-700">
                        <li>Maintains a national organ registry</li>
                        <li>Coordinates organ allocation through a centralized system</li>
                        <li>Standardized protocols and guidelines for ethical practices</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold">2. State Organ and Tissue Transplant Organizations (SOTTOs)</h5>
                      <ul className="list-disc list-inside ml-4 text-gray-700">
                        <li>Implements policies and coordinates activities at the state level</li>
                        <li>Drives state-specific awareness campaigns and donation initiatives</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold">3. Ethical Review Boards</h5>
                      <ul className="list-disc list-inside ml-4 text-gray-700">
                        <li>Evaluates complex cases to ensure adherence to ethical principles</li>
                        <li>Review applications for living donations beyond the immediate family</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold">4. Medical Certification Committees</h5>
                      <ul className="list-disc list-inside ml-4 text-gray-700">
                        <li>Verifies brain death and certifies eligibility for organ donation</li>
                        <li>Includes specialists to ensure accuracy and transparency</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="mt-6 p-4 bg-primary/5 rounded-lg">
              <h4 className="font-semibold text-primary mb-2">THOA: A Legal Backbone for Hope</h4>
              <p className="text-gray-700">
                The Transplantation of Human Organs Act, of 1994, and its supporting institutional framework have 
                been instrumental in saving lives and restoring hope to thousands. By ensuring ethical practices, 
                protecting individual rights, and fostering transparency, the Act has laid the foundation for a 
                transformative journey in organ donation.
              </p>
            </div>
          </div>

          {/* Consent Mechanisms */}
          <div className="mb-12">
            <h3 className="text-2xl font-display font-semibold mb-6 flex items-center">
              <CheckCircle className="text-primary h-6 w-6 mr-3" />
              Consent Mechanisms in Organ Donation
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h4 className="text-xl font-semibold mb-4">1. Individual Consent</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li>Personal decision made during lifetime</li>
                  <li>Most powerful and legally binding form of consent</li>
                  <li>Revocable at any time by the individual</li>
                </ul>
                <p className="font-semibold text-gray-800 mb-2">Can be registered through:</p>
                <ul className="list-disc list-inside ml-4 space-y-1 text-gray-700">
                  <li>Online portals</li>
                  <li>Healthcare institutions</li>
                  <li>Government registration centers</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h4 className="text-xl font-semibold mb-4">2. Family Consent</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li>Critical for deceased organ donation</li>
                  <li>Involves immediate family members</li>
                  <li>Emotional and legal decision-making process</li>
                </ul>
                <p className="font-semibold text-gray-800 mb-2">Requires:</p>
                <ul className="list-disc list-inside ml-4 space-y-1 text-gray-700">
                  <li>Comprehensive understanding</li>
                  <li>Emotional support</li>
                  <li>Transparent communication</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="text-xl font-semibold mb-4">Consent Process Workflow</h4>
              <div className="flex flex-wrap justify-center gap-4">
                {['Initial Decision', 'Documentation', 'Family Discussion', 'Registration', 'Verification', 'Potential Donation'].map((step, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 text-center min-w-[120px]">
                    <div className="bg-primary/10 text-primary font-semibold w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">
                      {index + 1}
                    </div>
                    <span className="text-sm font-medium text-gray-700">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Registration Process */}
          <div className="mb-12">
            <h3 className="text-2xl font-display font-semibold mb-6 flex items-center">
              <Globe className="text-primary h-6 w-6 mr-3" />
              Registration Process: Step-by-Step
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h4 className="text-xl font-semibold mb-4 text-primary">Online Registration</h4>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold mb-2">1. Platform Selection</h5>
                    <ul className="list-disc list-inside ml-4 space-y-1 text-gray-700">
                      <li>National Organ Donation Portal</li>
                      <li>State-specific registration websites</li>
                      <li>Government health department platforms</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold mb-2">2. Documentation Requirements</h5>
                    <ul className="list-disc list-inside ml-4 space-y-1 text-gray-700">
                      <li>Aadhaar Card/PAN Card</li>
                      <li>Proof of Address</li>
                      <li>Passport-sized photograph</li>
                      <li>Basic medical history</li>
                      <li>Contact information</li>
                      <li>Next of kin details</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold mb-2">3. Verification Stages</h5>
                    <ul className="list-disc list-inside ml-4 space-y-1 text-gray-700">
                      <li>Initial document review</li>
                      <li>Digital verification</li>
                      <li>Confirmation email/SMS</li>
                      <li>Digital donor card generation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h4 className="text-xl font-semibold mb-4 text-secondary">Offline Registration</h4>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold mb-2">1. Registration Centers</h5>
                    <ul className="list-disc list-inside ml-4 space-y-1 text-gray-700">
                      <li>Government hospitals</li>
                      <li>Medical institutions</li>
                      <li>Regional health centers</li>
                      <li>Department of Health offices</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold mb-2">2. Required Documents</h5>
                    <ul className="list-disc list-inside ml-4 space-y-1 text-gray-700">
                      <li>Government-issued ID</li>
                      <li>Address proof</li>
                      <li>Medical history form</li>
                      <li>Consent declaration</li>
                      <li>Passport-size photographs</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold mb-2">3. Registration Procedure</h5>
                    <ul className="list-disc list-inside ml-4 space-y-1 text-gray-700">
                      <li>Fill physical application</li>
                      <li>Document submission</li>
                      <li>Personal counseling</li>
                      <li>Physical donor card issuance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-primary/5 p-4 rounded-lg">
              <h4 className="font-semibold text-primary mb-2">Key Legal Protections</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Absolute privacy of donor information</li>
                  <li>No commercial exploitation</li>
                  <li>Transparent allocation mechanism</li>
                </ul>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Protection of donor and recipient rights</li>
                  <li>Strict regulatory framework</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Types of Organ Donations */}
          <div className="mb-12">
            <h3 className="text-2xl font-display font-semibold mb-6 flex items-center">
              <Heart className="text-primary h-6 w-6 mr-3" />
              Types of Organ Donations Possible
            </h3>

            <Tabs defaultValue="living" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="living">Living Donation</TabsTrigger>
                <TabsTrigger value="deceased">Deceased Donation</TabsTrigger>
                <TabsTrigger value="tissue">Tissue Donation</TabsTrigger>
              </TabsList>

              <TabsContent value="living" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="text-xl font-semibold mb-4">1. Kidney Donation</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                      <li>The most common living donation</li>
                      <li>Donors can live normally with one kidney</li>
                      <li>Typically between close relatives</li>
                      <li>Extensive medical screening</li>
                      <li>Psychological evaluation</li>
                    </ul>
                    <h5 className="font-semibold mb-2">Donation Process</h5>
                    <ul className="list-disc list-inside ml-4 space-y-1 text-gray-700">
                      <li>Comprehensive medical tests</li>
                      <li>Compatibility assessment</li>
                      <li>Surgical procedure</li>
                      <li>Post-operative care</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="text-xl font-semibold mb-4">2. Liver Donation</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                      <li>Partial liver segment donation</li>
                      <li>Unique regenerative capability</li>
                      <li>Complex medical procedure</li>
                      <li>Typically between family members</li>
                    </ul>
                    <h5 className="font-semibold mb-2">Donation Specifics</h5>
                    <ul className="list-disc list-inside ml-4 space-y-1 text-gray-700">
                      <li>The donor's liver regenerates</li>
                      <li>Rigorous medical evaluation</li>
                      <li>Specialized surgical team</li>
                      <li>Extended recovery period</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="deceased" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="text-xl font-semibold mb-4">1. Whole Body Donation</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                      <li>Comprehensive organ and tissue donation</li>
                      <li>Medical research contribution</li>
                      <li>Scientific and educational purposes</li>
                    </ul>
                    <h5 className="font-semibold mb-2">Donation Scope</h5>
                    <ul className="list-disc list-inside ml-4 space-y-1 text-gray-700">
                      <li>Multiple organ retrieval</li>
                      <li>Tissue donation</li>
                      <li>Scientific research</li>
                      <li>Medical Education</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="text-xl font-semibold mb-4">2. Specific Organ Donation</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                      <li>Individual organ selection</li>
                      <li>Customized donation preferences</li>
                    </ul>
                    <h5 className="font-semibold mb-2">Donatable Organs</h5>
                    <div className="grid grid-cols-2 gap-2">
                      <ul className="list-disc list-inside ml-4 space-y-1 text-gray-700">
                        <li>Heart</li>
                        <li>Lungs</li>
                        <li>Pancreas</li>
                        <li>Intestines</li>
                      </ul>
                      <ul className="list-disc list-inside ml-4 space-y-1 text-gray-700">
                        <li>Corneas</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="tissue" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="text-xl font-semibold mb-4">1. Corneal Donation</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Restores vision</li>
                      <li>Minimal medical intervention</li>
                      <li>Quick recovery for recipients</li>
                      <li>No age restrictions</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="text-xl font-semibold mb-4">2. Bone Marrow Donation</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Lifesaving for blood disorder patients</li>
                      <li>Complex matching process</li>
                      <li>Minimally invasive procedure</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="text-xl font-semibold mb-4">3. Skin Tissue Donation</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Burns and reconstructive surgery</li>
                      <li>Healing and recovery support</li>
                      <li>Minimal donor impact</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Special Considerations */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-display font-semibold mb-6">Special Donation Considerations</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4">Age and Health Factors</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>No strict upper age limit</li>
                  <li>Medical suitability determines the eligibility</li>
                  <li>Comprehensive health assessment</li>
                  <li>Individual organ viability evaluation</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4">Geographical and Demographic Aspects</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Regional donation variations</li>
                  <li>Cultural sensitivity</li>
                  <li>Community awareness programs</li>
                  <li>Targeted outreach initiatives</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-lg">
              Start Your Donation Journey
            </Button>
          </div>
        </div>
      </ContentContainer>

      {/* Volunteering Opportunities */}
      <ContentContainer className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="bg-primary/10 p-3 rounded-full inline-flex mb-6">
              <Users className="text-primary h-6 w-6" />
            </div>
            <h2 className="text-3xl font-display font-semibold mb-6">Volunteering Opportunities</h2>
            <p className="text-gray-700 mb-6">
              Our volunteers are the heart of our organization, bringing our mission to life through 
              their dedication and service. We offer various volunteering roles to match different 
              skills, interests, and availability.
            </p>
            
            <div className="bg-white shadow-sm rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold mb-3">Community Outreach Volunteer</h3>
              <p className="text-gray-600 mb-4">
                Help spread awareness about organ donation through community events, workshops, and presentations.
                Ideal for those who enjoy public speaking and community engagement.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">Weekly Commitment</span>
                <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">Training Provided</span>
              </div>
            </div>
            
            <div className="bg-white shadow-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Hospital Support Volunteer</h3>
              <p className="text-gray-600 mb-4">
                Provide emotional support to families considering organ donation in hospital settings.
                Requires empathy, emotional resilience, and specialized training.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">Monthly Shifts</span>
                <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">Interview Required</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&auto=format&q=80" 
              alt="Volunteer team at community event" 
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Apply to Volunteer</h3>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-1">Your Name</label>
                  <input type="text" className="w-full p-2 border rounded-md" placeholder="Full Name" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Email Address</label>
                  <input type="email" className="w-full p-2 border rounded-md" placeholder="email@example.com" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Area of Interest</label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Community Outreach</option>
                    <option>Hospital Support</option>
                    <option>Administrative Help</option>
                    <option>Special Events</option>
                    <option>Digital Volunteering</option>
                  </select>
                </div>
                <Button type="submit" className="w-full">Submit Application</Button>
              </form>
            </div>
          </div>
        </div>
      </ContentContainer>

      {/* Internship Programs */}
      <ContentContainer className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary/10 p-3 rounded-full inline-flex mb-6">
            <BadgeCheck className="text-primary h-6 w-6" />
          </div>
          <h2 className="text-3xl font-display font-semibold mb-6">Internship Programs</h2>
          <p className="text-gray-700 mb-10">
            Gain valuable experience while contributing to our life-saving mission. Our internships offer 
            hands-on learning in various aspects of non-profit operations, healthcare advocacy, and public awareness campaigns.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-3">Communications Intern</h3>
              <p className="text-gray-600 mb-4">
                Assist with social media, content creation, and public relations to spread our message.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>3-month commitment</li>
                <li>20 hours weekly</li>
                <li>Stipend provided</li>
              </ul>
              <Button variant="outline" className="w-full">Apply Now</Button>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-3">Program Development</h3>
              <p className="text-gray-600 mb-4">
                Help design and implement educational programs and impact measurement tools.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>6-month commitment</li>
                <li>30 hours weekly</li>
                <li>Stipend provided</li>
              </ul>
              <Button variant="outline" className="w-full">Apply Now</Button>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-3">Healthcare Liaison</h3>
              <p className="text-gray-600 mb-4">
                Work directly with our medical partners to improve donation processes.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>4-month commitment</li>
                <li>25 hours weekly</li>
                <li>Medical background preferred</li>
              </ul>
              <Button variant="outline" className="w-full">Apply Now</Button>
            </div>
          </div>
        </div>
      </ContentContainer>

      {/* Become a Member & Advocacy */}
      <ContentContainer className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="bg-primary/10 p-3 rounded-full inline-flex mb-6">
              <Heart className="text-primary h-6 w-6" />
            </div>
            <h2 className="text-3xl font-display font-semibold mb-6">Become a Member</h2>
            <p className="text-gray-700 mb-6">
              Join our community of advocates and supporters who are committed to advancing the cause of 
              organ donation. Members receive updates, invitations to special events, and opportunities 
              to connect with like-minded individuals.
            </p>
            
            <div className="bg-white shadow-md rounded-xl overflow-hidden">
              <div className="bg-primary/5 p-6 border-b">
                <h3 className="text-2xl font-semibold mb-1">Membership Levels</h3>
                <p className="text-gray-600">Choose the level that works for you</p>
              </div>
              
              <div className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold">Free Supporter</h4>
                    <p className="text-gray-600">Basic updates and involvement</p>
                  </div>
                  <Button variant="outline">Join</Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold">Advocate</h4>
                    <p className="text-gray-600">₹1,000/year - Enhanced benefits</p>
                  </div>
                  <Button>Join</Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold">Champion</h4>
                    <p className="text-gray-600">₹5,000/year - Premium benefits</p>
                  </div>
                  <Button className="bg-secondary hover:bg-secondary/90">Join</Button>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-secondary/10 p-3 rounded-full inline-flex mb-6">
              <Flag className="text-secondary h-6 w-6" />
            </div>
            <h2 className="text-3xl font-display font-semibold mb-6">Advocacy Campaigns</h2>
            <p className="text-gray-700 mb-6">
              Use your voice to advocate for policies that support organ donation and transplantation. 
              From social media campaigns to contacting policymakers, your advocacy can help create 
              systemic change.
            </p>
            
            <div className="bg-white shadow-md rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Current Campaigns</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-secondary mb-2">#LifeGift National Awareness Day</h4>
                  <p className="text-gray-600 mb-3">
                    Help us promote National Organ Donation Awareness Day by sharing your story or support on social media.
                  </p>
                  <Button variant="outline" className="text-secondary border-secondary hover:bg-secondary/10">
                    Get Social Media Kit
                  </Button>
                </div>
                
                <div>
                  <h4 className="font-semibold text-secondary mb-2">Hospital Policy Reform</h4>
                  <p className="text-gray-600 mb-3">
                    Support our petition for standardized organ donation protocols in all major hospitals.
                  </p>
                  <Button variant="outline" className="text-secondary border-secondary hover:bg-secondary/10">
                    Sign Petition
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentContainer>

      {/* Fundraising Events */}
      <ContentContainer className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16 rounded-xl">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/50 p-3 rounded-full inline-flex mb-6">
            <Calendar className="text-primary h-6 w-6" />
          </div>
          <h2 className="text-3xl font-display font-semibold mb-6 text-center">Fundraising Events</h2>
          <p className="text-xl text-gray-700 mb-10 text-center">
            Join us at our upcoming events to support our mission while connecting with our community.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&auto=format&q=80" 
                  alt="Annual Charity Walk" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <Calendar className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-700">June 12, 2025</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Annual DonateLife Walkathon</h3>
                <p className="text-gray-600 mb-4">
                  Our signature fundraising event in Mumbai. Walk with us to honor donors and support 
                  our mission. Registration includes t-shirt and refreshments.
                </p>
                <Button>Register Now</Button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=800&auto=format&q=80" 
                  alt="Charity Golf Tournament" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <Calendar className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-700">September 25, 2025</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Charity Golf Tournament</h3>
                <p className="text-gray-600 mb-4">
                  A day of golf and giving at the prestigious Delhi Golf Club. All proceeds support 
                  our hospital partnership program.
                </p>
                <Button>Register Team</Button>
              </div>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <Link to="/resources" className="inline-flex items-center text-primary font-medium hover:underline">
              See All Upcoming Events <Calendar className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </ContentContainer>

      <DonateButton />
    </>
  );
};

export default GetInvolved;
