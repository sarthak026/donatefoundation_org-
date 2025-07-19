import React from 'react';
import ContentContainer from '../components/common/ContentContainer';
import { Card, CardContent } from '@/components/ui/card';
import { Camera } from 'lucide-react';

const Gallery: React.FC = () => {
  const Photos = [
    {
      id: 1,
      src: "/lovable-uploads/254d10a2-79a1-4365-9fb3-d9dd964afd0e.png",
      title: "Community Awareness Drive",
      description: "Engaging with youth and volunteers about organ donation"
    },
    {
      id: 2,
      src: "/lovable-uploads/e0f53023-698d-432d-97c8-689af2f235de.png",
      title: "Educational Workshop",
      description: "Interactive session with community members"
    },
    {
      id: 3,
      src: "/lovable-uploads/f1ff8a96-c999-4319-aade-e4a5cee10edf.png",
      title: "Mission Outreach",
      description: "Spreading awareness about saving lives together"
    },
    {
      id: 4,
      src: "/lovable-uploads/7f33df0a-fc8e-4ecb-ac01-2d158466dbec.png",
      title: "Team Building Event",
      description: "Volunteers coming together for the cause"
    },
    {
      id: 5,
      src: "/lovable-uploads/05135849-ef60-4f5f-a5d9-652674e0492b.png",
      title: "Community Dialogue",
      description: "One-on-one conversations about organ donation"
    },
    {
      id: 6,
      src: "/lovable-uploads/2c805cd6-bd0d-4f2c-bfc8-1771623cf03e.png",
      title: "Awareness Campaign",
      description: "Building connections and saving lives together"
    }
  ];
  
  const Videos = [
    {
      id: 1,
      link: "WhatsApp Video 2025-07-10 at 16.41.54_6aa263c7.mp4",
      title: "Community Impact Video",
      description: "Highlights from recent awareness programs."
    },
    {
      id: 2,
      link: "WhatsApp Video 2025-07-10 at 16.41.54_6aa263c7.mp4",
      title: "Volunteer Testimonials",
      description: "Stories from our volunteers and donors."
    },
    // Add more videos as needed
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative pt-24 pb-20 bg-gradient-to-br from-primary via-primary/90 to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-secondary/95"></div>
        <div className="absolute inset-0 opacity-20">
          <img
            src="public/lovable-uploads/2c805cd6-bd0d-4f2c-bfc8-1771623cf03e.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <ContentContainer>
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <Camera className="h-4 w-4" />
              <span className="font-medium">Our Gallery</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-8 text-white">
              Moments of Impact
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Explore photos and videos from our programs, events, and community initiatives.
            </p>
          </div>
        </ContentContainer>
      </div>

      {/* Photos Section */}
      <ContentContainer className="py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">Event Photos</h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Capturing the spirit of our community engagement.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Photos.map((photo) => (
            <Card
              key={photo.id}
              className="overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-1 border-0 rounded-xl"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{photo.title}</h4>
                <p className="text-gray-600 text-sm">{photo.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </ContentContainer>

      {/* Videos Section */}
      <ContentContainer className="py-16 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">Event Videos</h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Watch highlights from our recent programs and events.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Videos.map((video) => (
            <Card
              key={video.id}
              className="overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-1 border-0 rounded-xl"
            >
              <div className="aspect-video">
                <iframe
                  src={video.link}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <CardContent className="p-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{video.title}</h4>
                <p className="text-gray-600 text-sm">{video.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </ContentContainer>
    </>
  );
};

export default Gallery;
