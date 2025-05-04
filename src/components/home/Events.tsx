
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, MapPin, Clock } from 'lucide-react';

interface EventCardProps {
  image: string;
  title: string;
  date: string;
  time: string;
  location: string;
  link: string;
}

const EventCard: React.FC<EventCardProps> = ({
  image,
  title,
  date,
  time,
  location,
  link
}) => {
  return <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col group">
      <div className="relative overflow-hidden">
        <img src={image} alt={title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
          <Calendar size={14} />
          <span>{date}</span>
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{title}</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <Clock size={16} className="mr-2" />
          <span>{time}</span>
        </div>
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin size={16} className="mr-2" />
          <span>{location}</span>
        </div>
        <div className="mt-auto">
          <Button asChild variant="ghost" className="group">
            <Link to={link} className="flex items-center text-primary font-medium">
              अधिक माहितीसाठी
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </div>;
};

const Events: React.FC = () => {
  const events = [{
    image: "https://images.unsplash.com/photo-1582213782179-e0d4d3cce817?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Annual Charity Gala",
    date: "May 15, 2025",
    time: "6:00 PM - 10:00 PM",
    location: "Grand Hotel, Downtown",
    link: "/events/charity-gala"
  }, {
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Community Health Fair",
    date: "June 2, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "City Park",
    link: "/events/health-fair"
  }, {
    image: "https://images.unsplash.com/photo-1475483768296-6163e08872a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Youth Leadership Workshop",
    date: "June 20, 2025",
    time: "9:00 AM - 3:00 PM",
    location: "Community Center",
    link: "/events/leadership-workshop"
  }];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            आगामी <span className="text-primary">कार्यक्रम</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            आमच्या आगामी कार्यक्रमांमध्ये सहभागी व्हा आणि समाजाप्रति आपले योगदान द्या.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
