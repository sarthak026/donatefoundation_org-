
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Image as ImageIcon, Play, Calendar, MapPin, Users, Clock, Award, Target } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const PhotoVideoGallery: React.FC = () => {
  const [activeGallery, setActiveGallery] = useState<'images' | 'videos'>('images');
  
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&auto=format&q=80",
      alt: "Organ donation awareness rally",
      caption: "Annual Awareness Rally 2024",
      description: "Over 5,000 participants gathered at India Gate for our largest awareness campaign, featuring survivor stories and interactive booths.",
      date: "March 15, 2024",
      location: "New Delhi",
      participants: "5,000+"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&auto=format&q=80",
      alt: "Hospital donation drive",
      caption: "Hospital Partnership Drive",
      description: "Collaboration with 25 major hospitals across Mumbai to establish organ donation protocols and train medical staff.",
      date: "February 8, 2024",
      location: "Mumbai",
      participants: "500+ medical professionals"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&auto=format&q=80",
      alt: "Student participation event",
      caption: "Youth Ambassador Program",
      description: "Launch of our youth program with 200 college students becoming certified organ donation advocates for their communities.",
      date: "January 20, 2024",
      location: "Bangalore",
      participants: "200 students"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&auto=format&q=80",
      alt: "Community awareness event",
      caption: "Community Outreach Program",
      description: "Rural awareness campaign reaching 15 villages with culturally sensitive education about organ donation myths and facts.",
      date: "December 10, 2023",
      location: "Rural Punjab",
      participants: "3,000+ villagers"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&q=80",
      alt: "Medical conference",
      caption: "Medical Professional Conference",
      description: "International conference bringing together transplant surgeons, coordinators, and ethicists to share best practices.",
      date: "November 25, 2023",
      location: "Chennai",
      participants: "150 experts"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&auto=format&q=80",
      alt: "Volunteer training",
      caption: "Volunteer Training Session",
      description: "Comprehensive training for 100 new volunteers on grief counseling, family support, and donation coordination.",
      date: "October 15, 2023",
      location: "Hyderabad",
      participants: "100 volunteers"
    }
  ];

  const galleryVideos = [
    {
      id: 1,
      thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&auto=format&q=80",
      title: "Awareness Rally Highlights",
      duration: "3:45",
      description: "Emotional moments from our biggest awareness event, featuring donor families sharing their stories of hope and healing.",
      views: "125K views"
    },
    {
      id: 2,
      thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&auto=format&q=80",
      title: "Donor Stories Documentary",
      duration: "8:20",
      description: "A powerful documentary following three families through their organ donation journey, from decision to impact.",
      views: "89K views"
    },
    {
      id: 3,
      thumbnail: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&auto=format&q=80",
      title: "Youth Program Overview",
      duration: "5:15",
      description: "Young ambassadors share their experiences spreading organ donation awareness in their colleges and communities.",
      views: "67K views"
    },
    {
      id: 4,
      thumbnail: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&auto=format&q=80",
      title: "Community Impact Stories",
      duration: "6:30",
      description: "Rural communities breaking myths and embracing organ donation through education and cultural sensitivity.",
      views: "45K views"
    },
    {
      id: 5,
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&q=80",
      title: "Medical Professional Training",
      duration: "12:15",
      description: "Behind-the-scenes look at how medical professionals are trained in organ procurement and transplantation procedures.",
      views: "23K views"
    },
    {
      id: 6,
      thumbnail: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&auto=format&q=80",
      title: "Volunteer Success Stories",
      duration: "7:45",
      description: "Inspiring stories from volunteers who coordinate donations and support families during their most difficult times.",
      views: "34K views"
    }
  ];

  // Featured Past Events with detailed content
  const pastEvents = [
    {
      id: 1,
      title: "Hope Festival 2023 - Breaking Barriers",
      date: "August 15, 2023",
      location: "Kolkata, West Bengal",
      description: "Our flagship annual event that brought together 8,000 participants from across Eastern India. The festival featured cultural performances, medical camps, and powerful testimonials from organ recipients and donor families.",
      highlights: [
        "1,200 new organ donation pledges registered",
        "Free health screenings for 2,500 attendees",
        "Live performances by transplant recipients",
        "Interactive myth-busting sessions"
      ],
      impact: "This event led to a 40% increase in organ donation registrations in West Bengal",
      photos: [
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&auto=format&q=80",
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&auto=format&q=80",
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&auto=format&q=80"
      ],
      videoUrl: "https://www.youtube.com/watch?v=example1"
    },
    {
      id: 2,
      title: "Rural Outreach Mission - Bridging Communities",
      date: "June 22, 2023",
      location: "15 Villages across Rajasthan",
      description: "A groundbreaking 10-day mission that reached remote villages in Rajasthan, addressing cultural myths and misconceptions about organ donation through culturally sensitive education programs.",
      highlights: [
        "15 villages covered across rural Rajasthan",
        "Community leaders and religious heads engaged",
        "Translated materials in local dialects",
        "Mobile health units provided free check-ups"
      ],
      impact: "First-ever organ donation pledges from rural Rajasthan communities",
      photos: [
        "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&auto=format&q=80",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&auto=format&q=80",
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&auto=format&q=80"
      ],
      videoUrl: "https://www.youtube.com/watch?v=example2"
    },
    {
      id: 3,
      title: "Corporate Partnership Summit 2023",
      date: "April 10, 2023",
      location: "Pune, Maharashtra",
      description: "A strategic summit bringing together 50+ corporate leaders to integrate organ donation awareness into workplace wellness programs and CSR initiatives.",
      highlights: [
        "50+ corporate partnerships established",
        "Employee wellness programs launched",
        "Workplace organ donation drives initiated",
        "Corporate volunteer program created"
      ],
      impact: "25,000+ employees across partner companies received organ donation education",
      photos: [
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&auto=format&q=80",
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&auto=format&q=80",
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&auto=format&q=80"
      ],
      videoUrl: "https://www.youtube.com/watch?v=example3"
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
    <section className="py-16 bg-gradient-to-b from-white to-teal-50/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full mb-6">
            <ImageIcon className="h-4 w-4" />
            <span className="font-medium">Our Journey in Pictures & Videos</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gray-800">
            Photos and Videos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our visual journey through organ donation awareness campaigns, life-changing events, and inspiring success stories that have touched thousands of lives.
          </p>
        </div>

        {/* Gallery Toggle */}
        <div className="text-center mb-8">
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
              Event Photos
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
              Video Stories
            </button>
          </div>
        </div>

        {/* Image Gallery Slider */}
        {activeGallery === 'images' && (
          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden rounded-2xl" ref={imageEmblaRef}>
              <div className="flex">
                {galleryImages.map((image) => (
                  <div key={image.id} className="flex-[0_0_100%] min-w-0 relative">
                    <div className="relative h-96 md:h-[500px] overflow-hidden rounded-2xl">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h4 className="text-2xl font-bold mb-2">{image.caption}</h4>
                        <p className="text-gray-200 mb-4 leading-relaxed">{image.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{image.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{image.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span>{image.participants}</span>
                          </div>
                        </div>
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
                {galleryVideos.map((video) => (
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
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 text-white">
                        <h4 className="text-2xl font-bold mb-2">{video.title}</h4>
                        <p className="text-gray-200 mb-3 leading-relaxed">{video.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-teal-300 font-medium">{video.duration}</span>
                          <span className="text-gray-300 text-sm">{video.views}</span>
                        </div>
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

        {/* Featured Past Events Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-800">
              Featured Past Events
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Detailed insights into our most impactful events that have shaped communities and saved lives
            </p>
          </div>

          <div className="space-y-12">
            {pastEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                  {/* Event Content */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-2xl font-bold text-gray-800 mb-2">{event.title}</h4>
                      <div className="flex items-center gap-4 text-gray-600 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{event.description}</p>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <Target className="h-5 w-5 text-teal-600" />
                        Event Highlights
                      </h5>
                      <ul className="space-y-2">
                        {event.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-700">
                            <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-4 rounded-xl border border-teal-100">
                      <h5 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                        <Award className="h-5 w-5 text-teal-600" />
                        Impact Achieved
                      </h5>
                      <p className="text-gray-700">{event.impact}</p>
                    </div>

                    <div className="flex items-center gap-4">
                      <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                        <Play className="h-4 w-4 mr-2" />
                        Watch Video
                      </Button>
                      <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
                        View Gallery
                      </Button>
                    </div>
                  </div>

                  {/* Event Photos */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      {event.photos.slice(0, 2).map((photo, index) => (
                        <div key={index} className="aspect-video rounded-xl overflow-hidden">
                          <img
                            src={photo}
                            alt={`${event.title} photo ${index + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="aspect-video rounded-xl overflow-hidden">
                      <img
                        src={event.photos[2]}
                        alt={`${event.title} photo 3`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Summary */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Our Past Events Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">50+</div>
                <div className="text-gray-600">Events Organized</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">25,000+</div>
                <div className="text-gray-600">People Reached</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">1,200+</div>
                <div className="text-gray-600">New Donors Registered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">15</div>
                <div className="text-gray-600">Cities Covered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoVideoGallery;
