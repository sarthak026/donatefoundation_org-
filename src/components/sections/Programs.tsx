
import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Users, Award } from 'lucide-react';
import ContentContainer from '../common/ContentContainer';

const programsData = [
  {
    id: 1,
    title: "Awareness Workshops",
    description: "Educational sessions in schools, colleges, and communities to spread knowledge about organ donation.",
    icon: Book,
    link: "/what-we-do#workshops"
  },
  {
    id: 2,
    title: "Donor Family Support",
    description: "Counseling, resources, and a community for families who have given the gift of life.",
    icon: Users,
    link: "/what-we-do#support"
  },
  {
    id: 3,
    title: "Hospital Partnerships",
    description: "Training medical professionals on donation protocols and promoting best practices.",
    icon: Award,
    link: "/what-we-do#partnerships"
  }
];

const Programs: React.FC = () => {
  return (
    <ContentContainer>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">Our Programs</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Through these key initiatives, we work to create a world where organ donation is understood, celebrated, and accessible to all.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {programsData.map((program) => {
          const IconComponent = program.icon;
          
          return (
            <div key={program.id} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 mx-auto">
                <IconComponent size={32} />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 text-center">{program.title}</h3>
              <p className="text-gray-600 text-center mb-6">{program.description}</p>
              <div className="text-center">
                <Link to={program.link} className="text-primary hover:underline font-medium">
                  Learn more
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </ContentContainer>
  );
};

export default Programs;
