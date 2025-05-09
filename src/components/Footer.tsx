import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Clock } from 'lucide-react';
const Footer: React.FC = () => {
  return <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img src="/lovable-uploads/6ceb126d-fd90-413b-bc8c-d5c2690b6231.png" alt="सकल मराठा परिवार (SMP) Logo" className="h-12 w-auto" />
              <span className="font-heading font-bold text-xl">सकल मराठा परिवार (SMP)</span>
            </div>
            <p className="text-gray-300 mb-6">मराठ्यांनी मिळून मराठ्यांच्या प्रगतीला हातभार लावूया आणि मराठा विकासाचे उद्दिष्ट प्राप्त करूया.</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/groups/730673071981150/?ref=share" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/sakal_maratha_pariwar_npo?igsh=MWdrcWZzb3pkOG5pbg==" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://whatsapp.com/channel/0029Vau2WbNJf05Ycu7UAI2r" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M12 17a5 5 0 0 1-5-5v-1a5 5 0 0 1 10 0v1a5 5 0 0 1-5 5Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition-colors">आमच्याबद्दल थोडक्यात</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary transition-colors">संस्थेचे सेवाकार्य</Link>
              </li>
              <li>
                <Link to="/join" className="text-gray-300 hover:text-primary transition-colors">सामील व्हा</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">संपर्क</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/education" className="text-gray-300 hover:text-primary transition-colors">शिक्षण क्षेत्र</Link>
              </li>
              <li>
                <Link to="/services/healthcare" className="text-gray-300 hover:text-primary transition-colors">आरोग्य क्षेत्र</Link>
              </li>
              <li>
                <Link to="/services/employment" className="text-gray-300 hover:text-primary transition-colors">नोकरी व रोजगार क्षेत्र</Link>
              </li>
              <li>
                <Link to="/services/community" className="text-gray-300 hover:text-primary transition-colors">उद्योजकता विकास</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-300">S. No 247/3 प्रभात नगर , वहाडणे कॉलनी, दिंडोरी रोड, नाशिक, महाराष्ट्र, भारत, ४२२००४.</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-primary flex-shrink-0" />
                <a href="mailto:sakalmarathaparivar.96@gmail.com" className="text-gray-300 hover:text-primary transition-colors">sakalmarathaparivar.96@gmail.com</a>
              </li>
              <li className="flex items-center space-x-3">
                <Clock size={20} className="text-primary flex-shrink-0" />
                <span className="text-gray-300">24/7, 365 days</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-950 py-6">
        <div className="container-custom text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} सकल मराठा परिवार (SMP). All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;