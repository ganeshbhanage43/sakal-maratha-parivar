
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen, Heart, Briefcase, Home } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2 group">
      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <Button asChild variant="outline" className="group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors duration-300">
        <Link to={link}>Learn More</Link>
      </Button>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <BookOpen size={32} />,
      title: "Education Support",
      description: "We provide educational resources, mentoring, and scholarship opportunities to students of all ages.",
      link: "/services/education"
    },
    {
      icon: <Heart size={32} />,
      title: "Healthcare Access",
      description: "Our healthcare initiatives focus on providing access to medical services and health education.",
      link: "/services/healthcare"
    },
    {
      icon: <Briefcase size={32} />,
      title: "Employment Assistance",
      description: "We offer job training, resume building, and career counseling to help individuals find employment.",
      link: "/services/employment"
    },
    {
      icon: <Home size={32} />,
      title: "Community Development",
      description: "Building stronger communities through local initiatives, workshops, and infrastructure projects.",
      link: "/services/community"
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
          <p className="text-gray-600 text-lg">
            We provide a range of services to support our community members and create lasting positive impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
