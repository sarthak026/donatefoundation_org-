import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Heart, Users, AlertTriangle, CheckCircle, Clock, Activity, TrendingUp, MapPin, IndianRupee, ChevronLeft, ChevronRight, BarChart3, Target, Users2 } from 'lucide-react';
const AboutOrganDonation: React.FC = () => {
  const organTypes = [{
    name: 'Kidneys',
    icon: '🫘',
    description: 'Most commonly transplanted organ'
  }, {
    name: 'Liver',
    icon: '🫁',
    description: 'Can be partially donated by living donors'
  }, {
    name: 'Heart',
    icon: '❤️',
    description: 'Life-saving for heart failure patients'
  }, {
    name: 'Lungs',
    icon: '🫁',
    description: 'Critical for respiratory diseases'
  }, {
    name: 'Pancreas',
    icon: '🥞',
    description: 'Helps diabetes patients'
  }, {
    name: 'Intestines',
    icon: '🧬',
    description: 'For severe bowel conditions'
  }, {
    name: 'Corneas',
    icon: '👁️',
    description: 'Restores sight to the blind'
  }, {
    name: 'Skin tissues',
    icon: '🩹',
    description: 'Helps burn victims recover'
  }, {
    name: 'Bone marrow',
    icon: '🦴',
    description: 'Treats blood cancers'
  }, {
    name: 'Heart valves',
    icon: '💝',
    description: 'Repairs heart defects'
  }];
  const myths = [{
    title: "Medical Professionals Will Compromise Patient Care",
    content: "Many people fear that being an organ donor means doctors will provide less intensive medical care. This is entirely false. Medical professionals are bound by strict ethical codes and are legally obligated to provide the highest standard of care possible. Organ donation is only considered after all life-saving efforts have been exhausted and brain death has been conclusively determined through multiple medical assessments."
  }, {
    title: "Age Restricts Organ Donation",
    content: "There's a widespread belief that only young, healthy individuals can be organ donors. In reality, medical suitability is determined by individual health conditions rather than age alone. Donors have successfully contributed organs from their teenage years well into their seventies. Each potential donor undergoes comprehensive medical screening to assess the viability of their organs."
  }, {
    title: "Organ Donation is Financially Burdensome",
    content: "The financial aspect of organ donation is often misunderstood. Contrary to popular belief, organ donation is completely free. The donor's family does not incur any medical expenses related to the donation process. In many cases, government schemes and healthcare programs cover the costs associated with organ retrieval and transplantation."
  }, {
    title: "Wealthy or Influential People Get Priority in Organ Transplantation",
    content: "The organ allocation process in India is governed by a transparent and merit-based system. Recipients are prioritized based on medical urgency, compatibility (including blood group and HLA matching), waiting time, and geographical proximity. Factors such as wealth, social status, or personal connections do not influence the selection process. The National Organ and Tissue Transplant Organization (NOTTO) ensures a stringent and fair approach to organ allocation."
  }, {
    title: "Organ Donation Disfigures the Body",
    content: "Many potential donors worry about the physical appearance of their body after donation. Modern medical techniques ensure that organ retrieval is performed with the utmost respect and care. The body is carefully preserved, and any surgical interventions are done with surgical precision. Funeral and last rites can proceed exactly as the family wishes, with no visible signs of medical intervention."
  }, {
    title: "Living Donation is Extremely Risky",
    content: "While living donations involve surgical procedures, medical advancements have made them increasingly safe. Potential living donors undergo extensive medical and psychological evaluations. Organs like kidneys and a partial liver can be donated with minimal long-term health risks to the donor. Medical teams provide comprehensive pre and post-operative care to ensure donor well-being."
  }, {
    title: "Black Market Concerns Compromise Donation Integrity",
    content: "Fears about organ trafficking are serious and legitimate concerns. However, India has implemented robust legal frameworks like the Transplantation of Human Organs Act to prevent illegal organ trade. Strict government regulations, multiple verification processes, and ethical review boards ensure that every organ donation follows transparent, legal protocols."
  }, {
    title: "Partial or Specific Organ Donation is Not Possible",
    content: "Many potential donors believe they must donate all organs or none at all. In reality, individuals can choose to donate specific organs or tissues. Whether it's corneas, kidneys, or other organs, donors have the flexibility to specify their preferences. This personalized approach allows individuals to make donation decisions that align with their comfort level."
  }, {
    title: "Urban Myth of Organs Being Stolen During Medical Procedures",
    content: "This persistent myth suggests that hospitals might remove organs without consent during routine medical procedures. This is categorically false. Organ donation requires explicit, informed consent from the donor or their family. Multiple legal and medical safeguards protect individuals from unauthorized organ removal. Transparency and family involvement are cornerstones of the donation process."
  }, {
    title: "Chronic Illnesses Disqualify Individuals from Donation",
    content: "Not all chronic conditions prevent organ donation. Medical professionals evaluate each potential donor's specific health conditions. Some chronic conditions do not impact the viability of certain organs. A comprehensive medical assessment determines which organs can be safely donated, offering hope even to individuals with complex medical histories."
  }];
  const waitTimes = [{
    organ: 'Kidney',
    time: '4–7 years',
    color: 'bg-red-500'
  }, {
    organ: 'Liver',
    time: '2–5 years',
    color: 'bg-orange-500'
  }, {
    organ: 'Heart',
    time: '3–6 years',
    color: 'bg-red-600'
  }, {
    organ: 'Cornea',
    time: '6–12 months',
    color: 'bg-green-500'
  }];
  const successRates = [{
    organ: 'Overall',
    rate: '85–90%',
    color: 'text-green-600'
  }, {
    organ: 'Kidney',
    rate: '90–95%',
    color: 'text-green-600'
  }, {
    organ: 'Liver',
    rate: '80–85%',
    color: 'text-green-500'
  }, {
    organ: 'Heart',
    rate: '85–90%',
    color: 'text-green-600'
  }, {
    organ: 'Corneal',
    rate: '95%',
    color: 'text-green-700'
  }];
  const [currentMythIndex, setCurrentMythIndex] = useState(0);
  const [currentStatIndex, setCurrentStatIndex] = useState(0);
  const nextMyth = () => {
    setCurrentMythIndex(prev => (prev + 1) % myths.length);
  };
  const prevMyth = () => {
    setCurrentMythIndex(prev => (prev - 1 + myths.length) % myths.length);
  };
  const statsData = [{
    title: "Organ Shortage Crisis",
    data: [{
      label: "Annual Deaths",
      value: "500,000",
      color: "text-red-600"
    }, {
      label: "Donors per 100K",
      value: "0.26",
      color: "text-orange-600"
    }, {
      label: "Kidney Patients",
      value: "200,000+",
      color: "text-red-500"
    }]
  }, {
    title: "Success Rates",
    data: [{
      label: "Overall Success",
      value: "85-90%",
      color: "text-green-600"
    }, {
      label: "Kidney Success",
      value: "90-95%",
      color: "text-green-600"
    }, {
      label: "Corneal Success",
      value: "95%",
      color: "text-green-700"
    }]
  }, {
    title: "Economic Impact",
    data: [{
      label: "Kidney Cost",
      value: "₹5-7L",
      color: "text-blue-600"
    }, {
      label: "Liver Cost",
      value: "₹15-20L",
      color: "text-purple-600"
    }, {
      label: "Lives Saved/Year",
      value: "2,000+",
      color: "text-green-600"
    }]
  }];
  return <section className="py-12 bg-gradient-to-br from-blue-50 via-teal-50 to-green-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent px-0 py-[7px]">
            About Organ Donation
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Understanding Organ Donation: A Comprehensive Guide to Saving Lives
          </p>
        </div>

        {/* Compact Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0 shadow-xl">
            <CardContent className="p-6 text-center">
              <Heart className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-xl font-bold mb-2">Gift of Life</h3>
              <p className="text-blue-100">One donor can save up to 8 lives</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-teal-500 to-teal-600 text-white border-0 shadow-xl">
            <CardContent className="p-6 text-center">
              <Users2 className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-xl font-bold mb-2">Lives Waiting</h3>
              <p className="text-teal-100">500K people need transplants</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white border-0 shadow-xl">
            <CardContent className="p-6 text-center">
              <Target className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-xl font-bold mb-2">Success Rate</h3>
              <p className="text-green-100">85-95% success in transplants</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 shadow-lg rounded-xl p-1 bg-green-700">
            <TabsTrigger value="overview" className="rounded-lg text-neutral-950 mx-[22px] bg-green-300 hover:bg-green-200">Overview</TabsTrigger>
            <TabsTrigger value="myths" className="rounded-lg bg-green-300 hover:bg-green-200 text-zinc-950 mx-[22px]">Myths & Facts</TabsTrigger>
            <TabsTrigger value="statistics" className="rounded-lg bg-green-300 hover:bg-green-200 text-gray-950 mx-[22px]">Statistics</TabsTrigger>
            <TabsTrigger value="organs" className="rounded-lg text-gray-950 bg-green-300 hover:bg-green-200 mx-[22px]">Organ Types</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            {/* What is Organ Donation */}
            <Card className="bg-gradient-to-r from-blue-50 to-teal-50 border-blue-200 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-3xl font-display font-semibold mb-6 text-center text-gray-800">
                  What is Organ Donation?
                </h3>
                <p className="text-lg text-gray-700 text-center leading-relaxed mb-8 max-w-4xl mx-auto">
                  Organ donation is a profound act of human compassion—a gift of life that transcends personal boundaries. 
                  It involves the selfless act of donating healthy organs and tissues to individuals facing life-threatening 
                  medical conditions, offering hope, healing, and a second chance at life.
                </p>
                <div className="text-center">
                  <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-8 py-3 text-lg shadow-lg">
                    <Heart className="h-5 w-5 mr-2" />
                    Join the Movement
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Types of Donation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="rounded-2xl shadow-xl border-0 bg-white overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
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
                      Rigorous medical and psychological screening
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="rounded-2xl shadow-xl border-0 bg-white overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
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
                      Coordinated through national organ networks
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="myths" className="space-y-6">
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200">
              <h3 className="text-3xl font-display font-semibold mb-4 text-center text-gray-800">
                Myths vs. Facts: Demystifying Organ Donation
              </h3>
              <p className="text-lg text-gray-700 mb-6 text-center">
                10 Critical Myths About Organ Donation in India
              </p>
              
              <div className="bg-orange-100/70 border border-orange-300 rounded-xl p-4 mb-8">
                <p className="text-gray-700 text-center">
                  The landscape of organ donation is often clouded by misconceptions that prevent potential donors from making life-changing decisions.
                </p>
              </div>

              {/* Myth Carousel */}
              <div className="relative bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <Button variant="outline" size="sm" onClick={prevMyth} className="rounded-full">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Badge variant="secondary" className="text-sm">
                    Myth {currentMythIndex + 1} of {myths.length}
                  </Badge>
                  <Button variant="outline" size="sm" onClick={nextMyth} className="rounded-full">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="text-center min-h-[200px] flex flex-col justify-center">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="bg-red-100 text-red-600 rounded-full p-3">
                      <AlertTriangle className="h-6 w-6" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800">
                      {myths[currentMythIndex].title}
                    </h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    {myths[currentMythIndex].content}
                  </p>
                </div>
                
                {/* Dots indicator */}
                <div className="flex justify-center gap-2 mt-6">
                  {myths.map((_, index) => <button key={index} onClick={() => setCurrentMythIndex(index)} className={`w-2 h-2 rounded-full transition-colors ${index === currentMythIndex ? 'bg-red-500' : 'bg-gray-300'}`} />)}
                </div>
              </div>

              {/* Quick Myth Preview */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-6">
                {myths.slice(0, 10).map((myth, index) => <button key={index} onClick={() => setCurrentMythIndex(index)} className={`p-3 rounded-lg text-xs text-left transition-colors border ${index === currentMythIndex ? 'bg-red-100 border-red-300 text-red-800' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
                    Myth {index + 1}: {myth.title.slice(0, 20)}...
                  </button>)}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="statistics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {statsData.map((section, index) => <Card key={index} className="bg-white shadow-lg border-0">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-center">{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {section.data.map((item, idx) => <div key={idx} className="text-center">
                        <div className={`text-2xl font-bold ${item.color} mb-1`}>
                          {item.value}
                        </div>
                        <p className="text-sm text-gray-600">{item.label}</p>
                      </div>)}
                  </CardContent>
                </Card>)}
            </div>

            {/* Wait Times Visualization */}
            <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
              <CardHeader>
                <CardTitle className="text-center flex items-center justify-center gap-2">
                  <Clock className="h-6 w-6 text-orange-500" />
                  Average Wait Times for Organ Transplant
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {waitTimes.map((item, index) => <div key={index} className="text-center bg-white rounded-xl p-4 shadow-sm">
                      <div className={`w-12 h-12 ${item.color} rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-lg`}>
                        {item.organ[0]}
                      </div>
                      <h5 className="font-semibold text-gray-800 mb-1">{item.organ}</h5>
                      <p className="text-gray-600 font-medium">{item.time}</p>
                    </div>)}
                </div>
              </CardContent>
            </Card>

            {/* State Performance & Economic Impact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-blue-600">
                    <MapPin className="h-5 w-5" />
                    State-wise Performance
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Maharashtra</span>
                    <Badge className="bg-green-100 text-green-800">35%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Karnataka & Tamil Nadu</span>
                    <Badge className="bg-blue-100 text-blue-800">Strong</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Northern States</span>
                    <Badge className="bg-orange-100 text-orange-800">Lower rates</Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-purple-600">
                    <IndianRupee className="h-5 w-5" />
                    Economic Impact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Kidney transplant</span>
                    <span className="font-medium text-blue-600">₹5-7 lakhs</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Liver transplant</span>
                    <span className="font-medium text-purple-600">₹15-20 lakhs</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    Government initiatives working to reduce barriers
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="organs" className="space-y-6">
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Organs That Can Be Donated</CardTitle>
                <CardDescription className="text-center text-lg">
                  Multiple organs and tissues can save and enhance many lives
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {organTypes.map((organ, index) => <div key={index} className="bg-white rounded-xl p-4 shadow-md text-center hover:shadow-lg transition-all hover:scale-105 border border-gray-100">
                      <div className="text-3xl mb-2">{organ.icon}</div>
                      <h4 className="font-semibold text-gray-800 mb-1 text-sm">{organ.name}</h4>
                      <p className="text-xs text-gray-600">{organ.description}</p>
                    </div>)}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Final CTA */}
        <div className="text-center bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl p-8 mt-12 shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Your Decision Matters
          </h3>
          <p className="text-xl mb-6 opacity-90 max-w-2xl mx-auto">
            Your decision to donate can be the greatest gift of life. Become a donor, become a hope.
          </p>
          <Button onClick={() => window.open('https://www.mohanfoundation.org/donorcard.asp', '_blank')} size="lg" className="bg-white text-orange-600 hover:bg-gray-100 rounded-full px-8 py-3 text-lg font-semibold shadow-lg">
            <Heart className="h-6 w-6 mr-2" />
            Pledge to Save Lives
          </Button>
        </div>
      </div>
    </section>;
};
export default AboutOrganDonation;