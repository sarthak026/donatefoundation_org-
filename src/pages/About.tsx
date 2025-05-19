
import React from 'react';
import { Calendar, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const About: React.FC = () => {
  // Team members data
  const teamMembers = [
    {
      name: "Dr. Anita Sharma",
      role: "Founder & President",
      bio: "Former transplant surgeon with 20+ years of experience, passionate about creating awareness about organ donation.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&auto=format"
    },
    {
      name: "Rajesh Kumar",
      role: "Executive Director",
      bio: "Healthcare administration expert who joined the foundation after his daughter received a life-saving kidney transplant.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format"
    },
    {
      name: "Dr. Priya Malhotra",
      role: "Medical Advisor",
      bio: "Specializes in transplant medicine with focus on improving post-transplant care and quality of life for recipients.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&auto=format"
    }
  ];
  
  // Timeline events
  const timelineEvents = [
    {
      year: "2010",
      title: "DonateLife Foundation Established",
      description: "Founded by Dr. Anita Sharma with a mission to increase awareness about organ donation in India."
    },
    {
      year: "2013",
      title: "First Public Awareness Campaign",
      description: "Launched nationwide 'Give Life' campaign that reached over 5 million people."
    },
    {
      year: "2016",
      title: "Hospital Partnership Program",
      description: "Started working with 25 major hospitals to improve donation protocols."
    },
    {
      year: "2019",
      title: "Family Support Initiative",
      description: "Established counseling services for donor families and recipients."
    },
    {
      year: "2022",
      title: "Digital Transformation",
      description: "Launched mobile app for donor registration and educational resources."
    }
  ];
  
  // Partner logos
  const partners = [
    { name: "Ministry of Health", logo: "https://via.placeholder.com/150x70?text=Ministry+of+Health" },
    { name: "National Medical Association", logo: "https://via.placeholder.com/150x70?text=NMA" },
    { name: "Global Health Initiative", logo: "https://via.placeholder.com/150x70?text=GHI" },
    { name: "City Hospital Network", logo: "https://via.placeholder.com/150x70?text=CHN" },
    { name: "Medical Research Foundation", logo: "https://via.placeholder.com/150x70?text=MRF" },
    { name: "Healthcare Alliance", logo: "https://via.placeholder.com/150x70?text=Healthcare+Alliance" }
  ];
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">About DonateLife</h1>
            <p className="text-lg md:text-xl text-gray-700 mb-0">
              Our story, mission, and the people behind our life-saving work
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-6 text-lg">
                To inspire and educate communities across India about the life-saving power of organ, eye, and tissue donation, while supporting donors, recipients, and their families throughout their journey.
              </p>
              <h2 className="text-3xl font-display font-bold mb-6">Our Vision</h2>
              <p className="text-gray-700 mb-6 text-lg">
                A world where everyone understands the importance of organ donation, where there is no waiting list for transplants, and where the gift of life is celebrated and honored.
              </p>
            </div>
            <div className="bg-primary/5 p-8 rounded-lg border border-primary/20">
              <blockquote className="text-2xl italic font-display text-gray-700 mb-6">
                "Every organ donor can save up to eight lives and enhance over 50 more. We're working to ensure that every potential donor has the opportunity to create this ripple of life."
              </blockquote>
              <p className="font-semibold text-right">— Dr. Anita Sharma, Founder</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Story Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-12 text-center">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            {timelineEvents.map((event, index) => (
              <div key={index} className="flex mb-12 last:mb-0">
                <div className="mr-8 pt-1">
                  <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg">
                    {event.year}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-12 text-center">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-display font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Partners & Sponsors */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-12 text-center">Our Partners & Sponsors</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white p-4 rounded-lg flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 h-24">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-h-full max-w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Campaigns */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4 md:mb-0">Featured Campaigns</h2>
            <Link to="/what-we-do" className="flex items-center text-primary font-medium hover:underline">
              View All Campaigns <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md border border-gray-100">
              <div className="h-52 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1593113630400-ea4288922497?w=600&auto=format&q=75" 
                  alt="School Awareness Program"
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">Education</span>
                  <div className="flex items-center text-gray-500 text-sm ml-3">
                    <Calendar size={14} className="mr-1" />
                    Ongoing
                  </div>
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">School Awareness Program</h3>
                <p className="text-gray-600 mb-4">Educating students about the importance of organ donation through interactive sessions.</p>
                <Link to="/what-we-do" className="text-primary font-medium hover:underline inline-flex items-center">
                  Learn more <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md border border-gray-100">
              <div className="h-52 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&auto=format&q=75" 
                  alt="Donor Memorial Walk"
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-secondary/10 text-secondary text-xs font-semibold px-3 py-1 rounded-full">Event</span>
                  <div className="flex items-center text-gray-500 text-sm ml-3">
                    <Calendar size={14} className="mr-1" />
                    Annual
                  </div>
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">Donor Memorial Walk</h3>
                <p className="text-gray-600 mb-4">Annual walk to honor organ donors and raise awareness about the gift of life.</p>
                <Link to="/what-we-do" className="text-primary font-medium hover:underline inline-flex items-center">
                  Learn more <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md border border-gray-100">
              <div className="h-52 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&auto=format&q=75" 
                  alt="Hospital Training"
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">Training</span>
                  <div className="flex items-center text-gray-500 text-sm ml-3">
                    <Calendar size={14} className="mr-1" />
                    Quarterly
                  </div>
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">Hospital Training Program</h3>
                <p className="text-gray-600 mb-4">Training medical professionals on donation protocols and family approaches.</p>
                <Link to="/what-we-do" className="text-primary font-medium hover:underline inline-flex items-center">
                  Learn more <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Join Our Mission</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Together, we can create a future where every person in need receives the transplant they deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-involved" className="btn-primary">
              Get Involved
            </Link>
            <Link to="/donate" className="btn-tertiary">
              Become a Donor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
