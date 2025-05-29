
import React from 'react';
import ContentContainer from '../components/common/ContentContainer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Heart, Users, AlertTriangle, CheckCircle, Clock, Activity, TrendingUp, MapPin } from 'lucide-react';
import DonateButton from '../components/ui/DonateButton';

const OrganDonation: React.FC = () => {
  const organTypes = [
    { name: 'Kidneys', icon: '🫘', description: 'Most commonly transplanted organ' },
    { name: 'Liver', icon: '🫁', description: 'Can be partially donated by living donors' },
    { name: 'Heart', icon: '❤️', description: 'Life-saving for heart failure patients' },
    { name: 'Lungs', icon: '🫁', description: 'Critical for respiratory diseases' },
    { name: 'Pancreas', icon: '🥞', description: 'Helps diabetes patients' },
    { name: 'Intestines', icon: '🧬', description: 'For severe bowel conditions' },
    { name: 'Corneas', icon: '👁️', description: 'Restores sight to the blind' },
    { name: 'Skin tissues', icon: '🩹', description: 'Helps burn victims recover' },
    { name: 'Bone marrow', icon: '🦴', description: 'Treats blood cancers' },
    { name: 'Heart valves', icon: '💝', description: 'Repairs heart defects' }
  ];

  const myths = [
    {
      title: "Medical Professionals Will Compromise Patient Care",
      content: "Medical professionals are bound by strict ethical codes and are legally obligated to provide the highest standard of care possible. Organ donation is only considered after all life-saving efforts have been exhausted and brain death has been conclusively determined through multiple medical assessments."
    },
    {
      title: "Age Restricts Organ Donation",
      content: "Medical suitability is determined by individual health conditions rather than age alone. Donors have successfully contributed organs from their teenage years well into their seventies. Each potential donor undergoes comprehensive medical screening to assess the viability of their organs."
    },
    {
      title: "Organ Donation is Financially Burdensome",
      content: "Organ donation is completely free. The donor's family does not incur any medical expenses related to the donation process. In many cases, government schemes and healthcare programs cover the costs associated with organ retrieval and transplantation."
    },
    {
      title: "Wealthy or Influential People Get Priority",
      content: "The organ allocation process in India is governed by a transparent and merit-based system. Recipients are prioritized based on medical urgency, compatibility, waiting time, and geographical proximity. The National Organ and Tissue Transplant Organization (NOTTO) ensures a stringent and fair approach to organ allocation."
    },
    {
      title: "Organ Donation Disfigures the Body",
      content: "Modern medical techniques ensure that organ retrieval is performed with the utmost respect and care. The body is carefully preserved, and any surgical interventions are done with surgical precision. Funeral and last rites can proceed exactly as the family wishes, with no visible signs of medical intervention."
    },
    {
      title: "Living Donation is Extremely Risky",
      content: "Medical advancements have made living donations increasingly safe. Potential living donors undergo extensive medical and psychological evaluations. Organs like kidneys and a partial liver can be donated with minimal long-term health risks to the donor."
    },
    {
      title: "Black Market Concerns Compromise Donation Integrity",
      content: "India has implemented robust legal frameworks like the Transplantation of Human Organs Act to prevent illegal organ trade. Strict government regulations, multiple verification processes, and ethical review boards ensure that every organ donation follows transparent, legal protocols."
    },
    {
      title: "Partial or Specific Organ Donation is Not Possible",
      content: "Individuals can choose to donate specific organs or tissues. Whether it's corneas, kidneys, or other organs, donors have the flexibility to specify their preferences. This personalized approach allows individuals to make donation decisions that align with their comfort level."
    },
    {
      title: "Urban Myth of Organs Being Stolen During Medical Procedures",
      content: "Organ donation requires explicit, informed consent from the donor or their family. Multiple legal and medical safeguards protect individuals from unauthorized organ removal. Transparency and family involvement are cornerstones of the donation process."
    },
    {
      title: "Chronic Illnesses Disqualify Individuals from Donation",
      content: "Not all chronic conditions prevent organ donation. Medical professionals evaluate each potential donor's specific health conditions. Some chronic conditions do not impact the viability of certain organs. A comprehensive medical assessment determines which organs can be safely donated."
    }
  ];

  const waitTimes = [
    { organ: 'Kidney', time: '4–7 years', color: 'bg-red-500' },
    { organ: 'Liver', time: '2–5 years', color: 'bg-orange-500' },
    { organ: 'Heart', time: '3–6 years', color: 'bg-red-600' },
    { organ: 'Cornea', time: '6–12 months', color: 'bg-green-500' }
  ];

  const successRates = [
    { organ: 'Kidney', rate: '90–95%', color: 'text-green-600' },
    { organ: 'Liver', rate: '80–85%', color: 'text-green-500' },
    { organ: 'Heart', rate: '85–90%', color: 'text-green-600' },
    { organ: 'Corneal', rate: '95%', color: 'text-green-700' },
    { organ: 'Overall', rate: '85–90%', color: 'text-green-600' }
  ];

  return (
    <>
      <div className="pt-24 bg-gradient-to-r from-blue-50 to-teal-50">
        <ContentContainer>
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-gray-800">
              About Organ Donation
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Understanding Organ Donation: A Comprehensive Guide
            </p>
          </div>
        </ContentContainer>
      </div>

      {/* What is Organ Donation */}
      <ContentContainer className="py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 mb-12 border border-blue-100">
            <h2 className="text-3xl font-display font-semibold mb-6 text-center text-gray-800">
              What is Organ Donation?
            </h2>
            <p className="text-lg text-gray-700 text-center leading-relaxed">
              Organ donation is a profound act of human compassion—a gift of life that transcends personal boundaries. 
              It involves the selfless act of donating healthy organs and tissues to individuals facing life-threatening 
              medical conditions, offering hope, healing, and a second chance at life.
            </p>
            <div className="text-center mt-8">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-8 py-3 text-lg">
                <Heart className="h-5 w-5 mr-2" />
                Join the Movement
              </Button>
            </div>
          </div>
        </div>
      </ContentContainer>

      {/* Types of Organ Donation */}
      <ContentContainer className="bg-gray-50 py-16">
        <h2 className="text-3xl md:text-4xl font-display font-semibold mb-12 text-center text-gray-800">
          Types of Organ Donation
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="rounded-2xl shadow-lg border-0 bg-white">
            <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-t-2xl">
              <CardTitle className="text-2xl flex items-center gap-3">
                <Activity className="h-8 w-8" />
                Living Donation
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  Donation of kidney or partial liver
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  Living donors can save lives while maintaining their own health
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  Typically involves family members or close friends
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  Rigorous medical and psychological screening
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-lg border-0 bg-white">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-t-2xl">
              <CardTitle className="text-2xl flex items-center gap-3">
                <Heart className="h-8 w-8" />
                Deceased Donation
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  Organs donated after brain death or cardiac death
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  Multiple organs can be donated from a single donor
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  Coordinated through hospital and national organ donation networks
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </ContentContainer>

      {/* Organs That Can Be Donated */}
      <ContentContainer className="py-16">
        <h2 className="text-3xl md:text-4xl font-display font-semibold mb-12 text-center text-gray-800">
          Organs That Can Be Donated
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {organTypes.map((organ, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow border border-gray-100">
              <div className="text-4xl mb-3">{organ.icon}</div>
              <h3 className="font-semibold text-gray-800 mb-2">{organ.name}</h3>
              <p className="text-sm text-gray-600">{organ.description}</p>
            </div>
          ))}
        </div>
      </ContentContainer>

      {/* Myths vs Facts */}
      <ContentContainer className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6 text-center text-gray-800">
            Myths vs. Facts: Demystifying Organ Donation
          </h2>
          <p className="text-xl text-gray-700 mb-12 text-center">
            10 Critical Myths About Organ Donation in India
          </p>
          
          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 mb-8">
            <p className="text-lg text-gray-700 text-center">
              The landscape of organ donation is often clouded by misconceptions that prevent potential donors from making life-changing decisions. Understanding these myths is crucial to breaking down barriers and saving lives.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {myths.map((myth, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 text-red-600 rounded-full p-2 flex-shrink-0">
                      <AlertTriangle className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="font-semibold text-gray-800">Myth {index + 1}:</span>
                      <span className="ml-2 text-gray-700">{myth.title}</span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pl-16 text-gray-700 leading-relaxed">
                  {myth.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </ContentContainer>

      {/* Organ Shortage Statistics */}
      <ContentContainer className="py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-12 text-center text-gray-800">
            Organ Shortage: A National Challenge
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">500,000</div>
              <p className="text-gray-700">People die annually waiting for organ transplants</p>
            </div>
            
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">0.26</div>
              <p className="text-gray-700">Organ donors per 100,000 people</p>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">200,000+</div>
              <p className="text-gray-700">Patients requiring kidney transplantation</p>
            </div>
          </div>

          {/* Wait Times */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
            <h3 className="text-2xl font-display font-semibold mb-6 text-center text-gray-800 flex items-center justify-center gap-2">
              <Clock className="h-6 w-6 text-orange-500" />
              Average Wait Time for Organ Transplant
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {waitTimes.map((item, index) => (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 ${item.color} rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold`}>
                    {item.organ[0]}
                  </div>
                  <h4 className="font-semibold text-gray-800">{item.organ}</h4>
                  <p className="text-gray-600">{item.time}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Success Rates */}
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
            <h3 className="text-2xl font-display font-semibold mb-6 text-center text-gray-800 flex items-center justify-center gap-2">
              <TrendingUp className="h-6 w-6 text-green-500" />
              Success Rate of Organ Transplantation
            </h3>
            <p className="text-center text-gray-700 mb-6">
              Organ transplantation in India has shown remarkable medical progress:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {successRates.map((item, index) => (
                <div key={index} className="text-center bg-white rounded-xl p-4 shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-1">{item.organ}</h4>
                  <p className={`text-2xl font-bold ${item.color}`}>{item.rate}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ContentContainer>

      {/* State-wise Performance */}
      <ContentContainer className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-8 text-center text-gray-800 flex items-center justify-center gap-3">
            <MapPin className="h-8 w-8 text-blue-500" />
            State-wise Organ Donation Performance
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-green-600">Leading States</h3>
              <ul className="space-y-3">
                <li className="flex justify-between items-center">
                  <span>Maharashtra</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">35%</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Karnataka</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Strong</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Tamil Nadu</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Strong</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-orange-600">Areas for Improvement</h3>
              <ul className="space-y-3">
                <li className="flex justify-between items-center">
                  <span>Northern States</span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">Lower rates</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Urban vs Rural</span>
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">70% Urban</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ContentContainer>

      {/* Call to Action */}
      <ContentContainer className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Your Decision Matters
          </h2>
          <p className="text-2xl mb-8 opacity-90">
            Your decision to donate can be the greatest gift of life. Become a donor, become a hope.
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 rounded-full px-10 py-4 text-xl font-semibold">
            <Heart className="h-6 w-6 mr-2" />
            Pledge to Save Lives
          </Button>
        </div>
      </ContentContainer>

      <DonateButton />
    </>
  );
};

export default OrganDonation;
