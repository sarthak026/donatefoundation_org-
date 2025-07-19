import React from 'react';
import ContentContainer from '../components/common/ContentContainer';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, Youtube, MessageCircle, Heart } from 'lucide-react';
import DonateButton from '../components/ui/DonateButton';
const Contact: React.FC = () => {
  return <>
      {/* Hero Section with Background */}
      <div className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/lovable-uploads/7f33df0a-fc8e-4ecb-ac01-2d158466dbec.png" alt="Healthcare professionals and community" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-secondary/75 to-primary/80"></div>
        </div>
        
        <ContentContainer className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-8 shadow-sm">
              <MessageCircle className="h-4 w-4" />
              <span className="text-sm font-medium">GET IN TOUCH</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white drop-shadow-lg">Contact Us</h1>
            <p className="text-xl text-white/95 mb-10 drop-shadow-md">
              Have questions about organ donation or our foundation? Reach out to us. 
              We're here to help and provide information.
            </p>
          </div>
        </ContentContainer>
      </div>

      {/* Contact Form & Info Section */}
      <ContentContainer className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-1">Your Name</label>
                  <input type="text" id="name" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Full Name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-1">Email Address</label>
                  <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" placeholder="email@example.com" />
                </div>
              </div>
              
              <div>
                <label htmlFor="topic" className="block text-gray-700 mb-1">Topic</label>
                <select id="topic" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="">Select a topic</option>
                  <option value="general">General Inquiry</option>
                  <option value="donation">Organ Donation Information</option>
                  <option value="volunteer">Volunteering</option>
                  <option value="partnership">Partnership Opportunities</option>
                  <option value="media">Media Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
                <textarea id="message" rows={5} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Please provide details about your inquiry..."></textarea>
              </div>
              
              <div className="flex items-start">
                <input type="checkbox" id="consent" className="mt-1 mr-2" />
                <label htmlFor="consent" className="text-gray-600 text-sm">
                  I agree to the processing of my personal data in accordance with the privacy policy
                </label>
              </div>
              
              <Button type="submit" className="w-full py-6 text-lg">
                Send Message
              </Button>
            </form>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            
            <div className="bg-white shadow-sm rounded-xl p-6 border border-gray-100 mb-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-primary to-secondary p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-800">Email Us</h3>
                    <p className="text-gray-700 mb-1">info@donatefoundation.org</p>
                    <p className="text-gray-700 mb-1">
                  </p>
                    <p className="text-gray-700">
                  </p>
                  </div>
                </div>
                
                
                
                
              </div>
            </div>
            
            
            
            
          </div>
        </div>
      
      </ContentContainer>

      <DonateButton />
    </>;
};
export default Contact;