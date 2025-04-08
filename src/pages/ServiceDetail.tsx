
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
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left Column - Description */}
              <div>
                <h2 className="text-3xl font-bold mb-6">About this Service</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  {service.fullDescription}
                </p>
                <Button asChild size="lg" className="text-lg px-8 py-6">
                  <a href={service.ctaLink}>{service.ctaText}</a>
                </Button>
              </div>
              
              {/* Right Column - Benefits */}
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-6">Key Benefits</h3>
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
        
        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-10 text-center">Success Stories</h2>
            
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
                <a href="/contact">Contact Us For More Information</a>
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
