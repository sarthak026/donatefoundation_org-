import React from 'react';
import { Heart, Users, AlertTriangle } from 'lucide-react';
import ContentContainer from '../common/ContentContainer';

const ImpactMetrics: React.FC = () => {
  const metrics = [
    {
      number: '39,415',
      label: 'Lives Saved in 2023',
      icon: Heart,
      bgColor: 'bg-green-500',
      badge: '+6.3% from 2022',
      badgeColor: 'bg-green-100 text-green-700'
    },
    {
      number: '250,000',
      label: 'People Waiting',
      icon: Users,
      bgColor: 'bg-blue-500',
      badge: 'Critical Need',
      badgeColor: 'bg-blue-100 text-blue-700'
    },
    {
      number: '<5%',
      label: 'Demand Met',
      icon: AlertTriangle,
      bgColor: 'bg-orange-500',
      badge: 'Gap Exists',
      badgeColor: 'bg-orange-100 text-orange-700'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <ContentContainer>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`${metric.bgColor} p-3 rounded-xl`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <span className={`${metric.badgeColor} px-3 py-1 rounded-full text-xs font-medium`}>
                    {metric.badge}
                  </span>
                </div>
                
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {metric.number}
                </div>
                
                <div className="text-gray-600 font-medium text-lg">
                  {metric.label}
                </div>
              </div>
            );
          })}
        </div>
      </ContentContainer>
    </section>
  );
};

export default ImpactMetrics;