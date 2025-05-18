
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ContentContainer from '../common/ContentContainer';

// Mock news data
const newsItems = [
  {
    id: 1,
    title: 'Annual DonateLife Walk Raises Record Funds',
    excerpt: 'Over 2,000 participants joined our annual awareness walk, raising $150,000 for donor family support programs.',
    date: 'May 15, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952',
  },
  {
    id: 2,
    title: 'New Hospital Partnership Expands Outreach',
    excerpt: 'DonateLife Foundation partners with Central Medical Center to provide on-site counseling for families.',
    date: 'April 28, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528',
  },
  {
    id: 3,
    title: 'Tissue Donation: The Gift That Heals',
    excerpt: 'Learn how tissue donation helped Mark recover from a serious sports injury and return to his passion.',
    date: 'April 10, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b',
  },
];

const News: React.FC = () => {
  return (
    <ContentContainer>
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-semibold">Latest News</h2>
        <Link to="/resources" className="flex items-center text-primary font-medium hover:underline">
          View All <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {newsItems.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md">
            <div className="h-48 overflow-hidden">
              <img 
                src={`${item.imageUrl}?w=600&auto=format&q=75`} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="p-6">
              <p className="text-gray-500 text-sm mb-2">{item.date}</p>
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
