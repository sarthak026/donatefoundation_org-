
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, BookOpen, Users, Heart } from 'lucide-react';
import ContentContainer from '../common/ContentContainer';

// News data with authentic NGO images
const newsItems = [
  {
    id: 1,
    title: 'Community Awareness Drive Reaches 500+ Participants',
    excerpt: 'Our youth engagement program successfully spread organ donation awareness across multiple communities.',
    date: 'May 15, 2025',
    imageUrl: '/lovable-uploads/254d10a2-79a1-4365-9fb3-d9dd964afd0e.png',
    category: 'Events',
    icon: Users
  },
  {
    id: 2,
    title: 'Educational Workshop Series Shows Promising Results',
    excerpt: 'Interactive sessions with community members have led to increased understanding and organ donor registrations.',
    date: 'April 28, 2025',
    imageUrl: '/lovable-uploads/e0f53023-698d-432d-97c8-689af2f235de.png',
    category: 'Education',
    icon: BookOpen
  },
  {
    id: 3,
    title: 'Volunteer Team Building Creates Stronger Bonds',
    excerpt: 'Our dedicated volunteers came together to strengthen their commitment to saving lives through organ donation advocacy.',
    date: 'April 10, 2025',
    imageUrl: '/lovable-uploads/7f33df0a-fc8e-4ecb-ac01-2d158466dbec.png',
    category: 'Stories',
    icon: Heart
  },
];

const News: React.FC = () => {
  return (
    <ContentContainer className="py-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
          <BookOpen className="h-4 w-4" />
          <span className="font-medium">Latest Updates</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">News & Announcements</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Stay informed about our latest initiatives, success stories, and community impact
        </p>
        <Link to="/resources" className="inline-flex items-center text-primary font-medium hover:underline">
          View All Updates <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {newsItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <div key={item.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all hover:shadow-xl border-0 hover:-translate-y-2 duration-300">
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <IconComponent className="h-4 w-4 text-primary" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">{item.category}</span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {item.date}
                  </div>
                </div>
                <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{item.excerpt}</p>
                <Link 
                  to={`/resources/news/${item.id}`} 
                  className="inline-flex items-center text-primary font-medium hover:underline group-hover:gap-2 transition-all"
                >
                  Read more <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </ContentContainer>
  );
};

export default News;
