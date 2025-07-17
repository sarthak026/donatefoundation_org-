import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContentContainer from '../common/ContentContainer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
const stories = [{
  id: 1,
  name: "Arjun Sharma",
  age: 32,
  story: "After receiving a heart transplant, I can now play with my children again. Every day is a gift I cherish.",
  image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=500&auto=format",
  organType: "Heart"
}, {
  id: 2,
  name: "Priya Malhotra",
  age: 28,
  story: "My mother's cornea donation helped two people see again. Her legacy continues through their vision.",
  image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&auto=format",
  organType: "Cornea"
}, {
  id: 3,
  name: "Rajesh Kumar",
  age: 45,
  story: "The kidney donation from my brother gave me a second chance at life. Now I volunteer to spread awareness.",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format",
  organType: "Kidney"
}];
const ImpactStories: React.FC = () => {
  return <ContentContainer className="bg-gradient-to-b from-white to-primary/5 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">Life-Changing Impact</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          These are the real stories of donors and recipients whose lives have been transformed through the gift of donation.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stories.map(story => <Card key={story.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="h-48 overflow-hidden">
              
            </div>
            <CardHeader>
              <CardTitle>{story.name}, {story.age}</CardTitle>
              <CardDescription className="text-secondary font-medium">{story.organType} Recipient</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{story.story}</p>
            </CardContent>
            <CardFooter className="border-t pt-4">
              <Link to="/what-we-do" className="text-primary hover:text-primary/80 font-medium flex items-center">
                Read full story <ArrowRight size={16} className="ml-1" />
              </Link>
            </CardFooter>
          </Card>)}
      </div>

      <div className="text-center mt-10">
        <Link to="/what-we-do" className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
          View all impact stories <ArrowRight size={18} className="ml-1" />
        </Link>
      </div>
    </ContentContainer>;
};
export default ImpactStories;