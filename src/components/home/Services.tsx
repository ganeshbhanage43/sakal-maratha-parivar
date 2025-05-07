
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { servicesData } from '@/data/servicesData';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  link
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2 group">
      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 whitespace-pre-line">{description}</p>
      <Button asChild variant="outline" className="group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors duration-300">
        <Link to={link}>अधिक माहितीसाठी</Link>
      </Button>
    </div>
  );
};

const Services: React.FC = () => {
  return <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">संस्थेचे सेवाकार्य</h2>
          <p className="text-gray-600 text-lg">सकल मराठा परिवार ही संस्था मराठा समाजाच्या शैक्षणिक, व्यवसायिक, नोकरी, आर्थिक आणि वैद्यकीय प्रगतीसाठी कार्यरत आहे. समाजातील प्रत्येक घटकाला मदतीचा हात देण्याचा आमचा संकल्प आहे.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {servicesData.map((service, index) => {
          const Icon = service.icon;
          return <ServiceCard key={index} icon={<Icon size={32} />} title={service.title} description={service.shortDescription} link={`/services/${service.id}`} />;
        })}
        </div>
      </div>
    </section>;
};

export default Services;
