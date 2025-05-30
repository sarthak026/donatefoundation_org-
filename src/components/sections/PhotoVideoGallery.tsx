
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Image as ImageIcon, Play } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const PhotoVideoGallery: React.FC = () => {
  const [activeGallery, setActiveGallery] = useState<'images' | 'videos'>('images');
  
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&auto=format&q=80",
      alt: "Organ donation awareness rally",
      caption: "Annual Awareness Rally 2024"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&auto=format&q=80",
      alt: "Hospital donation drive",
      caption: "Hospital Partnership Drive"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&auto=format&q=80",
      alt: "Student participation event",
      caption: "Youth Ambassador Program"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&auto=format&q=80",
      alt: "Community awareness event",
      caption: "Community Outreach Program"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&q=80",
      alt: "Medical conference",
      caption: "Medical Professional Conference"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&auto=format&q=80",
      alt: "Volunteer training",
      caption: "Volunteer Training Session"
    }
  ];

  const galleryVideos = [
    {
      id: 1,
      thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&auto=format&q=80",
      title: "Awareness Rally Highlights",
      duration: "3:45"
    },
    {
      id: 2,
      thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&auto=format&q=80",
      title: "Donor Stories Documentary",
      duration: "8:20"
    },
    {
      id: 3,
      thumbnail: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&auto=format&q=80",
      title: "Youth Program Overview",
      duration: "5:15"
    },
    {
      id: 4,
      thumbnail: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&auto=format&q=80",
      title: "Community Impact Stories",
      duration: "6:30"
    },
    {
      id: 5,
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&q=80",
      title: "Medical Professional Training",
      duration: "12:15"
    },
    {
      id: 6,
      thumbnail: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&auto=format&q=80",
      title: "Volunteer Success Stories",
      duration: "7:45"
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
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gray-800">
            Photos and Videos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our visual journey through organ donation awareness campaigns, events, and success stories.
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
              Photo Gallery
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
              Video Gallery
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
    </section>
  );
};

export default PhotoVideoGallery;
