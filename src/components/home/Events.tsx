
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Users } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

// Define the FC (Functional Component) for Events properly
const Events: React.FC = () => {
  const navigate = useNavigate();

  const handleViewAllClick = () => {
    navigate("/events");
    window.scrollTo(0, 0);
  };

  const upcomingEvents = [
    {
      id: 1,
      title: "आरक्षण बचाओ रैली",
      date: "2023-05-15",
      location: "पुणे, महाराष्ट्र",
      attendees: 500
    },
    {
      id: 2,
      title: "शैक्षणिक मार्गदर्शन शिबिर",
      date: "2023-06-22",
      location: "नागपूर, महाराष्ट्र",
      attendees: 300
    },
    {
      id: 3,
      title: "रक्तदान शिबिर",
      date: "2023-07-10",
      location: "मुंबई, महाराष्ट्र",
      attendees: 200
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-primary">कार्यक्रम</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => (
            <Card key={event.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">{event.title}</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-primary" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={18} className="text-primary" />
                    <span>{event.attendees} उपस्थिती</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button onClick={handleViewAllClick} variant="outline" className="gap-2">
            सर्व कार्यक्रम पहा
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Events;
