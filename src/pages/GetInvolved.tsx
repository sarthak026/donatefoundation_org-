
import React from 'react';
import ContentContainer from '../components/common/ContentContainer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Calendar, Heart, Flag, BadgeCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import DonateButton from '../components/ui/DonateButton';

const GetInvolved: React.FC = () => {
  return (
    <>
      <div className="pt-24 bg-gradient-to-r from-secondary/5 to-primary/5">
        <ContentContainer>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Get Involved</h1>
            <p className="text-xl text-gray-700 mb-10">
              Join our mission to save lives through organ donation awareness and advocacy. 
              Your time, skills, and passion can make a real difference.
            </p>
          </div>
        </ContentContainer>
      </div>

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
