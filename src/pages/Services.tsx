
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { servicesData } from '@/data/servicesData';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Header Section */}
        <section className="bg-primary py-20 px-4 relative">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container-custom relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">
              We provide a range of services to support our community members and create lasting positive impact.
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-10">
              {servicesData.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                    <div 
                      className="h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${service.image})` }}
                    ></div>
                    <div className="p-8 flex-grow">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-4">
                          <Icon size={24} />
                        </div>
                        <h3 className="text-2xl font-bold">{service.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-6">
                        {service.shortDescription}
                      </p>
                      <Button asChild className="mt-auto">
                        <Link to={`/services/${service.id}`}>Learn More</Link>
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-8">Need Help With Our Services?</h2>
            <Button asChild size="lg" className="px-8 py-6 text-lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
