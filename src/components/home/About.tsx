
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  return <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              संस्थेचा <span className="text-primary">परिचय</span>
            </h2>
            <p className="text-gray-600 mb-6 text-lg">सकल मराठा परिवार ही संस्था मराठा समाजाच्या शैक्षणिक, व्यवसायिक, नोकरी, आर्थिक आणि वैद्यकीय प्रगतीसाठी कार्यरत आहे. समाजातील प्रत्येक घटकाला मदतीचा हात देण्याचा आमचा संकल्प आहे.</p>
            <p className="text-gray-600 mb-8 text-lg">मराठा तरुण पिढीमध्ये विकासाचे बीज रोवून, समाजाच्या सर्व क्षेत्रात अग्रस्थानी आणणे.</p>
            <Button asChild className="group">
              <Link to="/about" className="flex items-center gap-2">
                अधिक माहितीसाठी
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </Button>
          </div>
          <div className="order-1 md:order-2 relative animate-fade-in">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Volunteers working together" className="w-full h-auto object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary rounded-lg -z-10"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;
