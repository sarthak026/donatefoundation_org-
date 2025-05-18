
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';

const DonateButton: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <button 
      onClick={() => navigate('/donate')}
      className="fixed bottom-6 right-6 z-40 flex items-center bg-secondary text-white px-5 py-3 rounded-full shadow-lg hover:bg-secondary/90 transition-all transform hover:scale-105"
      aria-label="Register as Donor"
    >
      <Heart size={18} className="mr-2" />
      <span className="font-medium">Register as Donor</span>
    </button>
  );
};

export default DonateButton;
