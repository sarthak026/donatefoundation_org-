
import React from 'react';
import ContentContainer from '../components/common/ContentContainer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import { Download, ExternalLink, Play, FileText, MessageCircle, Heart, Shield, Users, AlertCircle, HelpCircle, CheckCircle2, Info } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Events from '../components/sections/Events';
import DonateButton from '../components/ui/DonateButton';

const Resources: React.FC = () => {
  return (
    <>
      <div className="pt-24 bg-gradient-to-r from-primary/5 to-secondary/5">
        <ContentContainer>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Resources</h1>
            <p className="text-xl text-gray-700 mb-10">
              Access comprehensive information, educational materials, events, and frequently asked questions 
              about organ donation to make informed decisions and support our mission.
            </p>
          </div>
        </ContentContainer>
      </div>

      {/* Tabs for different resource categories */}
      <ContentContainer className="py-16">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="events" className="w-full">
            <TabsList className="grid w-full grid-cols-6 mb-8">
              <TabsTrigger value="events">News and Events</TabsTrigger>
              <TabsTrigger value="blog">Blog</TabsTrigger>
              <TabsTrigger value="media">Media Coverage</TabsTrigger>
              <TabsTrigger value="reports">Reports and Publications</TabsTrigger>
              <TabsTrigger value="photos">Photos and Videos</TabsTrigger>
              <TabsTrigger value="faqs">General FAQs</TabsTrigger>
            </TabsList>

            <TabsContent value="events" className="space-y-8">
              <Events />
            </TabsContent>

            <TabsContent value="blog" className="space-y-8">
              <div className="text-center py-16">
                <h3 className="text-2xl font-semibold mb-4">Blog Posts</h3>
                <p className="text-gray-600">Coming soon - Our latest articles and insights on organ donation.</p>
              </div>
            </TabsContent>

            <TabsContent value="media" className="space-y-8">
              <div className="text-center py-16">
                <h3 className="text-2xl font-semibold mb-4">Media Coverage</h3>
                <p className="text-gray-600">Press releases and media mentions will be featured here.</p>
              </div>
            </TabsContent>

            <TabsContent value="reports" className="space-y-8">
              <div className="text-center py-16">
                <h3 className="text-2xl font-semibold mb-4">Reports and Publications</h3>
                <p className="text-gray-600">Research papers and annual reports coming soon.</p>
              </div>
            </TabsContent>

            <TabsContent value="photos" className="space-y-8">
              <div className="text-center py-16">
                <h3 className="text-2xl font-semibold mb-4">Photos and Videos</h3>
                <p className="text-gray-600">Gallery of our events and awareness campaigns.</p>
              </div>
            </TabsContent>

            <TabsContent value="faqs" className="space-y-8">
              {/* FAQs Section */}
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <div className="bg-primary/10 p-3 rounded-full inline-flex mb-6">
                    <HelpCircle className="text-primary h-6 w-6" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">FAQs: Everything You Need to Know About Organ Donation</h2>
                  <p className="text-xl text-gray-700">
                    Empowering You with Facts
                  </p>
                  <p className="text-gray-700 mt-4">
                    Organ donation is a lifesaving act, but misconceptions and doubts sometimes prevent people from 
                    making an informed decision. This FAQ section is designed to answer your questions, address your 
                    concerns, and walk you through the process with honesty and confidence.
                  </p>
                </div>

                {/* General Questions */}
                <div className="mb-12">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h3 className="text-2xl font-display font-semibold mb-6 flex items-center">
                      <Info className="text-primary h-6 w-6 mr-3" />
                      General Questions About Organ Donation
                    </h3>
                    
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="what-is-organ-donation">
                        <AccordionTrigger>What is organ donation?</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-700">
                            Organ donation is the process of giving an organ or tissue to someone in need of a transplant. 
                            It can be done during life (living donation) or after death (deceased donation).
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="why-important">
                        <AccordionTrigger>Why is organ donation important?</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-700">
                            Organ donation saves lives. Thousands of people in India suffer from organ failure, and a single 
                            donor can save up to eight lives and improve the lives of many others through tissue donation.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="who-can-donate">
                        <AccordionTrigger>Who can become an organ donor?</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-700">
                            Almost anyone can be an organ donor, regardless of age or medical history. Medical professionals 
                            will evaluate the condition of your organs at the time of donation to determine suitability.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="how-to-register">
                        <AccordionTrigger>How do I register as an organ donor?</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-700">
                            You can register online through the official government portal (NOTTO), state-specific organ 
                            donation registries, or by signing up at a hospital. It's also important to inform your family 
                            about your decision.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="donor-card">
                        <AccordionTrigger>Do I need a donor card to be an organ donor?</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-700">
                            A donor card is a symbol of your intent to donate, but the final decision rests with your family. 
                            This is why discussing your wishes with them is crucial.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>

                {/* Living Organ Donation */}
                <div className="mb-12">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h3 className="text-2xl font-display font-semibold mb-6 flex items-center">
                      <Heart className="text-primary h-6 w-6 mr-3" />
                      Living Organ Donation
                    </h3>
                    
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="what-is-living-donation">
                        <AccordionTrigger>What is living organ donation?</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-700">
                            Living organ donation allows a healthy person to donate a kidney or a portion of their liver to 
                            someone in need. This is possible because the human body can function with just one kidney, 
                            and the liver regenerates.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="who-can-be-living-donor">
                        <AccordionTrigger>Who can be a living donor?</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-700">
                            Typically, close relatives such as parents, siblings, children, or spouses can be living donors. 
                            In special cases, unrelated individuals may donate with government approval.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="living-donation-risks">
                        <AccordionTrigger>Does living donation pose any health risks?</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-700">
                            Living donors undergo extensive medical testing to ensure their safety. While all surgeries carry 
                            some risk, most living donors recover fully and lead normal lives.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="lifelong-medication">
                        <AccordionTrigger>Will I need to take medication for life after donating an organ?</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-700">
                            No. Unlike transplant recipients, organ donors do not need lifelong medication. However, they 
                            will have follow-up checkups to monitor their health.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>

                {/* Deceased Organ Donation */}
                <div className="mb-12">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h3 className="text-2xl font-display font-semibold mb-6 flex items-center">
                      <Users className="text-secondary h-6 w-6 mr-3" />
                      Deceased Organ Donation
                    </h3>
                    
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="what-is-deceased-donation">
                        <AccordionTrigger>What is deceased organ donation?</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-700">
                            Deceased organ donation happens when a person, after being declared brain dead, donates their 
                            organs to save others. The donation process follows strict medical and legal protocols.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="organs-tissues-donated">
                        <AccordionTrigger>What organs and tissues can be donated after death?</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold mb-2">Organs:</h4>
                              <p className="text-gray-700">Kidneys, liver, heart, lungs, pancreas, intestines</p>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">Tissues:</h4>
                              <p className="text-gray-700">Corneas, skin, bone, heart valves, blood vessels, and cartilage</p>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="brain-death-determination">
                        <AccordionTrigger>How is brain death determined?</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-700">
                            Brain death is a medical condition in which the brain stops functioning permanently. It is 
                            diagnosed by a team of doctors through rigorous testing and must be confirmed before organ 
                            donation can take place.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="funeral-arrangements">
                        <AccordionTrigger>Will organ donation affect funeral arrangements?</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-700">
                            No. The body is treated with respect during organ retrieval, and families can proceed with 
                            traditional funeral rites, including open-casket ceremonies.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>

                {/* Ethical and Legal Concerns */}
                <div className="mb-12">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h3 className="text-2xl font-display font-semibold mb-6 flex items-center">
                      <Shield className="text-primary h-6 w-6 mr-3" />
                      Ethical and Legal Concerns
                    </h3>
                    
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="legal-in-india">
                        <AccordionTrigger>Is organ donation legal in India?</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-700">
                            Yes. The Transplantation of Human Organs and Tissues Act (THOTA), 1994, regulates organ donation 
                            and prohibits organ trafficking. The law ensures that organ allocation is ethical and transparent.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="organs-without-consent">
                        <AccordionTrigger>Can my organs be taken without my consent?</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-700">
                            No. Organ donation requires consent from the donor (if registered) or the family. Strict laws 
                            prevent unauthorized organ retrieval.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="organ-allocation">
                        <AccordionTrigger>How are donated organs allocated?</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-700">
                            Organ allocation is managed by NOTTO and is based on medical urgency, blood and tissue compatibility, 
                            and waiting time. Wealth or social status does not influence the process.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="religious-restrictions">
                        <AccordionTrigger>Are there any religious restrictions on organ donation?</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-700">
                            Most major religions support organ donation as an act of compassion and saving lives. If you have 
                            concerns, consult your religious leader.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>

                {/* Practical Aspects and Myths */}
                <div className="mb-12">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h3 className="text-2xl font-display font-semibold mb-6 flex items-center">
                      <AlertCircle className="text-secondary h-6 w-6 mr-3" />
                      Practical Aspects and Myths
                    </h3>
                    
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="donation-cost">
                        <AccordionTrigger>Does organ donation cost money?</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-700">
                            No. The donor's family does not bear any medical expenses related to organ donation. Hospitals 
                            and government programs cover these costs.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="doctors-try-less">
                        <AccordionTrigger>If I register as a donor, will doctors try less to save my life?</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-700">
                            No. A doctor's first priority is to save lives. Organ donation is only considered after all 
                            life-saving measures fail and brain death is confirmed.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="buying-organs">
                        <AccordionTrigger>Can someone buy an organ in India?</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-700">
                            No. Buying or selling organs is illegal in India under the Transplantation of Human Organs Act. 
                            Violators face severe legal penalties.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="family-benefits">
                        <AccordionTrigger>Will my family receive money or benefits if I donate my organs?</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-700">
                            No. Organ donation is purely voluntary and altruistic. No financial incentives are given for 
                            organ donation.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="change-mind">
                        <AccordionTrigger>Can I change my mind after registering as a donor?</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-700">
                            Yes. You can revoke your decision at any time by updating your registration status and informing 
                            your family.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>

                {/* Special Considerations */}
                <div className="mb-12">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h3 className="text-2xl font-display font-semibold mb-6 flex items-center">
                      <CheckCircle2 className="text-primary h-6 w-6 mr-3" />
                      Special Considerations
                    </h3>
                    
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="cancer-patients">
                        <AccordionTrigger>Can cancer patients donate organs?</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-700">
                            In most cases, individuals with active cancer cannot donate organs. However, those with a history 
                            of certain treated cancers may be eligible for donation.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="diabetes-hypertension">
                        <AccordionTrigger>Can people with diabetes or hypertension donate organs?</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-700">
                            Yes, depending on the severity and overall health. A medical evaluation determines suitability.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="age-limit">
                        <AccordionTrigger>Is there an age limit for organ donation?</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-700">
                            No strict age limit exists. Each case is assessed based on organ health rather than age alone.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="hiv-donation">
                        <AccordionTrigger>Can a person with HIV donate organs?</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-700">
                            Individuals with HIV can donate organs to HIV-positive recipients under certain medical conditions.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>

                {/* Contact Section */}
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 text-center">
                  <h3 className="text-2xl font-display font-semibold mb-4">Have More Questions?</h3>
                  <p className="text-gray-700 mb-6">
                    If you have any additional questions or need guidance, reach out to our helpline or visit the 
                    Resources section for more in-depth information.
                  </p>
                  <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-lg mr-4">
                    Contact Our Helpline
                  </Button>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8 py-3 rounded-full text-lg">
                    Be the Change!
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </ContentContainer>

      {/* Educational Downloads Section */}
      <ContentContainer className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-12 text-center">Educational Downloads</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="bg-primary/10 p-3 rounded-full inline-flex mb-4">
                <FileText className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Organ Donation Guide</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive guide covering all aspects of organ donation in India.
              </p>
              <Button variant="outline" className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="bg-secondary/10 p-3 rounded-full inline-flex mb-4">
                <Play className="text-secondary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Educational Videos</h3>
              <p className="text-gray-600 mb-4">
                Video series explaining organ donation myths and facts.
              </p>
              <Button variant="outline" className="w-full">
                <ExternalLink className="mr-2 h-4 w-4" />
                Watch Videos
              </Button>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="bg-primary/10 p-3 rounded-full inline-flex mb-4">
                <MessageCircle className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Family Discussion Kit</h3>
              <p className="text-gray-600 mb-4">
                Tools to help you discuss organ donation with your family.
              </p>
              <Button variant="outline" className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Download Kit
              </Button>
            </div>
          </div>
        </div>
      </ContentContainer>

      <DonateButton />
    </>
  );
};

export default Resources;
