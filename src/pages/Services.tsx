import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { servicesData } from '@/data/servicesData';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Services = () => {
  // Group services by type (key services vs other services)
  const keyServices = servicesData.filter(service => 
    ['business', 'employment', 'healthcare', 'education'].includes(service.id)
  );
  
  const otherServices = servicesData.filter(service => 
    !['business', 'employment', 'healthcare', 'education'].includes(service.id)
  );

  return <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Header Section */}
        <section className="bg-primary py-20 px-4 relative">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container-custom relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">संस्थेचे सेवाकार्य</h1>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">
              सकल मराठा परिवार ही संस्था मराठा समाजातील सर्व घटकांसाठी कार्यरत आहे.
            </p>
          </div>
        </section>

        {/* Key Services List */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">प्रमुख सेवा क्षेत्रे</h2>
              <p className="text-gray-600">
                आमच्या संस्थेमार्फत समाजातील सर्व घटकांसाठी चालवले जाणारे महत्त्वाचे उपक्रम
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {keyServices.map((service, index) => {
              const Icon = service.icon;
              return <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                    <div className="h-48 bg-cover bg-center" style={{
                  backgroundImage: `url(${service.image})`
                }}></div>
                    <div className="p-8 flex-grow">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-4">
                          <Icon size={24} />
                        </div>
                        <h3 className="text-2xl font-bold">{service.title}</h3>
                      </div>
                      <div className="text-gray-600 mb-6">
                        {service.shortDescription.split('\n\n')[0]}...
                      </div>
                      <Button asChild className="mt-auto">
                        <Link to={`/services/${service.id}`}>अधिक माहिती</Link>
                      </Button>
                    </div>
                  </div>;
            })}
            </div>
          </div>
        </section>

        {/* Other Services List */}
        {otherServices.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="container-custom">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-bold mb-4">इतर सेवा क्षेत्रे</h2>
                <p className="text-gray-600">
                  समाजाच्या विविध गरजा पूर्ण करण्यासाठी आम्ही चालवत असलेले उपक्रम
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherServices.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div key={index} className="bg-white rounded-lg shadow p-6 flex flex-col">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-3">
                          <Icon size={20} />
                        </div>
                        <h3 className="text-xl font-bold">{service.title}</h3>
                      </div>
                      <div className="text-gray-600 mb-6 line-clamp-3">
                        {service.shortDescription.split('\n\n')[0]}...
                      </div>
                      <Button asChild variant="outline" className="mt-auto">
                        <Link to={`/services/${service.id}`}>अधिक माहिती</Link>
                      </Button>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Call to Action */}
        <section className="py-16 bg-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-4">आम्हाला मदत हवी आहे का?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              आमच्या सेवांबद्दल अधिक माहिती मिळवण्यासाठी किंवा स्वयंसेवक म्हणून सहभागी होण्यासाठी आम्हाला संपर्क करा.
            </p>
            <Button asChild size="lg" className="px-8 py-6 text-lg">
              <Link to="/contact">संपर्क करा</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default Services;
