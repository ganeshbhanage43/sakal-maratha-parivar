import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/lovable-uploads/6ceb126d-fd90-413b-bc8c-d5c2690b6231.png"
                alt="सकल मराठा परिवार (SMP) Logo"
                className="h-12 w-auto"
              />
              <span className="font-heading font-bold text-xl">सकल मराठा परिवार (SMP)</span>
            </div>
            <p className="text-gray-300 mb-6">
              Empowering Lives, Building Futures. We work to create opportunities and provide support for those in need.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Twitter size={20} />
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
                <Link to="/events" className="text-gray-300 hover:text-primary transition-colors">Events</Link>
              </li>
              <li>
                <Link to="/join" className="text-gray-300 hover:text-primary transition-colors">सामील व्हा</Link>
              </li>
              <li>
                <Link to="/donate" className="text-gray-300 hover:text-primary transition-colors">Donate</Link>
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
                <Link to="/services/education" className="text-gray-300 hover:text-primary transition-colors">Education Support</Link>
              </li>
              <li>
                <Link to="/services/healthcare" className="text-gray-300 hover:text-primary transition-colors">Healthcare Access</Link>
              </li>
              <li>
                <Link to="/services/employment" className="text-gray-300 hover:text-primary transition-colors">Employment Assistance</Link>
              </li>
              <li>
                <Link to="/services/community" className="text-gray-300 hover:text-primary transition-colors">Community Development</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-300">123 Charity Lane, Compassion City, State 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-primary flex-shrink-0" />
                <a href="mailto:info@empowerngo.org" className="text-gray-300 hover:text-primary transition-colors">
                  info@empowerngo.org
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Clock size={20} className="text-primary flex-shrink-0" />
                <span className="text-gray-300">Mon-Fri: 9:00 AM - 5:00 PM</span>
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
    </footer>
  );
};

export default Footer;
