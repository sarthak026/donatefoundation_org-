
import React, { useState } from 'react';
import ContentContainer from '../common/ContentContainer';
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Map as MapIcon, CirclePercent, ArrowUp } from "lucide-react";

// Main statistics data
const yearlyStats = [
  {
    number: '39,415',
    description: 'Total organ transplants in 2023',
    color: 'bg-primary',
    increase: '+6.3%',
  },
  {
    number: '17,424',
    description: 'Deceased donors in 2023',
    color: 'bg-secondary',
    increase: '+3.6%',
  },
  {
    number: '4.5',
    description: 'Transplants per hour',
    color: 'bg-blue-500',
    increase: '+0.4',
  },
  {
    number: '104,000+',
    description: 'People on waiting list',
    color: 'bg-purple-500',
    increase: '-1.2%',
  },
];

// Organ transplant percentage data
const transplantData = [
  { name: 'Kidney', value: 58, color: '#F97316' },
  { name: 'Liver', value: 23, color: '#FACC15' },
  { name: 'Heart', value: 9, color: '#84CC16' },
  { name: 'Lung', value: 7, color: '#10B981' },
  { name: 'Other', value: 3, color: '#3B82F6' },
];

const Stats: React.FC = () => {
  const [activeYear, setActiveYear] = useState('2023');

  return (
    <>
      {/* Top Statistics Bar */}
      <div className="w-full bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <ContentContainer>
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-2">Organ Donation Impact</h2>
            <p className="text-white/90 max-w-3xl mx-auto">
              Every donation transforms lives. These statistics highlight the critical importance of donors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {yearlyStats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all hover:scale-105"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`${stat.color} h-3 w-3 rounded-full`}></div>
                  <div className="flex items-center text-sm font-medium">
                    <ArrowUp className="h-3 w-3 mr-1" /> 
                    <span>{stat.increase}</span>
                  </div>
                </div>
                <p className="text-4xl md:text-5xl font-display font-bold mb-2">{stat.number}</p>
                <p className="text-lg text-white/80">{stat.description}</p>
              </div>
            ))}
          </div>
        </ContentContainer>
      </div>

      {/* Infographic & Map Section */}
      <ContentContainer className="py-20">
        <Tabs defaultValue="transplants" className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <h2 className="text-3xl font-display font-semibold mb-4 md:mb-0">Donation Statistics</h2>
            <TabsList className="bg-muted/50">
              <TabsTrigger value="transplants" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                Transplant Types
              </TabsTrigger>
              <TabsTrigger value="geographics" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                Geographic Data
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="transplants" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center gap-2 mb-6">
                  <CirclePercent className="text-primary h-5 w-5" />
                  <h3 className="text-xl font-semibold">Organ Transplant Types</h3>
                </div>
                
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={transplantData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={90}
                        paddingAngle={3}
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}%`}
                        labelLine={false}
                      >
                        {transplantData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} className="hover:opacity-80 transition-opacity" />
                        ))}
                      </Pie>
                      <ChartTooltip content={<ChartTooltipContent />} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="mt-4 space-y-4">
                  {transplantData.map((item, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center">
                          <div className="h-3 w-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                          <span className="text-gray-700">{item.name} Transplants</span>
                        </div>
                        <span className="text-primary font-semibold">{item.value}%</span>
                      </div>
                      <Progress value={item.value} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center gap-2 mb-6">
                  <MapIcon className="text-primary h-5 w-5" />
                  <h3 className="text-xl font-semibold">Regional Highlights</h3>
                </div>
                
                {/* Map visualization placeholder */}
                <div className="h-[300px] bg-white rounded-lg border border-gray-200 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80')]"></div>
                  <div className="text-center p-4 relative">
                    <div className="text-xl font-semibold mb-2">Global Donation Network</div>
                    <p className="text-gray-500 mb-4">Visualization of international donation partnerships</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">India</div>
                      <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">USA</div>
                      <div className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">UK</div>
                      <div className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">Australia</div>
                      <div className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">+20 more</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">New Delhi Region</span>
                      <span className="text-primary font-semibold">2,485 donations</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">Mumbai Region</span>
                      <span className="text-primary font-semibold">1,974 donations</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">Chennai Region</span>
                      <span className="text-primary font-semibold">1,426 donations</span>
                    </div>
                    <Progress value={43} className="h-2" />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="geographics" className="mt-0">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6">International Cooperation</h3>
              <p className="text-gray-700 mb-6">
                DonateLife Foundation collaborates with international organizations to share best 
                practices and improve organ donation processes globally. Our partnerships span across
                multiple continents with a focus on training, research, and awareness campaigns.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-5 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="text-xl font-semibold mb-2">Asia Pacific</div>
                  <p className="text-gray-600 mb-4">Partnerships with 12 countries focusing on living donor programs</p>
                  <div className="text-primary font-medium">42 hospitals</div>
                </div>
                
                <div className="bg-white p-5 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="text-xl font-semibold mb-2">Europe & Americas</div>
                  <p className="text-gray-600 mb-4">Technology exchange programs and research collaboration</p>
                  <div className="text-primary font-medium">37 organizations</div>
                </div>
                
                <div className="bg-white p-5 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="text-xl font-semibold mb-2">Africa & Middle East</div>
                  <p className="text-gray-600 mb-4">Training programs and infrastructure development support</p>
                  <div className="text-primary font-medium">18 initiatives</div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </ContentContainer>
      
      <div className="bg-gray-50 py-8">
        <ContentContainer>
          <div className="text-center text-gray-600 max-w-2xl mx-auto">
            <p>Source: National Organ & Tissue Transplant Organization (NOTTO), Ministry of Health and Family Welfare, Government of India and Global Observatory on Donation and Transplantation (GODT)</p>
          </div>
        </ContentContainer>
      </div>
    </>
  );
};

export default Stats;
