import React from 'react';
import ContentContainer from '../components/common/ContentContainer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Image, Video, Newspaper, Calendar, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import DonateButton from '../components/ui/DonateButton';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Events from '../components/sections/Events';

const Resources: React.FC = () => {
  return (
    <>
      <div className="pt-24 bg-gradient-to-r from-primary/5 to-secondary/5">
        <ContentContainer>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Resources</h1>
            <p className="text-xl text-gray-700 mb-10">
              Access information, updates, and materials to learn more about organ donation 
              and our work at DonateLife Foundation.
            </p>
          </div>
        </ContentContainer>
      </div>

      {/* Events Section */}
      <Events />

      {/* Resources Tabs Section */}
      <ContentContainer className="py-16">
        <Tabs defaultValue="news" className="max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-6 mb-8">
            <TabsTrigger value="news" className="flex items-center gap-2">
              <Newspaper className="h-4 w-4" /> News
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" /> Future Events
            </TabsTrigger>
            <TabsTrigger value="blog" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" /> Blog
            </TabsTrigger>
            <TabsTrigger value="media" className="flex items-center gap-2">
              <Video className="h-4 w-4" /> Media
            </TabsTrigger>
            <TabsTrigger value="publications" className="flex items-center gap-2">
              <FileText className="h-4 w-4" /> Publications
            </TabsTrigger>
            <TabsTrigger value="faq" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" /> FAQs
            </TabsTrigger>
          </TabsList>
          
          {/* News & Events Tab */}
          <TabsContent value="news" className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">News & Events</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&auto=format&q=80" 
                    alt="Press conference announcement" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center mb-2">
                    <Calendar className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm text-gray-500">May 15, 2025</span>
                    <span className="bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-full ml-auto">Press Release</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">DonateLife Partners with Health Ministry for National Campaign</h3>
                  <p className="text-gray-600 mb-4">
                    Our foundation has entered into a strategic partnership with the Health Ministry to launch a nationwide awareness campaign...
                  </p>
                  <Link to="/resources/news/1" className="text-primary font-medium hover:underline inline-flex items-center">
                    Read more <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&auto=format&q=80" 
                    alt="Annual charity walkathon" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center mb-2">
                    <Calendar className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm text-gray-500">June 12, 2025</span>
                    <span className="bg-secondary/10 text-secondary text-xs font-semibold px-2 py-1 rounded-full ml-auto">Upcoming Event</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Annual DonateLife Walkathon 2025 Registration Open</h3>
                  <p className="text-gray-600 mb-4">
                    Join us for our signature fundraising event in Mumbai. Walk with us to honor donors and support our mission...
                  </p>
                  <Link to="/resources/events/1" className="text-primary font-medium hover:underline inline-flex items-center">
                    Register now <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="border border-gray-100 rounded-lg p-4 hover:shadow-sm transition-shadow">
                  <div className="flex items-center mb-2">
                    <Calendar className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm text-gray-500">April {item + 10}, 2025</span>
                  </div>
                  <h3 className="font-semibold mb-2">News Update Title {item}</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Brief excerpt from the news article or event description...
                  </p>
                  <Link to={`/resources/news/${item}`} className="text-primary text-sm font-medium hover:underline">
                    Read more
                  </Link>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Link to="/resources/all-news" className="btn-primary inline-flex items-center">
                View All News & Events <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </TabsContent>

          {/* Future Events Tab */}
          <TabsContent value="events" className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">Future Events</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-sm border border-primary/20 overflow-hidden">
                <div className="h-40 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&auto=format&q=80" 
                    alt="Annual charity marathon" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center mb-2">
                    <Calendar className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm text-gray-500">June 15, 2025</span>
                    <span className="bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-full ml-auto">Awareness</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">National Organ Donation Day</h3>
                  <p className="text-gray-600 mb-4">
                    Join us for a day of celebration and awareness with special speakers and testimonials...
                  </p>
                  <Link to="/resources/events/upcoming/1" className="text-primary font-medium hover:underline inline-flex items-center">
                    Learn more <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-primary/20 overflow-hidden">
                <div className="h-40 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&auto=format&q=80" 
                    alt="Medical conference" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center mb-2">
                    <Calendar className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm text-gray-500">July 23-25, 2025</span>
                    <span className="bg-secondary/10 text-secondary text-xs font-semibold px-2 py-1 rounded-full ml-auto">Conference</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">International Transplant Conference</h3>
                  <p className="text-gray-600 mb-4">
                    Medical professionals from around the world gather to discuss advancements in transplant technology...
                  </p>
                  <Link to="/resources/events/upcoming/2" className="text-primary font-medium hover:underline inline-flex items-center">
                    Learn more <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-primary/20 overflow-hidden">
                <div className="h-40 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&auto=format&q=80" 
                    alt="School workshop" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center mb-2">
                    <Calendar className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm text-gray-500">August 10-14, 2025</span>
                    <span className="bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-full ml-auto">Workshop</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Youth Ambassador Training Week</h3>
                  <p className="text-gray-600 mb-4">
                    Five-day intensive training for high school and college students to become organ donation advocates...
                  </p>
                  <Link to="/resources/events/upcoming/3" className="text-primary font-medium hover:underline inline-flex items-center">
                    Apply now <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-4">Upcoming Workshops</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg overflow-hidden">
                  <thead className="bg-gray-50 text-gray-600 text-sm">
                    <tr>
                      <th className="py-3 px-4 text-left">Date</th>
                      <th className="py-3 px-4 text-left">Event</th>
                      <th className="py-3 px-4 text-left">Location</th>
                      <th className="py-3 px-4 text-left">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-3 px-4">Sep 5, 2025</td>
                      <td className="py-3 px-4">Family Discussion Workshop</td>
                      <td className="py-3 px-4">Mumbai Central Community Hall</td>
                      <td className="py-3 px-4">
                        <Link to="/resources/events/upcoming/4" className="text-primary hover:underline">Register</Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Sep 12, 2025</td>
                      <td className="py-3 px-4">Healthcare Professional Training</td>
                      <td className="py-3 px-4">Lilavati Hospital, Mumbai</td>
                      <td className="py-3 px-4">
                        <Link to="/resources/events/upcoming/5" className="text-primary hover:underline">Register</Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Sep 18, 2025</td>
                      <td className="py-3 px-4">Corporate Awareness Program</td>
                      <td className="py-3 px-4">TCS Offices, Bangalore</td>
                      <td className="py-3 px-4">
                        <Link to="/resources/events/upcoming/6" className="text-primary hover:underline">Register</Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Oct 1, 2025</td>
                      <td className="py-3 px-4">Religious Leaders Symposium</td>
                      <td className="py-3 px-4">Delhi Interfaith Center</td>
                      <td className="py-3 px-4">
                        <Link to="/resources/events/upcoming/7" className="text-primary hover:underline">Register</Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="text-center">
              <Button>
                <Link to="/resources/events/calendar" className="text-white inline-flex items-center">
                  View Complete Events Calendar <ArrowRight size={16} className="ml-1" />
                </Link>
              </Button>
            </div>
          </TabsContent>
          
          {/* Blog Tab */}
          <TabsContent value="blog" className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">Blog</h2>
            
            <div className="mb-8">
              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <div className="flex items-center mb-3">
                  <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">Featured</span>
                  <span className="text-sm text-gray-500 ml-3">March 28, 2025</span>
                </div>
                <h3 className="text-2xl font-semibold mb-3">Understanding Brain Death: What Families Need to Know</h3>
                <p className="text-gray-700 mb-4">
                  Brain death is a concept that many families struggle to understand during the difficult time 
                  when organ donation becomes a possibility. This comprehensive guide aims to explain the medical 
                  and emotional aspects of brain death determination...
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&q=80" 
                    alt="Dr. Rajesh Kumar" 
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-medium">Dr. Rajesh Kumar</p>
                    <p className="text-sm text-gray-500">Medical Director</p>
                  </div>
                  <Link to="/resources/blog/1" className="ml-auto text-primary font-medium hover:underline inline-flex items-center">
                    Read article <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="border border-gray-100 rounded-lg overflow-hidden hover:shadow-sm transition-shadow">
                    <div className="h-40 overflow-hidden">
                      <img 
                        src={`https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&auto=format&q=75&w=${500+item}`} 
                        alt={`Blog post ${item}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <span className="text-sm text-gray-500 mb-1 block">March {item + 15}, 2025</span>
                      <h3 className="font-semibold mb-2">Common Myths About Organ Donation Debunked</h3>
                      <p className="text-gray-600 text-sm mb-3">
                        We address the most common misconceptions about organ donation process...
                      </p>
                      <Link to={`/resources/blog/${item}`} className="text-primary text-sm font-medium hover:underline">
                        Read article
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <Link to="/resources/blog" className="btn-primary inline-flex items-center">
                Read All Blog Posts <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </TabsContent>
          
          {/* Media Coverage Tab */}
          <TabsContent value="media" className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">Media Coverage & Gallery</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Press Coverage</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {["Times of India", "NDTV", "The Hindu", "India Today"].map((outlet, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center h-32 hover:shadow-md transition-shadow"
                  >
                    <div className="w-24 h-8 bg-gray-200 rounded mb-3"></div>
                    <p className="text-center text-gray-700">{outlet}</p>
                  </a>
                ))}
              </div>
              
              <h3 className="text-xl font-semibold mb-4">Photo Gallery</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                  <div key={item} className="overflow-hidden rounded-lg h-40 bg-gray-100">
                    <img 
                      src={`https://images.unsplash.com/photo-${1580000000000 + item * 100000}-abcdefghijkl?w=300&auto=format&q=75`} 
                      alt={`Gallery image ${item}`}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Videos</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <Video className="h-12 w-12 text-gray-400" />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold mb-1">The Gift of Sight: A Cornea Donation Story</h4>
                    <p className="text-sm text-gray-600">5:23 • 10K views</p>
                  </div>
                </div>
                
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <Video className="h-12 w-12 text-gray-400" />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold mb-1">Understanding the Organ Donation Process</h4>
                    <p className="text-sm text-gray-600">8:17 • 7.5K views</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Link to="/resources/media" className="btn-primary inline-flex items-center">
                Explore Full Media Gallery <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </TabsContent>
          
          {/* Publications Tab */}
          <TabsContent value="publications" className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">Reports & Publications</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <FileText className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Annual Reports</h3>
                <p className="text-gray-700 mb-4">
                  Our annual reports provide a comprehensive overview of our activities, 
                  impact, and financial statements for each fiscal year.
                </p>
                
                <div className="space-y-3">
                  {[2024, 2023, 2022, 2021].map((year) => (
                    <div key={year} className="flex items-center justify-between bg-white p-3 rounded-lg border border-gray-100">
                      <span className="font-medium">Annual Report {year}</span>
                      <div className="flex space-x-2">
                        <a href="#" className="text-primary hover:underline text-sm">View</a>
                        <a href="#" className="text-primary hover:underline text-sm">Download PDF</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <BookOpen className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Educational Materials</h3>
                <p className="text-gray-700 mb-4">
                  Resources developed for schools, communities, and healthcare professionals 
                  to educate about organ donation.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-gray-100">
                    <span className="font-medium">Organ Donation: The Basic Guide</span>
                    <a href="#" className="text-primary hover:underline text-sm">Download PDF</a>
                  </div>
                  <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-gray-100">
                    <span className="font-medium">School Curriculum Guide</span>
                    <a href="#" className="text-primary hover:underline text-sm">Download PDF</a>
                  </div>
                  <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-gray-100">
                    <span className="font-medium">Family Discussion Toolkit</span>
                    <a href="#" className="text-primary hover:underline text-sm">Download PDF</a>
                  </div>
                  <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-gray-100">
                    <span className="font-medium">Healthcare Professional Handbook</span>
                    <a href="#" className="text-primary hover:underline text-sm">Download PDF</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-semibold mb-4">Research Papers & Studies</h3>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h4 className="font-semibold mb-1">Organ Donation Attitudes in Urban India: A Comprehensive Survey</h4>
                  <p className="text-sm text-gray-600 mb-3">Published in Journal of Medical Ethics, 2024</p>
                  <div className="flex space-x-3">
                    <a href="#" className="text-primary hover:underline text-sm">Abstract</a>
                    <a href="#" className="text-primary hover:underline text-sm">Full Paper (PDF)</a>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h4 className="font-semibold mb-1">Impact of Educational Interventions on Organ Donation Registration</h4>
                  <p className="text-sm text-gray-600 mb-3">Published in Indian Journal of Public Health, 2023</p>
                  <div className="flex space-x-3">
                    <a href="#" className="text-primary hover:underline text-sm">Abstract</a>
                    <a href="#" className="text-primary hover:underline text-sm">Full Paper (PDF)</a>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h4 className="font-semibold mb-1">Religious and Cultural Factors Influencing Organ Donation Decisions</h4>
                  <p className="text-sm text-gray-600 mb-3">Published in Indian Journal of Medical Research, 2022</p>
                  <div className="flex space-x-3">
                    <a href="#" className="text-primary hover:underline text-sm">Abstract</a>
                    <a href="#" className="text-primary hover:underline text-sm">Full Paper (PDF)</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Link to="/resources/publications" className="btn-primary inline-flex items-center">
                Browse All Publications <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </TabsContent>
          
          {/* FAQs Tab */}
          <TabsContent value="faq" className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is organ donation?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">
                      Organ donation is the process of surgically removing an organ or tissue from one person (the organ donor) 
                      and placing it into another person (the recipient). Organ donation can save or significantly improve the 
                      quality of life for people with end-stage organ failure.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>Who can become an organ donor?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700 mb-3">
                      People of all ages and medical histories should consider themselves potential donors. 
                      Your medical condition at the time of death will determine what organs and tissues can be donated.
                    </p>
                    <p className="text-gray-700">
                      Even those with chronic conditions like diabetes, hypertension, or even hepatitis can potentially
                      donate some organs. Medical professionals evaluate each potential donor at the time of death to
                      determine which organs can be safely used for transplantation.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger>How do I register as an organ donor?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700 mb-3">
                      In India, you can register as an organ donor through:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 mb-3">
                      <li>National Organ & Tissue Transplant Organisation (NOTTO) website</li>
                      <li>Our DonateLife Foundation registration form</li>
                      <li>State organ donation registries</li>
                      <li>Many driver's license applications now include organ donor registration</li>
                    </ul>
                    <p className="text-gray-700">
                      Most importantly, share your decision with your family, as they will be consulted 
                      at the time of donation.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger>Does my religion support organ donation?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700 mb-3">
                      Most major religions in India and worldwide support organ donation as an act of charity and love. 
                      These include Hinduism, Islam, Christianity, Buddhism, and Sikhism.
                    </p>
                    <p className="text-gray-700">
                      Religious leaders see organ donation as a selfless act that aligns with teachings about 
                      compassion and helping others. If you have specific concerns about your faith's position on 
                      organ donation, we recommend speaking with your religious leader.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5">
                  <AccordionTrigger>Will organ donation affect funeral arrangements?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">
                      No, organ donation does not interfere with funeral arrangements, including open-casket 
                      ceremonies. The donation procedure is performed with the utmost respect and care, 
                      using surgical techniques that preserve the dignity of the donor. After organ recovery, 
                      the body is closed with surgical sutures just as in any other operation.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-6">
                  <AccordionTrigger>Is there an age limit for organ donation?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">
                      There is no defined age limit for organ donation. While organs from younger donors may be 
                      preferred for certain transplants, older donors can still provide life-saving organs and tissues. 
                      The condition of the organs at the time of death is more important than the donor's age. 
                      Even people in their 80s have successfully donated organs.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-7">
                  <AccordionTrigger>Will my family incur any costs for organ donation?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">
                      No, the donor's family does not bear any costs related to organ donation. All expenses 
                      associated with the evaluation, recovery, and processing of organs for transplantation 
                      are covered by the recipient's transplant program or insurance. The donor family remains 
                      responsible only for medical care provided before the declaration of death and for funeral expenses.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-8">
                  <AccordionTrigger>What is organ donation?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">
                      Organ donation is the process of giving an organ or tissue to someone in need of a transplant. It
                      can be done during life (living donation) or after death (deceased donation).
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-9">
                  <AccordionTrigger>Why is organ donation important?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">
                      Organ donation saves lives. Thousands of people in India suffer from organ failure, and a single
                      donor can save up to eight lives and improve the lives of many others through tissue donation.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-10">
                  <AccordionTrigger>Who can become an organ donor?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">
                      Almost anyone can be an organ donor, regardless of age or medical history. Medical professionals
                      will evaluate the condition of your organs at the time of donation to determine suitability.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-11">
                  <AccordionTrigger>How do I register as an organ donor?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">
                      You can register online through the official government portal (NOTTO), state-specific organ
                      donation registries, or by signing up at a hospital. It's also important to inform your family about
                      your decision.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-12">
                  <AccordionTrigger>Do I need a donor card to be an organ donor?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">
                      A donor card is a symbol of your intent to donate, but the final decision rests with your family.
                      This is why discussing your wishes with them is crucial.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-13">
                  <AccordionTrigger>What is living organ donation?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">
                      Living organ donation allows a healthy person to donate a kidney or a portion of their liver to
                      someone in need. This is possible because the human body can function with just one kidney, and
                      the liver regenerates.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-14">
                  <AccordionTrigger>Who can be a living donor?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">
                      Typically, close relatives such as parents, siblings, children, or spouses can be living donors. In
                      special cases, unrelated individuals may donate with government approval.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-15">
                  <AccordionTrigger>Does living donation pose any health risks?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">
                      Living donors undergo extensive medical testing to ensure their safety. While all surgeries carry
                      some risk, most living donors recover fully and lead normal lives.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-16">
                  <AccordionTrigger>Will I need to take medication for life after donating an organ?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">
                      No. Unlike transplant recipients, organ donors do not need lifelong medication. However, they
                      will have follow-up checkups to monitor their health.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-17">
                  <AccordionTrigger>What is deceased organ donation?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">
                      Deceased organ donation happens when a person, after being declared brain dead, donates their
                      organs to save others. The donation process follows strict medical and legal protocols.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-18">
                  <AccordionTrigger>What organs and tissues can be donated after death?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700 mb-3">The following can be donated:</p>
                    <p className="text-gray-700 mb-2"><strong>Organs:</strong> Kidneys, liver, heart, lungs, pancreas, intestines</p>
                    <p className="text-gray-700"><strong>Tissues:</strong> Corneas, skin, bone, heart valves, blood vessels, and cartilage</p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-19">
                  <AccordionTrigger>How is brain death determined?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">
                      Brain death is a medical condition in which the brain stops functioning permanently. It is
                      diagnosed by a team of doctors through rigorous testing and must be confirmed before organ
                      donation can take place.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-20">
                  <AccordionTrigger>Will organ donation affect funeral arrangements?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">
                      No. The body is treated with respect during organ retrieval, and families can proceed with
                      traditional funeral rites, including open-casket ceremonies.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-21">
                  <AccordionTrigger>Is organ donation legal in India?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">
                      Yes. The Transplantation of Human Organs and Tissues Act (THOTA), 1994, regulates organ
                      donation and prohibits organ trafficking. The law ensures that organ allocation is ethical and
                      transparent.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-22">
                  <AccordionTrigger>Can my organs be taken without my consent?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">
                      No. Organ donation requires consent from the donor (if registered) or the family. Strict laws
                      prevent unauthorized organ retrieval.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-23">
                  <AccordionTrigger>How are donated organs allocated?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">
                      Organ allocation is managed by NOTTO and is based on medical urgency, blood and tissue
                      compatibility, and waiting time. Wealth or social status does not influence the process.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-24">
                  <AccordionTrigger>Are there any religious restrictions on organ donation?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">
                      Most major religions support organ donation as an act of compassion and saving lives. If you have
                      concerns, consult your religious leader.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-25">
                  <AccordionTrigger>Does organ donation cost money?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">
                      No. The donor's family does not bear any medical expenses related to organ donation. Hospitals
                      and government programs cover these costs.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-26">
                  <AccordionTrigger>If I register as a donor, will doctors try less to save my life?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">
                      No. A doctor's first priority is to save lives. Organ donation is only considered after all life-saving
                      measures fail and brain death is confirmed.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-27">
                  <AccordionTrigger>Can someone buy an organ in India?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">
                      No. Buying or selling organs is illegal in India under the Transplantation of Human Organs Act.
                      Violators face severe legal penalties.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-28">
                  <AccordionTrigger>Will my family receive money or benefits if I donate my organs?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">
                      No. Organ donation is purely voluntary and altruistic. No financial incentives are given for organ
                      donation.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-29">
                  <AccordionTrigger>Can I change my mind after registering as a donor?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">
                      Yes. You can revoke your decision at any time by updating your registration status and informing
                      your family.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-30">
                  <AccordionTrigger>Can cancer patients donate organs?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">
                      In most cases, individuals with active cancer cannot donate organs. However, those with a history
                      of certain treated cancers may be eligible for donation.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-31">
                  <AccordionTrigger>Can people with diabetes or hypertension donate organs?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">
                      Yes, depending on the severity and overall health. A medical evaluation determines suitability.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-32">
                  <AccordionTrigger>Is there an age limit for organ donation?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">
                      No strict age limit exists. Each case is assessed based on organ health rather than age alone.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-33">
                  <AccordionTrigger>Can a person with HIV donate organs?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700">
                      Individuals with HIV can donate organs to HIV-positive recipients under certain medical
                      conditions.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              <div className="mt-8 text-center">
                <Link to="/resources/faq" className="btn-primary">View All FAQs</Link>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </ContentContainer>

      <DonateButton />
    </>
  );
};

export default Resources;
