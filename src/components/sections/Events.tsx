
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Calendar, MapPin, Users, Play, Image as ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const Events: React.FC = () => {
  const [activeGallery, setActiveGallery] = useState<'images' | 'videos'>('images');
  
  // Authentic NGO event images
  const pastEventImages = [
    {
      id: 1,
      src: "/lovable-uploads/254d10a2-79a1-4365-9fb3-d9dd964afd0e.png",
      alt: "Community awareness drive with youth engagement",
      caption: "Youth Awareness Drive 2024"
    },
    {
      id: 2,
      src: "/lovable-uploads/e0f53023-698d-432d-97c8-689af2f235de.png",
      alt: "Educational workshop with community members",
      caption: "Educational Workshop Series"
    },
    {
      id: 3,
      src: "/lovable-uploads/f1ff8a96-c999-4319-aade-e4a5cee10edf.png",
      alt: "Mission outreach and awareness campaign",
      caption: "Mission Outreach Campaign"
    },
    {
      id: 4,
      src: "/lovable-uploads/7f33df0a-fc8e-4ecb-ac01-2d158466dbec.png",
      alt: "Team building and volunteer engagement",
      caption: "Volunteer Team Building Event"
    },
    {
      id: 5,
      src: "/lovable-uploads/05135849-ef60-4f5f-a5d9-652674e0492b.png",
      alt: "One-on-one community dialogue sessions",
      caption: "Community Dialogue Sessions"
    },
    {
      id: 6,
      src: "/lovable-uploads/2c805cd6-bd0d-4f2c-bfc8-1771623cf03e.png",
      alt: "Building connections and awareness together",
      caption: "Community Connection Building"
    }
  ];

  const pastEventVideos = [
    {
      id: 1,
      thumbnail: "/lovable-uploads/254d10a2-79a1-4365-9fb3-d9dd964afd0e.png",
      title: "Youth Awareness Campaign Highlights",
      duration: "3:45"
    },
    {
      id: 2,
      thumbnail: "/lovable-uploads/e0f53023-698d-432d-97c8-689af2f235de.png",
      title: "Educational Workshop Documentary",
      duration: "8:20"
    },
    {
      id: 3,
      thumbnail: "/lovable-uploads/f1ff8a96-c999-4319-aade-e4a5cee10edf.png",
      title: "Mission Outreach Overview",
      duration: "5:15"
    },
    {
      id: 4,
      thumbnail: "/lovable-uploads/7f33df0a-fc8e-4ecb-ac01-2d158466dbec.png",
      title: "Volunteer Stories & Impact",
      duration: "6:30"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "National Organ Donation Day Celebration",
      date: "June 15, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Mumbai Central Park",
      description: "Join us for a day of awareness activities, testimonials, and community engagement to promote organ donation.",
      attendees: 500,
      registrationOpen: true
    },
    {
      id: 2,
      title: "Medical Professional Workshop",
      date: "July 8, 2025",
      time: "2:00 PM - 6:00 PM",
      location: "All India Institute of Medical Sciences",
      description: "Training workshop for healthcare professionals on organ donation protocols and family counseling.",
      attendees: 150,
      registrationOpen: true
    },
    {
      id: 3,
      title: "Youth Ambassador Training Program",
      date: "August 12-14, 2025",
      time: "9:00 AM - 5:00 PM (3 days)",
      location: "Delhi University Campus",
      description: "Intensive training for college students to become organ donation advocates in their communities.",
      attendees: 200,
      registrationOpen: false
    },
    {
      id: 4,
      title: "Family Discussion Workshop",
      date: "September 5, 2025",
      time: "11:00 AM - 3:00 PM",
      location: "Bangalore Community Center",
      description: "Workshop to help families have meaningful conversations about organ donation decisions.",
      attendees: 100,
      registrationOpen: true
    }
  ];

  const [imageEmblaRef, imageEmblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const [videoEmblaRef, videoEmblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  return (
    <section className="py-16 bg-gradient-to-b from-teal-50/30 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gray-800">
            News and Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with our latest news, discover our past achievements, and join us in upcoming events that make a difference in organ donation awareness.
          </p>
        </div>

        {/* Upcoming Events Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display font-semibold mb-4 text-gray-800">Upcoming Events</h3>
            <p className="text-lg text-gray-600">Join us in making a difference through these upcoming initiatives</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden group hover:-translate-y-2">
                <CardHeader className="bg-gradient-to-r from-teal-500 to-teal-600 text-white">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl font-semibold mb-2 text-white">
                        {event.title}
                      </CardTitle>
                      <div className="flex items-center gap-4 text-teal-100">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">{event.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span className="text-sm">{event.attendees}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="h-4 w-4 text-teal-500" />
                      <span className="font-medium">{event.time}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="h-4 w-4 text-teal-500" />
                      <span>{event.location}</span>
                    </div>
                    
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {event.description}
                    </CardDescription>
                    
                    <div className="pt-4">
                      {event.registrationOpen ? (
                        <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white rounded-xl py-3 font-medium transition-all duration-200 hover:shadow-lg">
                          Register Now
                        </Button>
                      ) : (
                        <Button variant="outline" className="w-full border-gray-300 text-gray-600 rounded-xl py-3 font-medium" disabled>
                          Registration Closed
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Past Events Section */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-3xl font-display font-semibold mb-4 text-gray-800">Past Events</h3>
            
            {/* Gallery Toggle */}
            <div className="inline-flex bg-white rounded-2xl p-1 shadow-md border border-gray-200">
              <button
                onClick={() => setActiveGallery('images')}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeGallery === 'images'
                    ? 'bg-teal-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-teal-600'
                }`}
              >
                <ImageIcon className="h-5 w-5" />
                Pictures
              </button>
              <button
                onClick={() => setActiveGallery('videos')}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeGallery === 'videos'
                    ? 'bg-teal-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-teal-600'
                }`}
              >
                <Play className="h-5 w-5" />
                Videos
              </button>
            </div>
          </div>

          {/* Image Gallery Slider */}
          {activeGallery === 'images' && (
            <div className="relative max-w-6xl mx-auto">
              <div className="overflow-hidden rounded-2xl" ref={imageEmblaRef}>
                <div className="flex">
                  {pastEventImages.map((image) => (
                    <div key={image.id} className="flex-[0_0_100%] min-w-0 relative">
                      <div className="relative h-96 md:h-[500px] overflow-hidden rounded-2xl">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                          <h4 className="text-white text-xl font-semibold">{image.caption}</h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Navigation Arrows */}
              <button
                onClick={() => imageEmblaApi?.scrollPrev()}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => imageEmblaApi?.scrollNext()}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          )}

          {/* Video Gallery Slider */}
          {activeGallery === 'videos' && (
            <div className="relative max-w-6xl mx-auto">
              <div className="overflow-hidden rounded-2xl" ref={videoEmblaRef}>
                <div className="flex">
                  {pastEventVideos.map((video) => (
                    <div key={video.id} className="flex-[0_0_100%] min-w-0 relative">
                      <div className="relative h-96 md:h-[500px] overflow-hidden rounded-2xl cursor-pointer group">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <div className="bg-white/90 rounded-full p-6 group-hover:scale-110 transition-transform duration-200">
                            <Play className="h-8 w-8 text-teal-600 ml-1" fill="currentColor" />
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                          <h4 className="text-white text-xl font-semibold mb-1">{video.title}</h4>
                          <p className="text-white/80">{video.duration}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Navigation Arrows */}
              <button
                onClick={() => videoEmblaApi?.scrollPrev()}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => videoEmblaApi?.scrollNext()}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Events;
