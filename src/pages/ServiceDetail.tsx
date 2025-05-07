
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getServiceById } from '@/data/servicesData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const service = serviceId ? getServiceById(serviceId) : undefined;
  
  useEffect(() => {
    // If service not found, redirect to 404
    if (!service && serviceId) {
      navigate('/not-found');
    }
    
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, [service, serviceId, navigate]);
  
  if (!service) {
    return null; // This will redirect in useEffect
  }

  const Icon = service.icon;
  
  // Check if this is one of the key services we're focusing on
  const isKeyService = ['business', 'employment', 'healthcare', 'education'].includes(serviceId || '');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Header Banner */}
        <div 
          className="w-full bg-primary relative py-24 px-4 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.image})` }}
        >
          <div className="absolute inset-0 bg-primary/70"></div>
          <div className="container-custom relative z-10 text-center">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 mx-auto text-white">
              <Icon size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{service.title}</h1>
          </div>
        </div>
        
        {/* Details Section */}
        <section className={`py-16 ${isKeyService ? 'bg-white' : 'bg-white'}`}>
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left Column - Description */}
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  {isKeyService ? `${service.title} माहिती` : "About this Service"}
                </h2>
                <div className="text-gray-700 text-lg leading-relaxed mb-8 whitespace-pre-line">
                  {isKeyService ? service.shortDescription : service.fullDescription}
                </div>
                <Button asChild size="lg" className="text-lg px-8 py-6">
                  <a href={service.ctaLink}>
                    {isKeyService ? "अधिक माहितीसाठी संपर्क करा" : service.ctaText}
                  </a>
                </Button>
              </div>
              
              {/* Right Column - Benefits */}
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-6">
                  {isKeyService ? "प्रमुख फायदे" : "Key Benefits"}
                </h3>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-3 text-primary mt-1">
                        <Check size={20} />
                      </span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Additional Information Section for Key Services */}
        {isKeyService && (
          <section className="py-16 bg-gray-50">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">
                  {serviceId === 'business' && "व्यवसाय विकास कार्यक्रम"}
                  {serviceId === 'employment' && "रोजगार संधी आणि कौशल्य विकास"}
                  {serviceId === 'healthcare' && "आरोग्य सेवा उपक्रम"}
                  {serviceId === 'education' && "शैक्षणिक उपक्रम"}
                </h2>
                
                {/* Custom content for key services */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                  {serviceId === 'business' && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold">अण्णासाहेब पाटील आर्थिक विकास महामंडळ कर्ज योजना</h3>
                      <p className="text-gray-700">मराठा उद्योजकांना आणि नवउद्योजकांना कमी व्याज दरात कर्ज देऊन त्यांच्या व्यवसाय प्रगतीस मदत करणे.</p>
                      
                      <h3 className="text-xl font-semibold">तालुका स्तरीय व्यवसाय मार्गदर्शन</h3>
                      <p className="text-gray-700">प्रत्येक तालुका स्तरावर 300+ प्रतिनिधींचे नेटवर्क व्यवसायिकांना मार्गदर्शन करण्यासाठी.</p>
                      
                      <h3 className="text-xl font-semibold">व्यवसाय मेळावे</h3>
                      <p className="text-gray-700">जिल्हा स्तरावर व्यवसाय मेळावे आयोजित करून नेटवर्किंग आणि व्यावसायिक संधींची निर्मिती.</p>
                    </div>
                  )}
                  
                  {serviceId === 'employment' && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold">नोकरी संधींची माहिती</h3>
                      <p className="text-gray-700">विविध नोकरी संधींची माहिती PDF स्वरूपात संकलित करून समाजातील तरुणांपर्यंत पोहोचवणे.</p>
                      
                      <h3 className="text-xl font-semibold">कौशल्य विकास प्रशिक्षण</h3>
                      <p className="text-gray-700">केंद्र आणि राज्य सरकारच्या कौशल्य विकास योजनांचा लाभ समाजातील तरुणांपर्यंत पोहोचवणे.</p>
                      
                      <h3 className="text-xl font-semibold">ऑनलाईन मार्गदर्शन सत्रे</h3>
                      <p className="text-gray-700">Facebook आणि YouTube च्या माध्यमातून तज्ञांकडून नोकरी संदर्भात मार्गदर्शन.</p>
                    </div>
                  )}
                  
                  {serviceId === 'healthcare' && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold">रक्तदान शिबिरे</h3>
                      <p className="text-gray-700">जिल्हा आणि तालुका स्तरावर नियमित रक्तदान शिबिरांचे आयोजन.</p>
                      
                      <h3 className="text-xl font-semibold">वैद्यकीय शिबिरे</h3>
                      <p className="text-gray-700">वृद्धांसाठी आरोग्य शिबिरे, दिव्यांग बांधवांना कृत्रिम अवयव उपलब्ध करून देणे.</p>
                      
                      <h3 className="text-xl font-semibold">आपत्कालीन आरोग्य सहाय्य</h3>
                      <p className="text-gray-700">कोविड काळात केलेल्या मदतीप्रमाणेच इतर आपत्कालीन परिस्थितीतही वैद्यकीय मदत उपलब्ध करणे.</p>
                    </div>
                  )}
                  
                  {serviceId === 'education' && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold">स्पर्धा परीक्षा वर्ग</h3>
                      <p className="text-gray-700">MPSC/UPSC/बँकिंग/SSC परीक्षांसाठी विशेष मार्गदर्शन.</p>
                      
                      <h3 className="text-xl font-semibold">संरक्षण क्षेत्र परीक्षा मार्गदर्शन</h3>
                      <p className="text-gray-700">NDA, नेव्ही आणि इतर संरक्षण दलांच्या परीक्षांसाठी मार्गदर्शन.</p>
                      
                      <h3 className="text-xl font-semibold">शिष्यवृत्ती योजना</h3>
                      <p className="text-gray-700">विद्यार्थ्यांसाठी विविध शिष्यवृत्ती योजनांची माहिती व मार्गदर्शन.</p>
                      
                      <h3 className="text-xl font-semibold">परदेशी शिक्षण</h3>
                      <p className="text-gray-700">परदेशी शिक्षणासाठी इच्छुक विद्यार्थ्यांना मार्गदर्शन व शिष्यवृत्तीची माहिती.</p>
                    </div>
                  )}
                </div>
                
                {/* Contact action */}
                <div className="text-center mt-10">
                  <Button asChild variant="outline" size="lg">
                    <a href="/contact">संपर्क करा</a>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* Testimonials */}
        <section className={`py-16 ${isKeyService ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-10 text-center">
              {isKeyService ? "लाभार्थींचे अनुभव" : "Success Stories"}
            </h2>
            
            <div className="relative">
              <Carousel className="mx-auto max-w-5xl">
                <CarouselContent>
                  {service.testimonials.map((testimonial, index) => (
                    <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                      <Card className="border-0 shadow-lg">
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row gap-6 items-center">
                            <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                              <img 
                                src={testimonial.image} 
                                alt={testimonial.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                              <div>
                                <h4 className="font-bold text-lg">{testimonial.name}</h4>
                                <p className="text-gray-500">{testimonial.role}</p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-8">
                  <CarouselPrevious className="relative static mr-2" />
                  <CarouselNext className="relative static ml-2" />
                </div>
              </Carousel>
            </div>
            
            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg">
                <a href="/contact">अधिक माहितीसाठी संपर्क करा</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServiceDetail;
