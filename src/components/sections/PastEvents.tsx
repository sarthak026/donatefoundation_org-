
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Camera, Video, Play } from 'lucide-react';

const PastEvents: React.FC = () => {
  const eventPhotos = [
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

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 via-white to-orange-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Camera className="h-4 w-4" />
            <span className="font-medium">Our Journey</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Past Events & Impact Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Witness the transformative power of community engagement through our documented journey of spreading organ donation awareness.
          </p>
        </div>

        {/* Photos Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Camera className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">Event Photos</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventPhotos.map((photo) => (
              <Card key={photo.id} className="overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 rounded-xl">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={photo.src} 
                    alt={photo.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <CardContent className="p-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{photo.title}</h4>
                  <p className="text-gray-600 text-sm">{photo.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Videos Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-secondary/10 rounded-lg">
              <Video className="h-5 w-5 text-secondary" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">Event Videos</h3>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-md border border-gray-100">
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="h-8 w-8 text-secondary" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Video Content Coming Soon</h4>
              <p className="text-gray-600">
                We're preparing inspiring video content from our past events to share with you.
              </p>
            </div>
          </div>
        </div>

        {/* Impact Summary */}
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Collective Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">5,000+</div>
                <div className="text-primary-foreground/80">People Reached</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">250+</div>
                <div className="text-primary-foreground/80">New Donors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">15</div>
                <div className="text-primary-foreground/80">Communities Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastEvents;
