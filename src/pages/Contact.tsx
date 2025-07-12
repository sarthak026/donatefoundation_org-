
import React from 'react';
import ContentContainer from '../components/common/ContentContainer';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, Youtube, MessageCircle, Heart } from 'lucide-react';
import DonateButton from '../components/ui/DonateButton';

const Contact: React.FC = () => {
  return (
    <>
      {/* Hero Section with Background */}
      <div className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/7f33df0a-fc8e-4ecb-ac01-2d158466dbec.png" 
            alt="Healthcare professionals and community"
            className="w-full h-full object-cover"
          />
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
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                    placeholder="Full Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                    placeholder="email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="topic" className="block text-gray-700 mb-1">Topic</label>
                <select 
                  id="topic" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
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
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                  placeholder="Please provide details about your inquiry..."
                ></textarea>
              </div>
              
              <div className="flex items-start">
                <input 
                  type="checkbox" 
                  id="consent" 
                  className="mt-1 mr-2"
                />
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
                    <p className="text-gray-700 mb-1">General Inquiries: info@donatelife.org</p>
                    <p className="text-gray-700 mb-1">Media Inquiries: media@donatelife.org</p>
                    <p className="text-gray-700">Partnerships: partners@donatelife.org</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-secondary to-primary p-3 rounded-full mr-4">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-800">Call Us</h3>
                    <p className="text-gray-700 mb-1">Helpline: +91-XXX-XXX-XXXX</p>
                    <p className="text-gray-700">Office: +91-XXX-XXX-XXXX</p>
                    <p className="text-sm text-gray-500 mt-1">Monday to Friday, 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-primary to-secondary p-3 rounded-full mr-4">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-800">Visit Us</h3>
                    <p className="text-gray-700 mb-1">DonateLife Foundation</p>
                    <p className="text-gray-700 mb-1">123 Hospital Road, Andheri East</p>
                    <p className="text-gray-700">Mumbai, Maharashtra 400069</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white shadow-sm rounded-xl p-6 border border-gray-100 mb-8">
              <h3 className="font-semibold mb-4">Social Media</h3>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold mb-4">Office Hours</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 2:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
              <p className="text-sm text-gray-500 mt-3">
                Emergency helpline is available 24/7 for urgent donor family support
              </p>
            </div>
          </div>
        </div>
      </ContentContainer>

      {/* Map Section */}
      <ContentContainer className="pb-16">
        <div className="bg-gray-200 w-full h-80 rounded-xl overflow-hidden">
          {/* This would be replaced by an actual map component or embed */}
          <div className="w-full h-full flex items-center justify-center bg-gray-300">
            <p className="text-gray-600 font-medium">Map Location Embed</p>
          </div>
        </div>
      </ContentContainer>

      <DonateButton />
    </>
  );
};

export default Contact;
