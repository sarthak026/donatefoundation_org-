
import React from 'react';
import ContentContainer from '../common/ContentContainer';
import { Progress } from "@/components/ui/progress";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Heart, Users, Activity, Clock } from "lucide-react";

// Simplified main statistics data
const keyStats = [
  {
    number: '39,415',
    description: 'Lives Saved in 2023',
    icon: Heart,
    color: 'from-red-500 to-pink-500',
    increase: '+6.3%',
  },
  {
    number: '17,424',
    description: 'Generous Donors',
    icon: Users,
    color: 'from-blue-500 to-teal-500',
    increase: '+3.6%',
  },
  {
    number: '4.5',
    description: 'Transplants per Hour',
    icon: Activity,
    color: 'from-green-500 to-emerald-500',
    increase: '+0.4',
  },
  {
    number: '104K+',
    description: 'Awaiting Hope',
    icon: Clock,
    color: 'from-orange-500 to-yellow-500',
    increase: 'Need grows',
  },
];

// Simplified organ transplant data
const organData = [
  { name: 'Kidney', value: 58, color: '#10B981' },
  { name: 'Liver', value: 23, color: '#F59E0B' },
  { name: 'Heart', value: 9, color: '#EF4444' },
  { name: 'Lung', value: 7, color: '#8B5CF6' },
  { name: 'Other', value: 3, color: '#6B7280' },
];

const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-teal-50 via-white to-blue-50">
      <ContentContainer>
        {/* Hero Stats Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full mb-6">
            <Heart className="h-4 w-4" />
            <span className="font-medium">Making a Difference Together</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-800">
            Organ Donation Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every donation transforms lives. These statistics highlight the critical importance of donors.
          </p>
        </div>

        {/* Key Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {keyStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index} 
                className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} text-white`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                        {stat.increase}
                      </span>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.description}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Organ Types Visualization */}
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-display font-bold mb-2 text-gray-800">Organ Distribution</h3>
            <p className="text-gray-600">Understanding the types of life-saving transplants</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Chart */}
            <div className="relative">
              <div className="h-64 w-64 mx-auto">
                <ChartContainer config={{}}>
                  <PieChart width={256} height={256}>
                    <Pie
                      data={organData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {organData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </PieChart>
                </ChartContainer>
              </div>
            </div>
            
            {/* Legend */}
            <div className="space-y-4">
              {organData.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-4 h-4 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="font-medium text-gray-700">{item.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-gray-800">{item.value}%</span>
                    <div className="w-16">
                      <Progress value={item.value} className="h-2" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Be Part of the Solution</h3>
            <p className="text-lg mb-6 text-teal-50">
              One organ donor can save up to 8 lives and enhance the lives of more than 75 people through tissue donation.
            </p>
            <div className="inline-flex items-center gap-2 bg-white text-teal-600 px-6 py-3 rounded-full font-semibold hover:bg-teal-50 transition-colors cursor-pointer">
              <Heart className="h-5 w-5" />
              Learn How You Can Help
            </div>
          </div>
        </div>
      </ContentContainer>
    </section>
  );
};

export default Stats;
