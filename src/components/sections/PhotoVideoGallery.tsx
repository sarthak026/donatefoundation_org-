
import React from 'react';
import ContentContainer from '../common/ContentContainer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Heart, Camera, Video, Award, Play, Image as ImageIcon } from 'lucide-react';

const PhotoVideoGallery: React.FC = () => {
  const donateFoundationPhotos = [
    {
      id: 1,
      src: "/lovable-uploads/da3607ac-ad59-455e-969a-2c38b8a0ac34.png",
      title: "Community Awareness Event",
      description: "DONATE Foundation team and volunteers at a community outreach program with local participants wearing foundation t-shirts",
      event: "Community Outreach Program",
      location: "Local Community Center"
    },
    {
      id: 2,
      src: "/lovable-uploads/04d6dbe6-ee01-4ba1-b5c8-4f348d96aecc.png",
      title: "Personal Consultation Session",
      description: "One-on-one counseling session between DONATE Foundation volunteer and community member",
      event: "Individual Counseling",
      location: "Community Counseling Center"
    },
    {
      id: 3,
      src: "/lovable-uploads/c0625d85-03db-48f2-8a8b-f5b1f4f15939.png",
      title: "Mission Discussion",
      description: "DONATE Foundation representatives discussing the mission with community members under the foundation banner",
      event: "Mission Awareness Session",
      location: "Community Meeting Point"
    },
    {
      id: 4,
      src: "/lovable-uploads/1b4e1f8d-3b09-4afe-b01a-f0b30b996df9.png",
      title: "Team Group Photo",
      description: "DONATE Foundation team members and volunteers in matching t-shirts at a community event",
      event: "Team Building Event",
      location: "Community Venue"
    },
    {
      id: 5,
      src: "/lovable-uploads/54add024-ffe2-46d8-9f8b-398ce53887ae.png",
      title: "Engaging Conversation",
      description: "Interactive discussion between DONATE Foundation volunteer and community member about organ donation awareness",
      event: "Educational Outreach",
      location: "Community Center"
    },
    {
      id: 6,
      src: "/lovable-uploads/f2971f61-1d15-4763-abd6-0cfc2317048f.png",
      title: "Community Engagement",
      description: "Continuing the conversation about organ donation awareness and community involvement",
      event: "Awareness Campaign",
      location: "Local Community Hub"
    }
  ];

  const pastEvents = [
    {
      id: 1,
      title: "Hope Festival 2023",
      date: "March 15, 2023",
      location: "Mumbai, Maharashtra",
      attendees: "5,000+",
      description: "Our largest awareness campaign brought together families, medical professionals, and community leaders to celebrate the gift of life. The festival featured interactive exhibits, survivor stories, and cultural performances that highlighted the importance of organ donation across different communities.",
      impact: "250 new donor registrations, 15 media interviews, 3 live transplant recipient testimonials",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&auto=format&q=80",
      video: "https://www.youtube.com/embed/sample1",
      highlights: ["Celebrity endorsements", "Live music performances", "Medical consultations", "Family activities"]
    },
    {
      id: 2,
      title: "Rural Outreach Program",
      date: "August 22, 2023",
      location: "Rajasthan Villages",
      attendees: "2,000+",
      description: "A comprehensive 5-day program reaching remote villages where organ donation awareness was minimal. Our team conducted door-to-door visits, community meetings, and educational sessions in local languages, breaking cultural barriers and misconceptions.",
      impact: "500 families educated, 80 pledged donors, 12 village councils supporting organ donation",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&auto=format&q=80",
      video: "https://www.youtube.com/embed/sample2",
      highlights: ["Multilingual sessions", "Community elder engagement", "Cultural sensitivity training", "Mobile medical units"]
    },
    {
      id: 3,
      title: "Corporate Awareness Summit",
      date: "November 10, 2023",
      location: "Bangalore, Karnataka",
      attendees: "1,500+",
      description: "A groundbreaking summit that brought together India's leading corporations to discuss workplace organ donation policies. The event featured panel discussions, policy workshops, and the launch of our corporate partnership program.",
      impact: "25 corporate partners signed, 1,000 employee registrations, 5 new workplace policies implemented",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&auto=format&q=80",
      video: "https://www.youtube.com/embed/sample3",
      highlights: ["CEO panel discussions", "Policy framework launch", "Employee wellness integration", "CSR partnership agreements"]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <ContentContainer>
        {/* Header with attractive visual elements */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 w-32 h-32 bg-gradient-to-r from-teal-200 to-blue-200 rounded-full opacity-20 blur-xl"></div>
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full mb-6 relative">
            <Camera className="h-4 w-4" />
            <span className="font-medium">Our Journey in Pictures & Videos</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-800 relative">
            Past Events & Impact Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto relative">
            Witness the transformative power of community engagement through our documented journey of spreading organ donation awareness across India.
          </p>
        </div>

        {/* Hero Impact Banner */}
        <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-3xl p-8 mb-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
          <div className="relative z-10 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Collective Impact Across All Events</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">8,500+</div>
                <div className="text-teal-100">People Reached</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">830+</div>
                <div className="text-teal-100">New Donors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">42</div>
                <div className="text-teal-100">Partner Organizations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">18</div>
                <div className="text-teal-100">States Covered</div>
              </div>
            </div>
          </div>
        </div>

        {/* Photos Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
              <ImageIcon className="h-4 w-4" />
              <span className="font-medium">Photo Gallery</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">DONATE Foundation in Action</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Authentic moments from our community outreach programs, awareness campaigns, and life-changing conversations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {donateFoundationPhotos.map((photo) => (
              <div key={photo.id} className="group cursor-pointer">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-teal-200">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={photo.src} 
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Badge className="bg-white/20 text-white border-white/30 mb-2">
                        {photo.event}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-gray-800 mb-2">{photo.title}</h4>
                    <p className="text-gray-600 text-sm mb-3">{photo.description}</p>
                    <div className="flex items-center text-xs text-gray-500">
                      <MapPin className="h-3 w-3 mr-1" />
                      {photo.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Videos Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full mb-4">
              <Video className="h-4 w-4" />
              <span className="font-medium">Video Gallery</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Stories That Inspire</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Watch powerful testimonials, event highlights, and educational content from our mission to save lives.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-12 text-center border border-gray-200">
            <div className="max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Play className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Video Content Coming Soon</h4>
              <p className="text-gray-600 mb-6">
                We're preparing inspiring video content including event highlights, testimonials, and educational materials. 
                Check back soon to watch powerful stories of hope and transformation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <Video className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-gray-800">Event Highlights</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <Heart className="h-6 w-6 text-red-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-gray-800">Testimonials</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <Users className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-gray-800">Educational Content</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="space-y-12">
          {pastEvents.map((event, index) => (
            <Card key={event.id} className={`overflow-hidden shadow-lg border-0 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} lg:flex bg-white/80 backdrop-blur-sm`}>
              <div className="lg:w-2/5 relative overflow-hidden">
                <div className="aspect-video lg:aspect-square relative">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800 hover:bg-white">
                    <Award className="h-3 w-3 mr-1" />
                    Featured Event
                  </Badge>
                </div>
              </div>
              
              <CardContent className="lg:w-3/5 p-8 flex flex-col justify-center">
                <CardHeader className="p-0 mb-6">
                  <div className="flex items-center gap-4 mb-3">
                    <Badge variant="outline" className="text-teal-600 border-teal-200">
                      <Calendar className="h-3 w-3 mr-1" />
                      {event.date}
                    </Badge>
                    <Badge variant="outline" className="text-blue-600 border-blue-200">
                      <MapPin className="h-3 w-3 mr-1" />
                      {event.location}
                    </Badge>
                    <Badge variant="outline" className="text-green-600 border-green-200">
                      <Users className="h-3 w-3 mr-1" />
                      {event.attendees}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800 mb-3">{event.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {event.description}
                  </CardDescription>
                </CardHeader>

                {/* Impact Metrics */}
                <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-xl mb-6 border border-green-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Heart className="h-4 w-4 text-green-600" />
                    <span className="font-semibold text-green-800">Event Impact</span>
                  </div>
                  <p className="text-green-700 text-sm">{event.impact}</p>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Video className="h-4 w-4 text-blue-600" />
                    Event Highlights
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {event.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Video Link */}
                <div className="flex items-center gap-4">
                  <button className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-teal-600 hover:to-blue-700 transition-all">
                    <Video className="h-4 w-4" />
                    Watch Event Video
                  </button>
                  <button className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-all">
                    <Camera className="h-4 w-4" />
                    View Photo Gallery
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Visual Section */}
        <div className="mt-16 bg-gradient-to-r from-orange-50 to-red-50 rounded-3xl p-8 text-center border border-orange-100">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                <Heart className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Join Our Next Event</h3>
            <p className="text-gray-600 mb-6">
              Be part of our mission to save lives. Stay updated with our upcoming events and initiatives.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full hover:from-orange-600 hover:to-red-600 transition-all">
                Subscribe to Updates
              </button>
              <button className="border border-orange-300 text-orange-600 px-6 py-3 rounded-full hover:bg-orange-50 transition-all">
                Download Event Calendar
              </button>
            </div>
          </div>
        </div>
      </ContentContainer>
    </section>
  );
};

export default PhotoVideoGallery;
