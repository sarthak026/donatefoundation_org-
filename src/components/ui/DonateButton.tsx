
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Button } from './button';

const DonateButton: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <Button 
      onClick={() => navigate('/donate')}
      className="fixed bottom-6 right-6 z-40 flex items-center bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white rounded-md shadow-lg transition-all transform hover:scale-105 px-5 py-6"
      aria-label="Register as Donor"
      variant="outline"
      size="lg"
    >
      <Heart className="mr-2" size={20} />
      <span className="font-medium">Register as Donor</span>
    </Button>
  );
};

export default DonateButton;
