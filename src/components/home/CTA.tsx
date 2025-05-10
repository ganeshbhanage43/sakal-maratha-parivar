
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { HeartHandshake, Users, Mail } from 'lucide-react';

const CTA: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">सामील व्हा</h2>
          <p className="text-gray-600 text-lg">सोशल मीडियाच्या माध्यमातून सकल मराठा परिवार मधील सदस्य व प्रतिनिधींना संपर्क करू शकता. </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Donate Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center transition-transform hover:-translate-y-2 border-t-4 border-secondary">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-secondary">
              <HeartHandshake size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4">आर्थिक साहाय्य </h3>
            <p className="text-gray-600 mb-6">आमच्यासोबत काम करत असताना आपल्याला कोणत्याही अनिवार्य प्रकारचे आर्थिक सहाय्य करण्याची गरज नाही, यामध्ये फक्त आपल्या सोयीनुसार वेळेची गुंतवणूक करणे महत्त्वाचे आहे. (स्वेच्छेनुसार केलेले साहाय्य नक्कीच स्वीकारले जाईल.)</p>
            <Button asChild className="bg-secondary hover:bg-secondary-light w-full">
              <Link to="/donate" onClick={scrollToTop}>Donate Now</Link>
            </Button>
          </div>

          {/* Volunteer Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center transition-transform hover:-translate-y-2 border-t-4 border-primary">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4">आमच्यासोबत सामील व्हा</h3>
            <p className="text-gray-600 mb-6">संघटनेमध्ये येण्याआधी आपली सामाजिक, राजकीय, शैक्षणिक, व्यावसायिक, आर्थिक पार्श्वभूमी काहीही असली तरी चालेल, फक्त ज्यावेळी सकल मराठा परिवार संघटनेसोबत जोडले जाल त्यावेळी स्वतःच्या वैयक्तिक महत्त्वकांक्षा आणि स्वार्थ यांना बाजूला ठेवून समाजाप्रती आपले कर्तव्य निभावण्याची तयारी असावी.</p>
            <Button asChild className="w-full">
              <Link to="/join" onClick={scrollToTop}>Join Us</Link>
            </Button>
          </div>

          {/* Contact Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center transition-transform hover:-translate-y-2 border-t-4 border-accent">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
              <Mail size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4">संपर्क</h3>
            <p className="text-gray-600 mb-6">मराठ्यांनी मिळून मराठ्यांच्या प्रगतीला हातभार लावूया आणि मराठा विकासाचे उद्दिष्ट प्राप्त करूया.</p>
            <Button asChild variant="outline" className="w-full hover:bg-accent hover:text-white hover:border-accent">
              <Link to="/contact" onClick={scrollToTop}>Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};

export default CTA;
