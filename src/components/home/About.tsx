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
            <p className="text-gray-600 mb-6 text-lg">सकल मराठा परिवार (SMP) मराठा समाजाला मुख्यतः शैक्षणिक, व्यवसायिक, नोकरी व आर्थिक क्षेत्रात प्रगती करण्यासाठी सतत प्रयत्नशील राहणारी संस्था असून, सोबतच समाजाचे आपण काहीतरी देणे लागतो या भावनेने वैद्यकीय क्षेत्रात समाजातील सर्व घटकांना सतत मदत करत आहे व भविष्यात करत राहणार आहे. </p>
            <p className="text-gray-600 mb-8 text-lg">सामाजिक उपक्रमांच्या माध्यमातून मराठा तरुण पिढी मध्ये मराठा विकासाचे बीज रोवून एक कट्टर मराठा फळी तयार करणे, हेच आमचे उद्दिष्ट आहे.</p>
            <Button asChild className="group">
              <Link to="/about" className="flex items-center gap-2">
                अधिक माहितीसाठी
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </Button>
          </div>
          <div className="order-1 md:order-2 relative animate-fade-in">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img alt="Volunteers working together" className="w-full h-auto object-cover" src="/lovable-uploads/b30af5e1-7cf5-4972-8ff6-951564aaa94a.jpg" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary rounded-lg -z-10"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;