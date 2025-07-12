import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    text: 'Home',
    path: '/'
  }, {
    text: 'About Us',
    path: '/about'
  }, {
    text: 'What We Do',
    path: '/what-we-do'
  }, {
    text: 'Get Involved',
    path: '/get-involved'
  }, {
    text: 'Donate',
    path: '/donate'
  }, {
    text: 'Resources',
    path: '/resources'
  }, {
    text: 'Contact',
    path: '/contact'
  }];
  return <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <NavLink to="/" className="flex items-center transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center">
            <span className="font-display font-bold text-2xl animate-pulse-shadow text-slate-50">Donate</span>
            <span className="text-secondary font-display font-bold text-2xl">Life</span>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => <NavLink key={index} to={link.path} className={({
          isActive
        }) => `nav-link text-sm font-medium transition-all duration-300 hover:text-primary ${isActive ? 'text-primary font-semibold' : 'text-gray-700'}`} style={{
          animationDelay: `${index * 0.1}s`
        }}>
              {link.text}
            </NavLink>)}
          <NavLink to="/donate" className="btn-primary relative overflow-hidden group">
            <span className="relative z-10">Donate Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700 focus:outline-none transform hover:scale-110 transition-transform duration-200" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <div className="relative">
            <Menu size={24} className={`transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
            <X size={24} className={`absolute top-0 left-0 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <nav className="bg-white/95 backdrop-blur-sm shadow-lg border-t border-gray-100">
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            {navLinks.map((link, index) => <NavLink key={index} to={link.path} className={({
            isActive
          }) => `py-3 px-4 text-sm font-medium rounded-lg transition-all duration-300 transform hover:translate-x-2 ${isActive ? 'text-primary bg-primary/10 font-semibold' : 'text-gray-700 hover:bg-gray-50'}`} onClick={() => setIsMobileMenuOpen(false)} style={{
            animationDelay: `${index * 0.1}s`,
            animation: isMobileMenuOpen ? `slideInLeft 0.5s ease-out ${index * 0.1}s both` : 'none'
          }}>
                {link.text}
              </NavLink>)}
            <NavLink to="/donate" className="btn-primary text-center mt-4 relative overflow-hidden group" onClick={() => setIsMobileMenuOpen(false)} style={{
            animationDelay: `${navLinks.length * 0.1}s`,
            animation: isMobileMenuOpen ? `slideInLeft 0.5s ease-out ${navLinks.length * 0.1}s both` : 'none'
          }}>
              <span className="relative z-10">Donate Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </NavLink>
          </div>
        </nav>
      </div>
    </header>;
};
export default Navbar;