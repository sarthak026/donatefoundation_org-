
import React from 'react';
import ContentContainer from '../common/ContentContainer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Heart, Camera, Video, Award, Play } from 'lucide-react';

const PastEvents: React.FC = () => {
  const eventPhotos = [
    {
      id: 1,
      src: "/lovable-uploads/ae051478-e150-478c-aeb5-0ea9ae89102e.png",
      title: "Community Awareness Campaign 2024",
      description: "Large community gathering spreading organ donation awareness with volunteers and participants wearing DONATE Foundation t-shirts.",
      event: "Hope Festival 2024",
      date: "March 2024",
      location: "Mumbai, Maharashtra"
    },
    {
      id: 2,
      src: "/lovable-uploads/c64c3ab2-a104-47fc-9613-24e5baeeacb7.png",
      title: "One-on-One Consultation Session",
      description: "Personal consultation and counseling session to educate individuals about organ donation benefits and processes.",
      event: "Rural Outreach Program",
      date: "February 2024",
      location: "Various Villages"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <ContentContainer>
        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 w-32 h-32 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full opacity-20 blur-xl"></div>
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 relative">
            <Camera className="h-4 w-4" />
            <span className="font-medium">Our Journey Documented</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-800 relative">
            Past Events & Impact Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto relative">
            Witness the transformative power of community engagement through our documented journey of spreading organ donation awareness across India.
          </p>
        </div>

        {/* Photos Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
              <Camera className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Event Photos</h3>
              <p className="text-gray-600">Capturing moments that matter</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {eventPhotos.map((photo) => (
              <Card key={photo.id} className="overflow-hidden shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={photo.src} 
                    alt={photo.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800 hover:bg-white">
                    <Award className="h-3 w-3 mr-1" />
                    Featured Event
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <Badge variant="outline" className="text-primary border-primary/20">
                      <Calendar className="h-3 w-3 mr-1" />
                      {photo.date}
                    </Badge>
                    <Badge variant="outline" className="text-secondary border-secondary/20">
                      <MapPin className="h-3 w-3 mr-1" />
                      {photo.location}
                    </Badge>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{photo.title}</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">{photo.description}</p>
                  
                  <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-4 rounded-xl border border-primary/10">
                    <div className="flex items-center gap-2 text-primary font-semibold">
                      <Heart className="h-4 w-4" />
                      <span>{photo.event}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Videos Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center">
              <Video className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Event Videos</h3>
              <p className="text-gray-600">Stories that inspire action</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-12 text-center border border-gray-200">
            <div className="max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Play className="h-10 w-10 text-white ml-1" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Video Gallery Coming Soon</h4>
              <p className="text-gray-600 mb-6">
                We're preparing inspiring video content showcasing our community events, success stories, and the impact of organ donation awareness.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-gradient-to-r from-secondary to-primary text-white px-6 py-3 rounded-full hover:shadow-lg transition-all">
                  Subscribe for Updates
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-50 transition-all">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Join Our Next Event</h3>
            <p className="text-white/90 mb-6 text-lg">
              Be part of our mission to save lives. Stay updated with our upcoming events and initiatives.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-primary px-8 py-3 rounded-full hover:bg-white/90 transition-all font-semibold">
                Get Event Updates
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-full hover:bg-white/10 transition-all font-semibold">
                Download Calendar
              </button>
            </div>
          </div>
        </div>
      </ContentContainer>
    </section>
  );
};

export default PastEvents;
