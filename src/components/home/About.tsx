
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <>
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                संस्थेचा <span className="text-primary">परिचय</span>
              </h2>
              <p className="text-gray-600 mb-6 text-lg">सकल मराठा परिवार (SMP) मराठा समाजाला मुख्यतः शैक्षणिक, व्यवसायिक, नोकरी व आर्थिक क्षेत्रात प्रगती करण्यासाठी सतत प्रयत्नशील राहणारी संस्था असून, सोबतच समाजाचे आपण काहीतरी देणे लागतो या भावनेने वैद्यकीय क्षेत्रात समाजातील सर्व घटकांना सतत मदत करत आहे व भविष्यात करत राहणार आहे. </p>
              
              <p className="text-gray-600 mb-6 text-lg"><strong>मिशन :-</strong> (short term) सामाजिक उपक्रमांच्या माध्यमातून मराठा तरुण पिढी मध्ये मराठा विकासाचे बीज रोवून एक कट्टर मराठा फळी तयार करणे.</p>
              
              <p className="text-gray-600 mb-8 text-lg"><strong>व्हिजन :-</strong> (Long Term) मराठा समाजातील तरुण पिढीला भविष्यात सामाजिक, आर्थिक, राजकीय, शैक्षणिक, नोकरी, व्यावसायिक इत्यादी प्रत्येक क्षेत्रात अग्रस्थानी आणणे.</p>
              
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
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-1 relative animate-fade-in">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <img alt="Community engagement" className="w-full h-auto object-cover" src="/lovable-uploads/16a38d2c-d092-426d-b47c-1383f8c9ef60.jpg" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary rounded-lg -z-10"></div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary rounded-lg -z-10"></div>
            </div>
            <div className="order-2 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                आमचे <span className="text-primary">ध्येय</span>
              </h2>
              <p className="text-gray-600 mb-6 text-lg">आमच्या संघटनेचे सर्वात मोठे ध्येय समाजातील शहरी व ग्रामीण भागातील मराठा वर्गाला मुख्य प्रवाहात आणण्यासाठी कटिबद्धरीत्या प्रयत्न करणे आहे. आम्ही विविध शैक्षणिक कार्यक्रम, आरोग्य शिबिरे, आणि रोजगार निर्मितीच्या संधींमधून समाजाचे सर्वांगीण विकास करण्यासाठी प्रयत्नशील आहोत.</p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="min-w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white mt-1">
                    <span className="text-sm">1</span>
                  </div>
                  <p className="text-gray-600">शैक्षणिक मार्गदर्शन आणि शिष्यवृत्ती प्रोत्साहन</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="min-w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white mt-1">
                    <span className="text-sm">2</span>
                  </div>
                  <p className="text-gray-600">आर्थिक व कौशल्य विकास प्रशिक्षण</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="min-w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white mt-1">
                    <span className="text-sm">3</span>
                  </div>
                  <p className="text-gray-600">समाजाच्या सर्व वर्गांमध्ये एकता आणि सामंजस्य निर्माण करणे</p>
                </div>
              </div>
              
              <Button asChild className="group mt-8">
                <Link to="/services" className="flex items-center gap-2">
                  आमच्या सेवा
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
