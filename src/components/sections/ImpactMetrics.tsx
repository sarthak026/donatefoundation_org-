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
    <section className="py-4 bg-gray-50">
      <ContentContainer>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className={`${metric.bgColor} p-2 rounded-lg`}>
                    <IconComponent className="h-4 w-4 text-white" />
                  </div>
                  <span className={`${metric.badgeColor} px-2 py-1 rounded-full text-xs font-medium`}>
                    {metric.badge}
                  </span>
                </div>
                
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {metric.number}
                </div>
                
                <div className="text-gray-600 font-medium text-sm">
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