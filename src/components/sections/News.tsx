
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import ContentContainer from '../common/ContentContainer';

// Mock news data
const newsItems = [
  {
    id: 1,
    title: 'Annual DonateLife Walk Raises Record Funds in Mumbai',
    excerpt: 'Over 2,000 participants joined our annual awareness walk, raising ₹10 lakh for donor family support programs.',
    date: 'May 15, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952',
    category: 'Events'
  },
  {
    id: 2,
    title: 'New Hospital Partnership Expands Outreach in Delhi',
    excerpt: 'DonateLife Foundation partners with AIIMS Delhi to provide on-site counseling for families considering organ donation.',
    date: 'April 28, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528',
    category: 'Partnerships'
  },
  {
    id: 3,
    title: 'Tissue Donation: The Gift That Heals',
    excerpt: 'Learn how tissue donation helped Anil recover from a serious sports injury and return to his passion for cricket.',
    date: 'April 10, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b',
    category: 'Stories'
  },
];

const News: React.FC = () => {
  return (
    <ContentContainer>
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 md:mb-0">Latest Updates</h2>
        <Link to="/resources" className="flex items-center text-primary font-medium hover:underline">
          View All Updates <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {newsItems.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md border border-gray-100">
            <div className="h-52 overflow-hidden">
              <img 
                src={`${item.imageUrl}?w=600&auto=format&q=75`} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">{item.category}</span>
                <div className="flex items-center text-gray-500 text-sm ml-3">
                  <Calendar size={14} className="mr-1" />
                  {item.date}
                </div>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.excerpt}</p>
              <Link to={`/resources/news/${item.id}`} className="text-primary font-medium hover:underline inline-flex items-center">
                Read more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </ContentContainer>
  );
};

export default News;
