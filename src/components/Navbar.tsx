import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container-custom flex justify-between items-center py-4">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/lovable-uploads/6ceb126d-fd90-413b-bc8c-d5c2690b6231.png" alt="सकल मराठा परिवार (SMP) Logo" className="h-12 w-auto" />
          <span className="font-heading text-xl font-bold text-left">सकल मराठा परिवार (SMP)</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            <Link to="/" className="font-medium hover:text-primary transition-colors">मुखपृष्ठ</Link>
            <Link to="/about" className="font-medium hover:text-primary transition-colors">आमच्याबद्दल थोडक्यात</Link>
            <Link to="/services" className="font-medium hover:text-primary transition-colors">संस्थेचे सेवाकार्य</Link>
            <Link to="/events" className="font-medium hover:text-primary transition-colors">Events</Link>
            <Link to="/join-us" className="font-medium hover:text-primary transition-colors">सामील व्हा</Link>
            <Link to="/contact" className="font-medium hover:text-primary transition-colors">संपर्क</Link>
          </div>
          <Button asChild className="btn-primary">
            <Link to="/donate">Donate Now</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 hover:text-primary focus:outline-none" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div className={cn("md:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out transform pt-20", isOpen ? "translate-x-0" : "translate-x-full")}>
        <div className="flex flex-col items-center space-y-6 py-8">
          <Link to="/" className="font-medium text-lg hover:text-primary transition-colors" onClick={toggleMenu}>
            मुखपृष्ठ
          </Link>
          <Link to="/about" className="font-medium text-lg hover:text-primary transition-colors" onClick={toggleMenu}>
            आमच्याबद्दल थोडक्यात
          </Link>
          <Link to="/services" className="font-medium text-lg hover:text-primary transition-colors" onClick={toggleMenu}>
            संस्थेचे सेवाकार्य
          </Link>
          <Link to="/events" className="font-medium text-lg hover:text-primary transition-colors" onClick={toggleMenu}>
            Events
          </Link>
          <Link to="/join-us" className="font-medium text-lg hover:text-primary transition-colors" onClick={toggleMenu}>
            सामील व्हा
          </Link>
          <Link to="/contact" className="font-medium text-lg hover:text-primary transition-colors" onClick={toggleMenu}>
            संपर्क
          </Link>
          <Button asChild className="btn-primary mt-4">
            <Link to="/donate" onClick={toggleMenu}>Donate Now</Link>
          </Button>
        </div>
      </div>
    </nav>;
};

export default Navbar;
