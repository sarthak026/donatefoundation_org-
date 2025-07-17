
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Youtube, X } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Organization Info */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-primary font-display font-bold text-xl">Donate</span>
              <span className="text-secondary font-display font-bold text-xl">Life</span>
            </div>
            <p className="text-gray-600 mb-4">
              A non-profit dedicated to saving lives through organ donation awareness, counseling, and outreach programs.
            </p>
            <p className="text-gray-600 mb-2">501(c)(3) Organization</p>
            <p className="text-gray-600">EIN: 12-3456789</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/what-we-do" className="text-gray-600 hover:text-primary transition-colors">What We Do</Link></li>
              <li><Link to="/get-involved" className="text-gray-600 hover:text-primary transition-colors">Get Involved</Link></li>
              <li><Link to="/donate" className="text-gray-600 hover:text-primary transition-colors">Donate</Link></li>
              <li><Link to="/resources" className="text-gray-600 hover:text-primary transition-colors">Resources</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Contact Us</h3>
            <p className="text-gray-600 mb-2">1234 Life Avenue</p>
            <p className="text-gray-600 mb-2">San Francisco, CA 94101</p>
            <p className="text-gray-600 mb-2">info@donatelife.org</p>
            <p className="text-gray-600">+1 (800) 555-LIFE</p>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Join Our Newsletter</h3>
            <p className="text-gray-600 mb-4">Stay updated on our programs and impact stories.</p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button type="submit" className="btn-primary py-2">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="text-gray-600 hover:text-primary transition-colors" aria-label="Facebook">
            <Facebook size={20} />
          </a>
          <a href="#" className="text-gray-600 hover:text-primary transition-colors" aria-label="Instagram">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-gray-600 hover:text-primary transition-colors" aria-label="Twitter">
            <X size={20} />
          </a>
          <a href="#" className="text-gray-600 hover:text-primary transition-colors" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="#" className="text-gray-600 hover:text-primary transition-colors" aria-label="YouTube">
            <Youtube size={20} />
          </a>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-6 mb-4">
            <Link to="/privacy-policy" className="text-sm text-gray-600 hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-sm text-gray-600 hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="/accessibility" className="text-sm text-gray-600 hover:text-primary transition-colors">Accessibility</Link>
          </div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} DonateLife Foundation. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
