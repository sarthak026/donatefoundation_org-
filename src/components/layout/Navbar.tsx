
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

  const navLinks = [
    { text: 'Home', path: '/' },
    { text: 'About Us', path: '/about' },
    { text: 'What We Do', path: '/what-we-do' },
    { text: 'Get Involved', path: '/get-involved' },
    { text: 'Donate', path: '/donate' },
    { text: 'Resources', path: '/resources' },
    { text: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <NavLink to="/" className="flex items-center">
          <div className="flex items-center">
            <span className="text-primary font-display font-bold text-2xl">Donate</span>
            <span className="text-secondary font-display font-bold text-2xl">Life</span>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) => 
                `text-sm font-medium hover:text-primary transition-colors ${isActive ? 'text-primary' : 'text-gray-700'}`
              }
            >
              {link.text}
            </NavLink>
          ))}
          <NavLink to="/donate" className="btn-primary">
            Donate Now
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className={({ isActive }) => 
                  `py-2 text-sm font-medium ${isActive ? 'text-primary' : 'text-gray-700'}`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.text}
              </NavLink>
            ))}
            <NavLink 
              to="/donate" 
              className="btn-primary text-center mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Donate Now
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
